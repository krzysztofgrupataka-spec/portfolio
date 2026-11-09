// Elemental shared helpers; every call loads fonts before mutation.
await Promise.all(["Archivo","Fraunces","Hanken Grotesk"].map(family=>figma.loadFontAsync({family})));
const variables=await figma.variables.getLocalVariablesAsync();
const V=Object.fromEntries(variables.map(v=>[v.name,v]));
const styles=await figma.getLocalTextStylesAsync();
const S=Object.fromEntries(styles.map(s=>[s.name.replace("Elemental/",""),s]));
const collections=await figma.variables.getLocalVariableCollectionsAsync();
const C=Object.fromEntries(collections.map(c=>[c.name.split(" / ")[1],c]));
const created=[];
function keep(n){created.push(n.id);return n;}
function fill(n,v){n.fills=[figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0}},"color",V[v])];}
function stroke(n,v){n.strokes=[figma.variables.setBoundVariableForPaint({type:"SOLID",color:{r:0,g:0,b:0}},"color",V[v])];}
function bind(n,field,v){n.setBoundVariable(field,V[v]);}
function pad(n,v){for(const side of ["paddingTop","paddingBottom","paddingLeft","paddingRight"])bind(n,side,v);}
function mode(n,collection,name){const c=C[collection];n.setExplicitVariableModeForCollection(c,c.modes.find(m=>m.name===name).modeId);}
function frame(parent,name,width,direction="VERTICAL",gap="space/5",bg){
 const n=keep(figma.createAutoLayout(direction));n.name=name;n.fills=[];n.resize(width,100);
 n.primaryAxisSizingMode=direction==="HORIZONTAL"?"FIXED":"AUTO";n.counterAxisSizingMode=direction==="HORIZONTAL"?"AUTO":"FIXED";n.clipsContent=false;
 if(gap)bind(n,"itemSpacing",gap);if(bg)fill(n,bg);if(parent)parent.appendChild(n);return n;
}
function component(name,width,direction="VERTICAL"){
 const n=keep(figma.createComponent());n.name=name;n.layoutMode=direction;n.fills=[];
 n.resize(width,100);n.primaryAxisSizingMode="AUTO";n.counterAxisSizingMode="FIXED";n.clipsContent=false;return n;
}
async function txt(parent,name,value,style="Text/Body",color="text/primary",width){
 const n=keep(figma.createText());n.name=name;await n.setTextStyleIdAsync(S[style].id);
 n.characters=value;fill(n,color);parent.appendChild(n);
 if(width){n.textAutoResize="HEIGHT";n.resize(width,n.height);n.layoutSizingHorizontal="FIXED";}
 else {n.textAutoResize="WIDTH_AND_HEIGHT";}
 return n;
}
function textProp(comp,n,name){const key=comp.addComponentProperty(name,"TEXT",n.characters);n.componentPropertyReferences={characters:key};return key;}
function boolProp(comp,n,name,value){const key=comp.addComponentProperty(name,"BOOLEAN",value);n.componentPropertyReferences={...n.componentPropertyReferences,visible:key};n.visible=value;return key;}
function inst(comp,parent,name){const n=keep(comp.createInstance());if(parent)parent.appendChild(n);if(name)n.name=name;return n;}
function setText(instance,name,value){const key=Object.keys(instance.componentProperties).find(k=>k.split("#")[0]===name);if(key)instance.setProperties({[key]:value});}
function allIds(root){return [root.id,...root.findAll(()=>true).map(n=>n.id)];}
function focus(comp){
 const ring=keep(figma.createFrame());ring.name="Focus ring";comp.appendChild(ring);
 ring.layoutPositioning="ABSOLUTE";ring.fills=[];ring.clipsContent=false;ring.resize(comp.width,comp.height);
 ring.x=0;ring.y=0;ring.constraints={horizontal:"STRETCH",vertical:"STRETCH"};
 ring.cornerRadius=comp.cornerRadius;
 ring.effects=[
 figma.variables.setBoundVariableForEffect({type:"DROP_SHADOW",color:{r:1,g:1,b:1,a:1},offset:{x:0,y:0},radius:0,spread:2,visible:true,blendMode:"NORMAL"},"color",V["focus/light"]),
 figma.variables.setBoundVariableForEffect({type:"DROP_SHADOW",color:{r:0,g:0,b:0,a:1},offset:{x:0,y:0},radius:0,spread:4,visible:true,blendMode:"NORMAL"},"color",V["focus/dark"])];
 // A transparent fill can prevent shadow rendering; strokes define the ring's geometry.
 stroke(ring,"focus/light");ring.strokeWeight=2;ring.strokeAlign="OUTSIDE";
 boolProp(comp,ring,"Focused",false);
}
// Variant placement adapted from createComponentWithVariants.js.
function combine(name,variants,x,y,columns=4,gap=32){
 const set=keep(figma.combineAsVariants(variants,figma.currentPage));set.name=name;
 set.description="Elemental 0.2. Powiązane tokeny, edytowalne właściwości. Motyw dziedziczony z rodzica.";
 const widths=variants.map(n=>n.width),heights=variants.map(n=>n.height),cw=Math.max(...widths)+gap,rh=Math.max(...heights)+gap;
 variants.forEach((n,i)=>{n.x=32+(i%columns)*cw;n.y=32+Math.floor(i/columns)*rh;});
 set.resizeWithoutConstraints(columns*cw+32,Math.ceil(variants.length/columns)*rh+32);set.x=x;set.y=y;set.fills=[];
 return set;
}
