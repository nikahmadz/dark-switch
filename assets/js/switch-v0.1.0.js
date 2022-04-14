/* (c) Copyright : github.com/nikahmadz  */
(darkswitch=()=>{
a=['light','dark'];d=document;
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress)')
.forEach(e=>{t=e.tagName;s='initial';
if(/^a$|abbr$/i.test(t)){s='#47b'}
e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s
});
e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;
if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}
s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;
e.content=a[x=++x>1?0:x];
})()
