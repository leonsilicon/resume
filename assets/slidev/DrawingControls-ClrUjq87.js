import{e as H,s as I,t as J,u as O,v as Q,w as W,x as X,y as Z,z as ee,A as ne,B as te,C as se}from"../modules/unplugin-icons-BDVzS9St.js";import{d as z,t as $,R as oe,az as le,o as g,b as L,f as ae,h as B,A as e,c as x,k as o,l as n,i as l,e as r,x as ie,ak as m,aA as re,F as ue,al as ce,am as k,g as de}from"../modules/vue-IddwMgeD.js";import{L as _e}from"../modules/shiki-DGDFDnG8.js";import{u as pe,_ as a,V as h}from"./play-DQCEPSY_.js";import"../index-CHxd5jUg.js";import"./context-C0oMimDo.js";const me=z({__name:"Draggable",props:{storageKey:{},initial:{}},setup(D){const u=D,w=$(null),f=u.initial??{x:0,y:0},b=u.storageKey?oe(u.storageKey,f):$(f),{style:y}=le(w,{initialValue:b});return(v,d)=>(g(),L("div",{ref_key:"el",ref:w,class:"fixed",style:B(e(y))},[ae(v.$slots,"default")],4))}}),ge=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),we=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),fe={class:"flex bg-main p-2"},ve={class:"inline-block w-7 text-center"},ke={class:"pt-.5"},ze=z({__name:"DrawingControls",setup(D){const{brush:u,canClear:w,canRedo:f,canUndo:b,clear:y,drauu:v,drawingEnabled:d,drawingMode:i,drawingPinned:c,brushColors:M}=pe();function V(){v.undo()}function S(){v.redo()}let C="stylus";function _(p){i.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function A(p){u.color=p,d.value=!0,i.value=C}return(p,t)=>{const R=H,U=I,E=J,K=O,N=Q,F=W,P=X,j=Z,T=ee,Y=ne,q=te,G=se;return g(),x(me,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[ge]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(E)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(h),n(e(_e),null,{popper:o(()=>[r("div",fe,[r("div",ve,ie(e(u).size),1),r("div",ke,[m(r("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>i.value=e(C))},null,544),[[re,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[we]),_:1},8,["class"])]),_:1}),(g(!0),L(ue,null,ce(e(M),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(i)!=="eraseLine"?"active":"shallow"),onClick:be=>A(s)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:B(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(h),n(a,{title:"Undo",class:l({disabled:!e(b)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>S())},{default:o(()=>[n(P)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(j)]),_:1},8,["class"]),n(h),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:t[11]||(t[11]=s=>c.value=!e(c))},{default:o(()=>[m(n(T,{class:"transform -rotate-45"},null,512),[[k,e(c)]]),m(n(Y,null,null,512),[[k,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(q,null,null,512),[[k,e(c)]]),m(n(G,null,null,512),[[k,!e(c)]])]),_:1},8,["title","class"])):de("v-if",!0)]),_:1},8,["class"])}}});export{ze as default};
