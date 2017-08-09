(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()})(this,function(){"use strict"
function e(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function t(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function r(e,r){return t(e).appendChild(r)}function n(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function i(e,t,r,i){var o=n(e,t,r,i)
return o.setAttribute("role","presentation"),o}function o(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function a(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function l(t,r){var n=t.className
e(r).test(n)||(t.className+=(n?" ":"")+r)}function s(t,r){for(var n=t.split(" "),i=0;i<n.length;i++)n[i]&&!e(n[i]).test(r)&&(r+=" "+n[i])
return r}function c(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function u(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function d(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,a=i||0;;){var l=e.indexOf("\t",o)
if(l<0||l>=t)return a+(t-o)
a+=l-o,a+=r-a%r,o=l+1}}function f(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function h(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var a=o-n
if(o==e.length||i+a>=t)return n+Math.min(a,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}}function p(e){for(;Ta.length<=e;)Ta.push(g(Ta)+" ")
return Ta[e]}function g(e){return e[e.length-1]}function m(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function v(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}function y(){}function b(e,t){var r
return Object.create?r=Object.create(e):(y.prototype=e,r=new y),t&&u(t,r),r}function w(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ma.test(e))}function x(e,t){return t?!!(t.source.indexOf("\\w")>-1&&w(e))||t.test(e):w(e)}function k(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function C(e){return e.charCodeAt(0)>=768&&Na.test(e)}function S(e,t,r){for(;(r<0?t>0:t<e.length)&&C(e.charAt(t));)t+=r
return t}function L(e,t,r){for(;;){if(Math.abs(t-r)<=1)return e(t)?t:r
var n=Math.floor((t+r)/2)
e(n)?r=n:t=n}}function T(e,t,r){var o=this
this.input=r,o.scrollbarFiller=n("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=n("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=i("div",null,"CodeMirror-code"),o.selectionDiv=n("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=n("div",null,"CodeMirror-cursors"),o.measure=n("div",null,"CodeMirror-measure"),o.lineMeasure=n("div",null,"CodeMirror-measure"),o.lineSpace=i("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var a=i("div",[o.lineSpace],"CodeMirror-lines")
o.mover=n("div",[a],null,"position: relative"),o.sizer=n("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=n("div",null,null,"position: absolute; height: "+xa+"px; width: 1px;"),o.gutters=n("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=n("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=n("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),Zo&&Qo<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),Jo||$o&&sa||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1
o.selForContextMenu=null,o.activeTouch=null,r.init(o)}function M(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function N(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function O(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function A(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function W(e){if(null==e.parent)return null
for(var t=e.parent,r=f(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function z(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var l=e.lines[a],s=l.height
if(t<s)break
t-=s}return r+a}function D(e,t){return t>=e.first&&t<e.first+e.size}function H(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function P(e,t,r){if(void 0===r&&(r=null),!(this instanceof P))return new P(e,t,r)
this.line=e,this.ch=t,this.sticky=r}function I(e,t){return e.line-t.line||e.ch-t.ch}function E(e,t){return e.sticky==t.sticky&&0==I(e,t)}function F(e){return P(e.line,e.ch)}function B(e,t){return I(e,t)<0?t:e}function R(e,t){return I(e,t)<0?e:t}function j(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function K(e,t){if(t.line<e.first)return P(e.first,0)
var r=e.first+e.size-1
return t.line>r?P(r,M(e,r).text.length):V(t,M(e,t.line).text.length)}function V(e,t){var r=e.ch
return null==r||r>t?P(e.line,t):r<0?P(e.line,0):e}function G(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=K(e,t[n])
return r}function U(){Oa=!0}function q(){Aa=!0}function $(e,t,r){this.marker=e,this.from=t,this.to=r}function _(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function X(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function Y(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function Z(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)
if(l||o.from==t&&"bookmark"==a.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new $(a,o.from,s?null:o.to))}}return n}function Q(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker,l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)
if(l||o.from==t&&"bookmark"==a.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new $(a,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}function J(e,t){if(t.full)return null
var r=D(e,t.from.line)&&M(e,t.from.line).markedSpans,n=D(e,t.to.line)&&M(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,a=0==I(t.from,t.to),l=Z(r,i,a),s=Q(n,o,a),c=1==t.text.length,u=g(t.text).length+(c?i:0)
if(l)for(var d=0;d<l.length;++d){var f=l[d]
if(null==f.to){var h=_(s,f.marker)
h?c&&(f.to=null==h.to?null:h.to+u):f.to=i}}if(s)for(var p=0;p<s.length;++p){var m=s[p]
if(null!=m.to&&(m.to+=u),null==m.from){var v=_(l,m.marker)
v||(m.from=u,c&&(l||(l=[])).push(m))}else m.from+=u,c&&(l||(l=[])).push(m)}l&&(l=ee(l)),s&&s!=l&&(s=ee(s))
var y=[l]
if(!c){var b,w=t.text.length-2
if(w>0&&l)for(var x=0;x<l.length;++x)null==l[x].to&&(b||(b=[])).push(new $(l[x].marker,null,null))
for(var k=0;k<w;++k)y.push(b)
y.push(s)}return y}function ee(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function te(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=f(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var a=n[o],l=a.find(0),s=0;s<i.length;++s){var c=i[s]
if(!(I(c.to,l.from)<0||I(c.from,l.to)>0)){var u=[s,1],d=I(c.from,l.from),h=I(c.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&u.push({from:c.from,to:l.from}),(h>0||!a.inclusiveRight&&!h)&&u.push({from:l.to,to:c.to}),i.splice.apply(i,u),s+=u.length-3}}return i}function re(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function ne(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function ie(e){return e.inclusiveLeft?-1:0}function oe(e){return e.inclusiveRight?1:0}function ae(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=I(n.from,i.from)||ie(e)-ie(t)
if(o)return-o
var a=I(n.to,i.to)||oe(e)-oe(t)
return a||t.id-e.id}function le(e,t){var r,n=Aa&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||ae(r,i.marker)<0)&&(r=i.marker)
return r}function se(e){return le(e,!0)}function ce(e){return le(e,!1)}function ue(e,t,r,n,i){var o=M(e,t),a=Aa&&o.markedSpans
if(a)for(var l=0;l<a.length;++l){var s=a[l]
if(s.marker.collapsed){var c=s.marker.find(0),u=I(c.from,r)||ie(s.marker)-ie(i),d=I(c.to,n)||oe(s.marker)-oe(i)
if(!(u>=0&&d<=0||u<=0&&d>=0)&&(u<=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?I(c.to,r)>=0:I(c.to,r)>0)||u>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?I(c.from,n)<=0:I(c.from,n)<0)))return!0}}}function de(e){for(var t;t=se(e);)e=t.find(-1,!0).line
return e}function fe(e){for(var t;t=ce(e);)e=t.find(1,!0).line
return e}function he(e){for(var t,r;t=ce(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function pe(e,t){var r=M(e,t),n=de(r)
return r==n?t:W(n)}function ge(e,t){if(t>e.lastLine())return t
var r,n=M(e,t)
if(!me(e,n))return t
for(;r=ce(n);)n=r.find(1,!0).line
return W(n)+1}function me(e,t){var r=Aa&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&ve(e,t,n))return!0}}function ve(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return ve(e,n.line,_(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&ve(e,t,i))return!0}function ye(e){e=de(e)
for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var a=0;a<o.children.length;++a){var l=o.children[a]
if(l==r)break
t+=l.height}return t}function be(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=se(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=ce(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,n=o.to.line,r+=n.text.length-o.to.ch}return r}function we(e){var t=e.display,r=e.doc
t.maxLine=M(r,r.first),t.maxLineLength=be(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=be(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function xe(e,t,r,n){if(!e)return n(t,r,"ltr")
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<r&&a.to>t||t==r&&a.to==t)&&(n(Math.max(a.from,t),Math.min(a.to,r),1==a.level?"rtl":"ltr"),i=!0)}i||n(t,r,"ltr")}function ke(e,t,r){var n
Wa=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:Wa=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:Wa=i)}return null!=n?n:Wa}function Ce(e,t){var r=e.order
return null==r&&(r=e.order=za(e.text,t)),r}function Se(e,t,r){var n=S(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function Le(e,t,r){var n=Se(e,t.ch,r)
return null==n?null:new P(t.line,n,r<0?"after":"before")}function Te(e,t,r,n,i){if(e){var o=Ce(r,t.doc.direction)
if(o){var a,l=i<0?g(o):o[0],s=i<0==(1==l.level),c=s?"after":"before"
if(l.level>0){var u=Yt(t,r)
a=i<0?r.text.length-1:0
var d=Zt(t,u,a).top
a=L(function(e){return Zt(t,u,e).top==d},i<0==(1==l.level)?l.from:l.to-1,a),"before"==c&&(a=Se(r,a,1,!0))}else a=i<0?l.to:l.from
return new P(n,a,c)}}return new P(n,i<0?r.text.length:0,i<0?"before":"after")}function Me(e,t,r,n){var i=Ce(t,e.doc.direction)
if(!i)return Le(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=ke(i,r.ch,r.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(n>0?a.to>r.ch:a.from<r.ch))return Le(t,r,n)
var l,s=function(e,r){return Se(t,e instanceof P?e.ch:e,r)},c=function(r){return e.options.lineWrapping?(l=l||Yt(e,t),gr(e,t,l,r)):{begin:0,end:t.text.length}},u=c("before"==r.sticky?s(r,-1):r.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==n<0,f=s(r,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=u.end:f>=a.from&&f>=u.begin)){var h=d?"before":"after"
return new P(r.line,f,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new P(r.line,s(e,1),"before"):new P(r.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],l=t>0==(1!=a.level),c=l?n.begin:s(n.end,-1)
if(a.from<=c&&c<a.to)return o(c,l)
if(c=l?a.from:s(a.to,-1),n.begin<=c&&c<n.end)return o(c,l)}},g=p(o+n,n,u)
if(g)return g
var m=n>0?u.end:s(u.begin,-1)
return null==m||n>0&&m==t.text.length||!(g=p(n>0?0:i.length-1,n,c(m)))?null:g}function Ne(e,t){return e._handlers&&e._handlers[t]||Da}function Oe(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=f(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function Ae(e,t){var r=Ne(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function We(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Ae(e,r||t.type,e,t),Ee(t)||t.codemirrorIgnore}function ze(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==f(r,t[n])&&r.push(t[n])}function De(e,t){return Ne(e,t).length>0}function He(e){e.prototype.on=function(e,t){Ha(this,e,t)},e.prototype.off=function(e,t){Oe(this,e,t)}}function Pe(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ie(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function Ee(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Fe(e){Pe(e),Ie(e)}function Be(e){return e.target||e.srcElement}function Re(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),ca&&e.ctrlKey&&1==t&&(t=3),t}function je(e){if(null==ba){var t=n("span","​")
r(e,n("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(ba=t.offsetWidth<=1&&t.offsetHeight>2&&!(Zo&&Qo<8))}var i=ba?n("span","​"):n("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return i.setAttribute("cm-text",""),i}function Ke(e){if(null!=wa)return wa
var n=r(e,document.createTextNode("AخA")),i=ha(n,0,1).getBoundingClientRect(),o=ha(n,1,2).getBoundingClientRect()
return t(e),!(!i||i.left==i.right)&&(wa=o.right-i.right<3)}function Ve(e){if(null!=Ba)return Ba
var t=r(e,n("span","x")),i=t.getBoundingClientRect(),o=ha(t,0,1).getBoundingClientRect()
return Ba=Math.abs(i.left-o.left)>1}function Ge(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Ra[e]=t}function Ue(e,t){ja[e]=t}function qe(e){if("string"==typeof e&&ja.hasOwnProperty(e))e=ja[e]
else if(e&&"string"==typeof e.name&&ja.hasOwnProperty(e.name)){var t=ja[e.name]
"string"==typeof t&&(t={name:t}),e=b(t,e),e.name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return qe("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return qe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function $e(e,t){t=qe(t)
var r=Ra[t.name]
if(!r)return $e(e,"text/plain")
var n=r(e,t)
if(Ka.hasOwnProperty(t.name)){var i=Ka[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)n[a]=t.modeProps[a]
return n}function _e(e,t){u(t,Ka.hasOwnProperty(e)?Ka[e]:Ka[e]={})}function Xe(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ye(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode
return r||{mode:e,state:t}}function Ze(e,t,r){return!e.startState||e.startState(t,r)}function Qe(e,t,r,n){var i=[e.state.modeGen],o={}
at(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var a=0;a<e.state.overlays.length;++a)(function(r){var n=e.state.overlays[r],a=1,l=0
at(e,t.text,n.mode,!0,function(e,t){for(var r=a;l<e;){var o=i[a]
o>e&&i.splice(a,1,e,i[a+1],o),a+=2,l=Math.min(e,o)}if(t)if(n.opaque)i.splice(r,a-r,e,"overlay "+t),a=r+2
else for(;r<a;r+=2){var s=i[r+1]
i[r+1]=(s?s+" ":"")+"overlay "+t}},o)})(a)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Je(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=et(e,W(t)),i=Qe(e,t,t.text.length>e.options.maxHighlightLength?Xe(e.doc.mode,n):n)
t.stateAfter=n,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.frontier&&e.doc.frontier++}return t.styles}function et(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return!0
var o=lt(e,t,r),a=o>n.first&&M(n,o-1).stateAfter
return a=a?Xe(n.mode,a):Ze(n.mode),n.iter(o,t,function(r){tt(e,r.text,a)
var l=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
r.stateAfter=l?Xe(n.mode,a):null,++o}),r&&(n.frontier=o),a}function tt(e,t,r,n){var i=e.doc.mode,o=new Va(t,e.options.tabSize)
for(o.start=o.pos=n||0,""==t&&rt(i,r);!o.eol();)nt(i,o,r),o.start=o.pos}function rt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=Ye(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function nt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ye(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function it(e,t,r,n){var i,o=function(e){return{start:d.start,end:d.pos,string:d.current(),type:i||null,state:e?Xe(a.mode,u):u}},a=e.doc,l=a.mode
t=K(a,t)
var s,c=M(a,t.line),u=et(e,t.line,r),d=new Va(c.text,e.options.tabSize)
for(n&&(s=[]);(n||d.pos<t.ch)&&!d.eol();)d.start=d.pos,i=nt(l,d,u),n&&s.push(o(!0))
return n?s:o()}function ot(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function at(e,t,r,n,i,o,a){var l=r.flattenSpans
null==l&&(l=e.options.flattenSpans)
var s,c=0,u=null,d=new Va(t,e.options.tabSize),f=e.options.addModeClass&&[null]
for(""==t&&ot(rt(r,n),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&tt(e,t,n,d.pos),d.pos=t.length,s=null):s=ot(nt(r,d,n,f),o),f){var h=f[0].name
h&&(s="m-"+(s?h+" "+s:h))}if(!l||u!=s){for(;c<d.start;)c=Math.min(d.start,c+5e3),i(c,u)
u=s}d.start=d.pos}for(;c<d.pos;){var p=Math.min(d.pos,c+5e3)
i(p,u),c=p}}function lt(e,t,r){for(var n,i,o=e.doc,a=r?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first
var s=M(o,l-1)
if(s.stateAfter&&(!r||l<=o.frontier))return l
var c=d(s.text,null,e.options.tabSize);(null==i||n>c)&&(i=l-1,n=c)}return i}function st(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),re(e),ne(e,r)
var i=n?n(e):1
i!=e.height&&A(e,i)}function ct(e){e.parent=null,re(e)}function ut(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?$a:qa
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function dt(e,t){var r=i("span",null,null,Jo?"padding-right: .1px":null),n={pre:i("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:(Zo||Jo)&&e.getOption("lineWrapping")}
t.measure={}
for(var o=0;o<=(t.rest?t.rest.length:0);o++){var a=o?t.rest[o-1]:t.line,l=void 0
n.pos=0,n.addToken=ht,Ke(e.display.measure)&&(l=Ce(a,e.doc.direction))&&(n.addToken=gt(n.addToken,l)),n.map=[]
vt(a,n,Je(e,a,t!=e.display.externalMeasured&&W(a))),a.styleClasses&&(a.styleClasses.bgClass&&(n.bgClass=s(a.styleClasses.bgClass,n.bgClass||"")),a.styleClasses.textClass&&(n.textClass=s(a.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(je(e.display.measure))),0==o?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(Jo){var c=n.content.lastChild;(/\bcm-tab\b/.test(c.className)||c.querySelector&&c.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return Ae(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=s(n.pre.className,n.textClass||"")),n}function ft(e){var t=n("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function ht(e,t,r,i,o,a,l){if(t){var s,c=e.splitSpaces?pt(t,e.trailingSpace):t,u=e.cm.state.specialChars,d=!1
if(u.test(t)){s=document.createDocumentFragment()
for(var f=0;;){u.lastIndex=f
var h=u.exec(t),g=h?h.index-f:t.length-f
if(g){var m=document.createTextNode(c.slice(f,f+g))
Zo&&Qo<9?s.appendChild(n("span",[m])):s.appendChild(m),e.map.push(e.pos,e.pos+g,m),e.col+=g,e.pos+=g}if(!h)break
f+=g+1
var v=void 0
if("\t"==h[0]){var y=e.cm.options.tabSize,b=y-e.col%y
v=s.appendChild(n("span",p(b),"cm-tab")),v.setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==h[0]||"\n"==h[0]?(v=s.appendChild(n("span","\r"==h[0]?"␍":"␤","cm-invalidchar")),v.setAttribute("cm-text",h[0]),e.col+=1):(v=e.cm.options.specialCharPlaceholder(h[0]),v.setAttribute("cm-text",h[0]),Zo&&Qo<9?s.appendChild(n("span",[v])):s.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,s=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,s),Zo&&Qo<9&&(d=!0),e.pos+=t.length
if(e.trailingSpace=32==c.charCodeAt(t.length-1),r||i||o||d||l){var w=r||""
i&&(w+=i),o&&(w+=o)
var x=n("span",[s],w,l)
return a&&(x.title=a),e.content.appendChild(x)}e.content.appendChild(s)}}function pt(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}function gt(e,t){return function(r,n,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var c=r.pos,u=c+n.length;;){for(var d=void 0,f=0;f<t.length&&(d=t[f],!(d.to>c&&d.from<=c));f++);if(d.to>=u)return e(r,n,i,o,a,l,s)
e(r,n.slice(0,d.to-c),i,o,null,l,s),o=null,n=n.slice(d.to-c),c=d.to}}}function mt(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function vt(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var a,l,s,c,u,d,f,h=i.length,p=0,g=1,m="",v=0;;){if(v==p){s=c=u=d=l="",f=null,v=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],k=x.marker
"bookmark"==k.type&&x.from==p&&k.widgetNode?y.push(k):x.from<=p&&(null==x.to||x.to>p||k.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&v>x.to&&(v=x.to,c=""),k.className&&(s+=" "+k.className),k.css&&(l=(l?l+";":"")+k.css),k.startStyle&&x.from==p&&(u+=" "+k.startStyle),k.endStyle&&x.to==v&&(b||(b=[])).push(k.endStyle,x.to),k.title&&!d&&(d=k.title),k.collapsed&&(!f||ae(f.marker,k)<0)&&(f=x)):x.from>p&&v>x.from&&(v=x.from)}if(b)for(var C=0;C<b.length;C+=2)b[C+1]==v&&(c+=" "+b[C])
if(!f||f.from==p)for(var S=0;S<y.length;++S)mt(t,0,y[S])
if(f&&(f.from||0)==p){if(mt(t,(null==f.to?h+1:f.to)-p,f.marker,null==f.from),null==f.to)return
f.to==p&&(f=!1)}}if(p>=h)break
for(var L=Math.min(h,v);;){if(m){var T=p+m.length
if(!f){var M=T>L?m.slice(0,L-p):m
t.addToken(t,M,a?a+s:s,u,p+M.length==v?c:"",d,l)}if(T>=L){m=m.slice(L-p),p=L
break}p=T,u=""}m=i.slice(o,o=r[g++]),a=ut(r[g++],t.cm.options)}}else for(var N=1;N<r.length;N+=2)t.addToken(t,i.slice(o,o=r[N]),ut(r[N+1],t.cm.options))}function yt(e,t,r){this.line=t,this.rest=he(t),this.size=this.rest?W(g(this.rest))-r+1:1,this.node=this.text=null,this.hidden=me(e,t)}function bt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var a=new yt(e.doc,M(e.doc,o),o)
n=o+a.size,i.push(a)}return i}function wt(e){_a?_a.ops.push(e):e.ownsGroup=_a={ops:[e],delayedCallbacks:[]}}function xt(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function kt(e,t){var r=e.ownsGroup
if(r)try{xt(r)}finally{_a=null,t(r)}}function Ct(e,t){var r=Ne(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
_a?n=_a.delayedCallbacks:Xa?n=Xa:(n=Xa=[],setTimeout(St,0))
for(var o=0;o<r.length;++o)(function(e){n.push(function(){return r[e].apply(null,i)})})(o)}}function St(){var e=Xa
Xa=null
for(var t=0;t<e.length;++t)e[t]()}function Lt(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?Ot(e,t):"gutter"==o?Wt(e,t,r,n):"class"==o?At(e,t):"widget"==o&&zt(e,t,n)}t.changes=null}function Tt(e){return e.node==e.text&&(e.node=n("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),Zo&&Qo<8&&(e.node.style.zIndex=2)),e.node}function Mt(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(r){var i=Tt(t)
t.background=i.insertBefore(n("div",null,r),i.firstChild),e.display.input.setUneditable(t.background)}}function Nt(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):dt(e,t)}function Ot(e,t){var r=t.text.className,n=Nt(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,At(e,t)):r&&(t.text.className=r)}function At(e,t){Mt(e,t),t.line.wrapClass?Tt(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=r||""}function Wt(e,t,r,i){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var o=Tt(t)
t.gutterBackground=n("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px; width: "+i.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),o.insertBefore(t.gutterBackground,t.text)}var a=t.line.gutterMarkers
if(e.options.lineNumbers||a){var l=Tt(t),s=t.gutter=n("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?i.fixedPos:-i.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(s),l.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||a&&a["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(n("div",H(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+i.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),a)for(var c=0;c<e.options.gutters.length;++c){var u=e.options.gutters[c],d=a.hasOwnProperty(u)&&a[u]
d&&s.appendChild(n("div",[d],"CodeMirror-gutter-elt","left: "+i.gutterLeft[u]+"px; width: "+i.gutterWidth[u]+"px"))}}}function zt(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)
Ht(e,t,r)}function Dt(e,t,r,n){var i=Nt(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),At(e,t),Wt(e,t,r,n),Ht(e,t,n),t.node}function Ht(e,t,r){if(Pt(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)Pt(e,t.rest[n],t,r,!1)}function Pt(e,t,r,i,o){if(t.widgets)for(var a=Tt(r),l=0,s=t.widgets;l<s.length;++l){var c=s[l],u=n("div",[c.node],"CodeMirror-linewidget")
c.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),It(c,u,r,i),e.display.input.setUneditable(u),o&&c.above?a.insertBefore(u,r.gutter||r.text):a.appendChild(u),Ct(c,"redraw")}}function It(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function Et(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!o(document.body,e.node)){var i="position: relative;"
e.coverGutter&&(i+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(i+="width: "+t.display.wrapper.clientWidth+"px;"),r(t.display.measure,n("div",[e.node],null,i))}return e.height=e.node.parentNode.offsetHeight}function Ft(e,t){for(var r=Be(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Bt(e){return e.lineSpace.offsetTop}function Rt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function jt(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=r(e.measure,n("pre","x")),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,o={left:parseInt(i.paddingLeft),right:parseInt(i.paddingRight)}
return isNaN(o.left)||isNaN(o.right)||(e.cachedPaddingH=o),o}function Kt(e){return xa-e.display.nativeBarWidth}function Vt(e){return e.display.scroller.clientWidth-Kt(e)-e.display.barWidth}function Gt(e){return e.display.scroller.clientHeight-Kt(e)-e.display.barHeight}function Ut(e,t,r){var n=e.options.lineWrapping,i=n&&Vt(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],c=a[l+1]
Math.abs(s.bottom-c.bottom)>2&&o.push((s.bottom+c.top)/2-r.top)}}o.push(r.bottom-r.top)}}function qt(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(W(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function $t(e,t){t=de(t)
var n=W(t),i=e.display.externalMeasured=new yt(e.doc,t,n)
i.lineN=n
var o=i.built=dt(e,i)
return i.text=o.pre,r(e.display.lineMeasure,o.pre),i}function _t(e,t,r,n){return Zt(e,Yt(e,t),r,n)}function Xt(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Sr(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Yt(e,t){var r=W(t),n=Xt(e,r)
n&&!n.text?n=null:n&&n.changes&&(Lt(e,n,r,br(e)),e.curOp.forceUpdate=!0),n||(n=$t(e,t))
var i=qt(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Zt(e,t,r,n,i){t.before&&(r=-1)
var o,a=r+(n||"")
return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Ut(e,t.view,t.rect),t.hasHeights=!0),o=er(e,t,r,n),o.bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function Qt(e,t,r){for(var n,i,o,a,l,s,c=0;c<e.length;c+=3)if(l=e[c],s=e[c+1],t<l?(i=0,o=1,a="left"):t<s?(i=t-l,o=i+1):(c==e.length-3||t==s&&e[c+3]>t)&&(o=s-l,i=o-1,t>=s&&(a="right")),null!=i){if(n=e[c+2],l==s&&r==(n.insertLeft?"left":"right")&&(a=r),"left"==r&&0==i)for(;c&&e[c-2]==e[c-3]&&e[c-1].insertLeft;)n=e[2+(c-=3)],a="left"
if("right"==r&&i==s-l)for(;c<e.length-3&&e[c+3]==e[c+4]&&!e[c+5].insertLeft;)n=e[(c+=3)+2],a="right"
break}return{node:n,start:i,end:o,collapse:a,coverStart:l,coverEnd:s}}function Jt(e,t){var r=Ya
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function er(e,t,r,n){var i,o=Qt(t.map,r,n),a=o.node,l=o.start,s=o.end,c=o.collapse
if(3==a.nodeType){for(var u=0;u<4;u++){for(;l&&C(t.line.text.charAt(o.coverStart+l));)--l
for(;o.coverStart+s<o.coverEnd&&C(t.line.text.charAt(o.coverStart+s));)++s
if(i=Zo&&Qo<9&&0==l&&s==o.coverEnd-o.coverStart?a.parentNode.getBoundingClientRect():Jt(ha(a,l,s).getClientRects(),n),i.left||i.right||0==l)break
s=l,l-=1,c="right"}Zo&&Qo<11&&(i=tr(e.display.measure,i))}else{l>0&&(c=n="right")
var d
i=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==n?d.length-1:0]:a.getBoundingClientRect()}if(Zo&&Qo<9&&!l&&(!i||!i.left&&!i.right)){var f=a.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+yr(e.display),top:f.top,bottom:f.bottom}:Ya}for(var h=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(h+p)/2,m=t.view.measure.heights,v=0;v<m.length-1&&!(g<m[v]);v++);var y=v?m[v-1]:0,b=m[v],w={left:("right"==c?i.right:i.left)-t.rect.left,right:("left"==c?i.left:i.right)-t.rect.left,top:y,bottom:b}
return i.left||i.right||(w.bogus=!0),e.options.singleCursorHeightPerLine||(w.rtop=h,w.rbottom=p),w}function tr(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Ve(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function rr(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function nr(e){e.display.externalMeasure=null,t(e.display.lineMeasure)
for(var r=0;r<e.display.view.length;r++)rr(e.display.view[r])}function ir(e){nr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function or(){return ta&&la?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function ar(){return ta&&la?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function lr(e,t,r,n,i){if(!i&&t.widgets)for(var o=0;o<t.widgets.length;++o)if(t.widgets[o].above){var a=Et(t.widgets[o])
r.top+=a,r.bottom+=a}if("line"==n)return r
n||(n="local")
var l=ye(t)
if("local"==n?l+=Bt(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect()
l+=s.top+("window"==n?0:ar())
var c=s.left+("window"==n?0:or())
r.left+=c,r.right+=c}return r.top+=l,r.bottom+=l,r}function sr(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=or(),i-=ar()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:n-a.left,top:i-a.top}}function cr(e,t,r,n,i){return n||(n=M(e.doc,t.line)),lr(e,n,_t(e,n,t.ch,i),r)}function ur(e,t,r,n,i,o){function a(t,a){var l=Zt(e,i,t,a?"right":"left",o)
return a?l.left=l.right:l.right=l.left,lr(e,n,l,r)}function l(e,t,r){var n=s[t],i=n.level%2!=0
return a(r?e-1:e,i!=r)}n=n||M(e.doc,t.line),i||(i=Yt(e,n))
var s=Ce(n,e.doc.direction),c=t.ch,u=t.sticky
if(c>=n.text.length?(c=n.text.length,u="before"):c<=0&&(c=0,u="after"),!s)return a("before"==u?c-1:c,"before"==u)
var d=ke(s,c,u),f=Wa,h=l(c,d,"before"==u)
return null!=f&&(h.other=l(c,f,"before"!=u)),h}function dr(e,t){var r=0
t=K(e.doc,t),e.options.lineWrapping||(r=yr(e.display)*t.ch)
var n=M(e.doc,t.line),i=ye(n)+Bt(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function fr(e,t,r,n,i){var o=P(e,t,r)
return o.xRel=i,n&&(o.outside=!0),o}function hr(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return fr(n.first,0,null,!0,-1)
var i=z(n,r),o=n.first+n.size-1
if(i>o)return fr(n.first+n.size-1,M(n,o).text.length,null,!0,1)
t<0&&(t=0)
for(var a=M(n,i);;){var l=mr(e,a,i,t,r),s=ce(a),c=s&&s.find(0,!0)
if(!s||!(l.ch>c.from.ch||l.ch==c.from.ch&&l.xRel>0))return l
i=W(a=c.to.line)}}function pr(e,t,r,n){var i=function(n){return lr(e,t,Zt(e,r,n),"line")},o=t.text.length,a=L(function(e){return i(e-1).bottom<=n},o,0)
return o=L(function(e){return i(e).top>n},a,o),{begin:a,end:o}}function gr(e,t,r,n){return pr(e,t,r,lr(e,t,Zt(e,r,n),"line").top)}function mr(e,t,r,n,i){i-=ye(t)
var o,a=0,l=t.text.length,s=Yt(e,t)
if(Ce(t,e.doc.direction)){if(e.options.lineWrapping){var c
c=pr(e,t,s,i),a=c.begin,l=c.end}o=new P(r,a)
var u,d,f=ur(e,o,"line",t,s).left,h=f<n?1:-1,p=f-n
do{if(u=p,d=o,null==(o=Me(e,t,o,h))||o.ch<a||l<=("before"==o.sticky?o.ch-1:o.ch)){o=d
break}p=ur(e,o,"line",t,s).left-n}while(h<0!=p<0&&Math.abs(p)<=Math.abs(u))
if(Math.abs(p)>Math.abs(u)){if(p<0==u<0)throw new Error("Broke out of infinite loop in coordsCharInner")
o=d}}else{var g=L(function(r){var o=lr(e,t,Zt(e,s,r),"line")
return o.top>i?(l=Math.min(r,l),!0):!(o.bottom<=i)&&(o.left>n||!(o.right<n)&&n-o.left<o.right-n)},a,l)
g=S(t.text,g,1),o=new P(r,g,g==l?"before":"after")}var m=ur(e,o,"line",t,s)
return(i<m.top||m.bottom<i)&&(o.outside=!0),o.xRel=n<m.left?-1:n>m.right?1:0,o}function vr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==Ua){Ua=n("pre")
for(var i=0;i<49;++i)Ua.appendChild(document.createTextNode("x")),Ua.appendChild(n("br"))
Ua.appendChild(document.createTextNode("x"))}r(e.measure,Ua)
var o=Ua.offsetHeight/50
return o>3&&(e.cachedTextHeight=o),t(e.measure),o||1}function yr(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=n("span","xxxxxxxxxx"),i=n("pre",[t])
r(e.measure,i)
var o=t.getBoundingClientRect(),a=(o.right-o.left)/10
return a>2&&(e.cachedCharWidth=a),a||10}function br(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a)r[e.options.gutters[a]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[a]]=o.clientWidth
return{fixedPos:wr(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function wr(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function xr(e){var t=vr(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/yr(e.display)-3)
return function(i){if(me(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function kr(e){var t=e.doc,r=xr(e)
t.iter(function(e){var t=r(e)
t!=e.height&&A(e,t)})}function Cr(e,t,r,n){var i=e.display
if(!r&&"true"==Be(t).getAttribute("cm-not-content"))return null
var o,a,l=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-l.left,a=t.clientY-l.top}catch(t){return null}var s,c=hr(e,o,a)
if(n&&1==c.xRel&&(s=M(e.doc,c.line).text).length==c.ch){var u=d(s,s.length,e.options.tabSize)-s.length
c=P(c.line,Math.max(0,Math.round((o-jt(e.display).left)/yr(e.display))-u))}return c}function Sr(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function Lr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Tr(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),a=0;a<r.sel.ranges.length;a++)if(!1!==t||a!=r.sel.primIndex){var l=r.sel.ranges[a]
if(!(l.from().line>=e.display.viewTo||l.to().line<e.display.viewFrom)){var s=l.empty();(s||e.options.showCursorWhenSelecting)&&Mr(e,l.head,i),s||Nr(e,l,o)}}return n}function Mr(e,t,r){var i=ur(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),o=r.appendChild(n("div"," ","CodeMirror-cursor"))
if(o.style.left=i.left+"px",o.style.top=i.top+"px",o.style.height=Math.max(0,i.bottom-i.top)*e.options.cursorHeight+"px",i.other){var a=r.appendChild(n("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
a.style.display="",a.style.left=i.other.left+"px",a.style.top=i.other.top+"px",a.style.height=.85*(i.other.bottom-i.other.top)+"px"}}function Nr(e,t,r){function i(e,t,r,i){t<0&&(t=0),t=Math.round(t),i=Math.round(i),s.appendChild(n("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?d-e:r)+"px;\n                             height: "+(i-t)+"px"))}function o(t,r,n){function o(r,n){return cr(e,P(t,r),"div",c,n)}var a,s,c=M(l,t),f=c.text.length
return xe(Ce(c,l.direction),r||0,null==n?f:n,function(e,t,l){var c,h,p,g=o(e,"left")
if(e==t)c=g,h=p=g.left
else{if(c=o(t-1,"right"),"rtl"==l){var m=g
g=c,c=m}h=g.left,p=c.right}null==r&&0==e&&(h=u),c.top-g.top>3&&(i(h,g.top,null,g.bottom),h=u,g.bottom<c.top&&i(h,g.bottom,null,c.top)),null==n&&t==f&&(p=d),(!a||g.top<a.top||g.top==a.top&&g.left<a.left)&&(a=g),(!s||c.bottom>s.bottom||c.bottom==s.bottom&&c.right>s.right)&&(s=c),h<u+1&&(h=u),i(h,c.top,p-h,c.bottom)}),{start:a,end:s}}var a=e.display,l=e.doc,s=document.createDocumentFragment(),c=jt(e.display),u=c.left,d=Math.max(a.sizerWidth,Vt(e)-a.sizer.offsetLeft)-c.right,f=t.from(),h=t.to()
if(f.line==h.line)o(f.line,f.ch,h.ch)
else{var p=M(l,f.line),g=M(l,h.line),m=de(p)==de(g),v=o(f.line,f.ch,m?p.text.length+1:null).end,y=o(h.line,m?0:null,h.ch).start
m&&(v.top<y.top-2?(i(v.right,v.top,null,v.bottom),i(u,y.top,y.left,y.bottom)):i(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&i(u,v.bottom,null,y.top)}r.appendChild(s)}function Or(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Ar(e){e.state.focused||(e.display.input.focus(),zr(e))}function Wr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Dr(e))},100)}function zr(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Ae(e,"focus",e,t),e.state.focused=!0,l(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),Jo&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Or(e))}function Dr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(Ae(e,"blur",e,t),e.state.focused=!1,ma(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Hr(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=wr(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",a=0;a<r.length;a++)if(!r[a].hidden){e.options.fixedGutter&&(r[a].gutter&&(r[a].gutter.style.left=o),r[a].gutterBackground&&(r[a].gutterBackground.style.left=o))
var l=r[a].alignable
if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function Pr(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=H(e.options,t.first+t.size-1),i=e.display
if(r.length!=i.lineNumChars){var o=i.measure.appendChild(n("div",[n("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),a=o.firstChild.offsetWidth,l=o.offsetWidth-a
return i.lineGutter.style.width="",i.lineNumInnerWidth=Math.max(a,i.lineGutter.offsetWidth-l)+1,i.lineNumWidth=i.lineNumInnerWidth+l,i.lineNumChars=i.lineNumInnerWidth?r.length:-1,i.lineGutter.style.width=i.lineNumWidth+"px",Mn(e),!0}return!1}function Ir(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=void 0
if(!i.hidden){if(Zo&&Qo<8){var a=i.node.offsetTop+i.node.offsetHeight
o=a-r,r=a}else{var l=i.node.getBoundingClientRect()
o=l.bottom-l.top}var s=i.line.height-o
if(o<2&&(o=vr(t)),(s>.001||s<-.001)&&(A(i.line,o),Er(i.line),i.rest))for(var c=0;c<i.rest.length;c++)Er(i.rest[c])}}}function Er(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function Fr(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Bt(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=z(t,n),a=z(t,i)
if(r&&r.ensure){var l=r.ensure.from.line,s=r.ensure.to.line
l<o?(o=l,a=z(t,ye(M(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=z(t,ye(M(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function Br(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,$o||Ln(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),$o&&Ln(e),wn(e,100))}function Rr(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,Hr(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function jr(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function Kr(e){var t=jr(e)
return t.x*=Qa,t.y*=Qa,t}function Vr(e,t){var r=jr(t),n=r.x,i=r.y,o=e.display,a=o.scroller,l=a.scrollWidth>a.clientWidth,s=a.scrollHeight>a.clientHeight
if(n&&l||i&&s){if(i&&ca&&Jo)e:for(var c=t.target,u=o.view;c!=a;c=c.parentNode)for(var d=0;d<u.length;d++)if(u[d].node==c){e.display.currentWheelTarget=c
break e}if(n&&!$o&&!ra&&null!=Qa)return i&&s&&Br(e,Math.max(0,Math.min(a.scrollTop+i*Qa,a.scrollHeight-a.clientHeight))),Rr(e,Math.max(0,Math.min(a.scrollLeft+n*Qa,a.scrollWidth-a.clientWidth))),(!i||i&&s)&&Pe(t),void(o.wheelStartX=null)
if(i&&null!=Qa){var f=i*Qa,h=e.doc.scrollTop,p=h+o.wrapper.clientHeight
f<0?h=Math.max(0,h+f-50):p=Math.min(e.doc.height,p+f+50),Ln(e,{top:h,bottom:p})}Za<20&&(null==o.wheelStartX?(o.wheelStartX=a.scrollLeft,o.wheelStartY=a.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=a.scrollLeft-o.wheelStartX,t=a.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,r&&(Qa=(Qa*Za+r)/(Za+1),++Za)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function Gr(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Rt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Kt(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function Ur(e,t){t||(t=Gr(e))
var r=e.display.barWidth,n=e.display.barHeight
qr(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Ir(e),qr(e,Gr(e)),r=e.display.barWidth,n=e.display.barHeight}function qr(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function $r(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&ma(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new tl[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),Ha(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Rr(e,t):Br(e,t)},e),e.display.scrollbars.addClass&&l(e.display.wrapper,e.display.scrollbars.addClass)}function _r(e,t){if(!We(e,"scrollCursorIntoView")){var r=e.display,i=r.sizer.getBoundingClientRect(),o=null
if(t.top+i.top<0?o=!0:t.bottom+i.top>(window.innerHeight||document.documentElement.clientHeight)&&(o=!1),null!=o&&!oa){var a=n("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-Bt(e.display))+"px;\n                         height: "+(t.bottom-t.top+Kt(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(a),a.scrollIntoView(o),e.display.lineSpace.removeChild(a)}}}function Xr(e,t,r,n){null==n&&(n=0)
for(var i,o=0;o<5;o++){var a=!1,l=ur(e,t),s=r&&r!=t?ur(e,r):l
i={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-n,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+n}
var c=Zr(e,i),u=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=c.scrollTop&&(Br(e,c.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=c.scrollLeft&&(Rr(e,c.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}function Yr(e,t){var r=Zr(e,t)
null!=r.scrollTop&&Br(e,r.scrollTop),null!=r.scrollLeft&&Rr(e,r.scrollLeft)}function Zr(e,t){var r=e.display,n=vr(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Gt(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var l=e.doc.height+Rt(r),s=t.top<n,c=t.bottom>l-n
if(t.top<i)a.scrollTop=s?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(c?l:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Vt(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),h=t.right-t.left>f
return h&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(h?0:10)):t.right>f+d-3&&(a.scrollLeft=t.right+(h?0:10)-f),a}function Qr(e,t,r){null==t&&null==r||en(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r)}function Jr(e){en(e)
var t=e.getCursor(),r=t,n=t
e.options.lineWrapping||(r=t.ch?P(t.line,t.ch-1):t,n=P(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin}}function en(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=dr(e,t.from),n=dr(e,t.to),i=Zr(e,{left:Math.min(r.left,n.left),top:Math.min(r.top,n.top)-t.margin,right:Math.max(r.right,n.right),bottom:Math.max(r.bottom,n.bottom)+t.margin})
e.scrollTo(i.scrollLeft,i.scrollTop)}}function tn(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++rl},wt(e.curOp)}function rn(e){kt(e.curOp,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
nn(e)})}function nn(e){for(var t=e.ops,r=0;r<t.length;r++)on(t[r])
for(var n=0;n<t.length;n++)an(t[n])
for(var i=0;i<t.length;i++)ln(t[i])
for(var o=0;o<t.length;o++)sn(t[o])
for(var a=0;a<t.length;a++)cn(t[a])}function on(e){var t=e.cm,r=t.display
kn(t),e.updateMaxLine&&we(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new nl(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function an(e){e.updatedDisplay=e.mustUpdate&&Cn(e.cm,e.update)}function ln(e){var t=e.cm,r=t.display
e.updatedDisplay&&Ir(t),e.barMeasure=Gr(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=_t(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Kt(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Vt(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection(e.focus))}function sn(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Rr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==a()&&(!document.hasFocus||document.hasFocus())
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Ur(t,e.barMeasure),e.updatedDisplay&&Nn(t,e.barMeasure),e.selectionChanged&&Or(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&Ar(e.cm)}function cn(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&Sn(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null==e.scrollTop||r.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(n.scrollTop=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop)),r.scrollbars.setScrollTop(n.scrollTop),r.scroller.scrollTop=n.scrollTop),null==e.scrollLeft||r.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(n.scrollLeft=Math.max(0,Math.min(r.scroller.scrollWidth-r.scroller.clientWidth,e.scrollLeft)),r.scrollbars.setScrollLeft(n.scrollLeft),r.scroller.scrollLeft=n.scrollLeft,Hr(t)),e.scrollToPos){_r(t,Xr(t,K(n,e.scrollToPos.from),K(n,e.scrollToPos.to),e.scrollToPos.margin))}var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers
if(i)for(var a=0;a<i.length;++a)i[a].lines.length||Ae(i[a],"hide")
if(o)for(var l=0;l<o.length;++l)o[l].lines.length&&Ae(o[l],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Ae(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function un(e,t){if(e.curOp)return t()
tn(e)
try{return t()}finally{rn(e)}}function dn(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
tn(e)
try{return t.apply(e,arguments)}finally{rn(e)}}}function fn(e){return function(){if(this.curOp)return e.apply(this,arguments)
tn(this)
try{return e.apply(this,arguments)}finally{rn(this)}}}function hn(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
tn(t)
try{return e.apply(this,arguments)}finally{rn(t)}}}function pn(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Aa&&pe(e.doc,t)<i.viewTo&&mn(e)
else if(r<=i.viewFrom)Aa&&ge(e.doc,r+n)>i.viewFrom?mn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)mn(e)
else if(t<=i.viewFrom){var o=vn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):mn(e)}else if(r>=i.viewTo){var a=vn(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):mn(e)}else{var l=vn(e,t,t,-1),s=vn(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(bt(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):mn(e)}var c=i.externalMeasured
c&&(r<c.lineN?c.lineN+=n:t<c.lineN+c.size&&(i.externalMeasured=null))}function gn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Sr(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==f(a,r)&&a.push(r)}}}function mn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function vn(e,t,r,n){var i,o=Sr(e,t),a=e.display.view
if(!Aa||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size
if(l!=t){if(n>0){if(o==a.length-1)return null
i=l+a[o].size-t,o++}else i=l-t
t+=i,r+=i}for(;pe(e.doc,r)!=r;){if(o==(n<0?0:a.length-1))return null
r+=n*a[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function yn(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=bt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=bt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Sr(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(bt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Sr(e,r)))),n.viewTo=r}function bn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function wn(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,c(xn,e))}function xn(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Xe(t.mode,et(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength,s=Qe(e,o,l?Xe(t.mode,n):n,!0)
o.styles=s.styles
var c=o.styleClasses,u=s.classes
u?o.styleClasses=u:c&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(t.frontier),o.stateAfter=l?n:Xe(t.mode,n)}else o.text.length<=e.options.maxHighlightLength&&tt(e,o.text,n),o.stateAfter=t.frontier%5==0?Xe(t.mode,n):null
if(++t.frontier,+new Date>r)return wn(e,e.options.workDelay),!0}),i.length&&un(e,function(){for(var t=0;t<i.length;t++)gn(e,i[t],"text")})}}function kn(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Kt(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Kt(e)+"px",t.scrollbarsClipped=!0)}function Cn(e,r){var n=e.display,i=e.doc
if(r.editorIsHidden)return mn(e),!1
if(!r.force&&r.visible.from>=n.viewFrom&&r.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==bn(e))return!1
Pr(e)&&(mn(e),r.dims=br(e))
var o=i.first+i.size,l=Math.max(r.visible.from-e.options.viewportMargin,i.first),s=Math.min(o,r.visible.to+e.options.viewportMargin)
n.viewFrom<l&&l-n.viewFrom<20&&(l=Math.max(i.first,n.viewFrom)),n.viewTo>s&&n.viewTo-s<20&&(s=Math.min(o,n.viewTo)),Aa&&(l=pe(e.doc,l),s=ge(e.doc,s))
var c=l!=n.viewFrom||s!=n.viewTo||n.lastWrapHeight!=r.wrapperHeight||n.lastWrapWidth!=r.wrapperWidth
yn(e,l,s),n.viewOffset=ye(M(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var u=bn(e)
if(!c&&0==u&&!r.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var d=a()
return u>4&&(n.lineDiv.style.display="none"),Tn(e,n.updateLineNumbers,r.dims),u>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,d&&a()!=d&&d.offsetHeight&&d.focus(),t(n.cursorDiv),t(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,c&&(n.lastWrapHeight=r.wrapperHeight,n.lastWrapWidth=r.wrapperWidth,wn(e,400)),n.updateLineNumbers=null,!0}function Sn(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Vt(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Rt(e.display)-Gt(e),r.top)}),t.visible=Fr(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&Cn(e,t);n=!1){Ir(e)
var i=Gr(e)
Lr(e),Ur(e,i),Nn(e,i)}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function Ln(e,t){var r=new nl(e,t)
if(Cn(e,r)){Ir(e),Sn(e,r)
var n=Gr(e)
Lr(e),Ur(e,n),Nn(e,n),r.finish()}}function Tn(e,r,n){function i(t){var r=t.nextSibling
return Jo&&ca&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var o=e.display,a=e.options.lineNumbers,l=o.lineDiv,s=l.firstChild,c=o.view,u=o.viewFrom,d=0;d<c.length;d++){var h=c[d]
if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;s!=h.node;)s=i(s)
var p=a&&null!=r&&r<=u&&h.lineNumber
h.changes&&(f(h.changes,"gutter")>-1&&(p=!1),Lt(e,h,u,n)),p&&(t(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(H(e.options,u)))),s=h.node.nextSibling}else{var g=Dt(e,h,u,n)
l.insertBefore(g,s)}u+=h.size}for(;s;)s=i(s)}function Mn(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function Nn(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Kt(e)+"px"}function On(e){var r=e.display.gutters,i=e.options.gutters
t(r)
for(var o=0;o<i.length;++o){var a=i[o],l=r.appendChild(n("div",null,"CodeMirror-gutter "+a))
"CodeMirror-linenumbers"==a&&(e.display.lineGutter=l,l.style.width=(e.display.lineNumWidth||1)+"px")}r.style.display=o?"":"none",Mn(e)}function An(e){var t=f(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function Wn(e,t){var r=e[t]
e.sort(function(e,t){return I(e.from(),t.from())}),t=f(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(I(o.to(),i.from())>=0){var a=R(o.from(),i.from()),l=B(o.to(),i.to()),s=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new ol(s?l:a,s?a:l))}}return new il(e,t)}function zn(e,t){return new il([new ol(e,t||e)],0)}function Dn(e){return e.text?P(e.from.line+e.text.length-1,g(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Hn(e,t){if(I(e,t.from)<0)return e
if(I(e,t.to)<=0)return Dn(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Dn(t).ch-t.to.ch),P(r,n)}function Pn(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new ol(Hn(i.anchor,t),Hn(i.head,t)))}return Wn(r,e.sel.primIndex)}function In(e,t,r){return e.line==t.line?P(r.line,e.ch-t.ch+r.ch):P(r.line+(e.line-t.line),e.ch)}function En(e,t,r){for(var n=[],i=P(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=In(l.from,i,o),c=In(Dn(l),i,o)
if(i=l.to,o=c,"around"==r){var u=e.sel.ranges[a],d=I(u.head,u.anchor)<0
n[a]=new ol(d?c:s,d?s:c)}else n[a]=new ol(s,s)}return new il(n,e.sel.primIndex)}function Fn(e){e.doc.mode=$e(e.options,e.doc.modeOption),Bn(e)}function Bn(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,wn(e,100),e.state.modeGen++,e.curOp&&pn(e)}function Rn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==g(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function jn(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){st(e,r,i,n),Ct(e,"change",e,t)}function a(e,t){for(var r=[],o=e;o<t;++o)r.push(new Ga(c[o],i(o),n))
return r}var l=t.from,s=t.to,c=t.text,u=M(e,l.line),d=M(e,s.line),f=g(c),h=i(c.length-1),p=s.line-l.line
if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length)
else if(Rn(e,t)){var m=a(0,c.length-1)
o(d,d.text,h),p&&e.remove(l.line,p),m.length&&e.insert(l.line,m)}else if(u==d)if(1==c.length)o(u,u.text.slice(0,l.ch)+f+u.text.slice(s.ch),h)
else{var v=a(1,c.length-1)
v.push(new Ga(f+u.text.slice(s.ch),h,n)),o(u,u.text.slice(0,l.ch)+c[0],i(0)),e.insert(l.line+1,v)}else if(1==c.length)o(u,u.text.slice(0,l.ch)+c[0]+d.text.slice(s.ch),i(0)),e.remove(l.line+1,p)
else{o(u,u.text.slice(0,l.ch)+c[0],i(0)),o(d,f+d.text.slice(s.ch),h)
var y=a(1,c.length-1)
p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,y)}Ct(e,"change",e,t)}function Kn(e,t,r){function n(e,i,o){if(e.linked)for(var a=0;a<e.linked.length;++a){var l=e.linked[a]
if(l.doc!=i){var s=o&&l.sharedHist
r&&!s||(t(l.doc,s),n(l.doc,e,s))}}}n(e,null,!0)}function Vn(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,kr(e),Fn(e),Gn(e),e.options.lineWrapping||we(e),e.options.mode=t.modeOption,pn(e)}function Gn(e){("rtl"==e.doc.direction?l:ma)(e.display.lineDiv,"CodeMirror-rtl")}function Un(e){un(e,function(){Gn(e),pn(e)})}function qn(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function $n(e,t){var r={from:F(t.from),to:Dn(t),text:N(e,t.from,t.to)}
return ei(e,r,t.from.line,t.to.line+1),Kn(e,function(e){return ei(e,r,t.from.line,t.to.line+1)},!0),r}function _n(e){for(;e.length;){if(!g(e).ranges)break
e.pop()}}function Xn(e,t){return t?(_n(e.done),g(e.done)):e.done.length&&!g(e.done).ranges?g(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),g(e.done)):void 0}function Yn(e,t,r,n){var i=e.history
i.undone.length=0
var o,a,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=Xn(i,i.lastOp==n)))a=g(o.changes),0==I(t.from,t.to)&&0==I(t.from,a.to)?a.to=Dn(t):o.changes.push($n(e,t))
else{var s=g(i.done)
for(s&&s.ranges||Jn(e.sel,i.done),o={changes:[$n(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,a||Ae(e,"historyAdded")}function Zn(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function Qn(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||Zn(e,o,g(i.done),t))?i.done[i.done.length-1]=t:Jn(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&_n(i.undone)}function Jn(e,t){var r=g(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function ei(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function ti(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function ri(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push(ti(r[i]))
return n}function ni(e,t){var r=ri(e,t),n=J(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],a=n[i]
if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],c=0;c<o.length;++c)if(o[c].marker==s.marker)continue e
o.push(s)}else a&&(r[i]=a)}return r}function ii(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?il.prototype.deepCopy.call(o):o)
else{var a=o.changes,l=[]
n.push({changes:l})
for(var s=0;s<a.length;++s){var c=a[s],u=void 0
if(l.push({from:c.from,to:c.to,text:c.text}),t)for(var d in c)(u=d.match(/^spans_(\d+)$/))&&f(t,Number(u[1]))>-1&&(g(l)[d]=c[d],delete c[d])}}}return n}function oi(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(n){var o=I(r,i)<0
o!=I(n,i)<0?(i=r,r=n):o!=I(r,n)<0&&(r=n)}return new ol(i,r)}return new ol(n||r,r)}function ai(e,t,r,n){fi(e,new il([oi(e,e.sel.primary(),t,r)],0),n)}function li(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=oi(e,e.sel.ranges[i],t[i],null)
fi(e,Wn(n,e.sel.primIndex),r)}function si(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,fi(e,Wn(i,e.sel.primIndex),n)}function ci(e,t,r,n){fi(e,zn(t,r),n)}function ui(e,t,r){var n={ranges:t.ranges,update:function(t){var r=this
this.ranges=[]
for(var n=0;n<t.length;n++)r.ranges[n]=new ol(K(e,t[n].anchor),K(e,t[n].head))},origin:r&&r.origin}
return Ae(e,"beforeSelectionChange",e,n),e.cm&&Ae(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?Wn(n.ranges,n.ranges.length-1):t}function di(e,t,r){var n=e.history.done,i=g(n)
i&&i.ranges?(n[n.length-1]=t,hi(e,t,r)):fi(e,t,r)}function fi(e,t,r){hi(e,t,r),Qn(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function hi(e,t,r){(De(e,"beforeSelectionChange")||e.cm&&De(e.cm,"beforeSelectionChange"))&&(t=ui(e,t,r)),pi(e,mi(e,t,r&&r.bias||(I(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||Jr(e.cm)}function pi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,ze(e.cm)),Ct(e,"cursorActivity",e))}function gi(e){pi(e,mi(e,e.sel,null,!1),Ca)}function mi(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=yi(e,a.anchor,l&&l.anchor,r,n),c=yi(e,a.head,l&&l.head,r,n);(i||s!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new ol(s,c))}return i?Wn(i,t.primIndex):t}function vi(e,t,r,n,i){var o=M(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker
if((null==l.from||(s.inclusiveLeft?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(s.inclusiveRight?l.to>=t.ch:l.to>t.ch))){if(i&&(Ae(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!s.atomic)continue
if(r){var c=s.find(n<0?1:-1),u=void 0
if((n<0?s.inclusiveRight:s.inclusiveLeft)&&(c=bi(e,c,-n,c&&c.line==t.line?o:null)),c&&c.line==t.line&&(u=I(c,r))&&(n<0?u<0:u>0))return vi(e,c,t,n,i)}var d=s.find(n<0?-1:1)
return(n<0?s.inclusiveLeft:s.inclusiveRight)&&(d=bi(e,d,n,d.line==t.line?o:null)),d?vi(e,d,t,n,i):null}}return t}function yi(e,t,r,n,i){var o=n||1,a=vi(e,t,r,o,i)||!i&&vi(e,t,r,o,!0)||vi(e,t,r,-o,i)||!i&&vi(e,t,r,-o,!0)
return a||(e.cantEdit=!0,P(e.first,0))}function bi(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?K(e,P(t.line-1)):null:r>0&&t.ch==(n||M(e,t.line)).text.length?t.line<e.first+e.size-1?P(t.line+1,0):null:new P(t.line,t.ch+r)}function wi(e){e.setSelection(P(e.firstLine(),0),P(e.lastLine()),Ca)}function xi(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=K(e,t)),r&&(n.to=K(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),Ae(e,"beforeChange",e,n),e.cm&&Ae(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function ki(e,t,r){if(e.cm){if(!e.cm.curOp)return dn(e.cm,ki)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(De(e,"beforeChange")||e.cm&&De(e.cm,"beforeChange"))||(t=xi(e,t,!0))){var n=Oa&&!r&&te(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)Ci(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text})
else Ci(e,t)}}function Ci(e,t){if(1!=t.text.length||""!=t.text[0]||0!=I(t.from,t.to)){var r=Pn(e,t)
Yn(e,t,r,e.cm?e.cm.curOp.id:NaN),Ti(e,t,r,J(e,t))
var n=[]
Kn(e,function(e,r){r||-1!=f(n,e.history)||(Wi(e.history,t),n.push(e.history)),Ti(e,t,null,J(e,t))})}}function Si(e,t,r){if(!e.cm||!e.cm.state.suppressEdits||r){for(var n,i=e.history,o=e.sel,a="undo"==t?i.done:i.undone,l="undo"==t?i.undone:i.done,s=0;s<a.length&&(n=a[s],r?!n.ranges||n.equals(e.sel):n.ranges);s++);if(s!=a.length){for(i.lastOrigin=i.lastSelOrigin=null;n=a.pop(),n.ranges;){if(Jn(n,l),r&&!n.equals(e.sel))return void fi(e,n,{clearRedo:!1})
o=n}var c=[]
Jn(o,l),l.push({changes:c,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
for(var u=De(e,"beforeChange")||e.cm&&De(e.cm,"beforeChange"),d=n.changes.length-1;d>=0;--d){var h=function(r){var i=n.changes[r]
if(i.origin=t,u&&!xi(e,i,!1))return a.length=0,{}
c.push($n(e,i))
var o=r?Pn(e,i):g(a)
Ti(e,i,o,ni(e,i)),!r&&e.cm&&e.cm.scrollIntoView({from:i.from,to:Dn(i)})
var l=[]
Kn(e,function(e,t){t||-1!=f(l,e.history)||(Wi(e.history,i),l.push(e.history)),Ti(e,i,null,ni(e,i))})}(d)
if(h)return h.v}}}}function Li(e,t){if(0!=t&&(e.first+=t,e.sel=new il(m(e.sel.ranges,function(e){return new ol(P(e.anchor.line+t,e.anchor.ch),P(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){pn(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)gn(e.cm,n,"gutter")}}function Ti(e,t,r,n){if(e.cm&&!e.cm.curOp)return dn(e.cm,Ti)(e,t,r,n)
if(t.to.line<e.first)return void Li(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Li(e,i),t={from:P(e.first,0),to:P(t.to.line+i,t.to.ch),text:[g(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:P(o,M(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=N(e,t.from,t.to),r||(r=Pn(e,t)),e.cm?Mi(e.cm,t,n):jn(e,t,n),hi(e,r,Ca)}}function Mi(e,t,r){var n=e.doc,i=e.display,o=t.from,a=t.to,l=!1,s=o.line
e.options.lineWrapping||(s=W(de(M(n,o.line))),n.iter(s,a.line+1,function(e){if(e==i.maxLine)return l=!0,!0})),n.sel.contains(t.from,t.to)>-1&&ze(e),jn(n,t,r,xr(e)),e.options.lineWrapping||(n.iter(s,o.line+t.text.length,function(e){var t=be(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,l=!1)}),l&&(e.curOp.updateMaxLine=!0)),n.frontier=Math.min(n.frontier,o.line),wn(e,400)
var c=t.text.length-(a.line-o.line)-1
t.full?pn(e):o.line!=a.line||1!=t.text.length||Rn(e.doc,t)?pn(e,o.line,a.line+1,c):gn(e,o.line,"text")
var u=De(e,"changes"),d=De(e,"change")
if(d||u){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&Ct(e,"change",e,f),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}function Ni(e,t,r,n,i){if(n||(n=r),I(n,r)<0){var o=n
n=r,r=o}"string"==typeof t&&(t=e.splitLines(t)),ki(e,{from:r,to:n,text:t,origin:i})}function Oi(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Ai(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var l=0;l<o.ranges.length;l++)Oi(o.ranges[l].anchor,t,r,n),Oi(o.ranges[l].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var c=o.changes[s]
if(r<c.from.line)c.from=P(c.from.line+n,c.from.ch),c.to=P(c.to.line+n,c.to.ch)
else if(t<=c.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function Wi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Ai(e.done,r,n,i),Ai(e.undone,r,n,i)}function zi(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=M(e,j(e,t)):i=W(t),null==i?null:(n(o,i)&&e.cm&&gn(e.cm,i,r),o)}function Di(e,t,r){ye(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Qr(e,null,r)}function Hi(e,t,r,n){var i=new sl(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),zi(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!me(e,t)){var n=ye(t)<e.scrollTop
A(t,t.height+Et(i)),n&&Qr(o,null,i.height),o.curOp.forceUpdate=!0}return!0}),Ct(o,"lineWidgetAdded",o,i,"number"==typeof t?t:W(t)),i}function Pi(e,t,r,n,o){if(n&&n.shared)return Ii(e,t,r,n,o)
if(e.cm&&!e.cm.curOp)return dn(e.cm,Pi)(e,t,r,n,o)
var a=new ul(e,o),l=I(t,r)
if(n&&u(n,a,!1),l>0||0==l&&!1!==a.clearWhenEmpty)return a
if(a.replacedWith&&(a.collapsed=!0,a.widgetNode=i("span",[a.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||a.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(a.widgetNode.insertLeft=!0)),a.collapsed){if(ue(e,t.line,t,r,a)||t.line!=r.line&&ue(e,r.line,t,r,a))throw new Error("Inserting collapsed marker partially overlapping an existing one")
q()}a.addToHistory&&Yn(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var s,c=t.line,d=e.cm
if(e.iter(c,r.line+1,function(e){d&&a.collapsed&&!d.options.lineWrapping&&de(e)==d.display.maxLine&&(s=!0),a.collapsed&&c!=t.line&&A(e,0),Y(e,new $(a,c==t.line?t.ch:null,c==r.line?r.ch:null)),++c}),a.collapsed&&e.iter(t.line,r.line+1,function(t){me(e,t)&&A(t,0)}),a.clearOnEnter&&Ha(a,"beforeCursorEnter",function(){return a.clear()}),a.readOnly&&(U(),(e.history.done.length||e.history.undone.length)&&e.clearHistory()),a.collapsed&&(a.id=++cl,a.atomic=!0),d){if(s&&(d.curOp.updateMaxLine=!0),a.collapsed)pn(d,t.line,r.line+1)
else if(a.className||a.title||a.startStyle||a.endStyle||a.css)for(var f=t.line;f<=r.line;f++)gn(d,f,"text")
a.atomic&&gi(d.doc),Ct(d,"markerAdded",d,a)}return a}function Ii(e,t,r,n,i){n=u(n),n.shared=!1
var o=[Pi(e,t,r,n,i)],a=o[0],l=n.widgetNode
return Kn(e,function(e){l&&(n.widgetNode=l.cloneNode(!0)),o.push(Pi(e,K(e,t),K(e,r),n,i))
for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return
a=g(o)}),new dl(o,a)}function Ei(e){return e.findMarks(P(e.first,0),e.clipPos(P(e.lastLine())),function(e){return e.parent})}function Fi(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(I(o,a)){var l=Pi(e,o,a,n.primary,n.primary.type)
n.markers.push(l),l.parent=n}}}function Bi(e){for(var t=0;t<e.length;t++)(function(t){var r=e[t],n=[r.primary.doc]
Kn(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==f(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}})(t)}function Ri(e){var t=this
if(Vi(t),!We(t,e)&&!Ft(t.display,e)){Pe(e),Zo&&(pl=+new Date)
var r=Cr(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),a=0,l=0;l<i;++l)(function(e,n){if(!t.options.allowDropFileTypes||-1!=f(t.options.allowDropFileTypes,e.type)){var l=new FileReader
l.onload=dn(t,function(){var e=l.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++a==i){r=K(t.doc,r)
var s={from:r,to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
ki(t.doc,s),di(t.doc,zn(r,Dn(s)))}}),l.readAsText(e)}})(n[l],l)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var s=e.dataTransfer.getData("Text")
if(s){var c
if(t.state.draggingText&&!t.state.draggingText.copy&&(c=t.listSelections()),hi(t.doc,zn(r,r)),c)for(var u=0;u<c.length;++u)Ni(t.doc,"",c[u].anchor,c[u].head,"drag")
t.replaceSelection(s,"around","paste"),t.display.input.focus()}}catch(e){}}}}function ji(e,t){if(Zo&&(!e.state.draggingText||+new Date-pl<100))return void Fe(t)
if(!We(e,t)&&!Ft(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!na)){var r=n("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",ra&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),ra&&r.parentNode.removeChild(r)}}function Ki(e,t){var i=Cr(e,t)
if(i){var o=document.createDocumentFragment()
Mr(e,i,o),e.display.dragCursor||(e.display.dragCursor=n("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),r(e.display.dragCursor,o)}}function Vi(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Gi(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function Ui(){gl||(qi(),gl=!0)}function qi(){var e
Ha(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Gi($i)},100))}),Ha(window,"blur",function(){return Gi(Dr)})}function $i(e){var t=e.display
t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function _i(e){var t=e.split(/-(?!$)/)
e=t[t.length-1]
for(var r,n,i,o,a=0;a<t.length-1;a++){var l=t[a]
if(/^(cmd|meta|m)$/i.test(l))o=!0
else if(/^a(lt)?$/i.test(l))r=!0
else if(/^(c|ctrl|control)$/i.test(l))n=!0
else{if(!/^s(hift)?$/i.test(l))throw new Error("Unrecognized modifier name: "+l)
i=!0}}return r&&(e="Alt-"+e),n&&(e="Ctrl-"+e),o&&(e="Cmd-"+e),i&&(e="Shift-"+e),e}function Xi(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=m(r.split(" "),_i),o=0;o<i.length;o++){var a=void 0,l=void 0
o==i.length-1?(l=i.join(" "),a=n):(l=i.slice(0,o+1).join(" "),a="...")
var s=t[l]
if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[r]}for(var c in t)e[c]=t[c]
return e}function Yi(e,t,r,n){t=Ji(t)
var i=t.call?t.call(e,n):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Yi(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var a=Yi(e,t.fallthrough[o],r,n)
if(a)return a}}}function Zi(e){var t="string"==typeof e?e:ml[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Qi(e,t){if(ra&&34==e.keyCode&&e.char)return!1
var r=ml[e.keyCode],n=r
return null!=n&&!e.altGraphKey&&(e.altKey&&"Alt"!=r&&(n="Alt-"+n),(pa?e.metaKey:e.ctrlKey)&&"Ctrl"!=r&&(n="Ctrl-"+n),(pa?e.ctrlKey:e.metaKey)&&"Cmd"!=r&&(n="Cmd-"+n),!t&&e.shiftKey&&"Shift"!=r&&(n="Shift-"+n),n)}function Ji(e){return"string"==typeof e?wl[e]:e}function eo(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&I(o.from,g(n).to)<=0;){var a=n.pop()
if(I(a.from,o.from)<0){o.from=a.from
break}}n.push(o)}un(e,function(){for(var t=n.length-1;t>=0;t--)Ni(e.doc,"",n[t].from,n[t].to,"+delete")
Jr(e)})}function to(e,t){var r=M(e.doc,t),n=de(r)
return n!=r&&(t=W(n)),Te(!0,e,n,t,1)}function ro(e,t){var r=M(e.doc,t),n=fe(r)
return n!=r&&(t=W(n)),Te(!0,e,r,t,-1)}function no(e,t){var r=to(e,t.line),n=M(e.doc,r.line),i=Ce(n,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),a=t.line==r.line&&t.ch<=o&&t.ch
return P(r.line,a?0:o,r.sticky)}return r}function io(e,t,r){if("string"==typeof t&&!(t=Cl[t]))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=ka}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function oo(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=Yi(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&Yi(t,e.options.extraKeys,r,e)||Yi(t,e.options.keyMap,r,e)}function ao(e,t,r,n){var i=e.state.keySeq
if(i){if(Zi(t))return"handled"
Sl.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=oo(e,t,n)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Ct(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(Pe(r),Or(e)),i&&!o&&/\'$/.test(t)?(Pe(r),!0):!!o}function lo(e,t){var r=Qi(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?ao(e,"Shift-"+r,t,function(t){return io(e,t,!0)})||ao(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return io(e,t)}):ao(e,r,t,function(t){return io(e,t)}))}function so(e,t,r){return ao(e,"'"+r+"'",t,function(t){return io(e,t,!0)})}function co(e){var t=this
if(t.curOp.focus=a(),!We(t,e)){Zo&&Qo<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=lo(t,e)
ra&&(Ll=n?r:null,!n&&88==r&&!Fa&&(ca?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||uo(t)}}function uo(e){function t(e){18!=e.keyCode&&e.altKey||(ma(r,"CodeMirror-crosshair"),Oe(document,"keyup",t),Oe(document,"mouseover",t))}var r=e.display.lineDiv
l(r,"CodeMirror-crosshair"),Ha(document,"keyup",t),Ha(document,"mouseover",t)}function fo(e){16==e.keyCode&&(this.doc.sel.shift=!1),We(this,e)}function ho(e){var t=this
if(!(Ft(t.display,e)||We(t,e)||e.ctrlKey&&!e.altKey||ca&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(ra&&r==Ll)return Ll=null,void Pe(e)
if(!ra||e.which&&!(e.which<10)||!lo(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(so(t,e,i)||t.display.input.onKeyPress(e))}}}function po(e){var t=this,r=t.display
if(!(We(t,e)||r.activeTouch&&r.input.supportsTouch())){if(r.input.ensurePolled(),r.shift=e.shiftKey,Ft(r,e))return void(Jo||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100)))
if(!bo(t,e)){var n=Cr(t,e)
switch(window.focus(),Re(e)){case 1:t.state.selectingText?t.state.selectingText(e):n?go(t,e,n):Be(e)==r.scroller&&Pe(e)
break
case 2:Jo&&(t.state.lastMiddleDown=+new Date),n&&ai(t.doc,n),setTimeout(function(){return r.input.focus()},20),Pe(e)
break
case 3:ga?wo(t,e):Wr(t)}}}}function go(e,t,r){Zo?setTimeout(c(Ar,e),0):e.curOp.focus=a()
var n,i=+new Date
kl&&kl.time>i-400&&0==I(kl.pos,r)?n="triple":xl&&xl.time>i-400&&0==I(xl.pos,r)?(n="double",kl={time:i,pos:r}):(n="single",xl={time:i,pos:r})
var o,l=e.doc.sel,s=ca?t.metaKey:t.ctrlKey
e.options.dragDrop&&Pa&&!e.isReadOnly()&&"single"==n&&(o=l.contains(r))>-1&&(I((o=l.ranges[o]).from(),r)<0||r.xRel>0)&&(I(o.to(),r)>0||r.xRel<0)?mo(e,t,r,s):vo(e,t,r,n,s)}function mo(e,t,r,n){var i=e.display,o=!1,a=dn(e,function(t){Jo&&(i.scroller.draggable=!1),e.state.draggingText=!1,Oe(document,"mouseup",a),Oe(document,"mousemove",l),Oe(i.scroller,"dragstart",s),Oe(i.scroller,"drop",a),o||(Pe(t),n||ai(e.doc,r),Jo||Zo&&9==Qo?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())}),l=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},s=function(){return o=!0}
Jo&&(i.scroller.draggable=!0),e.state.draggingText=a,a.copy=ca?t.altKey:t.ctrlKey,i.scroller.dragDrop&&i.scroller.dragDrop(),Ha(document,"mouseup",a),Ha(document,"mousemove",l),Ha(i.scroller,"dragstart",s),Ha(i.scroller,"drop",a),Wr(e),setTimeout(function(){return i.input.focus()},20)}function vo(e,t,r,n,i){function o(t){if(0!=I(b,t))if(b=t,"rect"==n){for(var i=[],o=e.options.tabSize,a=d(M(u,r.line).text,r.ch,o),l=d(M(u,t.line).text,t.ch,o),s=Math.min(a,l),c=Math.max(a,l),m=Math.min(r.line,t.line),v=Math.min(e.lastLine(),Math.max(r.line,t.line));m<=v;m++){var y=M(u,m).text,w=h(y,s,o)
s==c?i.push(new ol(P(m,w),P(m,w))):y.length>w&&i.push(new ol(P(m,w),P(m,h(y,c,o))))}i.length||i.push(new ol(r,r)),fi(u,Wn(g.ranges.slice(0,p).concat(i),p),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x=f,k=x.anchor,C=t
if("single"!=n){var S
S="double"==n?e.findWordAt(t):new ol(P(t.line,0),K(u,P(t.line+1,0))),I(S.anchor,k)>0?(C=S.head,k=R(x.from(),S.anchor)):(C=S.anchor,k=B(x.to(),S.head))}var L=g.ranges.slice(0)
L[p]=new ol(K(u,k),C),fi(u,Wn(L,p),Sa)}}function l(t){var r=++x,i=Cr(e,t,!0,"rect"==n)
if(i)if(0!=I(i,b)){e.curOp.focus=a(),o(i)
var s=Fr(c,u);(i.line>=s.to||i.line<s.from)&&setTimeout(dn(e,function(){x==r&&l(t)}),150)}else{var d=t.clientY<w.top?-20:t.clientY>w.bottom?20:0
d&&setTimeout(dn(e,function(){x==r&&(c.scroller.scrollTop+=d,l(t))}),50)}}function s(t){e.state.selectingText=!1,x=1/0,Pe(t),c.input.focus(),Oe(document,"mousemove",k),Oe(document,"mouseup",C),u.history.lastSelOrigin=null}var c=e.display,u=e.doc
Pe(t)
var f,p,g=u.sel,m=g.ranges
if(i&&!t.shiftKey?(p=u.sel.contains(r),f=p>-1?m[p]:new ol(r,r)):(f=u.sel.primary(),p=u.sel.primIndex),ua?t.shiftKey&&t.metaKey:t.altKey)n="rect",i||(f=new ol(r,r)),r=Cr(e,t,!0,!0),p=-1
else if("double"==n){var v=e.findWordAt(r)
f=e.display.shift||u.extend?oi(u,f,v.anchor,v.head):v}else if("triple"==n){var y=new ol(P(r.line,0),K(u,P(r.line+1,0)))
f=e.display.shift||u.extend?oi(u,f,y.anchor,y.head):y}else f=oi(u,f,r)
i?-1==p?(p=m.length,fi(u,Wn(m.concat([f]),p),{scroll:!1,origin:"*mouse"})):m.length>1&&m[p].empty()&&"single"==n&&!t.shiftKey?(fi(u,Wn(m.slice(0,p).concat(m.slice(p+1)),0),{scroll:!1,origin:"*mouse"}),g=u.sel):si(u,p,f,Sa):(p=0,fi(u,new il([f],0),Sa),g=u.sel)
var b=r,w=c.wrapper.getBoundingClientRect(),x=0,k=dn(e,function(e){Re(e)?l(e):s(e)}),C=dn(e,s)
e.state.selectingText=C,Ha(document,"mousemove",k),Ha(document,"mouseup",C)}function yo(e,t,r,n){var i,o
try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&Pe(t)
var a=e.display,l=a.lineDiv.getBoundingClientRect()
if(o>l.bottom||!De(e,r))return Ee(t)
o-=l.top-a.viewOffset
for(var s=0;s<e.options.gutters.length;++s){var c=a.gutters.childNodes[s]
if(c&&c.getBoundingClientRect().right>=i){return Ae(e,r,e,z(e.doc,o),e.options.gutters[s],t),Ee(t)}}}function bo(e,t){return yo(e,t,"gutterClick",!0)}function wo(e,t){Ft(e.display,t)||xo(e,t)||We(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function xo(e,t){return!!De(e,"gutterContextMenu")&&yo(e,t,"gutterContextMenu",!1)}function ko(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ir(e)}function Co(e){On(e),pn(e),Hr(e)}function So(e,t,r){if(!t!=!(r&&r!=Tl)){var n=e.display.dragFunctions,i=t?Ha:Oe
i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function Lo(e){e.options.lineWrapping?(l(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(ma(e.display.wrapper,"CodeMirror-wrap"),we(e)),kr(e),pn(e),ir(e),setTimeout(function(){return Ur(e)},100)}function To(e,t){var r=this
if(!(this instanceof To))return new To(e,t)
this.options=t=t?u(t):{},u(Ml,t,!1),An(t)
var n=t.value
"string"==typeof n&&(n=new hl(n,t.mode,null,t.lineSeparator,t.direction)),this.doc=n
var i=new To.inputStyles[t.inputStyle](this),o=this.display=new T(e,n,i)
o.wrapper.CodeMirror=this,On(this),ko(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),$r(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new ya,keySeq:null,specialChars:null},t.autofocus&&!sa&&o.input.focus(),Zo&&Qo<11&&setTimeout(function(){return r.display.input.reset(!0)},20),Mo(this),Ui(),tn(this),this.curOp.forceUpdate=!0,Vn(this,n),t.autofocus&&!sa||this.hasFocus()?setTimeout(c(zr,this),20):Dr(this)
for(var a in Nl)Nl.hasOwnProperty(a)&&Nl[a](r,t[a],Tl)
Pr(this),t.finishInit&&t.finishInit(this)
for(var l=0;l<Ol.length;++l)Ol[l](r)
rn(this),Jo&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}function Mo(e){function t(){i.activeTouch&&(o=setTimeout(function(){return i.activeTouch=null},1e3),a=i.activeTouch,a.end=+new Date)}function r(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}var i=e.display
Ha(i.scroller,"mousedown",dn(e,po)),Zo&&Qo<11?Ha(i.scroller,"dblclick",dn(e,function(t){if(!We(e,t)){var r=Cr(e,t)
if(r&&!bo(e,t)&&!Ft(e.display,t)){Pe(t)
var n=e.findWordAt(r)
ai(e.doc,n.anchor,n.head)}}})):Ha(i.scroller,"dblclick",function(t){return We(e,t)||Pe(t)}),ga||Ha(i.scroller,"contextmenu",function(t){return wo(e,t)})
var o,a={end:0}
Ha(i.scroller,"touchstart",function(t){if(!We(e,t)&&!r(t)){i.input.ensurePolled(),clearTimeout(o)
var n=+new Date
i.activeTouch={start:n,moved:!1,prev:n-a.end<=300?a:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),Ha(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Ha(i.scroller,"touchend",function(r){var o=i.activeTouch
if(o&&!Ft(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var a,l=e.coordsChar(i.activeTouch,"page")
a=!o.prev||n(o,o.prev)?new ol(l,l):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(l):new ol(P(l.line,0),K(e.doc,P(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),Pe(r)}t()}),Ha(i.scroller,"touchcancel",t),Ha(i.scroller,"scroll",function(){i.scroller.clientHeight&&(Br(e,i.scroller.scrollTop),Rr(e,i.scroller.scrollLeft,!0),Ae(e,"scroll",e))}),Ha(i.scroller,"mousewheel",function(t){return Vr(e,t)}),Ha(i.scroller,"DOMMouseScroll",function(t){return Vr(e,t)}),Ha(i.wrapper,"scroll",function(){return i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){We(e,t)||Fe(t)},over:function(t){We(e,t)||(Ki(e,t),Fe(t))},start:function(t){return ji(e,t)},drop:dn(e,Ri),leave:function(t){We(e,t)||Vi(e)}}
var l=i.input.getField()
Ha(l,"keyup",function(t){return fo.call(e,t)}),Ha(l,"keydown",dn(e,co)),Ha(l,"keypress",dn(e,ho)),Ha(l,"focus",function(t){return zr(e,t)}),Ha(l,"blur",function(t){return Dr(e,t)})}function No(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=et(e,t):r="prev")
var a=e.options.tabSize,l=M(o,t),s=d(l.text,null,a)
l.stateAfter&&(l.stateAfter=null)
var c,u=l.text.match(/^\s*/)[0]
if(n||/\S/.test(l.text)){if("smart"==r&&((c=o.mode.indent(i,l.text.slice(u.length),l.text))==ka||c>150)){if(!n)return
r="prev"}}else c=0,r="not"
"prev"==r?c=t>o.first?d(M(o,t-1).text,null,a):0:"add"==r?c=s+e.options.indentUnit:"subtract"==r?c=s-e.options.indentUnit:"number"==typeof r&&(c=s+r),c=Math.max(0,c)
var f="",h=0
if(e.options.indentWithTabs)for(var g=Math.floor(c/a);g;--g)h+=a,f+="\t"
if(h<c&&(f+=p(c-h)),f!=u)return Ni(o,f,P(t,0),P(t,u.length),"+input"),l.stateAfter=null,!0
for(var m=0;m<o.sel.ranges.length;m++){var v=o.sel.ranges[m]
if(v.head.line==t&&v.head.ch<u.length){var y=P(t,u.length)
si(o,m,new ol(y,y))
break}}}function Oo(e){Al=e}function Ao(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var a=e.state.pasteIncoming||"paste"==i,l=Ia(t),s=null
if(a&&n.ranges.length>1)if(Al&&Al.text.join("\n")==t){if(n.ranges.length%Al.text.length==0){s=[]
for(var c=0;c<Al.text.length;c++)s.push(o.splitLines(Al.text[c]))}}else l.length==n.ranges.length&&(s=m(l,function(e){return[e]}))
for(var u,d=n.ranges.length-1;d>=0;d--){var f=n.ranges[d],h=f.from(),p=f.to()
f.empty()&&(r&&r>0?h=P(h.line,h.ch-r):e.state.overwrite&&!a?p=P(p.line,Math.min(M(o,p.line).text.length,p.ch+g(l).length)):Al&&Al.lineWise&&Al.text.join("\n")==t&&(h=p=P(h.line,0))),u=e.curOp.updateInput
var v={from:h,to:p,text:s?s[d%s.length]:l,origin:i||(a?"paste":e.state.cutIncoming?"cut":"+input")}
ki(e.doc,v),Ct(e,"inputRead",e,v)}t&&!a&&zo(e,t),Jr(e),e.curOp.updateInput=u,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function Wo(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||un(t,function(){return Ao(t,r,0,null,"paste")}),!0}function zo(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=No(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(M(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=No(e,i.head.line,"smart"))
a&&Ct(e,"electricInput",e,i.head.line)}}}function Do(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:P(i,0),head:P(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Ho(e,t){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck",!!t)}function Po(){var e=n("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=n("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return Jo?e.style.width="1000px":e.setAttribute("wrap","off"),aa&&(e.style.border="1px solid black"),Ho(e),t}function Io(e,t,r,n,i){function o(){var n=t.line+r
return!(n<e.first||n>=e.first+e.size)&&(t=new P(n,t.ch,t.sticky),c=M(e,n))}function a(n){var a
if(null==(a=i?Me(e.cm,c,t,r):Le(c,t,r))){if(n||!o())return!1
t=Te(i,e.cm,c,t.line,r)}else t=a
return!0}var l=t,s=r,c=M(e,t.line)
if("char"==n)a()
else if("column"==n)a(!0)
else if("word"==n||"group"==n)for(var u=null,d="group"==n,f=e.cm&&e.cm.getHelper(t,"wordChars"),h=!0;!(r<0)||a(!h);h=!1){var p=c.text.charAt(t.ch)||"\n",g=x(p,f)?"w":d&&"\n"==p?"n":!d||/\s/.test(p)?null:"p"
if(!d||h||g||(g="s"),u&&u!=g){r<0&&(r=1,a(),t.sticky="after")
break}if(g&&(u=g),r>0&&!a(!h))break}var m=yi(e,t,l,s,!0)
return E(l,m)&&(m.hitSide=!0),m}function Eo(e,t,r,n){var i,o=e.doc,a=t.left
if("page"==n){var l=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),s=Math.max(l-.5*vr(e.display),3)
i=(r>0?t.bottom:t.top)+r*s}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(var c;c=hr(e,a,i),c.outside;){if(r<0?i<=0:i>=o.height){c.hitSide=!0
break}i+=5*r}return c}function Fo(e,t){var r=Xt(e,t.line)
if(!r||r.hidden)return null
var n=M(e.doc,t.line),i=qt(r,n,t.line),o=Ce(n,e.doc.direction),a="left"
if(o){a=ke(o,t.ch)%2?"right":"left"}var l=Qt(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function Bo(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}function Ro(e,t){return t&&(e.bad=!0),e}function jo(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function a(){u&&(c+=d,u=!1)}function l(e){e&&(a(),c+=e)}function s(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(null!=r)return void l(r||t.textContent.replace(/\u200b/g,""))
var c,f=t.getAttribute("cm-marker")
if(f){var h=e.findMarks(P(n,0),P(i+1,0),o(+f))
return void(h.length&&(c=h[0].find())&&l(N(e.doc,c.from,c.to).join(d)))}if("false"==t.getAttribute("contenteditable"))return
var p=/^(pre|div|p)$/i.test(t.nodeName)
p&&a()
for(var g=0;g<t.childNodes.length;g++)s(t.childNodes[g])
p&&(u=!0)}else 3==t.nodeType&&l(t.nodeValue)}for(var c="",u=!1,d=e.doc.lineSeparator();s(t),t!=r;)t=t.nextSibling
return c}function Ko(e,t,r){var n
if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Ro(e.clipPos(P(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return Vo(o,t,r)}}function Vo(e,t,r){function n(t,r,n){for(var i=-1;i<(d?d.length:0);i++)for(var o=i<0?u.map:d[i],a=0;a<o.length;a+=3){var l=o[a+2]
if(l==t||l==r){var s=W(i<0?e.line:e.rest[i]),c=o[a]+n
return(n<0||l!=t)&&(c=o[a+(n?1:0)]),P(s,c)}}}var i=e.text.firstChild,a=!1
if(!t||!o(i,t))return Ro(P(W(e.line),0),!0)
if(t==i&&(a=!0,t=i.childNodes[r],r=0,!t)){var l=e.rest?g(e.rest):e.line
return Ro(P(W(l),l.text.length),a)}var s=3==t.nodeType?t:null,c=t
for(s||1!=t.childNodes.length||3!=t.firstChild.nodeType||(s=t.firstChild,r&&(r=s.nodeValue.length));c.parentNode!=i;)c=c.parentNode
var u=e.measure,d=u.maps,f=n(s,c,r)
if(f)return Ro(f,a)
for(var h=c.nextSibling,p=s?s.nodeValue.length-r:0;h;h=h.nextSibling){if(f=n(h,h.firstChild,0))return Ro(P(f.line,f.ch-p),a)
p+=h.textContent.length}for(var m=c.previousSibling,v=r;m;m=m.previousSibling){if(f=n(m,m.firstChild,-1))return Ro(P(f.line,f.ch+v),a)
v+=m.textContent.length}}function Go(e,t){function r(){e.value=s.getValue()}if(t=t?u(t):{},t.value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=a()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}var i
if(e.form&&(Ha(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var l=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=l}}catch(e){}}t.finishInit=function(t){t.save=r,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,r(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Oe(e.form,"submit",r),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var s=To(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return s}var Uo=navigator.userAgent,qo=navigator.platform,$o=/gecko\/\d/i.test(Uo),_o=/MSIE \d/.test(Uo),Xo=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Uo),Yo=/Edge\/(\d+)/.exec(Uo),Zo=_o||Xo||Yo,Qo=Zo&&(_o?document.documentMode||6:+(Yo||Xo)[1]),Jo=!Yo&&/WebKit\//.test(Uo),ea=Jo&&/Qt\/\d+\.\d+/.test(Uo),ta=!Yo&&/Chrome\//.test(Uo),ra=/Opera\//.test(Uo),na=/Apple Computer/.test(navigator.vendor),ia=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Uo),oa=/PhantomJS/.test(Uo),aa=!Yo&&/AppleWebKit/.test(Uo)&&/Mobile\/\w+/.test(Uo),la=/Android/.test(Uo),sa=aa||la||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Uo),ca=aa||/Mac/.test(qo),ua=/\bCrOS\b/.test(Uo),da=/win/i.test(qo),fa=ra&&Uo.match(/Version\/(\d*\.\d*)/)
fa&&(fa=Number(fa[1])),fa&&fa>=15&&(ra=!1,Jo=!0)
var ha,pa=ca&&(ea||ra&&(null==fa||fa<12.11)),ga=$o||Zo&&Qo>=9,ma=function(t,r){var n=t.className,i=e(r).exec(n)
if(i){var o=n.slice(i.index+i[0].length)
t.className=n.slice(0,i.index)+(o?i[1]+o:"")}}
ha=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var va=function(e){e.select()}
aa?va=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:Zo&&(va=function(e){try{e.select()}catch(e){}})
var ya=function(){this.id=null}
ya.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var ba,wa,xa=30,ka={toString:function(){return"CodeMirror.Pass"}},Ca={scroll:!1},Sa={origin:"*mouse"},La={origin:"+move"},Ta=[""],Ma=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Na=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,Oa=!1,Aa=!1,Wa=null,za=function(){function e(e){return e<=247?r.charAt(e):1424<=e&&e<=1524?"R":1536<=e&&e<=1785?n.charAt(e-1536):1774<=e&&e<=2220?"r":8192<=e&&e<=8203?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,a=/[LRr]/,l=/[Lb1n]/,s=/[1n]/
return function(r,n){var c="ltr"==n?"L":"R"
if(0==r.length||"ltr"==n&&!i.test(r))return!1
for(var u=r.length,d=[],f=0;f<u;++f)d.push(e(r.charCodeAt(f)))
for(var h=0,p=c;h<u;++h){var m=d[h]
"m"==m?d[h]=p:p=m}for(var v=0,y=c;v<u;++v){var b=d[v]
"1"==b&&"r"==y?d[v]="n":a.test(b)&&(y=b,"r"==b&&(d[v]="R"))}for(var w=1,x=d[0];w<u-1;++w){var k=d[w]
"+"==k&&"1"==x&&"1"==d[w+1]?d[w]="1":","!=k||x!=d[w+1]||"1"!=x&&"n"!=x||(d[w]=x),x=k}for(var C=0;C<u;++C){var S=d[C]
if(","==S)d[C]="N"
else if("%"==S){var L=void 0
for(L=C+1;L<u&&"%"==d[L];++L);for(var T=C&&"!"==d[C-1]||L<u&&"1"==d[L]?"1":"N",M=C;M<L;++M)d[M]=T
C=L-1}}for(var N=0,O=c;N<u;++N){var A=d[N]
"L"==O&&"1"==A?d[N]="L":a.test(A)&&(O=A)}for(var W=0;W<u;++W)if(o.test(d[W])){var z=void 0
for(z=W+1;z<u&&o.test(d[z]);++z);for(var D="L"==(W?d[W-1]:c),H="L"==(z<u?d[z]:c),P=D==H?D?"L":"R":c,I=W;I<z;++I)d[I]=P
W=z-1}for(var E,F=[],B=0;B<u;)if(l.test(d[B])){var R=B
for(++B;B<u&&l.test(d[B]);++B);F.push(new t(0,R,B))}else{var j=B,K=F.length
for(++B;B<u&&"L"!=d[B];++B);for(var V=j;V<B;)if(s.test(d[V])){j<V&&F.splice(K,0,new t(1,j,V))
var G=V
for(++V;V<B&&s.test(d[V]);++V);F.splice(K,0,new t(2,G,V)),j=V}else++V
j<B&&F.splice(K,0,new t(1,j,B))}return 1==F[0].level&&(E=r.match(/^\s+/))&&(F[0].from=E[0].length,F.unshift(new t(0,0,E[0].length))),1==g(F).level&&(E=r.match(/\s+$/))&&(g(F).to-=E[0].length,F.push(new t(0,u-E[0].length,u))),"rtl"==n?F.reverse():F}}(),Da=[],Ha=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||Da).concat(r)}},Pa=function(){if(Zo&&Qo<9)return!1
var e=n("div")
return"draggable"in e||"dragDrop"in e}(),Ia=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(r.push(o.slice(0,a)),t+=a+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Ea=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Fa=function(){var e=n("div")
return"oncopy"in e||(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),Ba=null,Ra={},ja={},Ka={},Va=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
Va.prototype.eol=function(){return this.pos>=this.string.length},Va.prototype.sol=function(){return this.pos==this.lineStart},Va.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Va.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Va.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Va.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Va.prototype.eatSpace=function(){for(var e=this,t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++e.pos
return this.pos>t},Va.prototype.skipToEnd=function(){this.pos=this.string.length},Va.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},Va.prototype.backUp=function(e){this.pos-=e},Va.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=d(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},Va.prototype.indentation=function(){return d(this.string,null,this.tabSize)-(this.lineStart?d(this.string,this.lineStart,this.tabSize):0)},Va.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Va.prototype.current=function(){return this.string.slice(this.start,this.pos)},Va.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}
var Ga=function(e,t,r){this.text=e,ne(this,t),this.height=r?r(this):1}
Ga.prototype.lineNo=function(){return W(this)},He(Ga)
var Ua,qa={},$a={},_a=null,Xa=null,Ya={left:0,right:0,top:0,bottom:0},Za=0,Qa=null
Zo?Qa=-.53:$o?Qa=15:ta?Qa=-.7:na&&(Qa=-1/3)
var Ja=function(e,t,r){this.cm=r
var i=this.vert=n("div",[n("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),o=this.horiz=n("div",[n("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(i),e(o),Ha(i,"scroll",function(){i.clientHeight&&t(i.scrollTop,"vertical")}),Ha(o,"scroll",function(){o.clientWidth&&t(o.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,Zo&&Qo<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Ja.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},Ja.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Ja.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Ja.prototype.zeroWidthHack=function(){var e=ca&&!ia?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new ya,this.disableVert=new ya},Ja.prototype.enableZeroWidthBar=function(e,t,r){function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,n)}e.style.pointerEvents="auto",t.set(1e3,n)},Ja.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var el=function(){}
el.prototype.update=function(){return{bottom:0,right:0}},el.prototype.setScrollLeft=function(){},el.prototype.setScrollTop=function(){},el.prototype.clear=function(){}
var tl={native:Ja,null:el},rl=0,nl=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Fr(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Vt(e),this.force=r,this.dims=br(e),this.events=[]}
nl.prototype.signal=function(e,t){De(e,t)&&this.events.push(arguments)},nl.prototype.finish=function(){for(var e=this,t=0;t<this.events.length;t++)Ae.apply(null,e.events[t])}
var il=function(e,t){this.ranges=e,this.primIndex=t}
il.prototype.primary=function(){return this.ranges[this.primIndex]},il.prototype.equals=function(e){var t=this
if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var r=0;r<this.ranges.length;r++){var n=t.ranges[r],i=e.ranges[r]
if(!E(n.anchor,i.anchor)||!E(n.head,i.head))return!1}return!0},il.prototype.deepCopy=function(){for(var e=this,t=[],r=0;r<this.ranges.length;r++)t[r]=new ol(F(e.ranges[r].anchor),F(e.ranges[r].head))
return new il(t,this.primIndex)},il.prototype.somethingSelected=function(){for(var e=this,t=0;t<this.ranges.length;t++)if(!e.ranges[t].empty())return!0
return!1},il.prototype.contains=function(e,t){var r=this
t||(t=e)
for(var n=0;n<this.ranges.length;n++){var i=r.ranges[n]
if(I(t,i.from())>=0&&I(e,i.to())<=0)return n}return-1}
var ol=function(e,t){this.anchor=e,this.head=t}
ol.prototype.from=function(){return R(this.anchor,this.head)},ol.prototype.to=function(){return B(this.anchor,this.head)},ol.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}
var al=function(e){var t=this
this.lines=e,this.parent=null
for(var r=0,n=0;n<e.length;++n)e[n].parent=t,r+=e[n].height
this.height=r}
al.prototype.chunkSize=function(){return this.lines.length},al.prototype.removeInner=function(e,t){for(var r=this,n=e,i=e+t;n<i;++n){var o=r.lines[n]
r.height-=o.height,ct(o),Ct(o,"delete")}this.lines.splice(e,t)},al.prototype.collapse=function(e){e.push.apply(e,this.lines)},al.prototype.insertInner=function(e,t,r){var n=this
this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var i=0;i<t.length;++i)t[i].parent=n},al.prototype.iterN=function(e,t,r){for(var n=this,i=e+t;e<i;++e)if(r(n.lines[e]))return!0}
var ll=function(e){var t=this
this.children=e
for(var r=0,n=0,i=0;i<e.length;++i){var o=e[i]
r+=o.chunkSize(),n+=o.height,o.parent=t}this.size=r,this.height=n,this.parent=null}
ll.prototype.chunkSize=function(){return this.size},ll.prototype.removeInner=function(e,t){var r=this
this.size-=t
for(var n=0;n<this.children.length;++n){var i=r.children[n],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e),l=i.height
if(i.removeInner(e,a),r.height-=l-i.height,o==a&&(r.children.splice(n--,1),i.parent=null),0==(t-=a))break
e=0}else e-=o}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof al))){var s=[]
this.collapse(s),this.children=[new al(s)],this.children[0].parent=this}},ll.prototype.collapse=function(e){for(var t=this,r=0;r<this.children.length;++r)t.children[r].collapse(e)},ll.prototype.insertInner=function(e,t,r){var n=this
this.size+=t.length,this.height+=r
for(var i=0;i<this.children.length;++i){var o=n.children[i],a=o.chunkSize()
if(e<=a){if(o.insertInner(e,t,r),o.lines&&o.lines.length>50){for(var l=o.lines.length%25+25,s=l;s<o.lines.length;){var c=new al(o.lines.slice(s,s+=25))
o.height-=c.height,n.children.splice(++i,0,c),c.parent=n}o.lines=o.lines.slice(0,l),n.maybeSpill()}break}e-=a}},ll.prototype.maybeSpill=function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),r=new ll(t)
if(e.parent){e.size-=r.size,e.height-=r.height
var n=f(e.parent.children,e)
e.parent.children.splice(n+1,0,r)}else{var i=new ll(e.children)
i.parent=e,e.children=[i,r],e=i}r.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},ll.prototype.iterN=function(e,t,r){for(var n=this,i=0;i<this.children.length;++i){var o=n.children[i],a=o.chunkSize()
if(e<a){var l=Math.min(t,a-e)
if(o.iterN(e,l,r))return!0
if(0==(t-=l))break
e=0}else e-=a}}
var sl=function(e,t,r){var n=this
if(r)for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
this.doc=e,this.node=t}
sl.prototype.clear=function(){var e=this,t=this.doc.cm,r=this.line.widgets,n=this.line,i=W(n)
if(null!=i&&r){for(var o=0;o<r.length;++o)r[o]==e&&r.splice(o--,1)
r.length||(n.widgets=null)
var a=Et(this)
A(n,Math.max(0,n.height-a)),t&&(un(t,function(){Di(t,n,-a),gn(t,i,"widget")}),Ct(t,"lineWidgetCleared",t,this,i))}},sl.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=Et(this)-t
i&&(A(n,n.height+i),r&&un(r,function(){r.curOp.forceUpdate=!0,Di(r,n,i),Ct(r,"lineWidgetChanged",r,e,W(n))}))},He(sl)
var cl=0,ul=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++cl}
ul.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){var t=this.doc.cm,r=t&&!t.curOp
if(r&&tn(t),De(this,"clear")){var n=this.find()
n&&Ct(this,"clear",n.from,n.to)}for(var i=null,o=null,a=0;a<this.lines.length;++a){var l=e.lines[a],s=_(l.markedSpans,e)
t&&!e.collapsed?gn(t,W(l),"text"):t&&(null!=s.to&&(o=W(l)),null!=s.from&&(i=W(l))),l.markedSpans=X(l.markedSpans,s),null==s.from&&e.collapsed&&!me(e.doc,l)&&t&&A(l,vr(t.display))}if(t&&this.collapsed&&!t.options.lineWrapping)for(var c=0;c<this.lines.length;++c){var u=de(e.lines[c]),d=be(u)
d>t.display.maxLineLength&&(t.display.maxLine=u,t.display.maxLineLength=d,t.display.maxLineChanged=!0)}null!=i&&t&&this.collapsed&&pn(t,i,o+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,t&&gi(t.doc)),t&&Ct(t,"markerCleared",t,this,i,o),r&&rn(t),this.parent&&this.parent.clear()}},ul.prototype.find=function(e,t){var r=this
null==e&&"bookmark"==this.type&&(e=1)
for(var n,i,o=0;o<this.lines.length;++o){var a=r.lines[o],l=_(a.markedSpans,r)
if(null!=l.from&&(n=P(t?a:W(a),l.from),-1==e))return n
if(null!=l.to&&(i=P(t?a:W(a),l.to),1==e))return i}return n&&{from:n,to:i}},ul.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&un(n,function(){var i=t.line,o=W(t.line),a=Xt(n,o)
if(a&&(rr(a),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!me(r.doc,i)&&null!=r.height){var l=r.height
r.height=null
var s=Et(r)-l
s&&A(i,i.height+s)}Ct(n,"markerChanged",n,e)})},ul.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=f(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},ul.prototype.detachLine=function(e){if(this.lines.splice(f(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},He(ul)
var dl=function(e,t){var r=this
this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=r}
dl.prototype.clear=function(){var e=this
if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var t=0;t<this.markers.length;++t)e.markers[t].clear()
Ct(this,"clear")}},dl.prototype.find=function(e,t){return this.primary.find(e,t)},He(dl)
var fl=0,hl=function(e,t,r,n,i){if(!(this instanceof hl))return new hl(e,t,r,n,i)
null==r&&(r=0),ll.call(this,[new al([new Ga("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r
var o=P(r,0)
this.sel=zn(o),this.history=new qn(null),this.id=++fl,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),jn(this,{from:o,to:o,text:e}),fi(this,zn(o),Ca)}
hl.prototype=b(ll.prototype,{constructor:hl,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=O(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:hn(function(e){var t=P(this.first,0),r=this.first+this.size-1
ki(this,{from:t,to:P(r,M(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&this.cm.scrollTo(0,0),fi(this,zn(t),Ca)}),replaceRange:function(e,t,r,n){t=K(this,t),r=r?K(this,r):t,Ni(this,e,t,r,n)},getRange:function(e,t,r){var n=N(this,K(this,e),K(this,t))
return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(D(this,e))return M(this,e)},getLineNumber:function(e){return W(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=M(this,e)),de(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return K(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:hn(function(e,t,r){ci(this,K(this,"number"==typeof e?P(e,t||0):e),null,r)}),setSelection:hn(function(e,t,r){ci(this,K(this,e),K(this,t||e),r)}),extendSelection:hn(function(e,t,r){ai(this,K(this,e),t&&K(this,t),r)}),extendSelections:hn(function(e,t){li(this,G(this,e),t)}),extendSelectionsBy:hn(function(e,t){li(this,G(this,m(this.sel.ranges,e)),t)}),setSelections:hn(function(e,t,r){var n=this
if(e.length){for(var i=[],o=0;o<e.length;o++)i[o]=new ol(K(n,e[o].anchor),K(n,e[o].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),fi(this,Wn(i,t),r)}}),addSelection:hn(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new ol(K(this,e),K(this,t||e))),fi(this,Wn(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this,n=this.sel.ranges,i=0;i<n.length;i++){var o=N(r,n[i].from(),n[i].to())
t=t?t.concat(o):o}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=this,r=[],n=this.sel.ranges,i=0;i<n.length;i++){var o=N(t,n[i].from(),n[i].to())
!1!==e&&(o=o.join(e||t.lineSeparator())),r[i]=o}return r},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:hn(function(e,t,r){for(var n=this,i=[],o=this.sel,a=0;a<o.ranges.length;a++){var l=o.ranges[a]
i[a]={from:l.from(),to:l.to(),text:n.splitLines(e[a]),origin:r}}for(var s=t&&"end"!=t&&En(this,i,t),c=i.length-1;c>=0;c--)ki(n,i[c])
s?di(this,s):this.cm&&Jr(this.cm)}),undo:hn(function(){Si(this,"undo")}),redo:hn(function(){Si(this,"redo")}),undoSelection:hn(function(){Si(this,"undo",!0)}),redoSelection:hn(function(){Si(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new qn(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:ii(this.history.done),undone:ii(this.history.undone)}},setHistory:function(e){var t=this.history=new qn(this.history.maxGeneration)
t.done=ii(e.done.slice(0),null,!0),t.undone=ii(e.undone.slice(0),null,!0)},setGutterMarker:hn(function(e,t,r){return zi(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&k(n)&&(e.gutterMarkers=null),!0})}),clearGutter:hn(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&zi(t,r,"gutter",function(){return r.gutterMarkers[e]=null,k(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!D(this,e))return null
if(t=e,!(e=M(this,e)))return null}else if(null==(t=W(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:hn(function(t,r,n){return zi(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass"
if(t[i]){if(e(n).test(t[i]))return!1
t[i]+=" "+n}else t[i]=n
return!0})}),removeLineClass:hn(function(t,r,n){return zi(this,t,"gutter"==r?"gutter":"class",function(t){var i="text"==r?"textClass":"background"==r?"bgClass":"gutter"==r?"gutterClass":"wrapClass",o=t[i]
if(!o)return!1
if(null==n)t[i]=null
else{var a=o.match(e(n))
if(!a)return!1
var l=a.index+a[0].length
t[i]=o.slice(0,a.index)+(a.index&&l!=o.length?" ":"")+o.slice(l)||null}return!0})}),addLineWidget:hn(function(e,t,r){return Hi(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return Pi(this,K(this,e),K(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=K(this,e),Pi(this,e,e,r,"bookmark")},findMarksAt:function(e){e=K(this,e)
var t=[],r=M(this,e.line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=K(this,e),t=K(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var l=0;l<a.length;l++){var s=a[l]
null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||r&&!r(s.marker)||n.push(s.marker.parent||s.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
if(o>e)return t=e,!0
e-=o,++r}),K(this,P(r,t))},indexFromPos:function(e){e=K(this,e)
var t=e.ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new hl(O(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new hl(O(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Fi(n,Ei(this)),n},unlinkDoc:function(e){var t=this
if(e instanceof To&&(e=e.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=t.linked[r]
if(n.doc==e){t.linked.splice(r,1),e.unlinkDoc(t),Bi(Ei(t))
break}}if(e.history==this.history){var i=[e.id]
Kn(e,function(e){return i.push(e.id)},!0),e.history=new qn(null),e.history.done=ii(this.history.done,i),e.history.undone=ii(this.history.undone,i)}},iterLinkedDocs:function(e){Kn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):Ia(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:hn(function(e){"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&Un(this.cm))})}),hl.prototype.eachLine=hl.prototype.iter
for(var pl=0,gl=!1,ml={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},vl=0;vl<10;vl++)ml[vl+48]=ml[vl+96]=String(vl)
for(var yl=65;yl<=90;yl++)ml[yl]=String.fromCharCode(yl)
for(var bl=1;bl<=12;bl++)ml[bl+111]=ml[bl+63235]="F"+bl
var wl={}
wl.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},wl.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},wl.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},wl.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},wl.default=ca?wl.macDefault:wl.pcDefault
var xl,kl,Cl={selectAll:wi,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Ca)},killLine:function(e){return eo(e,function(t){if(t.empty()){var r=M(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:P(t.head.line+1,0)}:{from:t.head,to:P(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return eo(e,function(t){return{from:P(t.from().line,0),to:K(e.doc,P(t.to().line+1,0))}})},delLineLeft:function(e){return eo(e,function(e){return{from:P(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return eo(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return eo(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(P(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(P(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return to(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return no(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return ro(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},La)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},La)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?no(e,t.head):n},La)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),a=d(e.getLine(o.line),o.ch,n)
t.push(p(n-a%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return un(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=M(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new P(i.line,i.ch-1)),i.ch>0)i=new P(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),P(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=M(e.doc,i.line-1).text
a&&(i=new P(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),P(i.line-1,a.length-1),i,"+transpose"))}r.push(new ol(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return un(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
Jr(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}},Sl=new ya,Ll=null,Tl={toString:function(){return"CodeMirror.Init"}},Ml={},Nl={}
To.defaults=Ml,To.optionHandlers=Nl
var Ol=[]
To.defineInitHook=function(e){return Ol.push(e)}
var Al=null,Wl=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new ya,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
Wl.prototype.init=function(e){function t(e){if(!We(i,e)){if(i.somethingSelected())Oo({lineWise:!1,text:i.getSelections()}),"cut"==e.type&&i.replaceSelection("",null,"cut")
else{if(!i.options.lineWiseCopyCut)return
var t=Do(i)
Oo({lineWise:!0,text:t.text}),"cut"==e.type&&i.operation(function(){i.setSelections(t.ranges,0,Ca),i.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var r=Al.text.join("\n")
if(e.clipboardData.setData("Text",r),e.clipboardData.getData("Text")==r)return void e.preventDefault()}var a=Po(),l=a.firstChild
i.display.lineSpace.insertBefore(a,i.display.lineSpace.firstChild),l.value=Al.text.join("\n")
var s=document.activeElement
va(l),setTimeout(function(){i.display.lineSpace.removeChild(a),s.focus(),s==o&&n.showPrimarySelection()},50)}}var r=this,n=this,i=n.cm,o=n.div=e.lineDiv
Ho(o,i.options.spellcheck),Ha(o,"paste",function(e){We(i,e)||Wo(e,i)||Qo<=11&&setTimeout(dn(i,function(){return r.updateFromDOM()}),20)}),Ha(o,"compositionstart",function(e){r.composing={data:e.data,done:!1}}),Ha(o,"compositionupdate",function(e){r.composing||(r.composing={data:e.data,done:!1})}),Ha(o,"compositionend",function(e){r.composing&&(e.data!=r.composing.data&&r.readFromDOMSoon(),r.composing.done=!0)}),Ha(o,"touchstart",function(){return n.forceCompositionEnd()}),Ha(o,"input",function(){r.composing||r.readFromDOMSoon()}),Ha(o,"copy",t),Ha(o,"cut",t)},Wl.prototype.prepareSelection=function(){var e=Tr(this.cm,!1)
return e.focus=this.cm.state.focused,e},Wl.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Wl.prototype.showPrimarySelection=function(){var e=window.getSelection(),t=this.cm,r=t.doc.sel.primary(),n=r.from(),i=r.to()
if(t.display.viewTo==t.display.viewFrom||n.line>=t.display.viewTo||i.line<t.display.viewFrom)return void e.removeAllRanges()
var o=Ko(t,e.anchorNode,e.anchorOffset),a=Ko(t,e.focusNode,e.focusOffset)
if(!o||o.bad||!a||a.bad||0!=I(R(o,a),n)||0!=I(B(o,a),i)){var l=t.display.view,s=n.line>=t.display.viewFrom&&Fo(t,n)||{node:l[0].measure.map[2],offset:0},c=i.line<t.display.viewTo&&Fo(t,i)
if(!c){var u=l[l.length-1].measure,d=u.maps?u.maps[u.maps.length-1]:u.map
c={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}}if(!s||!c)return void e.removeAllRanges()
var f,h=e.rangeCount&&e.getRangeAt(0)
try{f=ha(s.node,s.offset,c.offset,c.node)}catch(e){}f&&(!$o&&t.state.focused?(e.collapse(s.node,s.offset),f.collapsed||(e.removeAllRanges(),e.addRange(f))):(e.removeAllRanges(),e.addRange(f)),h&&null==e.anchorNode?e.addRange(h):$o&&this.startGracePeriod()),this.rememberSelection()}},Wl.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Wl.prototype.showMultipleSelections=function(e){r(this.cm.display.cursorDiv,e.cursors),r(this.cm.display.selectionDiv,e.selection)},Wl.prototype.rememberSelection=function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Wl.prototype.selectionInEditor=function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return o(this.div,t)},Wl.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Wl.prototype.blur=function(){this.div.blur()},Wl.prototype.getField=function(){return this.div},Wl.prototype.supportsTouch=function(){return!0},Wl.prototype.receivedFocus=function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():un(this.cm,function(){return t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},Wl.prototype.selectionChanged=function(){var e=window.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Wl.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm
if(la&&ta&&this.cm.options.gutters.length&&Bo(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var r=Ko(t,e.anchorNode,e.anchorOffset),n=Ko(t,e.focusNode,e.focusOffset)
r&&n&&un(t,function(){fi(t.doc,zn(r,n),Ca),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Wl.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to()
if(0==n.ch&&n.line>e.firstLine()&&(n=P(n.line-1,M(e.doc,n.line-1).length)),i.ch==M(e.doc,i.line).text.length&&i.line<e.lastLine()&&(i=P(i.line+1,0)),n.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o,a,l
n.line==t.viewFrom||0==(o=Sr(e,n.line))?(a=W(t.view[0].line),l=t.view[0].node):(a=W(t.view[o].line),l=t.view[o-1].node.nextSibling)
var s,c,u=Sr(e,i.line)
if(u==t.view.length-1?(s=t.viewTo-1,c=t.lineDiv.lastChild):(s=W(t.view[u+1].line)-1,c=t.view[u+1].node.previousSibling),!l)return!1
for(var d=e.doc.splitLines(jo(e,l,c,a,s)),f=N(e.doc,P(a,0),P(s,M(e.doc,s).text.length));d.length>1&&f.length>1;)if(g(d)==g(f))d.pop(),f.pop(),s--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),a++}for(var h=0,p=0,m=d[0],v=f[0],y=Math.min(m.length,v.length);h<y&&m.charCodeAt(h)==v.charCodeAt(h);)++h
for(var b=g(d),w=g(f),x=Math.min(b.length-(1==d.length?h:0),w.length-(1==f.length?h:0));p<x&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)++p
if(1==d.length&&1==f.length&&a==n.line)for(;h&&h>n.ch&&b.charCodeAt(b.length-p-1)==w.charCodeAt(w.length-p-1);)h--,p++
d[d.length-1]=b.slice(0,b.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(h).replace(/\u200b+$/,"")
var k=P(a,h),C=P(s,f.length?g(f).length-p:0)
return d.length>1||d[0]||I(k,C)?(Ni(e.doc,d,k,C,"+input"),!0):void 0},Wl.prototype.ensurePolled=function(){this.forceCompositionEnd()},Wl.prototype.reset=function(){this.forceCompositionEnd()},Wl.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Wl.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},Wl.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||un(this.cm,function(){return pn(e.cm)})},Wl.prototype.setUneditable=function(e){e.contentEditable="false"},Wl.prototype.onKeyPress=function(e){0!=e.charCode&&(e.preventDefault(),this.cm.isReadOnly()||dn(this.cm,Ao)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Wl.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Wl.prototype.onContextMenu=function(){},Wl.prototype.resetPosition=function(){},Wl.prototype.needsContentAttribute=!0
var zl=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new ya,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}
zl.prototype.init=function(e){function t(e){if(!We(i,e)){if(i.somethingSelected())Oo({lineWise:!1,text:i.getSelections()}),n.inaccurateSelection&&(n.prevInput="",n.inaccurateSelection=!1,a.value=Al.text.join("\n"),va(a))
else{if(!i.options.lineWiseCopyCut)return
var t=Do(i)
Oo({lineWise:!0,text:t.text}),"cut"==e.type?i.setSelections(t.ranges,null,Ca):(n.prevInput="",a.value=t.text.join("\n"),va(a))}"cut"==e.type&&(i.state.cutIncoming=!0)}}var r=this,n=this,i=this.cm,o=this.wrapper=Po(),a=this.textarea=o.firstChild
e.wrapper.insertBefore(o,e.wrapper.firstChild),aa&&(a.style.width="0px"),Ha(a,"input",function(){Zo&&Qo>=9&&r.hasSelection&&(r.hasSelection=null),n.poll()}),Ha(a,"paste",function(e){We(i,e)||Wo(e,i)||(i.state.pasteIncoming=!0,n.fastPoll())}),Ha(a,"cut",t),Ha(a,"copy",t),Ha(e.scroller,"paste",function(t){Ft(e,t)||We(i,t)||(i.state.pasteIncoming=!0,n.focus())}),Ha(e.lineSpace,"selectstart",function(t){Ft(e,t)||Pe(t)}),Ha(a,"compositionstart",function(){var e=i.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:i.markText(e,i.getCursor("to"),{className:"CodeMirror-composing"})}}),Ha(a,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},zl.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=Tr(e)
if(e.options.moveInputWithCursor){var i=ur(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return n},zl.prototype.showSelection=function(e){var t=this.cm,n=t.display
r(n.cursorDiv,e.cursors),r(n.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},zl.prototype.reset=function(e){if(!this.contextMenuPending){var t,r,n=this.cm,i=n.doc
if(n.somethingSelected()){this.prevInput=""
var o=i.sel.primary()
t=Fa&&(o.to().line-o.from().line>100||(r=n.getSelection()).length>1e3)
var a=t?"-":r||n.getSelection()
this.textarea.value=a,n.state.focused&&va(this.textarea),Zo&&Qo>=9&&(this.hasSelection=a)}else e||(this.prevInput=this.textarea.value="",Zo&&Qo>=9&&(this.hasSelection=null))
this.inaccurateSelection=t}},zl.prototype.getField=function(){return this.textarea},zl.prototype.supportsTouch=function(){return!1},zl.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!sa||a()!=this.textarea))try{this.textarea.focus()}catch(e){}},zl.prototype.blur=function(){this.textarea.blur()},zl.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},zl.prototype.receivedFocus=function(){this.slowPoll()},zl.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},zl.prototype.fastPoll=function(){function e(){r.poll()||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this
r.pollingFast=!0,r.polling.set(20,e)},zl.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||!t.state.focused||Ea(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if(Zo&&Qo>=9&&this.hasSelection===i||ca&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var a=0,l=Math.min(n.length,i.length);a<l&&n.charCodeAt(a)==i.charCodeAt(a);)++a
return un(t,function(){Ao(t,i.slice(a),n.length-a,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},zl.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},zl.prototype.onKeyPress=function(){Zo&&Qo>=9&&(this.hasSelection=null),this.fastPoll()},zl.prototype.onContextMenu=function(e){function t(){if(null!=a.selectionStart){var e=i.somethingSelected(),t="​"+(e?a.value:"")
a.value="⇚",a.value=t,n.prevInput=e?"":"​",a.selectionStart=1,a.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=u,a.style.cssText=c,Zo&&Qo<9&&o.scrollbars.setScrollTop(o.scroller.scrollTop=s),null!=a.selectionStart){(!Zo||Zo&&Qo<9)&&t()
var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==a.selectionStart&&a.selectionEnd>0&&"​"==n.prevInput?dn(i,wi)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):(o.selForContextMenu=null,o.input.reset())}
o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,a=n.textarea,l=Cr(i,e),s=o.scroller.scrollTop
if(l&&!ra){i.options.resetSelectionOnContextMenu&&-1==i.doc.sel.contains(l)&&dn(i,fi)(i.doc,zn(l),Ca)
var c=a.style.cssText,u=n.wrapper.style.cssText
n.wrapper.style.cssText="position: absolute"
var d=n.wrapper.getBoundingClientRect()
a.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-d.top-5)+"px; left: "+(e.clientX-d.left-5)+"px;\n      z-index: 1000; background: "+(Zo?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
var f
if(Jo&&(f=window.scrollY),o.input.focus(),Jo&&window.scrollTo(null,f),o.input.reset(),i.somethingSelected()||(a.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),Zo&&Qo>=9&&t(),ga){Fe(e)
var h=function(){Oe(window,"mouseup",h),setTimeout(r,20)}
Ha(window,"mouseup",h)}else setTimeout(r,50)}},zl.prototype.readOnlyChanged=function(e){e||this.reset()},zl.prototype.setUneditable=function(){},zl.prototype.needsContentAttribute=!1,function(e){function t(t,n,i,o){e.defaults[t]=n,i&&(r[t]=o?function(e,t,r){r!=Tl&&i(e,t,r)}:i)}var r=e.optionHandlers
e.defineOption=t,e.Init=Tl,t("value","",function(e,t){return e.setValue(t)},!0),t("mode",null,function(e,t){e.doc.modeOption=t,Fn(e)},!0),t("indentUnit",2,Fn,!0),t("indentWithTabs",!1),t("smartIndent",!0),t("tabSize",4,function(e){Bn(e),ir(e),pn(e)},!0),t("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,r.push(P(n,o))}n++})
for(var i=r.length-1;i>=0;i--)Ni(e.doc,t,r[i],P(r[i].line,r[i].ch+t.length))}}),t("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=Tl&&e.refresh()}),t("specialCharPlaceholder",ft,function(e){return e.refresh()},!0),t("electricChars",!0),t("inputStyle",sa?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),t("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),t("rtlMoveVisually",!da),t("wholeLineUpdateBefore",!0),t("theme","default",function(e){ko(e),Co(e)},!0),t("keyMap","default",function(e,t,r){var n=Ji(t),i=r!=Tl&&Ji(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),t("extraKeys",null),t("lineWrapping",!1,Lo,!0),t("gutters",[],function(e){An(e.options),Co(e)},!0),t("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?wr(e.display)+"px":"0",e.refresh()},!0),t("coverGutterNextToScrollbar",!1,function(e){return Ur(e)},!0),t("scrollbarStyle","native",function(e){$r(e),Ur(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),t("lineNumbers",!1,function(e){An(e.options),Co(e)},!0),t("firstLineNumber",1,Co,!0),t("lineNumberFormatter",function(e){return e},Co,!0),t("showCursorWhenSelecting",!1,Lr,!0),t("resetSelectionOnContextMenu",!0),t("lineWiseCopyCut",!0)
t("readOnly",!1,function(e,t){"nocursor"==t?(Dr(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t)}),t("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),t("dragDrop",!0,So),t("allowDropFileTypes",null),t("cursorBlinkRate",530),t("cursorScrollMargin",0),t("cursorHeight",1,Lr,!0),t("singleCursorHeightPerLine",!0,Lr,!0),t("workTime",100),t("workDelay",100),t("flattenSpans",!0,Bn,!0),t("addModeClass",!1,Bn,!0),t("pollInterval",100),t("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),t("historyEventDelay",1250),t("viewportMargin",10,function(e){return e.refresh()},!0),t("maxHighlightLength",1e4,Bn,!0),t("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),t("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),t("autofocus",null),t("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0)}(To),function(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&dn(this,t[e])(this,r,i),Ae(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Ji(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:fn(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
v(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,pn(this)}),removeOverlay:fn(function(e){for(var t=this,r=this.state.overlays,n=0;n<r.length;++n){var i=r[n].modeSpec
if(i==e||"string"==typeof e&&i.name==e)return r.splice(n,1),t.state.modeGen++,void pn(t)}}),indentLine:fn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),D(this.doc,e)&&No(this,e,t,r)}),indentSelection:fn(function(e){for(var t=this,r=this.doc.sel.ranges,n=-1,i=0;i<r.length;i++){var o=r[i]
if(o.empty())o.head.line>n&&(No(t,o.head.line,e,!0),n=o.head.line,i==t.doc.sel.primIndex&&Jr(t))
else{var a=o.from(),l=o.to(),s=Math.max(n,a.line)
n=Math.min(t.lastLine(),l.line-(l.ch?0:1))+1
for(var c=s;c<n;++c)No(t,c,e)
var u=t.doc.sel.ranges
0==a.ch&&r.length==u.length&&u[i].from().ch>0&&si(t.doc,i,new ol(a,u[i].to()),Ca)}}}),getTokenAt:function(e,t){return it(this,e,t)},getLineTokens:function(e,t){return it(this,P(e),t,!0)},getTokenTypeAt:function(e){e=K(this.doc,e)
var t,r=Je(this,M(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var a=n+i>>1
if((a?r[2*a-1]:0)>=o)i=a
else{if(!(r[2*a+1]<o)){t=r[2*a+2]
break}n=a+1}}var l=t?t.indexOf("overlay "):-1
return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=this,i=[]
if(!r.hasOwnProperty(t))return i
var o=r[t],a=this.getModeAt(e)
if("string"==typeof a[t])o[a[t]]&&i.push(o[a[t]])
else if(a[t])for(var l=0;l<a[t].length;l++){var s=o[a[t][l]]
s&&i.push(s)}else a.helperType&&o[a.helperType]?i.push(o[a.helperType]):o[a.name]&&i.push(o[a.name])
for(var c=0;c<o._global.length;c++){var u=o._global[c]
u.pred(a,n)&&-1==f(i,u.val)&&i.push(u.val)}return i},getStateAfter:function(e,t){var r=this.doc
return e=j(r,null==e?r.first+r.size-1:e),et(this,e+1,t)},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?K(this.doc,e):e?n.from():n.to(),ur(this,r,t||"page")},charCoords:function(e,t){return cr(this,K(this.doc,e),t||"page")},coordsChar:function(e,t){return e=sr(this,e,t||"page"),hr(this,e.left,e.top)},lineAtHeight:function(e,t){return e=sr(this,{top:e,left:0},t||"page").top,z(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=M(this.doc,e)}else n=e
return lr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-ye(n):0)},defaultTextHeight:function(){return vr(this.display)},defaultCharWidth:function(){return yr(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display
e=ur(this,K(this.doc,e))
var a=e.bottom,l=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)a=e.top
else if("above"==n||"near"==n){var s=Math.max(o.wrapper.clientHeight,this.doc.height),c=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>s)&&e.top>t.offsetHeight?a=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=s&&(a=e.bottom),l+t.offsetWidth>c&&(l=c-t.offsetWidth)}t.style.top=a+"px",t.style.left=t.style.right="","right"==i?(l=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?l=0:"middle"==i&&(l=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=l+"px"),r&&Yr(this,{left:l,top:a,right:l+t.offsetWidth,bottom:a+t.offsetHeight})},triggerOnKeyDown:fn(co),triggerOnKeyPress:fn(ho),triggerOnKeyUp:fo,execCommand:function(e){if(Cl.hasOwnProperty(e))return Cl[e].call(null,this)},triggerElectric:fn(function(e){zo(this,e)}),findPosH:function(e,t,r,n){var i=this,o=1
t<0&&(o=-1,t=-t)
for(var a=K(this.doc,e),l=0;l<t&&(a=Io(i.doc,a,o,r,n),!a.hitSide);++l);return a},moveH:fn(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Io(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},La)}),deleteH:fn(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):eo(this,function(r){var i=Io(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=this,o=1,a=n
t<0&&(o=-1,t=-t)
for(var l=K(this.doc,e),s=0;s<t;++s){var c=ur(i,l,"div")
if(null==a?a=c.left:c.left=a,l=Eo(i,c,o,r),l.hitSide)break}return l},moveV:fn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var l=ur(r,a.head,"div")
null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left)
var s=Eo(r,l,e,t)
return"page"==t&&a==n.sel.primary()&&Qr(r,null,cr(r,s,"div").top-l.top),s},La),i.length)for(var a=0;a<n.sel.ranges.length;a++)n.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=this.doc,r=M(t,e.line).text,n=e.ch,i=e.ch
if(r){var o=this.getHelper(e,"wordChars")
"before"!=e.sticky&&i!=r.length||!n?++i:--n
for(var a=r.charAt(n),l=x(a,o)?function(e){return x(e,o)}:/\s/.test(a)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!x(e)};n>0&&l(r.charAt(n-1));)--n
for(;i<r.length&&l(r.charAt(i));)++i}return new ol(P(e.line,n),P(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?l(this.display.cursorDiv,"CodeMirror-overwrite"):ma(this.display.cursorDiv,"CodeMirror-overwrite"),Ae(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==a()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:fn(function(e,t){null==e&&null==t||en(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Kt(this)-this.display.barHeight,width:e.scrollWidth-Kt(this)-this.display.barWidth,clientHeight:Gt(this),clientWidth:Vt(this)}},scrollIntoView:fn(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:P(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)en(this),this.curOp.scrollToPos=e
else{var r=Zr(this,{left:Math.min(e.from.left,e.to.left),top:Math.min(e.from.top,e.to.top)-e.margin,right:Math.max(e.from.right,e.to.right),bottom:Math.max(e.from.bottom,e.to.bottom)+e.margin})
this.scrollTo(r.scrollLeft,r.scrollTop)}}),setSize:fn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&nr(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){gn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,Ae(this,"refresh",this)}),operation:function(e){return un(this,e)},refresh:fn(function(){var e=this.display.cachedTextHeight
pn(this),this.curOp.forceUpdate=!0,ir(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),Mn(this),(null==e||Math.abs(e-vr(this.display))>.5)&&kr(this),Ae(this,"refresh",this)}),swapDoc:fn(function(e){var t=this.doc
return t.cm=null,Vn(this,e),ir(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Ct(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},He(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}(To)
var Dl="iter insert remove copy getEditor constructor".split(" ")
for(var Hl in hl.prototype)hl.prototype.hasOwnProperty(Hl)&&f(Dl,Hl)<0&&(To.prototype[Hl]=function(e){return function(){return e.apply(this.doc,arguments)}}(hl.prototype[Hl]))
return He(hl),To.inputStyles={textarea:zl,contenteditable:Wl},To.defineMode=function(e){To.defaults.mode||"null"==e||(To.defaults.mode=e),Ge.apply(this,arguments)},To.defineMIME=Ue,To.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),To.defineMIME("text/plain","null"),To.defineExtension=function(e,t){To.prototype[e]=t},To.defineDocExtension=function(e,t){hl.prototype[e]=t},To.fromTextArea=Go,function(e){e.off=Oe,e.on=Ha,e.wheelEventPixels=Kr,e.Doc=hl,e.splitLines=Ia,e.countColumn=d,e.findColumn=h,e.isWordChar=w,e.Pass=ka,e.signal=Ae,e.Line=Ga,e.changeEnd=Dn,e.scrollbarModel=tl,e.Pos=P,e.cmpPos=I,e.modes=Ra,e.mimeModes=ja,e.resolveMode=qe,e.getMode=$e,e.modeExtensions=Ka,e.extendMode=_e,e.copyState=Xe,e.startState=Ze,e.innerMode=Ye,e.commands=Cl,e.keyMap=wl,e.keyName=Qi,e.isModifierKey=Zi,e.lookupKey=Yi,e.normalizeKeyMap=Xi
e.StringStream=Va,e.SharedTextMarker=dl,e.TextMarker=ul,e.LineWidget=sl,e.e_preventDefault=Pe,e.e_stopPropagation=Ie,e.e_stop=Fe,e.addClass=l,e.contains=o,e.rmClass=ma,e.keyNames=ml}(To),To.version="5.25.2",To}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0
return t}function r(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&"/"==r){t.tokenize=null
break}n="*"==r}return["comment","comment"]}e.defineMode("css",function(t,r){function n(e,t){return p=t,e}function i(e,t){var r=e.next()
if(v[r]){var i=v[r](e,t)
if(!1!==i)return i}return"@"==r?(e.eatWhile(/[\w\\\-]/),n("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?n(null,"compare"):'"'==r||"'"==r?(t.tokenize=o(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),n("atom","hash")):"!"==r?(e.match(/^\s*\w*/),n("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),n("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?n(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?n("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?n(null,r):"u"==r&&e.match(/rl(-prefix)?\(/)||"d"==r&&e.match("omain(")||"r"==r&&e.match("egexp(")?(e.backUp(1),t.tokenize=a,n("property","word")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),n("property","word")):n(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),n("number","unit")):e.match(/^-[\w\\\-]+/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?n("variable-2","variable-definition"):n("variable-2","variable")):e.match(/^\w+-/)?n("meta","meta"):void 0}function o(e){return function(t,r){for(var i,o=!1;null!=(i=t.next());){if(i==e&&!o){")"==e&&t.backUp(1)
break}o=!o&&"\\"==i}return(i==e||!o&&")"!=e)&&(r.tokenize=null),n("string","string")}}function a(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=o(")"),n(null,"(")}function l(e,t,r){this.type=e,this.indent=t,this.prev=r}function s(e,t,r,n){return e.context=new l(r,t.indentation()+(!1===n?0:m),e.context),r}function c(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function u(e,t,r){return W[r.context.type](e,t,r)}function d(e,t,r,n){for(var i=n||1;i>0;i--)r.context=r.context.prev
return u(e,t,r)}function f(e){var t=e.current().toLowerCase()
g=M.hasOwnProperty(t)?"atom":T.hasOwnProperty(t)?"keyword":"variable"}var h=r.inline
r.propertyKeywords||(r=e.resolveMode("text/css"))
var p,g,m=t.indentUnit,v=r.tokenHooks,y=r.documentTypes||{},b=r.mediaTypes||{},w=r.mediaFeatures||{},x=r.mediaValueKeywords||{},k=r.propertyKeywords||{},C=r.nonStandardPropertyKeywords||{},S=r.fontProperties||{},L=r.counterDescriptors||{},T=r.colorKeywords||{},M=r.valueKeywords||{},N=r.allowNested,O=r.lineComment,A=!0===r.supportsAtComponent,W={}
return W.top=function(e,t,r){if("{"==e)return s(r,t,"block")
if("}"==e&&r.context.prev)return c(r)
if(A&&/@component/.test(e))return s(r,t,"atComponentBlock")
if(/^@(-moz-)?document$/.test(e))return s(r,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/.test(e))return s(r,t,"atBlock")
if(/^@(font-face|counter-style)/.test(e))return r.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return s(r,t,"at")
if("hash"==e)g="builtin"
else if("word"==e)g="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return s(r,t,"interpolation")
if(":"==e)return"pseudo"
if(N&&"("==e)return s(r,t,"parens")}return r.context.type},W.block=function(e,t,r){if("word"==e){var n=t.current().toLowerCase()
return k.hasOwnProperty(n)?(g="property","maybeprop"):C.hasOwnProperty(n)?(g="string-2","maybeprop"):N?(g=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(g+=" error","maybeprop")}return"meta"==e?"block":N||"hash"!=e&&"qualifier"!=e?W.top(e,t,r):(g="error","block")},W.maybeprop=function(e,t,r){return":"==e?s(r,t,"prop"):u(e,t,r)},W.prop=function(e,t,r){if(";"==e)return c(r)
if("{"==e&&N)return s(r,t,"propBlock")
if("}"==e||"{"==e)return d(e,t,r)
if("("==e)return s(r,t,"parens")
if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)f(t)
else if("interpolation"==e)return s(r,t,"interpolation")}else g+=" error"
return"prop"},W.propBlock=function(e,t,r){return"}"==e?c(r):"word"==e?(g="property","maybeprop"):r.context.type},W.parens=function(e,t,r){return"{"==e||"}"==e?d(e,t,r):")"==e?c(r):"("==e?s(r,t,"parens"):"interpolation"==e?s(r,t,"interpolation"):("word"==e&&f(t),"parens")},W.pseudo=function(e,t,r){return"meta"==e?"pseudo":"word"==e?(g="variable-3",r.context.type):u(e,t,r)},W.documentTypes=function(e,t,r){return"word"==e&&y.hasOwnProperty(t.current())?(g="tag",r.context.type):W.atBlock(e,t,r)},W.atBlock=function(e,t,r){if("("==e)return s(r,t,"atBlock_parens")
if("}"==e||";"==e)return d(e,t,r)
if("{"==e)return c(r)&&s(r,t,N?"block":"top")
if("interpolation"==e)return s(r,t,"interpolation")
if("word"==e){var n=t.current().toLowerCase()
g="only"==n||"not"==n||"and"==n||"or"==n?"keyword":b.hasOwnProperty(n)?"attribute":w.hasOwnProperty(n)?"property":x.hasOwnProperty(n)?"keyword":k.hasOwnProperty(n)?"property":C.hasOwnProperty(n)?"string-2":M.hasOwnProperty(n)?"atom":T.hasOwnProperty(n)?"keyword":"error"}return r.context.type},W.atComponentBlock=function(e,t,r){return"}"==e?d(e,t,r):"{"==e?c(r)&&s(r,t,N?"block":"top",!1):("word"==e&&(g="error"),r.context.type)},W.atBlock_parens=function(e,t,r){return")"==e?c(r):"{"==e||"}"==e?d(e,t,r,2):W.atBlock(e,t,r)},W.restricted_atBlock_before=function(e,t,r){return"{"==e?s(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(g="variable","restricted_atBlock_before"):u(e,t,r)},W.restricted_atBlock=function(e,t,r){return"}"==e?(r.stateArg=null,c(r)):"word"==e?(g="@font-face"==r.stateArg&&!S.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!L.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},W.keyframes=function(e,t,r){return"word"==e?(g="variable","keyframes"):"{"==e?s(r,t,"top"):u(e,t,r)},W.at=function(e,t,r){return";"==e?c(r):"{"==e||"}"==e?d(e,t,r):("word"==e?g="tag":"hash"==e&&(g="builtin"),"at")},W.interpolation=function(e,t,r){return"}"==e?c(r):"{"==e||";"==e?d(e,t,r):("word"==e?g="variable":"variable"!=e&&"("!=e&&")"!=e&&(g="error"),"interpolation")},{startState:function(e){return{tokenize:null,state:h?"block":"top",stateArg:null,context:new l(h?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var r=(t.tokenize||i)(e,t)
return r&&"object"==typeof r&&(p=r[1],r=r[0]),g=r,t.state=W[t.state](p,e,t),g},indent:function(e,t){var r=e.context,n=t&&t.charAt(0),i=r.indent
return"prop"!=r.type||"}"!=n&&")"!=n||(r=r.prev),r.prev&&("}"!=n||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=n||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=n||"at"!=r.type&&"atBlock"!=r.type)||(i=Math.max(0,r.indent-m),r=r.prev):(r=r.prev,i=r.indent)),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:O,fold:"brace"}})
var n=["domain","regexp","url","url-prefix"],i=t(n),o=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],a=t(o),l=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],s=t(l),c=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],u=t(c),d=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],f=t(d),h=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],p=t(h),g=["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"],m=t(g),v=["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"],y=t(v),b=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],w=t(b),x=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],k=t(x),C=n.concat(o).concat(l).concat(c).concat(d).concat(h).concat(b).concat(x)
e.registerHelper("hintWords","css",C),e.defineMIME("text/css",{documentTypes:i,mediaTypes:a,mediaFeatures:s,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:p,fontProperties:m,counterDescriptors:y,colorKeywords:w,valueKeywords:k,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=r,r(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:a,mediaFeatures:s,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:p,colorKeywords:w,valueKeywords:k,fontProperties:m,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},":":function(e){return!!e.match(/\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:a,mediaFeatures:s,mediaValueKeywords:u,propertyKeywords:f,nonStandardPropertyKeywords:p,colorKeywords:w,valueKeywords:k,fontProperties:m,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=r,r(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:i,mediaTypes:a,mediaFeatures:s,propertyKeywords:f,nonStandardPropertyKeywords:p,fontProperties:m,counterDescriptors:y,colorKeywords:w,valueKeywords:k,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=r,r(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,r){var n=e.current(),i=n.search(t)
return i>-1?e.backUp(n.length-i):n.match(/<\/?$/)&&(e.backUp(n.length),e.match(t,!1)||e.match(n)),r}function r(e){var t=s[e]
return t||(s[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function n(e,t){var n=e.match(r(t))
return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function o(e,t){for(var r in e)for(var n=t[r]||(t[r]=[]),i=e[r],o=i.length-1;o>=0;o--)n.unshift(i[o])}function a(e,t){for(var r=0;r<e.length;r++){var i=e[r]
if(!i[0]||i[1].test(n(t,i[0])))return i[2]}}var l={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},s={}
e.defineMode("htmlmixed",function(r,n){function s(n,o){var l,d=c.token(n,o.htmlState),f=/\btag\b/.test(d)
if(f&&!/[<>\s\/]/.test(n.current())&&(l=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&u.hasOwnProperty(l))o.inTag=l+" "
else if(o.inTag&&f&&/>$/.test(n.current())){var h=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var p=">"==n.current()&&a(u[h[1]],h[2]),g=e.getMode(r,p),m=i(h[1],!0),v=i(h[1],!1)
o.token=function(e,r){return e.match(m,!1)?(r.token=s,r.localState=r.localMode=null,null):t(e,v,r.localMode.token(e,r.localState))},o.localMode=g,o.localState=e.startState(g,c.indent(o.htmlState,""))}else o.inTag&&(o.inTag+=n.current(),n.eol()&&(o.inTag+=" "))
return d}var c=e.getMode(r,{name:"xml",htmlMode:!0,multilineTagIndentFactor:n.multilineTagIndentFactor,multilineTagIndentPastTag:n.multilineTagIndentPastTag}),u={},d=n&&n.tags,f=n&&n.scriptTypes
if(o(l,u),d&&o(d,u),f)for(var h=f.length-1;h>=0;h--)u.script.unshift(["type",f[h].matches,f[h].mode])
return{startState:function(){return{token:s,inTag:null,localMode:null,localState:null,htmlState:e.startState(c)}},copyState:function(t){var r
return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(c,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r){return!t.localMode||/^\s*<\//.test(r)?c.indent(t.htmlState,r):t.localMode.indent?t.localMode.indent(t.localState,r):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||c}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,r){return/^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}e.defineMode("javascript",function(r,n){function i(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return
"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}function o(e,t,r){return Le=e,Te=r,t}function a(e,r){var n=e.next()
if('"'==n||"'"==n)return r.tokenize=l(n),r.tokenize(e,r)
if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return o("number","number")
if("."==n&&e.match(".."))return o("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return o(n)
if("="==n&&e.eat(">"))return o("=>","operator")
if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),o("number","number")
if("0"==n&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),o("number","number")
if("0"==n&&e.eat(/b/i))return e.eatWhile(/[01]/i),o("number","number")
if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),o("number","number")
if("/"==n)return e.eat("*")?(r.tokenize=s,s(e,r)):e.eat("/")?(e.skipToEnd(),o("comment","comment")):t(e,r,1)?(i(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),o("regexp","string-2")):(e.eatWhile(He),o("operator","operator",e.current()))
if("`"==n)return r.tokenize=c,c(e,r)
if("#"==n)return e.skipToEnd(),o("error","error")
if(He.test(n))return">"==n&&r.lexical&&">"==r.lexical.type||e.eatWhile(He),o("operator","operator",e.current())
if(ze.test(n)){e.eatWhile(ze)
var a=e.current(),u=De.propertyIsEnumerable(a)&&De[a]
return u&&"."!=r.lastType?o(u.type,u.style,a):o("variable","variable",a)}}function l(e){return function(t,r){var n,i=!1
if(Oe&&"@"==t.peek()&&t.match(Pe))return r.tokenize=a,o("jsonld-keyword","meta")
for(;null!=(n=t.next())&&(n!=e||i);)i=!i&&"\\"==n
return i||(r.tokenize=a),o("string","string")}}function s(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=a
break}n="*"==r}return o("comment","comment")}function c(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=a
break}n=!n&&"\\"==r}return o("quasi","string-2",e.current())}function u(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var r=e.string.indexOf("=>",e.start)
if(!(r<0)){if(We){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r))
n&&(r=n.index)}for(var i=0,o=!1,a=r-1;a>=0;--a){var l=e.string.charAt(a),s=Ie.indexOf(l)
if(s>=0&&s<3){if(!i){++a
break}if(0==--i){"("==l&&(o=!0)
break}}else if(s>=3&&s<6)++i
else if(ze.test(l))o=!0
else{if(/["'\/]/.test(l))return
if(o&&!i){++a
break}}}o&&!i&&(t.fatArrowAt=a)}}function d(e,t,r,n,i,o){this.indented=e,this.column=t,this.type=r,this.prev=i,this.info=o,null!=n&&(this.align=n)}function f(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0
for(var n=e.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==t)return!0}function h(e,t,r,n,i){var o=e.cc
for(Fe.state=e,Fe.stream=i,Fe.marked=null,Fe.cc=o,Fe.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){if((o.length?o.pop():Ae?C:k)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return Fe.marked?Fe.marked:"variable"==r&&f(e,n)?"variable-2":t}}}function p(){for(var e=arguments.length-1;e>=0;e--)Fe.cc.push(arguments[e])}function g(){return p.apply(null,arguments),!0}function m(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0
return!1}var r=Fe.state
if(Fe.marked="def",r.context){if(t(r.localVars))return
r.localVars={name:e,next:r.localVars}}else{if(t(r.globalVars))return
n.globalVars&&(r.globalVars={name:e,next:r.globalVars})}}function v(){Fe.state.context={prev:Fe.state.context,vars:Fe.state.localVars},Fe.state.localVars=Be}function y(){Fe.state.localVars=Fe.state.context.vars,Fe.state.context=Fe.state.context.prev}function b(e,t){var r=function(){var r=Fe.state,n=r.indented
if("stat"==r.lexical.type)n=r.lexical.indented
else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented
r.lexical=new d(n,Fe.stream.column(),e,null,r.lexical,t)}
return r.lex=!0,r}function w(){var e=Fe.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function x(e){function t(r){return r==e?g():";"==e?p():g(t)}return t}function k(e,t){return"var"==e?g(b("vardef",t.length),Q,x(";"),w):"keyword a"==e?g(b("form"),L,k,w):"keyword b"==e?g(b("form"),k,w):"{"==e?g(b("}"),U,w):";"==e?g():"if"==e?("else"==Fe.state.lexical.info&&Fe.state.cc[Fe.state.cc.length-1]==w&&Fe.state.cc.pop()(),g(b("form"),L,k,w,ne)):"function"==e?g(ce):"for"==e?g(b("form"),ie,k,w):"variable"==e?g(b("stat"),F):"switch"==e?g(b("form"),L,b("}","switch"),x("{"),U,w,w):"case"==e?g(C,x(":")):"default"==e?g(x(":")):"catch"==e?g(b("form"),v,x("("),ue,x(")"),k,w,y):"class"==e?g(b("form"),fe,w):"export"==e?g(b("stat"),me,w):"import"==e?g(b("stat"),ye,w):"module"==e?g(b("form"),J,b("}"),x("{"),U,w,w):"type"==e?g($,x("operator"),$,x(";")):"async"==e?g(k):"@"==t?g(C,k):p(b("stat"),C,x(";"),w)}function C(e){return T(e,!1)}function S(e){return T(e,!0)}function L(e){return"("!=e?p():g(b(")"),C,x(")"),w)}function T(e,t){if(Fe.state.fatArrowAt==Fe.stream.start){var r=t?H:D
if("("==e)return g(v,b(")"),V(J,")"),w,x("=>"),r,y)
if("variable"==e)return p(v,J,x("=>"),r,y)}var n=t?A:O
return Ee.hasOwnProperty(e)?g(n):"function"==e?g(ce,n):"class"==e?g(b("form"),de,w):"keyword c"==e||"async"==e?g(t?N:M):"("==e?g(b(")"),M,x(")"),w,n):"operator"==e||"spread"==e?g(t?S:C):"["==e?g(b("]"),Ce,w,n):"{"==e?G(R,"}",null,n):"quasi"==e?p(W,n):"new"==e?g(P(t)):g()}function M(e){return e.match(/[;\}\)\],]/)?p():p(C)}function N(e){return e.match(/[;\}\)\],]/)?p():p(S)}function O(e,t){return","==e?g(C):A(e,t,!1)}function A(e,t,r){var n=0==r?O:A,i=0==r?C:S
return"=>"==e?g(v,r?H:D,y):"operator"==e?/\+\+|--/.test(t)?g(n):"?"==t?g(C,x(":"),i):g(i):"quasi"==e?p(W,n):";"!=e?"("==e?G(S,")","call",n):"."==e?g(B,n):"["==e?g(b("]"),M,x("]"),w,n):void 0:void 0}function W(e,t){return"quasi"!=e?p():"${"!=t.slice(t.length-2)?g(W):g(C,z)}function z(e){if("}"==e)return Fe.marked="string-2",Fe.state.tokenize=c,g(W)}function D(e){return u(Fe.stream,Fe.state),p("{"==e?k:C)}function H(e){return u(Fe.stream,Fe.state),p("{"==e?k:S)}function P(e){return function(t){return"."==t?g(e?E:I):p(e?S:C)}}function I(e,t){if("target"==t)return Fe.marked="keyword",g(O)}function E(e,t){if("target"==t)return Fe.marked="keyword",g(A)}function F(e){return":"==e?g(w,k):p(O,x(";"),w)}function B(e){if("variable"==e)return Fe.marked="property",g()}function R(e,t){return"async"==e?(Fe.marked="property",g(R)):"variable"==e||"keyword"==Fe.style?(Fe.marked="property",g("get"==t||"set"==t?j:K)):"number"==e||"string"==e?(Fe.marked=Oe?"property":Fe.style+" property",g(K)):"jsonld-keyword"==e?g(K):"modifier"==e?g(R):"["==e?g(C,x("]"),K):"spread"==e?g(C):":"==e?p(K):void 0}function j(e){return"variable"!=e?p(K):(Fe.marked="property",g(ce))}function K(e){return":"==e?g(S):"("==e?p(ce):void 0}function V(e,t,r){function n(i,o){if(r?r.indexOf(i)>-1:","==i){var a=Fe.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),g(function(r,n){return r==t||n==t?p():p(e)},n)}return i==t||o==t?g():g(x(t))}return function(r,i){return r==t||i==t?g():p(e,n)}}function G(e,t,r){for(var n=3;n<arguments.length;n++)Fe.cc.push(arguments[n])
return g(b(t,r),V(e,t),w)}function U(e){return"}"==e?g():p(k,U)}function q(e,t){if(We){if(":"==e)return g($)
if("?"==t)return g(q)}}function $(e){return"variable"==e?(Fe.marked="variable-3",g(Z)):"string"==e||"number"==e||"atom"==e?g(Z):"{"==e?g(b("}"),V(X,"}",",;"),w):"("==e?g(V(Y,")"),_):void 0}function _(e){if("=>"==e)return g($)}function X(e,t){return"variable"==e||"keyword"==Fe.style?(Fe.marked="property",g(X)):"?"==t?g(X):":"==e?g($):void 0}function Y(e){return"variable"==e?g(Y):":"==e?g($):void 0}function Z(e,t){return"<"==t?g(b(">"),V($,">"),w,Z):"|"==t||"."==e?g($):"["==e?g(x("]"),Z):void 0}function Q(){return p(J,q,te,re)}function J(e,t){return"modifier"==e?g(J):"variable"==e?(m(t),g()):"spread"==e?g(J):"["==e?G(J,"]"):"{"==e?G(ee,"}"):void 0}function ee(e,t){return"variable"!=e||Fe.stream.match(/^\s*:/,!1)?("variable"==e&&(Fe.marked="property"),"spread"==e?g(J):"}"==e?p():g(x(":"),J,te)):(m(t),g(te))}function te(e,t){if("="==t)return g(S)}function re(e){if(","==e)return g(Q)}function ne(e,t){if("keyword b"==e&&"else"==t)return g(b("form","else"),k,w)}function ie(e){if("("==e)return g(b(")"),oe,x(")"),w)}function oe(e){return"var"==e?g(Q,x(";"),le):";"==e?g(le):"variable"==e?g(ae):p(C,x(";"),le)}function ae(e,t){return"in"==t||"of"==t?(Fe.marked="keyword",g(C)):g(O,le)}function le(e,t){return";"==e?g(se):"in"==t||"of"==t?(Fe.marked="keyword",g(C)):p(C,x(";"),se)}function se(e){")"!=e&&g(C)}function ce(e,t){return"*"==t?(Fe.marked="keyword",g(ce)):"variable"==e?(m(t),g(ce)):"("==e?g(v,b(")"),V(ue,")"),w,q,k,y):We&&"<"==t?g(b(">"),V($,">"),w,ce):void 0}function ue(e){return"spread"==e?g(ue):p(J,q,te)}function de(e,t){return"variable"==e?fe(e,t):he(e,t)}function fe(e,t){if("variable"==e)return m(t),g(he)}function he(e,t){return"<"==t?g(b(">"),V($,">"),w,he):"extends"==t||"implements"==t||We&&","==e?g(We?$:C,he):"{"==e?g(b("}"),pe,w):void 0}function pe(e,t){return"variable"==e||"keyword"==Fe.style?("async"==t||"static"==t||"get"==t||"set"==t||We&&("public"==t||"private"==t||"protected"==t||"readonly"==t||"abstract"==t))&&Fe.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Fe.marked="keyword",g(pe)):(Fe.marked="property",g(We?ge:ce,pe)):"["==e?g(C,x("]"),We?ge:ce,pe):"*"==t?(Fe.marked="keyword",g(pe)):";"==e?g(pe):"}"==e?g():"@"==t?g(C,pe):void 0}function ge(e,t){return"?"==t?g(ge):":"==e?g($,te):"="==t?g(S):p(ce)}function me(e,t){return"*"==t?(Fe.marked="keyword",g(ke,x(";"))):"default"==t?(Fe.marked="keyword",g(C,x(";"))):"{"==e?g(V(ve,"}"),ke,x(";")):p(k)}function ve(e,t){return"as"==t?(Fe.marked="keyword",g(x("variable"))):"variable"==e?p(S,ve):void 0}function ye(e){return"string"==e?g():p(be,we,ke)}function be(e,t){return"{"==e?G(be,"}"):("variable"==e&&m(t),"*"==t&&(Fe.marked="keyword"),g(xe))}function we(e){if(","==e)return g(be,we)}function xe(e,t){if("as"==t)return Fe.marked="keyword",g(be)}function ke(e,t){if("from"==t)return Fe.marked="keyword",g(C)}function Ce(e){return"]"==e?g():p(V(S,"]"))}function Se(e,t){return"operator"==e.lastType||","==e.lastType||He.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}var Le,Te,Me=r.indentUnit,Ne=n.statementIndent,Oe=n.jsonld,Ae=n.json||Oe,We=n.typescript,ze=n.wordCharacters||/[\w$\xa1-\uffff]/,De=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),i=e("operator"),o={type:"atom",style:"atom"},a={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e("new"),delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n,async:e("async")}
if(We){var l={type:"variable",style:"variable-3"},s={interface:e("class"),implements:n,namespace:n,module:e("module"),enum:e("module"),type:e("type"),public:e("modifier"),private:e("modifier"),protected:e("modifier"),abstract:e("modifier"),as:i,string:l,number:l,boolean:l,any:l}
for(var c in s)a[c]=s[c]}return a}(),He=/[+\-*&%=<>!?|~^@]/,Pe=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Ie="([{}])",Ee={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},Fe={state:null,column:null,marked:null,cc:null},Be={name:"this",next:{name:"arguments"}}
return w.lex=!0,{startState:function(e){var t={tokenize:a,lastType:"sof",cc:[],lexical:new d((e||0)-Me,0,"block",!1),localVars:n.localVars,context:n.localVars&&{vars:n.localVars},indented:e||0}
return n.globalVars&&"object"==typeof n.globalVars&&(t.globalVars=n.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),u(e,t)),t.tokenize!=s&&e.eatSpace())return null
var r=t.tokenize(e,t)
return"comment"==Le?r:(t.lastType="operator"!=Le||"++"!=Te&&"--"!=Te?Le:"incdec",h(t,r,Le,Te,e))},indent:function(t,r){if(t.tokenize==s)return e.Pass
if(t.tokenize!=a)return 0
var i,o=r&&r.charAt(0),l=t.lexical
if(!/^\s*else\b/.test(r))for(var c=t.cc.length-1;c>=0;--c){var u=t.cc[c]
if(u==w)l=l.prev
else if(u!=ne)break}for(;("stat"==l.type||"form"==l.type)&&("}"==o||(i=t.cc[t.cc.length-1])&&(i==O||i==A)&&!/^[,\.=+\-*:?[\(]/.test(r));)l=l.prev
Ne&&")"==l.type&&"stat"==l.prev.type&&(l=l.prev)
var d=l.type,f=o==d
return"vardef"==d?l.indented+("operator"==t.lastType||","==t.lastType?l.info+1:0):"form"==d&&"{"==o?l.indented:"form"==d?l.indented+Me:"stat"==d?l.indented+(Se(t,r)?Ne||Me:0):"switch"!=l.info||f||0==n.doubleIndentSwitch?l.align?l.column+(f?0:1):l.indented+(f?0:Me):l.indented+(/^(?:case|default)\b/.test(r)?Me:2*Me)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ae?null:"/*",blockCommentEnd:Ae?null:"*/",lineComment:Ae?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ae?"json":"javascript",jsonldMode:Oe,jsonMode:Ae,expressionAllowed:t,skipExpression:function(e){var t=e.cc[e.cc.length-1]
t!=C&&t!=S||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1}
e.defineMode("xml",function(n,i){function o(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next()
if("<"==n)return e.eat("!")?e.eat("[")?e.match("CDATA[")?r(s("atom","]]>")):null:e.match("--")?r(s("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(c(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=s("meta","?>"),"meta"):(T=e.eat("/")?"closeTag":"openTag",t.tokenize=a,"tag bracket")
if("&"==n){var i
return i=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),i?"atom":"error"}return e.eatWhile(/[^&<]/),null}function a(e,t){var r=e.next()
if(">"==r||"/"==r&&e.eat(">"))return t.tokenize=o,T=">"==r?"endTag":"selfcloseTag","tag bracket"
if("="==r)return T="equals",null
if("<"==r){t.tokenize=o,t.state=h,t.tagName=t.tagStart=null
var n=t.tokenize(e,t)
return n?n+" tag error":"tag error"}return/[\'\"]/.test(r)?(t.tokenize=l(r),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function l(e){var t=function(t,r){for(;!t.eol();)if(t.next()==e){r.tokenize=a
break}return"string"}
return t.isInAttribute=!0,t}function s(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=o
break}r.next()}return e}}function c(e){return function(t,r){for(var n;null!=(n=t.next());){if("<"==n)return r.tokenize=c(e+1),r.tokenize(t,r)
if(">"==n){if(1==e){r.tokenize=o
break}return r.tokenize=c(e-1),r.tokenize(t,r)}}return"meta"}}function u(e,t,r){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=r,(C.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function d(e){e.context&&(e.context=e.context.prev)}function f(e,t){for(var r;;){if(!e.context)return
if(r=e.context.tagName,!C.contextGrabbers.hasOwnProperty(r)||!C.contextGrabbers[r].hasOwnProperty(t))return
d(e)}}function h(e,t,r){return"openTag"==e?(r.tagStart=t.column(),p):"closeTag"==e?g:h}function p(e,t,r){return"word"==e?(r.tagName=t.current(),M="tag",y):(M="error",p)}function g(e,t,r){if("word"==e){var n=t.current()
return r.context&&r.context.tagName!=n&&C.implicitlyClosed.hasOwnProperty(r.context.tagName)&&d(r),r.context&&r.context.tagName==n||!1===C.matchClosing?(M="tag",m):(M="tag error",v)}return M="error",v}function m(e,t,r){return"endTag"!=e?(M="error",m):(d(r),h)}function v(e,t,r){return M="error",m(e,t,r)}function y(e,t,r){if("word"==e)return M="attribute",b
if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart
return r.tagName=r.tagStart=null,"selfcloseTag"==e||C.autoSelfClosers.hasOwnProperty(n)?f(r,n):(f(r,n),r.context=new u(r,n,i==r.indented)),h}return M="error",y}function b(e,t,r){return"equals"==e?w:(C.allowMissing||(M="error"),y(e,t,r))}function w(e,t,r){return"string"==e?x:"word"==e&&C.allowUnquoted?(M="string",y):(M="error",y(e,t,r))}function x(e,t,r){return"string"==e?x:y(e,t,r)}var k=n.indentUnit,C={},S=i.htmlMode?t:r
for(var L in S)C[L]=S[L]
for(var L in i)C[L]=i[L]
var T,M
return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:h,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
T=null
var r=t.tokenize(e,t)
return(r||T)&&"comment"!=r&&(M=null,t.state=t.state(T||r,e,t),M&&(r="error"==M?r+" error":M)),r},indent:function(t,r,n){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+k
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=a&&t.tokenize!=o)return n?n.match(/^(\s*)/)[0].length:0
if(t.tagName)return!1!==C.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+k*(C.multilineTagIndentFactor||1)
if(C.alignCDATA&&/<!\[CDATA\[/.test(r))return 0
var l=r&&/^<(\/)?([\w_:\.-]*)/.exec(r)
if(l&&l[1])for(;i;){if(i.tagName==l[2]){i=i.prev
break}if(!C.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(l)for(;i;){var s=C.contextGrabbers[i.tagName]
if(!s||!s.hasOwnProperty(l[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+k:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:C.htmlMode?"html":"xml",helperType:C.htmlMode?"html":"xml",skipAttribute:function(e){e.state==w&&(e.state=y)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})
