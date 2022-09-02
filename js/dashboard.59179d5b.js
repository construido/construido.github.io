"use strict";(self["webpackChunkrestaurante_front"]=self["webpackChunkrestaurante_front"]||[]).push([[966],{8505:function(t,e,l){l.r(e),l.d(e,{default:function(){return $}});var a=l(3396),n=l(7139);const s={class:"grid"},c={class:"col-12 lg:col-6 xl:col-3"},o={class:"card mb-0"},r={class:"flex justify-content-between mb-3"},i=(0,a._)("span",{class:"block text-500 font-medium mb-3"},"CLIENTES",-1),d={class:"text-900 font-medium text-xl"},u=(0,a._)("div",{class:"flex align-items-center justify-content-center bg-blue-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[(0,a._)("i",{class:"pi pi-users text-blue-500 text-xl"})],-1),m={class:"col-12 lg:col-6 xl:col-3"},f={class:"card mb-0"},v={class:"flex justify-content-between mb-3"},_=(0,a._)("span",{class:"block text-500 font-medium mb-3"},"PRODUCTOS",-1),x={class:"text-900 font-medium text-xl"},b=(0,a._)("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[(0,a._)("i",{class:"pi pi-shopping-cart text-orange-500 text-xl"})],-1),p={class:"col-12 lg:col-6 xl:col-3"},g={class:"card mb-0"},h={class:"flex justify-content-between mb-3"},y={class:"block text-500 font-medium mb-3"},w={class:"text-900 font-medium text-xl"},C=(0,a._)("div",{class:"flex align-items-center justify-content-center bg-green-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[(0,a._)("i",{class:"pi pi-arrow-up text-green-500 text-xl"})],-1),j={class:"col-12 lg:col-6 xl:col-3"},k={class:"card mb-0"},S={class:"flex justify-content-between mb-3"},O={class:"block text-500 font-medium mb-3"},T={class:"text-900 font-medium text-xl"},P=(0,a._)("div",{class:"flex align-items-center justify-content-center bg-red-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[(0,a._)("i",{class:"pi pi-arrow-down text-red-500 text-xl"})],-1),z={class:"col-12 xl:col-6"},H={class:"card mb-0"},D=(0,a._)("h5",null,[(0,a._)("b",null,"MÁS VENDIDOS")],-1),N={class:"flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"},V={class:"text-900 font-medium mr-2 mb-1 md:mb-0"},E={class:"mt-1 text-600"},A={class:"mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"},I={class:"surface-300 border-round overflow-hidden w-10rem lg:w-6rem",style:{height:"8px"}},M={class:"col-12 xl:col-6"},R={class:"card mb-0"},W=(0,a._)("h5",null,[(0,a._)("b",null,"STOCK MÍNIMO")],-1);function B(t,e,l,B,K,L){const U=(0,a.up)("Column"),G=(0,a.up)("DataTable");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("div",null,[i,(0,a._)("div",d,(0,n.zw)(B.clientes),1)]),u])])]),(0,a._)("div",m,[(0,a._)("div",f,[(0,a._)("div",v,[(0,a._)("div",null,[_,(0,a._)("div",x,(0,n.zw)(B.productos),1)]),b])])]),(0,a._)("div",p,[(0,a._)("div",g,[(0,a._)("div",h,[(0,a._)("div",null,[(0,a._)("span",y,"VENTAS : "+(0,n.zw)(B.ventas.venta),1),(0,a._)("div",w,(0,n.zw)(B.formatCurrency(B.ventas.total)),1)]),C])])]),(0,a._)("div",j,[(0,a._)("div",k,[(0,a._)("div",S,[(0,a._)("div",null,[(0,a._)("span",O,"COMPRAS : "+(0,n.zw)(B.compras.compra),1),(0,a._)("div",T,(0,n.zw)(B.formatCurrency(B.compras.total)),1)]),P])])]),(0,a._)("div",z,[(0,a._)("div",H,[D,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(B.productosVendidos,((t,e)=>((0,a.wg)(),(0,a.iD)("ul",{class:"list-none p-0 m-0",key:t.index},[(0,a._)("li",N,[(0,a._)("div",null,[(0,a._)("span",V,(0,n.zw)(t.Nombre_Producto),1),(0,a._)("div",E,(0,n.zw)(t.Nombre_Categoria),1)]),(0,a._)("div",A,[(0,a._)("div",I,[(0,a._)("div",{class:(0,n.C_)(B.color[e]+" h-full"),style:(0,n.j5)("width:"+t.Porcentaje)},null,6)]),(0,a._)("span",{class:(0,n.C_)(B.text[e]+" ml-3 font-medium")},(0,n.zw)(t.Porcentaje),3)])])])))),128))])]),(0,a._)("div",M,[(0,a._)("div",R,[W,(0,a.Wm)(G,{value:B.arrayStock,class:"p-datatable-sm",responsiveLayout:"scroll"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{field:"Nombre_Producto",header:"PRODUCTO"}),(0,a.Wm)(U,{field:"Nombre_Categoria",header:"CATEGORIA"}),(0,a.Wm)(U,{field:"Stock",header:"STOCK",class:"text-right"})])),_:1},8,["value"])])])])}var K=l(3190);function L(){return(0,K.d)().post("verify/cantidadProductos")}function U(){return(0,K.d)().post("verify/cantidadClientes")}function G(){return(0,K.d)().post("verify/cantidadCompras")}function Y(){return(0,K.d)().post("verify/cantidadVentas")}function Z(){return(0,K.d)().post("verify/porcentajeProductos")}function q(){return(0,K.d)().post("verify/productoStock")}var F=l(4870),J={setup(){const t=(0,F.iH)([]),e=(0,F.iH)(),l=(0,F.iH)(),n=(0,F.iH)(),s=(0,F.iH)({total:0,compra:0}),c=(0,F.iH)({total:0,venta:0}),o=t=>t.toLocaleString("es-BO",{style:"currency",currency:"BOB"}),r=(0,F.iH)(["bg-cyan-500","bg-teal-500","bg-green-500"]),i=(0,F.iH)(["text-cyan-500","text-teal-500","text-green-500"]);function d(){q().then((e=>{t.value=e.data}))}function u(){Z().then((t=>{e.value=t.data}))}function m(){L().then((t=>{l.value=t.data[0].Producto}))}function f(){U().then((t=>{n.value=t.data[0].Cliente}))}function v(){G().then((t=>{s.value.compra=t.data[0].Compra,s.value.total=t.data[0].Total?t.data[0].Total:0}))}function _(){Y().then((t=>{c.value.venta=t.data[0].Venta,c.value.total=t.data[0].Total?t.data[0].Total:0}))}return(0,a.bv)((()=>{u(),m(),f(),v(),d(),_()})),{text:i,color:r,ventas:c,compras:s,clientes:n,productos:l,formatCurrency:o,productosVendidos:e,arrayStock:t}}},Q=l(89);const X=(0,Q.Z)(J,[["render",B]]);var $=X}}]);
//# sourceMappingURL=dashboard.59179d5b.js.map