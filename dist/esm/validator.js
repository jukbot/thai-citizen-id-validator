var E=Object.defineProperty;var F=(j,k)=>{for(var A in k)E(j,A,{get:k[A],enumerable:!0,configurable:!0,set:(q)=>k[A]=()=>q})};var C={};F(C,{default:()=>G});function z(j){if(typeof j==="number")j=j.toString();if(!/^\d{13}$/.test(j))return!1;let k=0;for(let q=0;q<12;q++)k+=Number(j[q])*(13-q);return(11-k%11)%10===Number(j[12])}if(typeof B!=="undefined"&&typeof B.exports!=="undefined")B.exports=z,C.default=z,C.isValidThaiID=z;else if(typeof window!=="undefined")window.isValidThaiID=z;var G=z;export{G as default};
