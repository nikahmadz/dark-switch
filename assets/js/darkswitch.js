/* (c) Copyright : github.com/nikahmadz  */
darkswitch=(c=['#222','#DDD','#DDD','#222'])=>{
a=['light','dark'];d=document;
e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));
m=matchMedia;x=a.indexOf(s=e.content);x=x<0?s?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[x=++x>1?0:x];
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{
t=e.tagName;C=r=>r.test(t);
e.style.color=C(/^A$|BUTTON$/)?'#47B':C(/^P(RE)?$/)?'grey':c[x];
e.style.background=t=='HTML'?c[2+x]:'unset'
})
}
