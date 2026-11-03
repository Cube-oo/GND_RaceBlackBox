(()=>{var TE=Object.create;var Ls=Object.defineProperty;var AE=Object.getOwnPropertyDescriptor;var ME=Object.getOwnPropertyNames;var RE=Object.getPrototypeOf,wE=Object.prototype.hasOwnProperty;var CE=(t,e)=>()=>(t&&(e=t(t=0)),e);var ge=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ad=(t,e)=>{for(var n in e)Ls(t,n,{get:e[n],enumerable:!0})},Ns=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ME(e))!wE.call(t,r)&&r!==n&&Ls(t,r,{get:()=>e[r],enumerable:!(i=AE(e,r))||i.enumerable});return t},Rr=(t,e,n)=>(Ns(t,e,"default"),n&&Ns(n,e,"default")),bn=(t,e,n)=>(n=t!=null?TE(RE(t)):{},Ns(e||!t||!t.__esModule?Ls(n,"default",{value:t,enumerable:!0}):n,t)),IE=t=>Ns(Ls({},"__esModule",{value:!0}),t);var ld={};ad(ld,{default:()=>PE});var PE,cd=CE(()=>{PE={}});var ud=ge((Xa,Ya)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof Ya=="object"&&typeof Xa<"u"?Ya.exports=e():t.Papa=e()})(Xa,function t(){"use strict";var e=function(){return typeof self<"u"?self:typeof window<"u"?window:typeof e<"u"?e:{}}();function n(){var m=e.URL||e.webkitURL||null,x=t.toString();return a.BLOB_URL||(a.BLOB_URL=m.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))}var i=!e.document&&!!e.postMessage,r=e.IS_PAPA_WORKER||!1,s={},o=0,a={};if(a.parse=c,a.unparse=u,a.RECORD_SEP="",a.UNIT_SEP="",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r",`
`,'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!e.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=1024*1024*10,a.RemoteChunkSize=1024*1024*5,a.DefaultDelimiter=",",a.Parser=_,a.ParserHandle=E,a.NetworkStreamer=h,a.FileStreamer=f,a.StringStreamer=p,a.ReadableStreamStreamer=g,typeof PAPA_BROWSER_CONTEXT>"u"&&(a.DuplexStreamStreamer=S),e.jQuery){var l=e.jQuery;l.fn.parse=function(m){var x=m.config||{},D=[];return this.each(function(C){var O=l(this).prop("tagName").toUpperCase()==="INPUT"&&l(this).attr("type").toLowerCase()==="file"&&e.FileReader;if(!O||!this.files||this.files.length===0)return!0;for(var te=0;te<this.files.length;te++)D.push({file:this.files[te],inputElem:this,instanceConfig:l.extend({},x)})}),z(),this;function z(){if(D.length===0){I(m.complete)&&m.complete();return}var C=D[0];if(I(m.before)){var O=m.before(C.file,C.inputElem);if(typeof O=="object")if(O.action==="abort"){P("AbortError",C.file,C.inputElem,O.reason);return}else if(O.action==="skip"){A();return}else typeof O.config=="object"&&(C.instanceConfig=l.extend(C.instanceConfig,O.config));else if(O==="skip"){A();return}}var te=C.instanceConfig.complete;C.instanceConfig.complete=function(Z){I(te)&&te(Z,C.file,C.inputElem),A()},a.parse(C.file,C.instanceConfig)}function P(C,O,te,Z){I(m.error)&&m.error({name:C},O,te,Z)}function A(){D.splice(0,1),z()}}}r&&(e.onmessage=$);function c(m,x){x=x||{};var D=x.dynamicTyping||!1;if(I(D)&&(x.dynamicTypingFunction=D,D={}),x.dynamicTyping=D,x.transform=I(x.transform)?x.transform:!1,x.worker&&a.WORKERS_SUPPORTED){var z=b();z.userStep=x.step,z.userChunk=x.chunk,z.userComplete=x.complete,z.userError=x.error,x.step=I(x.step),x.chunk=I(x.chunk),x.complete=I(x.complete),x.error=I(x.error),delete x.worker,z.postMessage({input:m,config:x,workerId:z.id});return}var P=null;if(m===a.NODE_STREAM_INPUT&&typeof PAPA_BROWSER_CONTEXT>"u")return P=new S(x),P.getStream();return typeof m=="string"?(m=A(m),x.download?P=new h(x):P=new p(x)):m.readable===!0&&I(m.read)&&I(m.on)?P=new g(x):(e.File&&m instanceof File||m instanceof Object)&&(P=new f(x)),P.stream(m);function A(C){return C.charCodeAt(0)===65279?C.slice(1):C}}function u(m,x){var D=!1,z=!0,P=",",A=`\r
`,C='"',O=C+C,te=!1,Z=null,ee=!1;Ve();var Q=new RegExp(M(C),"g");if(typeof m=="string"&&(m=JSON.parse(m)),Array.isArray(m)){if(!m.length||Array.isArray(m[0]))return le(null,m,te);if(typeof m[0]=="object")return le(Z||Object.keys(m[0]),m,te)}else if(typeof m=="object")return typeof m.data=="string"&&(m.data=JSON.parse(m.data)),Array.isArray(m.data)&&(m.fields||(m.fields=m.meta&&m.meta.fields||Z),m.fields||(m.fields=Array.isArray(m.data[0])?m.fields:typeof m.data[0]=="object"?Object.keys(m.data[0]):[]),!Array.isArray(m.data[0])&&typeof m.data[0]!="object"&&(m.data=[m.data])),le(m.fields||[],m.data||[],te);throw new Error("Unable to serialize unrecognized input");function Ve(){if(typeof x=="object"){if(typeof x.delimiter=="string"&&!a.BAD_DELIMITERS.filter(function(ae){return x.delimiter.indexOf(ae)!==-1}).length&&(P=x.delimiter),(typeof x.quotes=="boolean"||typeof x.quotes=="function"||Array.isArray(x.quotes))&&(D=x.quotes),(typeof x.skipEmptyLines=="boolean"||typeof x.skipEmptyLines=="string")&&(te=x.skipEmptyLines),typeof x.newline=="string"&&(A=x.newline),typeof x.quoteChar=="string"&&(C=x.quoteChar),typeof x.header=="boolean"&&(z=x.header),Array.isArray(x.columns)){if(x.columns.length===0)throw new Error("Option columns is empty");Z=x.columns}x.escapeChar!==void 0&&(O=x.escapeChar+C),x.escapeFormulae instanceof RegExp?ee=x.escapeFormulae:typeof x.escapeFormulae=="boolean"&&x.escapeFormulae&&(ee=/^[=+\-@\t\r].*$/)}}function le(ae,ve,Me){var Ue="";typeof ae=="string"&&(ae=JSON.parse(ae)),typeof ve=="string"&&(ve=JSON.parse(ve));var tt=Array.isArray(ae)&&ae.length>0,v=!Array.isArray(ve[0]);if(tt&&z){for(var T=0;T<ae.length;T++)T>0&&(Ue+=P),Ue+=me(ae[T],T);ve.length>0&&(Ue+=A)}for(var N=0;N<ve.length;N++){var j=tt?ae.length:ve[N].length,Y=!1,B=tt?Object.keys(ve[N]).length===0:ve[N].length===0;if(Me&&!tt&&(Y=Me==="greedy"?ve[N].join("").trim()==="":ve[N].length===1&&ve[N][0].length===0),Me==="greedy"&&tt){for(var W=[],X=0;X<j;X++){var K=v?ae[X]:X;W.push(ve[N][K])}Y=W.join("").trim()===""}if(!Y){for(var k=0;k<j;k++){k>0&&!B&&(Ue+=P);var ie=tt&&v?ae[k]:k;Ue+=me(ve[N][ie],k)}N<ve.length-1&&(!Me||j>0&&!B)&&(Ue+=A)}}return Ue}function me(ae,ve){if(typeof ae>"u"||ae===null)return"";if(ae.constructor===Date)return JSON.stringify(ae).slice(1,25);var Me=!1;ee&&typeof ae=="string"&&ee.test(ae)&&(ae="'"+ae,Me=!0);var Ue=ae.toString().replace(Q,O);return Me=Me||D===!0||typeof D=="function"&&D(ae,ve)||Array.isArray(D)&&D[ve]||rt(Ue,a.BAD_DELIMITERS)||Ue.indexOf(P)>-1||Ue.charAt(0)===" "||Ue.charAt(Ue.length-1)===" ",Me?C+Ue+C:Ue}function rt(ae,ve){for(var Me=0;Me<ve.length;Me++)if(ae.indexOf(ve[Me])>-1)return!0;return!1}}function d(m){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},x.call(this,m),this.parseChunk=function(D,z){let P=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&P>0){let ee=this._config.newline;if(!ee){let Ve=this._config.quoteChar||'"';ee=this._handle.guessLineEndings(D,Ve)}D=[...D.split(ee).slice(P)].join(ee)}if(this.isFirstChunk&&I(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(D);A!==void 0&&(D=A)}this.isFirstChunk=!1,this._halted=!1;var C=this._partialLine+D;this._partialLine="";var O=this._handle.parse(C,this._baseIndex,!this._finished);if(this._handle.paused()||this._handle.aborted()){this._halted=!0;return}var te=O.meta.cursor;this._finished||(this._partialLine=C.substring(te-this._baseIndex),this._baseIndex=te),O&&O.data&&(this._rowCount+=O.data.length);var Z=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)e.postMessage({results:O,workerId:a.WORKER_ID,finished:Z});else if(I(this._config.chunk)&&!z){if(this._config.chunk(O,this._handle),this._handle.paused()||this._handle.aborted()){this._halted=!0;return}O=void 0,this._completeResults=void 0}return!this._config.step&&!this._config.chunk&&(this._completeResults.data=this._completeResults.data.concat(O.data),this._completeResults.errors=this._completeResults.errors.concat(O.errors),this._completeResults.meta=O.meta),!this._completed&&Z&&I(this._config.complete)&&(!O||!O.meta.aborted)&&(this._config.complete(this._completeResults,this._input),this._completed=!0),!Z&&(!O||!O.meta.paused)&&this._nextChunk(),O},this._sendError=function(D){I(this._config.error)?this._config.error(D):r&&this._config.error&&e.postMessage({workerId:a.WORKER_ID,error:D,finished:!1})};function x(D){var z=F(D);z.chunkSize=parseInt(z.chunkSize),!D.step&&!D.chunk&&(z.chunkSize=null),this._handle=new E(z),this._handle.streamer=this,this._config=z}}function h(m){m=m||{},m.chunkSize||(m.chunkSize=a.RemoteChunkSize),d.call(this,m);var x;i?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(z){this._input=z,this._nextChunk()},this._readChunk=function(){if(this._finished){this._chunkLoaded();return}if(x=new XMLHttpRequest,this._config.withCredentials&&(x.withCredentials=this._config.withCredentials),i||(x.onload=w(this._chunkLoaded,this),x.onerror=w(this._chunkError,this)),x.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var z=this._config.downloadRequestHeaders;for(var P in z)x.setRequestHeader(P,z[P])}if(this._config.chunkSize){var A=this._start+this._config.chunkSize-1;x.setRequestHeader("Range","bytes="+this._start+"-"+A)}try{x.send(this._config.downloadRequestBody)}catch(C){this._chunkError(C.message)}i&&x.status===0&&this._chunkError()},this._chunkLoaded=function(){if(x.readyState===4){if(x.status<200||x.status>=400){this._chunkError();return}this._start+=this._config.chunkSize?this._config.chunkSize:x.responseText.length,this._finished=!this._config.chunkSize||this._start>=D(x),this.parseChunk(x.responseText)}},this._chunkError=function(z){var P=x.statusText||z;this._sendError(new Error(P))};function D(z){var P=z.getResponseHeader("Content-Range");return P===null?-1:parseInt(P.substring(P.lastIndexOf("/")+1))}}h.prototype=Object.create(d.prototype),h.prototype.constructor=h;function f(m){m=m||{},m.chunkSize||(m.chunkSize=a.LocalChunkSize),d.call(this,m);var x,D,z=typeof FileReader<"u";this.stream=function(P){this._input=P,D=P.slice||P.webkitSlice||P.mozSlice,z?(x=new FileReader,x.onload=w(this._chunkLoaded,this),x.onerror=w(this._chunkError,this)):x=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){!this._finished&&(!this._config.preview||this._rowCount<this._config.preview)&&this._readChunk()},this._readChunk=function(){var P=this._input;if(this._config.chunkSize){var A=Math.min(this._start+this._config.chunkSize,this._input.size);P=D.call(P,this._start,A)}var C=x.readAsText(P,this._config.encoding);z||this._chunkLoaded({target:{result:C}})},this._chunkLoaded=function(P){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(P.target.result)},this._chunkError=function(){this._sendError(x.error)}}f.prototype=Object.create(d.prototype),f.prototype.constructor=f;function p(m){m=m||{},d.call(this,m);var x;this.stream=function(D){return x=D,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var D=this._config.chunkSize,z;return D?(z=x.substring(0,D),x=x.substring(D)):(z=x,x=""),this._finished=!x,this.parseChunk(z)}}}p.prototype=Object.create(p.prototype),p.prototype.constructor=p;function g(m){m=m||{},d.call(this,m);var x=[],D=!0,z=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(P){this._input=P,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){z&&x.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),x.length?this.parseChunk(x.shift()):D=!0},this._streamData=w(function(P){try{x.push(typeof P=="string"?P:P.toString(this._config.encoding)),D&&(D=!1,this._checkIsFinished(),this.parseChunk(x.shift()))}catch(A){this._streamError(A)}},this),this._streamError=w(function(P){this._streamCleanUp(),this._sendError(P)},this),this._streamEnd=w(function(){this._streamCleanUp(),z=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}g.prototype=Object.create(d.prototype),g.prototype.constructor=g;function S(m){var x=(cd(),IE(ld)).Duplex,D=F(m),z=!0,P=!1,A=[],C=null;this._onCsvData=function(O){var te=O.data;!C.push(te)&&!this._handle.paused()&&this._handle.pause()},this._onCsvComplete=function(){C.push(null)},D.step=w(this._onCsvData,this),D.complete=w(this._onCsvComplete,this),d.call(this,D),this._nextChunk=function(){P&&A.length===1&&(this._finished=!0),A.length?A.shift()():z=!0},this._addToParseQueue=function(O,te){A.push(w(function(){if(this.parseChunk(typeof O=="string"?O:O.toString(D.encoding)),I(te))return te()},this)),z&&(z=!1,this._nextChunk())},this._onRead=function(){this._handle.paused()&&this._handle.resume()},this._onWrite=function(O,te,Z){this._addToParseQueue(O,Z)},this._onWriteComplete=function(){P=!0,this._addToParseQueue("")},this.getStream=function(){return C},C=new x({readableObjectMode:!0,decodeStrings:!1,read:w(this._onRead,this),write:w(this._onWrite,this)}),C.once("finish",w(this._onWriteComplete,this))}typeof PAPA_BROWSER_CONTEXT>"u"&&(S.prototype=Object.create(d.prototype),S.prototype.constructor=S);function E(m){var x=Math.pow(2,53),D=-x,z=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,P=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,A=this,C=0,O=0,te,Z,ee=!1,Q=!1,Ve,le=[],me={data:[],errors:[],meta:{}};if(I(m.step)){var rt=m.step;m.step=function(B){if(me=B,Ue())Me();else{if(Me(),me.data.length===0)return;C+=B.data.length,m.preview&&C>m.preview?Z.abort():(me.data=me.data[0],rt(me,A))}}}this.parse=function(B,W,X){var K=m.quoteChar||'"';if(m.newline||(m.newline=this.guessLineEndings(B,K)),Ve=!1,m.delimiter)I(m.delimiter)&&(m.delimiter=m.delimiter(B),me.meta.delimiter=m.delimiter);else{var k=j(B,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);k.successful?m.delimiter=k.bestDelimiter:(Ve=!0,m.delimiter=a.DefaultDelimiter),me.meta.delimiter=m.delimiter}var ie=F(m);return m.preview&&m.header&&ie.preview++,te=B,Z=new _(ie),me=Z.parse(te,W,X),Me(),ee?{meta:{paused:!0}}:me||{meta:{paused:!1}}},this.paused=function(){return ee},this.pause=function(){ee=!0,Z.abort(),te=I(m.chunk)?"":te.substring(Z.getCharIndex())},this.resume=function(){A.streamer._halted?(ee=!1,A.streamer.parseChunk(te,!0)):setTimeout(A.resume,3)},this.aborted=function(){return Q},this.abort=function(){Q=!0,Z.abort(),me.meta.aborted=!0,I(m.complete)&&m.complete(me),te=""},this.guessLineEndings=function(B,W){B=B.substring(0,1024*1024);var X=new RegExp(M(W)+"([^]*?)"+M(W),"gm");B=B.replace(X,"");var K=B.split("\r"),k=B.split(`
`),ie=k.length>1&&k[0].length<K[0].length;if(K.length===1||ie)return`
`;for(var J=0,re=0;re<K.length;re++)K[re][0]===`
`&&J++;return J>=K.length/2?`\r
`:"\r"};function ae(B){return m.skipEmptyLines==="greedy"?B.join("").trim()==="":B.length===1&&B[0].length===0}function ve(B){if(z.test(B)){var W=parseFloat(B);if(W>D&&W<x)return!0}return!1}function Me(){return me&&Ve&&(Y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),Ve=!1),m.skipEmptyLines&&(me.data=me.data.filter(function(B){return!ae(B)})),Ue()&&tt(),N()}function Ue(){return m.header&&le.length===0}function tt(){if(!me)return;function B(X,K){I(m.transformHeader)&&(X=m.transformHeader(X,K)),le.push(X)}if(Array.isArray(me.data[0])){for(var W=0;Ue()&&W<me.data.length;W++)me.data[W].forEach(B);me.data.splice(0,1)}else me.data.forEach(B)}function v(B){return m.dynamicTypingFunction&&m.dynamicTyping[B]===void 0&&(m.dynamicTyping[B]=m.dynamicTypingFunction(B)),(m.dynamicTyping[B]||m.dynamicTyping)===!0}function T(B,W){return v(B)?W==="true"||W==="TRUE"?!0:W==="false"||W==="FALSE"?!1:ve(W)?parseFloat(W):P.test(W)?new Date(W):W===""?null:W:W}function N(){if(!me||!m.header&&!m.dynamicTyping&&!m.transform)return me;function B(X,K){var k=m.header?{}:[],ie;for(ie=0;ie<X.length;ie++){var J=ie,re=X[ie];m.header&&(J=ie>=le.length?"__parsed_extra":le[ie]),m.transform&&(re=m.transform(re,J)),re=T(J,re),J==="__parsed_extra"?(k[J]=k[J]||[],k[J].push(re)):k[J]=re}return m.header&&(ie>le.length?Y("FieldMismatch","TooManyFields","Too many fields: expected "+le.length+" fields but parsed "+ie,O+K):ie<le.length&&Y("FieldMismatch","TooFewFields","Too few fields: expected "+le.length+" fields but parsed "+ie,O+K)),k}var W=1;return!me.data.length||Array.isArray(me.data[0])?(me.data=me.data.map(B),W=me.data.length):me.data=B(me.data,0),m.header&&me.meta&&(me.meta.fields=le),O+=W,me}function j(B,W,X,K,k){var ie,J,re,_e;k=k||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var Te=0;Te<k.length;Te++){var Ne=k[Te],we=0,Ke=0,Oe=0;re=void 0;for(var Xe=new _({comments:K,delimiter:Ne,newline:W,preview:10}).parse(B),pe=0;pe<Xe.data.length;pe++){if(X&&ae(Xe.data[pe])){Oe++;continue}var Ze=Xe.data[pe].length;if(Ke+=Ze,typeof re>"u"){re=Ze;continue}else Ze>0&&(we+=Math.abs(Ze-re),re=Ze)}Xe.data.length>0&&(Ke/=Xe.data.length-Oe),(typeof J>"u"||we<=J)&&(typeof _e>"u"||Ke>_e)&&Ke>1.99&&(J=we,ie=Ne,_e=Ke)}return m.delimiter=ie,{successful:!!ie,bestDelimiter:ie}}function Y(B,W,X,K){var k={type:B,code:W,message:X};K!==void 0&&(k.row=K),me.errors.push(k)}}function M(m){return m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _(m){m=m||{};var x=m.delimiter,D=m.newline,z=m.comments,P=m.step,A=m.preview,C=m.fastMode,O,te=null,Z=!1;m.quoteChar===void 0||m.quoteChar===null?O='"':O=m.quoteChar;var ee=O;if(m.escapeChar!==void 0&&(ee=m.escapeChar),(typeof x!="string"||a.BAD_DELIMITERS.indexOf(x)>-1)&&(x=","),z===x)throw new Error("Comment character same as delimiter");z===!0?z="#":(typeof z!="string"||a.BAD_DELIMITERS.indexOf(z)>-1)&&(z=!1),D!==`
`&&D!=="\r"&&D!==`\r
`&&(D=`
`);var Q=0,Ve=!1;this.parse=function(le,me,rt){if(typeof le!="string")throw new Error("Input must be a string");var ae=le.length,ve=x.length,Me=D.length,Ue=z.length,tt=I(P);Q=0;var v=[],T=[],N=[],j=0;if(!le)return Oe();if(C||C!==!1&&le.indexOf(O)===-1){for(var Y=le.split(D),B=0;B<Y.length;B++){if(N=Y[B],Q+=N.length,B!==Y.length-1)Q+=D.length;else if(rt)return Oe();if(!(z&&N.substring(0,Ue)===z)){if(tt){if(v=[],Te(N.split(x)),Xe(),Ve)return Oe()}else Te(N.split(x));if(A&&B>=A)return v=v.slice(0,A),Oe(!0)}}return Oe()}for(var W=le.indexOf(x,Q),X=le.indexOf(D,Q),K=new RegExp(M(ee)+M(O),"g"),k=le.indexOf(O,Q);;){if(le[Q]===O){for(k=Q,Q++;;){if(k=le.indexOf(O,k+1),k===-1)return rt||T.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:Q}),we();if(k===ae-1){var ie=le.substring(Q,k).replace(K,O);return we(ie)}if(O===ee&&le[k+1]===ee){k++;continue}if(!(O!==ee&&k!==0&&le[k-1]===ee)){W!==-1&&W<k+1&&(W=le.indexOf(x,k+1)),X!==-1&&X<k+1&&(X=le.indexOf(D,k+1));var J=X===-1?W:Math.min(W,X),re=Ne(J);if(le.substr(k+1+re,ve)===x){N.push(le.substring(Q,k).replace(K,O)),Q=k+1+re+ve,le[k+1+re+ve]!==O&&(k=le.indexOf(O,Q)),W=le.indexOf(x,Q),X=le.indexOf(D,Q);break}var _e=Ne(X);if(le.substring(k+1+_e,k+1+_e+Me)===D){if(N.push(le.substring(Q,k).replace(K,O)),Ke(k+1+_e+Me),W=le.indexOf(x,Q),k=le.indexOf(O,Q),tt&&(Xe(),Ve))return Oe();if(A&&v.length>=A)return Oe(!0);break}T.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:Q}),k++}}continue}if(z&&N.length===0&&le.substring(Q,Q+Ue)===z){if(X===-1)return Oe();Q=X+Me,X=le.indexOf(D,Q),W=le.indexOf(x,Q);continue}if(W!==-1&&(W<X||X===-1)){N.push(le.substring(Q,W)),Q=W+ve,W=le.indexOf(x,Q);continue}if(X!==-1){if(N.push(le.substring(Q,X)),Ke(X+Me),tt&&(Xe(),Ve))return Oe();if(A&&v.length>=A)return Oe(!0);continue}break}return we();function Te(pe){v.push(pe),j=Q}function Ne(pe){var Ze=0;if(pe!==-1){var Ct=le.substring(k+1,pe);Ct&&Ct.trim()===""&&(Ze=Ct.length)}return Ze}function we(pe){return rt||(typeof pe>"u"&&(pe=le.substring(Q)),N.push(pe),Q=ae,Te(N),tt&&Xe()),Oe()}function Ke(pe){Q=pe,Te(N),N=[],X=le.indexOf(D,Q)}function Oe(pe){if(m.header&&!me&&v.length&&!Z){let Ze=v[0],Ct=Object.create(null),ot=new Set(Ze),It=!1;for(let Jt=0;Jt<Ze.length;Jt++){let xt=Ze[Jt];if(I(m.transformHeader)&&(xt=m.transformHeader(xt,Jt)),!Ct[xt])Ct[xt]=1,Ze[Jt]=xt;else{let gi,Ds=Ct[xt];do gi=`${xt}_${Ds}`,Ds++;while(ot.has(gi));ot.add(gi),Ze[Jt]=gi,Ct[xt]++,It=!0,te===null&&(te={}),te[gi]=xt}ot.add(xt)}It&&console.warn("Duplicate headers found and renamed."),Z=!0}return{data:v,errors:T,meta:{delimiter:x,linebreak:D,aborted:Ve,truncated:!!pe,cursor:j+(me||0),renamedHeaders:te}}}function Xe(){P(Oe()),v=[],T=[]}},this.abort=function(){Ve=!0},this.getCharIndex=function(){return Q}}function b(){if(!a.WORKERS_SUPPORTED)return!1;var m=n(),x=new e.Worker(m);return x.onmessage=R,x.id=o++,s[x.id]=x,x}function R(m){var x=m.data,D=s[x.workerId],z=!1;if(x.error)D.userError(x.error,x.file);else if(x.results&&x.results.data){var P=function(){z=!0,U(x.workerId,{data:[],errors:[],meta:{aborted:!0}})},A={abort:P,pause:H,resume:H};if(I(D.userStep)){for(var C=0;C<x.results.data.length&&(D.userStep({data:x.results.data[C],errors:x.results.errors,meta:x.results.meta},A),!z);C++);delete x.results}else I(D.userChunk)&&(D.userChunk(x.results,A,x.file),delete x.results)}x.finished&&!z&&U(x.workerId,x.results)}function U(m,x){var D=s[m];I(D.userComplete)&&D.userComplete(x),D.terminate(),delete s[m]}function H(){throw new Error("Not implemented.")}function $(m){var x=m.data;if(typeof a.WORKER_ID>"u"&&x&&(a.WORKER_ID=x.workerId),typeof x.input=="string")e.postMessage({workerId:a.WORKER_ID,results:a.parse(x.input,x.config),finished:!0});else if(e.File&&x.input instanceof File||x.input instanceof Object){var D=a.parse(x.input,x.config);D&&e.postMessage({workerId:a.WORKER_ID,results:D,finished:!0})}}function F(m){if(typeof m!="object"||m===null)return m;var x=Array.isArray(m)?[]:{};for(var D in m)x[D]=F(m[D]);return x}function w(m,x){return function(){m.apply(x,arguments)}}function I(m){return typeof m=="function"}return a})});var wr=ge((KN,dd)=>{"use strict";var OE="2.0.0",DE=Number.MAX_SAFE_INTEGER||9007199254740991,NE=16,LE=250,FE=["major","premajor","minor","preminor","patch","prepatch","prerelease"];dd.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:NE,MAX_SAFE_BUILD_LENGTH:LE,MAX_SAFE_INTEGER:DE,RELEASE_TYPES:FE,SEMVER_SPEC_VERSION:OE,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Cr=ge((jN,fd)=>{"use strict";var UE=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};fd.exports=UE});var ki=ge((Sn,hd)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:qa,MAX_SAFE_BUILD_LENGTH:BE,MAX_LENGTH:kE}=wr(),VE=Cr();Sn=hd.exports={};var GE=Sn.re=[],HE=Sn.safeRe=[],fe=Sn.src=[],zE=Sn.safeSrc=[],he=Sn.t={},WE=0,Ka="[a-zA-Z0-9-]",$E=[["\\s",1],["\\d",kE],[Ka,BE]],XE=t=>{for(let[e,n]of $E)t=t.split(`${e}*`).join(`${e}{0,${n}}`).split(`${e}+`).join(`${e}{1,${n}}`);return t},Ce=(t,e,n)=>{let i=XE(e),r=WE++;VE(t,r,e),he[t]=r,fe[r]=e,zE[r]=i,GE[r]=new RegExp(e,n?"g":void 0),HE[r]=new RegExp(i,n?"g":void 0)};Ce("NUMERICIDENTIFIER","0|[1-9]\\d*");Ce("NUMERICIDENTIFIERLOOSE","\\d+");Ce("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Ka}*`);Ce("MAINVERSION",`(${fe[he.NUMERICIDENTIFIER]})\\.(${fe[he.NUMERICIDENTIFIER]})\\.(${fe[he.NUMERICIDENTIFIER]})`);Ce("MAINVERSIONLOOSE",`(${fe[he.NUMERICIDENTIFIERLOOSE]})\\.(${fe[he.NUMERICIDENTIFIERLOOSE]})\\.(${fe[he.NUMERICIDENTIFIERLOOSE]})`);Ce("PRERELEASEIDENTIFIER",`(?:${fe[he.NONNUMERICIDENTIFIER]}|${fe[he.NUMERICIDENTIFIER]})`);Ce("PRERELEASEIDENTIFIERLOOSE",`(?:${fe[he.NONNUMERICIDENTIFIER]}|${fe[he.NUMERICIDENTIFIERLOOSE]})`);Ce("PRERELEASE",`(?:-(${fe[he.PRERELEASEIDENTIFIER]}(?:\\.${fe[he.PRERELEASEIDENTIFIER]})*))`);Ce("PRERELEASELOOSE",`(?:-?(${fe[he.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${fe[he.PRERELEASEIDENTIFIERLOOSE]})*))`);Ce("BUILDIDENTIFIER",`${Ka}+`);Ce("BUILD",`(?:\\+(${fe[he.BUILDIDENTIFIER]}(?:\\.${fe[he.BUILDIDENTIFIER]})*))`);Ce("FULLPLAIN",`v?${fe[he.MAINVERSION]}${fe[he.PRERELEASE]}?${fe[he.BUILD]}?`);Ce("FULL",`^${fe[he.FULLPLAIN]}$`);Ce("LOOSEPLAIN",`[v=\\s]*${fe[he.MAINVERSIONLOOSE]}${fe[he.PRERELEASELOOSE]}?${fe[he.BUILD]}?`);Ce("LOOSE",`^${fe[he.LOOSEPLAIN]}$`);Ce("GTLT","((?:<|>)?=?)");Ce("XRANGEIDENTIFIERLOOSE",`${fe[he.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);Ce("XRANGEIDENTIFIER",`${fe[he.NUMERICIDENTIFIER]}|x|X|\\*`);Ce("XRANGEPLAIN",`[v=\\s]*(${fe[he.XRANGEIDENTIFIER]})(?:\\.(${fe[he.XRANGEIDENTIFIER]})(?:\\.(${fe[he.XRANGEIDENTIFIER]})(?:${fe[he.PRERELEASE]})?${fe[he.BUILD]}?)?)?`);Ce("XRANGEPLAINLOOSE",`[v=\\s]*(${fe[he.XRANGEIDENTIFIERLOOSE]})(?:\\.(${fe[he.XRANGEIDENTIFIERLOOSE]})(?:\\.(${fe[he.XRANGEIDENTIFIERLOOSE]})(?:${fe[he.PRERELEASELOOSE]})?${fe[he.BUILD]}?)?)?`);Ce("XRANGE",`^${fe[he.GTLT]}\\s*${fe[he.XRANGEPLAIN]}$`);Ce("XRANGELOOSE",`^${fe[he.GTLT]}\\s*${fe[he.XRANGEPLAINLOOSE]}$`);Ce("COERCEPLAIN",`(^|[^\\d])(\\d{1,${qa}})(?:\\.(\\d{1,${qa}}))?(?:\\.(\\d{1,${qa}}))?`);Ce("COERCE",`${fe[he.COERCEPLAIN]}(?:$|[^\\d])`);Ce("COERCEFULL",fe[he.COERCEPLAIN]+`(?:${fe[he.PRERELEASE]})?(?:${fe[he.BUILD]})?(?:$|[^\\d])`);Ce("COERCERTL",fe[he.COERCE],!0);Ce("COERCERTLFULL",fe[he.COERCEFULL],!0);Ce("LONETILDE","(?:~>?)");Ce("TILDETRIM",`(\\s*)${fe[he.LONETILDE]}\\s+`,!0);Sn.tildeTrimReplace="$1~";Ce("TILDE",`^${fe[he.LONETILDE]}${fe[he.XRANGEPLAIN]}$`);Ce("TILDELOOSE",`^${fe[he.LONETILDE]}${fe[he.XRANGEPLAINLOOSE]}$`);Ce("LONECARET","(?:\\^)");Ce("CARETTRIM",`(\\s*)${fe[he.LONECARET]}\\s+`,!0);Sn.caretTrimReplace="$1^";Ce("CARET",`^${fe[he.LONECARET]}${fe[he.XRANGEPLAIN]}$`);Ce("CARETLOOSE",`^${fe[he.LONECARET]}${fe[he.XRANGEPLAINLOOSE]}$`);Ce("COMPARATORLOOSE",`^${fe[he.GTLT]}\\s*(${fe[he.LOOSEPLAIN]})$|^$`);Ce("COMPARATOR",`^${fe[he.GTLT]}\\s*(${fe[he.FULLPLAIN]})$|^$`);Ce("COMPARATORTRIM",`(\\s*)${fe[he.GTLT]}\\s*(${fe[he.LOOSEPLAIN]}|${fe[he.XRANGEPLAIN]})`,!0);Sn.comparatorTrimReplace="$1$2$3";Ce("HYPHENRANGE",`^\\s*(${fe[he.XRANGEPLAIN]})\\s+-\\s+(${fe[he.XRANGEPLAIN]})\\s*$`);Ce("HYPHENRANGELOOSE",`^\\s*(${fe[he.XRANGEPLAINLOOSE]})\\s+-\\s+(${fe[he.XRANGEPLAINLOOSE]})\\s*$`);Ce("STAR","(<|>)?=?\\s*\\*");Ce("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");Ce("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Fs=ge((ZN,pd)=>{"use strict";var YE=Object.freeze({loose:!0}),qE=Object.freeze({}),KE=t=>t?typeof t!="object"?YE:t:qE;pd.exports=KE});var ja=ge((JN,_d)=>{"use strict";var md=/^[0-9]+$/,gd=(t,e)=>{let n=md.test(t),i=md.test(e);return n&&i&&(t=+t,e=+e),t===e?0:n&&!i?-1:i&&!n?1:t<e?-1:1},jE=(t,e)=>gd(e,t);_d.exports={compareIdentifiers:gd,rcompareIdentifiers:jE}});var bt=ge((QN,Ed)=>{"use strict";var Us=Cr(),{MAX_LENGTH:yd,MAX_SAFE_INTEGER:Bs}=wr(),{safeRe:ks,t:Vs}=ki(),ZE=Fs(),{compareIdentifiers:Vi}=ja(),Za=class t{constructor(e,n){if(n=ZE(n),e instanceof t){if(e.loose===!!n.loose&&e.includePrerelease===!!n.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>yd)throw new TypeError(`version is longer than ${yd} characters`);Us("SemVer",e,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let i=e.trim().match(n.loose?ks[Vs.LOOSE]:ks[Vs.FULL]);if(!i)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>Bs||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Bs||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Bs||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map(r=>{if(/^[0-9]+$/.test(r)){let s=+r;if(s>=0&&s<Bs)return s}return r}):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(Us("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),Vi(this.major,e.major)||Vi(this.minor,e.minor)||Vi(this.patch,e.patch)}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let n=0;do{let i=this.prerelease[n],r=e.prerelease[n];if(Us("prerelease compare",n,i,r),i===void 0&&r===void 0)return 0;if(r===void 0)return 1;if(i===void 0)return-1;if(i===r)continue;return Vi(i,r)}while(++n)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let n=0;do{let i=this.build[n],r=e.build[n];if(Us("build compare",n,i,r),i===void 0&&r===void 0)return 0;if(r===void 0)return 1;if(i===void 0)return-1;if(i===r)continue;return Vi(i,r)}while(++n)}inc(e,n,i){if(e.startsWith("pre")){if(!n&&i===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let r=`-${n}`.match(this.options.loose?ks[Vs.PRERELEASELOOSE]:ks[Vs.PRERELEASE]);if(!r||r[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,i);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,i);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,i),this.inc("pre",n,i);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,i),this.inc("pre",n,i);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let r=Number(i)?1:0;if(this.prerelease.length===0)this.prerelease=[r];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&i===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(r)}}if(n){let s=[n,r];i===!1&&(s=[n]),Vi(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Ed.exports=Za});var _i=ge((eL,vd)=>{"use strict";var xd=bt(),JE=(t,e,n=!1)=>{if(t instanceof xd)return t;try{return new xd(t,e)}catch(i){if(!n)return null;throw i}};vd.exports=JE});var Sd=ge((tL,bd)=>{"use strict";var QE=_i(),ex=(t,e)=>{let n=QE(t,e);return n?n.version:null};bd.exports=ex});var Ad=ge((nL,Td)=>{"use strict";var tx=_i(),nx=(t,e)=>{let n=tx(t.trim().replace(/^[=v]+/,""),e);return n?n.version:null};Td.exports=nx});var wd=ge((iL,Rd)=>{"use strict";var Md=bt(),ix=(t,e,n,i,r)=>{typeof n=="string"&&(r=i,i=n,n=void 0);try{return new Md(t instanceof Md?t.version:t,n).inc(e,i,r).version}catch{return null}};Rd.exports=ix});var Pd=ge((rL,Id)=>{"use strict";var Cd=_i(),rx=(t,e)=>{let n=Cd(t,null,!0),i=Cd(e,null,!0),r=n.compare(i);if(r===0)return null;let s=r>0,o=s?n:i,a=s?i:n,l=!!o.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(o)===0)return a.minor&&!a.patch?"minor":"patch"}let u=l?"pre":"";return n.major!==i.major?u+"major":n.minor!==i.minor?u+"minor":n.patch!==i.patch?u+"patch":"prerelease"};Id.exports=rx});var Dd=ge((sL,Od)=>{"use strict";var sx=bt(),ox=(t,e)=>new sx(t,e).major;Od.exports=ox});var Ld=ge((oL,Nd)=>{"use strict";var ax=bt(),lx=(t,e)=>new ax(t,e).minor;Nd.exports=lx});var Ud=ge((aL,Fd)=>{"use strict";var cx=bt(),ux=(t,e)=>new cx(t,e).patch;Fd.exports=ux});var kd=ge((lL,Bd)=>{"use strict";var dx=_i(),fx=(t,e)=>{let n=dx(t,e);return n&&n.prerelease.length?n.prerelease:null};Bd.exports=fx});var Qt=ge((cL,Gd)=>{"use strict";var Vd=bt(),hx=(t,e,n)=>new Vd(t,n).compare(new Vd(e,n));Gd.exports=hx});var zd=ge((uL,Hd)=>{"use strict";var px=Qt(),mx=(t,e,n)=>px(e,t,n);Hd.exports=mx});var $d=ge((dL,Wd)=>{"use strict";var gx=Qt(),_x=(t,e)=>gx(t,e,!0);Wd.exports=_x});var Gs=ge((fL,Yd)=>{"use strict";var Xd=bt(),yx=(t,e,n)=>{let i=new Xd(t,n),r=new Xd(e,n);return i.compare(r)||i.compareBuild(r)};Yd.exports=yx});var Kd=ge((hL,qd)=>{"use strict";var Ex=Gs(),xx=(t,e)=>t.sort((n,i)=>Ex(n,i,e));qd.exports=xx});var Zd=ge((pL,jd)=>{"use strict";var vx=Gs(),bx=(t,e)=>t.sort((n,i)=>vx(i,n,e));jd.exports=bx});var Ir=ge((mL,Jd)=>{"use strict";var Sx=Qt(),Tx=(t,e,n)=>Sx(t,e,n)>0;Jd.exports=Tx});var Hs=ge((gL,Qd)=>{"use strict";var Ax=Qt(),Mx=(t,e,n)=>Ax(t,e,n)<0;Qd.exports=Mx});var Ja=ge((_L,ef)=>{"use strict";var Rx=Qt(),wx=(t,e,n)=>Rx(t,e,n)===0;ef.exports=wx});var Qa=ge((yL,tf)=>{"use strict";var Cx=Qt(),Ix=(t,e,n)=>Cx(t,e,n)!==0;tf.exports=Ix});var zs=ge((EL,nf)=>{"use strict";var Px=Qt(),Ox=(t,e,n)=>Px(t,e,n)>=0;nf.exports=Ox});var Ws=ge((xL,rf)=>{"use strict";var Dx=Qt(),Nx=(t,e,n)=>Dx(t,e,n)<=0;rf.exports=Nx});var el=ge((vL,sf)=>{"use strict";var Lx=Ja(),Fx=Qa(),Ux=Ir(),Bx=zs(),kx=Hs(),Vx=Ws(),Gx=(t,e,n,i)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof n=="object"&&(n=n.version),t===n;case"!==":return typeof t=="object"&&(t=t.version),typeof n=="object"&&(n=n.version),t!==n;case"":case"=":case"==":return Lx(t,n,i);case"!=":return Fx(t,n,i);case">":return Ux(t,n,i);case">=":return Bx(t,n,i);case"<":return kx(t,n,i);case"<=":return Vx(t,n,i);default:throw new TypeError(`Invalid operator: ${e}`)}};sf.exports=Gx});var af=ge((bL,of)=>{"use strict";var Hx=bt(),zx=_i(),{safeRe:$s,t:Xs}=ki(),Wx=(t,e)=>{if(t instanceof Hx)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let n=null;if(!e.rtl)n=t.match(e.includePrerelease?$s[Xs.COERCEFULL]:$s[Xs.COERCE]);else{let l=e.includePrerelease?$s[Xs.COERCERTLFULL]:$s[Xs.COERCERTL],c;for(;(c=l.exec(t))&&(!n||n.index+n[0].length!==t.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let i=n[2],r=n[3]||"0",s=n[4]||"0",o=e.includePrerelease&&n[5]?`-${n[5]}`:"",a=e.includePrerelease&&n[6]?`+${n[6]}`:"";return zx(`${i}.${r}.${s}${o}${a}`,e)};of.exports=Wx});var cf=ge((SL,lf)=>{"use strict";var tl=class{constructor(){this.max=1e3,this.map=new Map}get(e){let n=this.map.get(e);if(n!==void 0)return this.map.delete(e),this.map.set(e,n),n}delete(e){return this.map.delete(e)}set(e,n){if(!this.delete(e)&&n!==void 0){if(this.map.size>=this.max){let r=this.map.keys().next().value;this.delete(r)}this.map.set(e,n)}return this}};lf.exports=tl});var en=ge((TL,hf)=>{"use strict";var $x=/\s+/g,nl=class t{constructor(e,n){if(n=Yx(n),e instanceof t)return e.loose===!!n.loose&&e.includePrerelease===!!n.includePrerelease?e:new t(e.raw,n);if(e instanceof il)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=e.trim().replace($x," "),this.set=this.raw.split("||").map(i=>this.parseRange(i.trim())).filter(i=>i.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let i=this.set[0];if(this.set=this.set.filter(r=>!df(r[0])),this.set.length===0)this.set=[i];else if(this.set.length>1){for(let r of this.set)if(r.length===1&&ev(r[0])){this.set=[r];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let n=this.set[e];for(let i=0;i<n.length;i++)i>0&&(this.formatted+=" "),this.formatted+=n[i].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){let i=((this.options.includePrerelease&&Jx)|(this.options.loose&&Qx))+":"+e,r=uf.get(i);if(r)return r;let s=this.options.loose,o=s?kt[Ot.HYPHENRANGELOOSE]:kt[Ot.HYPHENRANGE];e=e.replace(o,uv(this.options.includePrerelease)),nt("hyphen replace",e),e=e.replace(kt[Ot.COMPARATORTRIM],Kx),nt("comparator trim",e),e=e.replace(kt[Ot.TILDETRIM],jx),nt("tilde trim",e),e=e.replace(kt[Ot.CARETTRIM],Zx),nt("caret trim",e);let a=e.split(" ").map(d=>tv(d,this.options)).join(" ").split(/\s+/).map(d=>cv(d,this.options));s&&(a=a.filter(d=>(nt("loose invalid filter",d,this.options),!!d.match(kt[Ot.COMPARATORLOOSE])))),nt("range list",a);let l=new Map,c=a.map(d=>new il(d,this.options));for(let d of c){if(df(d))return[d];l.set(d.value,d)}l.size>1&&l.has("")&&l.delete("");let u=[...l.values()];return uf.set(i,u),u}intersects(e,n){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(i=>ff(i,n)&&e.set.some(r=>ff(r,n)&&i.every(s=>r.every(o=>s.intersects(o,n)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new qx(e,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(dv(this.set[n],e,this.options))return!0;return!1}};hf.exports=nl;var Xx=cf(),uf=new Xx,Yx=Fs(),il=Pr(),nt=Cr(),qx=bt(),{safeRe:kt,t:Ot,comparatorTrimReplace:Kx,tildeTrimReplace:jx,caretTrimReplace:Zx}=ki(),{FLAG_INCLUDE_PRERELEASE:Jx,FLAG_LOOSE:Qx}=wr(),df=t=>t.value==="<0.0.0-0",ev=t=>t.value==="",ff=(t,e)=>{let n=!0,i=t.slice(),r=i.pop();for(;n&&i.length;)n=i.every(s=>r.intersects(s,e)),r=i.pop();return n},tv=(t,e)=>(nt("comp",t,e),t=rv(t,e),nt("caret",t),t=nv(t,e),nt("tildes",t),t=ov(t,e),nt("xrange",t),t=lv(t,e),nt("stars",t),t),Dt=t=>!t||t.toLowerCase()==="x"||t==="*",nv=(t,e)=>t.trim().split(/\s+/).map(n=>iv(n,e)).join(" "),iv=(t,e)=>{let n=e.loose?kt[Ot.TILDELOOSE]:kt[Ot.TILDE];return t.replace(n,(i,r,s,o,a)=>{nt("tilde",t,i,r,s,o,a);let l;return Dt(r)?l="":Dt(s)?l=`>=${r}.0.0 <${+r+1}.0.0-0`:Dt(o)?l=`>=${r}.${s}.0 <${r}.${+s+1}.0-0`:a?(nt("replaceTilde pr",a),l=`>=${r}.${s}.${o}-${a} <${r}.${+s+1}.0-0`):l=`>=${r}.${s}.${o} <${r}.${+s+1}.0-0`,nt("tilde return",l),l})},rv=(t,e)=>t.trim().split(/\s+/).map(n=>sv(n,e)).join(" "),sv=(t,e)=>{nt("caret",t,e);let n=e.loose?kt[Ot.CARETLOOSE]:kt[Ot.CARET],i=e.includePrerelease?"-0":"";return t.replace(n,(r,s,o,a,l)=>{nt("caret",t,r,s,o,a,l);let c;return Dt(s)?c="":Dt(o)?c=`>=${s}.0.0${i} <${+s+1}.0.0-0`:Dt(a)?s==="0"?c=`>=${s}.${o}.0${i} <${s}.${+o+1}.0-0`:c=`>=${s}.${o}.0${i} <${+s+1}.0.0-0`:l?(nt("replaceCaret pr",l),s==="0"?o==="0"?c=`>=${s}.${o}.${a}-${l} <${s}.${o}.${+a+1}-0`:c=`>=${s}.${o}.${a}-${l} <${s}.${+o+1}.0-0`:c=`>=${s}.${o}.${a}-${l} <${+s+1}.0.0-0`):(nt("no pr"),s==="0"?o==="0"?c=`>=${s}.${o}.${a}${i} <${s}.${o}.${+a+1}-0`:c=`>=${s}.${o}.${a}${i} <${s}.${+o+1}.0-0`:c=`>=${s}.${o}.${a} <${+s+1}.0.0-0`),nt("caret return",c),c})},ov=(t,e)=>(nt("replaceXRanges",t,e),t.split(/\s+/).map(n=>av(n,e)).join(" ")),av=(t,e)=>{t=t.trim();let n=e.loose?kt[Ot.XRANGELOOSE]:kt[Ot.XRANGE];return t.replace(n,(i,r,s,o,a,l)=>{nt("xRange",t,i,r,s,o,a,l);let c=Dt(s),u=c||Dt(o),d=u||Dt(a),h=d;return r==="="&&h&&(r=""),l=e.includePrerelease?"-0":"",c?r===">"||r==="<"?i="<0.0.0-0":i="*":r&&h?(u&&(o=0),a=0,r===">"?(r=">=",u?(s=+s+1,o=0,a=0):(o=+o+1,a=0)):r==="<="&&(r="<",u?s=+s+1:o=+o+1),r==="<"&&(l="-0"),i=`${r+s}.${o}.${a}${l}`):u?i=`>=${s}.0.0${l} <${+s+1}.0.0-0`:d&&(i=`>=${s}.${o}.0${l} <${s}.${+o+1}.0-0`),nt("xRange return",i),i})},lv=(t,e)=>(nt("replaceStars",t,e),t.trim().replace(kt[Ot.STAR],"")),cv=(t,e)=>(nt("replaceGTE0",t,e),t.trim().replace(kt[e.includePrerelease?Ot.GTE0PRE:Ot.GTE0],"")),uv=t=>(e,n,i,r,s,o,a,l,c,u,d,h)=>(Dt(i)?n="":Dt(r)?n=`>=${i}.0.0${t?"-0":""}`:Dt(s)?n=`>=${i}.${r}.0${t?"-0":""}`:o?n=`>=${n}`:n=`>=${n}${t?"-0":""}`,Dt(c)?l="":Dt(u)?l=`<${+c+1}.0.0-0`:Dt(d)?l=`<${c}.${+u+1}.0-0`:h?l=`<=${c}.${u}.${d}-${h}`:t?l=`<${c}.${u}.${+d+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),dv=(t,e,n)=>{for(let i=0;i<t.length;i++)if(!t[i].test(e))return!1;if(e.prerelease.length&&!n.includePrerelease){for(let i=0;i<t.length;i++)if(nt(t[i].semver),t[i].semver!==il.ANY&&t[i].semver.prerelease.length>0){let r=t[i].semver;if(r.major===e.major&&r.minor===e.minor&&r.patch===e.patch)return!0}return!1}return!0}});var Pr=ge((AL,Ef)=>{"use strict";var Or=Symbol("SemVer ANY"),ol=class t{static get ANY(){return Or}constructor(e,n){if(n=pf(n),e instanceof t){if(e.loose===!!n.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),sl("comparator",e,n),this.options=n,this.loose=!!n.loose,this.parse(e),this.semver===Or?this.value="":this.value=this.operator+this.semver.version,sl("comp",this)}parse(e){let n=this.options.loose?mf[gf.COMPARATORLOOSE]:mf[gf.COMPARATOR],i=e.match(n);if(!i)throw new TypeError(`Invalid comparator: ${e}`);this.operator=i[1]!==void 0?i[1]:"",this.operator==="="&&(this.operator=""),i[2]?this.semver=new _f(i[2],this.options.loose):this.semver=Or}toString(){return this.value}test(e){if(sl("Comparator.test",e,this.options.loose),this.semver===Or||e===Or)return!0;if(typeof e=="string")try{e=new _f(e,this.options)}catch{return!1}return rl(e,this.operator,this.semver,this.options)}intersects(e,n){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new yf(e.value,n).test(this.value):e.operator===""?e.value===""?!0:new yf(this.value,n).test(e.semver):(n=pf(n),n.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||rl(this.semver,"<",e.semver,n)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||rl(this.semver,">",e.semver,n)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};Ef.exports=ol;var pf=Fs(),{safeRe:mf,t:gf}=ki(),rl=el(),sl=Cr(),_f=bt(),yf=en()});var Dr=ge((ML,xf)=>{"use strict";var fv=en(),hv=(t,e,n)=>{try{e=new fv(e,n)}catch{return!1}return e.test(t)};xf.exports=hv});var bf=ge((RL,vf)=>{"use strict";var pv=en(),mv=(t,e)=>new pv(t,e).set.map(n=>n.map(i=>i.value).join(" ").trim().split(" "));vf.exports=mv});var Tf=ge((wL,Sf)=>{"use strict";var gv=bt(),_v=en(),yv=(t,e,n)=>{let i=null,r=null,s=null;try{s=new _v(e,n)}catch{return null}return t.forEach(o=>{s.test(o)&&(!i||r.compare(o)===-1)&&(i=o,r=new gv(i,n))}),i};Sf.exports=yv});var Mf=ge((CL,Af)=>{"use strict";var Ev=bt(),xv=en(),vv=(t,e,n)=>{let i=null,r=null,s=null;try{s=new xv(e,n)}catch{return null}return t.forEach(o=>{s.test(o)&&(!i||r.compare(o)===1)&&(i=o,r=new Ev(i,n))}),i};Af.exports=vv});var Cf=ge((IL,wf)=>{"use strict";var al=bt(),bv=en(),Rf=Ir(),Sv=(t,e)=>{t=new bv(t,e);let n=new al("0.0.0");if(t.test(n)||(n=new al("0.0.0-0"),t.test(n)))return n;n=null;for(let i=0;i<t.set.length;++i){let r=t.set[i],s=null;r.forEach(o=>{let a=new al(o.semver.version);switch(o.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||Rf(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${o.operator}`)}}),s&&(!n||Rf(n,s))&&(n=s)}return n&&t.test(n)?n:null};wf.exports=Sv});var Pf=ge((PL,If)=>{"use strict";var Tv=en(),Av=(t,e)=>{try{return new Tv(t,e).range||"*"}catch{return null}};If.exports=Av});var Ys=ge((OL,Lf)=>{"use strict";var Mv=bt(),Nf=Pr(),{ANY:Rv}=Nf,wv=en(),Cv=Dr(),Of=Ir(),Df=Hs(),Iv=Ws(),Pv=zs(),Ov=(t,e,n,i)=>{t=new Mv(t,i),e=new wv(e,i);let r,s,o,a,l;switch(n){case">":r=Of,s=Iv,o=Df,a=">",l=">=";break;case"<":r=Df,s=Pv,o=Of,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Cv(t,e,i))return!1;for(let c=0;c<e.set.length;++c){let u=e.set[c],d=null,h=null;if(u.forEach(f=>{f.semver===Rv&&(f=new Nf(">=0.0.0")),d=d||f,h=h||f,r(f.semver,d.semver,i)?d=f:o(f.semver,h.semver,i)&&(h=f)}),d.operator===a||d.operator===l||(!h.operator||h.operator===a)&&s(t,h.semver))return!1;if(h.operator===l&&o(t,h.semver))return!1}return!0};Lf.exports=Ov});var Uf=ge((DL,Ff)=>{"use strict";var Dv=Ys(),Nv=(t,e,n)=>Dv(t,e,">",n);Ff.exports=Nv});var kf=ge((NL,Bf)=>{"use strict";var Lv=Ys(),Fv=(t,e,n)=>Lv(t,e,"<",n);Bf.exports=Fv});var Hf=ge((LL,Gf)=>{"use strict";var Vf=en(),Uv=(t,e,n)=>(t=new Vf(t,n),e=new Vf(e,n),t.intersects(e,n));Gf.exports=Uv});var Wf=ge((FL,zf)=>{"use strict";var Bv=Dr(),kv=Qt();zf.exports=(t,e,n)=>{let i=[],r=null,s=null,o=t.sort((u,d)=>kv(u,d,n));for(let u of o)Bv(u,e,n)?(s=u,r||(r=u)):(s&&i.push([r,s]),s=null,r=null);r&&i.push([r,null]);let a=[];for(let[u,d]of i)u===d?a.push(u):!d&&u===o[0]?a.push("*"):d?u===o[0]?a.push(`<=${d}`):a.push(`${u} - ${d}`):a.push(`>=${u}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var jf=ge((UL,Kf)=>{"use strict";var $f=en(),cl=Pr(),{ANY:ll}=cl,Nr=Dr(),ul=Qt(),Vv=(t,e,n={})=>{if(t===e)return!0;t=new $f(t,n),e=new $f(e,n);let i=!1;e:for(let r of t.set){for(let s of e.set){let o=Hv(r,s,n);if(i=i||o!==null,o)continue e}if(i)return!1}return!0},Gv=[new cl(">=0.0.0-0")],Xf=[new cl(">=0.0.0")],Hv=(t,e,n)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===ll){if(e.length===1&&e[0].semver===ll)return!0;n.includePrerelease?t=Gv:t=Xf}if(e.length===1&&e[0].semver===ll){if(n.includePrerelease)return!0;e=Xf}let i=new Set,r,s;for(let f of t)f.operator===">"||f.operator===">="?r=Yf(r,f,n):f.operator==="<"||f.operator==="<="?s=qf(s,f,n):i.add(f.semver);if(i.size>1)return null;let o;if(r&&s){if(o=ul(r.semver,s.semver,n),o>0)return null;if(o===0&&(r.operator!==">="||s.operator!=="<="))return null}for(let f of i){if(r&&!Nr(f,String(r),n)||s&&!Nr(f,String(s),n))return null;for(let p of e)if(!Nr(f,String(p),n))return!1;return!0}let a,l,c,u,d=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,h=r&&!n.includePrerelease&&r.semver.prerelease.length?r.semver:!1;d&&d.prerelease.length===1&&s.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(let f of e){if(u=u||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",r){if(h&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===h.major&&f.semver.minor===h.minor&&f.semver.patch===h.patch&&(h=!1),f.operator===">"||f.operator===">="){if(a=Yf(r,f,n),a===f&&a!==r)return!1}else if(r.operator===">="&&!Nr(r.semver,String(f),n))return!1}if(s){if(d&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===d.major&&f.semver.minor===d.minor&&f.semver.patch===d.patch&&(d=!1),f.operator==="<"||f.operator==="<="){if(l=qf(s,f,n),l===f&&l!==s)return!1}else if(s.operator==="<="&&!Nr(s.semver,String(f),n))return!1}if(!f.operator&&(s||r)&&o!==0)return!1}return!(r&&c&&!s&&o!==0||s&&u&&!r&&o!==0||h||d)},Yf=(t,e,n)=>{if(!t)return e;let i=ul(t.semver,e.semver,n);return i>0?t:i<0||e.operator===">"&&t.operator===">="?e:t},qf=(t,e,n)=>{if(!t)return e;let i=ul(t.semver,e.semver,n);return i<0?t:i>0||e.operator==="<"&&t.operator==="<="?e:t};Kf.exports=Vv});var Gi=ge((BL,Qf)=>{"use strict";var dl=ki(),Zf=wr(),zv=bt(),Jf=ja(),Wv=_i(),$v=Sd(),Xv=Ad(),Yv=wd(),qv=Pd(),Kv=Dd(),jv=Ld(),Zv=Ud(),Jv=kd(),Qv=Qt(),eb=zd(),tb=$d(),nb=Gs(),ib=Kd(),rb=Zd(),sb=Ir(),ob=Hs(),ab=Ja(),lb=Qa(),cb=zs(),ub=Ws(),db=el(),fb=af(),hb=Pr(),pb=en(),mb=Dr(),gb=bf(),_b=Tf(),yb=Mf(),Eb=Cf(),xb=Pf(),vb=Ys(),bb=Uf(),Sb=kf(),Tb=Hf(),Ab=Wf(),Mb=jf();Qf.exports={parse:Wv,valid:$v,clean:Xv,inc:Yv,diff:qv,major:Kv,minor:jv,patch:Zv,prerelease:Jv,compare:Qv,rcompare:eb,compareLoose:tb,compareBuild:nb,sort:ib,rsort:rb,gt:sb,lt:ob,eq:ab,neq:lb,gte:cb,lte:ub,cmp:db,coerce:fb,Comparator:hb,Range:pb,satisfies:mb,toComparators:gb,maxSatisfying:_b,minSatisfying:yb,minVersion:Eb,validRange:xb,outside:vb,gtr:bb,ltr:Sb,intersects:Tb,simplifyRange:Ab,subset:Mb,SemVer:zv,re:dl.re,src:dl.src,tokens:dl.t,SEMVER_SPEC_VERSION:Zf.SEMVER_SPEC_VERSION,RELEASE_TYPES:Zf.RELEASE_TYPES,compareIdentifiers:Jf.compareIdentifiers,rcompareIdentifiers:Jf.rcompareIdentifiers}});var Ah=ge(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});function Yt(t){let e=Object.create(null);for(let n of t.split(","))e[n]=1;return n=>n in e}var Lb={},Fb=[],Ub=()=>{},Bb=()=>!1,kb=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vb=t=>t.startsWith("onUpdate:"),Gb=Object.assign,Hb=(t,e)=>{let n=t.indexOf(e);n>-1&&t.splice(n,1)},zb=Object.prototype.hasOwnProperty,Wb=(t,e)=>zb.call(t,e),Ei=Array.isArray,hh=t=>xi(t)==="[object Map]",ph=t=>xi(t)==="[object Set]",bl=t=>xi(t)==="[object Date]",$b=t=>xi(t)==="[object RegExp]",Lr=t=>typeof t=="function",Tn=t=>typeof t=="string",Fr=t=>typeof t=="symbol",$n=t=>t!==null&&typeof t=="object",Xb=t=>($n(t)||Lr(t))&&Lr(t.then)&&Lr(t.catch),Sl=Object.prototype.toString,xi=t=>Sl.call(t),Yb=t=>xi(t).slice(8,-1),mh=t=>xi(t)==="[object Object]",qb=t=>Tn(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kb=Yt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jb=Yt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),js=t=>{let e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zb=/-(\w)/g,Jb=js(t=>t.replace(Zb,(e,n)=>n?n.toUpperCase():"")),Qb=/\B([A-Z])/g,gh=js(t=>t.replace(Qb,"-$1").toLowerCase()),_h=js(t=>t.charAt(0).toUpperCase()+t.slice(1)),eS=js(t=>t?`on${_h(t)}`:""),tS=(t,e)=>!Object.is(t,e),nS=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},iS=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},rS=t=>{let e=parseFloat(t);return isNaN(e)?t:e},sS=t=>{let e=Tn(t)?Number(t):NaN;return isNaN(e)?t:e},dh,oS=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),aS=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function lS(t){return aS.test(t)?`__props.${t}`:`__props[${JSON.stringify(t)}]`}function cS(t,e){return t+JSON.stringify(e,(n,i)=>typeof i=="function"?i.toString():i)}var uS={TEXT:1,1:"TEXT",CLASS:2,2:"CLASS",STYLE:4,4:"STYLE",PROPS:8,8:"PROPS",FULL_PROPS:16,16:"FULL_PROPS",NEED_HYDRATION:32,32:"NEED_HYDRATION",STABLE_FRAGMENT:64,64:"STABLE_FRAGMENT",KEYED_FRAGMENT:128,128:"KEYED_FRAGMENT",UNKEYED_FRAGMENT:256,256:"UNKEYED_FRAGMENT",NEED_PATCH:512,512:"NEED_PATCH",DYNAMIC_SLOTS:1024,1024:"DYNAMIC_SLOTS",DEV_ROOT_FRAGMENT:2048,2048:"DEV_ROOT_FRAGMENT",CACHED:-1,"-1":"CACHED",BAIL:-2,"-2":"BAIL"},dS={1:"TEXT",2:"CLASS",4:"STYLE",8:"PROPS",16:"FULL_PROPS",32:"NEED_HYDRATION",64:"STABLE_FRAGMENT",128:"KEYED_FRAGMENT",256:"UNKEYED_FRAGMENT",512:"NEED_PATCH",1024:"DYNAMIC_SLOTS",2048:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},fS={ELEMENT:1,1:"ELEMENT",FUNCTIONAL_COMPONENT:2,2:"FUNCTIONAL_COMPONENT",STATEFUL_COMPONENT:4,4:"STATEFUL_COMPONENT",TEXT_CHILDREN:8,8:"TEXT_CHILDREN",ARRAY_CHILDREN:16,16:"ARRAY_CHILDREN",SLOTS_CHILDREN:32,32:"SLOTS_CHILDREN",TELEPORT:64,64:"TELEPORT",SUSPENSE:128,128:"SUSPENSE",COMPONENT_SHOULD_KEEP_ALIVE:256,256:"COMPONENT_SHOULD_KEEP_ALIVE",COMPONENT_KEPT_ALIVE:512,512:"COMPONENT_KEPT_ALIVE",COMPONENT:6,6:"COMPONENT"},hS={STABLE:1,1:"STABLE",DYNAMIC:2,2:"DYNAMIC",FORWARDED:3,3:"FORWARDED"},pS={1:"STABLE",2:"DYNAMIC",3:"FORWARDED"},mS="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",yh=Yt(mS),gS=yh,fh=2;function _S(t,e=0,n=t.length){if(e=Math.max(0,Math.min(e,t.length)),n=Math.max(0,Math.min(n,t.length)),e>n)return"";let i=t.split(/(\r?\n)/),r=i.filter((a,l)=>l%2===1);i=i.filter((a,l)=>l%2===0);let s=0,o=[];for(let a=0;a<i.length;a++)if(s+=i[a].length+(r[a]&&r[a].length||0),s>=e){for(let l=a-fh;l<=a+fh||n>s;l++){if(l<0||l>=i.length)continue;let c=l+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${i[l]}`);let u=i[l].length,d=r[l]&&r[l].length||0;if(l===a){let h=e-(s-(u+d)),f=Math.max(1,n>s?u-h:n-e);o.push("   |  "+" ".repeat(h)+"^".repeat(f))}else if(l>a){if(n>s){let h=Math.max(Math.min(n-s,u),1);o.push("   |  "+"^".repeat(h))}s+=u+d}}break}return o.join(`
`)}function Tl(t){if(Ei(t)){let e={};for(let n=0;n<t.length;n++){let i=t[n],r=Tn(i)?Eh(i):Tl(i);if(r)for(let s in r)e[s]=r[s]}return e}else if(Tn(t)||$n(t))return t}var yS=/;(?![^(]*\))/g,ES=/:([^]+)/,xS=/\/\*[^]*?\*\//g;function Eh(t){let e={};return t.replace(xS,"").split(yS).forEach(n=>{if(n){let i=n.split(ES);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vS(t){if(!t)return"";if(Tn(t))return t;let e="";for(let n in t){let i=t[n];if(Tn(i)||typeof i=="number"){let r=n.startsWith("--")?n:gh(n);e+=`${r}:${i};`}}return e}function Al(t){let e="";if(Tn(t))e=t;else if(Ei(t))for(let n=0;n<t.length;n++){let i=Al(t[n]);i&&(e+=i+" ")}else if($n(t))for(let n in t)t[n]&&(e+=n+" ");return e.trim()}function bS(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Tn(e)&&(t.class=Al(e)),n&&(t.style=Tl(n)),t}var SS="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",TS="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",AS="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",MS="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",RS=Yt(SS),wS=Yt(TS),CS=Yt(AS),IS=Yt(MS),xh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PS=Yt(xh),OS=Yt(xh+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function DS(t){return!!t||t===""}var NS=/[>/="'\u0009\u000a\u000c\u0020]/,xl={};function LS(t){if(xl.hasOwnProperty(t))return xl[t];let e=NS.test(t);return e&&console.error(`unsafe attribute name: ${t}`),xl[t]=!e}var FS={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},US=Yt("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),BS=Yt("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"),kS=Yt("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");function VS(t){if(t==null)return!1;let e=typeof t;return e==="string"||e==="number"||e==="boolean"}var GS=/["'&<>]/;function HS(t){let e=""+t,n=GS.exec(e);if(!n)return e;let i="",r,s,o=0;for(s=n.index;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==s&&(i+=e.slice(o,s)),o=s+1,i+=r}return o!==s?i+e.slice(o,s):i}var zS=/^-?>|<!--|-->|--!>|<!-$/g;function WS(t){return t.replace(zS,"")}var vh=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function $S(t,e){return t.replace(vh,n=>e?n==='"'?'\\\\\\"':`\\\\${n}`:`\\${n}`)}function XS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Zs(t[i],e[i]);return n}function Zs(t,e){if(t===e)return!0;let n=bl(t),i=bl(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Fr(t),i=Fr(e),n||i)return t===e;if(n=Ei(t),i=Ei(e),n||i)return n&&i?XS(t,e):!1;if(n=$n(t),i=$n(e),n||i){if(!n||!i)return!1;let r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(let o in t){let a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Zs(t[o],e[o]))return!1}}return String(t)===String(e)}function YS(t,e){return t.findIndex(n=>Zs(n,e))}var bh=t=>!!(t&&t.__v_isRef===!0),Sh=t=>Tn(t)?t:t==null?"":Ei(t)||$n(t)&&(t.toString===Sl||!Lr(t.toString))?bh(t)?Sh(t.value):JSON.stringify(t,Th,2):String(t),Th=(t,e)=>bh(e)?Th(t,e.value):hh(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[vl(i,s)+" =>"]=r,n),{})}:ph(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:Fr(e)?vl(e):$n(e)&&!Ei(e)&&!mh(e)?String(e):e,vl=(t,e="")=>{var n;return Fr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};ce.EMPTY_ARR=Fb;ce.EMPTY_OBJ=Lb;ce.NO=Bb;ce.NOOP=Ub;ce.PatchFlagNames=dS;ce.PatchFlags=uS;ce.ShapeFlags=fS;ce.SlotFlags=hS;ce.camelize=Jb;ce.capitalize=_h;ce.cssVarNameEscapeSymbolsRE=vh;ce.def=iS;ce.escapeHtml=HS;ce.escapeHtmlComment=WS;ce.extend=Gb;ce.genCacheKey=cS;ce.genPropsAccessExp=lS;ce.generateCodeFrame=_S;ce.getEscapedCssVarName=$S;ce.getGlobalThis=oS;ce.hasChanged=tS;ce.hasOwn=Wb;ce.hyphenate=gh;ce.includeBooleanAttr=DS;ce.invokeArrayFns=nS;ce.isArray=Ei;ce.isBooleanAttr=OS;ce.isBuiltInDirective=jb;ce.isDate=bl;ce.isFunction=Lr;ce.isGloballyAllowed=yh;ce.isGloballyWhitelisted=gS;ce.isHTMLTag=RS;ce.isIntegerKey=qb;ce.isKnownHtmlAttr=US;ce.isKnownMathMLAttr=kS;ce.isKnownSvgAttr=BS;ce.isMap=hh;ce.isMathMLTag=CS;ce.isModelListener=Vb;ce.isObject=$n;ce.isOn=kb;ce.isPlainObject=mh;ce.isPromise=Xb;ce.isRegExp=$b;ce.isRenderableAttrValue=VS;ce.isReservedProp=Kb;ce.isSSRSafeAttrName=LS;ce.isSVGTag=wS;ce.isSet=ph;ce.isSpecialBooleanAttr=PS;ce.isString=Tn;ce.isSymbol=Fr;ce.isVoidTag=IS;ce.looseEqual=Zs;ce.looseIndexOf=YS;ce.looseToNumber=rS;ce.makeMap=Yt;ce.normalizeClass=Al;ce.normalizeProps=bS;ce.normalizeStyle=Tl;ce.objectToString=Sl;ce.parseStringStyle=Eh;ce.propsToAttrMap=FS;ce.remove=Hb;ce.slotFlagsText=pS;ce.stringifyStyle=vS;ce.toDisplayString=Sh;ce.toHandlerKey=eS;ce.toNumber=sS;ce.toRawType=Yb;ce.toTypeString=xi});var Js=ge((h2,Mh)=>{"use strict";Mh.exports=Ah()});var Xh=ge(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});var Ee=Js(),St,no=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){let n=St;try{return St=this,e()}finally{St=n}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}};function qS(t){return new no(t)}function Ch(){return St}function KS(t,e=!1){St&&St.cleanups.push(t)}var qe,jS={ACTIVE:1,1:"ACTIVE",RUNNING:2,2:"RUNNING",TRACKING:4,4:"TRACKING",NOTIFIED:8,8:"NOTIFIED",DIRTY:16,16:"DIRTY",ALLOW_RECURSE:32,32:"ALLOW_RECURSE",PAUSED:64,64:"PAUSED",EVALUATED:128,128:"EVALUATED"},Ml=new WeakSet,bi=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ph(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),Oh(this);let e=qe,n=qt;qe=this,qt=!0;try{return this.fn()}finally{Dh(this),qe=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kl(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cl(this)&&this.run()}get dirty(){return Cl(this)}},Ih=0,Br,kr;function Ph(t,e=!1){if(t.flags|=8,e){t.next=kr,kr=t;return}t.next=Br,Br=t}function Ul(){Ih++}function Bl(){if(--Ih>0)return;if(kr){let e=kr;for(kr=void 0;e;){let n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Br;){let e=Br;for(Br=void 0;e;){let n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Oh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dh(t){let e,n=t.depsTail,i=n;for(;i;){let r=i.prevDep;i.version===-1?(i===n&&(n=r),kl(i),ZS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Cl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Nh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vr)||(t.globalVersion=Vr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Cl(t))))return;t.flags|=2;let e=t.dep,n=qe,i=qt;qe=t,qt=!0;try{Oh(t);let r=t.fn(t._value);(e.version===0||Ee.hasChanged(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{qe=n,qt=i,Dh(t),t.flags&=-3}}function kl(t,e=!1){let{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)kl(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ZS(t){let{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function JS(t,e){t.effect instanceof bi&&(t=t.effect.fn);let n=new bi(t);e&&Ee.extend(n,e);try{n.run()}catch(r){throw n.stop(),r}let i=n.run.bind(n);return i.effect=n,i}function QS(t){t.effect.stop()}var qt=!0,Vl=[];function Gl(){Vl.push(qt),qt=!1}function eT(){Vl.push(qt),qt=!0}function Hl(){let t=Vl.pop();qt=t===void 0?!0:t}function tT(t,e=!1){qe instanceof bi&&(qe.cleanup=t)}function Rh(t){let{cleanup:e}=t;if(t.cleanup=void 0,e){let n=qe;qe=void 0;try{e()}finally{qe=n}}}var Vr=0,Il=class{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Wi=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!qe||!qt||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new Il(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,Lh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){let i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=i)}return n}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){Ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Bl()}}};function Lh(t){if(t.dep.sc++,t.sub.flags&4){let e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Lh(i)}let n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}var io=new WeakMap,Yn=Symbol(""),ro=Symbol(""),$i=Symbol("");function Nt(t,e,n){if(qt&&qe){let i=io.get(t);i||io.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Wi),r.map=i,r.key=n),r.track()}}function Dn(t,e,n,i,r,s){let o=io.get(t);if(!o){Vr++;return}let a=l=>{l&&l.trigger()};if(Ul(),e==="clear")o.forEach(a);else{let l=Ee.isArray(t),c=l&&Ee.isIntegerKey(n);if(l&&n==="length"){let u=Number(i);o.forEach((d,h)=>{(h==="length"||h===$i||!Ee.isSymbol(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get($i)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Yn)),Ee.isMap(t)&&a(o.get(ro)));break;case"delete":l||(a(o.get(Yn)),Ee.isMap(t)&&a(o.get(ro)));break;case"set":Ee.isMap(t)&&a(o.get(Yn));break}}Bl()}function nT(t,e){let n=io.get(t);return n&&n.get(e)}function vi(t){let e=$e(t);return e===t?e:(Nt(e,"iterate",$i),rn(t)?e:e.map(Tt))}function uo(t){return Nt(t=$e(t),"iterate",$i),t}var iT={__proto__:null,[Symbol.iterator](){return Rl(this,Symbol.iterator,Tt)},concat(...t){return vi(this).concat(...t.map(e=>Ee.isArray(e)?vi(e):e))},entries(){return Rl(this,"entries",t=>(t[1]=Tt(t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(Tt),arguments)},find(t,e){return On(this,"find",t,e,Tt,arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,Tt,arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return wl(this,"includes",t)},indexOf(...t){return wl(this,"indexOf",t)},join(t){return vi(this).join(t)},lastIndexOf(...t){return wl(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return Ur(this,"pop")},push(...t){return Ur(this,"push",t)},reduce(t,...e){return wh(this,"reduce",t,e)},reduceRight(t,...e){return wh(this,"reduceRight",t,e)},shift(){return Ur(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return Ur(this,"splice",t)},toReversed(){return vi(this).toReversed()},toSorted(t){return vi(this).toSorted(t)},toSpliced(...t){return vi(this).toSpliced(...t)},unshift(...t){return Ur(this,"unshift",t)},values(){return Rl(this,"values",Tt)}};function Rl(t,e,n){let i=uo(t),r=i[e]();return i!==t&&!rn(t)&&(r._next=r.next,r.next=()=>{let s=r._next();return s.value&&(s.value=n(s.value)),s}),r}var rT=Array.prototype;function On(t,e,n,i,r,s){let o=uo(t),a=o!==t&&!rn(t),l=o[e];if(l!==rT[e]){let d=l.apply(t,s);return a?Tt(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Tt(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));let u=l.call(o,c,i);return a&&r?r(u):u}function wh(t,e,n,i){let r=uo(t),s=n;return r!==t&&(rn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Tt(a),l,t)}),r[e](s,...i)}function wl(t,e,n){let i=$e(t);Nt(i,"iterate",$i);let r=i[e](...n);return(r===-1||r===!1)&&Gh(n[0])?(n[0]=$e(n[0]),i[e](...n)):r}function Ur(t,e,n=[]){Gl(),Ul();let i=$e(t)[e].apply(t,n);return Bl(),Hl(),i}var sT=Ee.makeMap("__proto__,__v_isRef,__isVue"),Fh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ee.isSymbol));function oT(t){Ee.isSymbol(t)||(t=String(t));let e=$e(this);return Nt(e,"has",t),e.hasOwnProperty(t)}var so=class{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;let r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Vh:kh:s?Bh:Uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;let o=Ee.isArray(e);if(!r){let l;if(o&&(l=iT[n]))return l;if(n==="hasOwnProperty")return oT}let a=Reflect.get(e,n,Lt(e)?e:i);return(Ee.isSymbol(n)?Fh.has(n):sT(n))||(r||Nt(e,"get",n),s)?a:Lt(a)?o&&Ee.isIntegerKey(n)?a:a.value:Ee.isObject(a)?r?Wl(a):zl(a):a}},oo=class extends so{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){let l=qn(s);if(!rn(i)&&!qn(i)&&(s=$e(s),i=$e(i)),!Ee.isArray(e)&&Lt(s)&&!Lt(i))return l?!1:(s.value=i,!0)}let o=Ee.isArray(e)&&Ee.isIntegerKey(n)?Number(n)<e.length:Ee.hasOwn(e,n),a=Reflect.set(e,n,i,Lt(e)?e:r);return e===$e(r)&&(o?Ee.hasChanged(i,s)&&Dn(e,"set",n,i):Dn(e,"add",n,i)),a}deleteProperty(e,n){let i=Ee.hasOwn(e,n);e[n];let r=Reflect.deleteProperty(e,n);return r&&i&&Dn(e,"delete",n,void 0),r}has(e,n){let i=Reflect.has(e,n);return(!Ee.isSymbol(n)||!Fh.has(n))&&Nt(e,"has",n),i}ownKeys(e){return Nt(e,"iterate",Ee.isArray(e)?"length":Yn),Reflect.ownKeys(e)}},ao=class extends so{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}},aT=new oo,lT=new ao,cT=new oo(!0),uT=new ao(!0),Pl=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function dT(t,e,n){return function(...i){let r=this.__v_raw,s=$e(r),o=Ee.isMap(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Pl:e?lo:Tt;return!e&&Nt(s,"iterate",l?ro:Yn),{next(){let{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fT(t,e){let n={get(r){let s=this.__v_raw,o=$e(s),a=$e(r);t||(Ee.hasChanged(r,a)&&Nt(o,"get",r),Nt(o,"get",a));let{has:l}=Qs(o),c=e?Pl:t?lo:Tt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){let r=this.__v_raw;return!t&&Nt($e(r),"iterate",Yn),Reflect.get(r,"size",r)},has(r){let s=this.__v_raw,o=$e(s),a=$e(r);return t||(Ee.hasChanged(r,a)&&Nt(o,"has",r),Nt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){let o=this,a=o.__v_raw,l=$e(a),c=e?Pl:t?lo:Tt;return!t&&Nt(l,"iterate",Yn),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Ee.extend(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(r){!e&&!rn(r)&&!qn(r)&&(r=$e(r));let s=$e(this);return Qs(s).has.call(s,r)||(s.add(r),Dn(s,"add",r,r)),this},set(r,s){!e&&!rn(s)&&!qn(s)&&(s=$e(s));let o=$e(this),{has:a,get:l}=Qs(o),c=a.call(o,r);c||(r=$e(r),c=a.call(o,r));let u=l.call(o,r);return o.set(r,s),c?Ee.hasChanged(s,u)&&Dn(o,"set",r,s):Dn(o,"add",r,s),this},delete(r){let s=$e(this),{has:o,get:a}=Qs(s),l=o.call(s,r);l||(r=$e(r),l=o.call(s,r)),a&&a.call(s,r);let c=s.delete(r);return l&&Dn(s,"delete",r,void 0),c},clear(){let r=$e(this),s=r.size!==0,o=r.clear();return s&&Dn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dT(r,t,e)}),n}function fo(t,e){let n=fT(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ee.hasOwn(n,r)&&r in i?n:i,r,s)}var hT={get:fo(!1,!1)},pT={get:fo(!1,!0)},mT={get:fo(!0,!1)},gT={get:fo(!0,!0)},Uh=new WeakMap,Bh=new WeakMap,kh=new WeakMap,Vh=new WeakMap;function _T(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yT(t){return t.__v_skip||!Object.isExtensible(t)?0:_T(Ee.toRawType(t))}function zl(t){return qn(t)?t:ho(t,!1,aT,hT,Uh)}function ET(t){return ho(t,!1,cT,pT,Bh)}function Wl(t){return ho(t,!0,lT,mT,kh)}function xT(t){return ho(t,!0,uT,gT,Vh)}function ho(t,e,n,i,r){if(!Ee.isObject(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;let s=yT(t);if(s===0)return t;let o=r.get(t);if(o)return o;let a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function zi(t){return qn(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function Gh(t){return t?!!t.__v_raw:!1}function $e(t){let e=t&&t.__v_raw;return e?$e(e):t}function vT(t){return!Ee.hasOwn(t,"__v_skip")&&Object.isExtensible(t)&&Ee.def(t,"__v_skip",!0),t}var Tt=t=>Ee.isObject(t)?zl(t):t,lo=t=>Ee.isObject(t)?Wl(t):t;function Lt(t){return t?t.__v_isRef===!0:!1}function Hh(t){return zh(t,!1)}function bT(t){return zh(t,!0)}function zh(t,e){return Lt(t)?t:new Ol(t,e)}var Ol=class{constructor(e,n){this.dep=new Wi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$e(e),this._value=n?e:Tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){let n=this._rawValue,i=this.__v_isShallow||rn(e)||qn(e);e=i?e:$e(e),Ee.hasChanged(e,n)&&(this._rawValue=e,this._value=i?e:Tt(e),this.dep.trigger())}};function ST(t){t.dep&&t.dep.trigger()}function $l(t){return Lt(t)?t.value:t}function TT(t){return Ee.isFunction(t)?t():$l(t)}var AT={get:(t,e,n)=>e==="__v_raw"?t:$l(Reflect.get(t,e,n)),set:(t,e,n,i)=>{let r=t[e];return Lt(r)&&!Lt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function MT(t){return zi(t)?t:new Proxy(t,AT)}var Dl=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let n=this.dep=new Wi,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function RT(t){return new Dl(t)}function wT(t){let e=Ee.isArray(t)?new Array(t.length):{};for(let n in t)e[n]=Wh(t,n);return e}var Nl=class{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){let e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return nT($e(this._object),this._key)}},Ll=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function CT(t,e,n){return Lt(t)?t:Ee.isFunction(t)?new Ll(t):Ee.isObject(t)&&arguments.length>1?Wh(t,e,n):Hh(t)}function Wh(t,e,n){let i=t[e];return Lt(i)?i:new Nl(t,e,n)}var Fl=class{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return Ph(this,!0),!0}get value(){let e=this.dep.track();return Nh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function IT(t,e,n=!1){let i,r;return Ee.isFunction(t)?i=t:(i=t.get,r=t.set),new Fl(i,r,n)}var PT={GET:"get",HAS:"has",ITERATE:"iterate"},OT={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},DT={SKIP:"__v_skip",IS_REACTIVE:"__v_isReactive",IS_READONLY:"__v_isReadonly",IS_SHALLOW:"__v_isShallow",RAW:"__v_raw",IS_REF:"__v_isRef"},NT={WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP"},to={},co=new WeakMap,Xn;function LT(){return Xn}function $h(t,e=!1,n=Xn){if(n){let i=co.get(n);i||co.set(n,i=[]),i.push(t)}}function FT(t,e,n=Ee.EMPTY_OBJ){let{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=b=>r?b:rn(b)||r===!1||r===0?Nn(b,1):Nn(b),u,d,h,f,p=!1,g=!1;if(Lt(t)?(d=()=>t.value,p=rn(t)):zi(t)?(d=()=>c(t),p=!0):Ee.isArray(t)?(g=!0,p=t.some(b=>zi(b)||rn(b)),d=()=>t.map(b=>{if(Lt(b))return b.value;if(zi(b))return c(b);if(Ee.isFunction(b))return l?l(b,2):b()})):Ee.isFunction(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){Gl();try{h()}finally{Hl()}}let b=Xn;Xn=u;try{return l?l(t,3,[f]):t(f)}finally{Xn=b}}:d=Ee.NOOP,e&&r){let b=d,R=r===!0?1/0:r;d=()=>Nn(b(),R)}let S=Ch(),E=()=>{u.stop(),S&&S.active&&Ee.remove(S.effects,u)};if(s&&e){let b=e;e=(...R)=>{b(...R),E()}}let M=g?new Array(t.length).fill(to):to,_=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){let R=u.run();if(r||p||(g?R.some((U,H)=>Ee.hasChanged(U,M[H])):Ee.hasChanged(R,M))){h&&h();let U=Xn;Xn=u;try{let H=[R,M===to?void 0:g&&M[0]===to?[]:M,f];M=R,l?l(e,3,H):e(...H)}finally{Xn=U}}}else u.run()};return a&&a(_),u=new bi(d),u.scheduler=o?()=>o(_,!1):_,f=b=>$h(b,!1,u),h=u.onStop=()=>{let b=co.get(u);if(b){if(l)l(b,4);else for(let R of b)R();co.delete(u)}},e?i?_(!0):M=u.run():o?o(_.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function Nn(t,e=1/0,n){if(e<=0||!Ee.isObject(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Lt(t))Nn(t.value,e,n);else if(Ee.isArray(t))for(let i=0;i<t.length;i++)Nn(t[i],e,n);else if(Ee.isSet(t)||Ee.isMap(t))t.forEach(i=>{Nn(i,e,n)});else if(Ee.isPlainObject(t)){for(let i in t)Nn(t[i],e,n);for(let i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Nn(t[i],e,n)}return t}be.ARRAY_ITERATE_KEY=$i;be.EffectFlags=jS;be.EffectScope=no;be.ITERATE_KEY=Yn;be.MAP_KEY_ITERATE_KEY=ro;be.ReactiveEffect=bi;be.ReactiveFlags=DT;be.TrackOpTypes=PT;be.TriggerOpTypes=OT;be.WatchErrorCodes=NT;be.computed=IT;be.customRef=RT;be.effect=JS;be.effectScope=qS;be.enableTracking=eT;be.getCurrentScope=Ch;be.getCurrentWatcher=LT;be.isProxy=Gh;be.isReactive=zi;be.isReadonly=qn;be.isRef=Lt;be.isShallow=rn;be.markRaw=vT;be.onEffectCleanup=tT;be.onScopeDispose=KS;be.onWatcherCleanup=$h;be.pauseTracking=Gl;be.proxyRefs=MT;be.reactive=zl;be.reactiveReadArray=vi;be.readonly=Wl;be.ref=Hh;be.resetTracking=Hl;be.shallowReactive=ET;be.shallowReadArray=uo;be.shallowReadonly=xT;be.shallowRef=bT;be.stop=QS;be.toRaw=$e;be.toReactive=Tt;be.toReadonly=lo;be.toRef=CT;be.toRefs=wT;be.toValue=TT;be.track=Nt;be.traverse=Nn;be.trigger=Dn;be.triggerRef=ST;be.unref=$l;be.watch=FT});var qh=ge((m2,Yh)=>{"use strict";Yh.exports=Xh()});var mm=ge(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});var se=qh(),y=Js();function UT(t){}function BT(){}function kT(t,e){}var VT={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},GT={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function Qi(t,e,n,i){try{return i?t(...i):t()}catch(r){wi(r,e,n)}}function hn(t,e,n,i){if(y.isFunction(t)){let r=Qi(t,e,n,i);return r&&y.isPromise(r)&&r.catch(s=>{wi(s,e,n)}),r}if(y.isArray(t)){let r=[];for(let s=0;s<t.length;s++)r.push(hn(t[s],e,n,i));return r}}function wi(t,e,n,i=!0){let r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||y.EMPTY_OBJ;if(e){let a=e.parent,l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){let u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){se.pauseTracking(),Qi(s,null,10,[t,l,c]),se.resetTracking();return}}HT(t,n,r,i,o)}function HT(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}var Ut=[],An=-1,Ki=[],Kn=null,Yi=0,cp=Promise.resolve(),bo=null;function up(t){let e=bo||cp;return t?e.then(this?t.bind(this):t):e}function zT(t){let e=An+1,n=Ut.length;for(;e<n;){let i=e+n>>>1,r=Ut[i],s=qr(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function uc(t){if(!(t.flags&1)){let e=qr(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=qr(n)?Ut.push(t):Ut.splice(zT(e),0,t),t.flags|=1,dp()}}function dp(){bo||(bo=cp.then(fp))}function So(t){y.isArray(t)?Ki.push(...t):Kn&&t.id===-1?Kn.splice(Yi+1,0,t):t.flags&1||(Ki.push(t),t.flags|=1),dp()}function Kh(t,e,n=An+1){for(;n<Ut.length;n++){let i=Ut[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ut.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function To(t){if(Ki.length){let e=[...new Set(Ki)].sort((n,i)=>qr(n)-qr(i));if(Ki.length=0,Kn){Kn.push(...e);return}for(Kn=e,Yi=0;Yi<Kn.length;Yi++){let n=Kn[Yi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Kn=null,Yi=0}}var qr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fp(t){try{for(An=0;An<Ut.length;An++){let e=Ut[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Ut.length;An++){let e=Ut[An];e&&(e.flags&=-2)}An=-1,Ut.length=0,To(),bo=null,(Ut.length||Ki.length)&&fp()}}var gt=null,Oo=null;function Kr(t){let e=gt;return gt=t,Oo=t&&t.type.__scopeId||null,e}function WT(t){Oo=t}function $T(){Oo=null}var XT=t=>dc;function dc(t,e=gt,n){if(!e||t._n)return t;let i=(...r)=>{i._d&&rc(-1);let s=Kr(e),o;try{o=t(...r)}finally{Kr(s),i._d&&rc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function YT(t,e){if(gt===null)return t;let n=ns(gt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=y.EMPTY_OBJ]=e[r];s&&(y.isFunction(s)&&(s={mounted:s,updated:s}),s.deep&&se.traverse(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Mn(t,e,n,i){let r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){let a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(se.pauseTracking(),hn(l,n,8,[t.el,a,t,e]),se.resetTracking())}}var hp=Symbol("_vte"),pp=t=>t.__isTeleport,zr=t=>t&&(t.disabled||t.disabled===""),jh=t=>t&&(t.defer||t.defer===""),Zh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Jh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zl=(t,e)=>{let n=t&&t.to;return y.isString(n)?e?e(n):null:n},mp={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){let{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:g,createComment:S}}=c,E=zr(e.props),{shapeFlag:M,children:_,dynamicChildren:b}=e;if(t==null){let R=e.el=g(""),U=e.anchor=g("");f(R,n,i),f(U,n,i);let H=(F,w)=>{M&16&&(r&&r.isCE&&(r.ce._teleportTarget=F),u(_,F,w,r,s,o,a,l))},$=()=>{let F=e.target=Zl(e.props,p),w=gp(F,e,g,f);F&&(o!=="svg"&&Zh(F)?o="svg":o!=="mathml"&&Jh(F)&&(o="mathml"),E||(H(F,w),Eo(e,!1)))};E&&(H(n,U),Eo(e,!0)),jh(e.props)?(e.el.__isMounted=!1,pt(()=>{$(),delete e.el.__isMounted},s)):$()}else{if(jh(e.props)&&t.el.__isMounted===!1){pt(()=>{mp.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;let R=e.anchor=t.anchor,U=e.target=t.target,H=e.targetAnchor=t.targetAnchor,$=zr(t.props),F=$?n:U,w=$?R:H;if(o==="svg"||Zh(U)?o="svg":(o==="mathml"||Jh(U))&&(o="mathml"),b?(h(t.dynamicChildren,b,F,r,s,o,a),bc(t,e,!0)):l||d(t,e,F,w,r,s,o,a,!1),E)$?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):po(e,n,R,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){let I=e.target=Zl(e.props,p);I&&po(e,I,null,c,0)}else $&&po(e,U,H,c,1);Eo(e,E)}},remove(t,e,n,{um:i,o:{remove:r}},s){let{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:h}=t;if(d&&(r(c),r(u)),s&&r(l),o&16){let f=s||!zr(h);for(let p=0;p<a.length;p++){let g=a[p];i(g,e,n,f,!!g.dynamicChildren)}}},move:po,hydrate:qT};function po(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);let{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=s===2;if(d&&i(o,e,n),(!d||zr(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,n,2);d&&i(a,e,n)}function qT(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){let h=e.target=Zl(e.props,l);if(h){let f=zr(e.props),p=h._lpa||h.firstChild;if(e.shapeFlag&16)if(f)e.anchor=d(o(t),e,a(t),n,i,r,s),e.targetStart=p,e.targetAnchor=p&&o(p);else{e.anchor=o(t);let g=p;for(;g;){if(g&&g.nodeType===8){if(g.data==="teleport start anchor")e.targetStart=g;else if(g.data==="teleport anchor"){e.targetAnchor=g,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}g=o(g)}e.targetAnchor||gp(h,e,u,c),d(p&&o(p),e,h,n,i,r,s)}Eo(e,f)}return e.anchor&&o(e.anchor)}var KT=mp;function Eo(t,e){let n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function gp(t,e,n,i){let r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[hp]=s,t&&(i(r,t),i(s,t)),s}var jn=Symbol("_leaveCb"),mo=Symbol("_enterCb");function _p(){let t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return No(()=>{t.isMounted=!0}),Lo(()=>{t.isUnmounting=!0}),t}var sn=[Function,Array],yp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Ep=t=>{let e=t.subTree;return e.component?Ep(e.component):e},jT={name:"BaseTransition",props:yp,setup(t,{slots:e}){let n=ei(),i=_p();return()=>{let r=e.default&&fc(e.default(),!0);if(!r||!r.length)return;let s=xp(r),o=se.toRaw(t),{mode:a}=o;if(i.isLeaving)return Xl(s);let l=Qh(s);if(!l)return Xl(s);let c=Ao(l,o,i,n,d=>c=d);l.type!==ft&&Ai(l,c);let u=n.subTree&&Qh(n.subTree);if(u&&u.type!==ft&&!fn(l,u)&&Ep(n).type!==ft){let d=Ao(u,o,i,n);if(Ai(u,d),a==="out-in"&&l.type!==ft)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Xl(s);a==="in-out"&&l.type!==ft?d.delayLeave=(h,f,p)=>{let g=vp(i,u);g[String(u.key)]=u,h[jn]=()=>{f(),h[jn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function xp(t){let e=t[0];if(t.length>1){for(let n of t)if(n.type!==ft){e=n;break}}return e}var ZT=jT;function vp(t,e){let{leavingVNodes:n}=t,i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ao(t,e,n,i,r){let{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:S,onAppear:E,onAfterAppear:M,onAppearCancelled:_}=e,b=String(t.key),R=vp(n,t),U=(F,w)=>{F&&hn(F,i,9,w)},H=(F,w)=>{let I=w[1];U(F,w),y.isArray(F)?F.every(m=>m.length<=1)&&I():F.length<=1&&I()},$={mode:o,persisted:a,beforeEnter(F){let w=l;if(!n.isMounted)if(s)w=S||l;else return;F[jn]&&F[jn](!0);let I=R[b];I&&fn(t,I)&&I.el[jn]&&I.el[jn](),U(w,[F])},enter(F){let w=c,I=u,m=d;if(!n.isMounted)if(s)w=E||c,I=M||u,m=_||d;else return;let x=!1,D=F[mo]=z=>{x||(x=!0,z?U(m,[F]):U(I,[F]),$.delayedLeave&&$.delayedLeave(),F[mo]=void 0)};w?H(w,[F,D]):D()},leave(F,w){let I=String(t.key);if(F[mo]&&F[mo](!0),n.isUnmounting)return w();U(h,[F]);let m=!1,x=F[jn]=D=>{m||(m=!0,w(),D?U(g,[F]):U(p,[F]),F[jn]=void 0,R[I]===t&&delete R[I])};R[I]=t,f?H(f,[F,x]):x()},clone(F){let w=Ao(F,e,n,i,r);return r&&r(w),w}};return $}function Xl(t){if(es(t))return t=Rn(t),t.children=null,t}function Qh(t){if(!es(t))return pp(t.type)&&t.children?xp(t.children):t;if(t.component)return t.component.subTree;let{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&y.isFunction(n.default))return n.default()}}function Ai(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ai(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fc(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s],a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===At?(o.patchFlag&128&&r++,i=i.concat(fc(o.children,e,a))):(e||o.type!==ft)&&i.push(a!=null?Rn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function bp(t,e){return y.isFunction(t)?y.extend({name:t.name},e,{setup:t}):t}function JT(){let t=ei();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function hc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function QT(t){let e=ei(),n=se.shallowRef(null);if(e){let r=e.refs===y.EMPTY_OBJ?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function jr(t,e,n,i,r=!1){if(y.isArray(t)){t.forEach((p,g)=>jr(p,e&&(y.isArray(e)?e[g]:e),n,i,r));return}if(Jn(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jr(t,e,n,i.component.subTree);return}let s=i.shapeFlag&4?ns(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===y.EMPTY_OBJ?a.refs={}:a.refs,d=a.setupState,h=se.toRaw(d),f=d===y.EMPTY_OBJ?()=>!1:p=>y.hasOwn(h,p);if(c!=null&&c!==l&&(y.isString(c)?(u[c]=null,f(c)&&(d[c]=null)):se.isRef(c)&&(c.value=null)),y.isFunction(l))Qi(l,a,12,[o,u]);else{let p=y.isString(l),g=se.isRef(l);if(p||g){let S=()=>{if(t.f){let E=p?f(l)?d[l]:u[l]:l.value;r?y.isArray(E)&&y.remove(E,s):y.isArray(E)?E.includes(s)||E.push(s):p?(u[l]=[s],f(l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,f(l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,pt(S,n)):S()}}}var ep=!1,Xi=()=>{ep||(console.error("Hydration completed but contains mismatches."),ep=!0)},eA=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",tA=t=>t.namespaceURI.includes("MathML"),go=t=>{if(t.nodeType===1){if(eA(t))return"svg";if(tA(t))return"mathml"}},qi=t=>t.nodeType===8;function nA(t){let{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),To(),b._vnode=_;return}d(b.firstChild,_,null,null,null),To(),b._vnode=_},d=(_,b,R,U,H,$=!1)=>{$=$||!!b.dynamicChildren;let F=qi(_)&&_.data==="[",w=()=>g(_,b,R,U,H,F),{type:I,ref:m,shapeFlag:x,patchFlag:D}=b,z=_.nodeType;b.el=_,D===-2&&($=!1,b.dynamicChildren=null);let P=null;switch(I){case Qn:z!==3?b.children===""?(l(b.el=r(""),o(_),_),P=_):P=w():(_.data!==b.children&&(Xi(),_.data=b.children),P=s(_));break;case ft:M(_)?(P=s(_),E(b.el=_.content.firstChild,_,R)):z!==8||F?P=w():P=s(_);break;case Zi:if(F&&(_=s(_),z=_.nodeType),z===1||z===3){P=_;let A=!b.children.length;for(let C=0;C<b.staticCount;C++)A&&(b.children+=P.nodeType===1?P.outerHTML:P.data),C===b.staticCount-1&&(b.anchor=P),P=s(P);return F?s(P):P}else w();break;case At:F?P=p(_,b,R,U,H,$):P=w();break;default:if(x&1)(z!==1||b.type.toLowerCase()!==_.tagName.toLowerCase())&&!M(_)?P=w():P=h(_,b,R,U,H,$);else if(x&6){b.slotScopeIds=H;let A=o(_);if(F?P=S(_):qi(_)&&_.data==="teleport start"?P=S(_,_.data,"teleport end"):P=s(_),e(b,A,null,R,U,go(A),$),Jn(b)&&!b.type.__asyncResolved){let C;F?(C=ct(At),C.anchor=P?P.previousSibling:A.lastChild):C=_.nodeType===3?Tc(""):ct("div"),C.el=_,b.component.subTree=C}}else x&64?z!==8?P=w():P=b.type.hydrate(_,b,R,U,H,$,t,f):x&128&&(P=b.type.hydrate(_,b,R,U,go(o(_)),H,$,t,d))}return m!=null&&jr(m,null,U,b),P},h=(_,b,R,U,H,$)=>{$=$||!!b.dynamicChildren;let{type:F,props:w,patchFlag:I,shapeFlag:m,dirs:x,transition:D}=b,z=F==="input"||F==="option";if(z||I!==-1){x&&Mn(b,null,R,"created");let P=!1;if(M(_)){P=Xp(null,D)&&R&&R.vnode.props&&R.vnode.props.appear;let C=_.content.firstChild;if(P){let O=C.getAttribute("class");O&&(C.$cls=O),D.beforeEnter(C)}E(C,_,R),b.el=_=C}if(m&16&&!(w&&(w.innerHTML||w.textContent))){let C=f(_.firstChild,b,_,R,U,H,$);for(;C;){_o(_,1)||Xi();let O=C;C=C.nextSibling,a(O)}}else if(m&8){let C=b.children;C[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(C=C.slice(1)),_.textContent!==C&&(_o(_,0)||Xi(),_.textContent=b.children)}if(w){if(z||!$||I&48){let C=_.tagName.includes("-");for(let O in w)(z&&(O.endsWith("value")||O==="indeterminate")||y.isOn(O)&&!y.isReservedProp(O)||O[0]==="."||C)&&i(_,O,null,w[O],void 0,R)}else if(w.onClick)i(_,"onClick",null,w.onClick,void 0,R);else if(I&4&&se.isReactive(w.style))for(let C in w.style)w.style[C]}let A;(A=w&&w.onVnodeBeforeMount)&&Vt(A,R,b),x&&Mn(b,null,R,"beforeMount"),((A=w&&w.onVnodeMounted)||x||P)&&tm(()=>{A&&Vt(A,R,b),P&&D.enter(_),x&&Mn(b,null,R,"mounted")},U)}return _.nextSibling},f=(_,b,R,U,H,$,F)=>{F=F||!!b.dynamicChildren;let w=b.children,I=w.length;for(let m=0;m<I;m++){let x=F?w[m]:w[m]=Gt(w[m]),D=x.type===Qn;_?(D&&!F&&m+1<I&&Gt(w[m+1]).type===Qn&&(l(r(_.data.slice(x.children.length)),R,s(_)),_.data=x.children),_=d(_,x,U,H,$,F)):D&&!x.children?l(x.el=r(""),R):(_o(R,1)||Xi(),n(null,x,R,null,U,H,go(R),$))}return _},p=(_,b,R,U,H,$)=>{let{slotScopeIds:F}=b;F&&(H=H?H.concat(F):F);let w=o(_),I=f(s(_),b,w,R,U,H,$);return I&&qi(I)&&I.data==="]"?s(b.anchor=I):(Xi(),l(b.anchor=c("]"),w,I),I)},g=(_,b,R,U,H,$)=>{if(_o(_.parentElement,1)||Xi(),b.el=null,$){let I=S(_);for(;;){let m=s(_);if(m&&m!==I)a(m);else break}}let F=s(_),w=o(_);return a(_),n(null,b,w,F,R,U,go(w),H),R&&(R.vnode.el=b.el,Uo(R,b.el)),F},S=(_,b="[",R="]")=>{let U=0;for(;_;)if(_=s(_),_&&qi(_)&&(_.data===b&&U++,_.data===R)){if(U===0)return s(_);U--}return _},E=(_,b,R)=>{let U=b.parentNode;U&&U.replaceChild(_,b);let H=R;for(;H;)H.vnode.el===b&&(H.vnode.el=H.subTree.el=_),H=H.parent},M=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[u,d]}var tp="data-allow-mismatch",iA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function _o(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(tp);)t=t.parentElement;let n=t&&t.getAttribute(tp);if(n==null)return!1;if(n==="")return!0;{let i=n.split(",");return e===0&&i.includes("children")?!0:n.split(",").includes(iA[e])}}var rA=y.getGlobalThis().requestIdleCallback||(t=>setTimeout(t,1)),sA=y.getGlobalThis().cancelIdleCallback||(t=>clearTimeout(t)),oA=(t=1e4)=>e=>{let n=rA(e,{timeout:t});return()=>sA(n)};function aA(t){let{top:e,left:n,bottom:i,right:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:o}=window;return(e>0&&e<s||i>0&&i<s)&&(n>0&&n<o||r>0&&r<o)}var lA=t=>(e,n)=>{let i=new IntersectionObserver(r=>{for(let s of r)if(s.isIntersecting){i.disconnect(),e();break}},t);return n(r=>{if(r instanceof Element){if(aA(r))return e(),i.disconnect(),!1;i.observe(r)}}),()=>i.disconnect()},cA=t=>e=>{if(t){let n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},uA=(t=[])=>(e,n)=>{y.isString(t)&&(t=[t]);let i=!1,r=o=>{i||(i=!0,s(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},s=()=>{n(o=>{for(let a of t)o.removeEventListener(a,r)})};return n(o=>{for(let a of t)o.addEventListener(a,r,{once:!0})}),s};function dA(t,e){if(qi(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(qi(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}var Jn=t=>!!t.type.__asyncLoader;function fA(t){y.isFunction(t)&&(t={loader:t});let{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t,c=null,u,d=0,h=()=>(d++,c=null,f()),f=()=>{let p;return c||(p=c=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),l)return new Promise((S,E)=>{l(g,()=>S(h()),()=>E(g),d+1)});throw g}).then(g=>p!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),u=g,g)))};return bp({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(p,g,S){let E=s?()=>{let _=s(()=>{S()},b=>dA(p,b));_&&(g.bum||(g.bum=[])).push(_),(g.u||(g.u=[])).push(()=>!0)}:S;u?E():f().then(()=>!g.isUnmounted&&E())},get __asyncResolved(){return u},setup(){let p=mt;if(hc(p),u)return()=>Yl(u,p);let g=_=>{c=null,wi(_,p,13,!i)};if(a&&p.suspense||Ji)return f().then(_=>()=>Yl(_,p)).catch(_=>(g(_),()=>i?ct(i,{error:_}):null));let S=se.ref(!1),E=se.ref(),M=se.ref(!!r);return r&&setTimeout(()=>{M.value=!1},r),o!=null&&setTimeout(()=>{if(!S.value&&!E.value){let _=new Error(`Async component timed out after ${o}ms.`);g(_),E.value=_}},o),f().then(()=>{S.value=!0,p.parent&&es(p.parent.vnode)&&p.parent.update()}).catch(_=>{g(_),E.value=_}),()=>{if(S.value&&u)return Yl(u,p);if(E.value&&i)return ct(i,{error:E.value});if(n&&!M.value)return ct(n)}}})}function Yl(t,e){let{ref:n,props:i,children:r,ce:s}=e.vnode,o=ct(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}var es=t=>t.type.__isKeepAlive,hA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){let n=ei(),i=n.ctx;if(!i.renderer)return()=>{let M=e.default&&e.default();return M&&M.length===1?M[0]:M};let r=new Map,s=new Set,o=null,a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=i,h=d("div");i.activate=(M,_,b,R,U)=>{let H=M.component;c(M,_,b,0,a),l(H.vnode,M,_,b,H,a,R,M.slotScopeIds,U),pt(()=>{H.isDeactivated=!1,H.a&&y.invokeArrayFns(H.a);let $=M.props&&M.props.onVnodeMounted;$&&Vt($,H.parent,M)},a)},i.deactivate=M=>{let _=M.component;Ro(_.m),Ro(_.a),c(M,h,null,1,a),pt(()=>{_.da&&y.invokeArrayFns(_.da);let b=M.props&&M.props.onVnodeUnmounted;b&&Vt(b,_.parent,M),_.isDeactivated=!0},a)};function f(M){ql(M),u(M,n,a,!0)}function p(M){r.forEach((_,b)=>{let R=cc(_.type);R&&!M(R)&&g(b)})}function g(M){let _=r.get(M);_&&(!o||!fn(_,o))?f(_):o&&ql(o),r.delete(M),s.delete(M)}Xr(()=>[t.include,t.exclude],([M,_])=>{M&&p(b=>Gr(M,b)),_&&p(b=>!Gr(_,b))},{flush:"post",deep:!0});let S=null,E=()=>{S!=null&&(wo(n.subTree.type)?pt(()=>{r.set(S,yo(n.subTree))},n.subTree.suspense):r.set(S,yo(n.subTree)))};return No(E),pc(E),Lo(()=>{r.forEach(M=>{let{subTree:_,suspense:b}=n,R=yo(_);if(M.type===R.type&&M.key===R.key){ql(R);let U=R.component.da;U&&pt(U,b);return}f(M)})}),()=>{if(S=null,!e.default)return o=null;let M=e.default(),_=M[0];if(M.length>1)return o=null,M;if(!Ln(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let b=yo(_);if(b.type===ft)return o=null,b;let R=b.type,U=cc(Jn(b)?b.type.__asyncResolved||{}:R),{include:H,exclude:$,max:F}=t;if(H&&(!U||!Gr(H,U))||$&&U&&Gr($,U))return b.shapeFlag&=-257,o=b,_;let w=b.key==null?R:b.key,I=r.get(w);return b.el&&(b=Rn(b),_.shapeFlag&128&&(_.ssContent=b)),S=w,I?(b.el=I.el,b.component=I.component,b.transition&&Ai(b,b.transition),b.shapeFlag|=512,s.delete(w),s.add(w)):(s.add(w),F&&s.size>parseInt(F,10)&&g(s.values().next().value)),b.shapeFlag|=256,o=b,wo(_.type)?_:b}}},pA=hA;function Gr(t,e){return y.isArray(t)?t.some(n=>Gr(n,e)):y.isString(t)?t.split(",").includes(e):y.isRegExp(t)?(t.lastIndex=0,t.test(e)):!1}function Sp(t,e){Ap(t,"a",e)}function Tp(t,e){Ap(t,"da",e)}function Ap(t,e,n=mt){let i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Do(e,i,n),n){let r=n.parent;for(;r&&r.parent;)es(r.parent.vnode)&&mA(i,e,n,r),r=r.parent}}function mA(t,e,n,i){let r=Do(e,t,i,!0);mc(()=>{y.remove(i[e],r)},n)}function ql(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function yo(t){return t.shapeFlag&128?t.ssContent:t}function Do(t,e,n=mt,i=!1){if(n){let r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{se.pauseTracking();let a=Ri(n),l=hn(e,n,t,o);return a(),se.resetTracking(),l});return i?r.unshift(s):r.push(s),s}}var Fn=t=>(e,n=mt)=>{(!Ji||t==="sp")&&Do(t,(...i)=>e(...i),n)},Mp=Fn("bm"),No=Fn("m"),Rp=Fn("bu"),pc=Fn("u"),Lo=Fn("bum"),mc=Fn("um"),wp=Fn("sp"),Cp=Fn("rtg"),Ip=Fn("rtc");function Pp(t,e=mt){Do("ec",t,e)}var gc="components",gA="directives";function _A(t,e){return _c(gc,t,!0,e)||t}var Op=Symbol.for("v-ndc");function yA(t){return y.isString(t)?_c(gc,t,!1)||t:t||Op}function EA(t){return _c(gA,t)}function _c(t,e,n=!0,i=!1){let r=gt||mt;if(r){let s=r.type;if(t===gc){let a=cc(s,!1);if(a&&(a===e||a===y.camelize(e)||a===y.capitalize(y.camelize(e))))return s}let o=np(r[t]||s[t],e)||np(r.appContext[t],e);return!o&&i?s:o}}function np(t,e){return t&&(t[e]||t[y.camelize(e)]||t[y.capitalize(y.camelize(e))])}function xA(t,e,n,i){let r,s=n&&n[i],o=y.isArray(t);if(o||y.isString(t)){let a=o&&se.isReactive(t),l=!1,c=!1;a&&(l=!se.isShallow(t),c=se.isReadonly(t),t=se.shallowReadArray(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?se.toReadonly(se.toReactive(t[u])):se.toReactive(t[u]):t[u],u,void 0,s&&s[u])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(y.isObject(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s&&s[l]));else{let a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){let u=a[l];r[l]=e(t[u],u,l,s&&s[l])}}else r=[];return n&&(n[i]=r),r}function vA(t,e){for(let n=0;n<e.length;n++){let i=e[n];if(y.isArray(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{let s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return t}function bA(t,e,n={},i,r){if(gt.ce||gt.parent&&Jn(gt.parent)&&gt.parent.ce)return e!=="default"&&(n.name=e),Qr(),Co(At,null,[ct("slot",n,i&&i())],64);let s=t[e];s&&s._c&&(s._d=!1),Qr();let o=s&&yc(s(n)),a=n.key||o&&o.key,l=Co(At,{key:(a&&!y.isSymbol(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function yc(t){return t.some(e=>Ln(e)?!(e.type===ft||e.type===At&&!yc(e.children)):!0)?t:null}function SA(t,e){let n={};for(let i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:y.toHandlerKey(i)]=t[i];return n}var Jl=t=>t?lm(t)?ns(t):Jl(t.parent):null,Wr=y.extend(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ec(t),$forceUpdate:t=>t.f||(t.f=()=>{uc(t.update)}),$nextTick:t=>t.n||(t.n=up.bind(t.proxy)),$watch:t=>iM.bind(t)}),Kl=(t,e)=>t!==y.EMPTY_OBJ&&!t.__isScriptSetup&&y.hasOwn(t,e),Ql={get({_:t},e){if(e==="__v_skip")return!0;let{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t,c;if(e[0]!=="$"){let f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Kl(i,e))return o[e]=1,i[e];if(r!==y.EMPTY_OBJ&&y.hasOwn(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&y.hasOwn(c,e))return o[e]=3,s[e];if(n!==y.EMPTY_OBJ&&y.hasOwn(n,e))return o[e]=4,n[e];ec&&(o[e]=0)}}let u=Wr[e],d,h;if(u)return e==="$attrs"&&se.track(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==y.EMPTY_OBJ&&y.hasOwn(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,y.hasOwn(h,e))return h[e]},set({_:t},e,n){let{data:i,setupState:r,ctx:s}=t;return Kl(r,e)?(r[e]=n,!0):i!==y.EMPTY_OBJ&&y.hasOwn(i,e)?(i[e]=n,!0):y.hasOwn(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==y.EMPTY_OBJ&&y.hasOwn(t,o)||Kl(e,o)||(a=s[0])&&y.hasOwn(a,o)||y.hasOwn(i,o)||y.hasOwn(Wr,o)||y.hasOwn(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:y.hasOwn(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},TA=y.extend({},Ql,{get(t,e){if(e!==Symbol.unscopables)return Ql.get(t,e,t)},has(t,e){return e[0]!=="_"&&!y.isGloballyAllowed(e)}});function AA(){return null}function MA(){return null}function RA(t){}function wA(t){}function CA(){return null}function IA(){}function PA(t,e){return null}function OA(){return Dp().slots}function DA(){return Dp().attrs}function Dp(){let t=ei();return t.setupContext||(t.setupContext=dm(t))}function Zr(t){return y.isArray(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function NA(t,e){let n=Zr(t);for(let i in e){if(i.startsWith("__skip"))continue;let r=n[i];r?y.isArray(r)||y.isFunction(r)?r=n[i]={type:r,default:e[i]}:r.default=e[i]:r===null&&(r=n[i]={default:e[i]}),r&&e[`__skip_${i}`]&&(r.skipFactory=!0)}return n}function LA(t,e){return!t||!e?t||e:y.isArray(t)&&y.isArray(e)?t.concat(e):y.extend({},Zr(t),Zr(e))}function FA(t,e){let n={};for(let i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function UA(t){let e=ei(),n=t();return oc(),y.isPromise(n)&&(n=n.catch(i=>{throw Ri(e),i})),[n,()=>Ri(e)]}var ec=!0;function BA(t){let e=Ec(t),n=t.proxy,i=t.ctx;ec=!1,e.beforeCreate&&ip(e.beforeCreate,t,"bc");let{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:p,activated:g,deactivated:S,beforeDestroy:E,beforeUnmount:M,destroyed:_,unmounted:b,render:R,renderTracked:U,renderTriggered:H,errorCaptured:$,serverPrefetch:F,expose:w,inheritAttrs:I,components:m,directives:x,filters:D}=e;if(c&&kA(c,i,null),o)for(let A in o){let C=o[A];y.isFunction(C)&&(i[A]=C.bind(n))}if(r){let A=r.call(n,n);y.isObject(A)&&(t.data=se.reactive(A))}if(ec=!0,s)for(let A in s){let C=s[A],O=y.isFunction(C)?C.bind(n,n):y.isFunction(C.get)?C.get.bind(n,n):y.NOOP,te=!y.isFunction(C)&&y.isFunction(C.set)?C.set.bind(n):y.NOOP,Z=fm({get:O,set:te});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>Z.value,set:ee=>Z.value=ee})}if(a)for(let A in a)Np(a[A],i,n,A);if(l){let A=y.isFunction(l)?l.call(n):l;Reflect.ownKeys(A).forEach(C=>{Fp(C,A[C])})}u&&ip(u,t,"c");function P(A,C){y.isArray(C)?C.forEach(O=>A(O.bind(n))):C&&A(C.bind(n))}if(P(Mp,d),P(No,h),P(Rp,f),P(pc,p),P(Sp,g),P(Tp,S),P(Pp,$),P(Ip,U),P(Cp,H),P(Lo,M),P(mc,b),P(wp,F),y.isArray(w))if(w.length){let A=t.exposed||(t.exposed={});w.forEach(C=>{Object.defineProperty(A,C,{get:()=>n[C],set:O=>n[C]=O})})}else t.exposed||(t.exposed={});R&&t.render===y.NOOP&&(t.render=R),I!=null&&(t.inheritAttrs=I),m&&(t.components=m),x&&(t.directives=x),F&&hc(t)}function kA(t,e,n=y.NOOP){y.isArray(t)&&(t=tc(t));for(let i in t){let r=t[i],s;y.isObject(r)?"default"in r?s=$r(r.from||i,r.default,!0):s=$r(r.from||i):s=$r(r),se.isRef(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function ip(t,e,n){hn(y.isArray(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Np(t,e,n,i){let r=i.includes(".")?Zp(n,i):()=>n[i];if(y.isString(t)){let s=e[t];y.isFunction(s)&&Xr(r,s)}else if(y.isFunction(t))Xr(r,t.bind(n));else if(y.isObject(t))if(y.isArray(t))t.forEach(s=>Np(s,e,n,i));else{let s=y.isFunction(t.handler)?t.handler.bind(n):e[t.handler];y.isFunction(s)&&Xr(r,s,t)}}function Ec(t){let e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e),l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),y.isObject(e)&&s.set(e,l),l}function Mo(t,e,n,i=!1){let{mixins:r,extends:s}=e;s&&Mo(t,s,n,!0),r&&r.forEach(o=>Mo(t,o,n,!0));for(let o in e)if(!(i&&o==="expose")){let a=VA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}var VA={data:rp,props:sp,emits:sp,methods:Hr,computed:Hr,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Hr,directives:Hr,watch:HA,provide:rp,inject:GA};function rp(t,e){return e?t?function(){return y.extend(y.isFunction(t)?t.call(this,this):t,y.isFunction(e)?e.call(this,this):e)}:e:t}function GA(t,e){return Hr(tc(t),tc(e))}function tc(t){if(y.isArray(t)){let e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Hr(t,e){return t?y.extend(Object.create(null),t,e):e}function sp(t,e){return t?y.isArray(t)&&y.isArray(e)?[...new Set([...t,...e])]:y.extend(Object.create(null),Zr(t),Zr(e??{})):e}function HA(t,e){if(!t)return e;if(!e)return t;let n=y.extend(Object.create(null),t);for(let i in e)n[i]=Ft(t[i],e[i]);return n}function Lp(){return{app:null,config:{isNativeTag:y.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var zA=0;function WA(t,e){return function(i,r=null){y.isFunction(i)||(i=y.extend({},i)),r!=null&&!y.isObject(r)&&(r=null);let s=Lp(),o=new WeakSet,a=[],l=!1,c=s.app={_uid:zA++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pm,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&y.isFunction(u.install)?(o.add(u),u.install(c,...d)):y.isFunction(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,h){if(!l){let f=c._ceVNode||ct(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(f,u):t(f,u,h),l=!0,c._container=u,u.__vue_app__=c,ns(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(hn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){let d=Ti;Ti=c;try{return u()}finally{Ti=d}}};return c}}var Ti=null;function Fp(t,e){if(mt){let n=mt.provides,i=mt.parent&&mt.parent.provides;i===n&&(n=mt.provides=Object.create(i)),n[t]=e}}function $r(t,e,n=!1){let i=mt||gt;if(i||Ti){let r=Ti?Ti._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&y.isFunction(e)?e.call(i&&i.proxy):e}}function $A(){return!!(mt||gt||Ti)}var Up={},Bp=()=>Object.create(Up),kp=t=>Object.getPrototypeOf(t)===Up;function XA(t,e,n,i=!1){let r={},s=Bp();t.propsDefaults=Object.create(null),Vp(t,e,r,s);for(let o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:se.shallowReactive(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function YA(t,e,n,i){let{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=se.toRaw(r),[l]=t.propsOptions,c=!1;if((i||o>0)&&!(o&16)){if(o&8){let u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Fo(t.emitsOptions,h))continue;let f=e[h];if(l)if(y.hasOwn(s,h))f!==s[h]&&(s[h]=f,c=!0);else{let p=y.camelize(h);r[p]=nc(l,a,p,f,t,!1)}else f!==s[h]&&(s[h]=f,c=!0)}}}else{Vp(t,e,r,s)&&(c=!0);let u;for(let d in a)(!e||!y.hasOwn(e,d)&&((u=y.hyphenate(d))===d||!y.hasOwn(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=nc(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(let d in s)(!e||!y.hasOwn(e,d))&&(delete s[d],c=!0)}c&&se.trigger(t.attrs,"set","")}function Vp(t,e,n,i){let[r,s]=t.propsOptions,o=!1,a;if(e)for(let l in e){if(y.isReservedProp(l))continue;let c=e[l],u;r&&y.hasOwn(r,u=y.camelize(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){let l=se.toRaw(n),c=a||y.EMPTY_OBJ;for(let u=0;u<s.length;u++){let d=s[u];n[d]=nc(r,l,d,c[d],t,!y.hasOwn(c,d))}}return o}function nc(t,e,n,i,r,s){let o=t[n];if(o!=null){let a=y.hasOwn(o,"default");if(a&&i===void 0){let l=o.default;if(o.type!==Function&&!o.skipFactory&&y.isFunction(l)){let{propsDefaults:c}=r;if(n in c)i=c[n];else{let u=Ri(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===y.hyphenate(n))&&(i=!0))}return i}var qA=new WeakMap;function Gp(t,e,n=!1){let i=n?qA:e.propsCache,r=i.get(t);if(r)return r;let s=t.props,o={},a=[],l=!1;if(!y.isFunction(t)){let u=d=>{l=!0;let[h,f]=Gp(d,e,!0);y.extend(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return y.isObject(t)&&i.set(t,y.EMPTY_ARR),y.EMPTY_ARR;if(y.isArray(s))for(let u=0;u<s.length;u++){let d=y.camelize(s[u]);op(d)&&(o[d]=y.EMPTY_OBJ)}else if(s)for(let u in s){let d=y.camelize(u);if(op(d)){let h=s[u],f=o[d]=y.isArray(h)||y.isFunction(h)?{type:h}:y.extend({},h),p=f.type,g=!1,S=!0;if(y.isArray(p))for(let E=0;E<p.length;++E){let M=p[E],_=y.isFunction(M)&&M.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(S=!1)}else g=y.isFunction(p)&&p.name==="Boolean";f[0]=g,f[1]=S,(g||y.hasOwn(f,"default"))&&a.push(d)}}let c=[o,a];return y.isObject(t)&&i.set(t,c),c}function op(t){return t[0]!=="$"&&!y.isReservedProp(t)}var xc=t=>t[0]==="_"||t==="$stable",vc=t=>y.isArray(t)?t.map(Gt):[Gt(t)],KA=(t,e,n)=>{if(e._n)return e;let i=dc((...r)=>vc(e(...r)),n);return i._c=!1,i},Hp=(t,e,n)=>{let i=t._ctx;for(let r in t){if(xc(r))continue;let s=t[r];if(y.isFunction(s))e[r]=KA(r,s,i);else if(s!=null){let o=vc(s);e[r]=()=>o}}},zp=(t,e)=>{let n=vc(e);t.slots.default=()=>n},Wp=(t,e,n)=>{for(let i in e)(n||!xc(i))&&(t[i]=e[i])},jA=(t,e,n)=>{let i=t.slots=Bp();if(t.vnode.shapeFlag&32){let r=e._;r?(Wp(i,e,n),n&&y.def(i,"_",r,!0)):Hp(e,i)}else e&&zp(t,e)},ZA=(t,e,n)=>{let{vnode:i,slots:r}=t,s=!0,o=y.EMPTY_OBJ;if(i.shapeFlag&32){let a=e._;a?n&&a===1?s=!1:Wp(r,e,n):(s=!e.$stable,Hp(e,r)),o=e}else e&&(zp(t,e),o={default:1});if(s)for(let a in r)!xc(a)&&o[a]==null&&delete r[a]},pt=tm;function JA(t){return $p(t)}function QA(t){return $p(t,nA)}function $p(t,e){let n=y.getGlobalThis();n.__VUE__=!0;let{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=y.NOOP,insertStaticContent:p}=t,g=(v,T,N,j=null,Y=null,B=null,W=void 0,X=null,K=!!T.dynamicChildren)=>{if(v===T)return;v&&!fn(v,T)&&(j=rt(v),ee(v,Y,B,!0),v=null),T.patchFlag===-2&&(K=!1,T.dynamicChildren=null);let{type:k,ref:ie,shapeFlag:J}=T;switch(k){case Qn:S(v,T,N,j);break;case ft:E(v,T,N,j);break;case Zi:v==null&&M(T,N,j,W);break;case At:m(v,T,N,j,Y,B,W,X,K);break;default:J&1?R(v,T,N,j,Y,B,W,X,K):J&6?x(v,T,N,j,Y,B,W,X,K):(J&64||J&128)&&k.process(v,T,N,j,Y,B,W,X,K,Me)}ie!=null&&Y&&jr(ie,v&&v.ref,B,T||v,!T)},S=(v,T,N,j)=>{if(v==null)i(T.el=a(T.children),N,j);else{let Y=T.el=v.el;T.children!==v.children&&c(Y,T.children)}},E=(v,T,N,j)=>{v==null?i(T.el=l(T.children||""),N,j):T.el=v.el},M=(v,T,N,j)=>{[v.el,v.anchor]=p(v.children,T,N,j,v.el,v.anchor)},_=({el:v,anchor:T},N,j)=>{let Y;for(;v&&v!==T;)Y=h(v),i(v,N,j),v=Y;i(T,N,j)},b=({el:v,anchor:T})=>{let N;for(;v&&v!==T;)N=h(v),r(v),v=N;r(T)},R=(v,T,N,j,Y,B,W,X,K)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),v==null?U(T,N,j,Y,B,W,X,K):F(v,T,Y,B,W,X,K)},U=(v,T,N,j,Y,B,W,X)=>{let K,k,{props:ie,shapeFlag:J,transition:re,dirs:_e}=v;if(K=v.el=o(v.type,B,ie&&ie.is,ie),J&8?u(K,v.children):J&16&&$(v.children,K,null,j,Y,jl(v,B),W,X),_e&&Mn(v,null,j,"created"),H(K,v,v.scopeId,W,j),ie){for(let Ne in ie)Ne!=="value"&&!y.isReservedProp(Ne)&&s(K,Ne,null,ie[Ne],B,j);"value"in ie&&s(K,"value",null,ie.value,B),(k=ie.onVnodeBeforeMount)&&Vt(k,j,v)}_e&&Mn(v,null,j,"beforeMount");let Te=Xp(Y,re);Te&&re.beforeEnter(K),i(K,T,N),((k=ie&&ie.onVnodeMounted)||Te||_e)&&pt(()=>{k&&Vt(k,j,v),Te&&re.enter(K),_e&&Mn(v,null,j,"mounted")},Y)},H=(v,T,N,j,Y)=>{if(N&&f(v,N),j)for(let B=0;B<j.length;B++)f(v,j[B]);if(Y){let B=Y.subTree;if(T===B||wo(B.type)&&(B.ssContent===T||B.ssFallback===T)){let W=Y.vnode;H(v,W,W.scopeId,W.slotScopeIds,Y.parent)}}},$=(v,T,N,j,Y,B,W,X,K=0)=>{for(let k=K;k<v.length;k++){let ie=v[k]=X?Zn(v[k]):Gt(v[k]);g(null,ie,T,N,j,Y,B,W,X)}},F=(v,T,N,j,Y,B,W)=>{let X=T.el=v.el,{patchFlag:K,dynamicChildren:k,dirs:ie}=T;K|=v.patchFlag&16;let J=v.props||y.EMPTY_OBJ,re=T.props||y.EMPTY_OBJ,_e;if(N&&Si(N,!1),(_e=re.onVnodeBeforeUpdate)&&Vt(_e,N,T,v),ie&&Mn(T,v,N,"beforeUpdate"),N&&Si(N,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&u(X,""),k?w(v.dynamicChildren,k,X,N,j,jl(T,Y),B):W||C(v,T,X,null,N,j,jl(T,Y),B,!1),K>0){if(K&16)I(X,J,re,N,Y);else if(K&2&&J.class!==re.class&&s(X,"class",null,re.class,Y),K&4&&s(X,"style",J.style,re.style,Y),K&8){let Te=T.dynamicProps;for(let Ne=0;Ne<Te.length;Ne++){let we=Te[Ne],Ke=J[we],Oe=re[we];(Oe!==Ke||we==="value")&&s(X,we,Ke,Oe,Y,N)}}K&1&&v.children!==T.children&&u(X,T.children)}else!W&&k==null&&I(X,J,re,N,Y);((_e=re.onVnodeUpdated)||ie)&&pt(()=>{_e&&Vt(_e,N,T,v),ie&&Mn(T,v,N,"updated")},j)},w=(v,T,N,j,Y,B,W)=>{for(let X=0;X<T.length;X++){let K=v[X],k=T[X],ie=K.el&&(K.type===At||!fn(K,k)||K.shapeFlag&198)?d(K.el):N;g(K,k,ie,null,j,Y,B,W,!0)}},I=(v,T,N,j,Y)=>{if(T!==N){if(T!==y.EMPTY_OBJ)for(let B in T)!y.isReservedProp(B)&&!(B in N)&&s(v,B,T[B],null,Y,j);for(let B in N){if(y.isReservedProp(B))continue;let W=N[B],X=T[B];W!==X&&B!=="value"&&s(v,B,X,W,Y,j)}"value"in N&&s(v,"value",T.value,N.value,Y)}},m=(v,T,N,j,Y,B,W,X,K)=>{let k=T.el=v?v.el:a(""),ie=T.anchor=v?v.anchor:a(""),{patchFlag:J,dynamicChildren:re,slotScopeIds:_e}=T;_e&&(X=X?X.concat(_e):_e),v==null?(i(k,N,j),i(ie,N,j),$(T.children||[],N,ie,Y,B,W,X,K)):J>0&&J&64&&re&&v.dynamicChildren?(w(v.dynamicChildren,re,N,Y,B,W,X),(T.key!=null||Y&&T===Y.subTree)&&bc(v,T,!0)):C(v,T,N,ie,Y,B,W,X,K)},x=(v,T,N,j,Y,B,W,X,K)=>{T.slotScopeIds=X,v==null?T.shapeFlag&512?Y.ctx.activate(T,N,j,W,K):D(T,N,j,Y,B,W,K):z(v,T,K)},D=(v,T,N,j,Y,B,W)=>{let X=v.component=am(v,j,Y);if(es(v)&&(X.ctx.renderer=Me),cm(X,!1,W),X.asyncDep){if(Y&&Y.registerDep(X,P,W),!v.el){let K=X.subTree=ct(ft);E(null,K,T,N)}}else P(X,v,T,N,Y,B,W)},z=(v,T,N)=>{let j=T.component=v.component;if(cM(v,T,N))if(j.asyncDep&&!j.asyncResolved){A(j,T,N);return}else j.next=T,j.update();else T.el=v.el,j.vnode=T},P=(v,T,N,j,Y,B,W)=>{let X=()=>{if(v.isMounted){let{next:J,bu:re,u:_e,parent:Te,vnode:Ne}=v;{let pe=Yp(v);if(pe){J&&(J.el=Ne.el,A(v,J,W)),pe.asyncDep.then(()=>{v.isUnmounted||X()});return}}let we=J,Ke;Si(v,!1),J?(J.el=Ne.el,A(v,J,W)):J=Ne,re&&y.invokeArrayFns(re),(Ke=J.props&&J.props.onVnodeBeforeUpdate)&&Vt(Ke,Te,J,Ne),Si(v,!0);let Oe=xo(v),Xe=v.subTree;v.subTree=Oe,g(Xe,Oe,d(Xe.el),rt(Xe),v,Y,B),J.el=Oe.el,we===null&&Uo(v,Oe.el),_e&&pt(_e,Y),(Ke=J.props&&J.props.onVnodeUpdated)&&pt(()=>Vt(Ke,Te,J,Ne),Y)}else{let J,{el:re,props:_e}=T,{bm:Te,m:Ne,parent:we,root:Ke,type:Oe}=v,Xe=Jn(T);if(Si(v,!1),Te&&y.invokeArrayFns(Te),!Xe&&(J=_e&&_e.onVnodeBeforeMount)&&Vt(J,we,T),Si(v,!0),re&&tt){let pe=()=>{v.subTree=xo(v),tt(re,v.subTree,v,Y,null)};Xe&&Oe.__asyncHydrate?Oe.__asyncHydrate(re,v,pe):pe()}else{Ke.ce&&Ke.ce._injectChildStyle(Oe);let pe=v.subTree=xo(v);g(null,pe,N,j,v,Y,B),T.el=pe.el}if(Ne&&pt(Ne,Y),!Xe&&(J=_e&&_e.onVnodeMounted)){let pe=T;pt(()=>Vt(J,we,pe),Y)}(T.shapeFlag&256||we&&Jn(we.vnode)&&we.vnode.shapeFlag&256)&&v.a&&pt(v.a,Y),v.isMounted=!0,T=N=j=null}};v.scope.on();let K=v.effect=new se.ReactiveEffect(X);v.scope.off();let k=v.update=K.run.bind(K),ie=v.job=K.runIfDirty.bind(K);ie.i=v,ie.id=v.uid,K.scheduler=()=>uc(ie),Si(v,!0),k()},A=(v,T,N)=>{T.component=v;let j=v.vnode.props;v.vnode=T,v.next=null,YA(v,T.props,j,N),ZA(v,T.children,N),se.pauseTracking(),Kh(v),se.resetTracking()},C=(v,T,N,j,Y,B,W,X,K=!1)=>{let k=v&&v.children,ie=v?v.shapeFlag:0,J=T.children,{patchFlag:re,shapeFlag:_e}=T;if(re>0){if(re&128){te(k,J,N,j,Y,B,W,X,K);return}else if(re&256){O(k,J,N,j,Y,B,W,X,K);return}}_e&8?(ie&16&&me(k,Y,B),J!==k&&u(N,J)):ie&16?_e&16?te(k,J,N,j,Y,B,W,X,K):me(k,Y,B,!0):(ie&8&&u(N,""),_e&16&&$(J,N,j,Y,B,W,X,K))},O=(v,T,N,j,Y,B,W,X,K)=>{v=v||y.EMPTY_ARR,T=T||y.EMPTY_ARR;let k=v.length,ie=T.length,J=Math.min(k,ie),re;for(re=0;re<J;re++){let _e=T[re]=K?Zn(T[re]):Gt(T[re]);g(v[re],_e,N,null,Y,B,W,X,K)}k>ie?me(v,Y,B,!0,!1,J):$(T,N,j,Y,B,W,X,K,J)},te=(v,T,N,j,Y,B,W,X,K)=>{let k=0,ie=T.length,J=v.length-1,re=ie-1;for(;k<=J&&k<=re;){let _e=v[k],Te=T[k]=K?Zn(T[k]):Gt(T[k]);if(fn(_e,Te))g(_e,Te,N,null,Y,B,W,X,K);else break;k++}for(;k<=J&&k<=re;){let _e=v[J],Te=T[re]=K?Zn(T[re]):Gt(T[re]);if(fn(_e,Te))g(_e,Te,N,null,Y,B,W,X,K);else break;J--,re--}if(k>J){if(k<=re){let _e=re+1,Te=_e<ie?T[_e].el:j;for(;k<=re;)g(null,T[k]=K?Zn(T[k]):Gt(T[k]),N,Te,Y,B,W,X,K),k++}}else if(k>re)for(;k<=J;)ee(v[k],Y,B,!0),k++;else{let _e=k,Te=k,Ne=new Map;for(k=Te;k<=re;k++){let ot=T[k]=K?Zn(T[k]):Gt(T[k]);ot.key!=null&&Ne.set(ot.key,k)}let we,Ke=0,Oe=re-Te+1,Xe=!1,pe=0,Ze=new Array(Oe);for(k=0;k<Oe;k++)Ze[k]=0;for(k=_e;k<=J;k++){let ot=v[k];if(Ke>=Oe){ee(ot,Y,B,!0);continue}let It;if(ot.key!=null)It=Ne.get(ot.key);else for(we=Te;we<=re;we++)if(Ze[we-Te]===0&&fn(ot,T[we])){It=we;break}It===void 0?ee(ot,Y,B,!0):(Ze[It-Te]=k+1,It>=pe?pe=It:Xe=!0,g(ot,T[It],N,null,Y,B,W,X,K),Ke++)}let Ct=Xe?eM(Ze):y.EMPTY_ARR;for(we=Ct.length-1,k=Oe-1;k>=0;k--){let ot=Te+k,It=T[ot],Jt=ot+1<ie?T[ot+1].el:j;Ze[k]===0?g(null,It,N,Jt,Y,B,W,X,K):Xe&&(we<0||k!==Ct[we]?Z(It,N,Jt,2):we--)}}},Z=(v,T,N,j,Y=null)=>{let{el:B,type:W,transition:X,children:K,shapeFlag:k}=v;if(k&6){Z(v.component.subTree,T,N,j);return}if(k&128){v.suspense.move(T,N,j);return}if(k&64){W.move(v,T,N,Me);return}if(W===At){i(B,T,N);for(let J=0;J<K.length;J++)Z(K[J],T,N,j);i(v.anchor,T,N);return}if(W===Zi){_(v,T,N);return}if(j!==2&&k&1&&X)if(j===0)X.beforeEnter(B),i(B,T,N),pt(()=>X.enter(B),Y);else{let{leave:J,delayLeave:re,afterLeave:_e}=X,Te=()=>{v.ctx.isUnmounted?r(B):i(B,T,N)},Ne=()=>{J(B,()=>{Te(),_e&&_e()})};re?re(B,Te,Ne):Ne()}else i(B,T,N)},ee=(v,T,N,j=!1,Y=!1)=>{let{type:B,props:W,ref:X,children:K,dynamicChildren:k,shapeFlag:ie,patchFlag:J,dirs:re,cacheIndex:_e}=v;if(J===-2&&(Y=!1),X!=null&&(se.pauseTracking(),jr(X,null,N,v,!0),se.resetTracking()),_e!=null&&(T.renderCache[_e]=void 0),ie&256){T.ctx.deactivate(v);return}let Te=ie&1&&re,Ne=!Jn(v),we;if(Ne&&(we=W&&W.onVnodeBeforeUnmount)&&Vt(we,T,v),ie&6)le(v.component,N,j);else{if(ie&128){v.suspense.unmount(N,j);return}Te&&Mn(v,null,T,"beforeUnmount"),ie&64?v.type.remove(v,T,N,Me,j):k&&!k.hasOnce&&(B!==At||J>0&&J&64)?me(k,T,N,!1,!0):(B===At&&J&384||!Y&&ie&16)&&me(K,T,N),j&&Q(v)}(Ne&&(we=W&&W.onVnodeUnmounted)||Te)&&pt(()=>{we&&Vt(we,T,v),Te&&Mn(v,null,T,"unmounted")},N)},Q=v=>{let{type:T,el:N,anchor:j,transition:Y}=v;if(T===At){Ve(N,j);return}if(T===Zi){b(v);return}let B=()=>{r(N),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(v.shapeFlag&1&&Y&&!Y.persisted){let{leave:W,delayLeave:X}=Y,K=()=>W(N,B);X?X(v.el,B,K):K()}else B()},Ve=(v,T)=>{let N;for(;v!==T;)N=h(v),r(v),v=N;r(T)},le=(v,T,N)=>{let{bum:j,scope:Y,job:B,subTree:W,um:X,m:K,a:k,parent:ie,slots:{__:J}}=v;Ro(K),Ro(k),j&&y.invokeArrayFns(j),ie&&y.isArray(J)&&J.forEach(re=>{ie.renderCache[re]=void 0}),Y.stop(),B&&(B.flags|=8,ee(W,v,T,N)),X&&pt(X,T),pt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},me=(v,T,N,j=!1,Y=!1,B=0)=>{for(let W=B;W<v.length;W++)ee(v[W],T,N,j,Y)},rt=v=>{if(v.shapeFlag&6)return rt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();let T=h(v.anchor||v.el),N=T&&T[hp];return N?h(N):T},ae=!1,ve=(v,T,N)=>{v==null?T._vnode&&ee(T._vnode,null,null,!0):g(T._vnode||null,v,T,null,null,null,N),T._vnode=v,ae||(ae=!0,Kh(),To(),ae=!1)},Me={p:g,um:ee,m:Z,r:Q,mt:D,mc:$,pc:C,pbc:w,n:rt,o:t},Ue,tt;return e&&([Ue,tt]=e(Me)),{render:ve,hydrate:Ue,createApp:WA(ve,Ue)}}function jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Si({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bc(t,e,n=!1){let i=t.children,r=e.children;if(y.isArray(i)&&y.isArray(r))for(let s=0;s<i.length;s++){let o=i[s],a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Zn(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&bc(o,a)),a.type===Qn&&(a.el=o.el),a.type===ft&&!a.el&&(a.el=o.el)}}function eM(t){let e=t.slice(),n=[0],i,r,s,o,a,l=t.length;for(i=0;i<l;i++){let c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Yp(t){let e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yp(e)}function Ro(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}var qp=Symbol.for("v-scx"),Kp=()=>$r(qp);function tM(t,e){return ts(t,null,e)}function nM(t,e){return ts(t,null,{flush:"post"})}function jp(t,e){return ts(t,null,{flush:"sync"})}function Xr(t,e,n){return ts(t,e,n)}function ts(t,e,n=y.EMPTY_OBJ){let{immediate:i,deep:r,flush:s,once:o}=n,a=y.extend({},n),l=e&&i||!e&&s!=="post",c;if(Ji){if(s==="sync"){let f=Kp();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){let f=()=>{};return f.stop=y.NOOP,f.resume=y.NOOP,f.pause=y.NOOP,f}}let u=mt;a.call=(f,p,g)=>hn(f,u,p,g);let d=!1;s==="post"?a.scheduler=f=>{pt(f,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(f,p)=>{p?f():uc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};let h=se.watch(t,e,a);return Ji&&(c?c.push(h):l&&h()),h}function iM(t,e,n){let i=this.proxy,r=y.isString(t)?t.includes(".")?Zp(i,t):()=>i[t]:t.bind(i,i),s;y.isFunction(e)?s=e:(s=e.handler,n=e);let o=Ri(this),a=ts(r,s.bind(i),n);return o(),a}function Zp(t,e){let n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function rM(t,e,n=y.EMPTY_OBJ){let i=ei(),r=y.camelize(e),s=y.hyphenate(e),o=Jp(t,r),a=se.customRef((l,c)=>{let u,d=y.EMPTY_OBJ,h;return jp(()=>{let f=t[r];y.hasChanged(u,f)&&(u=f,c())}),{get(){return l(),n.get?n.get(u):u},set(f){let p=n.set?n.set(f):f;if(!y.hasChanged(p,u)&&!(d!==y.EMPTY_OBJ&&y.hasChanged(f,d)))return;let g=i.vnode.props;g&&(e in g||r in g||s in g)&&(`onUpdate:${e}`in g||`onUpdate:${r}`in g||`onUpdate:${s}`in g)||(u=f,c()),i.emit(`update:${e}`,p),y.hasChanged(f,p)&&y.hasChanged(f,d)&&!y.hasChanged(p,h)&&c(),d=f,h=p}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||y.EMPTY_OBJ:a,done:!1}:{done:!0}}}},a}var Jp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${y.camelize(e)}Modifiers`]||t[`${y.hyphenate(e)}Modifiers`];function sM(t,e,...n){if(t.isUnmounted)return;let i=t.vnode.props||y.EMPTY_OBJ,r=n,s=e.startsWith("update:"),o=s&&Jp(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>y.isString(u)?u.trim():u)),o.number&&(r=n.map(y.looseToNumber)));let a,l=i[a=y.toHandlerKey(e)]||i[a=y.toHandlerKey(y.camelize(e))];!l&&s&&(l=i[a=y.toHandlerKey(y.hyphenate(e))]),l&&hn(l,t,6,r);let c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,hn(c,t,6,r)}}function Qp(t,e,n=!1){let i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;let s=t.emits,o={},a=!1;if(!y.isFunction(t)){let l=c=>{let u=Qp(c,e,!0);u&&(a=!0,y.extend(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(y.isObject(t)&&i.set(t,null),null):(y.isArray(s)?s.forEach(l=>o[l]=null):y.extend(o,s),y.isObject(t)&&i.set(t,o),o)}function Fo(t,e){return!t||!y.isOn(e)?!1:(e=e.slice(2).replace(/Once$/,""),y.hasOwn(t,e[0].toLowerCase()+e.slice(1))||y.hasOwn(t,y.hyphenate(e))||y.hasOwn(t,e))}function xo(t){let{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:p,inheritAttrs:g}=t,S=Kr(t),E,M;try{if(n.shapeFlag&4){let b=r||i,R=b;E=Gt(c.call(R,b,u,d,f,h,p)),M=a}else{let b=e;E=Gt(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),M=e.props?a:aM(a)}}catch(b){Yr.length=0,wi(b,t,1),E=ct(ft)}let _=E;if(M&&g!==!1){let b=Object.keys(M),{shapeFlag:R}=_;b.length&&R&7&&(s&&b.some(y.isModelListener)&&(M=lM(M,s)),_=Rn(_,M,!1,!0))}return n.dirs&&(_=Rn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Ai(_,n.transition),E=_,Kr(S),E}function oM(t,e=!0){let n;for(let i=0;i<t.length;i++){let r=t[i];if(Ln(r)){if(r.type!==ft||r.children==="v-if"){if(n)return;n=r}}else return}return n}var aM=t=>{let e;for(let n in t)(n==="class"||n==="style"||y.isOn(n))&&((e||(e={}))[n]=t[n]);return e},lM=(t,e)=>{let n={};for(let i in t)(!y.isModelListener(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function cM(t,e,n){let{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ap(i,o,c):!!o;if(l&8){let u=e.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(o[h]!==i[h]&&!Fo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ap(i,o,c):!0:!!o;return!1}function ap(t,e,n){let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){let s=i[r];if(e[s]!==t[s]&&!Fo(n,s))return!0}return!1}function Uo({vnode:t,parent:e},n){for(;e;){let i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}var wo=t=>t.__isSuspense,ic=0,uM={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)fM(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}hM(t,e,n,i,r,o,a,l,c)}},hydrate:pM,normalize:mM},dM=uM;function Jr(t,e){let n=t.props&&t.props[e];y.isFunction(n)&&n()}function fM(t,e,n,i,r,s,o,a,l){let{p:c,o:{createElement:u}}=l,d=u("div"),h=t.suspense=em(t,r,i,e,d,n,s,o,a,l);c(null,h.pendingBranch=t.ssContent,d,null,i,h,s,o),h.deps>0?(Jr(t,"onPending"),Jr(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),ji(h,t.ssFallback)):h.resolve(!1,!0)}function hM(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){let d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;let h=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:S,isHydrating:E}=d;if(g)d.pendingBranch=h,fn(h,g)?(l(g,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():S&&(E||(l(p,f,n,i,r,null,s,o,a),ji(d,f)))):(d.pendingId=ic++,E?(d.isHydrating=!1,d.activeBranch=g):c(g,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),S?(l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0?d.resolve():(l(p,f,n,i,r,null,s,o,a),ji(d,f))):p&&fn(h,p)?(l(p,h,n,i,r,d,s,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0&&d.resolve()));else if(p&&fn(h,p))l(p,h,n,i,r,d,s,o,a),ji(d,h);else if(Jr(e,"onPending"),d.pendingBranch=h,h.shapeFlag&512?d.pendingId=h.component.suspenseId:d.pendingId=ic++,l(null,h,d.hiddenContainer,null,r,d,s,o,a),d.deps<=0)d.resolve();else{let{timeout:M,pendingId:_}=d;M>0?setTimeout(()=>{d.pendingId===_&&d.fallback(f)},M):M===0&&d.fallback(f)}}function em(t,e,n,i,r,s,o,a,l,c,u=!1){let{p:d,m:h,um:f,n:p,o:{parentNode:g,remove:S}}=c,E,M=gM(t);M&&e&&e.pendingBranch&&(E=e.pendingId,e.deps++);let _=t.props?y.toNumber(t.props.timeout):void 0,b=s,R={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:ic++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(U=!1,H=!1){let{vnode:$,activeBranch:F,pendingBranch:w,pendingId:I,effects:m,parentComponent:x,container:D}=R,z=!1;R.isHydrating?R.isHydrating=!1:U||(z=F&&w.transition&&w.transition.mode==="out-in",z&&(F.transition.afterLeave=()=>{I===R.pendingId&&(h(w,D,s===b?p(F):s,0),So(m))}),F&&(g(F.el)===D&&(s=p(F)),f(F,x,R,!0)),z||h(w,D,s,0)),ji(R,w),R.pendingBranch=null,R.isInFallback=!1;let P=R.parent,A=!1;for(;P;){if(P.pendingBranch){P.effects.push(...m),A=!0;break}P=P.parent}!A&&!z&&So(m),R.effects=[],M&&e&&e.pendingBranch&&E===e.pendingId&&(e.deps--,e.deps===0&&!H&&e.resolve()),Jr($,"onResolve")},fallback(U){if(!R.pendingBranch)return;let{vnode:H,activeBranch:$,parentComponent:F,container:w,namespace:I}=R;Jr(H,"onFallback");let m=p($),x=()=>{R.isInFallback&&(d(null,U,w,m,F,null,I,a,l),ji(R,U))},D=U.transition&&U.transition.mode==="out-in";D&&($.transition.afterLeave=x),R.isInFallback=!0,f($,F,null,!0),D||x()},move(U,H,$){R.activeBranch&&h(R.activeBranch,U,H,$),R.container=U},next(){return R.activeBranch&&p(R.activeBranch)},registerDep(U,H,$){let F=!!R.pendingBranch;F&&R.deps++;let w=U.vnode.el;U.asyncDep.catch(I=>{wi(I,U,0)}).then(I=>{if(U.isUnmounted||R.isUnmounted||R.pendingId!==U.suspenseId)return;U.asyncResolved=!0;let{vnode:m}=U;ac(U,I,!1),w&&(m.el=w);let x=!w&&U.subTree.el;H(U,m,g(w||U.subTree.el),w?null:p(U.subTree),R,o,$),x&&S(x),Uo(U,m.el),F&&--R.deps===0&&R.resolve()})},unmount(U,H){R.isUnmounted=!0,R.activeBranch&&f(R.activeBranch,n,U,H),R.pendingBranch&&f(R.pendingBranch,n,U,H)}};return R}function pM(t,e,n,i,r,s,o,a,l){let c=e.suspense=em(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function mM(t){let{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=lp(i?n.default:n),t.ssFallback=i?lp(n.fallback):ct(ft)}function lp(t){let e;if(y.isFunction(t)){let n=Mi&&t._c;n&&(t._d=!1,Qr()),t=t(),n&&(t._d=!0,e=Mt,nm())}return y.isArray(t)&&(t=oM(t)),t=Gt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function tm(t,e){e&&e.pendingBranch?y.isArray(t)?e.effects.push(...t):e.effects.push(t):So(t)}function ji(t,e){t.activeBranch=e;let{vnode:n,parentComponent:i}=t,r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Uo(i,r))}function gM(t){let e=t.props&&t.props.suspensible;return e!=null&&e!==!1}var At=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Zi=Symbol.for("v-stc"),Yr=[],Mt=null;function Qr(t=!1){Yr.push(Mt=t?null:[])}function nm(){Yr.pop(),Mt=Yr[Yr.length-1]||null}var Mi=1;function rc(t,e=!1){Mi+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function im(t){return t.dynamicChildren=Mi>0?Mt||y.EMPTY_ARR:null,nm(),Mi>0&&Mt&&Mt.push(t),t}function _M(t,e,n,i,r,s){return im(Sc(t,e,n,i,r,s,!0))}function Co(t,e,n,i,r){return im(ct(t,e,n,i,r,!0))}function Ln(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}function yM(t){}var rm=({key:t})=>t??null,vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?y.isString(t)||se.isRef(t)||y.isFunction(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function Sc(t,e=null,n=null,i=0,r=null,s=t===At?0:1,o=!1,a=!1){let l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rm(e),ref:e&&vo(e),scopeId:Oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gt};return a?(Ac(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=y.isString(n)?8:16),Mi>0&&!o&&Mt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mt.push(l),l}var ct=EM;function EM(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Op)&&(t=ft),Ln(t)){let a=Rn(t,e,!0);return n&&Ac(a,n),Mi>0&&!s&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag=-2,a}if(wM(t)&&(t=t.__vccOpts),e){e=sm(e);let{class:a,style:l}=e;a&&!y.isString(a)&&(e.class=y.normalizeClass(a)),y.isObject(l)&&(se.isProxy(l)&&!y.isArray(l)&&(l=y.extend({},l)),e.style=y.normalizeStyle(l))}let o=y.isString(t)?1:wo(t)?128:pp(t)?64:y.isObject(t)?4:y.isFunction(t)?2:0;return Sc(t,e,n,i,r,o,s,!0)}function sm(t){return t?se.isProxy(t)||kp(t)?y.extend({},t):t:null}function Rn(t,e,n=!1,i=!1){let{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?om(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&rm(c),ref:e&&e.ref?n&&s?y.isArray(s)?s.concat(vo(e)):[s,vo(e)]:vo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ai(u,l.clone(u)),u}function Tc(t=" ",e=0){return ct(Qn,null,t,e)}function xM(t,e){let n=ct(Zi,null,t);return n.staticCount=e,n}function vM(t="",e=!1){return e?(Qr(),Co(ft,null,t)):ct(ft,null,t)}function Gt(t){return t==null||typeof t=="boolean"?ct(ft):y.isArray(t)?ct(At,null,t.slice()):Ln(t)?Zn(t):ct(Qn,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Ac(t,e){let n=0,{shapeFlag:i}=t;if(e==null)e=null;else if(y.isArray(e))n=16;else if(typeof e=="object")if(i&65){let r=e.default;r&&(r._c&&(r._d=!1),Ac(t,r()),r._c&&(r._d=!0));return}else{n=32;let r=e._;!r&&!kp(e)?e._ctx=gt:r===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else y.isFunction(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),i&64?(n=16,e=[Tc(e)]):n=8);t.children=e,t.shapeFlag|=n}function om(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];for(let r in i)if(r==="class")e.class!==i.class&&(e.class=y.normalizeClass([e.class,i.class]));else if(r==="style")e.style=y.normalizeStyle([e.style,i.style]);else if(y.isOn(r)){let s=e[r],o=i[r];o&&s!==o&&!(y.isArray(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Vt(t,e,n,i=null){hn(t,e,7,[n,i])}var bM=Lp(),SM=0;function am(t,e,n){let i=t.type,r=(e?e.appContext:t.appContext)||bM,s={uid:SM++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new se.EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gp(i,r),emitsOptions:Qp(i,r),emit:null,emitted:null,propsDefaults:y.EMPTY_OBJ,inheritAttrs:i.inheritAttrs,ctx:y.EMPTY_OBJ,data:y.EMPTY_OBJ,props:y.EMPTY_OBJ,attrs:y.EMPTY_OBJ,slots:y.EMPTY_OBJ,refs:y.EMPTY_OBJ,setupState:y.EMPTY_OBJ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=sM.bind(null,s),t.ce&&t.ce(s),s}var mt=null,ei=()=>mt||gt,Io,sc;{let t=y.getGlobalThis(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Io=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),sc=e("__VUE_SSR_SETTERS__",n=>Ji=n)}var Ri=t=>{let e=mt;return Io(t),t.scope.on(),()=>{t.scope.off(),Io(e)}},oc=()=>{mt&&mt.scope.off(),Io(null)};function lm(t){return t.vnode.shapeFlag&4}var Ji=!1;function cm(t,e=!1,n=!1){e&&sc(e);let{props:i,children:r}=t.vnode,s=lm(t);XA(t,i,s,e),jA(t,r,n||e);let o=s?TM(t,e):void 0;return e&&sc(!1),o}function TM(t,e){let n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ql);let{setup:i}=n;if(i){se.pauseTracking();let r=t.setupContext=i.length>1?dm(t):null,s=Ri(t),o=Qi(i,t,0,[t.props,r]),a=y.isPromise(o);if(se.resetTracking(),s(),(a||t.sp)&&!Jn(t)&&hc(t),a){if(o.then(oc,oc),e)return o.then(l=>{ac(t,l,e)}).catch(l=>{wi(l,t,0)});t.asyncDep=o}else ac(t,o,e)}else um(t,e)}function ac(t,e,n){y.isFunction(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:y.isObject(e)&&(t.setupState=se.proxyRefs(e)),um(t,n)}var Po,lc;function AM(t){Po=t,lc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,TA))}}var MM=()=>!Po;function um(t,e,n){let i=t.type;if(!t.render){if(!e&&Po&&!i.render){let r=i.template||Ec(t).template;if(r){let{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=y.extend(y.extend({isCustomElement:s,delimiters:a},o),l);i.render=Po(r,c)}}t.render=i.render||y.NOOP,lc&&lc(t)}{let r=Ri(t);se.pauseTracking();try{BA(t)}finally{se.resetTracking(),r()}}}var RM={get(t,e){return se.track(t,"get",""),t[e]}};function dm(t){let e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,RM),slots:t.slots,emit:t.emit,expose:e}}function ns(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(se.proxyRefs(se.markRaw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wr)return Wr[n](t)},has(e,n){return n in e||n in Wr}})):t.proxy}function cc(t,e=!0){return y.isFunction(t)?t.displayName||t.name:t.name||e&&t.__name}function wM(t){return y.isFunction(t)&&"__vccOpts"in t}var fm=(t,e)=>se.computed(t,e,Ji);function CM(t,e,n){let i=arguments.length;return i===2?y.isObject(e)&&!y.isArray(e)?Ln(e)?ct(t,null,[e]):ct(t,e):ct(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ln(n)&&(n=[n]),ct(t,e,n))}function IM(){}function PM(t,e,n,i){let r=n[i];if(r&&hm(r,t))return r;let s=e();return s.memo=t.slice(),s.cacheIndex=i,n[i]=s}function hm(t,e){let n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(y.hasChanged(n[i],e[i]))return!1;return Mi>0&&Mt&&Mt.push(t),!0}var pm="3.5.16",OM=y.NOOP,DM=GT,NM=void 0,LM=y.NOOP,FM={createComponentInstance:am,setupComponent:cm,renderComponentRoot:xo,setCurrentRenderingInstance:Kr,isVNode:Ln,normalizeVNode:Gt,getComponentPublicInstance:ns,ensureValidVNode:yc,pushWarningContext:UT,popWarningContext:BT},UM=FM,BM=null,kM=null,VM=null;G.EffectScope=se.EffectScope;G.ReactiveEffect=se.ReactiveEffect;G.TrackOpTypes=se.TrackOpTypes;G.TriggerOpTypes=se.TriggerOpTypes;G.customRef=se.customRef;G.effect=se.effect;G.effectScope=se.effectScope;G.getCurrentScope=se.getCurrentScope;G.getCurrentWatcher=se.getCurrentWatcher;G.isProxy=se.isProxy;G.isReactive=se.isReactive;G.isReadonly=se.isReadonly;G.isRef=se.isRef;G.isShallow=se.isShallow;G.markRaw=se.markRaw;G.onScopeDispose=se.onScopeDispose;G.onWatcherCleanup=se.onWatcherCleanup;G.proxyRefs=se.proxyRefs;G.reactive=se.reactive;G.readonly=se.readonly;G.ref=se.ref;G.shallowReactive=se.shallowReactive;G.shallowReadonly=se.shallowReadonly;G.shallowRef=se.shallowRef;G.stop=se.stop;G.toRaw=se.toRaw;G.toRef=se.toRef;G.toRefs=se.toRefs;G.toValue=se.toValue;G.triggerRef=se.triggerRef;G.unref=se.unref;G.camelize=y.camelize;G.capitalize=y.capitalize;G.normalizeClass=y.normalizeClass;G.normalizeProps=y.normalizeProps;G.normalizeStyle=y.normalizeStyle;G.toDisplayString=y.toDisplayString;G.toHandlerKey=y.toHandlerKey;G.BaseTransition=ZT;G.BaseTransitionPropsValidators=yp;G.Comment=ft;G.DeprecationTypes=VM;G.ErrorCodes=VT;G.ErrorTypeStrings=DM;G.Fragment=At;G.KeepAlive=pA;G.Static=Zi;G.Suspense=dM;G.Teleport=KT;G.Text=Qn;G.assertNumber=kT;G.callWithAsyncErrorHandling=hn;G.callWithErrorHandling=Qi;G.cloneVNode=Rn;G.compatUtils=kM;G.computed=fm;G.createBlock=Co;G.createCommentVNode=vM;G.createElementBlock=_M;G.createElementVNode=Sc;G.createHydrationRenderer=QA;G.createPropsRestProxy=FA;G.createRenderer=JA;G.createSlots=vA;G.createStaticVNode=xM;G.createTextVNode=Tc;G.createVNode=ct;G.defineAsyncComponent=fA;G.defineComponent=bp;G.defineEmits=MA;G.defineExpose=RA;G.defineModel=IA;G.defineOptions=wA;G.defineProps=AA;G.defineSlots=CA;G.devtools=NM;G.getCurrentInstance=ei;G.getTransitionRawChildren=fc;G.guardReactiveProps=sm;G.h=CM;G.handleError=wi;G.hasInjectionContext=$A;G.hydrateOnIdle=oA;G.hydrateOnInteraction=uA;G.hydrateOnMediaQuery=cA;G.hydrateOnVisible=lA;G.initCustomFormatter=IM;G.inject=$r;G.isMemoSame=hm;G.isRuntimeOnly=MM;G.isVNode=Ln;G.mergeDefaults=NA;G.mergeModels=LA;G.mergeProps=om;G.nextTick=up;G.onActivated=Sp;G.onBeforeMount=Mp;G.onBeforeUnmount=Lo;G.onBeforeUpdate=Rp;G.onDeactivated=Tp;G.onErrorCaptured=Pp;G.onMounted=No;G.onRenderTracked=Ip;G.onRenderTriggered=Cp;G.onServerPrefetch=wp;G.onUnmounted=mc;G.onUpdated=pc;G.openBlock=Qr;G.popScopeId=$T;G.provide=Fp;G.pushScopeId=WT;G.queuePostFlushCb=So;G.registerRuntimeCompiler=AM;G.renderList=xA;G.renderSlot=bA;G.resolveComponent=_A;G.resolveDirective=EA;G.resolveDynamicComponent=yA;G.resolveFilter=BM;G.resolveTransitionHooks=Ao;G.setBlockTracking=rc;G.setDevtoolsHook=LM;G.setTransitionHooks=Ai;G.ssrContextKey=qp;G.ssrUtils=UM;G.toHandlers=SA;G.transformVNodeArgs=yM;G.useAttrs=DA;G.useId=JT;G.useModel=rM;G.useSSRContext=Kp;G.useSlots=OA;G.useTemplateRef=QT;G.useTransitionState=_p;G.version=pm;G.warn=OM;G.watch=Xr;G.watchEffect=tM;G.watchPostEffect=nM;G.watchSyncEffect=jp;G.withAsyncContext=UA;G.withCtx=dc;G.withDefaults=PA;G.withDirectives=YT;G.withMemo=PM;G.withScopeId=XT});var _m=ge((_2,gm)=>{"use strict";gm.exports=mm()});var lg=ge(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});var je=_m(),ue=Js(),Cc,ym=typeof window<"u"&&window.trustedTypes;if(ym)try{Cc=ym.createPolicy("vue",{createHTML:t=>t})}catch{}var Vm=Cc?t=>Cc.createHTML(t):t=>t,GM="http://www.w3.org/2000/svg",HM="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,Em=Un&&Un.createElement("template"),zM={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{let e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{let r=e==="svg"?Un.createElementNS(GM,t):e==="mathml"?Un.createElementNS(HM,t):n?Un.createElement(t,{is:n}):Un.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){let o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Em.innerHTML=Vm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);let a=Em.content;if(i==="svg"||i==="mathml"){let l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ti="transition",is="animation",er=Symbol("_vtc"),Gm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hm=ue.extend({},je.BaseTransitionPropsValidators,Gm),WM=t=>(t.displayName="Transition",t.props=Hm,t),$M=WM((t,{slots:e})=>je.h(je.BaseTransition,zm(t),e)),Ci=(t,e=[])=>{ue.isArray(t)?t.forEach(n=>n(...e)):t&&t(...e)},xm=t=>t?ue.isArray(t)?t.some(e=>e.length>1):t.length>1:!1;function zm(t){let e={};for(let m in t)m in Gm||(e[m]=t[m]);if(t.css===!1)return e;let{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=XM(r),g=p&&p[0],S=p&&p[1],{onBeforeEnter:E,onEnter:M,onEnterCancelled:_,onLeave:b,onLeaveCancelled:R,onBeforeAppear:U=E,onAppear:H=M,onAppearCancelled:$=_}=e,F=(m,x,D,z)=>{m._enterCancelled=z,ni(m,x?u:a),ni(m,x?c:o),D&&D()},w=(m,x)=>{m._isLeaving=!1,ni(m,d),ni(m,f),ni(m,h),x&&x()},I=m=>(x,D)=>{let z=m?H:M,P=()=>F(x,m,D);Ci(z,[x,P]),vm(()=>{ni(x,m?l:s),wn(x,m?u:a),xm(z)||bm(x,i,g,P)})};return ue.extend(e,{onBeforeEnter(m){Ci(E,[m]),wn(m,s),wn(m,o)},onBeforeAppear(m){Ci(U,[m]),wn(m,l),wn(m,c)},onEnter:I(!1),onAppear:I(!0),onLeave(m,x){m._isLeaving=!0;let D=()=>w(m,x);wn(m,d),m._enterCancelled?(wn(m,h),Ic()):(Ic(),wn(m,h)),vm(()=>{m._isLeaving&&(ni(m,d),wn(m,f),xm(b)||bm(m,i,S,D))}),Ci(b,[m,D])},onEnterCancelled(m){F(m,!1,void 0,!0),Ci(_,[m])},onAppearCancelled(m){F(m,!0,void 0,!0),Ci($,[m])},onLeaveCancelled(m){w(m),Ci(R,[m])}})}function XM(t){if(t==null)return null;if(ue.isObject(t))return[Mc(t.enter),Mc(t.leave)];{let e=Mc(t);return[e,e]}}function Mc(t){return ue.toNumber(t)}function wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[er]||(t[er]=new Set)).add(e)}function ni(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));let n=t[er];n&&(n.delete(e),n.size||(t[er]=void 0))}function vm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}var YM=0;function bm(t,e,n,i){let r=t._endId=++YM,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);let{type:o,timeout:a,propCount:l}=Wm(t,e);if(!o)return i();let c=o+"end",u=0,d=()=>{t.removeEventListener(c,h),s()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Wm(t,e){let n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),o=Sm(r,s),a=i(`${is}Delay`),l=i(`${is}Duration`),c=Sm(a,l),u=null,d=0,h=0;e===ti?o>0&&(u=ti,d=o,h=s.length):e===is?c>0&&(u=is,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?ti:is:null,h=u?u===ti?s.length:l.length:0);let f=u===ti&&/\b(transform|all)(,|$)/.test(i(`${ti}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function Sm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Tm(n)+Tm(t[i])))}function Tm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ic(){return document.body.offsetHeight}function qM(t,e,n){let i=t[er];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}var Vo=Symbol("_vod"),$m=Symbol("_vsh"),Xm={beforeMount(t,{value:e},{transition:n}){t[Vo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):rs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),rs(t,!0),i.enter(t)):i.leave(t,()=>{rs(t,!1)}):rs(t,e))},beforeUnmount(t,{value:e}){rs(t,e)}};function rs(t,e){t.style.display=e?t[Vo]:"none",t[$m]=!e}function KM(){Xm.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}var jM=Symbol("");function ZM(t){}var JM=/(^|;)\s*display\s*:/;function QM(t,e,n){let i=t.style,r=ue.isString(n),s=!1;if(n&&!r){if(e)if(ue.isString(e))for(let o of e.split(";")){let a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ko(i,a,"")}else for(let o in e)n[o]==null&&ko(i,o,"");for(let o in n)o==="display"&&(s=!0),ko(i,o,n[o])}else if(r){if(e!==n){let o=i[jM];o&&(n+=";"+o),i.cssText=n,s=JM.test(n)}}else e&&t.removeAttribute("style");Vo in t&&(t[Vo]=s?i.display:"",t[$m]&&(i.display="none"))}var Am=/\s*!important$/;function ko(t,e,n){if(ue.isArray(n))n.forEach(i=>ko(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{let i=e1(t,e);Am.test(n)?t.setProperty(ue.hyphenate(i),n.replace(Am,""),"important"):t[i]=n}}var Mm=["Webkit","Moz","ms"],Rc={};function e1(t,e){let n=Rc[e];if(n)return n;let i=je.camelize(e);if(i!=="filter"&&i in t)return Rc[e]=i;i=ue.capitalize(i);for(let r=0;r<Mm.length;r++){let s=Mm[r]+i;if(s in t)return Rc[e]=s}return e}var Rm="http://www.w3.org/1999/xlink";function wm(t,e,n,i,r,s=ue.isSpecialBooleanAttr(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rm,e.slice(6,e.length)):t.setAttributeNS(Rm,e,n):n==null||s&&!ue.includeBooleanAttr(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ue.isSymbol(n)?String(n):n)}function Cm(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vm(n):n);return}let s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){let a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){let a=typeof t[e];a==="boolean"?n=ue.includeBooleanAttr(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Bn(t,e,n,i){t.addEventListener(e,n,i)}function t1(t,e,n,i){t.removeEventListener(e,n,i)}var Im=Symbol("_vei");function n1(t,e,n,i,r=null){let s=t[Im]||(t[Im]={}),o=s[e];if(i&&o)o.value=i;else{let[a,l]=i1(e);if(i){let c=s[e]=o1(i,r);Bn(t,a,c,l)}else o&&(t1(t,a,o,l),s[e]=void 0)}}var Pm=/(?:Once|Passive|Capture)$/;function i1(t){let e;if(Pm.test(t)){e={};let i;for(;i=t.match(Pm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ue.hyphenate(t.slice(2)),e]}var wc=0,r1=Promise.resolve(),s1=()=>wc||(r1.then(()=>wc=0),wc=Date.now());function o1(t,e){let n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;je.callWithAsyncErrorHandling(a1(i,n.value),e,5,[i])};return n.value=t,n.attached=s1(),n}function a1(t,e){if(ue.isArray(e)){let n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}var Om=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,l1=(t,e,n,i,r,s)=>{let o=r==="svg";e==="class"?qM(t,i,o):e==="style"?QM(t,n,i):ue.isOn(e)?ue.isModelListener(e)||n1(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):c1(t,e,i,o))?(Cm(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wm(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue.isString(i))?Cm(t,ue.camelize(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wm(t,e,i,o))};function c1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Om(e)&&ue.isFunction(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){let r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Om(e)&&ue.isString(n)?!1:e in t}var Dm={};function Ym(t,e,n){let i=je.defineComponent(t,e);ue.isPlainObject(i)&&ue.extend(i,e);class r extends Go{constructor(o){super(i,o,n)}}return r.def=i,r}var u1=(t,e)=>Ym(t,e,sg),d1=typeof HTMLElement<"u"?HTMLElement:class{},Go=class t extends d1{constructor(e,n={},i=Pc){super(),this._def=e,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==Pc?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof t){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,je.nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(let r of i)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});let e=(i,r=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:s,styles:o}=i,a;if(s&&!ue.isArray(s))for(let l in s){let c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ue.toNumber(this._props[l])),(a||(a=Object.create(null)))[ue.camelize(l)]=!0)}this._numberProps=a,this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},n=this._def.__asyncLoader;n?this._pendingResolve=n().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let n=this._instance&&this._instance.exposed;if(n)for(let i in n)ue.hasOwn(this,i)||Object.defineProperty(this,i,{get:()=>je.unref(n[i])})}_resolveProps(e){let{props:n}=e,i=ue.isArray(n)?n:Object.keys(n||{});for(let r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r]);for(let r of i.map(ue.camelize))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(s){this._setProp(r,s,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;let n=this.hasAttribute(e),i=n?this.getAttribute(e):Dm,r=ue.camelize(e);n&&this._numberProps&&this._numberProps[r]&&(i=ue.toNumber(i)),this._setProp(r,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,r=!1){if(n!==this._props[e]&&(n===Dm?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),r&&this._instance&&this._update(),i)){let s=this._ob;s&&s.disconnect(),n===!0?this.setAttribute(ue.hyphenate(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(ue.hyphenate(e),n+""):n||this.removeAttribute(ue.hyphenate(e)),s&&s.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),rg(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let n=je.createVNode(this._def,ue.extend(e,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;let r=(s,o)=>{this.dispatchEvent(new CustomEvent(s,ue.isPlainObject(o[0])?ue.extend({detail:o},o[0]):{detail:o}))};i.emit=(s,...o)=>{r(s,o),ue.hyphenate(s)!==s&&r(ue.hyphenate(s),o)},this._setParent()}),n}_applyStyles(e,n){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}let i=this._nonce;for(let r=e.length-1;r>=0;r--){let s=document.createElement("style");i&&s.setAttribute("nonce",i),s.textContent=e[r],this.shadowRoot.prepend(s)}}_parseSlots(){let e=this._slots={},n;for(;n=this.firstChild;){let i=n.nodeType===1&&n.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){let e=(this._teleportTarget||this).querySelectorAll("slot"),n=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){let r=e[i],s=r.getAttribute("name")||"default",o=this._slots[s],a=r.parentNode;if(o)for(let l of o){if(n&&l.nodeType===1){let c=n+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let d;for(;d=u.nextNode();)d.setAttribute(c,"")}a.insertBefore(l,r)}else for(;r.firstChild;)a.insertBefore(r.firstChild,r);a.removeChild(r)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}};function qm(t){let e=je.getCurrentInstance(),n=e&&e.ce;return n||null}function f1(){let t=qm();return t&&t.shadowRoot}function h1(t="$style"){{let e=je.getCurrentInstance();if(!e)return ue.EMPTY_OBJ;let n=e.type.__cssModules;if(!n)return ue.EMPTY_OBJ;let i=n[t];return i||ue.EMPTY_OBJ}}var Km=new WeakMap,jm=new WeakMap,Ho=Symbol("_moveCb"),Nm=Symbol("_enterCb"),p1=t=>(delete t.props.mode,t),m1=p1({name:"TransitionGroup",props:ue.extend({},Hm,{tag:String,moveClass:String}),setup(t,{slots:e}){let n=je.getCurrentInstance(),i=je.useTransitionState(),r,s;return je.onUpdated(()=>{if(!r.length)return;let o=t.moveClass||`${t.name||"v"}-move`;if(!x1(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(_1),r.forEach(y1);let a=r.filter(E1);Ic(),a.forEach(l=>{let c=l.el,u=c.style;wn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";let d=c[Ho]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c[Ho]=null,ni(c,o))};c.addEventListener("transitionend",d)}),r=[]}),()=>{let o=je.toRaw(t),a=zm(o),l=o.tag||je.Fragment;if(r=[],s)for(let c=0;c<s.length;c++){let u=s[c];u.el&&u.el instanceof Element&&(r.push(u),je.setTransitionHooks(u,je.resolveTransitionHooks(u,a,i,n)),Km.set(u,u.el.getBoundingClientRect()))}s=e.default?je.getTransitionRawChildren(e.default()):[];for(let c=0;c<s.length;c++){let u=s[c];u.key!=null&&je.setTransitionHooks(u,je.resolveTransitionHooks(u,a,i,n))}return je.createVNode(l,null,s)}}}),g1=m1;function _1(t){let e=t.el;e[Ho]&&e[Ho](),e[Nm]&&e[Nm]()}function y1(t){jm.set(t,t.el.getBoundingClientRect())}function E1(t){let e=Km.get(t),n=jm.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){let s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function x1(t,e,n){let i=t.cloneNode(),r=t[er];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";let s=e.nodeType===1?e:e.parentNode;s.appendChild(i);let{hasTransform:o}=Wm(i);return s.removeChild(i),o}var ii=t=>{let e=t.props["onUpdate:modelValue"]||!1;return ue.isArray(e)?n=>ue.invokeArrayFns(e,n):e};function v1(t){t.target.composing=!0}function Lm(t){let e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}var on=Symbol("_assign"),zo={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[on]=ii(r);let s=i||r.props&&r.props.type==="number";Bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ue.looseToNumber(a)),t[on](a)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",v1),Bn(t,"compositionend",Lm),Bn(t,"change",Lm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[on]=ii(o),t.composing)return;let a=(s||t.type==="number")&&!/^0\d/.test(t.value)?ue.looseToNumber(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Oc={deep:!0,created(t,e,n){t[on]=ii(n),Bn(t,"change",()=>{let i=t._modelValue,r=tr(t),s=t.checked,o=t[on];if(ue.isArray(i)){let a=ue.looseIndexOf(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){let c=[...i];c.splice(a,1),o(c)}}else if(ue.isSet(i)){let a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Jm(t,s))})},mounted:Fm,beforeUpdate(t,e,n){t[on]=ii(n),Fm(t,e,n)}};function Fm(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(ue.isArray(e))r=ue.looseIndexOf(e,i.props.value)>-1;else if(ue.isSet(e))r=e.has(i.props.value);else{if(e===n)return;r=ue.looseEqual(e,Jm(t,!0))}t.checked!==r&&(t.checked=r)}var Dc={created(t,{value:e},n){t.checked=ue.looseEqual(e,n.props.value),t[on]=ii(n),Bn(t,"change",()=>{t[on](tr(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[on]=ii(i),e!==n&&(t.checked=ue.looseEqual(e,i.props.value))}},Zm={deep:!0,created(t,{value:e,modifiers:{number:n}},i){let r=ue.isSet(e);Bn(t,"change",()=>{let s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ue.looseToNumber(tr(o)):tr(o));t[on](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,je.nextTick(()=>{t._assigning=!1})}),t[on]=ii(i)},mounted(t,{value:e}){Um(t,e)},beforeUpdate(t,e,n){t[on]=ii(n)},updated(t,{value:e}){t._assigning||Um(t,e)}};function Um(t,e){let n=t.multiple,i=ue.isArray(e);if(!(n&&!i&&!ue.isSet(e))){for(let r=0,s=t.options.length;r<s;r++){let o=t.options[r],a=tr(o);if(n)if(i){let l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ue.looseIndexOf(e,a)>-1}else o.selected=e.has(a);else if(ue.looseEqual(tr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function tr(t){return"_value"in t?t._value:t.value}function Jm(t,e){let n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}var Qm={created(t,e,n){Bo(t,e,n,null,"created")},mounted(t,e,n){Bo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Bo(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Bo(t,e,n,i,"updated")}};function eg(t,e){switch(t){case"SELECT":return Zm;case"TEXTAREA":return zo;default:switch(e){case"checkbox":return Oc;case"radio":return Dc;default:return zo}}}function Bo(t,e,n,i,r){let o=eg(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,i)}function b1(){zo.getSSRProps=({value:t})=>({value:t}),Dc.getSSRProps=({value:t},e)=>{if(e.props&&ue.looseEqual(e.props.value,t))return{checked:!0}},Oc.getSSRProps=({value:t},e)=>{if(ue.isArray(t)){if(e.props&&ue.looseIndexOf(t,e.props.value)>-1)return{checked:!0}}else if(ue.isSet(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Qm.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;let n=eg(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}var S1=["ctrl","shift","alt","meta"],T1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>S1.some(n=>t[`${n}Key`]&&!e.includes(n))},A1=(t,e)=>{let n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){let a=T1[e[o]];if(a&&a(r,e))return}return t(r,...s)})},M1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R1=(t,e)=>{let n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;let s=ue.hyphenate(r.key);if(e.some(o=>o===s||M1[o]===s))return t(r)})},tg=ue.extend({patchProp:l1},zM),ss,Bm=!1;function ng(){return ss||(ss=je.createRenderer(tg))}function ig(){return ss=Bm?ss:je.createHydrationRenderer(tg),Bm=!0,ss}var rg=(...t)=>{ng().render(...t)},w1=(...t)=>{ig().hydrate(...t)},Pc=(...t)=>{let e=ng().createApp(...t),{mount:n}=e;return e.mount=i=>{let r=ag(i);if(!r)return;let s=e._component;!ue.isFunction(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");let o=n(r,!1,og(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},sg=(...t)=>{let e=ig().createApp(...t),{mount:n}=e;return e.mount=i=>{let r=ag(i);if(r)return n(r,!0,og(r))},e};function og(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ag(t){return ue.isString(t)?document.querySelector(t):t}var km=!1,C1=()=>{km||(km=!0,b1(),KM())};Je.Transition=$M;Je.TransitionGroup=g1;Je.VueElement=Go;Je.createApp=Pc;Je.createSSRApp=sg;Je.defineCustomElement=Ym;Je.defineSSRCustomElement=u1;Je.hydrate=w1;Je.initDirectivesForSSR=C1;Je.render=rg;Je.useCssModule=h1;Je.useCssVars=ZM;Je.useHost=qm;Je.useShadowRoot=f1;Je.vModelCheckbox=Oc;Je.vModelDynamic=Qm;Je.vModelRadio=Dc;Je.vModelSelect=Zm;Je.vModelText=zo;Je.vShow=Xm;Je.withKeys=R1;Je.withModifiers=A1;Object.keys(je).forEach(function(t){t!=="default"&&!Object.prototype.hasOwnProperty.call(Je,t)&&(Je[t]=je[t])})});var Nc=ge((x2,cg)=>{"use strict";cg.exports=lg()});var ze=ge((S2,yg)=>{"use strict";var O1=Object.create,Wo=Object.defineProperty,D1=Object.getOwnPropertyDescriptor,Lc=Object.getOwnPropertyNames,N1=Object.getPrototypeOf,L1=Object.prototype.hasOwnProperty,F1=(t,e)=>function(){return t&&(e=(0,t[Lc(t)[0]])(t=0)),e},U1=(t,e)=>function(){return e||(0,t[Lc(t)[0]])((e={exports:{}}).exports,e),e.exports},B1=(t,e)=>{for(var n in e)Wo(t,n,{get:e[n],enumerable:!0})},dg=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Lc(e))!L1.call(t,r)&&r!==n&&Wo(t,r,{get:()=>e[r],enumerable:!(i=D1(e,r))||i.enumerable});return t},k1=(t,e,n)=>(n=t!=null?O1(N1(t)):{},dg(e||!t||!t.__esModule?Wo(n,"default",{value:t,enumerable:!0}):n,t)),V1=t=>dg(Wo({},"__esModule",{value:!0}),t),as=F1({"../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/cjs_shims.js"(){"use strict"}}),G1=U1({"../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(t,e){"use strict";as(),e.exports=i;function n(s){return s instanceof Buffer?Buffer.from(s):new s.constructor(s.buffer.slice(),s.byteOffset,s.length)}function i(s){if(s=s||{},s.circles)return r(s);let o=new Map;if(o.set(Date,d=>new Date(d)),o.set(Map,(d,h)=>new Map(l(Array.from(d),h))),o.set(Set,(d,h)=>new Set(l(Array.from(d),h))),s.constructorHandlers)for(let d of s.constructorHandlers)o.set(d[0],d[1]);let a=null;return s.proto?u:c;function l(d,h){let f=Object.keys(d),p=new Array(f.length);for(let g=0;g<f.length;g++){let S=f[g],E=d[S];typeof E!="object"||E===null?p[S]=E:E.constructor!==Object&&(a=o.get(E.constructor))?p[S]=a(E,h):ArrayBuffer.isView(E)?p[S]=n(E):p[S]=h(E)}return p}function c(d){if(typeof d!="object"||d===null)return d;if(Array.isArray(d))return l(d,c);if(d.constructor!==Object&&(a=o.get(d.constructor)))return a(d,c);let h={};for(let f in d){if(Object.hasOwnProperty.call(d,f)===!1)continue;let p=d[f];typeof p!="object"||p===null?h[f]=p:p.constructor!==Object&&(a=o.get(p.constructor))?h[f]=a(p,c):ArrayBuffer.isView(p)?h[f]=n(p):h[f]=c(p)}return h}function u(d){if(typeof d!="object"||d===null)return d;if(Array.isArray(d))return l(d,u);if(d.constructor!==Object&&(a=o.get(d.constructor)))return a(d,u);let h={};for(let f in d){let p=d[f];typeof p!="object"||p===null?h[f]=p:p.constructor!==Object&&(a=o.get(p.constructor))?h[f]=a(p,u):ArrayBuffer.isView(p)?h[f]=n(p):h[f]=u(p)}return h}}function r(s){let o=[],a=[],l=new Map;if(l.set(Date,f=>new Date(f)),l.set(Map,(f,p)=>new Map(u(Array.from(f),p))),l.set(Set,(f,p)=>new Set(u(Array.from(f),p))),s.constructorHandlers)for(let f of s.constructorHandlers)l.set(f[0],f[1]);let c=null;return s.proto?h:d;function u(f,p){let g=Object.keys(f),S=new Array(g.length);for(let E=0;E<g.length;E++){let M=g[E],_=f[M];if(typeof _!="object"||_===null)S[M]=_;else if(_.constructor!==Object&&(c=l.get(_.constructor)))S[M]=c(_,p);else if(ArrayBuffer.isView(_))S[M]=n(_);else{let b=o.indexOf(_);b!==-1?S[M]=a[b]:S[M]=p(_)}}return S}function d(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,d);if(f.constructor!==Object&&(c=l.get(f.constructor)))return c(f,d);let p={};o.push(f),a.push(p);for(let g in f){if(Object.hasOwnProperty.call(f,g)===!1)continue;let S=f[g];if(typeof S!="object"||S===null)p[g]=S;else if(S.constructor!==Object&&(c=l.get(S.constructor)))p[g]=c(S,d);else if(ArrayBuffer.isView(S))p[g]=n(S);else{let E=o.indexOf(S);E!==-1?p[g]=a[E]:p[g]=d(S)}}return o.pop(),a.pop(),p}function h(f){if(typeof f!="object"||f===null)return f;if(Array.isArray(f))return u(f,h);if(f.constructor!==Object&&(c=l.get(f.constructor)))return c(f,h);let p={};o.push(f),a.push(p);for(let g in f){let S=f[g];if(typeof S!="object"||S===null)p[g]=S;else if(S.constructor!==Object&&(c=l.get(S.constructor)))p[g]=c(S,h);else if(ArrayBuffer.isView(S))p[g]=n(S);else{let E=o.indexOf(S);E!==-1?p[g]=a[E]:p[g]=h(S)}}return o.pop(),a.pop(),p}}}}),fg={};B1(fg,{BROADCAST_CHANNEL_NAME:()=>$1,NOOP:()=>K1,VIEW_MODE_STORAGE_KEY:()=>H1,VITE_PLUGIN_CLIENT_URL_STORAGE_KEY:()=>W1,VITE_PLUGIN_DETECTED_STORAGE_KEY:()=>z1,basename:()=>rR,camelize:()=>nR,classify:()=>tR,deepClone:()=>lR,isArray:()=>dR,isBrowser:()=>hg,isInChromePanel:()=>pg,isInElectron:()=>gg,isInIframe:()=>mg,isInSeparateWindow:()=>Y1,isMacOS:()=>Z1,isMap:()=>hR,isNumeric:()=>j1,isNuxtApp:()=>X1,isObject:()=>uR,isSet:()=>fR,isUrlString:()=>aR,kebabize:()=>iR,randomStr:()=>cR,sortByKey:()=>sR,target:()=>os});yg.exports=V1(fg);as();as();var H1="__vue-devtools-view-mode__",z1="__vue-devtools-vite-plugin-detected__",W1="__vue-devtools-vite-plugin-client-url__",$1="__vue-devtools-broadcast-channel__";as();var hg=typeof navigator<"u",os=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:{},pg=typeof os.chrome<"u"&&!!os.chrome.devtools,mg=hg&&os.self!==os.top,ug,gg=typeof navigator<"u"&&((ug=navigator.userAgent)==null?void 0:ug.toLowerCase().includes("electron")),X1=typeof window<"u"&&!!window.__NUXT__,Y1=!mg&&!pg&&!gg;as();var q1=k1(G1(),1);function K1(){}var j1=t=>`${+t}`===t,Z1=()=>navigator?.platform?navigator?.platform.toLowerCase().includes("mac"):/Macintosh/.test(navigator.userAgent),J1=/(?:^|[-_/])(\w)/g,Q1=/-(\w)/g,eR=/([a-z0-9])([A-Z])/g;function _g(t,e){return e?e.toUpperCase():""}function tR(t){return t&&`${t}`.replace(J1,_g)}function nR(t){return t&&t.replace(Q1,_g)}function iR(t){return t&&t.replace(eR,(e,n,i)=>`${n}-${i}`).toLowerCase()}function rR(t,e){let n=t.replace(/^[a-z]:/i,"").replace(/\\/g,"/");n.endsWith(`index${e}`)&&(n=n.replace(`/index${e}`,e));let i=n.lastIndexOf("/"),r=n.substring(i+1);if(e){let s=r.lastIndexOf(e);return r.substring(0,s)}return""}function sR(t){return t&&t.slice().sort((e,n)=>e.key<n.key?-1:e.key>n.key?1:0)}var oR=/^https?:\/\//;function aR(t){return t.startsWith("/")||oR.test(t)}var lR=(0,q1.default)({circles:!0});function cR(){return Math.random().toString(36).slice(2)}function uR(t){return typeof t=="object"&&!Array.isArray(t)&&t!==null}function dR(t){return Array.isArray(t)}function fR(t){return t instanceof Set}function hR(t){return t instanceof Map}});var nr=ge(Eg=>{"use strict";var pR={trailing:!0};function mR(t,e=25,n={}){if(n={...pR,...n},!Number.isFinite(e))throw new TypeError("Expected `wait` to be a finite number");let i,r,s=[],o,a,l=(c,u)=>(o=gR(t,c,u),o.finally(()=>{if(o=null,n.trailing&&a&&!r){let d=l(c,a);return a=null,d}}),o);return function(...c){return o?(n.trailing&&(a=c),o):new Promise(u=>{let d=!r&&n.leading;clearTimeout(r),r=setTimeout(()=>{r=null;let h=n.leading?i:l(this,c);for(let f of s)f(h);s=[]},e),d?(i=l(this,c),u(i)):s.push(u)})}}async function gR(t,e,n){return await t.apply(e,n)}Eg.debounce=mR});var Uc=ge(kn=>{"use strict";function ls(t,e={},n){for(let i in t){let r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?ls(r,e,s):typeof r=="function"&&(e[s]=r)}return e}function _R(...t){let e={};for(let n of t){let i=ls(n);for(let r in i)e[r]?e[r].push(i[r]):e[r]=[i[r]]}for(let n in e)if(e[n].length>1){let i=e[n];e[n]=(...r)=>vg(i,s=>s(...r))}else e[n]=e[n][0];return e}function vg(t,e){return t.reduce((n,i)=>n.then(()=>e(i)),Promise.resolve())}var yR={run:t=>t()},ER=()=>yR,bg=typeof console.createTask<"u"?console.createTask:ER;function xR(t,e){let n=e.shift(),i=bg(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function vR(t,e){let n=e.shift(),i=bg(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function bR(t,e){return t.reduce((n,i)=>n.then(()=>i(...e||[])),Promise.resolve())}function SR(t,e){return Promise.all(t.map(n=>n(...e||[])))}function Fc(t,e){for(let n of[...t])n(e)}var $o=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};let r=e,s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){let i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;let i=this._hooks[e]||[];delete this._hooks[e];for(let r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(let n in e)this.deprecateHook(n,e[n])}addHooks(e){let n=ls(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(let r of i.splice(0,i.length))r()}}removeHooks(e){let n=ls(e);for(let i in n)this.removeHook(i,n[i])}removeAllHooks(){for(let e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(xR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(vR,e,...n)}callHookWith(e,n,...i){let r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Fc(this._before,r);let s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Fc(this._after,r)}):(this._after&&r&&Fc(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){let n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){let n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}};function TR(){return new $o}var xg=typeof window<"u";function AR(t,e={}){let n={inspect:xg,group:xg,filter:()=>!0,...e},i=n.filter,r=typeof i=="string"?u=>u.startsWith(i):i,s=n.tag?`[${n.tag}] `:"",o=u=>s+u.name+"".padEnd(u._id,"\0"),a={},l=t.beforeEach(u=>{r!==void 0&&!r(u.name)||(a[u.name]=a[u.name]||0,u._id=a[u.name]++,console.time(o(u)))}),c=t.afterEach(u=>{r!==void 0&&!r(u.name)||(n.group&&console.groupCollapsed(u.name),n.inspect?console.timeLog(o(u),u.args):console.timeEnd(o(u)),n.group&&console.groupEnd(),a[u.name]--)});return{close:()=>{l(),c()}}}kn.Hookable=$o;kn.createDebugger=AR;kn.createHooks=TR;kn.flatHooks=ls;kn.mergeHooks=_R;kn.parallelCaller=SR;kn.serial=vg;kn.serialCaller=bR});var Ig=ge(cs=>{"use strict";var Sg="q",Tg="s";function Rg(t){return t}var MR=Rg,{clearTimeout:Ag,setTimeout:RR}=globalThis,wR=Math.random.bind(Math);function wg(t,e){let{post:n,on:i,off:r=()=>{},eventNames:s=[],serialize:o=Rg,deserialize:a=MR,resolver:l,bind:c="rpc",timeout:u=6e4}=e,d=!1,h=new Map,f,p;async function g($,F,w,I){if(d)throw new Error(`[birpc] rpc is closed, cannot call "${$}"`);let m={m:$,a:F,t:Sg};I&&(m.o=!0);let x=async te=>n(o(te));if(w){await x(m);return}if(f)try{await f}finally{f=void 0}let{promise:D,resolve:z,reject:P}=IR(),A=OR();m.i=A;let C;async function O(te=m){return u>=0&&(C=RR(()=>{try{if(e.onTimeoutError?.call(p,$,F)!==!0)throw new Error(`[birpc] timeout on calling "${$}"`)}catch(Z){P(Z)}h.delete(A)},u),typeof C=="object"&&(C=C.unref?.())),h.set(A,{resolve:z,reject:P,timeoutId:C,method:$}),await x(te),D}try{e.onRequest?await e.onRequest.call(p,m,O,z):await O()}catch(te){if(e.onGeneralError?.call(p,te)!==!0)throw te;return}finally{Ag(C),h.delete(A)}return D}let b={$call:($,...F)=>g($,F,!1),$callOptional:($,...F)=>g($,F,!1,!0),$callEvent:($,...F)=>g($,F,!0),$callRaw:$=>g($.method,$.args,$.event,$.optional),$rejectPendingCalls:U,get $closed(){return d},get $meta(){return e.meta},$close:R,$functions:t};p=new Proxy({},{get($,F){if(Object.prototype.hasOwnProperty.call(b,F))return b[F];if(F==="then"&&!s.includes("then")&&!("then"in t))return;let w=(...m)=>g(F,m,!0);if(s.includes(F))return w.asEvent=w,w;let I=(...m)=>g(F,m,!1);return I.asEvent=w,I}});function R($){d=!0,h.forEach(({reject:F,method:w})=>{let I=new Error(`[birpc] rpc is closed, cannot call "${w}"`);if($)return $.cause??=I,F($);F(I)}),h.clear(),r(H)}function U($){let w=Array.from(h.values()).map(({method:I,reject:m})=>$?$({method:I,reject:m}):m(new Error(`[birpc]: rejected pending call "${I}".`)));return h.clear(),w}async function H($,...F){let w;try{w=a($)}catch(I){if(e.onGeneralError?.call(p,I)!==!0)throw I;return}if(w.t===Sg){let{m:I,a:m,o:x}=w,D,z,P=await(l?l.call(p,I,t[I]):t[I]);if(x&&(P||=()=>{}),!P)z=new Error(`[birpc] function "${I}" not found`);else try{D=await P.apply(c==="rpc"?p:t,m)}catch(A){z=A}if(w.i){if(z&&e.onError&&e.onError.call(p,z,I,m),z&&e.onFunctionError&&e.onFunctionError.call(p,z,I,m)===!0)return;if(!z)try{await n(o({t:Tg,i:w.i,r:D}),...F);return}catch(A){if(z=A,e.onGeneralError?.call(p,A,I,m)!==!0)throw A}try{await n(o({t:Tg,i:w.i,e:z}),...F)}catch(A){if(e.onGeneralError?.call(p,A,I,m)!==!0)throw A}}}else{let{i:I,r:m,e:x}=w,D=h.get(I);D&&(Ag(D.timeoutId),x?D.reject(x):D.resolve(m)),h.delete(I)}}return f=i(H),p}var Mg=new WeakMap;function Cg(t,e){return t.map(n=>{let i=Mg.get(n);return i||(i=e(n),Mg.set(n,i)),i})}function CR(t,e,n={}){let i=()=>typeof e=="function"?e():e,r=(h=i())=>Cg(h,f=>wg(t,{...n,...f}));function s(h,f,p,g){let S=r();return Promise.all(S.map(E=>E.$callRaw({method:h,args:f,event:p,optional:g})))}function o(h,...f){return s(h,f,!1)}function a(h,...f){return s(h,f,!1,!0)}function l(h,...f){return s(h,f,!0)}let c={$call:o,$callOptional:a,$callEvent:l},u=new Proxy({},{get(h,f){if(Object.prototype.hasOwnProperty.call(c,f))return c[f];let g=r().map(E=>E[f]),S=(...E)=>Promise.all(g.map(M=>M(...E)));return S.asEvent=async(...E)=>{await Promise.all(g.map(M=>M.asEvent(...E)))},S}});function d(h){let f=i();return h?.(f),r(f)}return r(),{get clients(){return r()},functions:t,updateChannels:d,broadcast:u,boardcast:u}}function IR(){let t,e;return{promise:new Promise((i,r)=>{t=i,e=r}),resolve:t,reject:e}}var PR="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";function OR(t=21){let e="",n=t;for(;n--;)e+=PR[wR()*64|0];return e}cs.DEFAULT_TIMEOUT=6e4;cs.cachedMap=Cg;cs.createBirpc=wg;cs.createBirpcGroup=CR});var xy=ge((U2,Ey)=>{"use strict";var DR=Object.create,oa=Object.defineProperty,NR=Object.getOwnPropertyDescriptor,Qc=Object.getOwnPropertyNames,LR=Object.getPrototypeOf,FR=Object.prototype.hasOwnProperty,UR=(t,e)=>function(){return t&&(e=(0,t[Qc(t)[0]])(t=0)),e},X_=(t,e)=>function(){return e||(0,t[Qc(t)[0]])((e={exports:{}}).exports,e),e.exports},BR=(t,e)=>{for(var n in e)oa(t,n,{get:e[n],enumerable:!0})},Y_=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Qc(e))!FR.call(t,r)&&r!==n&&oa(t,r,{get:()=>e[r],enumerable:!(i=NR(e,r))||i.enumerable});return t},kR=(t,e,n)=>(n=t!=null?DR(LR(t)):{},Y_(e||!t||!t.__esModule?oa(n,"default",{value:t,enumerable:!0}):n,t)),VR=t=>Y_(oa({},"__esModule",{value:!0}),t),oe=UR({"../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/cjs_shims.js"(){"use strict"}}),GR=X_({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(t,e){"use strict";oe(),function(n){"use strict";var i={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"Ae",\u00C5:"A",\u00C6:"AE",\u00C7:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"Oe",\u0150:"O",\u00D8:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"Ue",\u0170:"U",\u00DD:"Y",\u00DE:"TH",\u00DF:"ss",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"ae",\u00E5:"a",\u00E6:"ae",\u00E7:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"oe",\u0151:"o",\u00F8:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"ue",\u0171:"u",\u00FD:"y",\u00FE:"th",\u00FF:"y","\u1E9E":"SS",\u0627:"a",\u0623:"a",\u0625:"i",\u0622:"aa",\u0624:"u",\u0626:"e",\u0621:"a",\u0628:"b",\u062A:"t",\u062B:"th",\u062C:"j",\u062D:"h",\u062E:"kh",\u062F:"d",\u0630:"th",\u0631:"r",\u0632:"z",\u0633:"s",\u0634:"sh",\u0635:"s",\u0636:"dh",\u0637:"t",\u0638:"z",\u0639:"a",\u063A:"gh",\u0641:"f",\u0642:"q",\u0643:"k",\u0644:"l",\u0645:"m",\u0646:"n",\u0647:"h",\u0648:"w",\u064A:"y",\u0649:"a",\u0629:"h",\uFEFB:"la",\uFEF7:"laa",\uFEF9:"lai",\uFEF5:"laa",\u06AF:"g",\u0686:"ch",\u067E:"p",\u0698:"zh",\u06A9:"k",\u06CC:"y","\u064E":"a","\u064B":"an","\u0650":"e","\u064D":"en","\u064F":"u","\u064C":"on","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9",\u1000:"k",\u1001:"kh",\u1002:"g",\u1003:"ga",\u1004:"ng",\u1005:"s",\u1006:"sa",\u1007:"z","\u1005\u103B":"za",\u100A:"ny",\u100B:"t",\u100C:"ta",\u100D:"d",\u100E:"da",\u100F:"na",\u1010:"t",\u1011:"ta",\u1012:"d",\u1013:"da",\u1014:"n",\u1015:"p",\u1016:"pa",\u1017:"b",\u1018:"ba",\u1019:"m",\u101A:"y",\u101B:"ya",\u101C:"l",\u101D:"w",\u101E:"th",\u101F:"h",\u1020:"la",\u1021:"a","\u103C":"y","\u103B":"ya","\u103D":"w","\u103C\u103D":"yw","\u103B\u103D":"ywa","\u103E":"h",\u1027:"e","\u104F":"-e",\u1023:"i",\u1024:"-i",\u1009:"u",\u1026:"-u",\u1029:"aw","\u101E\u103C\u1031\u102C":"aw",\u102A:"aw","\u1040":"0","\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1039":"","\u1037":"","\u1038":"",\u010D:"c",\u010F:"d",\u011B:"e",\u0148:"n",\u0159:"r",\u0161:"s",\u0165:"t",\u016F:"u",\u017E:"z",\u010C:"C",\u010E:"D",\u011A:"E",\u0147:"N",\u0158:"R",\u0160:"S",\u0164:"T",\u016E:"U",\u017D:"Z",\u0780:"h",\u0781:"sh",\u0782:"n",\u0783:"r",\u0784:"b",\u0785:"lh",\u0786:"k",\u0787:"a",\u0788:"v",\u0789:"m",\u078A:"f",\u078B:"dh",\u078C:"th",\u078D:"l",\u078E:"g",\u078F:"gn",\u0790:"s",\u0791:"d",\u0792:"z",\u0793:"t",\u0794:"y",\u0795:"p",\u0796:"j",\u0797:"ch",\u0798:"tt",\u0799:"hh",\u079A:"kh",\u079B:"th",\u079C:"z",\u079D:"sh",\u079E:"s",\u079F:"d",\u07A0:"t",\u07A1:"z",\u07A2:"a",\u07A3:"gh",\u07A4:"q",\u07A5:"w","\u07A6":"a","\u07A7":"aa","\u07A8":"i","\u07A9":"ee","\u07AA":"u","\u07AB":"oo","\u07AC":"e","\u07AD":"ey","\u07AE":"o","\u07AF":"oa","\u07B0":"",\u10D0:"a",\u10D1:"b",\u10D2:"g",\u10D3:"d",\u10D4:"e",\u10D5:"v",\u10D6:"z",\u10D7:"t",\u10D8:"i",\u10D9:"k",\u10DA:"l",\u10DB:"m",\u10DC:"n",\u10DD:"o",\u10DE:"p",\u10DF:"zh",\u10E0:"r",\u10E1:"s",\u10E2:"t",\u10E3:"u",\u10E4:"p",\u10E5:"k",\u10E6:"gh",\u10E7:"q",\u10E8:"sh",\u10E9:"ch",\u10EA:"ts",\u10EB:"dz",\u10EC:"ts",\u10ED:"ch",\u10EE:"kh",\u10EF:"j",\u10F0:"h",\u03B1:"a",\u03B2:"v",\u03B3:"g",\u03B4:"d",\u03B5:"e",\u03B6:"z",\u03B7:"i",\u03B8:"th",\u03B9:"i",\u03BA:"k",\u03BB:"l",\u03BC:"m",\u03BD:"n",\u03BE:"ks",\u03BF:"o",\u03C0:"p",\u03C1:"r",\u03C3:"s",\u03C4:"t",\u03C5:"y",\u03C6:"f",\u03C7:"x",\u03C8:"ps",\u03C9:"o",\u03AC:"a",\u03AD:"e",\u03AF:"i",\u03CC:"o",\u03CD:"y",\u03AE:"i",\u03CE:"o",\u03C2:"s",\u03CA:"i",\u03B0:"y",\u03CB:"y",\u0390:"i",\u0391:"A",\u0392:"B",\u0393:"G",\u0394:"D",\u0395:"E",\u0396:"Z",\u0397:"I",\u0398:"TH",\u0399:"I",\u039A:"K",\u039B:"L",\u039C:"M",\u039D:"N",\u039E:"KS",\u039F:"O",\u03A0:"P",\u03A1:"R",\u03A3:"S",\u03A4:"T",\u03A5:"Y",\u03A6:"F",\u03A7:"X",\u03A8:"PS",\u03A9:"O",\u0386:"A",\u0388:"E",\u038A:"I",\u038C:"O",\u038E:"Y",\u0389:"I",\u038F:"O",\u03AA:"I",\u03AB:"Y",\u0101:"a",\u0113:"e",\u0123:"g",\u012B:"i",\u0137:"k",\u013C:"l",\u0146:"n",\u016B:"u",\u0100:"A",\u0112:"E",\u0122:"G",\u012A:"I",\u0136:"k",\u013B:"L",\u0145:"N",\u016A:"U",\u040C:"Kj",\u045C:"kj",\u0409:"Lj",\u0459:"lj",\u040A:"Nj",\u045A:"nj",\u0422\u0441:"Ts",\u0442\u0441:"ts",\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u015B:"s",\u017A:"z",\u017C:"z",\u0104:"A",\u0106:"C",\u0118:"E",\u0141:"L",\u0143:"N",\u015A:"S",\u0179:"Z",\u017B:"Z",\u0404:"Ye",\u0406:"I",\u0407:"Yi",\u0490:"G",\u0454:"ye",\u0456:"i",\u0457:"yi",\u0491:"g",\u0103:"a",\u0102:"A",\u0219:"s",\u0218:"S",\u021B:"t",\u021A:"T",\u0163:"t",\u0162:"T",\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"yo",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"kh",\u0446:"c",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u0410:"A",\u0411:"B",\u0412:"V",\u0413:"G",\u0414:"D",\u0415:"E",\u0401:"Yo",\u0416:"Zh",\u0417:"Z",\u0418:"I",\u0419:"I",\u041A:"K",\u041B:"L",\u041C:"M",\u041D:"N",\u041E:"O",\u041F:"P",\u0420:"R",\u0421:"S",\u0422:"T",\u0423:"U",\u0424:"F",\u0425:"Kh",\u0426:"C",\u0427:"Ch",\u0428:"Sh",\u0429:"Sh",\u042A:"",\u042B:"Y",\u042C:"",\u042D:"E",\u042E:"Yu",\u042F:"Ya",\u0452:"dj",\u0458:"j",\u045B:"c",\u045F:"dz",\u0402:"Dj",\u0408:"j",\u040B:"C",\u040F:"Dz",\u013E:"l",\u013A:"l",\u0155:"r",\u013D:"L",\u0139:"L",\u0154:"R",\u015F:"s",\u015E:"S",\u0131:"i",\u0130:"I",\u011F:"g",\u011E:"G",\u1EA3:"a",\u1EA2:"A",\u1EB3:"a",\u1EB2:"A",\u1EA9:"a",\u1EA8:"A",\u0111:"d",\u0110:"D",\u1EB9:"e",\u1EB8:"E",\u1EBD:"e",\u1EBC:"E",\u1EBB:"e",\u1EBA:"E",\u1EBF:"e",\u1EBE:"E",\u1EC1:"e",\u1EC0:"E",\u1EC7:"e",\u1EC6:"E",\u1EC5:"e",\u1EC4:"E",\u1EC3:"e",\u1EC2:"E",\u1ECF:"o",\u1ECD:"o",\u1ECC:"o",\u1ED1:"o",\u1ED0:"O",\u1ED3:"o",\u1ED2:"O",\u1ED5:"o",\u1ED4:"O",\u1ED9:"o",\u1ED8:"O",\u1ED7:"o",\u1ED6:"O",\u01A1:"o",\u01A0:"O",\u1EDB:"o",\u1EDA:"O",\u1EDD:"o",\u1EDC:"O",\u1EE3:"o",\u1EE2:"O",\u1EE1:"o",\u1EE0:"O",\u1EDE:"o",\u1EDF:"o",\u1ECB:"i",\u1ECA:"I",\u0129:"i",\u0128:"I",\u1EC9:"i",\u1EC8:"i",\u1EE7:"u",\u1EE6:"U",\u1EE5:"u",\u1EE4:"U",\u0169:"u",\u0168:"U",\u01B0:"u",\u01AF:"U",\u1EE9:"u",\u1EE8:"U",\u1EEB:"u",\u1EEA:"U",\u1EF1:"u",\u1EF0:"U",\u1EEF:"u",\u1EEE:"U",\u1EED:"u",\u1EEC:"\u01B0",\u1EF7:"y",\u1EF6:"y",\u1EF3:"y",\u1EF2:"Y",\u1EF5:"y",\u1EF4:"Y",\u1EF9:"y",\u1EF8:"Y",\u1EA1:"a",\u1EA0:"A",\u1EA5:"a",\u1EA4:"A",\u1EA7:"a",\u1EA6:"A",\u1EAD:"a",\u1EAC:"A",\u1EAB:"a",\u1EAA:"A",\u1EAF:"a",\u1EAE:"A",\u1EB1:"a",\u1EB0:"A",\u1EB7:"a",\u1EB6:"A",\u1EB5:"a",\u1EB4:"A","\u24EA":"0","\u2460":"1","\u2461":"2","\u2462":"3","\u2463":"4","\u2464":"5","\u2465":"6","\u2466":"7","\u2467":"8","\u2468":"9","\u2469":"10","\u246A":"11","\u246B":"12","\u246C":"13","\u246D":"14","\u246E":"15","\u246F":"16","\u2470":"17","\u2471":"18","\u2472":"18","\u2473":"18","\u24F5":"1","\u24F6":"2","\u24F7":"3","\u24F8":"4","\u24F9":"5","\u24FA":"6","\u24FB":"7","\u24FC":"8","\u24FD":"9","\u24FE":"10","\u24FF":"0","\u24EB":"11","\u24EC":"12","\u24ED":"13","\u24EE":"14","\u24EF":"15","\u24F0":"16","\u24F1":"17","\u24F2":"18","\u24F3":"19","\u24F4":"20","\u24B6":"A","\u24B7":"B","\u24B8":"C","\u24B9":"D","\u24BA":"E","\u24BB":"F","\u24BC":"G","\u24BD":"H","\u24BE":"I","\u24BF":"J","\u24C0":"K","\u24C1":"L","\u24C2":"M","\u24C3":"N","\u24C4":"O","\u24C5":"P","\u24C6":"Q","\u24C7":"R","\u24C8":"S","\u24C9":"T","\u24CA":"U","\u24CB":"V","\u24CC":"W","\u24CD":"X","\u24CE":"Y","\u24CF":"Z","\u24D0":"a","\u24D1":"b","\u24D2":"c","\u24D3":"d","\u24D4":"e","\u24D5":"f","\u24D6":"g","\u24D7":"h","\u24D8":"i","\u24D9":"j","\u24DA":"k","\u24DB":"l","\u24DC":"m","\u24DD":"n","\u24DE":"o","\u24DF":"p","\u24E0":"q","\u24E1":"r","\u24E2":"s","\u24E3":"t","\u24E4":"u","\u24E6":"v","\u24E5":"w","\u24E7":"x","\u24E8":"y","\u24E9":"z","\u201C":'"',"\u201D":'"',"\u2018":"'","\u2019":"'","\u2202":"d",\u0192:"f","\u2122":"(TM)","\xA9":"(C)",\u0153:"oe",\u0152:"OE","\xAE":"(R)","\u2020":"+","\u2120":"(SM)","\u2026":"...","\u02DA":"o",\u00BA:"o",\u00AA:"a","\u2022":"*","\u104A":",","\u104B":".",$:"USD","\u20AC":"EUR","\u20A2":"BRN","\u20A3":"FRF","\xA3":"GBP","\u20A4":"ITL","\u20A6":"NGN","\u20A7":"ESP","\u20A9":"KRW","\u20AA":"ILS","\u20AB":"VND","\u20AD":"LAK","\u20AE":"MNT","\u20AF":"GRD","\u20B1":"ARS","\u20B2":"PYG","\u20B3":"ARA","\u20B4":"UAH","\u20B5":"GHS","\xA2":"cent","\xA5":"CNY",\u5143:"CNY",\u5186:"YEN","\uFDFC":"IRR","\u20A0":"EWE","\u0E3F":"THB","\u20A8":"INR","\u20B9":"INR","\u20B0":"PF","\u20BA":"TRY","\u060B":"AFN","\u20BC":"AZN",\u043B\u0432:"BGN","\u17DB":"KHR","\u20A1":"CRC","\u20B8":"KZT",\u0434\u0435\u043D:"MKD",z\u0142:"PLN","\u20BD":"RUB","\u20BE":"GEL"},r=["\u103A","\u07B0"],s={"\u102C":"a","\u102B":"a","\u1031":"e","\u1032":"e","\u102D":"i","\u102E":"i","\u102D\u102F":"o","\u102F":"u","\u1030":"u","\u1031\u102B\u1004\u103A":"aung","\u1031\u102C":"aw","\u1031\u102C\u103A":"aw","\u1031\u102B":"aw","\u1031\u102B\u103A":"aw","\u103A":"\u103A","\u1000\u103A":"et","\u102D\u102F\u1000\u103A":"aik","\u1031\u102C\u1000\u103A":"auk","\u1004\u103A":"in","\u102D\u102F\u1004\u103A":"aing","\u1031\u102C\u1004\u103A":"aung","\u1005\u103A":"it","\u100A\u103A":"i","\u1010\u103A":"at","\u102D\u1010\u103A":"eik","\u102F\u1010\u103A":"ok","\u103D\u1010\u103A":"ut","\u1031\u1010\u103A":"it","\u1012\u103A":"d","\u102D\u102F\u1012\u103A":"ok","\u102F\u1012\u103A":"ait","\u1014\u103A":"an","\u102C\u1014\u103A":"an","\u102D\u1014\u103A":"ein","\u102F\u1014\u103A":"on","\u103D\u1014\u103A":"un","\u1015\u103A":"at","\u102D\u1015\u103A":"eik","\u102F\u1015\u103A":"ok","\u103D\u1015\u103A":"ut","\u1014\u103A\u102F\u1015\u103A":"nub","\u1019\u103A":"an","\u102D\u1019\u103A":"ein","\u102F\u1019\u103A":"on","\u103D\u1019\u103A":"un","\u101A\u103A":"e","\u102D\u102F\u101C\u103A":"ol","\u1009\u103A":"in","\u1036":"an","\u102D\u1036":"ein","\u102F\u1036":"on","\u07A6\u0787\u07B0":"ah","\u07A6\u0781\u07B0":"ah"},o={en:{},az:{\u00E7:"c",\u0259:"e",\u011F:"g",\u0131:"i",\u00F6:"o",\u015F:"s",\u00FC:"u",\u00C7:"C",\u018F:"E",\u011E:"G",\u0130:"I",\u00D6:"O",\u015E:"S",\u00DC:"U"},cs:{\u010D:"c",\u010F:"d",\u011B:"e",\u0148:"n",\u0159:"r",\u0161:"s",\u0165:"t",\u016F:"u",\u017E:"z",\u010C:"C",\u010E:"D",\u011A:"E",\u0147:"N",\u0158:"R",\u0160:"S",\u0164:"T",\u016E:"U",\u017D:"Z"},fi:{\u00E4:"a",\u00C4:"A",\u00F6:"o",\u00D6:"O"},hu:{\u00E4:"a",\u00C4:"A",\u00F6:"o",\u00D6:"O",\u00FC:"u",\u00DC:"U",\u0171:"u",\u0170:"U"},lt:{\u0105:"a",\u010D:"c",\u0119:"e",\u0117:"e",\u012F:"i",\u0161:"s",\u0173:"u",\u016B:"u",\u017E:"z",\u0104:"A",\u010C:"C",\u0118:"E",\u0116:"E",\u012E:"I",\u0160:"S",\u0172:"U",\u016A:"U"},lv:{\u0101:"a",\u010D:"c",\u0113:"e",\u0123:"g",\u012B:"i",\u0137:"k",\u013C:"l",\u0146:"n",\u0161:"s",\u016B:"u",\u017E:"z",\u0100:"A",\u010C:"C",\u0112:"E",\u0122:"G",\u012A:"i",\u0136:"k",\u013B:"L",\u0145:"N",\u0160:"S",\u016A:"u",\u017D:"Z"},pl:{\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u00F3:"o",\u015B:"s",\u017A:"z",\u017C:"z",\u0104:"A",\u0106:"C",\u0118:"e",\u0141:"L",\u0143:"N",\u00D3:"O",\u015A:"S",\u0179:"Z",\u017B:"Z"},sv:{\u00E4:"a",\u00C4:"A",\u00F6:"o",\u00D6:"O"},sk:{\u00E4:"a",\u00C4:"A"},sr:{\u0459:"lj",\u045A:"nj",\u0409:"Lj",\u040A:"Nj",\u0111:"dj",\u0110:"Dj"},tr:{\u00DC:"U",\u00D6:"O",\u00FC:"u",\u00F6:"o"}},a={ar:{"\u2206":"delta","\u221E":"la-nihaya","\u2665":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","\u2211":"majmou","\xA4":"omla"},az:{},ca:{"\u2206":"delta","\u221E":"infinit","\u2665":"amor","&":"i","|":"o","<":"menys que",">":"mes que","\u2211":"suma dels","\xA4":"moneda"},cs:{"\u2206":"delta","\u221E":"nekonecno","\u2665":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","\u2211":"soucet","\xA4":"mena"},de:{"\u2206":"delta","\u221E":"unendlich","\u2665":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","\u2211":"Summe von","\xA4":"Waehrung"},dv:{"\u2206":"delta","\u221E":"kolunulaa","\u2665":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","\u2211":"jumula","\xA4":"faisaa"},en:{"\u2206":"delta","\u221E":"infinity","\u2665":"love","&":"and","|":"or","<":"less than",">":"greater than","\u2211":"sum","\xA4":"currency"},es:{"\u2206":"delta","\u221E":"infinito","\u2665":"amor","&":"y","|":"u","<":"menos que",">":"mas que","\u2211":"suma de los","\xA4":"moneda"},fa:{"\u2206":"delta","\u221E":"bi-nahayat","\u2665":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","\u2211":"majmooe","\xA4":"vahed"},fi:{"\u2206":"delta","\u221E":"aarettomyys","\u2665":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","\u2211":"summa","\xA4":"valuutta"},fr:{"\u2206":"delta","\u221E":"infiniment","\u2665":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","\u2211":"somme des","\xA4":"monnaie"},ge:{"\u2206":"delta","\u221E":"usasruloba","\u2665":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","\u2211":"jami","\xA4":"valuta"},gr:{},hu:{"\u2206":"delta","\u221E":"vegtelen","\u2665":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","\u2211":"szumma","\xA4":"penznem"},it:{"\u2206":"delta","\u221E":"infinito","\u2665":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","\u2211":"somma","\xA4":"moneta"},lt:{"\u2206":"delta","\u221E":"begalybe","\u2665":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","\u2211":"suma","\xA4":"valiuta"},lv:{"\u2206":"delta","\u221E":"bezgaliba","\u2665":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","\u2211":"summa","\xA4":"valuta"},my:{"\u2206":"kwahkhyaet","\u221E":"asaonasme","\u2665":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","\u2211":"paungld","\xA4":"ngwekye"},mk:{},nl:{"\u2206":"delta","\u221E":"oneindig","\u2665":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","\u2211":"som","\xA4":"valuta"},pl:{"\u2206":"delta","\u221E":"nieskonczonosc","\u2665":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","\u2211":"suma","\xA4":"waluta"},pt:{"\u2206":"delta","\u221E":"infinito","\u2665":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","\u2211":"soma","\xA4":"moeda"},ro:{"\u2206":"delta","\u221E":"infinit","\u2665":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","\u2211":"suma","\xA4":"valuta"},ru:{"\u2206":"delta","\u221E":"beskonechno","\u2665":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","\u2211":"summa","\xA4":"valjuta"},sk:{"\u2206":"delta","\u221E":"nekonecno","\u2665":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","\u2211":"sucet","\xA4":"mena"},sr:{},tr:{"\u2206":"delta","\u221E":"sonsuzluk","\u2665":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","\u2211":"toplam","\xA4":"para birimi"},uk:{"\u2206":"delta","\u221E":"bezkinechnist","\u2665":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","\u2211":"suma","\xA4":"valjuta"},vn:{"\u2206":"delta","\u221E":"vo cuc","\u2665":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","\u2211":"tong","\xA4":"tien te"}},l=[";","?",":","@","&","=","+","$",",","/"].join(""),c=[";","?",":","@","&","=","+","$",","].join(""),u=[".","!","~","*","'","(",")"].join(""),d=function(S,E){var M="-",_="",b="",R=!0,U={},H,$,F,w,I,m,x,D,z,P,A,C,O,te,Z="";if(typeof S!="string")return"";if(typeof E=="string"&&(M=E),x=a.en,D=o.en,typeof E=="object"){H=E.maintainCase||!1,U=E.custom&&typeof E.custom=="object"?E.custom:U,F=+E.truncate>1&&E.truncate||!1,w=E.uric||!1,I=E.uricNoSlash||!1,m=E.mark||!1,R=!(E.symbols===!1||E.lang===!1),M=E.separator||M,w&&(Z+=l),I&&(Z+=c),m&&(Z+=u),x=E.lang&&a[E.lang]&&R?a[E.lang]:R?a.en:{},D=E.lang&&o[E.lang]?o[E.lang]:E.lang===!1||E.lang===!0?{}:o.en,E.titleCase&&typeof E.titleCase.length=="number"&&Array.prototype.toString.call(E.titleCase)?(E.titleCase.forEach(function(ee){U[ee+""]=ee+""}),$=!0):$=!!E.titleCase,E.custom&&typeof E.custom.length=="number"&&Array.prototype.toString.call(E.custom)&&E.custom.forEach(function(ee){U[ee+""]=ee+""}),Object.keys(U).forEach(function(ee){var Q;ee.length>1?Q=new RegExp("\\b"+f(ee)+"\\b","gi"):Q=new RegExp(f(ee),"gi"),S=S.replace(Q,U[ee])});for(A in U)Z+=A}for(Z+=M,Z=f(Z),S=S.replace(/(^\s+|\s+$)/g,""),O=!1,te=!1,P=0,C=S.length;P<C;P++)A=S[P],p(A,U)?O=!1:D[A]?(A=O&&D[A].match(/[A-Za-z0-9]/)?" "+D[A]:D[A],O=!1):A in i?(P+1<C&&r.indexOf(S[P+1])>=0?(b+=A,A=""):te===!0?(A=s[b]+i[A],b=""):A=O&&i[A].match(/[A-Za-z0-9]/)?" "+i[A]:i[A],O=!1,te=!1):A in s?(b+=A,A="",P===C-1&&(A=s[b]),te=!0):x[A]&&!(w&&l.indexOf(A)!==-1)&&!(I&&c.indexOf(A)!==-1)?(A=O||_.substr(-1).match(/[A-Za-z0-9]/)?M+x[A]:x[A],A+=S[P+1]!==void 0&&S[P+1].match(/[A-Za-z0-9]/)?M:"",O=!0):(te===!0?(A=s[b]+A,b="",te=!1):O&&(/[A-Za-z0-9]/.test(A)||_.substr(-1).match(/A-Za-z0-9]/))&&(A=" "+A),O=!1),_+=A.replace(new RegExp("[^\\w\\s"+Z+"_-]","g"),M);return $&&(_=_.replace(/(\w)(\S*)/g,function(ee,Q,Ve){var le=Q.toUpperCase()+(Ve!==null?Ve:"");return Object.keys(U).indexOf(le.toLowerCase())<0?le:le.toLowerCase()})),_=_.replace(/\s+/g,M).replace(new RegExp("\\"+M+"+","g"),M).replace(new RegExp("(^\\"+M+"+|\\"+M+"+$)","g"),""),F&&_.length>F&&(z=_.charAt(F)===M,_=_.slice(0,F),z||(_=_.slice(0,_.lastIndexOf(M)))),!H&&!$&&(_=_.toLowerCase()),_},h=function(S){return function(M){return d(M,S)}},f=function(S){return S.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},p=function(g,S){for(var E in S)if(S[E]===g)return!0};if(typeof e<"u"&&e.exports)e.exports=d,e.exports.createSlug=h;else if(typeof define<"u"&&define.amd)define([],function(){return d});else try{if(n.getSlug||n.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";n.getSlug=d,n.createSlug=h}catch{}}(t)}}),HR=X_({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(t,e){"use strict";oe(),e.exports=GR()}}),q_={};BR(q_,{DevToolsContextHookKeys:()=>h0,DevToolsMessagingHookKeys:()=>p0,DevToolsV6PluginAPIHookKeys:()=>f0,INFINITY:()=>ys,NAN:()=>xs,NEGATIVE_INFINITY:()=>Es,ROUTER_INFO_KEY:()=>Di,ROUTER_KEY:()=>cr,UNDEFINED:()=>_s,activeAppRecord:()=>He,addCustomCommand:()=>Iw,addCustomTab:()=>Cw,addDevToolsAppRecord:()=>E0,addDevToolsPluginToBuffer:()=>b0,addInspector:()=>d0,callConnectedUpdatedHook:()=>y0,callDevToolsPluginSetupFn:()=>uu,callInspectorUpdatedHook:()=>su,callStateUpdatedHook:()=>_0,createComponentsDevToolsPlugin:()=>O0,createDevToolsApi:()=>F0,createDevToolsCtxHooks:()=>m0,createRpcClient:()=>KI,createRpcProxy:()=>ZI,createRpcServer:()=>jI,devtools:()=>vP,devtoolsAppRecords:()=>Vn,devtoolsContext:()=>Kt,devtoolsInspector:()=>aa,devtoolsPluginBuffer:()=>hr,devtoolsRouter:()=>AC,devtoolsRouterInfo:()=>TC,devtoolsState:()=>Re,escape:()=>ca,formatInspectorStateValue:()=>z0,getActiveInspectors:()=>ou,getDevToolsEnv:()=>U0,getExtensionClientContext:()=>II,getInspector:()=>oi,getInspectorActions:()=>Aw,getInspectorInfo:()=>Tw,getInspectorNodeActions:()=>Mw,getInspectorStateValueType:()=>fa,getRaw:()=>W0,getRpcClient:()=>XI,getRpcServer:()=>gy,getViteRpcClient:()=>YI,getViteRpcServer:()=>qI,initDevTools:()=>V0,isPlainObject:()=>la,onDevToolsClientConnected:()=>LC,onDevToolsConnected:()=>ww,parse:()=>xP,registerDevToolsPlugin:()=>ua,removeCustomCommand:()=>Pw,removeDevToolsAppRecord:()=>x0,removeRegisteredPluginApp:()=>N0,resetDevToolsState:()=>Rw,setActiveAppRecord:()=>Zo,setActiveAppRecordId:()=>au,setDevToolsEnv:()=>wC,setElectronClientContext:()=>bI,setElectronProxyContext:()=>TI,setElectronServerContext:()=>MI,setExtensionClientContext:()=>uy,setIframeServerContext:()=>LI,setOpenInEditorBaseUrl:()=>Dw,setRpcServerToGlobal:()=>my,setViteClientContext:()=>VI,setViteRpcClientToGlobal:()=>_y,setViteRpcServerToGlobal:()=>yy,setViteServerContext:()=>HI,setupDevToolsPlugin:()=>D0,stringify:()=>EP,toEdit:()=>kC,toSubmit:()=>VC,toggleClientConnected:()=>Ow,toggleComponentInspectorEnabled:()=>cw,toggleHighPerfMode:()=>G0,updateDevToolsClientDetected:()=>$0,updateDevToolsState:()=>rr,updateTimelineLayersState:()=>Sw});Ey.exports=VR(q_);oe();oe();var an=ze();oe();var Pg=ze();function zR(t){if(Pg.target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__){t();return}Object.defineProperty(Pg.target,"__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__",{set(e){e&&t()},configurable:!0})}oe();var K_=ze();oe();var WR=ze();oe();oe();oe();var Og=ze();function $R(t){var e;let n=t.name||t._componentTag||t.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||t.__name;return n==="index"&&((e=t.__file)!=null&&e.endsWith("index.vue"))?"":n}function j_(t){let e=t.__file;if(e)return(0,Og.classify)((0,Og.basename)(e,".vue"))}function XR(t){let e=t.displayName||t.name||t._componentTag;return e||j_(t)}function Dg(t,e){return t.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__=e,e}function mn(t){if(t.__VUE_DEVTOOLS_NEXT_APP_RECORD__)return t.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(t.root)return t.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__}async function Bc(t){let{app:e,uid:n,instance:i}=t;try{if(i.__VUE_DEVTOOLS_NEXT_UID__)return i.__VUE_DEVTOOLS_NEXT_UID__;let r=await mn(e);if(!r)return null;let s=r.rootInstance===i;return`${r.id}:${s?"root":n}`}catch{}}function eu(t){var e,n;let i=(e=t.subTree)==null?void 0:e.type,r=mn(t);return r?((n=r?.types)==null?void 0:n.Fragment)===i:!1}function kc(t){return t._isBeingDestroyed||t.isUnmounted}function gn(t){var e,n,i;let r=$R(t?.type||{});if(r)return r;if(t?.root===t)return"Root";for(let o in(n=(e=t.parent)==null?void 0:e.type)==null?void 0:n.components)if(t.parent.type.components[o]===t?.type)return Dg(t,o);for(let o in(i=t.appContext)==null?void 0:i.components)if(t.appContext.components[o]===t?.type)return Dg(t,o);let s=j_(t?.type||{});return s||"Anonymous Component"}function tu(t){var e,n,i;let r=(i=(n=(e=t?.appContext)==null?void 0:e.app)==null?void 0:n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__)!=null?i:0,s=t===t?.root?"root":t.uid;return`${r}:${s}`}function YR(t){return t==null?"":typeof t=="number"?t:typeof t=="string"?`'${t}'`:Array.isArray(t)?"Array":"Object"}function li(t){try{return t()}catch(e){return e}}function sr(t,e){return e=e||`${t.id}:root`,t.instanceMap.get(e)||t.instanceMap.get(":root")}function ln(t,e,n=!1){return n||typeof t=="object"&&t!==null?e in t:!1}function qR(){let t={top:0,bottom:0,left:0,right:0,get width(){return t.right-t.left},get height(){return t.bottom-t.top}};return t}var Xo;function KR(t){return Xo||(Xo=document.createRange()),Xo.selectNode(t),Xo.getBoundingClientRect()}function jR(t){let e=qR();if(!t.children)return e;for(let n=0,i=t.children.length;n<i;n++){let r=t.children[n],s;if(r.component)s=Oi(r.component);else if(r.el){let o=r.el;o.nodeType===1||o.getBoundingClientRect?s=o.getBoundingClientRect():o.nodeType===3&&o.data.trim()&&(s=KR(o))}s&&ZR(e,s)}return e}function ZR(t,e){return(!t.top||e.top<t.top)&&(t.top=e.top),(!t.bottom||e.bottom>t.bottom)&&(t.bottom=e.bottom),(!t.left||e.left<t.left)&&(t.left=e.left),(!t.right||e.right>t.right)&&(t.right=e.right),t}var Ng={top:0,left:0,right:0,bottom:0,width:0,height:0};function Oi(t){let e=t.subTree.el;return typeof window>"u"?Ng:eu(t)?jR(t.subTree):e?.nodeType===1?e?.getBoundingClientRect():t.subTree.component?Oi(t.subTree.component):Ng}oe();function or(t){return eu(t)?JR(t.subTree):t.subTree?[t.subTree.el]:[]}function JR(t){if(!t.children)return[];let e=[];return t.children.forEach(n=>{n.component?e.push(...or(n.component)):n?.el&&e.push(n.el)}),e}var Z_="__vue-devtools-component-inspector__",J_="__vue-devtools-component-inspector__card__",Q_="__vue-devtools-component-inspector__name__",e0="__vue-devtools-component-inspector__indicator__",t0={display:"block",zIndex:2147483640,position:"fixed",backgroundColor:"#42b88325",border:"1px solid #42b88350",borderRadius:"5px",transition:"all 0.1s ease-in",pointerEvents:"none"},QR={fontFamily:"Arial, Helvetica, sans-serif",padding:"5px 8px",borderRadius:"4px",textAlign:"left",position:"absolute",left:0,color:"#e9e9e9",fontSize:"14px",fontWeight:600,lineHeight:"24px",backgroundColor:"#42b883",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},ew={display:"inline-block",fontWeight:400,fontStyle:"normal",fontSize:"12px",opacity:.7};function dr(){return document.getElementById(Z_)}function tw(){return document.getElementById(J_)}function nw(){return document.getElementById(e0)}function iw(){return document.getElementById(Q_)}function nu(t){return{left:`${Math.round(t.left*100)/100}px`,top:`${Math.round(t.top*100)/100}px`,width:`${Math.round(t.width*100)/100}px`,height:`${Math.round(t.height*100)/100}px`}}function iu(t){var e;let n=document.createElement("div");n.id=(e=t.elementId)!=null?e:Z_,Object.assign(n.style,{...t0,...nu(t.bounds),...t.style});let i=document.createElement("span");i.id=J_,Object.assign(i.style,{...QR,top:t.bounds.top<35?0:"-35px"});let r=document.createElement("span");r.id=Q_,r.innerHTML=`&lt;${t.name}&gt;&nbsp;&nbsp;`;let s=document.createElement("i");return s.id=e0,s.innerHTML=`${Math.round(t.bounds.width*100)/100} x ${Math.round(t.bounds.height*100)/100}`,Object.assign(s.style,ew),i.appendChild(r),i.appendChild(s),n.appendChild(i),document.body.appendChild(n),n}function ru(t){let e=dr(),n=tw(),i=iw(),r=nw();e&&(Object.assign(e.style,{...t0,...nu(t.bounds)}),Object.assign(n.style,{top:t.bounds.top<35?0:"-35px"}),i.innerHTML=`&lt;${t.name}&gt;&nbsp;&nbsp;`,r.innerHTML=`${Math.round(t.bounds.width*100)/100} x ${Math.round(t.bounds.height*100)/100}`)}function rw(t){let e=Oi(t);if(!e.width&&!e.height)return;let n=gn(t);dr()?ru({bounds:e,name:n}):iu({bounds:e,name:n})}function n0(){let t=dr();t&&(t.style.display="none")}var zc=null;function Wc(t){let e=t.target;if(e){let n=e.__vueParentComponent;if(n&&(zc=n,n.vnode.el)){let r=Oi(n),s=gn(n);dr()?ru({bounds:r,name:s}):iu({bounds:r,name:s})}}}function sw(t,e){if(t.preventDefault(),t.stopPropagation(),zc){let n=tu(zc);e(n)}}var jo=null;function ow(){n0(),window.removeEventListener("mouseover",Wc),window.removeEventListener("click",jo,!0),jo=null}function aw(){return window.addEventListener("mouseover",Wc),new Promise(t=>{function e(n){n.preventDefault(),n.stopPropagation(),sw(n,i=>{window.removeEventListener("click",e,!0),jo=null,window.removeEventListener("mouseover",Wc);let r=dr();r&&(r.style.display="none"),t(JSON.stringify({id:i}))})}jo=e,window.addEventListener("click",e,!0)})}function lw(t){let e=sr(He.value,t.id);if(e){let[n]=or(e);if(typeof n.scrollIntoView=="function")n.scrollIntoView({behavior:"smooth"});else{let i=Oi(e),r=document.createElement("div"),s={...nu(i),position:"absolute"};Object.assign(r.style,s),document.body.appendChild(r),r.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.body.removeChild(r)},2e3)}setTimeout(()=>{let i=Oi(e);if(i.width||i.height){let r=gn(e),s=dr();s?ru({...t,name:r,bounds:i}):iu({...t,name:r,bounds:i}),setTimeout(()=>{s&&(s.style.display="none")},1500)}},1200)}}oe();var ar=ze(),Lg,Fg;(Fg=(Lg=ar.target).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__)!=null||(Lg.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__=!0);function cw(t){ar.target.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__=t}function uw(t){let e=0,n=setInterval(()=>{ar.target.__VUE_INSPECTOR__&&(clearInterval(n),e+=30,t()),e>=5e3&&clearInterval(n)},30)}function dw(){let t=ar.target.__VUE_INSPECTOR__,e=t.openInEditor;t.openInEditor=async(...n)=>{t.disable(),e(...n)}}function fw(){return new Promise(t=>{function e(){dw(),t(ar.target.__VUE_INSPECTOR__)}ar.target.__VUE_INSPECTOR__?e():uw(()=>{e()})})}oe();oe();function hw(t){return!!(t&&t.__v_isReadonly)}function i0(t){return hw(t)?i0(t.__v_raw):!!(t&&t.__v_isReactive)}function Vc(t){return!!(t&&t.__v_isRef===!0)}function fs(t){let e=t&&t.__v_raw;return e?fs(e):t}var R2=Symbol.for("v-fgt"),r0=class{constructor(){this.refEditor=new pw}set(t,e,n,i){let r=Array.isArray(e)?e:e.split("."),s=!1;for(;r.length>1;){let l=r.shift();t instanceof Map?t=t.get(l):t instanceof Set?t=Array.from(t.values())[l]:t=t[l],this.refEditor.isRef(t)&&(t=this.refEditor.get(t))}let o=r[0],a=this.refEditor.get(t)[o];i?i(t,o,n):this.refEditor.isRef(a)?this.refEditor.set(a,n):t[o]=n}get(t,e){let n=Array.isArray(e)?e:e.split(".");for(let i=0;i<n.length;i++)if(t instanceof Map?t=t.get(n[i]):t=t[n[i]],this.refEditor.isRef(t)&&(t=this.refEditor.get(t)),!t)return;return t}has(t,e,n=!1){if(typeof t>"u")return!1;let i=Array.isArray(e)?e.slice():e.split("."),r=n?2:1;for(;t&&i.length>r;){let s=i.shift();t=t[s],this.refEditor.isRef(t)&&(t=this.refEditor.get(t))}return t!=null&&Object.prototype.hasOwnProperty.call(t,i[0])}createDefaultSetCallback(t){return(e,n,i)=>{if((t.remove||t.newKey)&&(Array.isArray(e)?e.splice(n,1):fs(e)instanceof Map?e.delete(n):fs(e)instanceof Set?e.delete(Array.from(e.values())[n]):Reflect.deleteProperty(e,n)),!t.remove){let r=e[t.newKey||n];this.refEditor.isRef(r)?this.refEditor.set(r,i):fs(e)instanceof Map?e.set(t.newKey||n,i):fs(e)instanceof Set?e.add(i):e[t.newKey||n]=i}}}},pw=class{set(t,e){if(Vc(t))t.value=e;else{if(t instanceof Set&&Array.isArray(e)){t.clear(),e.forEach(r=>t.add(r));return}let n=Object.keys(e);if(t instanceof Map){let r=new Set(t.keys());n.forEach(s=>{t.set(s,Reflect.get(e,s)),r.delete(s)}),r.forEach(s=>t.delete(s));return}let i=new Set(Object.keys(t));n.forEach(r=>{Reflect.set(t,r,Reflect.get(e,r)),i.delete(r)}),i.forEach(r=>Reflect.deleteProperty(t,r))}}get(t){return Vc(t)?t.value:t}isRef(t){return Vc(t)||i0(t)}};async function mw(t,e){let{path:n,nodeId:i,state:r,type:s}=t,o=sr(He.value,i);if(!o)return;let a=n.slice(),l;Object.keys(o.props).includes(n[0])?l=o.props:o.devtoolsRawSetupState&&Object.keys(o.devtoolsRawSetupState).includes(n[0])?l=o.devtoolsRawSetupState:o.data&&Object.keys(o.data).includes(n[0])?l=o.data:l=o.proxy,l&&a&&(r.type,e.set(l,a,r.value,e.createDefaultSetCallback(r)))}var gw=new r0;async function _w(t){mw(t,gw)}oe();var $c=ze();oe();var Be=ze(),s0=nr();oe();var o0=ze(),a0="__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";function yw(t){!o0.isBrowser||typeof localStorage>"u"||localStorage===null||localStorage.setItem(a0,JSON.stringify(t))}function Ew(){if(typeof window>"u"||!o0.isBrowser||typeof localStorage>"u"||localStorage===null)return{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""};let t=typeof localStorage.getItem<"u"?localStorage.getItem(a0):null;return t?JSON.parse(t):{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""}}oe();var xw=Uc(),Ug=nr();oe();var l0=ze(),vw=nr();oe();var c0=ze(),Bg,kg;(kg=(Bg=c0.target).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS)!=null||(Bg.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS=[]);var u0=new Proxy(c0.target.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS,{get(t,e,n){return Reflect.get(t,e,n)}});function bw(t,e){Re.timelineLayersState[e.id]=!1,u0.push({...t,descriptorId:e.id,appRecord:mn(e.app)})}function Sw(t){let e={...Re.timelineLayersState,...t};yw(e),rr({timelineLayersState:e})}var Vg,Gg;(Gg=(Vg=l0.target).__VUE_DEVTOOLS_KIT_INSPECTOR__)!=null||(Vg.__VUE_DEVTOOLS_KIT_INSPECTOR__=[]);var aa=new Proxy(l0.target.__VUE_DEVTOOLS_KIT_INSPECTOR__,{get(t,e,n){return Reflect.get(t,e,n)}}),su=(0,vw.debounce)(()=>{Kt.hooks.callHook("sendInspectorToClient",ou())});function d0(t,e){var n,i;aa.push({options:t,descriptor:e,treeFilterPlaceholder:(n=t.treeFilterPlaceholder)!=null?n:"Search tree...",stateFilterPlaceholder:(i=t.stateFilterPlaceholder)!=null?i:"Search state...",treeFilter:"",selectedNodeId:"",appRecord:mn(e.app)}),su()}function ou(){return aa.filter(t=>t.descriptor.app===He.value.app).filter(t=>t.descriptor.id!=="components").map(t=>{var e;let n=t.descriptor,i=t.options;return{id:i.id,label:i.label,logo:n.logo,icon:`custom-ic-baseline-${(e=i?.icon)==null?void 0:e.replace(/_/g,"-")}`,packageName:n.packageName,homepage:n.homepage,pluginId:n.id}})}function Tw(t){let e=oi(t,He.value.app);if(!e)return;let n=e.descriptor,i=e.options,r=u0.filter(s=>s.descriptorId===n.id).map(s=>({id:s.id,label:s.label,color:s.color}));return{id:i.id,label:i.label,logo:n.logo,packageName:n.packageName,homepage:n.homepage,timelineLayers:r,treeFilterPlaceholder:e.treeFilterPlaceholder,stateFilterPlaceholder:e.stateFilterPlaceholder}}function oi(t,e){return aa.find(n=>n.options.id===t&&(e?n.descriptor.app===e:!0))}function Aw(t){let e=oi(t);return e?.options.actions}function Mw(t){let e=oi(t);return e?.options.nodeActions}var f0=(t=>(t.VISIT_COMPONENT_TREE="visitComponentTree",t.INSPECT_COMPONENT="inspectComponent",t.EDIT_COMPONENT_STATE="editComponentState",t.GET_INSPECTOR_TREE="getInspectorTree",t.GET_INSPECTOR_STATE="getInspectorState",t.EDIT_INSPECTOR_STATE="editInspectorState",t.INSPECT_TIMELINE_EVENT="inspectTimelineEvent",t.TIMELINE_CLEARED="timelineCleared",t.SET_PLUGIN_SETTINGS="setPluginSettings",t))(f0||{}),h0=(t=>(t.ADD_INSPECTOR="addInspector",t.SEND_INSPECTOR_TREE="sendInspectorTree",t.SEND_INSPECTOR_STATE="sendInspectorState",t.CUSTOM_INSPECTOR_SELECT_NODE="customInspectorSelectNode",t.TIMELINE_LAYER_ADDED="timelineLayerAdded",t.TIMELINE_EVENT_ADDED="timelineEventAdded",t.GET_COMPONENT_INSTANCES="getComponentInstances",t.GET_COMPONENT_BOUNDS="getComponentBounds",t.GET_COMPONENT_NAME="getComponentName",t.COMPONENT_HIGHLIGHT="componentHighlight",t.COMPONENT_UNHIGHLIGHT="componentUnhighlight",t))(h0||{}),p0=(t=>(t.SEND_INSPECTOR_TREE_TO_CLIENT="sendInspectorTreeToClient",t.SEND_INSPECTOR_STATE_TO_CLIENT="sendInspectorStateToClient",t.SEND_TIMELINE_EVENT_TO_CLIENT="sendTimelineEventToClient",t.SEND_INSPECTOR_TO_CLIENT="sendInspectorToClient",t.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT="sendActiveAppUpdatedToClient",t.DEVTOOLS_STATE_UPDATED="devtoolsStateUpdated",t.DEVTOOLS_CONNECTED_UPDATED="devtoolsConnectedUpdated",t.ROUTER_INFO_UPDATED="routerInfoUpdated",t))(p0||{});function m0(){let t=(0,xw.createHooks)();t.hook("addInspector",({inspector:i,plugin:r})=>{d0(i,r.descriptor)});let e=(0,Ug.debounce)(async({inspectorId:i,plugin:r})=>{var s;if(!i||!((s=r?.descriptor)!=null&&s.app)||Re.highPerfModeEnabled)return;let o=oi(i,r.descriptor.app),a={app:r.descriptor.app,inspectorId:i,filter:o?.treeFilter||"",rootNodes:[]};await new Promise(l=>{t.callHookWith(async c=>{await Promise.all(c.map(u=>u(a))),l()},"getInspectorTree")}),t.callHookWith(async l=>{await Promise.all(l.map(c=>c({inspectorId:i,rootNodes:a.rootNodes})))},"sendInspectorTreeToClient")},120);t.hook("sendInspectorTree",e);let n=(0,Ug.debounce)(async({inspectorId:i,plugin:r})=>{var s;if(!i||!((s=r?.descriptor)!=null&&s.app)||Re.highPerfModeEnabled)return;let o=oi(i,r.descriptor.app),a={app:r.descriptor.app,inspectorId:i,nodeId:o?.selectedNodeId||"",state:null},l={currentTab:`custom-inspector:${i}`};a.nodeId&&await new Promise(c=>{t.callHookWith(async u=>{await Promise.all(u.map(d=>d(a,l))),c()},"getInspectorState")}),t.callHookWith(async c=>{await Promise.all(c.map(u=>u({inspectorId:i,nodeId:a.nodeId,state:a.state})))},"sendInspectorStateToClient")},120);return t.hook("sendInspectorState",n),t.hook("customInspectorSelectNode",({inspectorId:i,nodeId:r,plugin:s})=>{let o=oi(i,s.descriptor.app);o&&(o.selectedNodeId=r)}),t.hook("timelineLayerAdded",({options:i,plugin:r})=>{bw(i,r.descriptor)}),t.hook("timelineEventAdded",({options:i,plugin:r})=>{var s;let o=["performance","component-event","keyboard","mouse"];Re.highPerfModeEnabled||!((s=Re.timelineLayersState)!=null&&s[r.descriptor.id])&&!o.includes(i.layerId)||t.callHookWith(async a=>{await Promise.all(a.map(l=>l(i)))},"sendTimelineEventToClient")}),t.hook("getComponentInstances",async({app:i})=>{let r=i.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(!r)return null;let s=r.id.toString();return[...r.instanceMap].filter(([a])=>a.split(":")[0]===s).map(([,a])=>a)}),t.hook("getComponentBounds",async({instance:i})=>Oi(i)),t.hook("getComponentName",({instance:i})=>gn(i)),t.hook("componentHighlight",({uid:i})=>{let r=He.value.instanceMap.get(i);r&&rw(r)}),t.hook("componentUnhighlight",()=>{n0()}),t}var Hg,zg;(zg=(Hg=Be.target).__VUE_DEVTOOLS_KIT_APP_RECORDS__)!=null||(Hg.__VUE_DEVTOOLS_KIT_APP_RECORDS__=[]);var Wg,$g;($g=(Wg=Be.target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__)!=null||(Wg.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__={});var Xg,Yg;(Yg=(Xg=Be.target).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__)!=null||(Xg.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__="");var qg,Kg;(Kg=(qg=Be.target).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__)!=null||(qg.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__=[]);var jg,Zg;(Zg=(jg=Be.target).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__)!=null||(jg.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__=[]);var pn="__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";function g0(){return{connected:!1,clientConnected:!1,vitePluginDetected:!0,appRecords:[],activeAppRecordId:"",tabs:[],commands:[],highPerfModeEnabled:!0,devtoolsClientDetected:{},perfUniqueGroupId:0,timelineLayersState:Ew()}}var Jg,Qg;(Qg=(Jg=Be.target)[pn])!=null||(Jg[pn]=g0());var _0=(0,s0.debounce)(t=>{Kt.hooks.callHook("devtoolsStateUpdated",{state:t})}),y0=(0,s0.debounce)((t,e)=>{Kt.hooks.callHook("devtoolsConnectedUpdated",{state:t,oldState:e})}),Vn=new Proxy(Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__,{get(t,e,n){return e==="value"?Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__:Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__[e]}}),E0=t=>{Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__=[...Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__,t]},x0=t=>{Be.target.__VUE_DEVTOOLS_KIT_APP_RECORDS__=Vn.value.filter(e=>e.app!==t)},He=new Proxy(Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__,{get(t,e,n){return e==="value"?Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__:e==="id"?Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__:Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[e]}});function fr(){_0({...Be.target[pn],appRecords:Vn.value,activeAppRecordId:He.id,tabs:Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,commands:Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__})}function Zo(t){Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__=t,fr()}function au(t){Be.target.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__=t,fr()}var Re=new Proxy(Be.target[pn],{get(t,e){return e==="appRecords"?Vn:e==="activeAppRecordId"?He.id:e==="tabs"?Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__:e==="commands"?Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__:Be.target[pn][e]},deleteProperty(t,e){return delete t[e],!0},set(t,e,n){let i={...Be.target[pn]};return t[e]=n,Be.target[pn][e]=n,!0}});function Rw(){Object.assign(Be.target[pn],g0())}function rr(t){let e={...Be.target[pn],appRecords:Vn.value,activeAppRecordId:He.id};(e.connected!==t.connected&&t.connected||e.clientConnected!==t.clientConnected&&t.clientConnected)&&y0(Be.target[pn],e),Object.assign(Be.target[pn],t),fr()}function ww(t){return new Promise(e=>{Re.connected&&(t(),e()),Kt.hooks.hook("devtoolsConnectedUpdated",({state:n})=>{n.connected&&(t(),e())})})}var Xc=t=>{if(t)return t.startsWith("baseline-")?`custom-ic-${t}`:t.startsWith("i-")||(0,Be.isUrlString)(t)?t:`custom-ic-baseline-${t}`};function Cw(t){let e=Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;e.some(n=>n.name===t.name)||(e.push({...t,icon:Xc(t.icon)}),fr())}function Iw(t){let e=Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;e.some(n=>n.id===t.id)||(e.push({...t,icon:Xc(t.icon),children:t.children?t.children.map(n=>({...n,icon:Xc(n.icon)})):void 0}),fr())}function Pw(t){let e=Be.target.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__,n=e.findIndex(i=>i.id===t);n!==-1&&(e.splice(n,1),fr())}function Ow(t){rr({clientConnected:t})}function Dw(t){$c.target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__=t}function Nw(t={}){var e,n,i;let{file:r,host:s,baseUrl:o=window.location.origin,line:a=0,column:l=0}=t;if(r){if(s==="chrome-extension"){let c=r.replace(/\\/g,"\\\\"),u=(n=(e=window.VUE_DEVTOOLS_CONFIG)==null?void 0:e.openInEditorHost)!=null?n:"/";fetch(`${u}__open-in-editor?file=${encodeURI(r)}`).then(d=>{if(!d.ok){let h=`Opening component ${c} failed`;console.log(`%c${h}`,"color:red")}})}else if(Re.vitePluginDetected){let c=(i=$c.target.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__)!=null?i:o;$c.target.__VUE_INSPECTOR__.openInEditor(c,r,a,l)}}}oe();var Jo=ze();oe();oe();oe();oe();var v0=ze(),e_,t_;(t_=(e_=v0.target).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__)!=null||(e_.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__=[]);var hr=new Proxy(v0.target.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__,{get(t,e,n){return Reflect.get(t,e,n)}});function b0(t,e){hr.push([t,e])}function Yc(t){let e={};return Object.keys(t).forEach(n=>{e[n]=t[n].defaultValue}),e}function lu(t){return`__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${t}__`}function Lw(t){var e,n,i;let r=(n=(e=hr.find(s=>{var o;return s[0].id===t&&!!((o=s[0])!=null&&o.settings)}))==null?void 0:e[0])!=null?n:null;return(i=r?.settings)!=null?i:null}function S0(t,e){var n,i,r;let s=lu(t);if(s){let o=localStorage.getItem(s);if(o)return JSON.parse(o)}if(t){let o=(i=(n=hr.find(a=>a[0].id===t))==null?void 0:n[0])!=null?i:null;return Yc((r=o?.settings)!=null?r:{})}return Yc(e)}function T0(t,e){let n=lu(t);localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify(Yc(e)))}function Fw(t,e,n){let i=lu(t),r=localStorage.getItem(i),s=JSON.parse(r||"{}"),o={...s,[e]:n};localStorage.setItem(i,JSON.stringify(o)),Kt.hooks.callHookWith(a=>{a.forEach(l=>l({pluginId:t,key:e,oldValue:s[e],newValue:n,settings:o}))},"setPluginSettings")}oe();var Uw=ze(),Bw=Uc(),n_,i_,ut=(i_=(n_=Uw.target).__VUE_DEVTOOLS_HOOK)!=null?i_:n_.__VUE_DEVTOOLS_HOOK=(0,Bw.createHooks)(),kw={vueAppInit(t){ut.hook("app:init",t)},vueAppUnmount(t){ut.hook("app:unmount",t)},vueAppConnected(t){ut.hook("app:connected",t)},componentAdded(t){return ut.hook("component:added",t)},componentEmit(t){return ut.hook("component:emit",t)},componentUpdated(t){return ut.hook("component:updated",t)},componentRemoved(t){return ut.hook("component:removed",t)},setupDevtoolsPlugin(t){ut.hook("devtools-plugin:setup",t)},perfStart(t){return ut.hook("perf:start",t)},perfEnd(t){return ut.hook("perf:end",t)}};function Vw(){return{id:"vue-devtools-next",devtoolsVersion:"7.0",enabled:!1,appRecords:[],apps:[],events:new Map,on(t,e){var n;return this.events.has(t)||this.events.set(t,[]),(n=this.events.get(t))==null||n.push(e),()=>this.off(t,e)},once(t,e){let n=(...i)=>{this.off(t,n),e(...i)};return this.on(t,n),[t,n]},off(t,e){if(this.events.has(t)){let n=this.events.get(t),i=n.indexOf(e);i!==-1&&n.splice(i,1)}},emit(t,...e){this.events.has(t)&&this.events.get(t).forEach(n=>n(...e))}}}function Gw(t){t.on("app:init",(e,n,i)=>{var r,s,o;(o=(s=(r=e?._instance)==null?void 0:r.type)==null?void 0:s.devtools)!=null&&o.hide||ut.callHook("app:init",e,n,i)}),t.on("app:unmount",e=>{ut.callHook("app:unmount",e)}),t.on("component:added",async(e,n,i,r)=>{var s,o,a;(a=(o=(s=e?._instance)==null?void 0:s.type)==null?void 0:o.devtools)!=null&&a.hide||Re.highPerfModeEnabled||!e||typeof n!="number"&&!n||!r||ut.callHook("component:added",e,n,i,r)}),t.on("component:updated",(e,n,i,r)=>{!e||typeof n!="number"&&!n||!r||Re.highPerfModeEnabled||ut.callHook("component:updated",e,n,i,r)}),t.on("component:removed",async(e,n,i,r)=>{!e||typeof n!="number"&&!n||!r||Re.highPerfModeEnabled||ut.callHook("component:removed",e,n,i,r)}),t.on("component:emit",async(e,n,i,r)=>{!e||!n||Re.highPerfModeEnabled||ut.callHook("component:emit",e,n,i,r)}),t.on("perf:start",(e,n,i,r,s)=>{!e||Re.highPerfModeEnabled||ut.callHook("perf:start",e,n,i,r,s)}),t.on("perf:end",(e,n,i,r,s)=>{!e||Re.highPerfModeEnabled||ut.callHook("perf:end",e,n,i,r,s)}),t.on("devtools-plugin:setup",(e,n,i)=>{i?.target!=="legacy"&&ut.callHook("devtools-plugin:setup",e,n)})}var cn={on:kw,setupDevToolsPlugin(t,e){return ut.callHook("devtools-plugin:setup",t,e)}},Hw=class{constructor({plugin:t,ctx:e}){this.hooks=e.hooks,this.plugin=t}get on(){return{visitComponentTree:t=>{this.hooks.hook("visitComponentTree",t)},inspectComponent:t=>{this.hooks.hook("inspectComponent",t)},editComponentState:t=>{this.hooks.hook("editComponentState",t)},getInspectorTree:t=>{this.hooks.hook("getInspectorTree",t)},getInspectorState:t=>{this.hooks.hook("getInspectorState",t)},editInspectorState:t=>{this.hooks.hook("editInspectorState",t)},inspectTimelineEvent:t=>{this.hooks.hook("inspectTimelineEvent",t)},timelineCleared:t=>{this.hooks.hook("timelineCleared",t)},setPluginSettings:t=>{this.hooks.hook("setPluginSettings",t)}}}notifyComponentUpdate(t){var e;if(Re.highPerfModeEnabled)return;let n=ou().find(i=>i.packageName===this.plugin.descriptor.packageName);if(n?.id){if(t){let i=[t.appContext.app,t.uid,(e=t.parent)==null?void 0:e.uid,t];ut.callHook("component:updated",...i)}else ut.callHook("component:updated");this.hooks.callHook("sendInspectorState",{inspectorId:n.id,plugin:this.plugin})}}addInspector(t){this.hooks.callHook("addInspector",{inspector:t,plugin:this.plugin}),this.plugin.descriptor.settings&&T0(t.id,this.plugin.descriptor.settings)}sendInspectorTree(t){Re.highPerfModeEnabled||this.hooks.callHook("sendInspectorTree",{inspectorId:t,plugin:this.plugin})}sendInspectorState(t){Re.highPerfModeEnabled||this.hooks.callHook("sendInspectorState",{inspectorId:t,plugin:this.plugin})}selectInspectorNode(t,e){this.hooks.callHook("customInspectorSelectNode",{inspectorId:t,nodeId:e,plugin:this.plugin})}visitComponentTree(t){return this.hooks.callHook("visitComponentTree",t)}now(){return Re.highPerfModeEnabled?0:Date.now()}addTimelineLayer(t){this.hooks.callHook("timelineLayerAdded",{options:t,plugin:this.plugin})}addTimelineEvent(t){Re.highPerfModeEnabled||this.hooks.callHook("timelineEventAdded",{options:t,plugin:this.plugin})}getSettings(t){return S0(t??this.plugin.descriptor.id,this.plugin.descriptor.settings)}getComponentInstances(t){return this.hooks.callHook("getComponentInstances",{app:t})}getComponentBounds(t){return this.hooks.callHook("getComponentBounds",{instance:t})}getComponentName(t){return this.hooks.callHook("getComponentName",{instance:t})}highlightElement(t){let e=t.__VUE_DEVTOOLS_NEXT_UID__;return this.hooks.callHook("componentHighlight",{uid:e})}unhighlightElement(){return this.hooks.callHook("componentUnhighlight")}},zw=Hw;oe();var r_=nr();oe();oe();var Ww=ze();oe();var $w=new Set(["nextTick","defineComponent","defineAsyncComponent","defineCustomElement","ref","computed","reactive","readonly","watchEffect","watchPostEffect","watchSyncEffect","watch","isRef","unref","toRef","toRefs","isProxy","isReactive","isReadonly","shallowRef","triggerRef","customRef","shallowReactive","shallowReadonly","toRaw","markRaw","effectScope","getCurrentScope","onScopeDispose","onMounted","onUpdated","onUnmounted","onBeforeMount","onBeforeUpdate","onBeforeUnmount","onErrorCaptured","onRenderTracked","onRenderTriggered","onActivated","onDeactivated","onServerPrefetch","provide","inject","h","mergeProps","cloneVNode","isVNode","resolveComponent","resolveDirective","withDirectives","withModifiers"]),s_=/^\[native Symbol Symbol\((.*)\)\]$/,Xw=/^\[object (\w+)\]$/,Qo=/^\[native (\w+) (.*?)(<>(([\s\S])*))?\]$/,Yw=/^(?:function|class) (\w+)/,o_=1e4,a_=5e3,_s="__vue_devtool_undefined__",ys="__vue_devtool_infinity__",Es="__vue_devtool_negative_infinity__",xs="__vue_devtool_nan__",qw={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};oe();oe();function A0(t){return!ln(t,"_")||!la(t._)?!1:Object.keys(t._).includes("vnode")}function la(t){return Object.prototype.toString.call(t)==="[object Object]"}function Kw(t){if(t==null)return!0;let e=typeof t;return e==="string"||e==="number"||e==="boolean"}function M0(t){return!!t.__v_isRef}function jw(t){return M0(t)&&!!t.effect}function Zw(t){return!!t.__v_isReactive}function Jw(t){return!!t.__v_isReadonly}var ea={[_s]:"undefined",[xs]:"NaN",[ys]:"Infinity",[Es]:"-Infinity"},Gc=Object.entries(ea).reduce((t,[e,n])=>(t[n]=e,t),{});function Qw(t){return t===null?"null":typeof t=="string"&&ea[t]||!1}function eC(t){let e=new RegExp(`"(${Object.keys(ea).join("|")})"`,"g");return t.replace(e,(n,i)=>ea[i])}function tC(t){let e=Gc[t.trim()];if(e)return`"${e}"`;let n=new RegExp(`:\\s*(${Object.keys(Gc).join("|")})`,"g");return t.replace(n,(i,r)=>`:"${Gc[r]}"`)}function R0(t){if(Array.isArray(t))return t.map(n=>R0(n)).join(" or ");if(t==null)return"null";let e=t.toString().match(Yw);return typeof t=="function"&&e&&e[1]||"any"}function nC(t){return!Kw(t)&&!Array.isArray(t)&&!la(t)?Object.prototype.toString.call(t):t}function w0(t){try{return{ref:M0(t),computed:jw(t),reactive:Zw(t),readonly:Jw(t)}}catch{return{ref:!1,computed:!1,reactive:!1,readonly:!1}}}function C0(t){return t?.__v_raw?t.__v_raw:t}function ca(t){return t.replace(/[<>"&]/g,e=>qw[e]||e)}function ta(t,e,n){if(typeof e=="function"&&(e=e.options),!e)return t;let{mixins:i,extends:r}=e;r&&ta(t,r,n),i&&i.forEach(s=>ta(t,s,n));for(let s of["computed","inject"])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]?Object.assign(t[s],e[s]):t[s]=e[s]);return t}function iC(t){let e=t?.type;if(!e)return{};let{mixins:n,extends:i}=e,r=t.appContext.mixins;if(!r.length&&!n&&!i)return e;let s={};return r.forEach(o=>ta(s,o,t)),ta(s,e,t),s}function rC(t){var e;let n=[],i=(e=t?.type)==null?void 0:e.props;for(let r in t?.props){let s=i?i[r]:null,o=(0,Ww.camelize)(r);n.push({type:"props",key:o,value:li(()=>t.props[r]),editable:!0,meta:s?{type:s.type?R0(s.type):"any",required:!!s.required,...s.default?{default:s.default.toString()}:{}}:{type:"invalid"}})}return n}function sC(t){let e=t.type,n=e?.props,i=e.vuex&&e.vuex.getters,r=e.computed,s={...t.data,...t.renderContext};return Object.keys(s).filter(o=>!(n&&o in n)&&!(i&&o in i)&&!(r&&o in r)).map(o=>({key:o,type:"data",value:li(()=>s[o]),editable:!0}))}function oC(t){let e=t.computed?"computed":t.ref?"ref":t.reactive?"reactive":null,n=e?`${e.charAt(0).toUpperCase()}${e.slice(1)}`:null;return{stateType:e,stateTypeName:n}}function aC(t){let e=t.devtoolsRawSetupState||{};return Object.keys(t.setupState).filter(n=>!$w.has(n)&&n.split(/(?=[A-Z])/)[0]!=="use").map(n=>{var i,r,s,o;let a=li(()=>C0(t.setupState[n])),l=a instanceof Error,c=e[n],u,d=l||typeof a=="function"||ln(a,"render")&&typeof a.render=="function"||ln(a,"__asyncLoader")&&typeof a.__asyncLoader=="function"||typeof a=="object"&&a&&("setup"in a||"props"in a)||/^v[A-Z]/.test(n);if(c&&!l){let f=w0(c),{stateType:p,stateTypeName:g}=oC(f),S=f.ref||f.computed||f.reactive,E=ln(c,"effect")?((r=(i=c.effect)==null?void 0:i.raw)==null?void 0:r.toString())||((o=(s=c.effect)==null?void 0:s.fn)==null?void 0:o.toString()):null;p&&(d=!1),u={...p?{stateType:p,stateTypeName:g}:{},...E?{raw:E}:{},editable:S&&!f.readonly}}return{key:n,value:a,type:d?"setup (other)":"setup",...u}})}function lC(t,e){let n=e,i=[],r=n.computed||{};for(let s in r){let o=r[s],a=typeof o=="function"&&o.vuex?"vuex bindings":"computed";i.push({type:a,key:s,value:li(()=>{var l;return(l=t?.proxy)==null?void 0:l[s]}),editable:typeof o.set=="function"})}return i}function cC(t){return Object.keys(t.attrs).map(e=>({type:"attrs",key:e,value:li(()=>t.attrs[e])}))}function uC(t){return Reflect.ownKeys(t.provides).map(e=>({type:"provided",key:e.toString(),value:li(()=>t.provides[e])}))}function dC(t,e){if(!e?.inject)return[];let n=[],i;return Array.isArray(e.inject)?n=e.inject.map(r=>({key:r,originalKey:r})):n=Reflect.ownKeys(e.inject).map(r=>{let s=e.inject[r],o;return typeof s=="string"||typeof s=="symbol"?o=s:(o=s.from,i=s.default),{key:r,originalKey:o}}),n.map(({key:r,originalKey:s})=>({type:"injected",key:s&&r!==s?`${s.toString()} \u279E ${r.toString()}`:r.toString(),value:li(()=>t.ctx.hasOwnProperty(r)?t.ctx[r]:t.provides.hasOwnProperty(s)?t.provides[s]:i)}))}function fC(t){return Object.keys(t.refs).map(e=>({type:"template refs",key:e,value:li(()=>t.refs[e])}))}function hC(t){var e,n;let i=t.type.emits,r=Array.isArray(i)?i:Object.keys(i??{}),s=Object.keys((n=(e=t?.vnode)==null?void 0:e.props)!=null?n:{}),o=[];for(let a of s){let[l,...c]=a.split(/(?=[A-Z])/);if(l==="on"){let u=c.join("-").toLowerCase(),d=r.includes(u);o.push({type:"event listeners",key:u,value:{_custom:{displayText:d?"\u2705 Declared":"\u26A0\uFE0F Not declared",key:d?"\u2705 Declared":"\u26A0\uFE0F Not declared",value:d?"\u2705 Declared":"\u26A0\uFE0F Not declared",tooltipText:d?null:`The event <code>${u}</code> is not declared in the <code>emits</code> option. It will leak into the component's attributes (<code>$attrs</code>).`}}})}}return o}function I0(t){let e=iC(t);return rC(t).concat(sC(t),aC(t),lC(t,e),cC(t),uC(t),dC(t,e),fC(t),hC(t))}function pC(t){var e;let n=sr(He.value,t.instanceId),i=tu(n),r=gn(n),s=(e=n?.type)==null?void 0:e.__file,o=I0(n);return{id:i,name:r,file:s,state:o,instance:n}}oe();oe();var l_=ze(),mC=class{constructor(t){this.filter=t||""}isQualified(t){let e=gn(t);return(0,l_.classify)(e).toLowerCase().includes(this.filter)||(0,l_.kebabize)(e).toLowerCase().includes(this.filter)}};function gC(t){return new mC(t)}var _C=class{constructor(t){this.captureIds=new Map;let{filterText:e="",maxDepth:n,recursively:i,api:r}=t;this.componentFilter=gC(e),this.maxDepth=n,this.recursively=i,this.api=r}getComponentTree(t){return this.captureIds=new Map,this.findQualifiedChildren(t,0)}getComponentParents(t){this.captureIds=new Map;let e=[];this.captureId(t);let n=t;for(;n=n.parent;)this.captureId(n),e.push(n);return e}captureId(t){if(!t)return null;let e=t.__VUE_DEVTOOLS_NEXT_UID__!=null?t.__VUE_DEVTOOLS_NEXT_UID__:tu(t);return t.__VUE_DEVTOOLS_NEXT_UID__=e,this.captureIds.has(e)?null:(this.captureIds.set(e,void 0),this.mark(t),e)}async capture(t,e){var n;if(!t)return null;let i=this.captureId(t),r=gn(t),s=this.getInternalInstanceChildren(t.subTree).filter(d=>!kc(d)),o=this.getComponentParents(t)||[],a=!!t.isDeactivated||o.some(d=>d.isDeactivated),l={uid:t.uid,id:i,name:r,renderKey:YR(t.vnode?t.vnode.key:null),inactive:a,children:[],isFragment:eu(t),tags:typeof t.type!="function"?[]:[{label:"functional",textColor:5592405,backgroundColor:15658734}],autoOpen:this.recursively,file:t.type.__file||""};if((e<this.maxDepth||t.type.__isKeepAlive||o.some(d=>d.type.__isKeepAlive))&&(l.children=await Promise.all(s.map(d=>this.capture(d,e+1)).filter(Boolean))),this.isKeepAlive(t)){let d=this.getKeepAliveCachedInstances(t),h=s.map(f=>f.__VUE_DEVTOOLS_NEXT_UID__);for(let f of d)if(!h.includes(f.__VUE_DEVTOOLS_NEXT_UID__)){let p=await this.capture({...f,isDeactivated:!0},e+1);p&&l.children.push(p)}}let u=or(t)[0];if(u?.parentElement){let d=t.parent,h=d?or(d):[],f=u,p=[];do p.push(Array.from(f.parentElement.childNodes).indexOf(f)),f=f.parentElement;while(f.parentElement&&h.length&&!h.includes(f));l.domOrder=p.reverse()}else l.domOrder=[-1];return(n=t.suspense)!=null&&n.suspenseKey&&(l.tags.push({label:t.suspense.suspenseKey,backgroundColor:14979812,textColor:16777215}),this.mark(t,!0)),this.api.visitComponentTree({treeNode:l,componentInstance:t,app:t.appContext.app,filter:this.componentFilter.filter}),l}async findQualifiedChildren(t,e){var n;if(this.componentFilter.isQualified(t)&&!((n=t.type.devtools)!=null&&n.hide))return[await this.capture(t,e)];if(t.subTree){let i=this.isKeepAlive(t)?this.getKeepAliveCachedInstances(t):this.getInternalInstanceChildren(t.subTree);return this.findQualifiedChildrenFromList(i,e)}else return[]}async findQualifiedChildrenFromList(t,e){return t=t.filter(n=>{var i;return!kc(n)&&!((i=n.type.devtools)!=null&&i.hide)}),this.componentFilter.filter?Array.prototype.concat.apply([],await Promise.all(t.map(n=>this.findQualifiedChildren(n,e)))):Promise.all(t.map(n=>this.capture(n,e)))}getInternalInstanceChildren(t,e=null){let n=[];if(t)if(t.component)e?n.push({...t.component,suspense:e}):n.push(t.component);else if(t.suspense){let i=t.suspense.isInFallback?"suspense fallback":"suspense default";n.push(...this.getInternalInstanceChildren(t.suspense.activeBranch,{...t.suspense,suspenseKey:i}))}else Array.isArray(t.children)&&t.children.forEach(i=>{i.component?e?n.push({...i.component,suspense:e}):n.push(i.component):n.push(...this.getInternalInstanceChildren(i,e))});return n.filter(i=>{var r;return!kc(i)&&!((r=i.type.devtools)!=null&&r.hide)})}mark(t,e=!1){let n=mn(t).instanceMap;(e||!n.has(t.__VUE_DEVTOOLS_NEXT_UID__))&&(n.set(t.__VUE_DEVTOOLS_NEXT_UID__,t),He.value.instanceMap=n)}isKeepAlive(t){return t.type.__isKeepAlive&&t.__v_cache}getKeepAliveCachedInstances(t){return Array.from(t.__v_cache.values()).map(e=>e.component).filter(Boolean)}};oe();var yC=ze();oe();var qo=new Map,cu="performance";async function EC(t,e,n,i,r,s){let o=await mn(e);if(!o)return;let a=gn(i)||"Unknown Component",l=Re.perfUniqueGroupId++,c=`${n}-${r}`;if(o.perfGroupIds.set(c,{groupId:l,time:s}),await t.addTimelineEvent({layerId:cu,event:{time:Date.now(),data:{component:a,type:r,measure:"start"},title:a,subtitle:r,groupId:l}}),qo.has(c)){let{app:u,uid:d,instance:h,type:f,time:p}=qo.get(c);qo.delete(c),await P0(t,u,d,h,f,p)}}function P0(t,e,n,i,r,s){let o=mn(e);if(!o)return;let a=gn(i)||"Unknown Component",l=`${n}-${r}`,c=o.perfGroupIds.get(l);if(c){let u=c.groupId,d=c.time,h=s-d;t.addTimelineEvent({layerId:cu,event:{time:Date.now(),data:{component:a,type:r,measure:"end",duration:{_custom:{type:"Duration",value:h,display:`${h} ms`}}},title:a,subtitle:r,groupId:u}})}else qo.set(l,{app:e,uid:n,instance:i,type:r,time:s})}var c_="component-event";function xC(t){yC.isBrowser&&(t.addTimelineLayer({id:"mouse",label:"Mouse",color:10768815}),["mousedown","mouseup","click","dblclick"].forEach(e=>{!Re.timelineLayersState.recordingState||!Re.timelineLayersState.mouseEventEnabled||window.addEventListener(e,async n=>{await t.addTimelineEvent({layerId:"mouse",event:{time:Date.now(),data:{type:e,x:n.clientX,y:n.clientY},title:e}})},{capture:!0,passive:!0})}),t.addTimelineLayer({id:"keyboard",label:"Keyboard",color:8475055}),["keyup","keydown","keypress"].forEach(e=>{window.addEventListener(e,async n=>{!Re.timelineLayersState.recordingState||!Re.timelineLayersState.keyboardEventEnabled||await t.addTimelineEvent({layerId:"keyboard",event:{time:Date.now(),data:{type:e,key:n.key,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,altKey:n.altKey,metaKey:n.metaKey},title:n.key}})},{capture:!0,passive:!0})}),t.addTimelineLayer({id:c_,label:"Component events",color:5226637}),cn.on.componentEmit(async(e,n,i,r)=>{if(!Re.timelineLayersState.recordingState||!Re.timelineLayersState.componentEventEnabled)return;let s=await mn(e);if(!s)return;let o=`${s.id}:${n.uid}`,a=gn(n)||"Unknown Component";t.addTimelineEvent({layerId:c_,event:{time:Date.now(),data:{component:{_custom:{type:"component-definition",display:a}},event:i,params:r},title:i,subtitle:`by ${a}`,meta:{componentId:o}}})}),t.addTimelineLayer({id:"performance",label:cu,color:4307050}),cn.on.perfStart((e,n,i,r,s)=>{!Re.timelineLayersState.recordingState||!Re.timelineLayersState.performanceEventEnabled||EC(t,e,n,i,r,s)}),cn.on.perfEnd((e,n,i,r,s)=>{!Re.timelineLayersState.recordingState||!Re.timelineLayersState.performanceEventEnabled||P0(t,e,n,i,r,s)}))}oe();var vC=10,Ii=[];function bC(t){if(typeof window>"u")return;let e=window;if(t&&(e.$vm=t,Ii[0]!==t)){Ii.length>=vC&&Ii.pop();for(let n=Ii.length;n>0;n--)e[`$vm${n}`]=Ii[n]=Ii[n-1];e.$vm0=Ii[0]=t}}var Pi="components";function O0(t){return[{id:Pi,label:"Components",app:t},i=>{i.addInspector({id:Pi,label:"Components",treeFilterPlaceholder:"Search components"}),xC(i),i.on.getInspectorTree(async c=>{if(c.app===t&&c.inspectorId===Pi){let u=sr(He.value,c.instanceId);if(u){let d=new _C({filterText:c.filter,maxDepth:100,recursively:!1,api:i});c.rootNodes=await d.getComponentTree(u)}}}),i.on.getInspectorState(async c=>{var u;if(c.app===t&&c.inspectorId===Pi){let d=pC({instanceId:c.nodeId}),h=d.instance,f=(u=d.instance)==null?void 0:u.appContext.app,p={componentInstance:h,app:f,instanceData:d};Kt.hooks.callHookWith(g=>{g.forEach(S=>S(p))},"inspectComponent"),c.state=d,bC(h)}}),i.on.editInspectorState(async c=>{c.app===t&&c.inspectorId===Pi&&(_w(c),await i.sendInspectorState("components"))});let r=(0,r_.debounce)(()=>{i.sendInspectorTree(Pi)},120),s=(0,r_.debounce)(()=>{i.sendInspectorState(Pi)},120),o=cn.on.componentAdded(async(c,u,d,h)=>{var f,p,g;if(Re.highPerfModeEnabled||(g=(p=(f=c?._instance)==null?void 0:f.type)==null?void 0:p.devtools)!=null&&g.hide||!c||typeof u!="number"&&!u||!h)return;let S=await Bc({app:c,uid:u,instance:h}),E=await mn(c);h&&(h.__VUE_DEVTOOLS_NEXT_UID__==null&&(h.__VUE_DEVTOOLS_NEXT_UID__=S),E?.instanceMap.has(S)||(E?.instanceMap.set(S,h),He.value.id===E?.id&&(He.value.instanceMap=E.instanceMap))),E&&r()}),a=cn.on.componentUpdated(async(c,u,d,h)=>{var f,p,g;if(Re.highPerfModeEnabled||(g=(p=(f=c?._instance)==null?void 0:f.type)==null?void 0:p.devtools)!=null&&g.hide||!c||typeof u!="number"&&!u||!h)return;let S=await Bc({app:c,uid:u,instance:h}),E=await mn(c);h&&(h.__VUE_DEVTOOLS_NEXT_UID__==null&&(h.__VUE_DEVTOOLS_NEXT_UID__=S),E?.instanceMap.has(S)||(E?.instanceMap.set(S,h),He.value.id===E?.id&&(He.value.instanceMap=E.instanceMap))),E&&(r(),s())}),l=cn.on.componentRemoved(async(c,u,d,h)=>{var f,p,g;if(Re.highPerfModeEnabled||(g=(p=(f=c?._instance)==null?void 0:f.type)==null?void 0:p.devtools)!=null&&g.hide||!c||typeof u!="number"&&!u||!h)return;let S=await mn(c);if(!S)return;let E=await Bc({app:c,uid:u,instance:h});S?.instanceMap.delete(E),He.value.id===S?.id&&(He.value.instanceMap=S.instanceMap),r()})}]}var u_,d_;(d_=(u_=Jo.target).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__)!=null||(u_.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__=new Set);function D0(t,e){return cn.setupDevToolsPlugin(t,e)}function uu(t,e){let[n,i]=t;if(n.app!==e)return;let r=new zw({plugin:{setupFn:i,descriptor:n},ctx:Kt});n.packageName==="vuex"&&r.on.editInspectorState(s=>{r.sendInspectorState(s.inspectorId)}),i(r)}function N0(t){Jo.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.delete(t)}function ua(t,e){Jo.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(t)||Re.highPerfModeEnabled&&!e?.inspectingComponent||(Jo.target.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(t),hr.forEach(n=>{uu(n,t)}))}oe();var us=ze(),SC=nr();oe();var lr=ze(),cr="__VUE_DEVTOOLS_ROUTER__",Di="__VUE_DEVTOOLS_ROUTER_INFO__",f_,h_;(h_=(f_=lr.target)[Di])!=null||(f_[Di]={currentRoute:null,routes:[]});var p_,m_;(m_=(p_=lr.target)[cr])!=null||(p_[cr]={});var TC=new Proxy(lr.target[Di],{get(t,e){return lr.target[Di][e]}}),AC=new Proxy(lr.target[cr],{get(t,e){if(e==="value")return lr.target[cr]}});function MC(t){let e=new Map;return(t?.getRoutes()||[]).filter(n=>!e.has(n.path)&&e.set(n.path,1))}function du(t){return t.map(e=>{let{path:n,name:i,children:r,meta:s}=e;return r?.length&&(r=du(r)),{path:n,name:i,children:r,meta:s}})}function RC(t){if(t){let{fullPath:e,hash:n,href:i,path:r,name:s,matched:o,params:a,query:l}=t;return{fullPath:e,hash:n,href:i,path:r,name:s,params:a,query:l,matched:du(o)}}return t}function L0(t,e){function n(){var i;let r=(i=t.app)==null?void 0:i.config.globalProperties.$router,s=RC(r?.currentRoute.value),o=du(MC(r)),a=console.warn;console.warn=()=>{},us.target[Di]={currentRoute:s?(0,us.deepClone)(s):{},routes:(0,us.deepClone)(o)},us.target[cr]=r,console.warn=a}n(),cn.on.componentUpdated((0,SC.debounce)(()=>{var i;((i=e.value)==null?void 0:i.app)===t.app&&(n(),!Re.highPerfModeEnabled&&Kt.hooks.callHook("routerInfoUpdated",{state:us.target[Di]}))},200))}function F0(t){return{async getInspectorTree(e){let n={...e,app:He.value.app,rootNodes:[]};return await new Promise(i=>{t.callHookWith(async r=>{await Promise.all(r.map(s=>s(n))),i()},"getInspectorTree")}),n.rootNodes},async getInspectorState(e){let n={...e,app:He.value.app,state:null},i={currentTab:`custom-inspector:${e.inspectorId}`};return await new Promise(r=>{t.callHookWith(async s=>{await Promise.all(s.map(o=>o(n,i))),r()},"getInspectorState")}),n.state},editInspectorState(e){let n=new r0,i={...e,app:He.value.app,set:(r,s=e.path,o=e.state.value,a)=>{n.set(r,s,o,a||n.createDefaultSetCallback(e.state))}};t.callHookWith(r=>{r.forEach(s=>s(i))},"editInspectorState")},sendInspectorState(e){let n=oi(e);t.callHook("sendInspectorState",{inspectorId:e,plugin:{descriptor:n.descriptor,setupFn:()=>({})}})},inspectComponentInspector(){return aw()},cancelInspectComponentInspector(){return ow()},getComponentRenderCode(e){let n=sr(He.value,e);if(n)return typeof n?.type!="function"?n.render.toString():n.type.toString()},scrollToComponent(e){return lw({id:e})},openInEditor:Nw,getVueInspector:fw,toggleApp(e,n){let i=Vn.value.find(r=>r.id===e);i&&(au(e),Zo(i),L0(i,He),su(),ua(i.app,n))},inspectDOM(e){let n=sr(He.value,e);if(n){let[i]=or(n);i&&(WR.target.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__=i)}},updatePluginSettings(e,n,i){Fw(e,n,i)},getPluginSettings(e){return{options:Lw(e),values:S0(e)}}}}oe();var na=ze(),g_,__;(__=(g_=na.target).__VUE_DEVTOOLS_ENV__)!=null||(g_.__VUE_DEVTOOLS_ENV__={vitePluginDetected:!1});function U0(){return na.target.__VUE_DEVTOOLS_ENV__}function wC(t){na.target.__VUE_DEVTOOLS_ENV__={...na.target.__VUE_DEVTOOLS_ENV__,...t}}var y_=m0(),E_,x_;(x_=(E_=K_.target).__VUE_DEVTOOLS_KIT_CONTEXT__)!=null||(E_.__VUE_DEVTOOLS_KIT_CONTEXT__={hooks:y_,get state(){return{...Re,activeAppRecordId:He.id,activeAppRecord:He.value,appRecords:Vn.value}},api:F0(y_)});var Kt=K_.target.__VUE_DEVTOOLS_KIT_CONTEXT__;oe();var B0=ze(),CC=kR(HR(),1),v_,b_,ri=(b_=(v_=B0.target).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__)!=null?b_:v_.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__={id:0,appIds:new Set};function IC(t,e){var n;return((n=t?._component)==null?void 0:n.name)||`App ${e}`}function PC(t){var e,n,i,r;if(t._instance)return t._instance;if((n=(e=t._container)==null?void 0:e._vnode)!=null&&n.component)return(r=(i=t._container)==null?void 0:i._vnode)==null?void 0:r.component}function OC(t){let e=t.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__;e!=null&&(ri.appIds.delete(e),ri.id--)}function DC(t,e){if(t.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__!=null)return t.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__;let n=e??(ri.id++).toString();if(e&&ri.appIds.has(n)){let i=1;for(;ri.appIds.has(`${e}_${i}`);)i++;n=`${e}_${i}`}return ri.appIds.add(n),t.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__=n,n}function NC(t,e){var n,i;let r=PC(t);if(r){ri.id++;let s=IC(t,ri.id.toString()),o=DC(t,(0,CC.default)(s)),[a]=or(r),l={id:o,name:s,types:e,instanceMap:new Map,perfGroupIds:new Map,rootInstance:r,iframe:B0.isBrowser&&document!==a?.ownerDocument?(i=(n=a?.ownerDocument)==null?void 0:n.location)==null?void 0:i.pathname:void 0};t.__VUE_DEVTOOLS_NEXT_APP_RECORD__=l;let c=`${l.id}:root`;return l.instanceMap.set(c,l.rootInstance),l.rootInstance.__VUE_DEVTOOLS_NEXT_UID__=c,l}else return{}}oe();function k0(t,e=!1){if(e){let a=function(c){try{let u=window.parent.__VUE_DEVTOOLS_GLOBAL_HOOK__;u&&c(u)}catch{}};var n=a;let l={id:"vue-devtools-next",devtoolsVersion:"7.0",on:(c,u)=>{a(d=>{d.on(c,u)})},once:(c,u)=>{a(d=>{d.once(c,u)})},off:(c,u)=>{a(d=>{d.off(c,u)})},emit:(c,...u)=>{a(d=>{d.emit(c,...u)})}};Object.defineProperty(t,"__VUE_DEVTOOLS_GLOBAL_HOOK__",{get(){return l},configurable:!0})}function i(a){if(!a.__vdevtools__injected)try{a.__vdevtools__injected=!0;let l=()=>{try{a.contentWindow.__VUE_DEVTOOLS_IFRAME__=a;let c=a.contentDocument.createElement("script");c.textContent=`;(${k0.toString()})(window, true)`,a.contentDocument.documentElement.appendChild(c),c.parentNode.removeChild(c)}catch{}};l(),a.addEventListener("load",()=>l())}catch{}}function r(){if(typeof window>"u")return;let a=Array.from(document.querySelectorAll("iframe:not([data-vue-devtools-ignore])"));for(let l of a)i(l)}r();let s=0,o=setInterval(()=>{r(),s++,s>=5&&clearInterval(o)},1e3)}function V0(){var t;k0(an.target),rr({vitePluginDetected:U0().vitePluginDetected});let e=((t=an.target.__VUE_DEVTOOLS_GLOBAL_HOOK__)==null?void 0:t.id)==="vue-devtools-next";if(an.target.__VUE_DEVTOOLS_GLOBAL_HOOK__&&e)return;let n=Vw();if(an.target.__VUE_DEVTOOLS_HOOK_REPLAY__)try{an.target.__VUE_DEVTOOLS_HOOK_REPLAY__.forEach(i=>i(n)),an.target.__VUE_DEVTOOLS_HOOK_REPLAY__=[]}catch(i){console.error("[vue-devtools] Error during hook replay",i)}n.once("init",i=>{an.target.__VUE_DEVTOOLS_VUE2_APP_DETECTED__=!0,console.log("%c[_____Vue DevTools v7 log_____]","color: red; font-bold: 600; font-size: 16px;"),console.log("%cVue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work.","font-bold: 500; font-size: 14px;");let r="https://chromewebstore.google.com/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp",s="https://addons.mozilla.org/firefox/addon/vue-js-devtools-v6-legacy";console.log(`%cThe legacy version of chrome extension that supports both Vue 2 and Vue 3 has been moved to %c ${r}`,"font-size: 14px;","text-decoration: underline; cursor: pointer;font-size: 14px;"),console.log(`%cThe legacy version of firefox extension that supports both Vue 2 and Vue 3 has been moved to %c ${s}`,"font-size: 14px;","text-decoration: underline; cursor: pointer;font-size: 14px;"),console.log("%cPlease install and enable only the legacy version for your Vue2 app.","font-bold: 500; font-size: 14px;"),console.log("%c[_____Vue DevTools v7 log_____]","color: red; font-bold: 600; font-size: 16px;")}),cn.on.setupDevtoolsPlugin((i,r)=>{var s;b0(i,r);let{app:o}=(s=He)!=null?s:{};i.settings&&T0(i.id,i.settings),o&&uu([i,r],o)}),zR(()=>{hr.filter(([r])=>r.id!=="components").forEach(([r,s])=>{n.emit("devtools-plugin:setup",r,s,{target:"legacy"})})}),cn.on.vueAppInit(async(i,r,s)=>{let a={...NC(i,s),app:i,version:r};E0(a),Vn.value.length===1&&(Zo(a),au(a.id),L0(a,He),ua(a.app)),D0(...O0(a.app)),rr({connected:!0}),n.apps.push(i)}),cn.on.vueAppUnmount(async i=>{let r=Vn.value.filter(s=>s.app!==i);r.length===0&&rr({connected:!1}),x0(i),OC(i),He.value.app===i&&(Zo(r[0]),Kt.hooks.callHook("sendActiveAppUpdatedToClient")),an.target.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.splice(an.target.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.indexOf(i),1),N0(i)}),Gw(n),an.target.__VUE_DEVTOOLS_GLOBAL_HOOK__?an.isNuxtApp||Object.assign(__VUE_DEVTOOLS_GLOBAL_HOOK__,n):Object.defineProperty(an.target,"__VUE_DEVTOOLS_GLOBAL_HOOK__",{get(){return n},configurable:!0})}function LC(t){return new Promise(e=>{if(Re.connected&&Re.clientConnected){t(),e();return}Kt.hooks.hook("devtoolsConnectedUpdated",({state:n})=>{n.connected&&n.clientConnected&&(t(),e())})})}oe();function G0(t){Re.highPerfModeEnabled=t??!Re.highPerfModeEnabled,!t&&He.value&&ua(He.value.app)}oe();oe();var FC=ze();function UC(t){let e=new Set,n=t._custom.value;for(let i=0;i<n.length;i++){let r=n[i];e.add(da(r))}return e}function BC(t){let e=new Map,n=t._custom.value;for(let i=0;i<n.length;i++){let{key:r,value:s}=n[i];e.set(r,da(s))}return e}function da(t){if(t!==_s){if(t===ys)return Number.POSITIVE_INFINITY;if(t===Es)return Number.NEGATIVE_INFINITY;if(t===xs)return Number.NaN;if(t&&t._custom){let{_custom:e}=t;return e.type==="component"?He.value.instanceMap.get(e.id):e.type==="map"?BC(t):e.type==="set"?UC(t):e.type==="bigint"?BigInt(e.value):da(e.value)}else if(s_.test(t)){let[,e]=s_.exec(t);return Symbol.for(e)}else if(Qo.test(t)){let[,e,n,,i]=Qo.exec(t),r=new FC.target[e](n);return e==="Error"&&i&&(r.stack=i),r}else return t}}function H0(t,e){return da(e)}function fa(t,e=!0){let n=typeof t;if(t==null||t===_s||t==="undefined")return"null";if(n==="boolean"||n==="number"||t===ys||t===Es||t===xs)return"literal";if(t?._custom)return e||t._custom.display!=null||t._custom.displayText!=null?"custom":fa(t._custom.value);if(typeof t=="string"){let i=Qo.exec(t);if(i){let[,r]=i;return`native ${r}`}else return"string"}else return Array.isArray(t)||t?._isArray?"array":la(t)?"plain-object":"unknown"}function z0(t,e=!1,n){var i,r,s;let{customClass:o}=n??{},a,l=fa(t,!1);if(l!=="custom"&&t?._custom&&(t=t._custom.value),a=Qw(t))return a;if(l==="custom")return((i=t._custom.value)==null?void 0:i._custom)&&z0(t._custom.value,e,n)||t._custom.displayText||t._custom.display;if(l==="array")return`Array[${t.length}]`;if(l==="plain-object")return`Object${Object.keys(t).length?"":" (empty)"}`;if(l?.includes("native"))return ca((r=Qo.exec(t))==null?void 0:r[2]);if(typeof t=="string"){let c=t.match(Xw);c?t=ds(c[1]):e?t=`<span>"</span>${o?.string?`<span class=${o.string}>${ds(t)}</span>`:ds(t)}<span>"</span>`:t=o?.string?`<span class="${(s=o?.string)!=null?s:""}">${ds(t)}</span>`:ds(t)}return t}function ds(t){return ca(t).replace(/ /g,"&nbsp;").replace(/\n/g,"<span>\\n</span>")}function W0(t){var e,n,i;let r,s=fa(t)==="custom",o={};if(s){let a=t,l=(e=a._custom)==null?void 0:e.value,c=(n=a._custom)==null?void 0:n.type,u=typeof l=="object"&&l!==null&&"_custom"in l?W0(l):{inherit:void 0,value:void 0,customType:void 0};o=u.inherit||((i=a._custom)==null?void 0:i.fields)||{},t=u.value||l,r=u.customType||c}return t&&t._isArray&&(t=t.items),{value:t,inherit:o,customType:r}}function kC(t,e){return e==="bigint"||e==="date"?t:eC(JSON.stringify(t))}function VC(t,e){return e==="bigint"?BigInt(t):e==="date"?new Date(t):JSON.parse(tC(t),H0)}oe();var GC=ze();function $0(t){Re.devtoolsClientDetected={...Re.devtoolsClientDetected,...t};let e=Object.values(Re.devtoolsClientDetected).some(Boolean);G0(!e)}var S_,T_;(T_=(S_=GC.target).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__)!=null||(S_.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__=$0);oe();var Ht=ze(),fu=Ig();oe();oe();oe();oe();oe();var HC=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,e){this.keyToValue.set(t,e),this.valueToKey.set(e,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},X0=class{constructor(t){this.generateIdentifier=t,this.kv=new HC}register(t,e){this.kv.getByValue(t)||(e||(e=this.generateIdentifier(t)),this.kv.set(e,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}},zC=class extends X0{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,e){typeof e=="object"?(e.allowProps&&this.classToAllowedProps.set(t,e.allowProps),super.register(t,e.identifier)):super.register(t,e)}getAllowedProps(t){return this.classToAllowedProps.get(t)}};oe();oe();function WC(t){if("values"in Object)return Object.values(t);let e=[];for(let n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e}function $C(t,e){let n=WC(t);if("find"in n)return n.find(e);let i=n;for(let r=0;r<i.length;r++){let s=i[r];if(e(s))return s}}function ur(t,e){Object.entries(t).forEach(([n,i])=>e(i,n))}function Ko(t,e){return t.indexOf(e)!==-1}function A_(t,e){for(let n=0;n<t.length;n++){let i=t[n];if(e(i))return i}}var XC=class{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return $C(this.transfomers,e=>e.isApplicable(t))}findByName(t){return this.transfomers[t]}};oe();oe();var YC=t=>Object.prototype.toString.call(t).slice(8,-1),Y0=t=>typeof t>"u",qC=t=>t===null,ps=t=>typeof t!="object"||t===null||t===Object.prototype?!1:Object.getPrototypeOf(t)===null?!0:Object.getPrototypeOf(t)===Object.prototype,qc=t=>ps(t)&&Object.keys(t).length===0,ai=t=>Array.isArray(t),KC=t=>typeof t=="string",jC=t=>typeof t=="number"&&!isNaN(t),ZC=t=>typeof t=="boolean",JC=t=>t instanceof RegExp,ms=t=>t instanceof Map,gs=t=>t instanceof Set,q0=t=>YC(t)==="Symbol",QC=t=>t instanceof Date&&!isNaN(t.valueOf()),eI=t=>t instanceof Error,M_=t=>typeof t=="number"&&isNaN(t),tI=t=>ZC(t)||qC(t)||Y0(t)||jC(t)||KC(t)||q0(t),nI=t=>typeof t=="bigint",iI=t=>t===1/0||t===-1/0,rI=t=>ArrayBuffer.isView(t)&&!(t instanceof DataView),sI=t=>t instanceof URL;oe();var K0=t=>t.replace(/\./g,"\\."),Hc=t=>t.map(String).map(K0).join("."),hs=t=>{let e=[],n="";for(let r=0;r<t.length;r++){let s=t.charAt(r);if(s==="\\"&&t.charAt(r+1)==="."){n+=".",r++;continue}if(s==="."){e.push(n),n="";continue}n+=s}let i=n;return e.push(i),e};oe();function Cn(t,e,n,i){return{isApplicable:t,annotation:e,transform:n,untransform:i}}var j0=[Cn(Y0,"undefined",()=>null,()=>{}),Cn(nI,"bigint",t=>t.toString(),t=>typeof BigInt<"u"?BigInt(t):(console.error("Please add a BigInt polyfill."),t)),Cn(QC,"Date",t=>t.toISOString(),t=>new Date(t)),Cn(eI,"Error",(t,e)=>{let n={name:t.name,message:t.message};return e.allowedErrorProps.forEach(i=>{n[i]=t[i]}),n},(t,e)=>{let n=new Error(t.message);return n.name=t.name,n.stack=t.stack,e.allowedErrorProps.forEach(i=>{n[i]=t[i]}),n}),Cn(JC,"regexp",t=>""+t,t=>{let e=t.slice(1,t.lastIndexOf("/")),n=t.slice(t.lastIndexOf("/")+1);return new RegExp(e,n)}),Cn(gs,"set",t=>[...t.values()],t=>new Set(t)),Cn(ms,"map",t=>[...t.entries()],t=>new Map(t)),Cn(t=>M_(t)||iI(t),"number",t=>M_(t)?"NaN":t>0?"Infinity":"-Infinity",Number),Cn(t=>t===0&&1/t===-1/0,"number",()=>"-0",Number),Cn(sI,"URL",t=>t.toString(),t=>new URL(t))];function ha(t,e,n,i){return{isApplicable:t,annotation:e,transform:n,untransform:i}}var Z0=ha((t,e)=>q0(t)?!!e.symbolRegistry.getIdentifier(t):!1,(t,e)=>["symbol",e.symbolRegistry.getIdentifier(t)],t=>t.description,(t,e,n)=>{let i=n.symbolRegistry.getValue(e[1]);if(!i)throw new Error("Trying to deserialize unknown symbol");return i}),oI=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((t,e)=>(t[e.name]=e,t),{}),J0=ha(rI,t=>["typed-array",t.constructor.name],t=>[...t],(t,e)=>{let n=oI[e[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(t)});function Q0(t,e){return t?.constructor?!!e.classRegistry.getIdentifier(t.constructor):!1}var ey=ha(Q0,(t,e)=>["class",e.classRegistry.getIdentifier(t.constructor)],(t,e)=>{let n=e.classRegistry.getAllowedProps(t.constructor);if(!n)return{...t};let i={};return n.forEach(r=>{i[r]=t[r]}),i},(t,e,n)=>{let i=n.classRegistry.getValue(e[1]);if(!i)throw new Error(`Trying to deserialize unknown class '${e[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(i.prototype),t)}),ty=ha((t,e)=>!!e.customTransformerRegistry.findApplicable(t),(t,e)=>["custom",e.customTransformerRegistry.findApplicable(t).name],(t,e)=>e.customTransformerRegistry.findApplicable(t).serialize(t),(t,e,n)=>{let i=n.customTransformerRegistry.findByName(e[1]);if(!i)throw new Error("Trying to deserialize unknown custom value");return i.deserialize(t)}),aI=[ey,Z0,ty,J0],R_=(t,e)=>{let n=A_(aI,r=>r.isApplicable(t,e));if(n)return{value:n.transform(t,e),type:n.annotation(t,e)};let i=A_(j0,r=>r.isApplicable(t,e));if(i)return{value:i.transform(t,e),type:i.annotation}},ny={};j0.forEach(t=>{ny[t.annotation]=t});var lI=(t,e,n)=>{if(ai(e))switch(e[0]){case"symbol":return Z0.untransform(t,e,n);case"class":return ey.untransform(t,e,n);case"custom":return ty.untransform(t,e,n);case"typed-array":return J0.untransform(t,e,n);default:throw new Error("Unknown transformation: "+e)}else{let i=ny[e];if(!i)throw new Error("Unknown transformation: "+e);return i.untransform(t,n)}};oe();var ir=(t,e)=>{if(e>t.size)throw new Error("index out of bounds");let n=t.keys();for(;e>0;)n.next(),e--;return n.next().value};function iy(t){if(Ko(t,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Ko(t,"prototype"))throw new Error("prototype is not allowed as a property");if(Ko(t,"constructor"))throw new Error("constructor is not allowed as a property")}var cI=(t,e)=>{iy(e);for(let n=0;n<e.length;n++){let i=e[n];if(gs(t))t=ir(t,+i);else if(ms(t)){let r=+i,s=+e[++n]==0?"key":"value",o=ir(t,r);switch(s){case"key":t=o;break;case"value":t=t.get(o);break}}else t=t[i]}return t},Kc=(t,e,n)=>{if(iy(e),e.length===0)return n(t);let i=t;for(let s=0;s<e.length-1;s++){let o=e[s];if(ai(i)){let a=+o;i=i[a]}else if(ps(i))i=i[o];else if(gs(i)){let a=+o;i=ir(i,a)}else if(ms(i)){if(s===e.length-2)break;let l=+o,c=+e[++s]==0?"key":"value",u=ir(i,l);switch(c){case"key":i=u;break;case"value":i=i.get(u);break}}}let r=e[e.length-1];if(ai(i)?i[+r]=n(i[+r]):ps(i)&&(i[r]=n(i[r])),gs(i)){let s=ir(i,+r),o=n(s);s!==o&&(i.delete(s),i.add(o))}if(ms(i)){let s=+e[e.length-2],o=ir(i,s);switch(+r==0?"key":"value"){case"key":{let l=n(o);i.set(l,i.get(o)),l!==o&&i.delete(o);break}case"value":{i.set(o,n(i.get(o)));break}}}return t};function jc(t,e,n=[]){if(!t)return;if(!ai(t)){ur(t,(s,o)=>jc(s,e,[...n,...hs(o)]));return}let[i,r]=t;r&&ur(r,(s,o)=>{jc(s,e,[...n,...hs(o)])}),e(i,n)}function uI(t,e,n){return jc(e,(i,r)=>{t=Kc(t,r,s=>lI(s,i,n))}),t}function dI(t,e){function n(i,r){let s=cI(t,hs(r));i.map(hs).forEach(o=>{t=Kc(t,o,()=>s)})}if(ai(e)){let[i,r]=e;i.forEach(s=>{t=Kc(t,hs(s),()=>t)}),r&&ur(r,n)}else ur(e,n);return t}var fI=(t,e)=>ps(t)||ai(t)||ms(t)||gs(t)||Q0(t,e);function hI(t,e,n){let i=n.get(t);i?i.push(e):n.set(t,[e])}function pI(t,e){let n={},i;return t.forEach(r=>{if(r.length<=1)return;e||(r=r.map(a=>a.map(String)).sort((a,l)=>a.length-l.length));let[s,...o]=r;s.length===0?i=o.map(Hc):n[Hc(s)]=o.map(Hc)}),i?qc(n)?[i]:[i,n]:qc(n)?void 0:n}var ry=(t,e,n,i,r=[],s=[],o=new Map)=>{var a;let l=tI(t);if(!l){hI(t,r,e);let p=o.get(t);if(p)return i?{transformedValue:null}:p}if(!fI(t,n)){let p=R_(t,n),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:t};return l||o.set(t,g),g}if(Ko(s,t))return{transformedValue:null};let c=R_(t,n),u=(a=c?.value)!=null?a:t,d=ai(u)?[]:{},h={};ur(u,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);let S=ry(p,e,n,i,[...r,g],[...s,t],o);d[g]=S.transformedValue,ai(S.annotations)?h[g]=S.annotations:ps(S.annotations)&&ur(S.annotations,(E,M)=>{h[K0(g)+"."+M]=E})});let f=qc(h)?{transformedValue:d,annotations:c?[c.type]:void 0}:{transformedValue:d,annotations:c?[c.type,h]:h};return l||o.set(t,f),f};oe();oe();function pa(t){return Object.prototype.toString.call(t).slice(8,-1)}function w_(t){return pa(t)==="Array"}function mI(t){if(pa(t)!=="Object")return!1;let e=Object.getPrototypeOf(t);return!!e&&e.constructor===Object&&e===Object.prototype}function gI(t){return pa(t)==="Null"}function _I(t,e,n,i,r){return s=>t(s)||e(s)||!!n&&n(s)||!!i&&i(s)||!!r&&r(s)}function yI(t){return pa(t)==="Undefined"}var w2=_I(gI,yI);function EI(t,e,n,i,r){let s={}.propertyIsEnumerable.call(i,e)?"enumerable":"nonenumerable";s==="enumerable"&&(t[e]=n),r&&s==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function Zc(t,e={}){if(w_(t))return t.map(r=>Zc(r,e));if(!mI(t))return t;let n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);return[...n,...i].reduce((r,s)=>{if(w_(e.props)&&!e.props.includes(s))return r;let o=t[s],a=Zc(o,e);return EI(r,s,a,t,e.nonenumerable),r},{})}var xe=class{constructor({dedupe:t=!1}={}){this.classRegistry=new zC,this.symbolRegistry=new X0(e=>{var n;return(n=e.description)!=null?n:""}),this.customTransformerRegistry=new XC,this.allowedErrorProps=[],this.dedupe=t}serialize(t){let e=new Map,n=ry(t,e,this,this.dedupe),i={json:n.transformedValue};n.annotations&&(i.meta={...i.meta,values:n.annotations});let r=pI(e,this.dedupe);return r&&(i.meta={...i.meta,referentialEqualities:r}),i}deserialize(t){let{json:e,meta:n}=t,i=Zc(e);return n?.values&&(i=uI(i,n.values,this)),n?.referentialEqualities&&(i=dI(i,n.referentialEqualities)),i}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,e){this.classRegistry.register(t,e)}registerSymbol(t,e){this.symbolRegistry.register(t,e)}registerCustom(t,e){this.customTransformerRegistry.register({name:e,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}};xe.defaultInstance=new xe;xe.serialize=xe.defaultInstance.serialize.bind(xe.defaultInstance);xe.deserialize=xe.defaultInstance.deserialize.bind(xe.defaultInstance);xe.stringify=xe.defaultInstance.stringify.bind(xe.defaultInstance);xe.parse=xe.defaultInstance.parse.bind(xe.defaultInstance);xe.registerClass=xe.defaultInstance.registerClass.bind(xe.defaultInstance);xe.registerSymbol=xe.defaultInstance.registerSymbol.bind(xe.defaultInstance);xe.registerCustom=xe.defaultInstance.registerCustom.bind(xe.defaultInstance);xe.allowErrorProps=xe.defaultInstance.allowErrorProps.bind(xe.defaultInstance);var C2=xe.serialize,I2=xe.deserialize,P2=xe.stringify,O2=xe.parse,D2=xe.registerClass,N2=xe.registerCustom,L2=xe.registerSymbol,F2=xe.allowErrorProps;oe();var C_="__devtools-kit-broadcast-messaging-event-key__",xI="__devtools-kit:broadcast-channel__";function I_(){let t=new BroadcastChannel(xI);return{post:e=>{t.postMessage(xe.stringify({event:C_,data:e}))},on:e=>{t.onmessage=n=>{let i=xe.parse(n.data);i.event===C_&&e(i.data)}}}}oe();oe();var pr=ze(),sy="electron:client-context",oy="electron:proxy-context",ay="electron:server-context",si={CLIENT_TO_PROXY:"client->proxy",PROXY_TO_CLIENT:"proxy->client",PROXY_TO_SERVER:"proxy->server",SERVER_TO_PROXY:"server->proxy"};function vI(){return pr.target[sy]}function bI(t){pr.target[sy]=t}function SI(){return pr.target[oy]}function TI(t){pr.target[oy]=t}function AI(){return pr.target[ay]}function MI(t){pr.target[ay]=t}function RI(){let t=vI();return{post:e=>{t.emit(si.CLIENT_TO_PROXY,xe.stringify(e))},on:e=>{t.on(si.PROXY_TO_CLIENT,n=>{e(xe.parse(n))})}}}oe();function wI(){let t=SI();return{post:e=>{},on:e=>{t.on(si.SERVER_TO_PROXY,n=>{t.broadcast.emit(si.PROXY_TO_CLIENT,n)}),t.on(si.CLIENT_TO_PROXY,n=>{t.broadcast.emit(si.PROXY_TO_SERVER,n)})}}}oe();function CI(){let t=AI();return{post:e=>{t.emit(si.SERVER_TO_PROXY,xe.stringify(e))},on:e=>{t.on(si.PROXY_TO_SERVER,n=>{e(xe.parse(n))})}}}oe();oe();var ly=ze(),cy="electron:client-context",ia={CLIENT_TO_PROXY:"client->proxy",PROXY_TO_CLIENT:"proxy->client",PROXY_TO_SERVER:"proxy->server",SERVER_TO_PROXY:"server->proxy"};function II(){return ly.target[cy]}function uy(t){ly.target[cy]=t}function PI(){let t=!1,e=null,n=null,i=null;function r(){try{clearTimeout(n),e=chrome.runtime.connect({name:`${chrome.devtools.inspectedWindow.tabId}`}),uy(e),t=!1,e?.onMessage.addListener(i),e.onDisconnect.addListener(()=>{t=!0,e?.onMessage.removeListener(i),n=setTimeout(r,1e3)})}catch{t=!0}}return r(),{post:s=>{t||e?.postMessage(xe.stringify(s))},on:s=>{i=o=>{t||s(xe.parse(o))},e?.onMessage.addListener(i)}}}oe();function OI(){let t=chrome.runtime.connect({name:"content-script"});function e(i){window.postMessage({source:ia.PROXY_TO_SERVER,payload:i},"*")}function n(i){if(i.data&&i.data.source===ia.SERVER_TO_PROXY)try{t.postMessage(i.data.payload)}catch{}}return t.onMessage.addListener(e),window.addEventListener("message",n),t.onDisconnect.addListener(()=>{window.removeEventListener("message",n),e(xe.stringify({event:"shutdown"}))}),e(xe.stringify({event:"init"})),{post:i=>{},on:i=>{}}}oe();function DI(){return{post:t=>{window.postMessage({source:ia.SERVER_TO_PROXY,payload:xe.stringify(t)},"*")},on:t=>{let e=n=>{n.data.source===ia.PROXY_TO_SERVER&&n.data.payload&&t(xe.parse(n.data.payload))};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}}}}oe();var NI=ze();oe();var dy=ze(),ra="__devtools-kit-iframe-messaging-event-key__",fy="iframe:server-context";function P_(){return dy.target[fy]}function LI(t){dy.target[fy]=t}function FI(){return NI.isBrowser?{post:t=>window.parent.postMessage(xe.stringify({event:ra,data:t}),"*"),on:t=>window.addEventListener("message",e=>{try{let n=xe.parse(e.data);e.source===window.parent&&n.event===ra&&t(n.data)}catch{}})}:{post:t=>{},on:t=>{}}}oe();var UI=ze();function BI(){return UI.isBrowser?{post:t=>{var e;let n=P_();(e=n?.contentWindow)==null||e.postMessage(xe.stringify({event:ra,data:t}),"*")},on:t=>{window.addEventListener("message",e=>{let n=P_();try{let i=xe.parse(e.data);e.source===n?.contentWindow&&i.event===ra&&t(i.data)}catch{}})}}:{post:t=>{},on:t=>{}}}oe();oe();var ma=ze(),sa="__devtools-kit-vite-messaging-event-key__",hy="vite:client-context",py="vite:server-context";function kI(){return ma.target[hy]}function VI(t){ma.target[hy]=t}function GI(){return ma.target[py]}function HI(t){ma.target[py]=t}function zI(){let t=kI();return{post:e=>{t?.send(sa,xe.stringify(e))},on:e=>{t?.on(sa,n=>{e(xe.parse(n))})}}}oe();function WI(){var t;let e=GI(),n=(t=e.hot)!=null?t:e.ws;return{post:i=>n?.send(sa,xe.stringify(i)),on:i=>n?.on(sa,r=>{i(xe.parse(r))})}}var O_,D_;(D_=(O_=Ht.target).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__)!=null||(O_.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__=[]);var N_,L_;(L_=(N_=Ht.target).__VUE_DEVTOOLS_KIT_RPC_CLIENT__)!=null||(N_.__VUE_DEVTOOLS_KIT_RPC_CLIENT__=null);var F_,U_;(U_=(F_=Ht.target).__VUE_DEVTOOLS_KIT_RPC_SERVER__)!=null||(F_.__VUE_DEVTOOLS_KIT_RPC_SERVER__=null);var B_,k_;(k_=(B_=Ht.target).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__)!=null||(B_.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__=null);var V_,G_;(G_=(V_=Ht.target).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__)!=null||(V_.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__=null);var H_,z_;(z_=(H_=Ht.target).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__)!=null||(H_.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__=null);function $I(t){Ht.target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__=t}function my(t){Ht.target.__VUE_DEVTOOLS_KIT_RPC_SERVER__=t}function XI(){return Ht.target.__VUE_DEVTOOLS_KIT_RPC_CLIENT__}function gy(){return Ht.target.__VUE_DEVTOOLS_KIT_RPC_SERVER__}function _y(t){Ht.target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__=t}function yy(t){Ht.target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__=t}function YI(){return Ht.target.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__}function qI(){return Ht.target.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__}function hu(t,e="client"){let n={iframe:{client:FI,server:BI}[e],electron:{client:RI,proxy:wI,server:CI}[e],vite:{client:zI,server:WI}[e],broadcast:{client:I_,server:I_}[e],extension:{client:PI,proxy:OI,server:DI}[e]}[t];return n()}function KI(t,e={}){let{channel:n,options:i,preset:r}=e,s=r?hu(r):n,o=(0,fu.createBirpc)(t,{...i,...s,timeout:-1});if(r==="vite"){_y(o);return}return $I(o),o}function jI(t,e={}){let{channel:n,options:i,preset:r}=e,s=r?hu(r,"server"):n,o=gy();if(o)o.updateChannels(a=>{a.push(s)});else{let a=(0,fu.createBirpcGroup)(t,[s],{...i,timeout:-1});if(r==="vite"){yy(a);return}my(a)}}function ZI(t={}){let{channel:e,options:n,preset:i}=t,r=i?hu(i,"proxy"):e;return(0,fu.createBirpc)({},{...n,...r,timeout:-1})}oe();oe();oe();function JI(t){let e="",n=null;try{e=Function.prototype.toString.call(t),n=String.prototype.match.call(e,/\([\s\S]*?\)/)}catch{}let i=n&&n[0],r=typeof i=="string"?i:"(?)",s=typeof t.name=="string"?t.name:"";return{_custom:{type:"function",displayText:`<span style="opacity:.8;margin-right:5px;">function</span> <span style="white-space:nowrap;">${ca(s)}${r}</span>`,tooltipText:e.trim()?`<pre>${e}</pre>`:null}}}function QI(t){let e=BigInt.prototype.toString.call(t);return{_custom:{type:"bigint",displayText:`BigInt(${e})`,value:e}}}function eP(t){let e=new Date(t.getTime());return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),{_custom:{type:"date",displayText:Date.prototype.toString.call(t),value:e.toISOString().slice(0,-1)}}}function tP(t){return{_custom:{type:"map",displayText:"Map",value:Object.fromEntries(t),readOnly:!0,fields:{abstract:!0}}}}function nP(t){let e=Array.from(t);return{_custom:{type:"set",displayText:`Set[${e.length}]`,value:e,readOnly:!0}}}function iP(t){let e={},n=t.getters||{},i=Object.keys(n);for(let r=0;r<i.length;r++){let s=i[r];Object.defineProperty(e,s,{enumerable:!0,get:()=>{try{return n[s]}catch(o){return o}}})}return e}function rP(t){if(t.length)return t.reduce((e,n)=>{let i=n.type||"data",r=e[i]=e[i]||{};return r[n.key]=n.value,e},{})}function sP(t){let e={},n=t.length;for(let i=0;i<n;i++){let r=t.item(i);e[r.name]=r.value}return e}function oP(t){return{_custom:{type:"store",displayText:"Store",value:{state:t.state,getters:iP(t)},fields:{abstract:!0}}}}function aP(t){return{_custom:{type:"router",displayText:"VueRouter",value:{options:t.options,currentRoute:t.currentRoute},fields:{abstract:!0}}}}function lP(t){t._&&(t=t._);let e=I0(t);return{_custom:{type:"component",id:t.__VUE_DEVTOOLS_NEXT_UID__,displayText:gn(t),tooltipText:"Component instance",value:rP(e),fields:{abstract:!0}}}}function cP(t){let e=XR(t);return e?t.name&&t.__file&&(e+=` <span>(${t.__file})</span>`):e="<i>Unknown Component</i>",{_custom:{type:"component-definition",displayText:e,tooltipText:"Component definition",...t.__file?{file:t.__file}:{}}}}function uP(t){try{return{_custom:{type:"HTMLElement",displayText:`<span class="opacity-30">&lt;</span><span class="text-blue-500">${t.tagName.toLowerCase()}</span><span class="opacity-30">&gt;</span>`,value:sP(t.attributes)}}}catch{return{_custom:{type:"HTMLElement",displayText:`<span class="text-blue-500">${String(t)}</span>`}}}}function dP(t){if(ln(t,"_value",!0))return t._value;if(ln(t,"value",!0))return t.value}function fP(t){var e,n,i,r;let s=w0(t);if(s.ref||s.computed||s.reactive){let a=s.computed?"Computed":s.ref?"Ref":s.reactive?"Reactive":null,l=C0(s.reactive?t:dP(t)),c=ln(t,"effect")?((n=(e=t.effect)==null?void 0:e.raw)==null?void 0:n.toString())||((r=(i=t.effect)==null?void 0:i.fn)==null?void 0:r.toString()):null;return{_custom:{type:a?.toLowerCase(),stateTypeName:a,value:l,...c?{tooltipText:`<span class="font-mono">${c}</span>`}:{}}}}if(ln(t,"__asyncLoader")&&typeof t.__asyncLoader=="function")return{_custom:{type:"component-definition",display:"Async component definition"}}}function hP(t,e,n,i){var r;if(t==="compilerOptions")return;let s=this[t],o=typeof s;if(Array.isArray(s)){let a=s.length;return a>a_?{_isArray:!0,length:a,items:s.slice(0,a_)}:s}else{if(typeof s=="string")return s.length>o_?`${s.substring(0,o_)}... (${s.length} total length)`:s;if(o==="undefined")return _s;if(s===Number.POSITIVE_INFINITY)return ys;if(s===Number.NEGATIVE_INFINITY)return Es;if(typeof s=="function")return JI(s);if(o==="symbol")return`[native Symbol ${Symbol.prototype.toString.call(s)}]`;if(typeof s=="bigint")return QI(s);if(s!==null&&typeof s=="object"){let a=Object.prototype.toString.call(s);if(a==="[object Map]")return tP(s);if(a==="[object Set]")return nP(s);if(a==="[object RegExp]")return`[native RegExp ${RegExp.prototype.toString.call(s)}]`;if(a==="[object Date]")return eP(s);if(a==="[object Error]")return`[native Error ${s.message}<>${s.stack}]`;if(ln(s,"state",!0)&&ln(s,"_vm",!0))return oP(s);if(s.constructor&&s.constructor.name==="VueRouter")return aP(s);if(A0(s)){let c=lP(s),u=i?.get(s);return u&&u<n?`[[CircularRef]] <${c._custom.displayText}>`:(i?.set(s,n),c)}else{if(ln(s,"render",!0)&&typeof s.render=="function")return cP(s);if(s.constructor&&s.constructor.name==="VNode")return`[native VNode <${s.tag}>]`;if(typeof HTMLElement<"u"&&s instanceof HTMLElement)return uP(s);if(((r=s.constructor)==null?void 0:r.name)==="Store"&&"_wrappedGetters"in s)return"[object Store]";if(ln(s,"currentRoute",!0))return"[object Router]"}let l=fP(s);if(l!=null)return l}else if(Number.isNaN(s))return xs}return nC(s)}oe();var Yo=2*1024*1024;function W_(t,e){return e==="[object Object]"}function pP(t,e){return e==="[object Array]"}function mP(t){var e;let n=(e=t?.constructor)==null?void 0:e.name;return n==="Dep"&&"activeLink"in t||n==="Link"&&"dep"in t}function Jc(t,e,n,i,r=0,s=new Map){let o,a,l,c,u,d=i.get(t);if(d!=null)return d;let h=n.length,f=Object.prototype.toString.call(t);if(W_(t,f)){if(mP(t))return h;o={},i.set(t,h),n.push(o);let p=Object.keys(t);for(c=0,u=p.length;c<u;c++){if(a=p[c],a==="compilerOptions")return h;l=t[a];let g=l!=null&&W_(l,Object.prototype.toString.call(t))&&A0(l);try{e&&(l=e.call(t,a,l,r,s))}catch(S){l=S}o[a]=Jc(l,e,n,i,r+1,s),g&&s.delete(l)}}else if(pP(t,f))for(o=[],i.set(t,h),n.push(o),c=0,u=t.length;c<u;c++){try{l=t[c],e&&(l=e.call(t,c,l,r,s))}catch(p){l=p}o[c]=Jc(l,e,n,i,r+1,s)}else n.push(t);return h}function gP(t,e=null){let n=t.length,i,r,s,o,a,l;for(;n--;)if(s=t[n],l=Object.prototype.toString.call(s),l==="[object Object]"){let c=Object.keys(s);for(i=0,r=c.length;i<r;i++)o=c[i],a=t[s[o]],e&&(a=e.call(s,o,a)),s[o]=a}else if(l==="[object Array]")for(i=0,r=s.length;i<r;i++)a=t[s[i]],e&&(a=e.call(s,i,a)),s[i]=a}function _P(t,e=null,n=null){let i;try{i=arguments.length===1?JSON.stringify(t):JSON.stringify(t,(r,s)=>{var o;return(o=e?.(r,s))==null?void 0:o.call(this)},n)}catch{i=yP(t,e,n)}if(i.length>Yo){let r=Math.ceil(i.length/Yo),s=[];for(let o=0;o<r;o++)s.push(i.slice(o*Yo,(o+1)*Yo));return s}return i}function yP(t,e=null,n=null){let i=[];return Jc(t,e,i,new Map),n?` ${JSON.stringify(i,null,n)}`:` ${JSON.stringify(i)}`}function $_(t,e=null){if(Array.isArray(t)&&(t=t.join("")),/^\s/.test(t)){let i=JSON.parse(t);return gP(i,e),i[0]}else return arguments.length===1?JSON.parse(t):JSON.parse(t,e)}function EP(t){return _P(t,hP)}function xP(t,e=!1){return t==null?{}:e?$_(t,H0):$_(t)}var vP={hook:cn,init:()=>{V0()},get ctx(){return Kt},get api(){return Kt.api}}});var Sy=ge((q2,by)=>{"use strict";var pu=Object.defineProperty,bP=Object.getOwnPropertyDescriptor,SP=Object.getOwnPropertyNames,TP=Object.prototype.hasOwnProperty,AP=(t,e)=>{for(var n in e)pu(t,n,{get:e[n],enumerable:!0})},MP=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of SP(e))!TP.call(t,r)&&r!==n&&pu(t,r,{get:()=>e[r],enumerable:!(i=bP(e,r))||i.enumerable});return t},RP=t=>MP(pu({},"__esModule",{value:!0}),t),vy={};AP(vy,{addCustomCommand:()=>Ni.addCustomCommand,addCustomTab:()=>Ni.addCustomTab,onDevToolsClientConnected:()=>Ni.onDevToolsClientConnected,onDevToolsConnected:()=>Ni.onDevToolsConnected,removeCustomCommand:()=>Ni.removeCustomCommand,setupDevToolsPlugin:()=>Ni.setupDevToolsPlugin,setupDevtoolsPlugin:()=>Ni.setupDevToolsPlugin});by.exports=RP(vy);var Ni=xy()});var tE=ge((yH,eE)=>{"use strict";function Wt(t){if(this.size=t|0,this.size<=1||(this.size&this.size-1)!==0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=t<<1;for(var e=new Array(this.size*2),n=0;n<e.length;n+=2){let l=Math.PI*n/this.size;e[n]=Math.cos(l),e[n+1]=-Math.sin(l)}this.table=e;for(var i=0,r=1;this.size>r;r<<=1)i++;this._width=i%2===0?i-1:i,this._bitrev=new Array(1<<this._width);for(var s=0;s<this._bitrev.length;s++){this._bitrev[s]=0;for(var o=0;o<this._width;o+=2){var a=this._width-o-2;this._bitrev[s]|=(s>>>o&3)<<a}}this._out=null,this._data=null,this._inv=0}eE.exports=Wt;Wt.prototype.fromComplexArray=function(e,n){for(var i=n||new Array(e.length>>>1),r=0;r<e.length;r+=2)i[r>>>1]=e[r];return i};Wt.prototype.createComplexArray=function(){let e=new Array(this._csize);for(var n=0;n<e.length;n++)e[n]=0;return e};Wt.prototype.toComplexArray=function(e,n){for(var i=n||this.createComplexArray(),r=0;r<i.length;r+=2)i[r]=e[r>>>1],i[r+1]=0;return i};Wt.prototype.completeSpectrum=function(e){for(var n=this._csize,i=n>>>1,r=2;r<i;r+=2)e[n-r]=e[r],e[n-r+1]=-e[r+1]};Wt.prototype.transform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=0,this._transform4(),this._out=null,this._data=null};Wt.prototype.realTransform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=0,this._realTransform4(),this._out=null,this._data=null};Wt.prototype.inverseTransform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=1,this._transform4();for(var i=0;i<e.length;i++)e[i]/=this.size;this._out=null,this._data=null};Wt.prototype._transform4=function(){var e=this._out,n=this._csize,i=this._width,r=1<<i,s=n/r<<1,o,a,l=this._bitrev;if(s===4)for(o=0,a=0;o<n;o+=s,a++){let g=l[a];this._singleTransform2(o,g,r)}else for(o=0,a=0;o<n;o+=s,a++){let g=l[a];this._singleTransform4(o,g,r)}var c=this._inv?-1:1,u=this.table;for(r>>=2;r>=2;r>>=2){s=n/r<<1;var d=s>>>2;for(o=0;o<n;o+=s)for(var h=o+d,f=o,p=0;f<h;f+=2,p+=r){let g=f,S=g+d,E=S+d,M=E+d,_=e[g],b=e[g+1],R=e[S],U=e[S+1],H=e[E],$=e[E+1],F=e[M],w=e[M+1],I=_,m=b,x=u[p],D=c*u[p+1],z=R*x-U*D,P=R*D+U*x,A=u[2*p],C=c*u[2*p+1],O=H*A-$*C,te=H*C+$*A,Z=u[3*p],ee=c*u[3*p+1],Q=F*Z-w*ee,Ve=F*ee+w*Z,le=I+O,me=m+te,rt=I-O,ae=m-te,ve=z+Q,Me=P+Ve,Ue=c*(z-Q),tt=c*(P-Ve),v=le+ve,T=me+Me,N=le-ve,j=me-Me,Y=rt+tt,B=ae-Ue,W=rt-tt,X=ae+Ue;e[g]=v,e[g+1]=T,e[S]=Y,e[S+1]=B,e[E]=N,e[E+1]=j,e[M]=W,e[M+1]=X}}};Wt.prototype._singleTransform2=function(e,n,i){let r=this._out,s=this._data,o=s[n],a=s[n+1],l=s[n+i],c=s[n+i+1],u=o+l,d=a+c,h=o-l,f=a-c;r[e]=u,r[e+1]=d,r[e+2]=h,r[e+3]=f};Wt.prototype._singleTransform4=function(e,n,i){let r=this._out,s=this._data,o=this._inv?-1:1,a=i*2,l=i*3,c=s[n],u=s[n+1],d=s[n+i],h=s[n+i+1],f=s[n+a],p=s[n+a+1],g=s[n+l],S=s[n+l+1],E=c+f,M=u+p,_=c-f,b=u-p,R=d+g,U=h+S,H=o*(d-g),$=o*(h-S),F=E+R,w=M+U,I=_+$,m=b-H,x=E-R,D=M-U,z=_-$,P=b+H;r[e]=F,r[e+1]=w,r[e+2]=I,r[e+3]=m,r[e+4]=x,r[e+5]=D,r[e+6]=z,r[e+7]=P};Wt.prototype._realTransform4=function(){var e=this._out,n=this._csize,i=this._width,r=1<<i,s=n/r<<1,o,a,l=this._bitrev;if(s===4)for(o=0,a=0;o<n;o+=s,a++){let Ze=l[a];this._singleRealTransform2(o,Ze>>>1,r>>>1)}else for(o=0,a=0;o<n;o+=s,a++){let Ze=l[a];this._singleRealTransform4(o,Ze>>>1,r>>>1)}var c=this._inv?-1:1,u=this.table;for(r>>=2;r>=2;r>>=2){s=n/r<<1;var d=s>>>1,h=d>>>1,f=h>>>1;for(o=0;o<n;o+=s)for(var p=0,g=0;p<=f;p+=2,g+=r){var S=o+p,E=S+h,M=E+h,_=M+h,b=e[S],R=e[S+1],U=e[E],H=e[E+1],$=e[M],F=e[M+1],w=e[_],I=e[_+1],m=b,x=R,D=u[g],z=c*u[g+1],P=U*D-H*z,A=U*z+H*D,C=u[2*g],O=c*u[2*g+1],te=$*C-F*O,Z=$*O+F*C,ee=u[3*g],Q=c*u[3*g+1],Ve=w*ee-I*Q,le=w*Q+I*ee,me=m+te,rt=x+Z,ae=m-te,ve=x-Z,Me=P+Ve,Ue=A+le,tt=c*(P-Ve),v=c*(A-le),T=me+Me,N=rt+Ue,j=ae+v,Y=ve-tt;if(e[S]=T,e[S+1]=N,e[E]=j,e[E+1]=Y,p===0){var B=me-Me,W=rt-Ue;e[M]=B,e[M+1]=W;continue}if(p!==f){var X=ae,K=-ve,k=me,ie=-rt,J=-c*v,re=-c*tt,_e=-c*Ue,Te=-c*Me,Ne=X+J,we=K+re,Ke=k+Te,Oe=ie-_e,Xe=o+h-p,pe=o+d-p;e[Xe]=Ne,e[Xe+1]=we,e[pe]=Ke,e[pe+1]=Oe}}}};Wt.prototype._singleRealTransform2=function(e,n,i){let r=this._out,s=this._data,o=s[n],a=s[n+i],l=o+a,c=o-a;r[e]=l,r[e+1]=0,r[e+2]=c,r[e+3]=0};Wt.prototype._singleRealTransform4=function(e,n,i){let r=this._out,s=this._data,o=this._inv?-1:1,a=i*2,l=i*3,c=s[n],u=s[n+i],d=s[n+a],h=s[n+l],f=c+d,p=c-d,g=u+h,S=o*(u-h),E=f+g,M=p,_=-S,b=f-g,R=p,U=S;r[e]=E,r[e+1]=0,r[e+2]=M,r[e+3]=_,r[e+4]=b,r[e+5]=0,r[e+6]=R,r[e+7]=U}});var Wa=bn(ud(),1),rd=bn(Gi(),1);var Ss=bn(Gi());var dt=bn(Gi());var Et=bn(Gi());function Pe(t){return Object.freeze?Object.freeze(t):t}var th=0,fl=1,tn=2,lt=3,hl=4;var Rb=48,wb=2047,kL=wb-Rb,Xt=Pe({SYNC_BEEP:0,AUTOTUNE_CYCLE_START:10,AUTOTUNE_CYCLE_RESULT:11,AUTOTUNE_TARGETS:12,INFLIGHT_ADJUSTMENT:13,LOGGING_RESUME:14,DISARM:15,GTUNE_CYCLE_RESULT:20,FLIGHT_MODE:30,TWITCH_TEST:40,CUSTOM:250,CUSTOM_BLANK:251,LOG_END:255}),VL=Pe({ROLL:0,PITCH:1,YAW:2}),Ge=[],Cb=Pe(["ARM","ANGLE","HORIZON","BARO","ANTIGRAVITY","MAG","HEADFREE","HEADADJ","CAMSTAB","CAMTRIG","GPSHOME","GPSHOLD","PASSTHRU","BEEPER","LEDMAX","LEDLOW","LLIGHTS","CALIB","GOV","OSD","TELEMETRY","GTUNE","SONAR","SERVO1","SERVO2","SERVO3","BLACKBOX","FAILSAFE","AIRMODE","3DDISABLE","FPVANGLEMIX","BLACKBOXERASE","CAMERA1","CAMERA2","CAMERA3","FLIPOVERAFTERCRASH","PREARM"]),Ib=Pe(["ARM","ANGLE","HORIZON","MAG","BARO","GPSHOME","GPSHOLD","HEADFREE","PASSTHRU","RANGEFINDER","FAILSAFE","GPSRESCUE","ANTIGRAVITY","HEADADJ","CAMSTAB","CAMTRIG","BEEPER","LEDMAX","LEDLOW","LLIGHTS","CALIB","GOV","OSD","TELEMETRY","GTUNE","SERVO1","SERVO2","SERVO3","BLACKBOX","AIRMODE","3D","FPVANGLEMIX","BLACKBOXERASE","CAMERA1","CAMERA2","CAMERA3","FLIPOVERAFTERCRASH","PREARM","BEEPGPSCOUNT","VTXPITMODE","USER1","USER2","USER3","USER4","PIDAUDIO","ACROTRAINER","VTXCONTROLDISABLE","LAUNCHCONTROL"]),Pb=Pe(["ARM","ANGLE","HORIZON","MAG","ALTHOLD","HEADFREE","CHIRP","PASSTHRU","FAILSAFE","POSHOLD","GPSRESCUE","ANTIGRAVITY","HEADADJ","CAMSTAB","BEEPER","LEDLOW","CALIB","OSD","TELEMETRY","SERVO1","SERVO2","SERVO3","BLACKBOX","AIRMODE","3D","FPVANGLEMIX","BLACKBOXERASE","CAMERA1","CAMERA2","CAMERA3","FLIPOVERAFTERCRASH","PREARM","BEEPGPSCOUNT","VTXPITMODE","USER1","USER2","USER3","USER4","PIDAUDIO","ACROTRAINER","VTXCONTROLDISABLE","LAUNCHCONTROL"]),nh=Pe(["RX_PPM","VBAT","INFLIGHT_ACC_CAL","RX_SERIAL","MOTOR_STOP","SERVO_TILT","SOFTSERIAL","GPS","FAILSAFE","SONAR","TELEMETRY","CURRENT_METER","3D","RX_PARALLEL_PWM","RX_MSP","RSSI_ADC","LED_STRIP","DISPLAY","ONESHOT125","BLACKBOX","CHANNEL_FORWARDING","TRANSPONDER","AIRMODE","SUPEREXPO_RATES"]),GL=Pe(["OFF","ON"]),HL=Pe(["PWM","ONESHOT125","ONESHOT42","MULTISHOT","BRUSHED","DSHOT150","DSHOT300","DSHOT600","DSHOT1200","PROSHOT1000"]),zL=Pe(["SYNCED","UNSYNCED"]),WL=Pe(["SPEK1024","SPEK2048","SBUS","SUMD","SUMH","XB-B","XB-B-RJ01","IBUS","JETIEXBUS","CRSF","SRXL","CUSTOM","FPORT","SRXL2","GHST"]),$L=Pe(["SMOOTH","STEP"]),XL=Pe(["INTERPOLATION","FILTER"]),YL=Pe(["OFF","ON"]),qL=Pe(["ROLL","PITCH","YAW","THROTTLE"]),KL=Pe(["PT1","BIQUAD","PT2","PT3"]),Ae=[],eh=Pe(["NONE","CYCLETIME","BATTERY","GYRO","ACCELEROMETER","MIXER","AIRMODE","PIDLOOP","NOTCH","RC_INTERPOLATION","VELOCITY","DTERM_FILTER","ANGLERATE","ESC_SENSOR","SCHEDULER","STACK","ESC_SENSOR_RPM","ESC_SENSOR_TMP","ALTITUDE","FFT","FFT_TIME","FFT_FREQ","RX_FRSKY_SPI","GYRO_RAW","DUAL_GYRO","DUAL_GYRO_RAW","DUAL_GYRO_COMBINED","DUAL_GYRO_DIFF","MAX7456_SIGNAL","MAX7456_SPICLOCK","SBUS","FPORT","RANGEFINDER","RANGEFINDER_QUALITY","LIDAR_TF","ADC_INTERNAL","RUNAWAY_TAKEOFF","SDIO","CURRENT_SENSOR","USB","SMARTAUDIO","RTH","ITERM_RELAX","ACRO_TRAINER","RC_SMOOTHING","RX_SIGNAL_LOSS","RC_SMOOTHING_RATE","ANTI_GRAVITY","DYN_LPF","RX_SPECTRUM_SPI","DSHOT_RPM_TELEMETRY","RPM_FILTER","D_MAX","AC_CORRECTION","AC_ERROR","DUAL_GYRO_SCALED","DSHOT_RPM_ERRORS","CRSF_LINK_STATISTICS_UPLINK","CRSF_LINK_STATISTICS_PWR","CRSF_LINK_STATISTICS_DOWN","BARO","GPS_RESCUE_THROTTLE_PID","DYN_IDLE","FF_LIMIT","FF_INTERPOLATED","BLACKBOX_OUTPUT","GYRO_SAMPLE","RX_TIMING","D_LPF","VTX_TRAMP","GHST","GHST_MSP","SCHEDULER_DETERMINISM","TIMING_ACCURACY","RX_EXPRESSLRS_SPI","RX_EXPRESSLRS_PHASELOCK","RX_STATE_TIME","GPS_RESCUE_VELOCITY","GPS_RESCUE_HEADING","GPS_RESCUE_TRACKING","GPS_CONNECTION","ATTITUDE","VTX_MSP","GPS_DOP","FAILSAFE","GYRO_CALIBRATION","ANGLE_MODE","ANGLE_TARGET","CURRENT_ANGLE","DSHOT_TELEMETRY_COUNTS","RPM_LIMIT","RC_STATS","MAG_CALIB","MAG_TASK_RATE","EZLANDING"]),jL=Pe(["OFF","ON","ALWAYS"]),ZL=Pe(["OFF","188HZ","98HZ","42HZ","20HZ","10HZ","5HZ","EXPERIMENTAL"]),JL=Pe(["NORMAL","EXPERIMENTAL","1KHZ_SAMPLING"]),QL=Pe(["NORMAL","EXPERIMENTAL"]),$t=[],Ob=Pe(["AUTO","NONE","ADXL345","MPU6050","MMA8452","BMA280","LSM303DLHC","MPU6000","MPU6500","MPU9250","ICM20601","ICM20602","ICM20608G","ICM20649","ICM20689","ICM42605","ICM42688P","BMI160","BMI270","LSM6DSO","LSM6DSV16X","VIRTUAL"]),e2=Pe(["AUTO","NONE","BMP085","MS5611","BMP280","LPS","QMP6988","BMP388","DPS310","2SMPB_02B"]),Hi=[],Db=Pe(["AUTO","NONE","HMC5883","AK8975","AK8963","QMC5883","LIS3MDL","MAG_MPU925X_AK8963"]),ih=Pe(["GPS_FIX_HOME","GPS_FIX","CALIBRATE_MAG","SMALL_ANGLE","FIXED_WING"]),rh=Pe(["IDLE","RX_LOSS_DETECTED","LANDING","LANDED"]),sh=Pe(["ARM_CFFT_F32","BITREVERSAL","STAGE_RFFT_F32","ARM_CMPLX_MAG_F32","CALC_FREQUENCIES","UPDATE_FILTERS","HANNING"]),t2=Pe(["OFF","RP","RPY","RP_INC","RPY_INC"]),n2=Pe(["GYRO","SETPOINT"]),i2=Pe(["ARMING_DISABLED","FAILSAFE","THROTTLE_TIMEOUT","STICKS","SWITCH","CRASH_PROTECTION","RUNAWAY_TAKEOFF","GPS_RESCUE","SERIAL_IO"]),r2=Pe(["BETAFLIGHT","RACEFLIGHT","KISS","ACTUAL","QUICK"]),s2=Pe(["FIRST","SECOND","BOTH"]),o2=Pe(["OFF","2_POINT","3_POINT","4_POINT"]),a2=Pe(["OFF","ON - RP","ON - RPY"]),l2=Pe(["OFF","SCALE","CLIP"]);function oh(t,e){t===lt&&Et.default.gte(e,"3.3.0")?($t=Ob.slice(0),Hi=Db.slice(0),Ae=eh.slice(0),Ae.splice(Ae.indexOf("MIXER"),1),Ae.splice(Ae.indexOf("AIRMODE"),1),Ae.splice(Ae.indexOf("VELOCITY"),1),Ae.splice(Ae.indexOf("DTERM_FILTER"),1),Et.default.gte(e,"3.4.0")&&(Ae.splice(Ae.indexOf("GYRO"),1,"GYRO_FILTERED"),Ae.splice(Ae.indexOf("NOTCH"),1,"GYRO_SCALED")),Et.default.gte(e,"4.0.0")&&Ae.splice(Ae.indexOf("GYRO_RAW"),0,"RX_SFHSS_SPI"),Et.default.gte(e,"4.1.0")&&(Ae.splice(Ae.indexOf("DUAL_GYRO"),1),Ae.splice(Ae.indexOf("DUAL_GYRO_COMBINED"),1)),Et.default.gte(e,"4.3.0")&&(Ae.splice(Ae.indexOf("FF_INTERPOLATED"),1,"FEEDFORWARD"),Ae.splice(Ae.indexOf("FF_LIMIT"),1,"FEEDFORWARD_LIMIT")),Et.default.gte(e,"4.5.0")&&(Hi.splice(Hi.indexOf("LIS3MDL"),0,"LIS2MDL"),Hi.push("IST8310")),Et.default.lt(e,"2025.12.0")&&Ae.splice(Ae.indexOf("D_MAX"),1,"D_MIN"),Et.default.gte(e,"2025.12.0")&&($t.splice($t.indexOf("ADXL345"),1),$t.splice($t.indexOf("MMA8452"),1),$t.splice($t.indexOf("BMA280"),1),$t.splice($t.indexOf("LSM303DLHC"),1),$t.splice($t.indexOf("LSM6DSV16X")+1,0,"IIM42653"),Ae.splice(Ae.indexOf("GPS_RESCUE_THROTTLE_PID"),1,"AUTOPILOT_ALTITUDE"),Ae.splice(Ae.indexOf("GYRO_SCALED"),1),Ae.splice(Ae.indexOf("RANGEFINDER_QUALITY")+1,0,"OPTICALFLOW"),Ae.push("TPA","S_TERM","SPA","TASK","GIMBAL","WING_SETPOINT","AUTOPILOT_POSITION","CHIRP","FLASH_TEST_PRBS","MAVLINK_TELEMETRY")),Et.default.gte(e,"2025.12.0")&&(Ae.splice(Ae.indexOf("DUAL_GYRO_RAW"),1,"MULTI_GYRO_RAW"),Ae.splice(Ae.indexOf("DUAL_GYRO_DIFF"),1,"MULTI_GYRO_DIFF"),Ae.splice(Ae.indexOf("DUAL_GYRO_SCALED"),1,"MULTI_GYRO_SCALED")),Et.default.gte(e,"2026.6.0")&&Ae.push("AUTOPILOT_PID"),$t=Pe($t),Hi=Pe(Hi),Ae=Pe(Ae),Et.default.gte(e,"2025.12.0")?Ge=Pb.slice(0):(Ge=Ib.slice(0),Et.default.lt(e,"3.4.0")&&Ge.splice(Ge.indexOf("GPSRESCUE"),1),Et.default.gte(e,"3.5.0")&&(Ge.splice(Ge.indexOf("RANGEFINDER"),1),Ge.splice(Ge.indexOf("CAMTRIG"),1),Ge.splice(Ge.indexOf("LEDMAX"),1),Ge.splice(Ge.indexOf("LLIGHTS"),1),Ge.splice(Ge.indexOf("GOV"),1),Ge.splice(Ge.indexOf("GTUNE"),1)),Et.default.gte(e,"4.0.0")&&(Ge.splice(Ge.indexOf("BARO"),1),Ge.splice(Ge.indexOf("GPSHOME"),1),Ge.splice(Ge.indexOf("GPSHOLD"),1))),Et.default.gte(e,"2026.6.0")&&Ge.splice(Ge.indexOf("GPSRESCUE")+1,0,"AUTOPILOT"),Ge=Pe(Ge)):(Ae=eh,Ge=Cb.slice(0),t===lt&&Et.default.lte(e,"3.1.6")&&Ge.splice(Ge.indexOf("ANTIGRAVITY"),1),Ge=Pe(Ge))}var Nb=bn(Gi());function ah(t){let e=new Uint32Array(1);return e[0]=parseInt(t,16),new Float32Array(e.buffer)[0]}function pl(t){let e=new Uint32Array(1);return e[0]=t,new Float32Array(e.buffer)[0]}function ml(t){return String.fromCodePoint(...t)}function lh(t){let e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}function gl(t){return t&8388608?t|4278190080:t}function Wn(t){return t&32768?t|4294901760:t}function ch(t){return t&8192?t|4294950912:t}function In(t){return t&128?t|4294967040:t}function _l(t){return t&64?t|4294967168:t}function Ks(t){return t&32?t|4294967232:t}function yl(t){return t&16?t|4294967264:t}function Pn(t){return t&8?t|4294967280:t}function yi(t){return t&2?t|4294967292:t}function El(t){return t.match(/.*,.*/)!=null}function nn(t,e){let n=t.split(","),i,r;if(e=e||n.length,e<2)return r=n.indexOf(".")?parseFloat(n):parseInt(n,10),isNaN(r)?t:r;i=new Array(e);for(let s=0;s<e;s++)s<n.length?(r=n[s].indexOf(".")?parseFloat(n[s]):parseInt(n[s],10),i[s]=isNaN(r)?n[s]:r):i[s]=null;return i}function qs(t,e,n){for(t=`${t}`;t.length<n;)t=e+t;return t}function uh(t,e){let n=Math.round(Math.abs(t)),i=Math.floor(n/1e3);n%=1e3;let r=Math.floor(i/60);i%=60;let s=Math.floor(r/60);return r%=60,`${(t<0?"-":"")+(s?`${qs(s,"0",2)}:`:"")+qs(r,"0",2)}:${qs(i,"0",2)}${e?`.${qs(n,"0",3)}`:""}`}var Se={};ad(Se,{compile:()=>P1});var I1=bn(Nc());Rr(Se,bn(Nc()));var P1=()=>{};var wP=bn(Sy(),1);var Ry,yu=t=>Ry=t;var CP=Symbol();function gu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vs||(vs={}));var IP=typeof window<"u",Ty=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null};function PP(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function Eu(t,e,n){let i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){OP(i.response,e,n)},i.onerror=function(){console.error("could not download file")},i.send()}function wy(t){let e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function ga(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{let n=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});t.dispatchEvent(n)}}var _a=typeof navigator=="object"?navigator:{userAgent:""},Cy=/Macintosh/.test(_a.userAgent)&&/AppleWebKit/.test(_a.userAgent)&&!/Safari/.test(_a.userAgent),OP=IP?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Cy?DP:"msSaveOrOpenBlob"in _a?NP:LP:()=>{};function DP(t,e="download",n){let i=document.createElement("a");i.download=e,i.rel="noopener",typeof t=="string"?(i.href=t,i.origin!==location.origin?wy(i.href)?Eu(t,e,n):(i.target="_blank",ga(i)):ga(i)):(i.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(i.href)},4e4),setTimeout(function(){ga(i)},0))}function NP(t,e="download",n){if(typeof t=="string")if(wy(t))Eu(t,e,n);else{let i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){ga(i)})}else navigator.msSaveOrOpenBlob(PP(t,n),e)}function LP(t,e,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return Eu(t,e,n);let r=t.type==="application/octet-stream",s=/constructor/i.test(String(Ty.HTMLElement))||"safari"in Ty,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&s||Cy)&&typeof FileReader<"u"){let a=new FileReader;a.onloadend=function(){let l=a.result;if(typeof l!="string")throw i=null,new Error("Wrong reader.result type");l=o?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=l:location.assign(l),i=null},a.readAsDataURL(t)}else{let a=URL.createObjectURL(t);i?i.location.assign(a):location.href=a,i=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}var{assign:Z2}=Object;var Iy=()=>{};function Ay(t,e,n,i=Iy){t.push(e);let r=()=>{let s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&(0,Se.getCurrentScope)()&&(0,Se.onScopeDispose)(r),r}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}var FP=t=>t(),My=Symbol(),mu=Symbol();function _u(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(let n in e){if(!e.hasOwnProperty(n))continue;let i=e[n],r=t[n];gu(r)&&gu(i)&&t.hasOwnProperty(n)&&!(0,Se.isRef)(i)&&!(0,Se.isReactive)(i)?t[n]=_u(r,i):t[n]=i}return t}var UP=Symbol();function BP(t){return!gu(t)||!Object.prototype.hasOwnProperty.call(t,UP)}var{assign:ci}=Object;function kP(t){return!!((0,Se.isRef)(t)&&t.effect)}function VP(t,e,n,i){let{state:r,actions:s,getters:o}=e,a=n.state.value[t],l;function c(){a||(n.state.value[t]=r?r():{});let u=(0,Se.toRefs)(n.state.value[t]);return ci(u,s,Object.keys(o||{}).reduce((d,h)=>(d[h]=(0,Se.markRaw)((0,Se.computed)(()=>{yu(n);let f=n._s.get(t);return o[h].call(f,f)})),d),{}))}return l=Py(t,c,e,n,i,!0),l}function Py(t,e,n={},i,r,s){let o,a=ci({actions:{}},n),l={deep:!0},c,u,d=[],h=[],f,p=i.state.value[t];!s&&!p&&(i.state.value[t]={});let g=(0,Se.ref)({}),S;function E(w){let I;c=u=!1,typeof w=="function"?(w(i.state.value[t]),I={type:vs.patchFunction,storeId:t,events:f}):(_u(i.state.value[t],w),I={type:vs.patchObject,payload:w,storeId:t,events:f});let m=S=Symbol();(0,Se.nextTick)().then(()=>{S===m&&(c=!0)}),u=!0,mr(d,I,i.state.value[t])}let M=s?function(){let{state:I}=n,m=I?I():{};this.$patch(x=>{ci(x,m)})}:Iy;function _(){o.stop(),d=[],h=[],i._s.delete(t)}let b=(w,I="")=>{if(My in w)return w[mu]=I,w;let m=function(){yu(i);let x=Array.from(arguments),D=[],z=[];function P(O){D.push(O)}function A(O){z.push(O)}mr(h,{args:x,name:m[mu],store:H,after:P,onError:A});let C;try{C=w.apply(this&&this.$id===t?this:H,x)}catch(O){throw mr(z,O),O}return C instanceof Promise?C.then(O=>(mr(D,O),O)).catch(O=>(mr(z,O),Promise.reject(O))):(mr(D,C),C)};return m[My]=!0,m[mu]=I,m},R=(0,Se.markRaw)({actions:{},getters:{},state:[],hotState:g}),U={_p:i,$id:t,$onAction:Ay.bind(null,h),$patch:E,$reset:M,$subscribe(w,I={}){let m=Ay(d,w,I.detached,()=>x()),x=o.run(()=>(0,Se.watch)(()=>i.state.value[t],D=>{(I.flush==="sync"?u:c)&&w({storeId:t,type:vs.direct,events:f},D)},ci({},l,I)));return m},$dispose:_},H=(0,Se.reactive)(U);i._s.set(t,H);let F=(i._a&&i._a.runWithContext||FP)(()=>i._e.run(()=>(o=(0,Se.effectScope)()).run(()=>e({action:b}))));for(let w in F){let I=F[w];if((0,Se.isRef)(I)&&!kP(I)||(0,Se.isReactive)(I))s||(p&&BP(I)&&((0,Se.isRef)(I)?I.value=p[w]:_u(I,p[w])),i.state.value[t][w]=I);else if(typeof I=="function"){let m=b(I,w);F[w]=m,a.actions[w]=I}}return ci(H,F),ci((0,Se.toRaw)(H),F),Object.defineProperty(H,"$state",{get:()=>i.state.value[t],set:w=>{E(I=>{ci(I,w)})}}),i._p.forEach(w=>{ci(H,o.run(()=>w({store:H,app:i._a,pinia:i,options:a})))}),p&&s&&n.hydrate&&n.hydrate(H.$state,p),c=!0,u=!0,H}function Oy(t,e,n){let i,r=typeof e=="function";i=r?n:e;function s(o,a){let l=(0,Se.hasInjectionContext)();return o=o||(l?(0,Se.inject)(CP,null):null),o&&yu(o),o=Ry,o._s.has(t)||(r?Py(t,e,i,o):VP(t,i,o)),o._s.get(t)}return s.$id=t,s}var Q2=[{name:"Tricopter",model:"tricopter",image:"tri",defaultMotorOrder:[0,1,2],defaultYawOffset:-Math.PI/2},{name:"Quad +",model:"quad_x",image:"quad_p",defaultMotorOrder:[1,3,2,0],defaultYawOffset:0},{name:"Quad X",model:"quad_x",image:"quad_x",defaultMotorOrder:[1,3,2,0],defaultYawOffset:Math.PI/4},{name:"Bicopter",model:"custom",image:"bicopter",defaultMotorOrder:[0,1],defaultYawOffset:0},{name:"Gimbal",model:"custom",image:"custom",defaultMotorOrder:[0,1,2],defaultYawOffset:0},{name:"Y6",model:"y6",image:"y6",defaultMotorOrder:[4,1,3,5,2,0],defaultYawOffset:0},{name:"Hex +",model:"hex_plus",image:"hex_p",defaultMotorOrder:[4,1,3,5,2,0],defaultYawOffset:0},{name:"Flying Wing",model:"custom",image:"flying_wing",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Y4",model:"y4",image:"y4",defaultMotorOrder:[1,3,2,0],defaultYawOffset:Math.PI/4},{name:"Hex X",model:"hex_x",image:"hex_x",defaultMotorOrder:[4,1,3,5,2,0],defaultYawOffset:Math.PI/6},{name:"Octo X8",model:"custom",image:"octo_x8",defaultMotorOrder:[5,1,4,0,7,3,6,2],defaultYawOffset:Math.PI/8},{name:"Octo Flat +",model:"custom",image:"octo_flat_p",defaultMotorOrder:[5,1,4,0,7,3,6,2],defaultYawOffset:0},{name:"Octo Flat X",model:"custom",image:"octo_flat_x",defaultMotorOrder:[5,1,4,0,7,3,6,2],defaultYawOffset:Math.PI/8},{name:"Airplane",model:"custom",image:"airplane",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Heli 120",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Heli 90",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"V-tail Quad",model:"quad_vtail",image:"vtail_quad",defaultMotorOrder:[1,3,2,0],defaultYawOffset:Math.PI/4},{name:"Hex H",model:"custom",image:"custom",defaultMotorOrder:[4,1,3,5,2,0],defaultYawOffset:0},{name:"PPM to SERVO",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Dualcopter",model:"custom",image:"custom",defaultMotorOrder:[0,1],defaultYawOffset:0},{name:"Singlecopter",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"A-tail Quad",model:"quad_atail",image:"atail_quad",defaultMotorOrder:[1,3,2,0],defaultYawOffset:Math.PI/4},{name:"Custom",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Custom Airplane",model:"custom",image:"custom",defaultMotorOrder:[0],defaultYawOffset:0},{name:"Custom Tricopter",model:"custom",image:"custom",defaultMotorOrder:[0,1,2],defaultYawOffset:-Math.PI/2}],xu={mixerConfiguration:3,customMix:null,stickMode:2,stickUnits:!1,stickTrails:!1,stickInvertYaw:!1,legendUnits:!0,speedUnits:1,altitudeUnits:1,darkMode:2,gapless:!1,drawCraft:"3D",hasCraft:!0,drawPidTable:!0,drawSticks:!0,drawTime:!0,drawEvents:!0,drawAnalyser:!0,drawWatermark:!1,drawLapTimer:!1,drawGradient:!1,drawVerticalBar:!0,graphSmoothOverride:!0,graphExpoOverride:!0,graphGridOverride:!0,analyserSampleRate:2e3,analyserHanning:!0,eraseBackground:!0,spectrumType:0,overdrawSpectrumType:0,psdHeatmapMin:-40,psdHeatmapMax:10,craft:{left:"15%",top:"48%",size:"40%"},sticks:{left:"75%",top:"20%",size:"30%"},analyser:{left:"2%",top:"60%",size:"35%"},analyser_legend:{left:"88%",top:"7%",width:"10%"},map:{left:"2%",top:"5%",size:"35%"},watermark:{left:"3%",top:"90%",size:"100%",transparency:"100%",logo:null},laptimer:{left:"5%",top:"50%",transparency:"40%"}};function Dy(t){let r,s={};if(this.get=function(o,a){switch(o=t+o,r){case 0:{let l=null;if(globalThis.localStorage)try{l=JSON.parse(globalThis.localStorage[o])}catch{}a(l);break}case 1:chrome.storage.local.get(o,function(l){a(l[o])});break;case 2:a(s[o]??null);break}},this.set=function(o,a){switch(o=t+o,r){case 0:if(globalThis.localStorage)try{globalThis.localStorage[o]=JSON.stringify(a)}catch(l){console.warn("Failed to save to localStorage:",l.message)}break;case 1:{let l={};l[o]=a,chrome.storage.local.set(l);break}case 2:s[o]=a;break}},globalThis.chrome?.storage?.local)r=1;else if(globalThis.localStorage)try{let o="__pref_storage_test__";globalThis.localStorage.setItem(o,"test"),globalThis.localStorage.removeItem(o),r=0}catch(o){console.warn("localStorage is not available, falling back to in-memory storage:",o.message),r=2}else r=2;t=t||""}var vu=new Dy;function GP(t,e){for(let n of Object.keys(e)){let i=e[n];i&&typeof i=="object"&&!Array.isArray(i)&&t[n]&&typeof t[n]=="object"?Object.assign(t[n],i):t[n]=i}}var bu=Oy("settings",()=>{let t=(0,Se.reactive)(structuredClone(xu));function e(){vu.get("userSettings",r=>{if(r){let s=structuredClone(xu);GP(s,r),Object.assign(t,s)}})}function n(r){Object.assign(t,r),vu.set("userSettings",(0,Se.toRaw)(t))}function i(r,s){t[r]=s,vu.set("userSettings",{...(0,Se.toRaw)(t)})}return e(),{userSettings:t,load:e,saveAll:n,saveSetting:i}});function Qe(){}var Ny={"axisP[all]":"PID P","axisP[0]":"PID P [roll]","axisP[1]":"PID P [pitch]","axisP[2]":"PID P [yaw]","axisI[all]":"PID I","axisI[0]":"PID I [roll]","axisI[1]":"PID I [pitch]","axisI[2]":"PID I [yaw]","axisD[all]":"PID D","axisD[0]":"PID D [roll]","axisD[1]":"PID D [pitch]","axisD[2]":"PID D [yaw]","axisF[all]":"PID Feedforward","axisF[0]":"PID Feedforward [roll]","axisF[1]":"PID Feedforward [pitch]","axisF[2]":"PID Feedforward [yaw]","axisS[all]":"PID S","axisS[0]":"PID S [roll]","axisS[1]":"PID S [pitch]","axisS[2]":"PID S [yaw]","axisSum[all]":"PID Sum","axisSum[0]":"PID Sum [roll]","axisSum[1]":"PID Sum [pitch]","axisSum[2]":"PID Sum [yaw]","axisError[all]":"PID Error","axisError[0]":"PID Error [roll]","axisError[1]":"PID Error [pitch]","axisError[2]":"PID Error [yaw]","rcCommands[all]":"Setpoints","rcCommands[0]":"Setpoint [roll]","rcCommands[1]":"Setpoint [pitch]","rcCommands[2]":"Setpoint [yaw]","rcCommands[3]":"Setpoint [throttle]","rcCommand[all]":"RC Commands","rcCommand[0]":"RC Command [roll]","rcCommand[1]":"RC Command [pitch]","rcCommand[2]":"RC Command [yaw]","rcCommand[3]":"RC Command [throttle]","gyroADC[all]":"Gyros","gyroADC[0]":"Gyro [roll]","gyroADC[1]":"Gyro [pitch]","gyroADC[2]":"Gyro [yaw]","gyroUnfilt[all]":"Unfiltered Gyros","gyroUnfilt[0]":"Unfiltered Gyro [roll]","gyroUnfilt[1]":"Unfiltered Gyro [pitch]","gyroUnfilt[2]":"Unfiltered Gyro [yaw]","motor[all]":"Motors","motor[0]":"Motor [1]","motor[1]":"Motor [2]","motor[2]":"Motor [3]","motor[3]":"Motor [4]","motor[4]":"Motor [5]","motor[5]":"Motor [6]","motor[6]":"Motor [7]","motor[7]":"Motor [8]","eRPM[all]":"RPM","eRPM[0]":"RPM [1]","eRPM[1]":"RPM [2]","eRPM[2]":"RPM [3]","eRPM[3]":"RPM [4]","eRPM[4]":"RPM [5]","eRPM[5]":"RPM [6]","eRPM[6]":"RPM [7]","eRPM[7]":"RPM [8]","servo[all]":"Servos","servo[5]":"Servo Tail",vbatLatest:"Battery volt.",amperageLatest:"Amperage",baroAlt:"Barometer","heading[all]":"Heading","heading[0]":"Heading [roll]","heading[1]":"Heading [pitch]","heading[2]":"Heading [yaw]","accSmooth[all]":"Accel.","accSmooth[0]":"Accel. [X]","accSmooth[1]":"Accel. [Y]","accSmooth[2]":"Accel. [Z]","magADC[all]":"Compass","magADC[0]":"Compass [X]","magADC[1]":"Compass [Y]","magADC[2]":"Compass [Z]",flightModeFlags:"Flight Mode Flags",stateFlags:"State Flags",failsafePhase:"Failsafe Phase",rxSignalReceived:"RX Signal Received",rxFlightChannelsValid:"RX Flight Ch. Valid",rssi:"RSSI",GPS_numSat:"GPS Sat Count","GPS_coord[0]":"GPS Latitude","GPS_coord[1]":"GPS Longitude",GPS_altitude:"GPS Altitude ASL",GPS_speed:"GPS Speed",GPS_ground_course:"GPS Heading","GPS_velned[all]":"GPS NED velocities","GPS_velned[0]":"North velocity","GPS_velned[1]":"East velocity","GPS_velned[2]":"Down velocity","gpsCartesianCoords[all]":"GPS Coords","gpsCartesianCoords[0]":"GPS Coords [X]","gpsCartesianCoords[1]":"GPS Coords [Y]","gpsCartesianCoords[2]":"GPS Coords [Z]",gpsDistance:"GPS Home distance",gpsHomeAzimuth:"GPS Home azimuth",gpsTrajectoryTiltAngle:"GPS Traject. tilt angle"},HP={NONE:{"debug[all]":"Debug [all]","debug[0]":"Debug [0]","debug[1]":"Debug [1]","debug[2]":"Debug [2]","debug[3]":"Debug [3]","debug[4]":"Debug [4]","debug[5]":"Debug [5]","debug[6]":"Debug [6]","debug[7]":"Debug [7]"},CYCLETIME:{"debug[all]":"Debug Cycle Time","debug[0]":"Cycle Time","debug[1]":"CPU Load","debug[2]":"Motor Update","debug[3]":"Motor Deviation","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},BATTERY:{"debug[all]":"Debug Battery","debug[0]":"Battery Volt ADC","debug[1]":"Battery Volt","debug[2]":"Not Used","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GYRO:{"debug[all]":"Debug Gyro","debug[0]":"Gyro Raw [X]","debug[1]":"Gyro Raw [Y]","debug[2]":"Gyro Raw [Z]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GYRO_FILTERED:{"debug[all]":"Debug Gyro Filtered","debug[0]":"Gyro Filtered [X]","debug[1]":"Gyro Filtered [Y]","debug[2]":"Gyro Filtered [Z]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ACCELEROMETER:{"debug[all]":"Debug Accel.","debug[0]":"Accel. Raw [X]","debug[1]":"Accel. Raw [Y]","debug[2]":"Accel. Raw [Z]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},MIXER:{"debug[all]":"Debug Mixer","debug[0]":"Roll-Pitch-Yaw Mix [0]","debug[1]":"Roll-Pitch-Yaw Mix [1]","debug[2]":"Roll-Pitch-Yaw Mix [2]","debug[3]":"Roll-Pitch-Yaw Mix [3]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},PIDLOOP:{"debug[all]":"Debug PID","debug[0]":"Wait Time","debug[1]":"Sub Update Time","debug[2]":"PID Update Time","debug[3]":"Motor Update Time","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},NOTCH:{"debug[all]":"Debug Notch","debug[0]":"Gyro Pre-Notch [roll]","debug[1]":"Gyro Pre-Notch [pitch]","debug[2]":"Gyro Pre-Notch [yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GYRO_SCALED:{"debug[all]":"Debug Gyro Scaled","debug[0]":"Gyro Scaled [roll]","debug[1]":"Gyro Scaled [pitch]","debug[2]":"Gyro Scaled [yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RC_INTERPOLATION:{"debug[all]":"Debug RC Interpolation","debug[0]":"Raw RC Command [roll]","debug[1]":"Current RX Refresh Rate","debug[2]":"Interpolation Step Count","debug[3]":"RC Setpoint [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DTERM_FILTER:{"debug[all]":"Debug Filter","debug[0]":"DTerm Filter [roll]","debug[1]":"DTerm Filter [pitch]","debug[2]":"Not Used","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ANGLERATE:{"debug[all]":"Debug Angle Rate","debug[0]":"Angle Rate[roll]","debug[1]":"Angle Rate[pitch]","debug[2]":"Angle Rate[yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ESC_SENSOR:{"debug[all]":"ESC Sensor","debug[0]":"Motor Index","debug[1]":"Timeouts","debug[2]":"CNC errors","debug[3]":"Data age","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},SCHEDULER:{"debug[all]":"Scheduler","debug[0]":"Not Used","debug[1]":"Not Used","debug[2]":"Schedule Time","debug[3]":"Function Exec Time","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},STACK:{"debug[all]":"Stack","debug[0]":"Stack High Mem","debug[1]":"Stack Low Mem","debug[2]":"Stack Current","debug[3]":"Stack p","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ESC_SENSOR_RPM:{"debug[all]":"ESC Sensor RPM","debug[0]":"Motor 1","debug[1]":"Motor 2","debug[2]":"Motor 3","debug[3]":"Motor 4","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ESC_SENSOR_TMP:{"debug[all]":"ESC Sensor Temp","debug[0]":"Motor 1","debug[1]":"Motor 2","debug[2]":"Motor 3","debug[3]":"Motor 4","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ALTITUDE:{"debug[all]":"Altitude","debug[0]":"GPS Trust * 100","debug[1]":"Baro Altitude","debug[2]":"GPS Altitude","debug[3]":"Vario","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FFT:{"debug[all]":"Debug FFT","debug[0]":"Gyro Scaled [dbg-axis]","debug[1]":"Gyro Pre-Dyn [dbg-axis]","debug[2]":"Gyro Downsampled [roll]","debug[3]":"FFT Center Index [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FFT_TIME:{"debug[all]":"Debug FFT TIME","debug[0]":"Active calc step","debug[1]":"Step duration","debug[2]":"Additional steps","debug[3]":"Not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FFT_FREQ:{"debug[all]":"Debug FFT FREQ","debug[0]":"Center Freq [roll]","debug[1]":"Center Freq [pitch]","debug[2]":"Gyro Pre-Dyn [dbg-axis]","debug[3]":"Gyro Scaled [dbg-axis]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_FRSKY_SPI:{"debug[all]":"FrSky SPI Rx","debug[0]":"Looptime","debug[1]":"Packet","debug[2]":"Missing Packets","debug[3]":"State","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_SFHSS_SPI:{"debug[all]":"SFHSS SPI Rx","debug[0]":"State","debug[1]":"Missing Frame","debug[2]":"Offset Max","debug[3]":"Offset Min","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GYRO_RAW:{"debug[all]":"Debug Gyro Raw","debug[0]":"Gyro Raw [X]","debug[1]":"Gyro Raw [Y]","debug[2]":"Gyro Raw [Z]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DUAL_GYRO:{"debug[all]":"Debug Dual Gyro","debug[0]":"Gyro 1 Filtered [roll]","debug[1]":"Gyro 1 Filtered [pitch]","debug[2]":"Gyro 2 Filtered [roll]","debug[3]":"Gyro 2 Filtered [pitch]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DUAL_GYRO_RAW:{"debug[all]":"Debug Dual Gyro Raw","debug[0]":"Gyro 1 Raw [roll]","debug[1]":"Gyro 1 Raw [pitch]","debug[2]":"Gyro 2 Raw [roll]","debug[3]":"Gyro 2 Raw [pitch]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DUAL_GYRO_COMBINED:{"debug[all]":"Debug Dual Combined","debug[0]":"Not Used","debug[1]":"Gyro Filtered [roll]","debug[2]":"Gyro Filtered [pitch]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DUAL_GYRO_DIFF:{"debug[all]":"Debug Dual Gyro Diff","debug[0]":"Gyro Diff [roll]","debug[1]":"Gyro Diff [pitch]","debug[2]":"Gyro Diff [yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},MAX7456_SIGNAL:{"debug[all]":"Max7456 Signal","debug[0]":"Mode Reg","debug[1]":"Sense","debug[2]":"ReInit","debug[3]":"Rows","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},MAX7456_SPICLOCK:{"debug[all]":"Max7456 SPI Clock","debug[0]":"Overclock","debug[1]":"DevType","debug[2]":"Divisor","debug[3]":"not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},SBUS:{"debug[all]":"SBus Rx","debug[0]":"Frame Flags","debug[1]":"State Flags","debug[2]":"Frame Time","debug[3]":"not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FPORT:{"debug[all]":"FPort Rx","debug[0]":"Frame Interval","debug[1]":"Frame Errors","debug[2]":"Last Error","debug[3]":"Telemetry Interval","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RANGEFINDER:{"debug[all]":"Rangefinder","debug[0]":"not used","debug[1]":"Raw Altitude","debug[2]":"Calc Altituded","debug[3]":"SNR","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RANGEFINDER_QUALITY:{"debug[all]":"Rangefinder Quality","debug[0]":"Raw Altitude","debug[1]":"SNR Threshold Reached","debug[2]":"Dyn Distance Threshold","debug[3]":"Is Surface Altitude Valid","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},LIDAR_TF:{"debug[all]":"Lidar TF","debug[0]":"Distance","debug[1]":"Strength","debug[2]":"TF Frame (4)","debug[3]":"TF Frame (5)","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ADC_INTERNAL:{"debug[all]":"ADC Internal","debug[0]":"Core Temp","debug[1]":"VRef Internal Sample","debug[2]":"Temp Sensor Sample","debug[3]":"Vref mV","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RUNAWAY_TAKEOFF:{"debug[all]":"Runaway Takeoff","debug[0]":"Enabled","debug[1]":"Activating Delay","debug[2]":"Deactivating Delay","debug[3]":"Deactivating Time","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},CURRENT_SENSOR:{"debug[all]":"Current Sensor","debug[0]":"milliVolts","debug[1]":"centiAmps","debug[2]":"Amps Latest","debug[3]":"mAh Drawn","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},USB:{"debug[all]":"USB","debug[0]":"Cable In","debug[1]":"VCP Connected","debug[2]":"not used","debug[3]":"not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},"SMART AUDIO":{"debug[all]":"Smart Audio VTx","debug[0]":"Device + Version","debug[1]":"Channel","debug[2]":"Frequency","debug[3]":"Power","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RTH:{"debug[all]":"RTH","debug[0]":"Rescue Throttle","debug[1]":"Rescue Angle","debug[2]":"Altitude Adjustment","debug[3]":"Rescue State","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ITERM_RELAX:{"debug[all]":"I-term Relax","debug[0]":"Setpoint HPF [roll]","debug[1]":"I Relax Factor [roll]","debug[2]":"Relaxed I Error [roll]","debug[3]":"Axis Error [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ACRO_TRAINER:{"debug[all]":"Acro Trainer (a_t_axis)","debug[0]":"Current Angle * 10 [deg]","debug[1]":"Axis State","debug[2]":"Correction amount","debug[3]":"Projected Angle * 10 [deg]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RC_SMOOTHING:{"debug[all]":"Debug RC Smoothing","debug[0]":"Raw RC Command","debug[1]":"Raw RC Derivative","debug[2]":"Smoothed RC Derivative","debug[3]":"RX Refresh Rate","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_SIGNAL_LOSS:{"debug[all]":"Rx Signal Loss","debug[0]":"Signal Received","debug[1]":"Failsafe","debug[2]":"Not used","debug[3]":"Throttle","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RC_SMOOTHING_RATE:{"debug[all]":"Debug RC Smoothing Rate","debug[0]":"Current RX Refresh Rate","debug[1]":"Training Step Count","debug[2]":"Average RX Refresh Rate","debug[3]":"Sampling State","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},ANTI_GRAVITY:{"debug[all]":"I-term Relax","debug[0]":"Base I gain * 1000","debug[1]":"Final I gain * 1000","debug[2]":"P gain [roll] * 1000","debug[3]":"P gain [pitch] * 1000","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DYN_LPF:{"debug[all]":"Debug Dyn LPF","debug[0]":"Gyro Scaled [dbg-axis]","debug[1]":"Notch Center [roll]","debug[2]":"Lowpass Cutoff","debug[3]":"Gyro Pre-Dyn [dbg-axis]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DSHOT_RPM_TELEMETRY:{"debug[all]":"DShot Telemetry RPM","debug[0]":"Motor 1 - DShot","debug[1]":"Motor 2 - DShot","debug[2]":"Motor 3 - DShot","debug[3]":"Motor 4 - DShot","debug[4]":"Motor 5 - DShot","debug[5]":"Motor 6 - DShot","debug[6]":"Motor 7 - DShot","debug[7]":"Motor 8 - DShot"},RPM_FILTER:{"debug[all]":"RPM Filter","debug[0]":"Motor 1 - rpmFilter","debug[1]":"Motor 2 - rpmFilter","debug[2]":"Motor 3 - rpmFilter","debug[3]":"Motor 4 - rpmFilter","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},D_MAX:{"debug[all]":"D_MAX","debug[0]":"Gyro Factor [roll]","debug[1]":"Setpoint Factor [roll]","debug[2]":"Actual D [roll]","debug[3]":"Actual D [pitch]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},AC_CORRECTION:{"debug[all]":"AC Correction","debug[0]":"AC Correction [roll]","debug[1]":"AC Correction [pitch]","debug[2]":"AC Correction [yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},AC_ERROR:{"debug[all]":"AC Error","debug[0]":"AC Error [roll]","debug[1]":"AC Error [pitch]","debug[2]":"AC Error [yaw]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DUAL_GYRO_SCALED:{"debug[all]":"Dual Gyro Scaled","debug[0]":"Gyro 1 [roll]","debug[1]":"Gyro 1 [pitch]","debug[2]":"Gyro 2 [roll]","debug[3]":"Gyro 2 [pitch]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DSHOT_RPM_ERRORS:{"debug[all]":"DSHOT RPM Error","debug[0]":"DSHOT RPM Error [1]","debug[1]":"DSHOT RPM Error [2]","debug[2]":"DSHOT RPM Error [3]","debug[3]":"DSHOT RPM Error [4]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},CRSF_LINK_STATISTICS_UPLINK:{"debug[all]":"CRSF Stats Uplink","debug[0]":"Uplink RSSI 1","debug[1]":"Uplink RSSI 2","debug[2]":"Uplink Link Quality","debug[3]":"RF Mode","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},CRSF_LINK_STATISTICS_PWR:{"debug[all]":"CRSF Stats Power","debug[0]":"Antenna","debug[1]":"SNR","debug[2]":"TX Power","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},CRSF_LINK_STATISTICS_DOWN:{"debug[all]":"CRSF Stats Downlink","debug[0]":"Downlink RSSI","debug[1]":"Downlink Link Quality","debug[2]":"Downlink SNR","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},BARO:{"debug[all]":"Debug Barometer","debug[0]":"Baro State","debug[1]":"Baro Temperature","debug[2]":"Baro Pressure","debug[3]":"Baro Pressure Sum","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GPS_RESCUE_THROTTLE_PID:{"debug[all]":"GPS Rescue Throttle PID","debug[0]":"Throttle P","debug[1]":"Throttle I","debug[2]":"Throttle D","debug[3]":"Z Velocity","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},DYN_IDLE:{"debug[all]":"Dyn Idle","debug[0]":"Motor Range Min Inc","debug[1]":"Target RPS Change Rate","debug[2]":"Error","debug[3]":"Min RPM","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FF_LIMIT:{"debug[all]":"FF Limit","debug[0]":"FF input [roll]","debug[1]":"FF input [pitch]","debug[2]":"FF limited [roll]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FF_INTERPOLATED:{"debug[all]":"FF Interpolated [roll]","debug[0]":"Setpoint Delta Impl [roll]","debug[1]":"Boost amount [roll]","debug[2]":"Boost amount, clipped [roll]","debug[3]":"Clip amount [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},BLACKBOX_OUTPUT:{"debug[all]":"Blackbox Output","debug[0]":"Blackbox Rate","debug[1]":"Blackbox Max Rate","debug[2]":"Dropouts","debug[3]":"Tx Bytes Free","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GYRO_SAMPLE:{"debug[all]":"Gyro Sample","debug[0]":"Before downsampling","debug[1]":"After downsampling","debug[2]":"After RPM","debug[3]":"After all but Dyn Notch","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_TIMING:{"debug[all]":"Receiver Timing (us)","debug[0]":"Frame Delta","debug[1]":"Frame Age","debug[2]":"not used","debug[3]":"not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},D_LPF:{"debug[all]":"D-Term [D_LPF]","debug[0]":"Unfiltered D [roll]","debug[1]":"Unfiltered D [pitch]","debug[2]":"Filtered, with DMax [roll]","debug[3]":"Filtered, with DMax [pitch]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},VTX_TRAMP:{"debug[all]":"Tramp VTx","debug[0]":"Status","debug[1]":"Reply Code","debug[2]":"Pit Mode","debug[3]":"Retry Count","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GHST:{"debug[all]":"Ghost Rx","debug[0]":"CRC Error Count","debug[1]":"Unknown Frame Count","debug[2]":"RSSI","debug[3]":"Link Quality","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GHST_MSP:{"debug[all]":"Ghost MSP","debug[0]":"MSP Frame Count","debug[1]":"MSP Frame Counter","debug[2]":"Not used","debug[3]":"Not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},SCHEDULER_DETERMINISM:{"debug[all]":"Scheduler Determinism","debug[0]":"Cycle Start time","debug[1]":"ID of Late Task","debug[2]":"Task Delay Time","debug[3]":"Gyro Clock Skew","debug[4]":"Minimum Gyro period in 100th of a us","debug[5]":"Maximum Gyro period in 100th of a us","debug[6]":"Span of Gyro period in 100th of a us","debug[7]":"Gyro cycle deviation in 100th of a us"},TIMING_ACCURACY:{"debug[all]":"Timing Accuracy","debug[0]":"CPU Busy","debug[1]":"Late Tasks per second","debug[2]":"Total delay in last second","debug[3]":"Total Tasks per second","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_EXPRESSLRS_SPI:{"debug[all]":"ExpressLRS SPI Rx","debug[0]":"Lost Connection Count","debug[1]":"RSSI","debug[2]":"SNR","debug[3]":"Uplink LQ","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_EXPRESSLRS_PHASELOCK:{"debug[all]":"ExpressLRS SPI Phaselock","debug[0]":"Phase offset","debug[1]":"Filtered phase offset","debug[2]":"Frequency Offset","debug[3]":"Phase Shift","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},RX_STATE_TIME:{"debug[all]":"Rx State Time","debug[0]":"Time 0","debug[1]":"Time 1","debug[2]":"Time 2","debug[3]":"Time 3","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GPS_RESCUE_VELOCITY:{"debug[all]":"GPS Rescue Velocity","debug[0]":"Velocity P","debug[1]":"Velocity D","debug[2]":"Velocity to Home","debug[3]":"Target Velocity","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GPS_RESCUE_HEADING:{"debug[all]":"GPS Rescue Heading","debug[0]":"Ground Speed","debug[1]":"GPS Heading","debug[2]":"IMU Attitude","debug[3]":"Angle to home","debug[4]":"magYaw","debug[5]":"Roll MixAtt","debug[6]":"Roll Added","debug[7]":"Rescue Yaw Rate"},GPS_RESCUE_TRACKING:{"debug[all]":"GPS Rescue Tracking","debug[0]":"Velocity to home","debug[1]":"Target velocity","debug[2]":"Altitude","debug[3]":"Target altitude","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GPS_CONNECTION:{"debug[all]":"GPS Connection","debug[0]":"Nav Model","debug[1]":"GPS Nav interval","debug[2]":"Task timer","debug[3]":"Baud Rate / FC interval","debug[4]":"State*100 +SubState","debug[5]":"ExecuteTime","debug[6]":"Ack State","debug[7]":"Rx buffer size"},ATTITUDE:{"debug[all]":"Attitude","debug[0]":"IMU Gain","debug[1]":"EZ_EF","debug[2]":"GroundSpeedError","debug[3]":"VelocityFactor"},VTX_MSP:{"debug[all]":"VTX MSP","debug[0]":"packetCounter","debug[1]":"isCrsfPortConfig","debug[2]":"isLowPowerDisarmed","debug[3]":"mspTelemetryDescriptor","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},GPS_DOP:{"debug[all]":"GPS Dilution of Precision","debug[0]":"Number of Satellites","debug[1]":"pDOP (positional - 3D)","debug[2]":"hDOP (horizontal - 2D)","debug[3]":"vDOP (vertical - 1D)","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},FAILSAFE:{"debug[all]":"Failsafe","debug[0]":"Failsafe Phase switch","debug[1]":"Failsafe State","debug[2]":"Receiving data from Rx","debug[3]":"Failsafe Phase"},GYRO_CALIBRATION:{"debug[all]":"Gyro Calibration","debug[0]":"Gyro Calibration X","debug[1]":"Gyro Calibration Y","debug[2]":"Gyro Calibration Z","debug[3]":"Calibration Cycles remaining"},ANGLE_MODE:{"debug[all]":"Angle Mode","debug[0]":"Target Angle","debug[1]":"Error P correction","debug[2]":"Feedforward correction","debug[3]":"Angle Achieved"},ANGLE_TARGET:{"debug[all]":"Angle Target","debug[0]":"Angle Target","debug[1]":"Sin Angle","debug[2]":"Current PID Setpoint","debug[3]":"Angle Current"},CURRENT_ANGLE:{"debug[all]":"Current Angle","debug[0]":"Current Angle X","debug[1]":"Current Angle Y","debug[2]":"Current Angle Z"},DSHOT_TELEMETRY_COUNTS:{"debug[all]":"DShot Telemetry Counts","debug[0]":"DShot Telemetry Debug[0] + 1","debug[1]":"DShot Telemetry Debug[1] + 1","debug[2]":"DShot Telemetry Debug[2] + 1","debug[3]":"Preamble Skip"},RPM_LIMIT:{"debug[all]":"RPM Limit","debug[0]":"Average RPM","debug[1]":"Average RPM (unsmoothed)","debug[2]":"RPM Limit throttle scale","debug[3]":"Throttle","debug[4]":"Error","debug[5]":"Proportional","debug[6]":"Integral","debug[7]":"Derivative"},RC_STATS:{"debug[all]":"RC Stats","debug[0]":"Average Throttle"},MAG_CALIB:{"debug[all]":"Mag Calibration","debug[0]":"Mag X","debug[1]":"Mag Y","debug[2]":"Mag Z","debug[3]":"Field Strength","debug[4]":"Estimated Mag Bias X","debug[5]":"Estimated Mag Bias Y","debug[6]":"Estimated Mag Bias Z","debug[7]":"Lambda"},MAG_TASK_RATE:{"debug[all]":"Mag Task Rate","debug[0]":"Task Rate (Hz)","debug[1]":"Actual Data Rate (Hz)","debug[2]":"Data Interval (Us)","debug[3]":"Execute Time (Us)","debug[4]":"Bus Busy","debug[5]":"Read State","debug[6]":"Task Time (Us)"},EZLANDING:{"debug[all]":"EZ Landing","debug[0]":"EZ Land Factor","debug[1]":"Adjusted Throttle","debug[2]":"Upper Limit","debug[3]":"EZ Land Limit","debug[4]":"Stick Limit","debug[5]":"Speed Limit"},MAVLINK_TELEMETRY:{"debug[all]":"MAVLink telemetry","debug[0]":"Should send telemetry","debug[1]":"Actual free TX buffers space","debug[2]":"Status counter","debug[3]":"RC chan. counter","debug[4]":"GPS pos. counter","debug[5]":"Attitude (ex.1) counter","debug[6]":"Heartbeat (ex.2) counter","debug[7]":"Battery (ex.3) counter"}},Le=null;Qe.adjustDebugDefsList=function(t,e){Le={...HP},t===lt&&(dt.default.gte(e,"4.1.0")&&(Le.FF_INTERPOLATED={"debug[all]":"Feedforward [roll]","debug[0]":"Setpoint Delta [roll]","debug[1]":"Boost [roll]","debug[2]":"Boost, clipped [roll]","debug[3]":"Duplicate Counter [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.FF_LIMIT={"debug[all]":"Feedforward Limit [roll]","debug[0]":"FF limit input [roll]","debug[1]":"FF limit input [pitch]","debug[2]":"FF limited [roll]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"}),dt.default.gte(e,"4.2.0")&&(Le.FF_INTERPOLATED={"debug[all]":"Feedforward [roll]","debug[0]":"Setpoint Delta [roll]","debug[1]":"Acceleration [roll]","debug[2]":"Acceleration, clipped [roll]","debug[3]":"Duplicate Counter [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"}),dt.default.gte(e,"4.3.0")&&(Le.FEEDFORWARD={"debug[all]":"Feedforward [roll]","debug[0]":"Setpoint, un-smoothed [roll]","debug[1]":"Delta, smoothed [roll]","debug[2]":"Boost, smoothed [roll]","debug[3]":"rcCommand Delta [roll]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.FEEDFORWARD_LIMIT={"debug[all]":"Feedforward Limit [roll]","debug[0]":"Feedforward input [roll]","debug[1]":"Feedforward input [pitch]","debug[2]":"Feedforward limited [roll]","debug[3]":"Not Used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.DYN_IDLE={"debug[all]":"Dyn Idle","debug[0]":"Dyn Idle P [roll]","debug[1]":"Dyn Idle I [roll]","debug[2]":"Dyn Idle D [roll]","debug[3]":"Min RPM","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.FFT={"debug[all]":"Debug FFT","debug[0]":"Gyro Pre Dyn Notch [dbg-axis]","debug[1]":"Gyro Post Dyn Notch [dbg-axis]","debug[2]":"Gyro Downsampled [dbg-axis]","debug[3]":"Not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.FFT_TIME={"debug[all]":"Debug FFT TIME","debug[0]":"Active calc step","debug[1]":"Step duration","debug[2]":"Not used","debug[3]":"Not used","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.FFT_FREQ={"debug[all]":"Debug FFT FREQ","debug[0]":"Notch 1 Center Freq [dbg-axis]","debug[1]":"Notch 2 Center Freq [dbg-axis]","debug[2]":"Notch 3 Center Freq [dbg-axis]","debug[3]":"Gyro Pre Dyn Notch [dbg-axis]","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.GPS_RESCUE_THROTTLE_PID={"debug[all]":"GPS Rescue Throttle PID","debug[0]":"Throttle P","debug[1]":"Throttle D","debug[2]":"Altitude","debug[3]":"Target Altitude","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"}),dt.default.gte(e,"4.4.0")&&(Le.BARO={"debug[all]":"Debug Barometer","debug[0]":"Baro State","debug[1]":"Baro Pressure","debug[2]":"Baro Temperature","debug[3]":"Baro Altitude","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"},Le.RTH={"debug[all]":"RTH Rescue codes","debug[0]":"Pitch angle, deg","debug[1]":"Rescue Phase","debug[2]":"Failure code","debug[3]":"Failure timers","debug[4]":"Not Used","debug[5]":"Not Used","debug[6]":"Not Used","debug[7]":"Not Used"}),dt.default.gte(e,"4.5.0")&&(Le.ATTITUDE={"debug[all]":"Attitude","debug[0]":"Roll angle","debug[1]":"Pitch angle","debug[2]":"Ground speed factor","debug[3]":"Heading error","debug[4]":"Velocity to home","debug[5]":"Ground speed error ratio","debug[6]":"Pitch forward angle","debug[7]":"dcmKp gain"},Le.GPS_RESCUE_THROTTLE_PID={"debug[all]":"GPS Rescue throttle PID","debug[0]":"Throttle P","debug[1]":"Throttle D","debug[2]":"Altitude","debug[3]":"Target altitude","debug[4]":"Throttle I","debug[5]":"Tilt adjustment","debug[6]":"Throttle D before lp smoothing","debug[7]":"Throttle adjustment"}),dt.default.gte(e,"2025.12.0")&&(Le.FFT_FREQ={"debug[all]":"Debug FFT FREQ","debug[0]":"Gyro Pre Dyn Notch [dbg-axis]","debug[1]":"Notch 1 Center Freq [dbg-axis]","debug[2]":"Notch 2 Center Freq [dbg-axis]","debug[3]":"Notch 3 Center Freq [dbg-axis]","debug[4]":"Notch 4 Center Freq [dbg-axis]","debug[5]":"Notch 5 Center Freq [dbg-axis]","debug[6]":"Notch 6 Center Freq [dbg-axis]","debug[7]":"Notch 7 Center Freq [dbg-axis]"},Le.AUTOPILOT_ALTITUDE={"debug[all]":"Autopilot Altitude","debug[0]":"Autopilot Throttle","debug[1]":"Tilt Multiplier","debug[2]":"Zero Altitude cm","debug[3]":"Altitude cm","debug[4]":"Altitude P","debug[5]":"Altitude I","debug[6]":"Altitude D","debug[7]":"Altitude F"},Le.TPA={"debug[all]":"TPA","debug[0]":"TPA Factor","debug[1]":"TPA Attitude Roll (Wing)","debug[2]":"TPA Attitude Pitch (Wing)","debug[3]":"TPA Calculated Throttle (Wing)","debug[4]":"TPA Speed (Wing)","debug[5]":"TPA Argument (Wing)"},Le.S_TERM={"debug[all]":"S Term","debug[0]":"S Term [roll]","debug[1]":"S Term [pitch]","debug[2]":"S Term [yaw]"},Le.SPA={"debug[all":"SPA","debug[0]":"Setpoint PID Attenuation [roll]","debug[1]":"Setpoint PID Attenuation [pitch]","debug[2]":"Setpoint PID Attenuation [yaw]"},Le.TASK={"debug[all]":"TASK","debug[0]":"Value","debug[1]":"Rate (Hz)","debug[2]":"Max (us)","debug[3]":"Average (us)","debug[4]":"Estimated execution time (us)","debug[5]":"Actual execution time (us)","debug[6]":"Difference estimated vs actual","debug[7]":"Late count"},Le.GIMBAL={"debug[all]":"Gimbal","debug[0]":"Headtracker Roll","debug[1]":"Headtracker Pitch","debug[2]":"Headtracker Yaw","debug[3]":"Gimbal Roll","debug[4]":"Gimbal Pitch","debug[5]":"Gimbal Yaw"},Le.WING_SETPOINT={"debug[all]":"Wing Setpoint","debug[0]":"Current Setpoint [roll]","debug[1]":"Adjusted Setpoint [roll]","debug[2]":"Current Setpoint [pitch]","debug[3]":"Adjusted Setpoint [pitch]","debug[4]":"Current Setpoint [yaw]","debug[5]":"Adjusted Setpoint [yaw]"},Le.OPTICALFLOW={"debug[all]":"Optical Flow","debug[0]":"Quality","debug[1]":"Raw flow rates X","debug[2]":"Raw flow rates Y","debug[3]":"Processed flow rates X","debug[4]":"Processed flow rates Y","debug[5]":"Delta time"},Le.MULTI_GYRO_RAW={"debug[all]":"Debug Multi Gyro Raw","debug[0]":"Gyro 1 Raw [roll]","debug[1]":"Gyro 1 Raw [pitch]","debug[2]":"Gyro 2 Raw [roll]","debug[3]":"Gyro 2 Raw [pitch]","debug[4]":"Gyro 3 Raw [roll]","debug[5]":"Gyro 3 Raw [pitch]","debug[6]":"Gyro 4 Raw [roll]","debug[7]":"Gyro 4 Raw [pitch]"},Le.MULTI_GYRO_DIFF={"debug[all]":"Debug Multi Gyro Diff","debug[0]":"Gyro 1 Diff [roll]","debug[1]":"Gyro 1 Diff [pitch]","debug[2]":"Gyro 2 Diff [roll]","debug[3]":"Gyro 2 Diff [pitch]","debug[4]":"Gyro 3 Diff [roll]","debug[5]":"Gyro 3 Diff [pitch]","debug[6]":"Gyro 4 Diff [roll]","debug[7]":"Gyro 4 Diff [pitch]"},Le.MULTI_GYRO_SCALED={"debug[all]":"Multi Gyro Scaled","debug[0]":"Gyro 1 [roll]","debug[1]":"Gyro 1 [pitch]","debug[2]":"Gyro 2 [roll]","debug[3]":"Gyro 2 [pitch]","debug[4]":"Gyro 3 [roll]","debug[5]":"Gyro 3 [pitch]","debug[6]":"Gyro 4 [roll]","debug[7]":"Gyro 4 [pitch]"},Le.AUTOPILOT_POSITION={"debug[all]":"Autopilot Position","debug[0]":"Distance","debug[1]":"GPS Distance","debug[2]":"PID Sum EF","debug[3]":"Angle","debug[4]":"pidP","debug[5]":"pidI","debug[6]":"pidD","debug[7]":"pidA"},Le.FEEDFORWARD={"debug[all]":"Feedforward [debug_axis]","debug[0]":"Setpoint, un-smoothed","debug[1]":"Delta, smoothed","debug[2]":"Boost, smoothed","debug[3]":"rcCommand Delta","debug[4]":"Jitter Attenuator","debug[5]":"Duplicate Flag","debug[6]":"Yaw FF BaseAmt","debug[7]":"Yaw FF HoldAmt"},Le.FEEDFORWARD_LIMIT={"debug[all]":"Feedforward Limit","debug[0]":"Jitter Attenuator","debug[1]":"MaxRcRate [debugAxis]","debug[2]":"Setpoint","debug[3]":"Feedforward","debug[4]":"Setpoint Speed","debug[5]":"Setpoint Speed Smoothed","debug[6]":"FF PT1K","debug[7]":"Rx Rate"},Le.RX_TIMING={"debug[all]":"Receiver Timing","debug[0]":"Frame Interval","debug[1]":"Frame TimeStamp","debug[2]":"Is Rate Valid","debug[3]":"Interval Constrained","debug[4]":"Rx Rate","debug[5]":"Smoothed Rx Rate","debug[6]":"LQ Percent","debug[7]":"Is Receiving Signal"},Le.RC_SMOOTHING={"debug[all]":"Debug RC Smoothing","debug[0]":"Rx Rate Current","debug[1]":"Rx Rate For Cutoffs","debug[2]":"Cutoff Hz","debug[3]":"Throttle Cutoff Hz","debug[4]":"FF Smoothing PT1K","debug[5]":"Smoothed Rx Rate","debug[6]":"Outlier Count","debug[7]":"Valid Count"}),dt.default.gte(e,"2026.6.0")&&(Le.GYRO_SAMPLE={...Le.GYRO_SAMPLE,"debug[4]":"Avg System Load %"}))};Qe.presentFlags=function(t,e){let n=!1,i=0,r="";for(;t>0;)(t&1)!==0&&(n?r+="|":n=!0,r+=e[i]),t>>=1,i++;return n?r:"0"};Qe.presentChangeEvent=function(e,n,i){let r="",s=!1,o=32,a=i.length;a>o&&(a=o);for(let l=0;l<a;l++)1<<l&(e^n)&&(r+=`${s?"|":""}${i[l]} ${1<<l&e?"ON":"OFF"}`,s=!0);return s||(r+=" | ACRO"),r};Qe.presentEnum=function(e,n){return n[e]===void 0?e:n[e]};Qe.decodeCorrectAltitude=function(t,e){switch(e){case 1:return`${t.toFixed(2)} m`;case 2:return`${(t*3.28).toFixed(2)} ft`}};Qe.decodeAltitudeLogToChart=function(t,e){switch(e){case 1:return t;case 2:return t*3.28}};Qe.decodeFieldToFriendly=function(t,e,n,i){let{userSettings:r}=bu();if(n===void 0)return"";let s=t&&t.getSysConfig().blackbox_high_resolution>0?10:1,o=t&&t.getSysConfig().blackbox_high_resolution>0?1:0;switch(e){case"time":return uh(n/1e3,!0);case"gyroADC[0]":case"gyroADC[1]":case"gyroADC[2]":case"gyroUnfilt[0]":case"gyroUnfilt[1]":case"gyroUnfilt[2]":return`${t.gyroRawToDegreesPerSecond(n/s).toFixed(o)} \xB0/s`;case"gyroADCs[0]":case"gyroADCs[1]":case"gyroADCs[2]":return`${n.toFixed(0)} \xB0/s`;case"axisError[0]":case"axisError[1]":case"axisError[2]":return`${(n/s).toFixed(o)} \xB0/s`;case"rcCommand[0]":case"rcCommand[1]":case"rcCommand[2]":return`${(n/s+1500).toFixed(o)} us`;case"rcCommand[3]":return`${(n/s).toFixed(o)} us`;case"motor[0]":case"motor[1]":case"motor[2]":case"motor[3]":case"motor[4]":case"motor[5]":case"motor[6]":case"motor[7]":return`${t.rcMotorRawToPctPhysical(n).toFixed(2)} %`;case"eRPM[0]":case"eRPM[1]":case"eRPM[2]":case"eRPM[3]":case"eRPM[4]":case"eRPM[5]":case"eRPM[6]":case"eRPM[7]":{let a=t.getSysConfig().motor_poles;return`${(n*200/a).toFixed(0)} rpm / ${(n*3.333/a).toFixed(1)} hz`}case"rcCommands[0]":case"rcCommands[1]":case"rcCommands[2]":return`${(n/s).toFixed(o)} \xB0/s`;case"rcCommands[3]":return`${n.toFixed(1)}%`;case"axisSum[0]":case"axisSum[1]":case"axisSum[2]":case"axisP[0]":case"axisP[1]":case"axisP[2]":case"axisI[0]":case"axisI[1]":case"axisI[2]":case"axisD[0]":case"axisD[1]":case"axisD[2]":case"axisF[0]":case"axisF[1]":case"axisF[2]":case"axisS[0]":case"axisS[1]":case"axisS[2]":return`${t.getPIDPercentage(n).toFixed(1)} %`;case"accSmooth[0]":case"accSmooth[1]":case"accSmooth[2]":return`${t.accRawToGs(n).toFixed(2+o)} g`;case"vbatLatest":return t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"4.0.0")?`${(n/100).toFixed(2)}V, ${(n/100/t.getNumCellsEstimate()).toFixed(2)} V/cell`:t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.0")||t.getSysConfig().firmwareType===tn&&dt.default.gte(t.getSysConfig().firmwareVersion,"2.0.0")?`${(n/10).toFixed(2)}V, ${(n/10/t.getNumCellsEstimate()).toFixed(2)} V/cell`:`${(t.vbatADCToMillivolts(n)/1e3).toFixed(2)}V, ${(t.vbatADCToMillivolts(n)/1e3/t.getNumCellsEstimate()).toFixed(2)} V/cell`;case"amperageLatest":return t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.7")||t.getSysConfig().firmwareType===tn&&dt.default.gte(t.getSysConfig().firmwareVersion,"2.0.0")?`${(n/100).toFixed(2)}A, ${(n/100/t.getNumMotors()).toFixed(2)} A/motor`:t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.0")?`${(n/100).toFixed(2)}A, ${(n/100/t.getNumMotors()).toFixed(2)} A/motor`:`${(t.amperageADCToMillivolts(n)/1e3).toFixed(2)}A, ${(t.amperageADCToMillivolts(n)/1e3/t.getNumMotors()).toFixed(2)} A/motor`;case"heading[0]":case"heading[1]":case"heading[2]":return`${(n/Math.PI*180).toFixed(1)}\xB0`;case"baroAlt":return Qe.decodeCorrectAltitude(n/100,r.altitudeUnits);case"flightModeFlags":return Qe.presentFlags(n,Ge);case"stateFlags":return Qe.presentFlags(n,ih);case"failsafePhase":return Qe.presentEnum(n,rh);case"features":return Qe.presentEnum(n,nh);case"rssi":return`${(n/1024*100).toFixed(2)} %`;case"GPS_numSat":return`${n}`;case"GPS_coord[0]":case"GPS_coord[1]":return`${(n/1e7).toFixed(5)}`;case"GPS_altitude":return Qe.decodeCorrectAltitude(n/10,r.altitudeUnits);case"GPS_speed":switch(r.speedUnits){case 1:return`${(n/100).toFixed(2)} m/s`;case 2:return`${(n/100*3.6).toFixed(2)} kph`;case 3:return`${(n/100*2.2369).toFixed(2)} mph`;default:return`${(n/100).toFixed(2)} m/s`}case"GPS_ground_course":return`${(n/10).toFixed(1)} \xB0`;case"GPS_velned[0]":case"GPS_velned[1]":case"GPS_velned[2]":return`${(n/100).toFixed(1)} m/s`;case"gpsCartesianCoords[0]":case"gpsCartesianCoords[1]":case"gpsCartesianCoords[2]":case"gpsDistance":return`${n.toFixed(0)} m`;case"gpsHomeAzimuth":case"gpsTrajectoryTiltAngle":return`${n.toFixed(1)} \xB0`;case"magADC[0]":case"magADC[1]":case"magADC[2]":return`${(n/10).toFixed(1)} \xB0`;case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":return Qe.decodeDebugFieldToFriendly(t,e,n);default:return n?.toFixed(0)}};Qe.decodeDebugFieldToFriendly=function(t,e,n){if(t){switch(Ae[t.getSysConfig().debug_mode]){case"NONE":case"AIRMODE":case"BARO":switch(e){case"debug[1]":return`${n.toFixed(0)} hPa`;case"debug[2]":return`${(n/100).toFixed(2)} \xB0C`;case"debug[3]":return`${(n/100).toFixed(2)} m`;default:return`${n.toFixed(0)}`}case"VELOCITY":case"DFILTER":return"";case"CYCLETIME":switch(e){case"debug[1]":return`${n.toFixed(0)} %`;default:return`${n.toFixed(0)}\u03BCS`}case"BATTERY":switch(e){case"debug[0]":return n.toFixed(0);default:return`${(n/10).toFixed(1)} V`}case"ACCELEROMETER":return`${t.accRawToGs(n).toFixed(2)} g`;case"MIXER":return`${Math.round(t.rcCommandRawToThrottle(n))} %`;case"PIDLOOP":return`${n.toFixed(0)} \u03BCS`;case"RC_INTERPOLATION":switch(e){case"debug[1]":return`${n.toFixed(0)} ms`;case"debug[3]":return`${n.toFixed(0)} \xB0/s`;default:return n.toFixed(0)}case"GYRO":case"GYRO_FILTERED":case"GYRO_SCALED":case"DUAL_GYRO":case"DUAL_GYRO_COMBINED":case"DUAL_GYRO_DIFF":case"DUAL_GYRO_RAW":case"MULTI_GYRO_DIFF":case"MULTI_GYRO_RAW":case"MULTI_GYRO_SCALED":case"NOTCH":case"GYRO_SAMPLE":return e==="debug[4]"?`${n.toFixed(0)} %`:`${Math.round(t.gyroRawToDegreesPerSecond(n))} \xB0/s`;case"ANGLERATE":return`${n.toFixed(0)} \xB0/s`;case"ESC_SENSOR":switch(e){case"debug[3]":return`${n.toFixed(0)} \u03BCS`;default:return n.toFixed(0)}case"SCHEDULER":return`${n.toFixed(0)} \u03BCS`;case"STACK":return n.toFixed(0);case"ESC_SENSOR_RPM":return`${n.toFixed(0)} rpm`;case"ESC_SENSOR_TMP":return`${n.toFixed(0)} \xB0C`;case"ALTITUDE":switch(e){case"debug[0]":return n.toFixed(0);case"debug[1]":case"debug[2]":case"debug[3]":return`${(n/100).toFixed(2)} m`;default:return n.toFixed(0)}case"FFT":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":return`${Math.round(t.gyroRawToDegreesPerSecond(n))} \xB0/s`;default:return n.toFixed(0)}case"FFT_TIME":switch(e){case"debug[0]":return Qe.presentEnum(n,sh);case"debug[1]":return`${n.toFixed(0)} \u03BCs`;default:return n.toFixed(0)}case"FFT_FREQ":if(dt.default.gte(t.getSysConfig().firmwareVersion,"2025.12.0"))switch(e){case"debug[0]":return`${Math.round(t.gyroRawToDegreesPerSecond(n))} \xB0/s`;default:return`${n.toFixed(0)} Hz`}else switch(e){case"debug[3]":return`${Math.round(t.gyroRawToDegreesPerSecond(n))} \xB0/s`;default:return`${n.toFixed(0)} Hz`}case"RTH":return n.toFixed(0);case"ITERM_RELAX":switch(e){case"debug[0]":return`${n.toFixed(0)} \xB0/s`;case"debug[1]":return`${n.toFixed(0)} %`;case"debug[3]":return`${(n/10).toFixed(1)} \xB0`;default:return n.toFixed(0)}case"RC_SMOOTHING":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":case"debug[5]":return`${n.toFixed(0)} Hz`;case"debug[4]":return`${(n/1e3).toFixed(3)}`;default:return n.toFixed(0)}case"RC_SMOOTHING_RATE":switch(e){case"debug[0]":return`${(n/1e3).toFixed(2)} ms`;case"debug[2]":return`${n.toFixed(0)} Hz`;default:return n.toFixed(0)}case"DSHOT_RPM_TELEMETRY":return`${(n*200/t.getSysConfig().motor_poles).toFixed(0)} rpm / ${(n*3.333/t.getSysConfig().motor_poles).toFixed(0)} hz`;case"RPM_FILTER":return`${(n*60).toFixed(0)}rpm / ${n.toFixed(0)} Hz`;case"D_MAX":switch(e){case"debug[0]":case"debug[1]":return`${n.toFixed(0)} %`;case"debug[2]":case"debug[3]":return(n/10).toFixed(1);default:return n.toFixed(0)}case"DYN_LPF":switch(e){case"debug[0]":case"debug[3]":return`${Math.round(t.gyroRawToDegreesPerSecond(n))} \xB0/s`;default:return`${n.toFixed(0)} Hz`}case"DYN_IDLE":switch(e){case"debug[3]":return`${n*6} rpm / ${(n/10).toFixed(0)} hz`;default:return n.toFixed(0)}case"AC_CORRECTION":return`${(n/10).toFixed(1)} \xB0/s`;case"AC_ERROR":return`${(n/10).toFixed(1)} \xB0`;case"RX_TIMING":switch(e){case"debug[0]":case"debug[3]":return`${(n/100).toFixed(2)} ms`;case"debug[1]":return`${(n/10).toFixed(1)} ms`;case"debug[4]":case"debug[5]":return`${n.toFixed(0)} Hz`;case"debug[6]":case"debug[2]":case"debug[7]":default:return n.toFixed(0)}case"GHST":switch(e){case"debug[3]":return`${n.toFixed(0)} %`;default:return n.toFixed(0)}case"GHST_MSP":return n.toFixed(0);case"SCHEDULER_DETERMINISM":switch(e){case"debug[0]":case"debug[2]":case"debug[3]":return`${(n/10).toFixed(1)} us`;default:return n.toFixed(0)}case"TIMING_ACCURACY":switch(e){case"debug[0]":return`${n.toFixed(1)} %`;case"debug[2]":return`${(n/10).toFixed(1)} us`;default:return n.toFixed(0)}case"RX_EXPRESSLRS_SPI":switch(e){case"debug[3]":return`${n.toFixed(1)} %`;default:return n.toFixed(0)}case"RX_EXPRESSLRS_PHASELOCK":switch(e){case"debug[2]":return`${n.toFixed(0)} ticks`;default:return`${n.toFixed(0)} us`}case"GPS_RESCUE_THROTTLE_PID":switch(e){case"debug[0]":case"debug[1]":case"debug[4]":case"debug[6]":return`${n.toFixed(0)} uS`;case"debug[2]":case"debug[3]":return`${(n/100).toFixed(1)} m`;default:return n.toFixed(0)}case"GPS_RESCUE_VELOCITY":switch(e){case"debug[0]":case"debug[1]":return`${(n/100).toFixed(1)} \xB0`;case"debug[2]":case"debug[3]":return`${(n/100).toFixed(1)} m/s`;default:return n.toFixed(0)}case"GPS_RESCUE_HEADING":switch(e){case"debug[0]":return`${(n/100).toFixed(2)} m/s`;case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":return`${(n/10).toFixed(1)} \xB0`;case"debug[6]":return`${(n/100).toFixed(1)} \xB0`;case"debug[5]":case"debug[7]":default:return n.toFixed(0)}case"GPS_RESCUE_TRACKING":switch(e){case"debug[0]":case"debug[1]":return`${(n/100).toFixed(1)} m/s`;case"debug[2]":case"debug[3]":return`${(n/100).toFixed(1)} m`;default:return n.toFixed(0)}case"GPS__CONNECTION":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":return n.toFixed(0);case"debug[3]":return(n*100).toFixed(0);case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":default:return n.toFixed(0)}case"ATTITUDE":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":default:return n.toFixed(0)}case"VTX_MSP":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":default:return n.toFixed(0)}case"GPS_DOP":switch(e){case"debug[0]":return n.toFixed(0);case"debug[1]":case"debug[2]":case"debug[3]":default:return(n/100).toFixed(2)}case"FAILSAFE":return n.toFixed(0);case"GYRO_CALIBRATION":return n.toFixed(0);case"ANGLE_MODE":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":return`${(n/10).toFixed(1)} \xB0`;default:return n.toFixed(0)}case"ANGLE_TARGET":return n.toFixed(0);case"CURRENT_ANGLE":return n.toFixed(0);case"DSHOT_TELEMETRY_COUNTS":return n.toFixed(0);case"EZLANDING":return`${(n/100).toFixed(2)} %`;case"OPTICALFLOW":switch(e){case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":return`${(n/1e3).toFixed(1)}`;default:return n.toFixed(1)}case"AUTOPILOT_POSITION":switch(e){case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":return`${(n/10).toFixed(1)}`;default:return n.toFixed(1)}case"TPA":switch(e){case"debug[1]":case"debug[2]":return`${(n/10).toFixed(1)} \xB0`;case"debug[4]":return`${(n/10).toFixed(1)} m/s`;default:return n.toFixed(1)}case"FEEDFORWARD":switch(e){case"debug[0]":return`${n.toFixed(0)} \xB0/s`;case"debug[1]":return`${n.toFixed(0)} \xB0/s/s`;case"debug[3]":return`${(n/10).toFixed(1)}`;case"debug[4]":return`${n.toFixed(0)} %`;default:return n.toFixed(0)}case"FEEDFORWARD_LIMIT":switch(e){case"debug[0]":return`${n.toFixed(0)} %`;case"debug[6]":return`${(n/1e3).toFixed(3)}`;case"debug[7]":return`${n.toFixed(0)} Hz`;default:return n.toFixed(0)}}return n.toFixed(0)}return n.toFixed(0)};Qe.fieldNameToFriendly=function(t,e){if(e&&t.includes("debug")){let n=Ae[e],i;if(n&&(i=Le[n]),!i){if(t==="debug[all]")return`Debug (${n||e})`;i=Le[Ae[0]]}return i[t]??t}return Ny[t]?Ny[t]:t};Qe.ConvertFieldValue=function(t,e,n,i){let{userSettings:r}=bu();if(i===void 0)return 0;let s=t&&t.getSysConfig().blackbox_high_resolution>0?10:1;switch(e){case"time":return n?i/1e3:i*1e3;case"gyroADC[0]":case"gyroADC[1]":case"gyroADC[2]":case"gyroUnfilt[0]":case"gyroUnfilt[1]":case"gyroUnfilt[2]":return n?t.gyroRawToDegreesPerSecond(i/s):i*s/t.gyroRawToDegreesPerSecond(1);case"axisError[0]":case"axisError[1]":case"axisError[2]":return n?i/s:i*s;case"rcCommand[0]":case"rcCommand[1]":case"rcCommand[2]":return n?i/s+1500:(i-1500)*s;case"rcCommand[3]":return n?i/s:i*s;case"motor[0]":case"motor[1]":case"motor[2]":case"motor[3]":case"motor[4]":case"motor[5]":case"motor[6]":case"motor[7]":return n?t.rcMotorRawToPctPhysical(i):t.PctPhysicalTorcMotorRaw(i);case"eRPM[0]":case"eRPM[1]":case"eRPM[2]":case"eRPM[3]":case"eRPM[4]":case"eRPM[5]":case"eRPM[6]":case"eRPM[7]":{let o=t.getSysConfig().motor_poles;return n?i*200/o:i*o/200}case"axisSum[0]":case"axisSum[1]":case"axisSum[2]":case"axisP[0]":case"axisP[1]":case"axisP[2]":case"axisI[0]":case"axisI[1]":case"axisI[2]":case"axisD[0]":case"axisD[1]":case"axisD[2]":case"axisF[0]":case"axisF[1]":case"axisF[2]":case"axisS[0]":case"axisS[1]":case"axisS[2]":return n?t.getPIDPercentage(i):i/t.getPIDPercentage(1);case"accSmooth[0]":case"accSmooth[1]":case"accSmooth[2]":return n?t.accRawToGs(i):i/t.accRawToGs(1);case"vbatLatest":return t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"4.0.0")?n?i/100:i*100:t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.0")||t.getSysConfig().firmwareType===tn&&dt.default.gte(t.getSysConfig().firmwareVersion,"2.0.0")?n?i/10:i*10:n?i/1e3:i*1e3;case"amperageLatest":return t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.7")||t.getSysConfig().firmwareType===tn&&dt.default.gte(t.getSysConfig().firmwareVersion,"2.0.0")||t.getSysConfig().firmwareType===lt&&dt.default.gte(t.getSysConfig().firmwareVersion,"3.1.0")?n?i/100:i*100:n?i/1e3:i*1e3;case"heading[0]":case"heading[1]":case"heading[2]":return n?i/Math.PI*180:i*Math.PI/180;case"baroAlt":return n?Qe.decodeAltitudeLogToChart(i/100,r.altitudeUnits):i*100/Qe.decodeAltitudeLogToChart(1,r.altitudeUnits);case"flightModeFlags":return i;case"stateFlags":return i;case"failsafePhase":return i;case"features":return i;case"rssi":return n?i/1024*100:i*1024/100;case"GPS_numSat":return i;case"GPS_coord[0]":case"GPS_coord[1]":return n?i/1e7:i*1e7;case"GPS_altitude":return n?Qe.decodeAltitudeLogToChart(i/10,r.altitudeUnits):i*10/Qe.decodeAltitudeLogToChart(1,r.altitudeUnits);case"GPS_speed":switch(r.speedUnits){case 1:return n?i/100:i*100;case 2:return n?i/100*3.6:100*i/3.6;case 3:return n?i/100*2.2369:i*100/2.2369;default:return n?i/100:i*100}case"GPS_ground_course":return n?i/10:i*10;case"GPS_velned[0]":case"GPS_velned[1]":case"GPS_velned[2]":return n?i/100:i*100;case"magADC[0]":case"magADC[1]":case"magADC[2]":return n?i/10:i*10;case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":return Qe.ConvertDebugFieldValue(t,e,n,i);default:return i}};Qe.ConvertDebugFieldValue=function(t,e,n,i){if(t)switch(Ae[t.getSysConfig().debug_mode]){case"NONE":case"AIRMODE":case"BARO":switch(e){case"debug[1]":return i;case"debug[2]":return n?i/100:i*100;case"debug[3]":return n?i/100:i*100;default:return i}case"VELOCITY":case"DFILTER":return i;case"CYCLETIME":switch(e){case"debug[1]":return i;default:return i}case"BATTERY":switch(e){case"debug[0]":return i;default:return n?i/10:i*10}case"ACCELEROMETER":return n?t.accRawToGs(i):i/t.accRawToGs(1);case"MIXER":return n?t.rcCommandRawToThrottle(i):t.ThrottleTorcCommandRaw(i);case"PIDLOOP":return i;case"RC_INTERPOLATION":switch(e){case"debug[1]":return i;case"debug[3]":return i;default:return i}case"GYRO":case"GYRO_FILTERED":case"GYRO_SCALED":case"DUAL_GYRO":case"DUAL_GYRO_COMBINED":case"DUAL_GYRO_DIFF":case"DUAL_GYRO_RAW":case"MULTI_GYRO_DIFF":case"MULTI_GYRO_RAW":case"MULTI_GYRO_SCALED":case"NOTCH":case"GYRO_SAMPLE":return e==="debug[4]"?i:n?t.gyroRawToDegreesPerSecond(i):i/t.gyroRawToDegreesPerSecond(1);case"ANGLERATE":return i;case"ESC_SENSOR":switch(e){case"debug[3]":return i;default:return i}case"SCHEDULER":return i;case"STACK":return i;case"ESC_SENSOR_RPM":return i;case"ESC_SENSOR_TMP":return i;case"ALTITUDE":switch(e){case"debug[0]":return i;case"debug[1]":case"debug[2]":case"debug[3]":return n?i/100:i*100;default:return i}case"FFT":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":return n?t.gyroRawToDegreesPerSecond(i):i/t.gyroRawToDegreesPerSecond(1);default:return i}case"FFT_TIME":switch(e){case"debug[0]":return i;case"debug[1]":return i;default:return i}case"FFT_FREQ":if(dt.default.gte(t.getSysConfig().firmwareVersion,"2025.12.0"))switch(e){case"debug[0]":return n?t.gyroRawToDegreesPerSecond(i):i/t.gyroRawToDegreesPerSecond(1);default:return i}else switch(e){case"debug[3]":return n?t.gyroRawToDegreesPerSecond(i):i/t.gyroRawToDegreesPerSecond(1);default:return i}case"RTH":return i;case"ITERM_RELAX":switch(e){case"debug[0]":return i;case"debug[1]":return i;case"debug[3]":return n?i/10:i*10;default:return i}case"RC_SMOOTHING":switch(e){case"debug[4]":return n?i/1e3:i*1e3;default:return i}case"RC_SMOOTHING_RATE":switch(e){case"debug[0]":return n?i/1e3:i*1e3;case"debug[2]":case"debug[3]":default:return i}case"DSHOT_RPM_TELEMETRY":{let s=t.getSysConfig().motor_poles;return n?i*200/s:i*s/200}case"RPM_FILTER":return n?i*60:i/60;case"D_MAX":switch(e){case"debug[0]":case"debug[1]":return i;case"debug[2]":case"debug[3]":return n?i/10:i*10;default:return i}case"DYN_LPF":switch(e){case"debug[0]":case"debug[3]":return n?t.gyroRawToDegreesPerSecond(i):i/t.gyroRawToDegreesPerSecond(1);default:return i}case"DYN_IDLE":switch(e){case"debug[3]":return n?i*6:i/6;default:return i}case"AC_CORRECTION":return n?i/10:i*10;case"AC_ERROR":return n?i/10:i*10;case"RX_TIMING":switch(e){case"debug[0]":case"debug[3]":return n?i/100:i*100;case"debug[1]":return n?i/10:i*10;default:return i}case"GHST":switch(e){case"debug[3]":return i;default:return i}case"GHST_MSP":return i;case"SCHEDULER_DETERMINISM":switch(e){case"debug[0]":case"debug[2]":case"debug[3]":return n?i/10:i*10;default:return i}case"TIMING_ACCURACY":switch(e){case"debug[0]":return i;case"debug[2]":return n?i/10:i*10;default:return i}case"RX_EXPRESSLRS_SPI":switch(e){case"debug[3]":return i;default:return i}case"RX_EXPRESSLRS_PHASELOCK":switch(e){case"debug[2]":return i;default:return i}case"GPS_RESCUE_THROTTLE_PID":switch(e){case"debug[0]":case"debug[1]":case"debug[4]":case"debug[6]":return i;case"debug[2]":case"debug[3]":return n?i/100:i*100;default:return i}case"GPS_RESCUE_VELOCITY":switch(e){case"debug[0]":case"debug[1]":return n?i/100:i*100;case"debug[2]":case"debug[3]":return n?i/100:i*100;default:return i}case"GPS_RESCUE_HEADING":switch(e){case"debug[0]":return n?i/100:i*100;case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":return n?i/10:i*10;case"debug[6]":return n?i/100:i*100;case"debug[5]":case"debug[7]":default:return i}case"GPS_RESCUE_TRACKING":switch(e){case"debug[0]":case"debug[1]":return n?i/100:i*100;case"debug[2]":case"debug[3]":return n?i/100:i*100;default:return i}case"GPS__CONNECTION":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":return i;case"debug[3]":return n?i*100:i/100;case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":default:return i}case"ATTITUDE":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":default:return i}case"VTX_MSP":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":default:return i}case"GPS_DOP":switch(e){case"debug[0]":return i;case"debug[1]":case"debug[2]":case"debug[3]":default:return n?i/100:i*100}case"FAILSAFE":return i;case"GYRO_CALIBRATION":return i;case"ANGLE_MODE":switch(e){case"debug[0]":case"debug[1]":case"debug[2]":case"debug[3]":return n?i/10:i*10;default:return i}case"ANGLE_TARGET":return i;case"CURRENT_ANGLE":return i;case"DSHOT_TELEMETRY_COUNTS":return i;case"OPTICALFLOW":switch(e){case"debug[1]":case"debug[2]":case"debug[3]":case"debug[4]":return n?i/1e3:i*1e3;default:return i}case"AUTOPILOT_POSITION":switch(e){case"debug[2]":case"debug[3]":case"debug[4]":case"debug[5]":case"debug[6]":case"debug[7]":return n?i/10:i*10;default:return i}case"TPA":switch(e){case"debug[1]":case"debug[2]":case"debug[4]":return n?i/10:i*10;default:return i}case"FEEDFORWARD":switch(e){case"debug[3]":return n?i/10:i*10;default:return i}case"FEEDFORWARD_LIMIT":switch(e){case"debug[6]":return n?i/1e3:i*1e3;default:return i}}return i};var bs=-1,st=function(t,e,n){this.data=t,this.eof=!1,this.start=e===void 0?0:e,this.end=n===void 0?t.length:n,this.pos=this.start};st.prototype.readChar=function(){return this.pos<this.end?String.fromCharCode(this.data[this.pos++]):(this.eof=!0,bs)};st.prototype.readByte=function(){return this.pos<this.end?this.data[this.pos++]:(this.eof=!0,bs)};st.prototype.readU8=st.prototype.readByte;st.prototype.readS8=function(){return In(this.readByte())};st.prototype.unreadChar=function(t){this.pos--};st.prototype.peekChar=function(){return this.pos<this.end?String.fromCharCode(this.data[this.pos]):(this.eof=!0,bs)};st.prototype.readUnsignedVB=function(){let t,e,n=0,i=0;for(t=0;t<5;t++){if(e=this.readByte(),e===bs)return 0;if(i=i|(e&-129)<<n,e<128)return i>>>0;n+=7}return 0};st.prototype.readSignedVB=function(){let t=this.readUnsignedVB();return t>>>1^-(t&1)};st.prototype.readString=function(t){let e=new Array(t),n;for(n=0;n<t;n++)e[n]=this.readChar();return e.join("")};st.prototype.readS16=function(){let t=this.readByte(),e=this.readByte();return Wn(t|e<<8)};st.prototype.readU16=function(){let t=this.readByte(),e=this.readByte();return t|e<<8};st.prototype.readU32=function(){let t=this.readByte(),e=this.readByte(),n=this.readByte(),i=this.readByte();return t|e<<8|n<<16|i<<24};st.prototype.nextOffsetOf=function(t){let e,n;for(e=this.pos;e<=this.end-t.length;e++)if(this.data[e]===t[0]){for(n=1;n<t.length&&this.data[e+n]===t[n];n++);if(n===t.length)return e}return-1};st.prototype.EOF=bs;st.prototype.readTag2_3S32=function(t){let e,n,i,r,s,o;switch(e=this.readByte(),e>>6){case 0:t[0]=yi(e>>4&3),t[1]=yi(e>>2&3),t[2]=yi(e&3);break;case 1:t[0]=Pn(e&15),e=this.readByte(),t[1]=Pn(e>>4),t[2]=Pn(e&15);break;case 2:t[0]=Ks(e&63),e=this.readByte(),t[1]=Ks(e&63),e=this.readByte(),t[2]=Ks(e&63);break;case 3:for(o=0;o<3;o++){switch(e&3){case 0:n=this.readByte(),t[o]=In(n);break;case 1:n=this.readByte(),i=this.readByte(),t[o]=Wn(n|i<<8);break;case 2:n=this.readByte(),i=this.readByte(),r=this.readByte(),t[o]=gl(n|i<<8|r<<16);break;case 3:n=this.readByte(),i=this.readByte(),r=this.readByte(),s=this.readByte(),t[o]=n|i<<8|r<<16|s<<24;break}e>>=2}break}};st.prototype.readTag2_3SVariable=function(t){let e,n,i,r,s,o,a,l;switch(e=this.readByte(),e>>6){case 0:t[0]=yi(e>>4&3),t[1]=yi(e>>2&3),t[2]=yi(e&3);break;case 1:t[0]=yl((e&62)>>1),n=this.readByte(),t[1]=yl((e&1)<<5|(n&15)>>4),t[2]=Pn(n&15);break;case 2:n=this.readByte(),t[1]=In((e&63)<<2|(n&192)>>6),i=this.readByte(),t[1]=_l((n&63)<<1|(n&128)>>7),t[2]=_l(i&127);break;case 3:for(l=0;l<3;l++){switch(e&3){case 0:r=this.readByte(),t[l]=In(r);break;case 1:r=this.readByte(),s=this.readByte(),t[l]=Wn(r|s<<8);break;case 2:r=this.readByte(),s=this.readByte(),o=this.readByte(),t[l]=gl(r|s<<8|o<<16);break;case 3:r=this.readByte(),s=this.readByte(),o=this.readByte(),a=this.readByte(),t[l]=r|s<<8|o<<16|a<<24;break}e>>=2}break}};st.prototype.readTag8_4S16_v1=function(t){let s,o,a,l,c;for(s=this.readByte(),c=0;c<4;c++){switch(s&3){case 0:t[c]=0;break;case 1:o=this.readByte(),t[c]=Pn(o&15),c++,s>>=2,t[c]=Pn(o>>4);break;case 2:t[c]=In(this.readByte());break;case 3:a=this.readByte(),l=this.readByte(),t[c]=Wn(a|l<<8);break}s>>=2}};st.prototype.readTag8_4S16_v2=function(t){let s,o,a,l,c,u;for(s=this.readByte(),u=0,o=0;o<4;o++){switch(s&3){case 0:t[o]=0;break;case 1:u===0?(c=this.readByte(),t[o]=Pn(c>>4),u=1):(t[o]=Pn(c&15),u=0);break;case 2:u===0?t[o]=In(this.readByte()):(a=(c&15)<<4,c=this.readByte(),a|=c>>4,t[o]=In(a));break;case 3:u===0?(a=this.readByte(),l=this.readByte(),t[o]=Wn(a<<8|l)):(a=this.readByte(),l=this.readByte(),t[o]=Wn((c&15)<<12|a<<4|l>>4),c=l);break}s>>=2}};st.prototype.readTag8_8SVB=function(t,e){let n,i;if(e===1)t[0]=this.readSignedVB();else for(i=this.readByte(),n=0;n<8;n++,i>>=1)t[n]=i&1?this.readSignedVB():0};function ht(t){let F=st.prototype.EOF,w=10,I=[{name:"None"},{name:"RC Rate",scale:.01},{name:"RC Expo",scale:.01},{name:"Throttle Expo",scale:.01},{name:"Pitch & Roll Rate",scale:.01},{name:"Yaw rate",scale:.01},{name:"Pitch & Roll P",scale:.1,scalef:1},{name:"Pitch & Roll I",scale:.001,scalef:.1},{name:"Pitch & Roll D",scalef:1e3},{name:"Yaw P",scale:.1,scalef:1},{name:"Yaw I",scale:.001,scalef:.1},{name:"Yaw D",scalef:1e3},{name:"Rate Profile"},{name:"Pitch Rate",scale:.01},{name:"Roll Rate",scale:.01},{name:"Pitch P",scale:.1,scalef:1},{name:"Pitch I",scale:.001,scalef:.1},{name:"Pitch D",scalef:1e3},{name:"Roll P",scale:.1,scalef:1},{name:"Roll I",scale:.001,scalef:.1},{name:"Roll D",scalef:1e3}],m,x={frameIntervalI:32,frameIntervalPNum:1,frameIntervalPDenom:1,firmwareType:th,rcRate:90,vbatscale:110,vbatref:4095,vbatmincellvoltage:33,vbatmaxcellvoltage:43,vbatwarningcellvoltage:35,gyroScale:1e-4,acc_1G:2048,minthrottle:1150,maxthrottle:1850,currentMeterOffset:0,currentMeterScale:400,deviceUID:null},D={abs_control_gain:null,anti_gravity_gain:null,anti_gravity_p_gain:null,anti_gravity_mode:null,anti_gravity_threshold:null,anti_gravity_cutoff_hz:null,blackbox_high_resolution:null,thrMid:null,thrExpo:null,tpa_mode:null,tpa_breakpoint:null,airmode_activate_throttle:null,serialrx_provider:null,superExpoFactor:null,rates:[null,null,null],rate_limits:[1998,1998,1998],rc_rates:[null,null,null],rc_expo:[null,null,null],looptime:null,gyro_sync_denom:null,pid_process_denom:null,pidController:null,rollPID:[null,null,null],pitchPID:[null,null,null],yawPID:[null,null,null],altPID:[null,null,null],posPID:[null,null,null],posrPID:[null,null,null],navrPID:[null,null,null],levelPID:[null,null,null],magPID:null,velPID:[null,null,null],yaw_p_limit:null,yaw_lpf_hz:null,dterm_average_count:null,rollPitchItermResetRate:null,yawItermResetRate:null,dshot_bidir:null,dterm_lpf_hz:null,dterm_lpf_dyn_hz:[null,null],dterm_lpf_dyn_expo:null,dterm_lpf2_hz:null,dterm_differentiator:null,H_sensitivity:null,iterm_reset_offset:null,deadband:null,yaw_deadband:null,gyro_lpf:null,gyro_32khz_hardware_lpf:null,gyro_lowpass_hz:null,gyro_lowpass_dyn_hz:[null,null],gyro_lowpass_dyn_expo:null,gyro_lowpass2_hz:null,gyro_notch_hz:null,gyro_notch_cutoff:null,gyro_rpm_notch_harmonics:null,gyro_rpm_notch_q:null,gyro_rpm_notch_min:null,rpm_notch_lpf:null,dterm_rpm_notch_harmonics:null,dterm_rpm_notch_q:null,dterm_rpm_notch_min:null,dterm_notch_hz:null,dterm_notch_cutoff:null,acc_lpf_hz:null,acc_hardware:null,baro_hardware:null,mag_hardware:null,gyro_cal_on_first_arm:null,vbat_pid_compensation:null,rc_smoothing:null,rc_interpolation:null,rc_interpolation_channels:null,rc_interpolation_interval:null,rc_smoothing_active_cutoffs:[null,null],rc_smoothing_cutoffs:[null,null],rc_smoothing_filter_type:[null,null],rc_smoothing_rx_average:null,rc_smoothing_debug_axis:null,dterm_filter_type:null,dterm_filter2_type:null,pidAtMinThrottle:null,itermThrottleGain:null,ptermSetpointWeight:null,dtermSetpointWeight:null,yawRateAccelLimit:null,rateAccelLimit:null,gyro_soft_type:null,gyro_soft2_type:null,debug_mode:null,features:null,Craft_name:null,motorOutput:[null,null],digitalIdleOffset:null,pidSumLimit:null,pidSumLimitYaw:null,use_integrated_yaw:null,d_max:[null,null,null],d_max_gain:null,d_max_advance:null,iterm_relax:null,iterm_relax_type:null,iterm_relax_cutoff:null,dyn_notch_range:null,dyn_notch_width_percent:null,dyn_notch_q:null,dyn_notch_min_hz:null,dyn_notch_max_hz:null,rates_type:null,fields_disabled_mask:null,vbat_sag_compensation:null,gyro_to_use:null,gyro_enabled_bitmask:null,dynamic_idle_min_rpm:null,motor_poles:1,ff_transition:null,ff_averaging:null,ff_smooth_factor:null,ff_jitter_factor:null,ff_boost:null,ff_max_rate_limit:null,rc_smoothing_mode:null,rc_smoothing_feedforward_hz:null,rc_smoothing_setpoint_hz:null,rc_smoothing_auto_factor_setpoint:null,rc_smoothing_throttle_hz:null,rc_smoothing_auto_factor_throttle:null,rc_smoothing_active_cutoffs_ff_sp_thr:[null,null,null],rc_smoothing_rx_smoothed:null,dyn_notch_count:null,rpm_filter_fade_range_hz:null,dyn_idle_p_gain:null,dyn_idle_i_gain:null,dyn_idle_d_gain:null,dyn_idle_start_increase:null,dyn_idle_max_increase:null,simplified_pids_mode:null,simplified_pi_gain:null,simplified_i_gain:null,simplified_d_gain:null,simplified_d_max_gain:null,simplified_feedforward_gain:null,simplified_pitch_d_gain:null,simplified_pitch_pi_gain:null,simplified_master_multiplier:null,simplified_dterm_filter:null,simplified_dterm_filter_multiplier:null,simplified_gyro_filter:null,simplified_gyro_filter_multiplier:null,motor_output_limit:null,throttle_limit_type:null,throttle_limit_percent:null,throttle_boost:null,throttle_boost_cutoff:null,thrust_linear:null,tpa_low_rate:null,tpa_low_breakpoint:null,tpa_low_always:null,mixer_type:null,chirp_lag_freq_hz:null,chirp_lead_freq_hz:null,chirp_amplitude_roll:null,chirp_amplitude_pitch:null,chirp_amplitude_yaw:null,chirp_frequency_start_deci_hz:null,chirp_frequency_end_deci_hz:null,chirp_time_seconds:null,unknownHeaders:[]},z={acc_limit_yaw:"yawRateAccelLimit",accel_limit:"rateAccelLimit",acc_limit:"rateAccelLimit",anti_gravity_thresh:"anti_gravity_threshold",currentSensor:"currentMeter",d_notch_cut:"dterm_notch_cutoff",d_setpoint_weight:"dtermSetpointWeight",dterm_lowpass_hz:"dterm_lpf_hz",dterm_lowpass_dyn_hz:"dterm_lpf_dyn_hz",dterm_lowpass2_hz:"dterm_lpf2_hz",dterm_lpf1_type:"dterm_filter_type",dterm_lpf1_static_hz:"dterm_lpf_hz",dterm_lpf1_dyn_hz:"dterm_lpf_dyn_hz",dterm_lpf1_dyn_expo:"dterm_lpf_dyn_expo",dterm_lpf2_type:"dterm_filter2_type",dterm_lpf2_static_hz:"dterm_lpf2_hz",dterm_setpoint_weight:"dtermSetpointWeight",digital_idle_value:"digitalIdleOffset",simplified_dmax_gain:"simplified_d_max_gain",d_max:"d_min",dshot_idle_value:"digitalIdleOffset",dyn_idle_min_rpm:"dynamic_idle_min_rpm",feedforward_transition:"ff_transition",feedforward_averaging:"ff_averaging",feedforward_smooth_factor:"ff_smooth_factor",feedforward_jitter_factor:"ff_jitter_factor",feedforward_boost:"ff_boost",feedforward_max_rate_limit:"ff_max_rate_limit",feedforward_weight:"dtermSetpointWeight",gyro_hardware_lpf:"gyro_lpf",gyro_lowpass:"gyro_lowpass_hz",gyro_lowpass_type:"gyro_soft_type",gyro_lowpass2_type:"gyro_soft2_type",gyro_lpf1_type:"gyro_soft_type",gyro_lpf1_static_hz:"gyro_lowpass_hz",gyro_lpf1_dyn_hz:"gyro_lowpass_dyn_hz",gyro_lpf1_dyn_expo:"gyro_lowpass_dyn_expo",gyro_lpf2_type:"gyro_soft2_type",gyro_lpf2_static_hz:"gyro_lowpass2_hz","gyro.scale":"gyro_scale",iterm_windup:"itermWindupPointPercent",motor_pwm_protocol:"fast_pwm_protocol",pid_at_min_throttle:"pidAtMinThrottle",pidsum_limit:"pidSumLimit",pidsum_limit_yaw:"pidSumLimitYaw",rc_expo_yaw:"rcYawExpo",rc_interp:"rc_interpolation",rc_interp_int:"rc_interpolation_interval",rc_rate:"rc_rates",rc_rate_yaw:"rcYawRate",rc_smoothing:"rc_smoothing_mode",rc_smoothing_auto_factor:"rc_smoothing_auto_factor_setpoint",rc_smoothing_feedforward_cutoff:"rc_smoothing_feedforward_hz",rc_smoothing_setpoint_cutoff:"rc_smoothing_setpoint_hz",rc_smoothing_throttle_cutoff:"rc_smoothing_throttle_hz",rc_smoothing_type:"rc_smoothing_mode",rc_yaw_expo:"rcYawExpo",rcExpo:"rc_expo",rcRate:"rc_rates",rpm_filter_harmonics:"gyro_rpm_notch_harmonics",rpm_filter_q:"gyro_rpm_notch_q",rpm_filter_min_hz:"gyro_rpm_notch_min",rpm_filter_lpf_hz:"rpm_notch_lpf",setpoint_relax_ratio:"setpointRelaxRatio",setpoint_relaxation_ratio:"setpointRelaxRatio",thr_expo:"thrExpo",thr_mid:"thrMid",dynThrPID:"tpa_rate",use_unsynced_pwm:"unsynced_fast_pwm",vbat_scale:"vbatscale",vbat_pid_gain:"vbat_pid_compensation",yaw_accel_limit:"yawRateAccelLimit",yaw_lowpass_hz:"yaw_lpf_hz",thrust_linear:"thrust_linear",tpa_low_rate:"tpa_low_rate",tpa_low_breakpoint:"tpa_low_breakpoint",tpa_low_always:"tpa_low_always",mixer_type:"mixer_type",chirp_lag_freq_hz:"chirp_lag_freq_hz",chirp_lead_freq_hz:"chirp_lead_freq_hz",chirp_amplitude_roll:"chirp_amplitude_roll",chirp_amplitude_pitch:"chirp_amplitude_pitch",chirp_amplitude_yaw:"chirp_amplitude_yaw",chirp_frequency_start_deci_hz:"chirp_frequency_start_deci_hz",chirp_frequency_end_deci_hz:"chirp_frequency_end_deci_hz",chirp_time_seconds:"chirp_time_seconds",multi_gyro:"dual_gyro",multi_gyro_raw:"dual_gyro_raw",multi_gyro_combined:"dual_gyro_combined",multi_gyro_diff:"dual_gyro_diff",multi_gyro_scaled:"dual_gyro_scaled"},P,A=[null,null,null],C=!1,O=new Array(2),te=!1,Z,ee,Q,Ve,le,me;this.frameDefs={};let rt={...x,...D};this.sysConfig=Object.create(rt),this.onFrameReady=null;function ae(V){let L={};for(let q=0;q<V.length;q++)L[V[q]]=q;return L}function ve(V){for(let L=0;L<V.length;L++){let q;(q=V[L].match(/^gyroData(.+)$/))&&(V[L]=`gyroADC${q[1]}`)}return V}function Me(V){let L=z[V];return L!==void 0?L:V}let Ue=new Set(["rcRate","thrMid","thrExpo","tpa_rate","tpa_mode","tpa_breakpoint","airmode_activate_throttle","serialrx_provider","looptime","gyro_sync_denom","pid_process_denom","pidController","yaw_p_limit","dterm_average_count","rollPitchItermResetRate","yawItermResetRate","rollPitchItermIgnoreRate","yawItermIgnoreRate","dterm_differentiator","deltaMethod","dynamic_dterm_threshold","dynamic_pterm","iterm_reset_offset","deadband","yaw_deadband","gyro_lpf","gyro_hardware_lpf","gyro_32khz_hardware_lpf","acc_lpf_hz","acc_hardware","baro_hardware","mag_hardware","gyro_cal_on_first_arm","vbat_pid_compensation","rc_smoothing","rc_smoothing_type","rc_smoothing_debug_axis","rc_smoothing_rx_average","rc_smoothing_rx_smoothed","rc_smoothing_mode","rc_smoothing_auto_factor_setpoint","rc_smoothing_auto_factor_throttle","rc_smoothing_feedforward_hz","rc_smoothing_setpoint_hz","rc_smoothing_throttle_hz","superExpoYawMode","features","dynamic_pid","rc_interpolation","rc_interpolation_channels","rc_interpolation_interval","unsynced_fast_pwm","fast_pwm_protocol","motor_pwm_rate","vbatscale","vbatref","acc_1G","dterm_filter_type","dterm_filter2_type","pidAtMinThrottle","pidSumLimit","pidSumLimitYaw","anti_gravity_threshold","itermWindupPointPercent","ptermSRateWeight","setpointRelaxRatio","ff_transition","ff_averaging","ff_smooth_factor","ff_jitter_factor","ff_boost","ff_max_rate_limit","dtermSetpointWeight","gyro_soft_type","gyro_soft2_type","debug_mode","anti_gravity_mode","anti_gravity_gain","anti_gravity_p_gain","anti_gravity_cutoff_hz","abs_control_gain","use_integrated_yaw","d_max_gain","d_max_advance","dshot_bidir","gyro_rpm_notch_harmonics","gyro_rpm_notch_q","gyro_rpm_notch_min","rpm_filter_fade_range_hz","rpm_notch_lpf","dterm_rpm_notch_harmonics","dterm_rpm_notch_q","dterm_rpm_notch_min","iterm_relax","iterm_relax_type","iterm_relax_cutoff","dyn_notch_range","dyn_notch_width_percent","dyn_notch_q","dyn_notch_count","dyn_notch_min_hz","dyn_notch_max_hz","rates_type","vbat_sag_compensation","fields_disabled_mask","motor_pwm_protocol","gyro_to_use","gyro_enabled_bitmask","dynamic_idle_min_rpm","dyn_idle_p_gain","dyn_idle_i_gain","dyn_idle_d_gain","dyn_idle_start_increase","dyn_idle_max_increase","simplified_pids_mode","simplified_pi_gain","simplified_i_gain","simplified_d_gain","simplified_dmax_gain","simplified_d_max_gain","simplified_feedforward_gain","simplified_pitch_d_gain","simplified_pitch_pi_gain","simplified_master_multiplier","simplified_dterm_filter","simplified_dterm_filter_multiplier","simplified_gyro_filter","simplified_gyro_filter_multiplier","motor_output_limit","throttle_limit_type","throttle_limit_percent","throttle_boost","throttle_boost_cutoff","motor_poles","blackbox_high_resolution","dterm_cut_hz","acc_cut_hz"]),tt=new Set(["rates","rate_limits","rollPID","pitchPID","yawPID","altPID","posPID","posrPID","navrPID","levelPID","velPID","motorOutput","rc_smoothing_cutoffs","rc_smoothing_active_cutoffs","rc_smoothing_active_cutoffs_ff_sp_thr","gyro_lowpass_dyn_hz","gyro_lowpass_dyn_expo","dterm_lpf_dyn_expo","thrust_linear","tpa_low_rate","tpa_low_breakpoint","tpa_low_always","mixer_type","chirp_lag_freq_hz","chirp_lead_freq_hz","chirp_amplitude_roll","chirp_amplitude_pitch","chirp_amplitude_yaw","chirp_frequency_start_deci_hz","chirp_frequency_end_deci_hz","chirp_time_seconds","dterm_lpf_dyn_hz"]),v=new Set(["yaw_lpf_hz","gyro_lowpass_hz","gyro_lowpass2_hz","dterm_notch_hz","dterm_notch_cutoff","dterm_lpf_hz","dterm_lpf2_hz"]),T=new Set(["gyro_notch_hz","gyro_notch_cutoff"]),N=new Set(["Product","Blackbox version","Firmware date","Board information","Craft name","Log start datetime"]),j=new Set(["yawRateAccelLimit","rateAccelLimit"]),Y=new Set(["motor_idle","digitalIdleOffset"]),B=()=>this.sysConfig.firmwareType===lt&&Ss.default.gte(this.sysConfig.firmwareVersion,"3.0.1")||this.sysConfig.firmwareType===tn&&Ss.default.gte(this.sysConfig.firmwareVersion,"2.0.0"),W=V=>{let L=/((?:Beta|Race|Clean|Base|Butter)flight)\s+(\d+)\.(\d+)(?:\.(\d+))?/i.exec(V),q={betaflight:lt,raceflight:lt,butterflight:lt,cleanflight:tn,baseflight:fl};if(L!=null){this.sysConfig.firmwareType=q[L[1].toLowerCase()]??lt,this.sysConfig.firmware=`${Number.parseInt(L[2],10)}.${Number.parseInt(L[3],10)}`,this.sysConfig.firmwarePatch=L[4]?Number.parseInt(L[4],10):"0",this.sysConfig.firmwareVersion=`${this.sysConfig.firmware}.${this.sysConfig.firmwarePatch}`;return}let ye=/(INAV).* (\d+)\.(\d+)(?:\.(\d+))?/i.exec(V);if(ye!=null){this.sysConfig.firmwareType=hl,this.sysConfig.firmware=`${Number.parseInt(ye[2],10)}.${Number.parseInt(ye[3],10)}`,this.sysConfig.firmwarePatch=ye[4]?Number.parseInt(ye[4],10):"0",this.sysConfig.firmwareVersion=`${this.sysConfig.firmware}.${this.sysConfig.firmwarePatch}`;return}this.sysConfig.firmwareVersion="0.0.0",this.sysConfig.firmware=0,this.sysConfig.firmwarePatch=0},X=(V,L)=>{let q=V.match(/^Field (.) (.+)$/);if(!q)return!1;let ye=q[1],at=q[2];this.frameDefs[ye]||(this.frameDefs[ye]={name:[],nameToIndex:{},count:0,signed:[],predictor:[],encoding:[]});let We=this.frameDefs[ye],_t={predictor:()=>{We.predictor=nn(L)},encoding:()=>{We.encoding=nn(L)},name:()=>{We.name=ve(L.split(",")),We.count=We.name.length,We.nameToIndex=ae(We.name),We.signed.length=We.count},signed:()=>{We.signed=nn(L)}}[at];return _t?_t():console.log(`Saw unsupported field header "${V}"`),!0},K=(V,L)=>{this.sysConfig[V]=Number.parseInt(L,10)},k=(V,L)=>{this.sysConfig[V]=nn(L)},ie=(V,L)=>{this.sysConfig[V]=B()?Number.parseInt(L,10):Number.parseInt(L,10)/100},J=(V,L)=>{this.sysConfig[V]=B()?nn(L):Number.parseInt(L,10)/100},re=(V,L)=>{let q=this.sysConfig.firmwareType===lt&&Ss.default.gte(this.sysConfig.firmwareVersion,"3.1.0"),ye=this.sysConfig.firmwareType===tn&&Ss.default.gte(this.sysConfig.firmwareVersion,"2.0.0");this.sysConfig[V]=q||ye?Number.parseInt(L,10)/1e3:Number.parseInt(L,10)},_e=(V,L)=>{this.sysConfig[V]=Number.parseInt(L,10)/100},Te=(V,L)=>{this.sysConfig[V]=L},Ne=(V,L)=>{El(L)?this.sysConfig[V]=nn(L):(this.sysConfig[V][0]=Number.parseInt(L,10),this.sysConfig[V][1]=Number.parseInt(L,10))},we=(V,L)=>{let q=nn(L);this.sysConfig.rollPID.push(q[0]),this.sysConfig.pitchPID.push(q[1]),this.sysConfig.yawPID.push(q[2])},Ke=(V,L)=>{let q=nn(L);this.sysConfig.currentMeterOffset=q[0],this.sysConfig.currentMeterScale=q[1]},Oe=(V,L)=>{this.sysConfig.gyroScale=ah(L),(this.sysConfig.firmwareType===hl||this.sysConfig.firmwareType===tn||this.sysConfig.firmwareType===lt)&&(this.sysConfig.gyroScale*=Math.PI/180*1e-6)},Xe=()=>{},pe={};for(let V of Ue)pe[V]=K;for(let V of tt)pe[V]=k;for(let V of v)pe[V]=ie;for(let V of T)pe[V]=J;for(let V of j)pe[V]=re;for(let V of Y)pe[V]=_e;for(let V of N)pe[V]=Te;pe["I interval"]=(V,L)=>{this.sysConfig.frameIntervalI=Number.parseInt(L,10),this.sysConfig.frameIntervalI<1&&(this.sysConfig.frameIntervalI=1)},pe["P interval"]=(V,L)=>{let q=L.indexOf("/");q===-1?(this.sysConfig.frameIntervalPNum=1,this.sysConfig.frameIntervalPDenom=Number.parseInt(L,10)):(this.sysConfig.frameIntervalPNum=Number.parseInt(L.substring(0,q),10),this.sysConfig.frameIntervalPDenom=Number.parseInt(L.substring(q+1),10))},pe["P denom"]=Xe,pe["P ratio"]=Xe,pe["Data version"]=(V,L)=>{m=Number.parseInt(L,10)},pe["Firmware type"]=(V,L)=>{this.sysConfig.firmwareType=L==="Cleanflight"?tn:fl},pe.minthrottle=(V,L)=>{this.sysConfig[V]=Number.parseInt(L,10),this.sysConfig.motorOutput[0]=this.sysConfig[V]},pe.maxthrottle=(V,L)=>{this.sysConfig[V]=Number.parseInt(L,10),this.sysConfig.motorOutput[1]=this.sysConfig[V]},pe.rc_expo=Ne,pe.rc_rates=Ne,pe.rcYawExpo=(V,L)=>{this.sysConfig.rc_expo[2]=Number.parseInt(L,10)},pe.rcYawRate=(V,L)=>{this.sysConfig.rc_rates[2]=Number.parseInt(L,10)},pe.superExpoFactor=(V,L)=>{if(El(L)){let q=nn(L);this.sysConfig.superExpoFactor=q[0],this.sysConfig.superExpoFactorYaw=q[1]}else this.sysConfig.superExpoFactor=Number.parseInt(L,10)},pe.magPID=(V,L)=>{this.sysConfig.magPID=nn(L,3)},pe.d_min=we,pe.d_max=we,pe.ff_weight=we,pe.vbatcellvoltage=(V,L)=>{let q=nn(L);this.sysConfig.vbatmincellvoltage=q[0],this.sysConfig.vbatwarningcellvoltage=q[1],this.sysConfig.vbatmaxcellvoltage=q[2]},pe.currentMeter=Ke,pe.currentSensor=Ke,pe["gyro.scale"]=Oe,pe.gyro_scale=Oe,pe["Firmware revision"]=(V,L)=>{W(L),this.sysConfig[V]=L},pe.DeviceUID=(V,L)=>{this.sysConfig.deviceUID=L};let Ze=()=>{let V=":".codePointAt(0),L=!1;if(ne.peekChar()!==" ")return;ne.readChar();let q=ne.pos;for(;ne.pos<q+1024&&ne.pos<ne.end&&(L===!1&&ne.data[ne.pos]===V&&(L=ne.pos),!(ne.data[ne.pos]===w||ne.data[ne.pos]===0));ne.pos++);if(ne.data[ne.pos]!==w||L===!1)return;let ye=ne.pos,at=Me(ml(ne.data.subarray(q,L))),We=ml(ne.data.subarray(L+1,ye)),Pt=pe[at];Pt?Pt(at,We):X(at,We)||(console.log(`Ignoring unsupported header ${at} ${We}`),this.sysConfig.unknownHeaders??=[],this.sysConfig.unknownHeaders.push({name:at,value:We}))};function Ct(){C=!1,A[0]=P?P[0]:null,A[1]=null,A[2]=null}let ot=(V,L)=>{let q=this.stats.frame[V].field;for(let ye=0;ye<L.length;ye++)q[ye]?(q[ye].max=Math.max(L[ye],q[ye].max),q[ye].min=Math.min(L[ye],q[ye].min)):q[ye]={max:L[ye],min:L[ye]}},It=(V,L,q,ye)=>{let at=!0;return!ye&&le!==-1&&(at=A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION]>=le&&A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION]<le+5e3&&A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME]>=me&&A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME]<me+1e7),at?(this.stats.intentionallyAbsentIterations+=pE(A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION]),le=A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION],me=A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME],C=!0,ot(V,A[0])):Ct(),this.onFrameReady&&this.onFrameReady(C,A[0],V,L,q-L),A[1]=A[0],A[2]=A[0],A[0]===P[0]?A[0]=P[1]:A[0]===P[1]?A[0]=P[2]:A[0]=P[0],C},Jt=V=>(V%this.sysConfig.frameIntervalI+this.sysConfig.frameIntervalPNum-1)%this.sysConfig.frameIntervalPDenom<this.sysConfig.frameIntervalPNum;function xt(V,L,q,ye,at,We){let Pt=V.predictor,_t=V.encoding,vt=new Array(8),Ie,Ye,Bi;for(Ie=0;Ie<V.count;){let Mr;if(Pt[Ie]===6)L[Ie]=at+1,q&&(L[Ie]+=q[Ie]),Ie++;else{switch(_t[Ie]){case 0:Mr=ne.readSignedVB();break;case 1:Mr=ne.readUnsignedVB();break;case 3:Mr=-ch(ne.readUnsignedVB());break;case 8:for(m<2?ne.readTag8_4S16_v1(vt):ne.readTag8_4S16_v2(vt),Ye=0;Ye<4;Ye++,Ie++)L[Ie]=Ar(Ie,We?0:Pt[Ie],vt[Ye],L,q,ye);continue;case 7:for(ne.readTag2_3S32(vt),Ye=0;Ye<3;Ye++,Ie++)L[Ie]=Ar(Ie,We?0:Pt[Ie],vt[Ye],L,q,ye);continue;case 10:for(ne.readTag2_3SVariable(vt),Ye=0;Ye<3;Ye++,Ie++)L[Ie]=Ar(Ie,We?0:Pt[Ie],vt[Ye],L,q,ye);continue;case 6:for(Ye=Ie+1;Ye<Ie+8&&Ye<V.count&&_t[Ye]===6;Ye++);for(Bi=Ye-Ie,ne.readTag8_8SVB(vt,Bi),Ye=0;Ye<Bi;Ye++,Ie++)L[Ie]=Ar(Ie,We?0:Pt[Ie],vt[Ye],L,q,ye);continue;case 9:Mr=0;break;default:throw _t[Ie]===void 0?`Missing field encoding header for field #${Ie} '${V.name[Ie]}'`:`Unsupported field encoding ${_t[Ie]}`}L[Ie]=Ar(Ie,We?0:Pt[Ie],Mr,L,q,ye),Ie++}}}let gi=V=>{let L=A[0],q=A[1];xt(this.frameDefs.I,L,q,null,0,V)},Ds=(V,L,q,ye)=>(ot(V,O[0]),this.setGPSHomeHistory(O[0]),this.onFrameReady&&this.onFrameReady(!0,O[0],V,L,q-L),!0),uE=(V,L,q,ye)=>(te&&ot(V,ee),this.onFrameReady&&this.onFrameReady(te,ee,V,L,q-L),te),dE=(V,L,q,ye)=>(ot(V,Q),this.onFrameReady&&this.onFrameReady(!0,Q,V,L,q-L),!0),fE=(V,L,q,ye)=>(C&&!ye&&(A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME]>me+1e7||A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION]>le+5e3)&&(C=!1),C&&(le=A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION],me=A[0][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME],this.stats.intentionallyAbsentIterations+=Ve,ot(V,A[0])),this.onFrameReady&&this.onFrameReady(C,A[0],V,L,q-L),C&&(A[2]=A[1],A[1]=A[0],A[0]===P[0]?A[0]=P[1]:A[0]===P[1]?A[0]=P[2]:A[0]=P[0]),C),Ar=(V,L,q,ye,at,We)=>{switch(L){case 0:break;case 4:q=Math.trunc(q)+this.sysConfig.minthrottle;break;case 11:q=Math.trunc(q)+Math.trunc(this.sysConfig.motorOutput[0]);break;case 8:q+=1500;break;case 5:if(this.frameDefs.I.nameToIndex["motor[0]"]===void 0)throw"Attempted to base I-field prediction on motor0 before it was read";q+=ye[this.frameDefs.I.nameToIndex["motor[0]"]];break;case 9:q+=this.sysConfig.vbatref;break;case 1:if(!at)break;q+=at[V];break;case 2:if(!at)break;q+=2*at[V]-We[V];break;case 3:if(!at)break;q+=~~((at[V]+We[V])/2);break;case 7:if(this.frameDefs.H?.nameToIndex["GPS_home[0]"]===void 0)throw"Attempted to base prediction on GPS home position without GPS home frame definition";q+=O[1][this.frameDefs.H.nameToIndex["GPS_home[0]"]];break;case 256:if(this.frameDefs.H?.nameToIndex["GPS_home[1]"]===void 0)throw"Attempted to base prediction on GPS home position without GPS home frame definition";q+=O[1][this.frameDefs.H.nameToIndex["GPS_home[1]"]];break;case 10:A[1]&&(q+=A[1][ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME]);break;default:throw`Unsupported field predictor ${L}`}return q};function hE(){let V=0,L;if(le===-1)return 0;for(L=le+1;!Jt(L);L++)V++;return V}function pE(V){let L=0,q;if(le===-1)return 0;for(q=le+1;q<V;q++)Jt(q)||L++;return L}let mE=V=>{let L=A[0],q=A[1],ye=A[2];Ve=hE(),xt(this.frameDefs.P,L,q,ye,Ve,V)},gE=V=>{this.frameDefs.G&&xt(this.frameDefs.G,ee,null,null,0,V)},_E=V=>{this.frameDefs.H&&xt(this.frameDefs.H,O[0],null,null,0,V)},yE=V=>{this.frameDefs.S&&xt(this.frameDefs.S,Q,null,null,0,V)},EE=(V,L,q,ye)=>{if(Z){switch(Z.event){case Xt.LOGGING_RESUME:le=Z.data.logIteration,me=Z.data.currentTime;break}return this.onFrameReady&&this.onFrameReady(!0,Z,V,L,q-L),!0}return!1},xE={1:"Response Time->",2:"Half Setpoint Time->",3:"Setpoint Time->",4:"Negative Setpoint->",5:"Initial Setpoint->"};function vE(V){let L=ne.readU8();V.name="Unknown",V.func=L&127,V.value=L<128?ne.readSignedVB():pl(ne.readU32());let q=I[V.func];if(q!==void 0){V.name=q.name;let ye=q.scale??1;L>=128&&q.scalef!==void 0&&(ye=q.scalef),V.value=Math.round(V.value*ye*1e4)/1e4}}function bE(V){let L="End of log\0",q=ne.readByte();switch(Z={event:q,data:{}},q){case Xt.SYNC_BEEP:Z.data.time=ne.readUnsignedVB(),Z.time=Z.data.time;break;case Xt.FLIGHT_MODE:Z.data.newFlags=ne.readUnsignedVB(),Z.data.lastFlags=ne.readUnsignedVB();break;case Xt.DISARM:Z.data.reason=ne.readUnsignedVB();break;case Xt.AUTOTUNE_CYCLE_START:{Z.data.phase=ne.readByte();let ye=ne.readByte();Z.data.cycle=ye&127,Z.data.rising=ye>>7&1,Z.data.p=ne.readByte(),Z.data.i=ne.readByte(),Z.data.d=ne.readByte();break}case Xt.AUTOTUNE_CYCLE_RESULT:Z.data.overshot=ne.readByte(),Z.data.p=ne.readByte(),Z.data.i=ne.readByte(),Z.data.d=ne.readByte();break;case Xt.AUTOTUNE_TARGETS:Z.data.currentAngle=ne.readS16()/10,Z.data.targetAngle=ne.readS8(),Z.data.targetAngleAtPeak=ne.readS8(),Z.data.firstPeakAngle=ne.readS16()/10,Z.data.secondPeakAngle=ne.readS16()/10;break;case Xt.GTUNE_CYCLE_RESULT:Z.data.axis=ne.readU8(),Z.data.gyroAVG=ne.readSignedVB(),Z.data.newP=ne.readS16();break;case Xt.INFLIGHT_ADJUSTMENT:vE(Z.data);break;case Xt.TWITCH_TEST:{let ye=ne.readU8();Z.data.name=xE[ye],Z.data.value=pl(ne.readU32());break}case Xt.LOGGING_RESUME:Z.data.logIteration=ne.readUnsignedVB(),Z.data.currentTime=ne.readUnsignedVB();break;case Xt.LOG_END:{ne.readString(L.length)===L?ne.end=ne.pos:Z=null;break}default:Z=null}}function $a(V){return SE[V]}this.resetDataState=function(){Ve=0,le=-1,me=-1,Ct(),te=!1,Z=null},this.resetAllState=function(){this.resetStats();let V={...x,...D};this.sysConfig=Object.create(V),this.frameDefs={},this.resetDataState()};let od=V=>V&&V.count>0&&V.encoding.length===V.count&&V.predictor.length===V.count;this.parseHeader=function(V,L){this.resetAllState(),ne.start=V===void 0?ne.pos:V,ne.pos=ne.start,ne.end=L===void 0?ne.end:L,ne.eof=!1;e:for(;;){let q=ne.readChar();switch(q){case"H":Ze();break;case F:break e;default:if($a(q)){ne.unreadChar(q);break e}break}}if(oh(this.sysConfig.firmwareType,this.sysConfig.firmwareVersion),Qe.adjustDebugDefsList(this.sysConfig.firmwareType,this.sysConfig.firmwareVersion),!od(this.frameDefs.I))throw"Log is missing required definitions for I frames, header may be corrupt";if(!this.frameDefs.P||(this.frameDefs.P.count=this.frameDefs.I.count,this.frameDefs.P.name=this.frameDefs.I.name,this.frameDefs.P.nameToIndex=this.frameDefs.I.nameToIndex,this.frameDefs.P.signed=this.frameDefs.I.signed,!od(this.frameDefs.P)))throw"Log is missing required definitions for P frames, header may be corrupt";if(P=[new Array(this.frameDefs.I.count),new Array(this.frameDefs.I.count),new Array(this.frameDefs.I.count)],this.frameDefs.H&&this.frameDefs.G){O=[new Array(this.frameDefs.H.count),new Array(this.frameDefs.H.count)],ee=new Array(this.frameDefs.G.count);for(let q=1;q<this.frameDefs.G.count;q++)this.frameDefs.G.predictor[q-1]===7&&this.frameDefs.G.predictor[q]===7&&(this.frameDefs.G.predictor[q]=256)}else O=[],ee=[];this.frameDefs.S?Q=new Array(this.frameDefs.S.count):Q=[]},this.setGPSHomeHistory=function(V){if(V.length===this.frameDefs.H.count){for(let L=0;L<V.length;L++)O[1][L]=V[L];te=!0}else te=!1},this.parseLogData=function(V,L,q){let ye,at=!1,We=0,Pt,_t=null;for(Ct(),ne.start=L===void 0?ne.pos:L,ne.pos=ne.start,ne.end=q===void 0?ne.end:q,ne.eof=!1;;){let vt=ne.readChar();if(_t){let Ie=ne.pos-We;ye=$a(vt)||!at&&vt===F,this.stats.frame[_t.marker]||(this.stats.frame[_t.marker]={bytes:0,sizeCount:new Int32Array(256),validCount:0,corruptCount:0,desyncCount:0,field:[]});let Ye=this.stats.frame[_t.marker];if(Ie<=256&&ye){let Bi=!0;_t.complete&&(Bi=_t.complete(_t.marker,We,ne.pos,V)),Bi?(Ye.bytes+=Ie,Ye.sizeCount[Ie]++,Ye.validCount++):Ye.desyncCount++}else{C=!1,Ye.corruptCount++,this.stats.totalCorruptFrames++,ne.pos=We+1,_t=null,at=!1,ne.eof=!1;continue}}if(vt===F)break;We=ne.pos-1,Pt=$a(vt),Pt&&(vt==="E"||this.frameDefs[vt])?(_t=Pt,Pt.parse(V),ne.eof&&(at=!0)):(C=!1,_t=null)}return this.stats.totalBytes+=ne.end-ne.start,!0};let SE={I:{marker:"I",parse:gi,complete:It},P:{marker:"P",parse:mE,complete:fE},G:{marker:"G",parse:gE,complete:uE},H:{marker:"H",parse:_E,complete:Ds},S:{marker:"S",parse:yE,complete:dE},E:{marker:"E",parse:bE,complete:EE}},ne=new st(t)}ht.prototype.resetStats=function(){this.stats={totalBytes:0,totalCorruptFrames:0,intentionallyAbsentIterations:0,frame:{}}};ht.prototype.FLIGHT_LOG_START_MARKER=lh(`H Product:Blackbox flight data recorder by Nicholas Sherlock
`);ht.prototype.FLIGHT_LOG_FIELD_UNSIGNED=0;ht.prototype.FLIGHT_LOG_FIELD_SIGNED=1;ht.prototype.FLIGHT_LOG_FIELD_INDEX_ITERATION=0;ht.prototype.FLIGHT_LOG_FIELD_INDEX_TIME=1;var Gu="180";var Hu=0,zu=1,Wu=2,$u=3,Xu=4,Yu=5,qu=6,Ku=7;var ju=300;var Iu=1e3,As=1001,Pu=1002;var Xy=1006;var Yy=1008;var qy=1009;var Ky=1023;var Rs=2300,Ta=2301,ba=2302,Ou=2400,Du=2401,Nu=2402;var Zu="",dn="srgb",Lu="srgb-linear",Fu="linear",Sa="srgb";var Ms=2e3,Uu=2001;var ws=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vF=Math.PI/180,zP=180/Math.PI;function Ju(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[t&255]+Rt[t>>8&255]+Rt[t>>16&255]+Rt[t>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[n&63|128]+Rt[n>>8&255]+"-"+Rt[n>>16&255]+Rt[n>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function WP(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}var yn=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=f,e[n+2]=p,e[n+3]=g;return}if(d!==g||l!==h||c!==f||u!==p){let S=1-a,E=l*h+c*f+u*p+d*g,M=E>=0?1:-1,_=1-E*E;if(_>Number.EPSILON){let R=Math.sqrt(_),U=Math.atan2(R,E*M);S=Math.sin(S*U)/R,a=Math.sin(a*U)/R}let b=a*M;if(l=l*S+h*b,c=c*S+f*b,u=u*S+p*b,d=d*S+g*b,S===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return e[n]=a*p+u*d+l*f-c*h,e[n+1]=l*p+u*h+c*d-a*f,e[n+2]=c*p+u*f+a*h-l*d,e[n+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ke=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ly.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ly.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tu=new ke,Ly=new zt,De=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],g=r[0],S=r[3],E=r[6],M=r[1],_=r[4],b=r[7],R=r[2],U=r[5],H=r[8];return s[0]=o*g+a*M+l*R,s[3]=o*S+a*_+l*U,s[6]=o*E+a*b+l*H,s[1]=c*g+u*M+d*R,s[4]=c*S+u*_+d*U,s[7]=c*E+u*b+d*H,s[2]=h*g+f*M+p*R,s[5]=h*S+f*_+p*U,s[8]=h*E+f*b+p*H,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,p=n*d+i*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=f*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Au=new De;function Bu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}var Fy={};function ku(t){t in Fy||(Fy[t]=!0,console.warn(t))}var Uy=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),By=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $P(){let t={enabled:!0,workingColorSpace:Lu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Sa&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Sa&&(r.r=xr(r.r),r.g=xr(r.g),r.b=xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zu?Fu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ku("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ku("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Lu]:{primaries:e,whitePoint:i,transfer:Fu,toXYZ:Uy,fromXYZ:By,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:Sa,toXYZ:Uy,fromXYZ:By,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),t}var un=$P();function Hn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var gr,Aa=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=Bu("canvas")),gr.width=e.width,gr.height=e.height;let r=gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Bu("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hn(n[i]/255)*255):n[i]=Hn(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},XP=0,Ma=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XP++}),this.uuid=Ju(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Aa.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var YP=0,Ru=new ke,vr=class t extends ws{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=As,r=As,s=Xy,o=Yy,a=Ky,l=qy,c=t.DEFAULT_ANISOTROPY,u=Zu){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YP++}),this.uuid=Ju(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yn(0,0),this.repeat=new yn(1,1),this.center=new yn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Iu:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case Pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Iu:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case Pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vr.DEFAULT_IMAGE=null;vr.DEFAULT_MAPPING=ju;vr.DEFAULT_ANISOTROPY=1;var zn=class t{constructor(e,n,i,r,s,o,a,l,c,u,d,h,f,p,g,S){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,f,p,g,S)}set(e,n,i,r,s,o,a,l,c,u,d,h,f,p,g,S){let E=this.elements;return E[0]=e,E[4]=n,E[8]=i,E[12]=r,E[1]=s,E[5]=o,E[9]=a,E[13]=l,E[2]=c,E[6]=u,E[10]=d,E[14]=h,E[3]=f,E[7]=p,E[11]=g,E[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+p*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=p+f*c,n[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,g=c*d;n[0]=h+g*a,n[4]=p*a-f,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=f*a-p,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,g=c*d;n[0]=h-g*a,n[4]=-o*d,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,g=a*d;n[0]=l*u,n[4]=p*c-f,n[8]=h*c+g,n[1]=l*d,n[5]=g*c+h,n[9]=f*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*u,n[4]=g-h*d,n[8]=p*d+f,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=f*d+p,n[10]=h-g*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+g,n[5]=o*u,n[9]=f*d-p,n[2]=p*d-f,n[6]=a*u,n[10]=g*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qP,e,KP)}lookAt(e,n,i){let r=this.elements;return jt.subVectors(e,n),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ui.crossVectors(i,jt),ui.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ui.crossVectors(i,jt)),ui.normalize(),ya.crossVectors(jt,ui),r[0]=ui.x,r[4]=ya.x,r[8]=jt.x,r[1]=ui.y,r[5]=ya.y,r[9]=jt.y,r[2]=ui.z,r[6]=ya.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],g=i[6],S=i[10],E=i[14],M=i[3],_=i[7],b=i[11],R=i[15],U=r[0],H=r[4],$=r[8],F=r[12],w=r[1],I=r[5],m=r[9],x=r[13],D=r[2],z=r[6],P=r[10],A=r[14],C=r[3],O=r[7],te=r[11],Z=r[15];return s[0]=o*U+a*w+l*D+c*C,s[4]=o*H+a*I+l*z+c*O,s[8]=o*$+a*m+l*P+c*te,s[12]=o*F+a*x+l*A+c*Z,s[1]=u*U+d*w+h*D+f*C,s[5]=u*H+d*I+h*z+f*O,s[9]=u*$+d*m+h*P+f*te,s[13]=u*F+d*x+h*A+f*Z,s[2]=p*U+g*w+S*D+E*C,s[6]=p*H+g*I+S*z+E*O,s[10]=p*$+g*m+S*P+E*te,s[14]=p*F+g*x+S*A+E*Z,s[3]=M*U+_*w+b*D+R*C,s[7]=M*H+_*I+b*z+R*O,s[11]=M*$+_*m+b*P+R*te,s[15]=M*F+_*x+b*A+R*Z,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],S=e[11],E=e[15];return p*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*f-i*l*f)+g*(+n*l*f-n*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+S*(+n*c*d-n*a*f-s*o*d+i*o*f+s*a*u-i*c*u)+E*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],S=e[14],E=e[15],M=d*S*c-g*h*c+g*l*f-a*S*f-d*l*E+a*h*E,_=p*h*c-u*S*c-p*l*f+o*S*f+u*l*E-o*h*E,b=u*g*c-p*d*c+p*a*f-o*g*f-u*a*E+o*d*E,R=p*d*l-u*g*l-p*a*h+o*g*h+u*a*S-o*d*S,U=n*M+i*_+r*b+s*R;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/U;return e[0]=M*H,e[1]=(g*h*s-d*S*s-g*r*f+i*S*f+d*r*E-i*h*E)*H,e[2]=(a*S*s-g*l*s+g*r*c-i*S*c-a*r*E+i*l*E)*H,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*f-i*l*f)*H,e[4]=_*H,e[5]=(u*S*s-p*h*s+p*r*f-n*S*f-u*r*E+n*h*E)*H,e[6]=(p*l*s-o*S*s-p*r*c+n*S*c+o*r*E-n*l*E)*H,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*f+n*l*f)*H,e[8]=b*H,e[9]=(p*d*s-u*g*s-p*i*f+n*g*f+u*i*E-n*d*E)*H,e[10]=(o*g*s-p*a*s+p*i*c-n*g*c-o*i*E+n*a*E)*H,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*f-n*a*f)*H,e[12]=R*H,e[13]=(u*g*r-p*d*r+p*i*h-n*g*h-u*i*S+n*d*S)*H,e[14]=(p*a*r-o*g*r-p*i*l+n*g*l+o*i*S-n*a*S)*H,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*H,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,p=s*d,g=o*u,S=o*d,E=a*d,M=l*c,_=l*u,b=l*d,R=i.x,U=i.y,H=i.z;return r[0]=(1-(g+E))*R,r[1]=(f+b)*R,r[2]=(p-_)*R,r[3]=0,r[4]=(f-b)*U,r[5]=(1-(h+E))*U,r[6]=(S+M)*U,r[7]=0,r[8]=(p+_)*H,r[9]=(S-M)*H,r[10]=(1-(h+g))*H,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=_r.set(r[0],r[1],r[2]).length(),o=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);let c=1/s,u=1/o,d=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,n.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ms,l=!1){let c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===Ms)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Uu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ms,l=!1){let c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),f=-(i+r)/(i-r),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===Ms)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===Uu)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},_r=new ke,_n=new zn,qP=new ke(0,0,0),KP=new ke(1,1,1),ui=new ke,ya=new ke,jt=new ke,ky=new zn,Vy=new zt,Li=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ky.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ky,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vy.setFromEuler(this),this.setFromQuaternion(Vy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jP=0,Gy=new ke,yr=new zt,Gn=new zn,Ea=new ke,Ts=new ke,ZP=new ke,JP=new zt,Hy=new ke(1,0,0),zy=new ke(0,1,0),Wy=new ke(0,0,1),$y={type:"added"},QP={type:"removed"},Er={type:"childadded",child:null},wu={type:"childremoved",child:null},br=class t extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jP++}),this.uuid=Ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new ke,n=new Li,i=new zt,r=new ke(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zn},normalMatrix:{value:new De}}),this.matrix=new zn,this.matrixWorld=new zn,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Hy,e)}rotateY(e){return this.rotateOnAxis(zy,e)}rotateZ(e){return this.rotateOnAxis(Wy,e)}translateOnAxis(e,n){return Gy.copy(e).applyQuaternion(this.quaternion),this.position.add(Gy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hy,e)}translateY(e){return this.translateOnAxis(zy,e)}translateZ(e){return this.translateOnAxis(Wy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ea.copy(e):Ea.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ts,Ea,this.up):Gn.lookAt(Ea,Ts,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Gn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($y),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QP),wu.child=e,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($y),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,ZP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,JP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};br.DEFAULT_UP=new ke(0,1,0);br.DEFAULT_MATRIX_AUTO_UPDATE=!0;br.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var yt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=un.workingColorSpace){return this.r=e,this.g=n,this.b=i,un.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=un.workingColorSpace){if(e=WP(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return un.colorSpaceToWorking(this,r),this}setStyle(e,n=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=dn){let i=jy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return un.workingToColorSpace(wt.copy(this),e),Math.round(et(wt.r*255,0,255))*65536+Math.round(et(wt.g*255,0,255))*256+Math.round(et(wt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=un.workingColorSpace){un.workingToColorSpace(wt.copy(this),n);let i=wt.r,r=wt.g,s=wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=un.workingColorSpace){return un.workingToColorSpace(wt.copy(this),n),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=dn){un.workingToColorSpace(wt.copy(this),e);let n=wt.r,i=wt.g,r=wt.b;return e!==dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+n,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(di),e.getHSL(xa);let i=Su(di.h,xa.h,n),r=Su(di.s,xa.s,n),s=Su(di.l,xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new yt;yt.NAMES=jy;function Zy(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){let e={};for(let n=0;n<t.length;n++){let i=Zy(t[n]);for(let r in i)e[r]=i[r]}return e}function va(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function eO(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Fi=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wa=class extends Fi{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:s=e,a=2*n-i;break;case Nu:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,l=2*i-n;break;case Nu:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-n)/(r-n),g=p*p,S=g*p,E=-h*S+2*h*g-h*p,M=(1+h)*S+(-1.5-2*h)*g+(-.5+h)*p+1,_=(-1-f)*S+(1.5+f)*g+.5*p,b=f*S-f*g;for(let R=0;R!==a;++R)s[R]=E*o[u+R]+M*o[c+R]+_*o[l+R]+b*o[d+R];return s}},Ca=class extends Fi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},Ia=class extends Fi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(n,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Rs:n=this.InterpolantFactoryMethodDiscrete;break;case Ta:n=this.InterpolantFactoryMethodLinear;break;case ba:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&eO(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ba,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let g=n[d+p];if(g!==n[h+p]||g!==n[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)n[h+f]=n[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Zt.prototype.ValueTypeName="";Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Ta;var fi=class extends Zt{constructor(e,n,i){super(e,n,i)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Rs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};Pa.prototype.ValueTypeName="color";var Oa=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};Oa.prototype.ValueTypeName="number";var Da=class extends Fi{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)zt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Cs=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Zt{constructor(e,n,i){super(e,n,i)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Rs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Zt{constructor(e,n,i,r){super(e,n,i,r)}};Na.prototype.ValueTypeName="vector";var La=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Jy=new La,Fa=class{constructor(e){this.manager=e!==void 0?e:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qu="\\[\\]\\.:\\/",tO=new RegExp("["+Qu+"]","g"),ed="[^"+Qu+"]",nO="[^"+Qu.replace("\\.","")+"]",iO=/((?:WC+[\/:])*)/.source.replace("WC",ed),rO=/(WCOD+)?/.source.replace("WCOD",nO),sO=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),oO=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),aO=new RegExp("^"+iO+rO+sO+oO+"$"),lO=["material","materials","bones","map"],Vu=class{constructor(e,n,i){let r=i||it.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},it=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tO,"")}static parseTrackName(e){let n=aO.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);lO.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Vu;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bF=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);var cO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uO=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hO=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_O=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yO=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vO=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kO="gl_FragColor = linearToOutputTexel( gl_FragColor );",VO=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GO=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HO=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zO=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WO=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$O=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XO=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YO=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qO=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KO=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jO=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZO=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JO=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QO=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_D=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ED=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ID=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ND=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$D=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_N=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:cO,alphahash_pars_fragment:uO,alphamap_fragment:dO,alphamap_pars_fragment:fO,alphatest_fragment:hO,alphatest_pars_fragment:pO,aomap_fragment:mO,aomap_pars_fragment:gO,batching_pars_vertex:_O,batching_vertex:yO,begin_vertex:EO,beginnormal_vertex:xO,bsdfs:vO,iridescence_fragment:bO,bumpmap_pars_fragment:SO,clipping_planes_fragment:TO,clipping_planes_pars_fragment:AO,clipping_planes_pars_vertex:MO,clipping_planes_vertex:RO,color_fragment:wO,color_pars_fragment:CO,color_pars_vertex:IO,color_vertex:PO,common:OO,cube_uv_reflection_fragment:DO,defaultnormal_vertex:NO,displacementmap_pars_vertex:LO,displacementmap_vertex:FO,emissivemap_fragment:UO,emissivemap_pars_fragment:BO,colorspace_fragment:kO,colorspace_pars_fragment:VO,envmap_fragment:GO,envmap_common_pars_fragment:HO,envmap_pars_fragment:zO,envmap_pars_vertex:WO,envmap_physical_pars_fragment:tD,envmap_vertex:$O,fog_vertex:XO,fog_pars_vertex:YO,fog_fragment:qO,fog_pars_fragment:KO,gradientmap_pars_fragment:jO,lightmap_pars_fragment:ZO,lights_lambert_fragment:JO,lights_lambert_pars_fragment:QO,lights_pars_begin:eD,lights_toon_fragment:nD,lights_toon_pars_fragment:iD,lights_phong_fragment:rD,lights_phong_pars_fragment:sD,lights_physical_fragment:oD,lights_physical_pars_fragment:aD,lights_fragment_begin:lD,lights_fragment_maps:cD,lights_fragment_end:uD,logdepthbuf_fragment:dD,logdepthbuf_pars_fragment:fD,logdepthbuf_pars_vertex:hD,logdepthbuf_vertex:pD,map_fragment:mD,map_pars_fragment:gD,map_particle_fragment:_D,map_particle_pars_fragment:yD,metalnessmap_fragment:ED,metalnessmap_pars_fragment:xD,morphinstance_vertex:vD,morphcolor_vertex:bD,morphnormal_vertex:SD,morphtarget_pars_vertex:TD,morphtarget_vertex:AD,normal_fragment_begin:MD,normal_fragment_maps:RD,normal_pars_fragment:wD,normal_pars_vertex:CD,normal_vertex:ID,normalmap_pars_fragment:PD,clearcoat_normal_fragment_begin:OD,clearcoat_normal_fragment_maps:DD,clearcoat_pars_fragment:ND,iridescence_pars_fragment:LD,opaque_fragment:FD,packing:UD,premultiplied_alpha_fragment:BD,project_vertex:kD,dithering_fragment:VD,dithering_pars_fragment:GD,roughnessmap_fragment:HD,roughnessmap_pars_fragment:zD,shadowmap_pars_fragment:WD,shadowmap_pars_vertex:$D,shadowmap_vertex:XD,shadowmask_pars_fragment:YD,skinbase_vertex:qD,skinning_pars_vertex:KD,skinning_vertex:jD,skinnormal_vertex:ZD,specularmap_fragment:JD,specularmap_pars_fragment:QD,tonemapping_fragment:eN,tonemapping_pars_fragment:tN,transmission_fragment:nN,transmission_pars_fragment:iN,uv_pars_fragment:rN,uv_pars_vertex:sN,uv_vertex:oN,worldpos_vertex:aN,background_vert:lN,background_frag:cN,backgroundCube_vert:uN,backgroundCube_frag:dN,cube_vert:fN,cube_frag:hN,depth_vert:pN,depth_frag:mN,distanceRGBA_vert:gN,distanceRGBA_frag:_N,equirect_vert:yN,equirect_frag:EN,linedashed_vert:xN,linedashed_frag:vN,meshbasic_vert:bN,meshbasic_frag:SN,meshlambert_vert:TN,meshlambert_frag:AN,meshmatcap_vert:MN,meshmatcap_frag:RN,meshnormal_vert:wN,meshnormal_frag:CN,meshphong_vert:IN,meshphong_frag:PN,meshphysical_vert:ON,meshphysical_frag:DN,meshtoon_vert:NN,meshtoon_frag:LN,points_vert:FN,points_frag:UN,shadow_vert:BN,shadow_frag:kN,sprite_vert:VN,sprite_frag:GN},de={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new yn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new yn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Qy={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new yt(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new yt(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new ke},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qy.physical={uniforms:Bt([Qy.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new yn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new yn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new yn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Ui=(1+Math.sqrt(5))/2,Sr=1/Ui,aH=[new ke(-Ui,Sr,0),new ke(Ui,Sr,0),new ke(-Sr,0,Ui),new ke(Sr,0,Ui),new ke(0,Ui,-Sr),new ke(0,Ui,Sr),new ke(-1,1,-1),new ke(1,1,-1),new ke(-1,1,1),new ke(1,1,1)];var lH=new Float32Array(16),cH=new Float32Array(9),uH=new Float32Array(4);var dH={[Hu]:zu,[Wu]:qu,[Xu]:Ku,[$u]:Yu,[zu]:Hu,[qu]:Wu,[Ku]:Xu,[Yu]:$u};function Ua(t){let e=Math.PI/180,n=0,i=1,r=2,s=600,o=0,a=1/(s+1);function l(d,h){let f=Math.hypot(d.X,d.Y,d.Z);f!==0&&(h.X=d.X/f,h.Y=d.Y/f,h.Z=d.Z/f)}function c(d,h){let f={X:d.X,Y:d.Y,Z:d.Z},p=[[0,0,0],[0,0,0],[0,0,0]],g=Math.cos(h[n]),S=Math.sin(h[n]),E=Math.cos(h[i]),M=Math.sin(h[i]),_=Math.cos(h[r]),b=Math.sin(h[r]),R=_*g,U=b*g,H=S*_,$=S*b;p[0][0]=_*E,p[0][1]=-E*b,p[0][2]=M,p[1][0]=U+H*M,p[1][1]=R-$*M,p[1][2]=-S*E,p[2][0]=$-R*M,p[2][1]=H+U*M,p[2][2]=E*g,d.X=f.X*p[0][0]+f.Y*p[1][0]+f.Z*p[2][0],d.Y=f.X*p[0][1]+f.Y*p[1][1]+f.Z*p[2][1],d.Z=f.X*p[0][2]+f.Y*p[1][2]+f.Z*p[2][2]}function u(d,h,f){let p=Math.cos(h),g=Math.sin(h),S=Math.cos(f),E=Math.sin(f),M=d.X*S+d.Y*g*E+d.Z*E*p,_=d.Y*p-d.Z*g,b=Math.atan2(_,M)+o/10*e;return b+=2*Math.PI,b>2*Math.PI&&(b-=2*Math.PI),b}this.updateEstimatedAttitude=function(d,h,f,p,g,S){let E=0,M,_=[0,0,0];this.previousTime===!1?M=1:M=f-this.previousTime;let b=M*g;this.previousTime=f;for(let U=0;U<3;U++)_[U]=d[U]*b,E+=h[U]*h[U];E=E*100/(p*p),c(this.estimateGyro,_),72<E&&E<133&&(this.estimateGyro.X=(this.estimateGyro.X*s+h[0])*a,this.estimateGyro.Y=(this.estimateGyro.Y*s+h[1])*a,this.estimateGyro.Z=(this.estimateGyro.Z*s+h[2])*a);let R={roll:Math.atan2(this.estimateGyro.Y,this.estimateGyro.Z),pitch:Math.atan2(-this.estimateGyro.X,Math.sqrt(this.estimateGyro.Y*this.estimateGyro.Y+this.estimateGyro.Z*this.estimateGyro.Z))};return c(this.EstN,_),l(this.EstN,this.EstN),R.heading=u(this.EstN,R.roll,R.pitch),R},t?this.copyStateFrom(t):this.reset()}Ua.prototype.reset=function(){this.estimateGyro={X:0,Y:0,Z:0},this.EstN={X:1,Y:0,Z:0},this.estimateMag={X:0,Y:0,Z:0},this.previousTime=!1};Ua.prototype.copyStateFrom=function(t){this.estimateGyro={X:t.estimateGyro.X,Y:t.estimateGyro.Y,Z:t.estimateGyro.Z},this.estimateMag={X:t.estimateMag.X,Y:t.estimateMag.Y,Z:t.estimateMag.Z},this.EstN={X:t.EstN.X,Y:t.EstN.Y,Z:t.EstN.Z},this.previousTime=t.previousTime};var pi=Math.PI/180,Ba=t=>typeof t=="number"&&Number.isFinite(t);function ka(t,e=0){return{qx:t.x,qy:t.y,qz:t.z,qw:t.w,attitudeSegment:e}}function td(t){if(t.length!==3||!t.every(Ba))return null;let e=t.map(i=>i/32767),n=e.reduce((i,r)=>i+r*r,0);return n>1.001?null:new zt(...e,Math.sqrt(Math.max(0,1-n))).normalize()}function HN(t,e,n){return new zt().setFromEuler(new Li(t*pi,e*pi,-n*pi,"ZYX"))}var Is=class{constructor(e=!1){this.useAccelerometer=e,this.segment=0,this.reset(!1)}reset(e=!0){this.q=new zt,this.imu=new Ua,this.previous=null,this.initialized=!1,this.needsReset=!1,e&&this.segment++}invalidate(){this.needsReset=!0}update(e,n,i){if(!Ba(e)||!n.every(Ba))return this.invalidate(),null;if(this.previous!==null&&e<=this.previous.t)return null;(this.needsReset||this.previous&&e-this.previous.t>.1)&&this.reset();let r;if(this.useAccelerometer){if(!i?.every(Ba))return this.invalidate(),null;if(!this.initialized){let o=Math.hypot(...i);if(o<.85||o>1.15)return null;this.imu.estimateGyro={X:i[0],Y:i[1],Z:i[2]},this.initialized=!0}let s=this.imu.updateEstimatedAttitude(n,i,e*1e6,1,pi/1e6);r=HN(s.roll/pi,s.pitch/pi,s.heading/pi)}else{if(this.previous){let s=e-this.previous.t,o=new ke(...n.map((l,c)=>(l+this.previous.gyro[c])*.5*pi*s)),a=o.length();a>0&&this.q.multiply(new zt().setFromAxisAngle(o.divideScalar(a),a)).normalize()}r=this.q.clone()}return this.previous={t:e,gyro:[...n]},ka(r,this.segment)}};var iE=bn(tE(),1),xn=1024,zN=128,nE=new iE.default(xn),WN=Number.isFinite,Va=t=>typeof t=="number"&&WN(t),mi=t=>t.reduce((e,n)=>e+n,0)/t.length,Ps=t=>Math.sqrt(mi(t.map(e=>e*e))),En=t=>Va(t)?Number(t.toPrecision(7)):null,rE=Array.from({length:xn},(t,e)=>.5-.5*Math.cos(2*Math.PI*e/(xn-1))),$N=rE.reduce((t,e)=>t+e*e,0);var Ga=Object.fromEntries(["P","I","D","F"].flatMap(t=>[0,1,2].map(e=>[`${t.toLowerCase()}${e}`,[`axis${t}[${e}]`]])).concat([0,1,2].map(t=>[`raw${t}`,[`gyroUnfilt[${t}]`]]))),XN=/^(?:rollPID|pitchPID|yawPID|pid.*|d_min.*|d_max.*|feedforward.*|ff_.*|gyro.*|dterm.*|dyn_notch.*|rpm_filter.*|motor_poles|dshot_bidir|debug_mode|looptime|blackbox.*|simplified.*|tpa.*|iterm.*|anti_gravity.*)$/;function sE(t){let e=[];for(let n of t.split(/\r?\n/)){let i=/^H ([a-zA-Z0-9_.]+):\s*([^\r\n]*)$/.exec(n);i&&XN.test(i[1])&&e.length<180&&e.push([i[1],i[2].trim().slice(0,200)])}return Object.fromEntries(e)}function nd(t,e){if(t.length!==xn||!t.every(Va)||e<500)return null;let n=mi(t),i=t.map((s,o)=>(s-n)*rE[o]),r=nE.createComplexArray();return nE.realTransform(r,i),Array.from({length:zN},(s,o)=>{let a=0;for(let l=1+o*4;l<=4+o*4;l++)a+=(r[2*l]**2+r[2*l+1]**2)*(l===xn/2?1:2)/(e*$N);return En(a/4)})}function Tr(t,e){let n=t.map(i=>i[e]);return n.every(Va)?n:null}function YN(t,e,n){if(!t||!e||n<500)return null;let i=mi(t);if(Ps(t.map(u=>u-i))<30)return null;let s=Math.max(1,Math.floor(xn/128)),o=Math.min(Math.round(.06*n),xn/4),a=Math.max(1,Math.round(.002*n)),l={correlation:-1,ms:0},c=-1;for(let u=0;u<=o;u+=a){let d=[],h=[];for(let _=0;_<xn-o;_+=s)d.push(t[_]),h.push(e[_+u]);let f=mi(d),p=mi(h),g=0,S=0,E=0;for(let _=0;_<d.length;_++)g+=(d[_]-f)*(h[_]-p),S+=(d[_]-f)**2,E+=(h[_]-p)**2;let M=g/Math.sqrt(S*E);u===0&&(c=M),M>l.correlation&&(l={correlation:M,ms:u/n*1e3})}return l.ms>0&&l.correlation-c<.02?null:l.correlation>=.7&&l.ms<o/n*1e3-2?{ms:En(l.ms),correlation:En(l.correlation)}:null}var Os=class{constructor({source:e="bbl",config:n={}}={}){this.source=e,this.config=n,this.rows=[],this.windows=[],this.seen=0,this.discarded=0,this.capped=!1}invalidate(){this.discarded+=this.rows.length,this.rows=[]}push(e){if(this.seen++,this.windows.length>=2048){this.capped=!0,this.discarded++;return}if(this.rows.push(e),this.rows.length!==xn)return;let n=this.rows;this.rows=[];let i=n[0].t,r=n.at(-1).t,s=(r-i)/(xn-1),o=1/s;if(!(o>=10&&o<=32e3)||n.slice(1).some((d,h)=>Math.abs((d.t-n[h].t)/s-1)>.05)){this.discarded+=xn;return}let a=Tr(n,"throttle"),l=n.map(d=>[0,1,2,3].map(h=>d[`m${h}`])),c=l.every(d=>d.every(Va))?mi(l.map(d=>Math.max(...d)>=95?100:0)):null,u=[0,1,2].map(d=>{let h=Tr(n,["roll","pitch","yaw"][d]),f=Tr(n,["gx","gy","gz"][d]),p=Tr(n,`raw${d}`),g=Tr(n,`d${d}`),S=h&&f?h.map((_,b)=>_-f[b]):null,E=["p","i","d","f"].map(_=>{let b=Tr(n,`${_}${d}`);return b?En(Ps(b)):null}),M=h&&Math.max(...h.map(Math.abs))<30;return{error:S?En(Ps(S)):null,bias:M&&S?En(mi(S)):null,command:h?En(Ps(h)):null,gyro:f?En(Ps(f)):null,terms:E,lag:YN(h,f,o),filtered:nd(f||[],o),raw:nd(p||[],o),d:nd(g||[],o)}});this.windows.push({start:i,end:r,fs:En(o),throttle:a?En(mi(a)):null,saturation:En(c),axes:u})}finish(){return this.invalidate(),{version:1,source:this.source,config:this.config,seen:this.seen,discarded:this.discarded,capped:this.capped,windows:this.windows}}};var id=["throttle","roll","pitch","yaw","gx","gy","gz","m0","m1","m2","m3","voltage","current","ax","ay","az","qx","qy","qz","qw","attitudeSegment"],vn=t=>typeof t=="number"&&Number.isFinite(t),Ha=(t,e,n)=>Math.max(e,Math.min(n,t));var za=new TextEncoder().encode("H Product:Blackbox flight data recorder"),oE={t:["time (us)","time","time (s)","time (ms)","timestamp","t"],throttle:["throttle","setpoint[3]","rcCommand[3]"],roll:["setpoint[0]","roll"],pitch:["setpoint[1]","pitch"],yaw:["setpoint[2]","yaw"],gx:["gyroADC[0]","gyro[0]","gx"],gy:["gyroADC[1]","gyro[1]","gy"],gz:["gyroADC[2]","gyro[2]","gz"],m0:["motor[0]","m0"],m1:["motor[1]","m1"],m2:["motor[2]","m2"],m3:["motor[3]","m3"],voltage:["voltage","vbatLatest"],current:["current","amperageLatest"],ax:["accSmooth[0]","ax"],ay:["accSmooth[1]","ay"],az:["accSmooth[2]","az"],qx:["imuQuaternion[0]"],qy:["imuQuaternion[1]"],qz:["imuQuaternion[2]"]};function sd(t){let e=t.replace(/^\uFEFF/,"").split(/\r?\n/),n=-1;for(let l=0;l<Math.min(e.length,1e3);l++){let c=Wa.default.parse(e[l],{skipEmptyLines:!0}).data[0]||[];if(c.some(u=>oE.t.some(d=>d.toLowerCase()===u.trim().toLowerCase()))&&c.length>=2){n=l;break}}if(n<0)throw Error("Intestazione CSV non trovata. Serve una colonna time, time (us), time (ms), time (s), timestamp o t.");let i=e.slice(n).join(`
`),s=Wa.default.parse(i,{preview:6,skipEmptyLines:"greedy"}).data[0].map(l=>l.trim());if(new Set(s).size!==s.length)throw Error("Il CSV contiene intestazioni duplicate.");let o={};for(let[l,c]of Object.entries({...oE,...Ga}))o[l]=s.findIndex(u=>c.some(d=>d.toLowerCase()===u.toLowerCase()));let a=s[o.t];return{headers:s,mapping:o,start:n,timeUnit:a?.includes("(s)")||a==="t"?"s":a?.includes("(ms)")?"ms":"us",throttleUnit:s[o.throttle]==="rcCommand[3]"?"rc":s[o.throttle]==="setpoint[3]"?"milli":"pct",csv:i}}function aE(t,e,n,i){if(t.length<2)throw Error("Il log non contiene abbastanza campioni validi.");let r=id.filter(s=>t.some(o=>vn(o[s])));if(!r.length)throw Error("Nessun canale telemetrico riconosciuto.");return{name:e.replace(/\.[^.]+$/,""),officialTime:null,battery:"",setup:"",notes:"",source:e,firmware:n,demo:!1,samples:t,trim:[0,t.at(-1).t],offset:0,warnings:i,channels:r}}function lE(t,e,n){let{csv:i}=sd(t),r=[],s=[],o=null,a=-1/0,l=0,c=0,u=0,d=-1/0,{mapping:h,timeUnit:f,throttleUnit:p,motorMin:g,motorMax:S,voltageDiv:E,currentDiv:M,gyroMultiplier:_}=e,b=e.accDiv??1,R=["qx","qy","qz"].every(m=>h[m]>=0),U=["ax","ay","az"].every(m=>h[m]>=0),H=new Is(U),$=new Os({source:"csv"});if(!vn(b)||b<=0)throw Error("Scala accelerometro non valida.");if(h.t<0||!["s","ms","us"].includes(f))throw Error("Seleziona una colonna e una unita per il tempo.");if(![g,S,E,M,_].every(vn)||S<=g||E<=0||M<=0||_<=0)throw Error("Scale dei canali non valide.");let F,w=Wa.default.parse(i,{skipEmptyLines:"greedy",step(m,x){if(!l++)return;if(l>2e6){F="CSV troppo grande: massimo 2 milioni di righe.",x.abort();return}if(m.errors.length){c++,H.invalidate(),$.invalidate();return}let D=m.data,z=ee=>{let Q=D[h[ee]];return Q===void 0||Q.trim()===""?null:Number(Q.trim().replace(",","."))},P=z("t"),A=P/(f==="us"?1e6:f==="ms"?1e3:1);if(!vn(P)||A<0){c++,$.invalidate();return}o===null&&(o=A);let C=A-o;if(C<0||C<=a){c++,$.invalidate();return}if(C>86400){F="Il tempo supera 24 ore. Controlla la scala temporale.",x.abort();return}a=C;let O={t:C};for(let ee of id){let Q=z(ee);O[ee]=vn(Q)?Q:null}O.throttle!==null&&(O.throttle=p==="rc"?(O.throttle-1e3)/10:p==="milli"?O.throttle/10:O.throttle),O.throttle!==null&&(O.throttle<0||O.throttle>100)&&(O.throttle=null,c++);for(let ee of["gx","gy","gz"])O[ee]!==null&&(O[ee]*=_);for(let ee of["ax","ay","az"])O[ee]!==null&&(O[ee]/=b);let te;if(R){let ee=td([z("qx"),z("qy"),z("qz")]);te=ee?ka(ee):null}else te=H.update(C,[O.gx,O.gy,O.gz],[O.ax,O.ay,O.az]);for(let ee of["qx","qy","qz","qw","attitudeSegment"])O[ee]=te?.[ee]??null;for(let ee of["m0","m1","m2","m3"])O[ee]!==null&&(O[ee]=Ha((O[ee]-g)/(S-g)*100,0,100));O.voltage!==null&&(O.voltage/=E),O.current!==null&&(O.current/=M);let Z={};for(let ee of Object.keys(Ga)){let Q=z(ee);Z[ee]=vn(Q)?Q*(ee.startsWith("raw")?_:1):null}if($.push({...O,...Z}),C-d<.005-1e-8){u++;return}d=C,r.push(O)}});if(F)throw Error(F);c&&s.push(`${c} righe o valori non validi esclusi.`),u&&s.push("Campioni limitati a 200 Hz. Picchi piu brevi possono non essere rappresentati.");let I=aE(r,n,"CSV / scale confermate",s);return I.attitudeSource=R?"recorded":U?"estimated":"relative",I.tuning=$.finish(),I}function cE(t,e){let n=new Uint8Array(t),i=[];e:for(let o=0;o<=n.length-za.length;o++)if(n[o]===72){for(let a=1;a<za.length;a++)if(n[o+a]!==za[a])continue e;i.push(o),o+=za.length-1}if(!i.length)throw Error("Intestazione Blackbox non trovata. Importa un BBL/BFL originale o il CSV decodificato.");if(i.length>100)throw Error("Il file contiene oltre 100 voli. Dividilo prima di importarlo.");let r=[],s=[];for(let o=0;o<i.length;o++)try{let a=new ht(n),l=i[o+1]??n.length;a.parseHeader(i[o],l);let c=a.sysConfig,u=a.frameDefs.I.nameToIndex;if(c.firmwareType!==lt||!rd.default.gte(c.firmwareVersion,"3.1.0"))throw Error("Firmware non supportato direttamente: esporta un CSV e conferma le scale.");let d=[],h=[],f=new TextDecoder().decode(n.subarray(i[o],Math.min(l,i[o]+2e4))),p=c.blackbox_high_resolution>0?10:1,g=/H gyro(?:\.scale|_scale):/.test(f),S=c.gyroScale*1e6/(Math.PI/180)/p,E=new Os({source:"bbl",config:sE(f)}),M=null,_=-1/0,b=0,R=0,U=-1/0,H=[0,1,2].every(z=>u[`imuQuaternion[${z}]`]!==void 0),$=[0,1,2].every(z=>u[`accSmooth[${z}]`]!==void 0)&&vn(c.acc_1G)&&c.acc_1G>0&&/H acc_1G:/.test(f),F=new Is($),w=c.motorOutput?.[0],I=c.motorOutput?.[1],m=vn(w)&&vn(I)&&I>w;a.onFrameReady=(z,P,A)=>{if(A!=="I"&&A!=="P")return;if(!z){R++,F.invalidate(),E.invalidate();return}let C=ae=>{let ve=P[u[ae]];return vn(ve)?ve:null},O=C("time");if(O===null){E.invalidate();return}M===null&&(M=O);let te=(O-M)/1e6;if(te<0||te>86400||te<=U){R++,E.invalidate();return}U=te;let Z=[0,1,2].map(ae=>$&&C(`accSmooth[${ae}]`)!==null?C(`accSmooth[${ae}]`)/c.acc_1G:null),ee;if(H){let ae=td([0,1,2].map(ve=>C(`imuQuaternion[${ve}]`)));ee=ae?ka(ae):null}else ee=F.update(te,[0,1,2].map(ae=>g&&C(`gyroADC[${ae}]`)!==null?C(`gyroADC[${ae}]`)*S:null),Z);let Q={t:te},Ve=C("setpoint[3]");Q.throttle=Ve!==null?Ve/10:C("rcCommand[3]")!==null?(C("rcCommand[3]")/p-1e3)/10:null,Q.throttle!==null&&(Q.throttle=Ha(Q.throttle,0,100));for(let ae=0;ae<3;ae++){let ve=C(`setpoint[${ae}]`);Q[["roll","pitch","yaw"][ae]]=ve===null?null:ve/p;let Me=C(`gyroADC[${ae}]`);Q[["gx","gy","gz"][ae]]=Me!==null&&g?Me*S:null}for(let ae=0;ae<3;ae++)Q[["ax","ay","az"][ae]]=Z[ae];for(let ae of["qx","qy","qz","qw","attitudeSegment"])Q[ae]=ee?.[ae]??null;for(let ae=0;ae<4;ae++){let ve=C(`motor[${ae}]`);Q[`m${ae}`]=ve!==null&&m?Ha((ve-w)/(I-w)*100,0,100):null}let le=C("vbatLatest"),me=C("amperageLatest");Q.voltage=le===null?null:le/(rd.default.gte(c.firmwareVersion,"4.0.0")?100:10),Q.current=me===null?null:me/100;let rt={};for(let[ae,ve]of Object.entries(Ga)){let Me=C(ve[0]);rt[ae]=Me!==null&&(!ae.startsWith("raw")||g)?Me*(ae.startsWith("raw")?S:1):null}if(E.push({...Q,...rt}),te-_<.005-1e-8){b++;return}if(_=te,d.length>=3e5)throw Error("Volo troppo lungo: massimo 300.000 campioni conservati.");d.push(Q)},a.parseLogData(!1),b&&h.push("Campioni limitati a 200 Hz. Picchi piu brevi possono non essere rappresentati.");let x=a.stats.totalCorruptFrames||R;x&&h.push(`${x} frame corrotti o non validi rilevati.`),g||h.push("Scala gyro assente: risposta gyro non disponibile."),m||h.push("Scala motori assente: percentuali motori non disponibili."),u["setpoint[0]"]===void 0&&h.push("Setpoint non registrato: tracking non disponibile.");let D=aE(d,i.length>1?`${e} / volo ${o+1}`:e,`Betaflight ${c.firmwareVersion}`,h);D.attitudeSource=H?"recorded":$?"estimated":"relative",D.tuning=E.finish(),r.push(D)}catch(a){s.push(`Volo ${o+1}: ${a.message||a}`)}if(!r.length)throw Error(s.join(`
`));return{heats:r,errors:s}}self.onmessage=async t=>{let{file:e,mode:n,options:i}=t.data;try{if(e.size>64*1024*1024)throw Error("File troppo grande: massimo 64 MB.");if(n==="inspect"){let{csv:r,...s}=sd(await e.text());self.postMessage({ok:!0,result:s})}else n==="csv"?self.postMessage({ok:!0,result:{heats:[lE(await e.text(),i,e.name)],errors:[]}}):self.postMessage({ok:!0,result:cE(await e.arrayBuffer(),e.name)})}catch(r){self.postMessage({ok:!1,error:String(r.message||r)})}};})();
/*! For license information please see import-worker.js.LEGAL.txt */
