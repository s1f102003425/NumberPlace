(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9178)}])},9178:function(e,t,n){"use strict";n.r(t);var a=n(5893),c=n(7294),l=(n(8239),n(3376)),r=n(2729),s=n.n(r);t.default=()=>{let e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],[t,n]=(0,c.useState)(!1),[r,o]=(0,c.useState)(0),[i,d]=(0,c.useState)(e);(0,c.useEffect)(()=>{if(t){let e=setInterval(()=>{o(r+1)},1e3);return()=>{clearInterval(e)}}},[r,t]);let _=(e,t,n)=>{let a=Math.floor(10*Math.random());0===a||n[t].includes(a)?_(e,t,n):n[t][e]=a},u=async e=>{await l.x.create.$post(),console.log(e)};return console.table(i),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:s().time,children:r}),(0,a.jsx)("div",{className:s()["game-board"],children:i.map((e,t)=>e.map((e,n)=>(0,a.jsx)("div",{className:s().cell,children:(0,a.jsx)("div",{className:s().value,style:{color:0===e?"beige":"black"},children:e})},"".concat(n,"-").concat(t))))}),(0,a.jsxs)("div",{className:s()["button-board"],children:[(0,a.jsx)("div",{className:s()["reset-bottun"],onClick:()=>{d(e),o(0),n(!1)},children:"リセット"}),(0,a.jsx)("div",{className:s()["create-button"],onClick:()=>{let e=JSON.parse(JSON.stringify(i));for(let t=0;t<9;t++)for(let n=0;n<9;n++)_(n,t,e);d(e),n(!0)},children:"生成"})]}),(0,a.jsx)("div",{className:s()["room-create"],onClick:u,children:"登録"})]})}},2729:function(e){e.exports={time:"index_time__hQfVh","game-board":"index_game-board__DlTTX",cell:"index_cell__E8qMc",value:"index_value__t7buT","button-board":"index_button-board__m5nQb","reset-bottun":"index_reset-bottun__dcEqt","create-button":"index_create-button__AxXQ2","room-create":"index_room-create__Y2S9u"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);