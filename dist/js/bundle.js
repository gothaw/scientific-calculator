!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/js",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){!function(){const e=document.getElementById("advance-options-toggle"),n=document.getElementsByClassName("advance-options")[0],t=document.getElementById("tri-hyp"),i=document.getElementsByClassName("tri-hyp-function"),r=document.getElementById("deg-rad-gra");let a=!1;function l(){switch(r.innerHTML){case"deg":r.innerHTML="rad";break;case"rad":r.innerHTML="gra";break;default:r.innerHTML="deg"}}function c(){if("tri"===t.innerHTML){t.innerHTML="hyp";for(let e of i)e.innerHTML+="h"}else if("hyp"===t.innerHTML){t.innerHTML="tri";for(let e of i)e.innerHTML=e.innerHTML.slice(0,-1)}}function o(){a?(n.style.left="0",a=!1):(n.style.left="-100%",a=!0)}window.addEventListener("load",function(){e.addEventListener("click",o),t.addEventListener("click",c),r.addEventListener("click",l)})}()},function(e,n,t){"use strict";t.r(n);let i=[];const r=[{token:"!",precedence:5,associativity:"left"},{token:"^",precedence:4,associativity:"right"},{token:"x-root",precedence:4,associativity:"right"},{token:"mod",precedence:3,associativity:"left"},{token:"*",precedence:2,associativity:"left"},{token:"/",precedence:2,associativity:"left"},{token:"+",precedence:1,associativity:"left"},{token:"-",precedence:1,associativity:"left"}];function a(e,n){let t=!1,i=r.findIndex(n=>n.token===e),a=r.findIndex(e=>e.token===n);if(-1!==i&&-1!==a){let e=r[i].precedence,n=r[a].precedence,l=r[i].associativity;(e>n||e===n&&"left"===l)&&(t=!0)}return t}let l,c=[];const o=document.getElementById("deg-rad-gra"),s=[{token:"!",numberOfOperands:1,calculation:e=>(function e(n){if(n<0)throw"Factorial works only for positive integer number";return 0===n?1:n*e(n-1)})(e)},{token:"^",numberOfOperands:2,calculation:(e,n)=>Math.pow(e,n)},{token:"x-root",numberOfOperands:2,calculation:(e,n)=>Math.pow(n,1/e)},{token:"√",numberOfOperands:1,calculation:e=>Math.sqrt(e)},{token:"tan",numberOfOperands:1,calculation:e=>Math.tan(u(e))},{token:"cos",numberOfOperands:1,calculation:e=>Math.cos(u(e))},{token:"sin",numberOfOperands:1,calculation:e=>Math.sin(u(e))},{token:"atan",numberOfOperands:1,calculation:e=>h(Math.atan(e))},{token:"acos",numberOfOperands:1,calculation:e=>h(Math.acos(e))},{token:"asin",numberOfOperands:1,calculation:e=>h(Math.asin(e))},{token:"tanh",numberOfOperands:1,calculation:e=>Math.tanh(e)},{token:"cosh",numberOfOperands:1,calculation:e=>Math.cosh(e)},{token:"sinh",numberOfOperands:1,calculation:e=>Math.sinh(e)},{token:"atanh",numberOfOperands:1,calculation:e=>Math.atanh(e)},{token:"acosh",numberOfOperands:1,calculation:e=>Math.acosh(e)},{token:"asinh",numberOfOperands:1,calculation:e=>Math.asinh(e)},{token:"ln",numberOfOperands:1,calculation:e=>Math.log(e)},{token:"log",numberOfOperands:1,calculation:e=>Math.log10(e)},{token:"mod",numberOfOperands:2,calculation:(e,n)=>e%n},{token:"*",numberOfOperands:2,calculation:(e,n)=>e*n},{token:"/",numberOfOperands:2,calculation:(e,n)=>e/n},{token:"+",numberOfOperands:2,calculation:(e,n)=>e+n},{token:"-",numberOfOperands:2,calculation:(e,n)=>e-n}];function u(e){return"deg"===o.innerHTML?e*=Math.PI/180:"gra"===o.innerHTML&&(e*=Math.PI/200),e}function h(e){return"deg"===o.innerHTML?e*=180/Math.PI:"gra"===o.innerHTML&&(e*=200/Math.PI),e}const d=document.querySelector(".output"),f=document.querySelector(".input");let p=f,M=[];const g=[")","&pi;","e","!"],L=["√","tan","tanh","atan","atanh","cos","acos","cosh","acosh","sin","asin","sinh","asinh","log","ln"];function T(e=!1){e?M=k:(M=[],void 0===l||l===1/0||isNaN(l)?M.push("0"):M.push(l.toString()))}function H(e){let n=0;for(let t of e)"("===t?n++:")"===t&&n--;return n}!function(){const e=document.querySelectorAll(".btn"),n=document.querySelectorAll(".tri-hyp-function"),t=["+","-","*","/","!","mod"],i=["+","-","*","/",")","^","!","x-root","mod"];function r(i){switch(e[i].id){case"x-to-y":o("^");break;case"x-square":o("^","2");break;case"10-to-x":u(),s("10"),o("^");break;case"tan":u(),a(n[0].innerHTML),a("(");break;case"log":u(),a("log"),a("(");break;case"cos":u(),a(n[1].innerHTML),a("(");break;case"mod":o("mod");break;case"sin":u(),a(n[2].innerHTML),a("(");break;case"x-root":o("x-root");break;case"x-cube":o("^","3");break;case"e":u(),a("e");break;case"atan":u(),a(n[3].innerHTML),a("(");break;case"ln":u(),a("ln"),a("(");break;case"acos":u(),a(n[4].innerHTML),a("(");break;case"n!":o(t[4]);break;case"asin":u(),a(n[5].innerHTML),a("(");break;case"backspace":c("backspace");break;case"bracket-right":!function(){let e=H(p.innerHTML);if(!isNaN(M[M.length-1])||g.includes(M[M.length-1]))if(e>0)a(")");else if(0===e){let e=0,n=p;for(;"SUP"===p.tagName;){p=p.parentNode,e++;let n=H(p.innerHTML);if(n>0){let n=Array.from({length:e},()=>"]");M.push(...n),a(")");break}}")"!==M[M.length-1]&&(p=n)}}();break;case"bracket-left":u(),a("(");break;case"plus-minus":!function(){if(isNaN(M[M.length-1])&&"&pi;"!==M[M.length-1]&&"e"!==M[M.length-1])"+"===M[M.length-1]?(M[M.length-1]="-",p.innerHTML=p.innerHTML.slice(0,-1)+"-"):"-"===M[M.length-1]&&(M[M.length-1]="+",p.innerHTML=p.innerHTML.slice(0,-1)+"+");else{let e;if("+"===M[M.length-2])e=p.innerHTML.lastIndexOf("+"),p.innerHTML=p.innerHTML.slice(0,e)+"-"+p.innerHTML.slice(e+1,p.innerHTML.length),M[M.length-2]="-";else if("-"===M[M.length-2])e=p.innerHTML.lastIndexOf("-"),p.innerHTML=p.innerHTML.slice(0,e)+"+"+p.innerHTML.slice(e+1,p.innerHTML.length),M[M.length-2]="+";else if("0"!==M[M.length-1]){let n=M[M.length-1];"-1*"===M[M.length-2]?(e=p.innerHTML.lastIndexOf("-"),p.innerHTML=p.innerHTML.slice(0,e)+p.innerHTML.slice(e+1,p.innerHTML.length),M.splice(-2),M.push(n)):(e=p.innerHTML.lastIndexOf(n),p.innerHTML=p.innerHTML.slice(0,e)+"-"+p.innerHTML.slice(e,p.innerHTML.length),M.pop(),M.push("-1*",n))}}}();break;case"sqrt":u(),a("√"),a("(");break;case"one-over-x":s("1"),o(t[3]);break;case"pi":u(),a("&pi;");break;case"clear-entry":c("clear-entry");break;case"clear":c("clear");break;case"divide":o(t[3]);break;case"times":o(t[2]);break;case"minus":o(t[1]);break;case"plus":o(t[0]);break;case"dot":isNaN(M[M.length-1])?a("0."):-1===M[M.length-1].indexOf(".")&&(l("."),M[M.length-1]+=".");break;default:a(e[i].innerHTML)}}function a(e){!isNaN(e)||i.includes(e)||isNaN(M[M.length-1])?!i.includes(e)&&g.includes(M[M.length-1])?(l(`*${e}`),M.push("*",e)):isNaN(e)||isNaN(M[M.length-1])?(l(e),M.push(e)):"0"!==e&&"0"===M[M.length-1]?(l(e),M[M.length-1]=e):"0"!==M[M.length-1]&&(l(e),M[M.length-1]+=e):"0"===M[M.length-1]?(l(e),M[M.length-1]=e):(l(`*${e}`),M.push("*",e))}function l(e){let n;if("^"===e){let e=document.createTextNode("□"),n=document.createElement("SUP");n.appendChild(e),p.appendChild(n),p=p.lastChild}else if("x-root"===e){let e,n=document.createElement("SUP"),t=M.length-1,i=0;for(;t>=0&&isNaN(M[t])&&"&pi;"!==M[t]&&"e"!==M[t];)")"===M[t]&&i++,t--;if(0===i)e=document.createTextNode(p.innerHTML.slice(p.innerHTML.lastIndexOf(M[t],p.innerHTML.length))),p.innerHTML=p.innerHTML.slice(0,p.innerHTML.lastIndexOf(M[t])),n.appendChild(e),p.appendChild(n);else{let t=0,i=1,r=0;for(let e=2;e<p.innerHTML.length-1&&t<i;e++)"("===p.innerHTML.charAt(p.innerHTML.length-e)?(t++,r=p.innerHTML.length-e):")"===p.innerHTML.charAt(p.innerHTML.length-e)&&i++;e=p.innerHTML.slice(r,p.innerHTML.length),p.innerHTML=p.innerHTML.slice(0,r),p.appendChild(n),(p=p.lastChild).innerHTML+=e,p=p.parentNode}p.innerHTML+="&radic;"}else if("0"!==M[M.length-1]||t.includes(e)||"."===e||")"===e){if("SUP"===p.tagName&&("□"===p.innerHTML.charAt(0)&&(p.innerHTML=""),n=H(p.innerHTML),t.includes(e)||"*"===e.charAt(0)))for(;"SUP"===p.tagName&&0===n;)p=p.parentNode,M.push("]"),n=H(p.innerHTML);p.innerHTML+=e}else p.innerHTML=p.innerHTML.slice(0,-1)+e}function c(e){switch(e){case"backspace":if(isNaN(M[M.length-1]))if("["===M[M.length-1]&&"^"===M[M.length-2]){p.innerHTML=p.innerHTML.slice(0,-1),M.splice(-2),(p=p.parentNode).lastChild.remove()}else if("x-root"===M[M.length-1]){p.innerHTML=p.innerHTML.slice(0,-1);let e=p.lastChild;e.remove(),p.innerHTML+=e.innerHTML,M.pop()}else"("===M[M.length-1]&&L.includes(M[M.length-2])?(p.innerHTML=p.innerHTML.slice(0,p.innerHTML.lastIndexOf(M[M.length-2])),M.splice(-2)):(p.innerHTML=p.innerHTML.slice(0,p.innerHTML.lastIndexOf(M[M.length-1])),M.pop());else p.innerHTML=p.innerHTML.slice(0,-1),M[M.length-1]=M[M.length-1].slice(0,-1),0===M[M.length-1].length&&M.pop();for(;"]"===M[M.length-1];)M.pop(),p=p.lastChild;"["===M[M.length-1]&&(p.innerHTML+="□"),0===M.length&&(p.innerHTML="0",M.push("0"));break;case"clear-entry":M=["0"],f.innerHTML="0",p=f;break;case"clear":M=["0"],f.innerHTML="0",d.innerHTML="",p=f}}function o(e,n="0"){isNaN(M[M.length-1])&&!g.includes(M[M.length-1])||(a(e),"^"===e?(M.push("["),"0"!==n&&s(n)):"x-root"===e&&a("("))}function s(e){isNaN(M[M.length-1])||"0"===M[0]&&1===M.length||o(t[2]),a(e)}function u(){"0"===M[0]&&1===M.length&&(M.pop(),f.innerHTML="")}window.addEventListener("load",function(){T(),function(){for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(){r(n)})}()})}(),t.d(n,"originalStack",function(){return k});let k=[];!function(){const e=document.querySelector("#equals");function n(e=!1){T(e),i=[],c=[]}function t(){p=f,d.innerHTML=`${p.innerHTML} = ${l}`,l===1/0||isNaN(l)?p.innerHTML=0:p.innerHTML=l.toString()}function r(){e.addEventListener("click",function(){if((!isNaN(M[M.length-1])||g.includes(M[M.length-1]))&&0===H(M))try{k=M.slice(),function(){let e=0;for(let n of M)if("-1*"===n){let e=M.indexOf(n);M.splice(e,1,"-1","*")}else"["===n?e++:"]"===n&&e--;for(let n=0;n<e;n++)M.push("]")}(),function(){let e=[];for(let n of M)if(isNaN(n))if("e"===n)i.push(Math.exp(1).toString());else if("&pi;"===n)i.push(Math.PI.toString());else if(L.includes(n)||"("===n||"["===n)e.push(n);else if(")"!==n&&"]"!==n||0===e.length){for(;0!==e.length&&L.includes(e[e.length-1])||a(e[e.length-1],n)&&("("!==e[e.length-1]||"["!==e[e.length-1]);)i.push(e[e.length-1]),e.pop();e.push(n)}else{for(;0!==e.length&&"("!==e[e.length-1]&&"["!==e[e.length-1];)i.push(e[e.length-1]),e.pop();e.pop()}else i.push(n);for(;0!==e.length;)i.push(e.pop())}(),function(){for(let e of i)if(isNaN(e)){let n=s.findIndex(n=>n.token===e),t=s[n].numberOfOperands;if(1===t){let e=c.pop();c.push(s[n].calculation(e))}else if(2===t){let e=c.pop(),t=c.pop();c.push(s[n].calculation(t,e))}}else c.push(JSON.parse(e));l=+c[0].toFixed(14)}(),t(),n()}catch(e){alert(e),n(!0)}})}window.addEventListener("load",function(){r()})}()}]);