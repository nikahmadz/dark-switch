/* (c) Copyright : github.com/nikahmadz  */
darkswitch=()=>{
d=document;
a=['light','dark'];
f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{t=e.tagName;
if(t=='P'){f(e,'grey')}
else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}
else{f(e)}});
e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;
if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}
s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;
e.content=a[++x>1?0:x]
}
