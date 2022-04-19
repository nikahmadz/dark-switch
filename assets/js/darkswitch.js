/* (c) Copyright : github.com/nikahmadz  */
darkswitch=(a=[['#222','#DDD'],['#DDD','#222']])=>{
d=document;
x=d.$ds||0;
c=a[x=x>=a.length?0:x];
b=c[0]||'0';
p=c[2]||'grey';
h=c[1]||p;
i=c[3]||'#47B';
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{
t=e.tagName;C=r=>r.test(t);
e.style.background=t=='HTML'?b:'inherit';
e.style.color=C(/^A$|BUTTON$/)?i:C(/^P(RE)?$/)?p:h
});d.$ds=++x
}
