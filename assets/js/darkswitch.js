/* (c) Copyright : github.com/nikahmadz  */
darkswitch=_=>{
a=['light','dark'];d=document;
e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));
m=matchMedia;x=a.indexOf(c=e.content);x=x<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[++x>1?0:x];
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{c=r=>r.test(e.tagName);
e.style.color=c(/^A$|BUTTON$/)?'#47B':c(/^P(RE)?$/)?'grey':'initial';
e.style.background='unset'
})
}
