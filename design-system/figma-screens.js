// Elemental screen composition from library instances.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync("2:4"));
const mains={};
for(const id of ["3:764","3:710","3:773","3:719","3:185","3:438","3:574","3:62","3:2","3:6","3:10"])
 mains[id]=await figma.getNodeByIdAsync(id);
const results=[];
for(const [rootId,vp,theme]of [["5:137","Desktop","Light"],["5:138","Desktop","Dark"],["5:139","Mobile","Light"],["5:140","Mobile","Dark"]]){
 const root=await figma.getNodeByIdAsync(rootId);if(root.children.length)throw Error("Screen is already populated");
 const mobile=vp==="Mobile",w=mobile?350:1344;
 const nav=frame(root,"Navigation",w,"HORIZONTAL","space/4");nav.primaryAxisAlignItems="SPACE_BETWEEN";nav.counterAxisAlignItems="CENTER";nav.layoutSizingHorizontal="FILL";
 await txt(nav,"Brand","ELEMENTAL / 0.2","UI/Label");
 const navBtn=inst(mains["3:62"],nav,"Contact link");setText(navBtn,"Label","Kontakt ↗");
 const hero=inst(mains[mobile?"3:710":"3:764"],root,"Hero / Nameplate");hero.layoutSizingHorizontal="FILL";
 setText(hero,"Role","UX / UI · KOMPOZYCJA DEMONSTRACYJNA");
 setText(hero,"Intro","Typografia, przestrzeń\ni uważne decyzje.");
 const works=frame(root,"Selected work",w,"VERTICAL","space/5");works.layoutSizingHorizontal="FILL";
 const workHead=frame(works,"Section heading",w,mobile?"VERTICAL":"HORIZONTAL","space/2");workHead.primaryAxisAlignItems="SPACE_BETWEEN";workHead.layoutSizingHorizontal="FILL";
 await txt(workHead,"Heading","WYBRANE STUDIA","UI/Label");
 await txt(workHead,"Index","01—03 / MATERIAŁ DEMONSTRACYJNY","UI/Label","text/secondary",mobile?w:360);
 const row=frame(works,"Bento / 8 + 4",w,mobile?"VERTICAL":"HORIZONTAL","grid/gap");row.layoutSizingHorizontal="FILL";row.counterAxisAlignItems="MIN";
 async function work(parent,id,width,title,index,discipline,artId,ratio){
  const n=inst(mains[id],parent,title);n.resize(width,n.height);
  if(mobile)n.layoutSizingHorizontal="FILL";
  setText(n,"Title",title);setText(n,"Index",index);setText(n,"Discipline",discipline);setText(n,"Year","2026");
  const imageKey=Object.keys(n.componentProperties).find(k=>k.split("#")[0]==="Image");n.setProperties({[imageKey]:artId});
  const crop=n.findOne(c=>c.name==="Media"&&c.type==="FRAME");crop.resize(width-(mobile?48:64),(width-(mobile?48:64))/ratio);
  crop.layoutSizingHorizontal="FILL";
  return n;
 }
 await work(row,"3:185",mobile?w:888,"Studium typografii","01","TYPOGRAFIA","3:2",4/3);
 await work(row,"3:438",mobile?w:432,"Materia i forma","02","EDYTORIAL","3:6",mobile?4/3:3/4);
 const last=await work(works,"3:574",w,"Rytm, który porządkuje","03","KOMPOZYCJA","3:10",mobile?4/3:16/5);
 last.layoutSizingHorizontal="FILL";
 const about=frame(root,"Editorial statement",w,mobile?"VERTICAL":"HORIZONTAL","space/7");about.layoutSizingHorizontal="FILL";
 await txt(about,"Eyebrow","PODEJŚCIE","UI/Label","text/secondary",mobile?w:240);
 const body=frame(about,"Statement",mobile?w:760,"VERTICAL","space/5");body.layoutSizingHorizontal=mobile?"FILL":"FIXED";
 await txt(body,"Heading","Mniej ozdobników.\nWięcej znaczenia.","Editorial/Headline/"+vp,"text/primary",body.width);
 await txt(body,"Paragraph","Kolor wyznacza obszary. Typografia nadaje hierarchię. Przestrzeń pozwala zobaczyć to, co istotne.","Text/Lead","text/primary",body.width);
 await txt(body,"Demo notice","Przykładowa kompozycja biblioteki. Studia powyżej pokazują język wizualny Elemental — nie są projektami klientów.","Text/Small","text/secondary",body.width);
 const contact=inst(mains[mobile?"3:719":"3:773"],root,"Contact");contact.layoutSizingHorizontal="FILL";
 const footer=frame(root,"Footer",w,mobile?"VERTICAL":"HORIZONTAL","space/4");footer.primaryAxisAlignItems="SPACE_BETWEEN";footer.layoutSizingHorizontal="FILL";
 await txt(footer,"Version","ELEMENTAL / COOL FALL BREEZE","UI/Label");
 await txt(footer,"Mode",`${theme.toUpperCase()} · ${mobile?"390":"1440"} PX · SPECIMEN 0.2`,"Text/Caption","text/secondary");
 const nodes=root.findAll(()=>true),types={};for(const n of nodes)types[n.type]=(types[n.type]||0)+1;
 const images=nodes.filter(n=>"fills"in n&&Array.isArray(n.fills)&&n.fills.some(p=>p.type==="IMAGE")).map(n=>({id:n.id,name:n.name,width:n.width,height:n.height}));
 results.push({id:root.id,name:root.name,width:root.width,height:root.height,descendantCount:nodes.length,types,images,fontFamilies:[...new Set(nodes.filter(n=>n.type==="TEXT").flatMap(t=>t.getStyledTextSegments(["fontName"]).map(s=>s.fontName.family)))]});
}
return {createdNodeIds:[...new Set([...created,...(await figma.getNodeByIdAsync("5:137")).findAll(()=>true).map(n=>n.id),...(await figma.getNodeByIdAsync("5:138")).findAll(()=>true).map(n=>n.id),...(await figma.getNodeByIdAsync("5:139")).findAll(()=>true).map(n=>n.id),...(await figma.getNodeByIdAsync("5:140")).findAll(()=>true).map(n=>n.id)])],mutatedNodeIds:results.map(r=>r.id),screens:results};
