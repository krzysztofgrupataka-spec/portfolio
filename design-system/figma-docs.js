// Elemental documentation page. PAGE is injected by caller.
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(PAGE));
if(figma.currentPage.children.length)throw Error("Documentation already exists");
const width=1200;
const board=frame(null,PAGE==="0:1"?"Elemental / Start here":"Elemental / Foundations",width,"VERTICAL","space/7","surface/page");board.x=200;board.y=200;pad(board,"space/7");
mode(board,"Semantic color","Light");mode(board,"Layout","Desktop");
await txt(board,"Edition","ELEMENTAL / COOL FALL BREEZE / 0.2","UI/Label");
await txt(board,"Title",PAGE==="0:1"?"MATERIA.\nFORMA.\nZNACZENIE.":"FOUNDATIONS","Display/L/Desktop","text/primary",1104);
if(PAGE==="0:1"){
 await txt(board,"Intro","Portfolio z charakterem.\nSystem do świadomego komponowania.","Editorial/Headline/Desktop","text/primary",1000);
 const directions=[
 ["01 / Typografia prowadzi","Archivo tworzy strukturę. Fraunces dodaje akcent edytorski. Hanken Grotesk pozwala swobodnie czytać."],
 ["02 / Kolor buduje pola","Butter, Breeze i Cocoa. Duże powierzchnie, prosty podział. Bez szkła, świecących gradientów i powtarzalnych kart z ikonami."],
 ["03 / Rytm ma znaczenie","Desktop 8 + 4 kolumny, mobile jedna kolumna. Prawdziwa treść decyduje o proporcjach i kolejności."],
 ["04 / Biblioteka jest połączona","Primitives → Semantic color → komponenty → instancje. Tryby koloru Light/Dark i osobne tryby układu Mobile/Tablet/Desktop."]
 ];
 for(const [h,p]of directions){const row=frame(board,h,1104,"HORIZONTAL","space/7");await txt(row,"Label",h,"UI/Label","text/secondary",280);await txt(row,"Description",p,"Text/Lead","text/primary",760);}
 await txt(board,"Navigation","01 Foundations — tokeny i typografia\n02 Components — źródłowe komponenty i warianty\n03 Compositions — 1440 / 390 px × Light / Dark\n04 QA — przegląd stanów i stresowe treści","Text/Body","text/primary",1000);
 await txt(board,"Sources","Inspiracje: kziadova.framer.website · thematterofdesign.com\nŹródło: elemental-v0.2.md / elemental.css\nKompozycje pokazują materiał demonstracyjny, nie fikcyjne realizacje klientów.","Text/Small","text/secondary",1000);
 await txt(board,"Usage","Button: wybierz MD lub LG, Appearance i State; Focused oraz Trailing icon to właściwości boolean. WorkBlock: wybierz format, Tone i State; podmień Image przez instance swap. Motyw ustawiaj na ekranie, nie na pojedynczym tekście.","Text/Body","text/primary",1000);
 await txt(board,"Publication","Biblioteka lokalna w tym pliku. Udostępnienie jako biblioteki zespołu wymaga publikacji w panelu Libraries Figmy.","Text/Small","text/secondary",1000);
}else{
 for(const theme of ["Light","Dark"]){
 const section=frame(board,"Colors / "+theme,1104,"VERTICAL","space/5","surface/section");pad(section,"space/5");mode(section,"Semantic color",theme);
 await txt(section,"Theme",theme+" / semantic color","Editorial/Subhead");
 for(const group of [["surface/page","surface/section","surface/subtle"],["surface/butter","surface/breeze","surface/brand"],["text/primary","text/secondary","text/on-brand-secondary"],["status/success-text","status/warning-text","status/error-text"],["border/decorative","border/control","focus/accent"]]){
 const row=frame(section,"Token row",1056,"HORIZONTAL","space/5");
 for(const name of group){const cell=frame(row,name,336,"VERTICAL","space/2");
 const swatch=keep(figma.createRectangle());cell.appendChild(swatch);swatch.resize(336,56);fill(swatch,name);bind(swatch,"cornerRadius","radius/sm");
 await txt(cell,"Token name",name,"Text/Small","text/primary",336);
 const resolved=V[name].resolveForConsumer(section).value;
 const hex="#"+[resolved.r,resolved.g,resolved.b].map(v=>Math.round(v*255).toString(16).padStart(2,"0")).join("");
 await txt(cell,"Value",hex,"Text/Caption","text/secondary");}
 }
 }
 await txt(board,"Type title","TYPOGRAPHY","Display/M/Desktop");
 for(const [name,value]of [["Display/XL/Mobile","Archivo / struktura"],["Editorial/Headline/Desktop","Fraunces / akcent edytorski"],["Text/Lead","Hanken Grotesk / swobodny rytm czytania"],["UI/Label","Etykiety i indeks prac"],["Text/Body","Zażółć gęślą jaźń. 0123456789. Tekst podstawowy 16 / 26 px."]]){
 const cell=frame(board,name,1104,"VERTICAL","space/2");await txt(cell,"Style name",name,"Text/Caption","text/secondary");await txt(cell,"Specimen",value,name,"text/primary",1104);
 }
 await txt(board,"Spacing","SPACE / 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96","UI/Label");
 const spaceRow=frame(board,"Spacing tokens",1104,"HORIZONTAL","space/5");spaceRow.counterAxisAlignItems="MAX";
 for(let i=1;i<=9;i++){const cell=frame(spaceRow,"space/"+i,96,"VERTICAL","space/2");const n=keep(figma.createRectangle());cell.appendChild(n);const val=V["space/"+i].valuesByMode[C.Primitives.defaultModeId];n.resize(64,val);fill(n,"surface/brand");await txt(cell,"Value",String(val),"Text/Caption");}
 await txt(board,"Radius","RADIUS / 0 · 8 · 16 · 24 · 40 · 999","UI/Label");
 const radiusRow=frame(board,"Radius tokens",1104,"HORIZONTAL","space/5");
 for(const name of ["none","sm","md","lg","xl","pill"]){const box=frame(radiusRow,"radius/"+name,160,"VERTICAL","space/2","surface/butter");pad(box,"space/4");bind(box,"cornerRadius","radius/"+name);await txt(box,"Name",name,"Text/Body","text/on-light");}
 await txt(board,"Layout","LAYOUT / NIEZALEŻNY OD MOTYWU","UI/Label");
 await txt(board,"Layout details","Mobile 390: 4 kolumny / margines 20 / gutter 16\nTablet 834: 8 kolumn / margines 32 / gutter 24\nDesktop 1440: 12 kolumn / margines 48 / gutter 24\nSekcje: 64 mobile, 96 tablet i desktop. Maksymalna szerokość treści: 1440.","Text/Body","text/primary",1104);
 await txt(board,"Contrast","Tekst ≥4.5:1. Duży tekst ≥3:1. Obrys funkcjonalny ≥3:1.\n50 sprawdzonych par tokenów spełnia przyjęte progi. Dekoracyjne linie nie są obrysami kontrolek.\nNie stosuj opacity do małego tekstu. Butter i Breeze zawsze z text/on-light.","Text/Small","text/secondary",1104);
}
return {createdNodeIds:allIds(board),board:{id:board.id,name:board.name,width:board.width,height:board.height}};
