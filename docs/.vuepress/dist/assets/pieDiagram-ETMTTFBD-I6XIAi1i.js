import{c as Y}from"./chunk-4KE642ED-aSnUMqlt.js";import{p as Z}from"./treemap-FKARHQ26-ARMCRNF4-epIpXPBb.js";import{m as r,K as B,Z as E,j as J,X as V,J as G,Q as I,t as y,h as N,L as U,a6 as q,a8 as H,a9 as M,aa as _,Y as ee,l as te,ab as ae,u as ie}from"./mermaid.esm.min-GgV4Bjj6.js";import"./chunk-5ZJXQJOJ-tqxK7YG9.js";import"./app-CfU1feWq.js";var re=ie.pie,D={sections:new Map,showData:!1},m=D.sections,T=D.showData,le=structuredClone(re),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{m=new Map,T=D.showData,te()},"clear"),ne=r(({label:e,value:t})=>{m.has(e)||(m.set(e,t),y.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),pe=r(()=>m,"getSections"),de=r(e=>{T=e},"setShowData"),ce=r(()=>T,"getShowData"),F={getConfig:se,clear:oe,setDiagramTitle:I,getDiagramTitle:G,setAccTitle:V,getAccTitle:J,setAccDescription:E,getAccDescription:B,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,t)=>{Y(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),ge={parse:r(async e=>{let t=await Z("pie",e);y.debug(t),fe(t,F)},"parse")},he=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),me=he,ue=r(e=>{let t=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,u)=>u.value-l.value);return ae().value(l=>l.value)(t)},"createPieArcs"),xe=r((e,t,l,u)=>{y.debug(`rendering pie chart
`+e);let d=u.db,v=N(),C=U(d.getConfig(),v.pie),b=40,s=18,c=4,n=450,x=n,S=q(t),o=S.append("g");o.attr("transform","translate("+x/2+","+n/2+")");let{themeVariables:a}=v,[k]=H(a.pieOuterStrokeWidth);k??=2;let A=C.textPosition,f=Math.min(x,n)/2-b,L=M().innerRadius(0).outerRadius(f),W=M().innerRadius(f*A).outerRadius(f*A);o.append("circle").attr("cx",0).attr("cy",0).attr("r",f+k/2).attr("class","pieOuterCircle");let z=d.getSections(),w=ue(z),j=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],p=_(j);o.selectAll("mySlices").data(w).enter().append("path").attr("d",L).attr("fill",i=>p(i.data.label)).attr("class","pieCircle");let O=0;z.forEach(i=>{O+=i}),o.selectAll("mySlices").data(w).enter().append("text").text(i=>(i.data.value/O*100).toFixed(0)+"%").attr("transform",i=>"translate("+W.centroid(i)+")").style("text-anchor","middle").attr("class","slice"),o.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let $=o.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(i,g)=>{let h=s+c,P=h*p.domain().length/2,Q=12*s,X=g*h-P;return"translate("+Q+","+X+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(i=>{let{label:g,value:h}=i.data;return d.getShowData()?`${g} [${h}]`:g});let K=Math.max(...$.selectAll("text").nodes().map(i=>i?.getBoundingClientRect().width??0)),R=x+b+s+c+K;S.attr("viewBox",`0 0 ${R} ${n}`),ee(S,n,R,C.useMaxWidth)},"draw"),Se={draw:xe},ve={parser:ge,db:F,renderer:Se,styles:me};export{ve as diagram};
