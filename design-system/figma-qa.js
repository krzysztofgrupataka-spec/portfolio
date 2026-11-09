// Elemental compact review boards; masters remain on Components page.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("2:5"));
if(figma.currentPage.children.length)throw Error("QA exists");
const buttonSet=await figma.getNodeByIdAsync("3:94"),largeSet=await figma.getNodeByIdAsync("3:175"),tagSet=await figma.getNodeByIdAsync("3:184"),swatchSet=await figma.getNodeByIdAsync("3:805");
const boards=[];
for(const [i,theme]of ["Light","Dark"].entries()){
 const board=frame(null,"Review / "+theme,1200,"VERTICAL","space/6","surface/page");pad(board,"space/7");mode(board,"Semantic color",theme);mode(board,"Layout","Mobile");board.x=200+i*1400;board.y=200;
 await txt(board,"Title","KOMPONENTY / "+theme.toUpperCase(),"Display/M/Desktop");
 await txt(board,"Subheading","Default · Hover · Pressed · Disabled · Focused","Text/Body","text/secondary");
 for(const appearance of ["Primary","Secondary","Warm","Outline","Ghost"]){
  const group=frame(board,appearance,1104,"VERTICAL","space/3");
  await txt(group,"Appearance",appearance,"UI/Label");
  const row=frame(group,"States",1104,"HORIZONTAL","space/5");
  for(const state of ["Default","Hover","Pressed","Disabled","Focused"]){
   const c=buttonSet.children.find(c=>c.name===`Appearance=${appearance}, State=${state==="Focused"?"Default":state}`);
   const n=inst(c,row,appearance+"/"+state);setText(n,"Label",state==="Focused"?"Fokus":state);
   if(state==="Focused"){const k=Object.keys(n.componentProperties).find(k=>k.startsWith("Focused#"));n.setProperties({[k]:true});}
  }
 }
 await txt(board,"Large label","BUTTON / LG + IKONA","UI/Label");
 const lr=frame(board,"Large buttons",1104,"HORIZONTAL","space/5");
 for(const appearance of ["Primary","Secondary","Warm"]){
 const n=inst(largeSet.children.find(c=>c.name===`Appearance=${appearance}, State=Default`),lr);
 const k=Object.keys(n.componentProperties).find(k=>k.startsWith("Trailing icon#"));n.setProperties({[k]:true});
 }
 await txt(board,"Tag label","TAG / INFORMACYJNY","UI/Label");
 const tr=frame(board,"Tags",1104,"HORIZONTAL","space/5");
 for(const c of tagSet.children){const n=inst(c,tr);setText(n,"Label",c.name.replace("Tone=",""));}
 await txt(board,"Swatches label","COLOR SWATCH / DOKUMENTACJA","UI/Label");
 const sr=frame(board,"Swatches",1104,"HORIZONTAL","space/5");
 for(const c of swatchSet.children){const n=inst(c,sr);n.resize(240,n.height);n.layoutSizingVertical="HUG";}
 await txt(board,"Work label","WORKBLOCK / DŁUGI TYTUŁ · 320 PX · FOKUS","UI/Label");
 const wr=frame(board,"Work specimens",1104,"HORIZONTAL","space/5");
 for(const [index,id]of ["3:185","3:263","3:224"].entries()){
 const n=inst(await figma.getNodeByIdAsync(id),wr);n.resize(320,n.height);n.layoutSizingVertical="HUG";
 setText(n,"Title",index===0?"Projektowanie złożonych doświadczeń cyfrowych":index===1?"Materia i forma":"Rytm siatki");
 setText(n,"Discipline","STUDIUM");setText(n,"Index","0"+(index+1));
 if(index===1){const k=Object.keys(n.componentProperties).find(k=>k.startsWith("Focused#"));n.setProperties({[k]:true});}
 }
 await txt(board,"QA note","Cel dotykowy Button MD ≥44 px. Tekst bez opacity. Nazwy projektów rosną w pionie. Motywy dziedziczone przez instancje; grafiki demonstracyjne zachowują własną paletę.","Text/Small","text/secondary",1104);
 boards.push({id:board.id,name:board.name,width:board.width,height:board.height});
}
return {createdNodeIds:figma.currentPage.findAll(()=>true).map(n=>n.id),boards};
