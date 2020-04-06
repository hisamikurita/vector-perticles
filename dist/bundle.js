!function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.r(i);var o=function(){function t(i,e){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=i,this.y=e}var i,e,o;return i=t,(e=[{key:"set",value:function(t,i){return this.x=t,this.y=i,this}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"add",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"setFromAngle",value:function(t){this.x=Math.cos(t),this.y=Math.sin(t)}},{key:"addFromScalar",value:function(t,i){this.x+=t,this.y+=i}}])&&n(i.prototype,e),o&&n(i,o),t}();function r(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(i,e,n,r,s,a,h){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=i,this.position=new o(e,n),this.velocity=new o(0,0),this.velocity.setFromAngle(s),this.speed=r,this.radius=a,this.color=h,this.friction=.04}var i,e,n;return i=t,(e=[{key:"update",value:function(){this.position.addFromScalar(this.velocity.x*this.speed,this.velocity.y*this.speed),this.speed=this.speed-this.speed*this.friction,this.speed<=.4&&(this.velocity.setFromAngle(Math.random()*Math.PI*2),this.speed=Math.random()+8),(this.position.x+this.radius>this.canvas.width||this.position.x-this.radius<0)&&(this.velocity.x*=-1),(this.position.y+this.radius>this.canvas.height||this.position.y-this.radius<0)&&(this.velocity.y*=-1),this.position.x>this.canvas.width&&(this.position.x=this.canvas.width/2),this.position.y>this.canvas.height&&(this.position.y=this.canvas.height/2)}}])&&r(i.prototype,e),n&&r(i,n),t}();window.onload=function(){var t,i,e=document.getElementById("canvas"),n=e.getContext("2d"),o=e.width=window.innerWidth,r=e.height=window.innerHeight,a=[],h=["#eeb900","#6DD0A5","#f799db"];function u(t){return t[Math.floor(Math.random()*t.length)]}window.onresize=function(){o=e.width=window.innerWidth,r=e.height=window.innerHeight};for(var c=0;c<100;c++)a.push(new s(e,e.width/2,e.height/2,Math.random()+8,Math.random()*Math.PI*2,(t=2,i=24,Math.floor(Math.random()*(i-t+1)+t)),u(h)));!function t(){n.clearRect(0,0,o,r);for(var i=0;i<100;i++){var e=a[i];e.update(),n.beginPath(),n.arc(e.position.x,e.position.y,e.radius,0,2*Math.PI,!1),n.fillStyle=e.color,n.fill()}requestAnimationFrame(t)}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJWZWN0b3IiLCJ4IiwieSIsInRoaXMiLCJ2IiwiYW5nbGUiLCJNYXRoIiwiY29zIiwic2luIiwiUGFydGljbGUiLCJjYW52YXMiLCJzcGVlZCIsImRpcmVjdGlvbiIsInJhZGl1cyIsImNvbG9yIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsInNldEZyb21BbmdsZSIsImZyaWN0aW9uIiwiYWRkRnJvbVNjYWxhciIsInJhbmRvbSIsIlBJIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJtaW4iLCJtYXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhcnRpY2xlcyIsImNvbG9ycyIsInJhbmRvbUNvbG9yIiwiZmxvb3IiLCJsZW5ndGgiLCJvbnJlc2l6ZSIsInB1c2giLCJyZW5kZXIiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJiZWdpblBhdGgiLCJhcmMi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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL3jmiJDliIbjgah55oiQ5YiG44KS5oyB44Gk5LqM5qyh5YWD44OZ44Kv44OI44OrXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIC8v44OZ44Kv44OI44Or44GueOOBqHnjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLy/jg5njgq/jg4jjg6vjga7opIfoo71cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuICAgIC8v44OZ44Kv44OI44Or44Gu6Laz44GX566XIDog5rih44GV44KM44Gf44OZ44Kv44OI44Or44GueOOBqHnjgpLoh6rliIbjgavotrPjgZlcclxuICAgIGFkZCh2KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueDtcclxuICAgICAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLy/jg5njgq/jg4jjg6vjga7lvJXjgY3nrpcgOiDmuKHjgZXjgozjgZ/jg5njgq/jg4jjg6vjga5444GoeeOCkuiHquWIhuOBi+OCieW8leOBj1xyXG4gICAgc3ViKHYpIHtcclxuICAgICAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICAvL+ODmeOCr+ODiOODq+OBruWQkeOBjeOCkuWkieabtOOBmeOCi1xyXG4gICAgc2V0RnJvbUFuZ2xlKGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5jb3MoYW5nbGUpO1xyXG4gICAgICAgIHRoaXMueSA9IE1hdGguc2luKGFuZ2xlKTtcclxuICAgIH1cclxuICAgIC8veOOBqHnjga7lvJXmlbDjgpLlj5fjgZHjgajjgorjgIHjgZ3jgozjgZ7jgozjg5njgq/jg4jjg6t444GoeeOBq+WKoOeul+OBmeOCi1xyXG4gICAgYWRkRnJvbVNjYWxhcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHg7XHJcbiAgICAgICAgdGhpcy55ICs9IHk7XHJcbiAgICB9XHJcbn0iLCIvL3ZlY3Rvci5qc+OCkuiqreOBv+i+vOOCgFxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuL3ZlY3RvcidcclxuXHJcbi8vUGFydGljbGXjgq/jg6njgrnjgpLkvZzmiJDjgZnjgotcclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcclxuICAgIC8v44Kz44Oz44K544OI44Op44Kv44K/44O844GnY2FudmFzLHBvc2l0aW9uKOS9jee9riksdmVsb2NpdHko6YCy6Lev5pa55ZCRKSxkaXJlY3Rpb24o6KeS5bqmKSxzcGVlZCjpgJ/luqYpLHJhZGl1cyjljYrlvoQpLGNvbG9yKOiJsinjgpLlrprnvqnjgZnjgotcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgeCwgeSwgc3BlZWQsIGRpcmVjdGlvbiwgcmFkaXVzLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIC8vcG9zaXRpb24o5L2N572uKeODl+ODreODkeODhuOCo+OBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkFxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKHgsIHkpO1xyXG4gICAgICAgIC8vdmVsb2NpdHko6YCy6Lev5pa55ZCRKeODl+ODreODkeODhuOCo+OBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkFxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xyXG4gICAgICAgIC8vdmVsb2NpdHko6YCy6Lev5pa55ZCRKeOBruWQkeOBjeOCkmRpcmVjdGlvbuOBruinkuW6puOBq+OCiOOBo+OBpuWkieOBiOOCi1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RnJvbUFuZ2xlKGRpcmVjdGlvbik7XHJcbiAgICAgICAgLy9zcGVlZCjpgJ/luqYp44OX44Ot44OR44OG44Kj44KS5a6a576pXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIC8vcmFkaXVzKOWNiuW+hCnjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqlcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICAvL2NvbG9yKOiJsinjg5fjg63jg5Hjg4bjgqPjgpLlrprnvqlcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgLy/mkanmk6ZcclxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gLjA0O1xyXG4gICAgfVxyXG4gICAgLy91cGRhdGXjg6Hjgr3jg4Pjg4njga7kvZzmiJBcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvL3Bvc2l0aW9uLngscG9zaXRpb24ueeOBq3ZlbG9jaXR5LnjjgIAqIHNwZWVkLHZlbG9jaXR5LnkgKiBzcGVlZOOCkuWKoOeul+OBmeOCi+OAglxyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkRnJvbVNjYWxhcihcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICogdGhpcy5zcGVlZCxcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICogdGhpcy5zcGVlZCxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvL+mAn+W6puOCkua7keOCieOBi+OBq+a4m+mAn+OBleOBm+OAgeacgOe1gueahOOBq+WBnOatouOBleOBm+OCi+OAglxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkIC0gKHRoaXMuc3BlZWQgKiB0aGlzLmZyaWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy/pgJ/luqbjgYwwLjXku6XkuIvjgavjgarjgaPjgZ/mmYLjgavlho3luqbpgJ/luqbjga7lgKTjgpLov73liqDjgZfjgablkJHjgY3jgpLlpInmm7TjgZnjgovjgIJcclxuICAgICAgICBpZiAodGhpcy5zcGVlZCA8PSAuNCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNldEZyb21BbmdsZShNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSArIDg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NhbnZhc+WkluOBruihneeqgeWIpOWumlxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHRoaXMuY2FudmFzLndpZHRoIHx8IHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gLTE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiB0aGlzLmNhbnZhcy5oZWlnaHQgfHwgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3Bvc2l0aW9uKOS9jee9rinjgYxjYW52YXPlpJbjgavlh7rjgZ/mmYLjga/kuK3lpK7jgavlho3phY3nva5cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gdGhpcy5jYW52YXMud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCIvL3ZlY3Rvci5qc+OCkuiqreOBv+i+vOOCgFxyXG5pbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vcGFydGljbGUnXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyksXHJcbiAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXHJcbiAgICAgICAgd2lkdGggPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIHBhcnRpY2xlcyA9IFtdLFxyXG4gICAgICAgIHBhcnRpY2xlTnVtID0gMTAwLFxyXG4gICAgICAgIGNvbG9ycyA9IFsnI2VlYjkwMCcsICcjNkREMEE1JywgJyNmNzk5ZGInXTtcclxuXHJcbiAgICAvL+ODquOCteOCpOOCuuOCpOODmeODs+ODiFxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHdpZHRoID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8leaVsOOBruacgOWwj+WApOOBi+OCieacgOWkp+WApOOBrumWk+OBp+ODqeODs+ODgOODoOOBquWApOOBruaVtOaVsOOCkui/lOOBmemWouaVsFxyXG4gICAgZnVuY3Rpb24gcmFuZG9tSW50RnJvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcclxuICAgIH1cclxuICAgIC8v44Op44Oz44OA44Og44Gq6Imy44KS6L+U44GZ6Zai5pWwXHJcbiAgICBmdW5jdGlvbiByYW5kb21Db2xvcihjb2xvcnMpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pyA5Yid44Gr5a6a576p44GX44Gm44GK44GE44GfcGFydGljbGVz6YWN5YiX44Gr44CBUGFydGljbGXjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJDjgZfjgIHlkITnqK7jg5fjg63jg5Hjg4bjgqPjgpLmoLzntI3jgZnjgotcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVOdW07IGkrKykge1xyXG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZShcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSArIDgsXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMixcclxuICAgICAgICAgICAgcmFuZG9tSW50RnJvbVJhbmdlKDIsIDI0KSxcclxuICAgICAgICAgICAgcmFuZG9tQ29sb3IoY29sb3JzKSxcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBwYXJ0aWNsZXNbaV07XHJcbiAgICAgICAgICAgIHAudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmFyYyhwLnBvc2l0aW9uLngsIHAucG9zaXRpb24ueSwgcC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBwLmNvbG9yO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwLnZlbG9jaXR5KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9