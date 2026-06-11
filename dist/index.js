"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var k=d(function(I,j){
var e=require('@stdlib/number-float64-base-to-float32/dist');function g(a,r,i,n,v,o,t,s,O,b){var q,f,u,c,p;if(r=e(r),i=e(i),t=e(t),c=e(e(a)-r),a<=0||c<=0)return NaN;for(q=o,f=b,u=0,p=0;p<a;p++)u=e(u+e(e(n[q]-i)*e(s[f]-t))),q+=v,f+=O;return e(u/c)}j.exports=g
});var l=d(function(J,x){
var m=require('@stdlib/strided-base-stride2offset/dist'),h=k();function w(a,r,i,n,v,o,t,s){return h(a,r,i,n,v,m(a,v),o,t,s,m(a,s))}x.exports=w
});var C=d(function(K,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=l(),A=k();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=C(),y,E=D(B(__dirname,"./native.js"));F(E)?y=G:y=E;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
