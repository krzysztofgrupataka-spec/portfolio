// Elemental component families.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("2:3"));
if(figma.currentPage.children.length)throw Error("Components exist; inspect before retry.");
const sets={},components={},media={};
let cursorY=200;
for(const kind of ["Typography","Editorial","Grid"]){
 const c=component("Media/"+kind,600);pad(c,"space/6");bind(c,"itemSpacing","space/5");
 fill(c,kind==="Typography"?"surface/butter":kind==="Editorial"?"surface/breeze":"surface/section");
 const fg=kind==="Grid"?"text/primary":"text/on-light";
 await txt(c,"Caption","ELEMENTAL / STUDIUM FORMY","UI/Label",fg);
 const t=await txt(c,"Artwork",kind==="Typography"?"Aa\n012345":"Editorial"===kind?"Materia.\nForma.\nZnaczenie.":"01—02\n03—04","Typography"===kind?"Display/L/Desktop":"Editorial/Headline/Desktop",fg,536);
 t.textCase="ORIGINAL";
 await txt(c,"Note",kind==="Typography"?"Archivo / 700":"Editorial"===kind?"Fraunces / 500":"Rytm i proporcje","Text/Caption",fg);
 c.x=200+Object.keys(media).length*680;c.y=cursorY;c.description="Edytowalny materiał demonstracyjny. Zastąp własnym materiałem projektu przez Image instance swap.";
 media[kind]=c;components[c.name]=c.id;
}
cursorY+=520;
const buttons={};
for(const size of ["MD","LG"]){
 const variants=[];
 for(const appearance of ["Primary","Secondary","Warm","Outline","Ghost"]){
 for(const state of ["Default","Hover","Pressed","Disabled"]){
 const c=component(`Appearance=${appearance}, State=${state}`,180,"HORIZONTAL");
 c.primaryAxisSizingMode="AUTO";c.counterAxisSizingMode="AUTO";c.primaryAxisAlignItems="CENTER";c.counterAxisAlignItems="CENTER";
 c.paddingTop=size==="MD"?12:16;c.paddingBottom=c.paddingTop;c.paddingLeft=size==="MD"?20:24;c.paddingRight=c.paddingLeft;
 bind(c,"itemSpacing","space/2");bind(c,"cornerRadius","radius/pill");
 const prefix=appearance==="Primary"?"primary":appearance==="Secondary"?"secondary":appearance==="Warm"?"warm":null;
 if(prefix)fill(c,`action/${prefix}/bg`);if(appearance==="Outline"){stroke(c,"border/control");c.strokeWeight=1;}
 const label=await txt(c,"Label","Zobacz projekt","UI/Button",prefix?`action/${prefix}/text`:"text/primary");
 textProp(c,label,"Label");
 if(state==="Hover"||state==="Pressed"){label.textDecoration="UNDERLINE";if(state==="Pressed")label.textDecorationThickness={unit:"PIXELS",value:2};}
 const arrow=await txt(c,"Trailing icon","↗","UI/Button",prefix?`action/${prefix}/text`:"text/primary");
 boolProp(c,arrow,"Trailing icon",false);
 if(state==="Disabled")c.opacity=.5;
 focus(c);variants.push(c);buttons[`${size}/${appearance}/${state}`]=c;
 }
 }
 const set=combine("Button/"+size,variants,200,cursorY,4);sets[set.name]=set.id;cursorY+=set.height+120;
}
const tags=[];
for(const tone of ["Neutral","Butter","Breeze","Cocoa"]){
 const c=component("Tone="+tone,140,"HORIZONTAL");c.counterAxisSizingMode="AUTO";c.primaryAxisSizingMode="AUTO";
 c.paddingTop=8;c.paddingBottom=8;c.paddingLeft=16;c.paddingRight=16;bind(c,"cornerRadius","radius/pill");
 fill(c,tone==="Neutral"?"surface/subtle":tone==="Cocoa"?"surface/brand":"surface/"+tone.toLowerCase());
 const t=await txt(c,"Label","UI / UX","UI/Label",tone==="Cocoa"?"text/on-brand":tone==="Neutral"?"text/primary":"text/on-light");textProp(c,t,"Label");tags.push(c);
}
const tagSet=combine("Tag",tags,200,cursorY,4);sets.Tag=tagSet.id;cursorY+=tagSet.height+120;
const works={};
for(const format of ["Landscape","Portrait","Wide"]){
 const variants=[];
 for(const tone of ["Butter","Breeze","Cocoa","Paper"])for(const state of ["Default","Hover","Pressed"]){
  const c=component(`Tone=${tone}, State=${state}`,424);pad(c,"panel/padding");bind(c,"itemSpacing","space/5");bind(c,"cornerRadius","radius/md");
  const fg=tone==="Cocoa"?"text/on-brand":tone==="Paper"?"text/primary":"text/on-light";
  fill(c,tone==="Cocoa"?"surface/brand":tone==="Paper"?"surface/section":"surface/"+tone.toLowerCase());
  const meta=frame(c,"Meta",376,"HORIZONTAL","space/2");meta.layoutSizingHorizontal="FILL";meta.primaryAxisAlignItems="SPACE_BETWEEN";
  for(const [name,val]of [["Index","01"],["Discipline","STUDIUM FORMY"],["Year","2026"]]){
   const t=await txt(meta,name,val,"UI/Label",tone==="Cocoa"?"text/on-brand-secondary":fg);textProp(c,t,name);
  }
  const crop=frame(c,"Media",376,"VERTICAL",null);crop.resize(376,format==="Portrait"?501:format==="Wide"?212:282);crop.primaryAxisSizingMode="FIXED";crop.layoutSizingHorizontal="FILL";crop.clipsContent=true;
  const m=inst(media[tone==="Cocoa"?"Editorial":tone==="Paper"?"Grid":"Typography"],crop,"Artwork");
  m.resize(376,crop.height);m.layoutSizingHorizontal="FILL";m.layoutSizingVertical="FILL";
  const swap=c.addComponentProperty("Image","INSTANCE_SWAP",media.Typography.id);m.componentPropertyReferences={mainComponent:swap};
  const t=await txt(c,"Title","Materia i forma","Display/M/Mobile",fg,376);t.textCase="ORIGINAL";t.layoutSizingHorizontal="FILL";textProp(c,t,"Title");
  if(state!=="Default"){t.textDecoration="UNDERLINE";if(state==="Pressed")t.textDecorationThickness={unit:"PIXELS",value:3};}
  await txt(c,"Link label","Zobacz projekt ↗","Text/Caption",fg);
  focus(c);variants.push(c);works[`${format}/${tone}/${state}`]=c;
 }
 const set=combine("WorkBlock/"+format,variants,200,cursorY,3);sets[set.name]=set.id;cursorY+=set.height+120;
}
const heroes=[],contacts=[];
for(const vp of ["Mobile","Tablet","Desktop"]){
 const w=vp==="Mobile"?350:vp==="Tablet"?770:1344;
 const c=component(`Viewport=${vp}`,w);bind(c,"itemSpacing","space/5");
 for(const [name,val,sty,col,tw]of [
 ["Role","PORTFOLIO / UX & UI","UI/Label","text/secondary",w],
 ["Intro","Projektowanie zaczyna się od uważnego spojrzenia.","Editorial/Intro/"+vp,"text/primary",Math.min(w,600)],
 ["Name","ELEMENTAL","Display/XL/"+vp,"text/primary",w]]){
  if(name==="Name"){const spacer=frame(c,"Editorial pause",w,"VERTICAL",null);spacer.resize(w,vp==="Mobile"?24:72);spacer.primaryAxisSizingMode="FIXED";}
  const t=await txt(c,name,val,sty,col,tw);textProp(c,t,name);
 }
 const cta=inst(buttons["MD/Primary/Default"],c,"CTA");setText(cta,"Label","Porozmawiajmy");
 heroes.push(c);
 for(const action of ["Secondary","Warm"]){
 const contact=component(`Viewport=${vp}, Action=${action}`,w,vp==="Mobile"?"VERTICAL":"HORIZONTAL");pad(contact,"contact/padding");bind(contact,"itemSpacing","space/5");bind(contact,"cornerRadius","radius/lg");fill(contact,"surface/brand");
 const copy=frame(contact,"Copy",vp==="Mobile"?302:Math.min(800,w-260),"VERTICAL","space/2");
 const lab=await txt(copy,"Label","KONTAKT","UI/Label","text/on-brand-secondary");textProp(contact,lab,"Label");
 const title=await txt(copy,"Title","Porozmawiajmy\no projekcie.","Display/M/"+vp,"text/on-brand",copy.width);title.textCase="ORIGINAL";textProp(contact,title,"Title");
 const email=await txt(copy,"Email","hello@example.com","Text/Body","text/on-brand",copy.width);textProp(contact,email,"Email");
 const btn=inst(buttons[`MD/${action}/Default`],contact,"CTA");setText(btn,"Label","Napisz do mnie");
 contact.primaryAxisAlignItems="SPACE_BETWEEN";contact.counterAxisAlignItems=vp==="Mobile"?"MIN":"CENTER";
 contacts.push(contact);
 }
}
const hs=combine("Hero",heroes,200,cursorY,1);sets.Hero=hs.id;cursorY+=hs.height+120;
const cs=combine("Contact",contacts,200,cursorY,2);sets.Contact=cs.id;cursorY+=cs.height+120;
const swatches=[];
for(const tone of ["Butter","Breeze","Cocoa","Paper"]){
 const c=component("Tone="+tone,260);pad(c,"space/5");bind(c,"itemSpacing","space/2");bind(c,"cornerRadius","radius/md");
 fill(c,tone==="Cocoa"?"surface/brand":tone==="Paper"?"surface/section":"surface/"+tone.toLowerCase());
 const fg=tone==="Cocoa"?"text/on-brand":tone==="Paper"?"text/primary":"text/on-light";
 const t=await txt(c,"Name",tone,"Editorial/Subhead",fg);textProp(c,t,"Name");
 const value=await txt(c,"Value","Semantic / "+tone,"Text/Caption",fg);textProp(c,value,"Value");swatches.push(c);
}
const ss=combine("ColorSwatch",swatches,200,cursorY,4);sets.ColorSwatch=ss.id;
return {createdNodeIds:[...new Set([...created,...figma.currentPage.findAll(()=>true).map(n=>n.id)])],sets,components,
buttons:Object.fromEntries(Object.entries(buttons).map(([k,v])=>[k,v.id])),works:Object.fromEntries(Object.entries(works).map(([k,v])=>[k,v.id])),
heroes:heroes.map(c=>({id:c.id,name:c.name})),contacts:contacts.map(c=>({id:c.id,name:c.name})),
componentCount:figma.currentPage.findAllWithCriteria({types:["COMPONENT"]}).length,
setCount:Object.keys(sets).length};
