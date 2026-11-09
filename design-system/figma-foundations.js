// Elemental foundation builder. Adapted from createVariableCollection.js skill helper.
const ids=[];
async function createVariableCollection(name,modeNames) {
  const collection=figma.variables.createVariableCollection(name),modeIds={};
  collection.renameMode(collection.defaultModeId,modeNames[0]);modeIds[modeNames[0]]=collection.defaultModeId;
  for(const name of modeNames.slice(1))modeIds[name]=collection.addMode(name);
  return {collection,modeIds};
}
if((await figma.variables.getLocalVariableCollectionsAsync()).length)throw Error("Foundations already exist; inspect before retry.");
const pages={};figma.currentPage.name="00 Read me";pages["00 Read me"]=figma.currentPage.id;ids.push(figma.currentPage.id);
for(const name of ["01 Foundations","02 Components","03 Compositions","04 QA"]){const p=figma.createPage();p.name=name;pages[name]=p.id;ids.push(p.id);}
const primitive=await createVariableCollection("Elemental / Primitives",["Value"]);
const color=await createVariableCollection("Elemental / Semantic color",["Light","Dark"]);
const layout=await createVariableCollection("Elemental / Layout",["Mobile","Tablet","Desktop"]);
const rgb=h=>({r:parseInt(h.slice(0,2),16)/255,g:parseInt(h.slice(2,4),16)/255,b:parseInt(h.slice(4,6),16)/255});
const tokens=[
["surface/page","surface-cream","f4eeda","221c20"],["surface/section","surface-paper","fcfaf2","2b2429"],["surface/subtle","surface-mist","eae2cc","342c31"],
["border/decorative","line","ddd3b8","453b41"],["border/control","border-control","6f6168","b1a593"],
["text/primary","ink","332a2d","f1ead6"],["text/secondary","ink-muted","6f6168","b1a593"],
["surface/butter","butter","ecdfa6","ecdfa6"],["surface/breeze","breeze","b6c9d8","bcd0de"],["surface/brand","cocoa","453a3e","6b565c"],
["text/on-light","on-light","332a2d","332a2d"],["text/on-brand","on-dark","f4eeda","f4eeda"],["text/on-brand-secondary","on-brand-muted","d9cfc5","e5dcca"],
["focus/accent","accent","3f6c88","8fb6cd"],["status/success-text","positive","376448","7bbd94"],["status/warning-text","caution","795610","e3c070"],["status/error-text","critical","963d33","e58a7c"],
["focus/light","focus-light","fcfaf2","fcfaf2"],["focus/dark","focus-dark","332a2d","332a2d"]];
const pv={},vars={};
function variable(name,coll,type,scopes,css){const v=figma.variables.createVariable(name,coll,type);v.scopes=scopes;v.setVariableCodeSyntax("WEB",`var(--${css})`);vars[name]=v;return v;}
for(const h of [...new Set(tokens.flatMap(t=>t.slice(2)))]){const v=variable("palette/"+h,primitive.collection,"COLOR",[],"palette-"+h);v.setValueForMode(primitive.collection.defaultModeId,rgb(h));pv[h]=v;}
for(const [name,css,light,dark]of tokens){const scopes=name.startsWith("text/")||name.startsWith("status/")?["TEXT_FILL"]:name.startsWith("border/")?["STROKE_COLOR"]:name.startsWith("focus/")?["STROKE_COLOR","EFFECT_COLOR"]:["FRAME_FILL","SHAPE_FILL"];
const v=variable(name,color.collection,"COLOR",scopes,css);v.setValueForMode(color.modeIds.Light,{type:"VARIABLE_ALIAS",id:pv[light].id});v.setValueForMode(color.modeIds.Dark,{type:"VARIABLE_ALIAS",id:pv[dark].id});}
for(const [name,target,css]of [["action/primary/bg","surface/brand","cocoa"],["action/primary/text","text/on-brand","on-dark"],["action/secondary/bg","surface/breeze","breeze"],["action/secondary/text","text/on-light","on-light"],["action/warm/bg","surface/butter","butter"],["action/warm/text","text/on-light","on-light"]]){
const v=variable(name,color.collection,"COLOR",name.endsWith("text")?["TEXT_FILL"]:["FRAME_FILL","SHAPE_FILL"],css);
for(const mode of Object.values(color.modeIds))v.setValueForMode(mode,{type:"VARIABLE_ALIAS",id:vars[target].id});}
for(const [i,n]of [4,8,12,16,24,32,48,64,96].entries()){const v=variable("space/"+(i+1),primitive.collection,"FLOAT",["GAP"],"space-"+(i+1));v.setValueForMode(primitive.collection.defaultModeId,n);}
for(const [name,n]of Object.entries({none:0,sm:8,md:16,lg:24,xl:40,pill:999})){const v=variable("radius/"+name,primitive.collection,"FLOAT",["CORNER_RADIUS"],"radius-"+name);v.setValueForMode(primitive.collection.defaultModeId,n);}
for(const [name,css,values]of [["page/gutter","page-gutter",[20,32,48]],["grid/gap","grid-gap",[16,24,24]],["section/gap","section-gap",[64,96,96]],["panel/padding","panel-padding",[24,32,32]],["contact/padding","contact-padding",[24,32,48]]]){
const v=variable(name,layout.collection,"FLOAT",["GAP"],css);Object.values(layout.modeIds).forEach((m,i)=>v.setValueForMode(m,values[i]));}
await Promise.all(["Archivo","Fraunces","Hanken Grotesk"].map(family=>figma.loadFontAsync({family})));
const axes=figma.getFontFamilyVariationAxes("Fraunces");
const styles={};
function style(name,family,fontStyle,size,lh,tracking=0,weight){
  const s=figma.createTextStyle();s.name="Elemental/"+name;
  s.fontName={family,style:fontStyle,...(weight?{variationSettings:{wght:weight}}:{})};
  s.fontSize=size;s.lineHeight={unit:"PIXELS",value:lh};s.letterSpacing={unit:"PERCENT",value:tracking};styles[name]=s.id;return s;
}
for(const [i,vp]of ["Mobile","Tablet","Desktop"].entries()){
  for(const [name,family,fs,sizes,lines,track,weight]of [
  ["Display/XL","Archivo","Bold",[48,80,120],[48,80,120],-2],
  ["Display/L","Archivo","Bold",[40,56,72],[42,59,76],-1.5],
  ["Display/M","Archivo","SemiBold",[28,36,44],[31,40,48],-1],
  ["Editorial/Headline","Fraunces","Regular",[28,32,36],[34,38,43],0,500],
  ["Editorial/Intro","Fraunces","Regular",[20,24,28],[28,34,39],0]]){
    const s=style(name+"/"+vp,family,fs,sizes[i],lines[i],track,weight);
    if(name.startsWith("Display"))s.textCase="UPPER";
  }
}
for(const [name,family,fs,size,line,tracking,weight]of [
["Editorial/Subhead","Fraunces","Regular",24,30,0,500],["Editorial/Quote","Fraunces","Italic",22,31,0],
["Text/Lead","Hanken Grotesk","Regular",20,31,0],["Text/Body","Hanken Grotesk","Regular",16,26,0],
["Text/Small","Hanken Grotesk","Regular",14,21,0],["Text/Caption","Hanken Grotesk","Regular",13,19,0],
["UI/Label","Archivo","SemiBold",12,16,10],["UI/Button","Archivo","SemiBold",14,16,1]]){const s=style(name,family,fs,size,line,tracking,weight);if(name==="UI/Label")s.textCase="UPPER";}
const effect=figma.createEffectStyle();effect.name="Elemental/shadow/overlay";effect.effects=[{type:"DROP_SHADOW",color:{...rgb("332a2d"),a:.2},offset:{x:0,y:20},radius:60,spread:0,visible:true,blendMode:"NORMAL"}];
return {createdNodeIds:ids,pages,collections:{primitive:primitive.collection.id,color:color.collection.id,layout:layout.collection.id},modes:{color:color.modeIds,layout:layout.modeIds},variables:Object.fromEntries(Object.entries(vars).map(([n,v])=>[n,v.id])),styles,effectStyleId:effect.id,frauncesAxes:axes,variableCount:Object.keys(vars).length,textStyleCount:Object.keys(styles).length};
