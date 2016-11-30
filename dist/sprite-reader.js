!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.SpriteReader=t()}}(function(){return function t(e,i,a){function s(n,h){if(!i[n]){if(!e[n]){var o="function"==typeof require&&require;if(!h&&o)return o(n,!0);if(r)return r(n,!0);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}var _=i[n]={exports:{}};e[n][0].call(_.exports,function(t){var i=e[n][1][t];return s(i?i:t)},_,_.exports,t,e,i,a)}return i[n].exports}for(var r="function"==typeof require&&require,n=0;n<a.length;n++)s(a[n]);return s}({1:[function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=s.autoplay,n=void 0===r?!0:r,h=s.canvas,o=void 0===h?null:h,c=s.fillColor,_=void 0===c?null:c,u=s.fps,l=void 0===u?30:u,f=s.from,g=void 0===f?0:f,d=s.loop,m=void 0===d?!1:d,p=s.onReady,v=void 0===p?null:p,y=s.onComplete,k=void 0===y?null:y,w=s.onRepeat,C=void 0===w?null:w,x=s.onRepeatComplete,T=void 0===x?null:x,P=s.repeat,R=void 0===P?0:P,S=s.retina,j=void 0===S?!1:S,z=s.reverse,b=void 0===z?!1:z,A=s.to,E=void 0===A?null:A;if(a(this,t),!e)throw new Error("image parameter can not be null");if(!i)throw new Error("json parameter can not be null");if(Array.isArray(e)&&Array.isArray(i)&&e.length!==i.length)throw new Error("image length must be equal to json length");this._image=e,this._json=i,this._canvasCache=[],this._ctxCache=[],this._packCached=0,this._canvasTarget=o||document.createElement("canvas"),this._ctxTarget=null,this._multipackSize=e.length||1,this._currentPack=0,this._currentRepeat=0,this._from=g,this._current=g,this._to=E,this._isPlaying=n,this._repeat=m?-1:R,this._fillColor=_,this._interval=1e3/l,this._then=null,this._onReady=v,this._onComplete=k,this._onRepeat=C,this._onRepeatComplete=T,Array.isArray(this._image)||(this._image=[this._image]),Array.isArray(this._json)||(this._json=[this._json]),this._total=0;for(var M=0;M<this._multipackSize;M++)this._total+=this._json[M].frames.length;if(null===this._to&&(this._to=this._total-1),this._side=b||this._from>this._to?-1:1,-1===this._side&&this._from<this._to){var O=this._from,q=this._to;this._from=Math.max(O,q),this._to=Math.min(O,q)}for(var I=document.createElement("canvas"),D=0;D<this._multipackSize;D++)this._canvasCache[D]=I.cloneNode(!1),this._canvasCache[D].width=this._json[D].meta.size.w,this._canvasCache[D].height=this._json[D].meta.size.h,this._ctxCache[D]=this._canvasCache[D].getContext("2d");o||(this._canvasTarget.width=this._json[0].frames[0].sourceSize.w,this._canvasTarget.height=this._json[0].frames[0].sourceSize.h,Object.assign(this._canvasTarget.style,{width:this._canvasTarget.width/(j?2:1)+"px",height:this._canvasTarget.height/(j?2:1)+"px"})),this._ctxTarget=this._canvasTarget.getContext("2d"),_&&(this._ctxTarget.fillStyle=_),this.update(!0)}return s(t,[{key:"findPack",value:function(){for(var t=0,e=0;this._current>t;)t+=this._json[e].frames.length,this._current>t&&e++;this._currentPack=e}},{key:"checkPack",value:function(){this.getCurrentRelatedToPack()>this._json[this._currentPack].frames.length-1&&(this._currentPack<this._multipackSize-1?this._currentPack++:this._currentPack=0)}},{key:"getCurrentRelatedToPack",value:function(){for(var t=0,e=0;e<this._currentPack;e++)t+=this._json[e].frames.length;return this._current-t}},{key:"drawCache",value:function(){var t=this._packCached,e=document.createElement("canvas"),i=e.getContext("2d");e.width=this._canvasCache[t].width,e.height=this._canvasCache[t].height,i.drawImage(this._image[t],0,0);var a=i.getImageData(0,0,e.width,e.height);this._ctxCache[t].putImageData(a,0,0),this._packCached++,this._packCached===this._multipackSize&&this._onReady&&this._onReady()}},{key:"draw",value:function(){var t=this._canvasTarget;this.checkPack();var e=this._json[this._currentPack].frames[this.getCurrentRelatedToPack()],i={w:e.frame.w,h:e.frame.h},a={x:0,y:0};this._ctxTarget.clearRect(0,0,t.width,t.height),this._fillColor&&this._ctxTarget.fillRect(0,0,t.width,t.height),e.rotated&&(this._ctxTarget.save(),this._ctxTarget.translate(t.width/2,t.height/2),this._ctxTarget.rotate(-Math.PI/2),this._ctxTarget.translate(-t.height/2,-t.width/2),i.w=e.frame.h,i.h=e.frame.w),e.trimmed&&(a.x=e.spriteSourceSize.x,a.y=e.spriteSourceSize.y,e.rotated&&(a.x=t.height-e.spriteSourceSize.h-e.spriteSourceSize.y,a.y=e.spriteSourceSize.x)),this._ctxTarget.drawImage(this._canvasCache[this._currentPack],e.frame.x,e.frame.y,i.w,i.h,a.x,a.y,i.w,i.h),e.rotated&&this._ctxTarget.restore()}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1;if(this._packCached<this._multipackSize&&this.drawCache(),this._isPlaying||t){var e=performance.now(),i=e-this._then;i<this._interval&&!t||(this._then=e-i%this._interval,this.draw(),this._current===this._to?this._repeat?(this._currentRepeat++,this._current=this._from,this._currentPack=0,this._onRepeat&&this._onRepeat(),this._repeat>0&&this._currentRepeat>this._repeat&&(this._isPlaying=!1,this._onRepeatComplete&&this._onRepeatComplete())):(this._isPlaying=!1,this._onComplete&&this._onComplete()):t||(this._current+=this._side))}}},{key:"play",value:function(){this._isPlaying=!0}},{key:"pause",value:function(){this._isPlaying=!1}},{key:"stop",value:function(){this._isPlaying=!1,this._current=this._from}},{key:"reverse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==t?this._side=t?1:-1:this._side=1===this._side?-1:1;var e=this._from,i=this._to;this._from=1===this._side?Math.min(e,i):Math.max(e,i),this._to=1===this._side?Math.max(e,i):Math.min(e,i)}},{key:"goFromTo",value:function(t,e){t>=0&&(this._from=t),e>=0&&(this._to=e),this._current=this._from,this._side=t>e?-1:1,this.findPack()}},{key:"goToAndStop",value:function(t){this._current=t,this._isPlaying=!1,this.update(!0)}},{key:"destroy",value:function(){this._isPlaying=!1,this._ctxTarget.clearRect(0,0,this._canvasTarget.width,this._canvasTarget.height)}},{key:"canvas",get:function(){return this._canvasTarget}},{key:"current",get:function(){return this._current}},{key:"total",get:function(){return this._total}},{key:"fps",set:function(t){this._interval=1e3/t}},{key:"loop",set:function(t){t?this._repeat=-1:-1===this._repeat&&(this._repeat=0)}},{key:"repeat",set:function(t){this._repeat=t,this._currentRepeat=0}},{key:"onComplete",set:function(t){this._onComplete=t}},{key:"onRepeat",set:function(t){this._onRepeat=t}},{key:"onRepeatComplete",set:function(t){this._onRepeatComplete=t}}]),t}();i["default"]=r},{}]},{},[1])(1)});
//# sourceMappingURL=sprite-reader.js.map