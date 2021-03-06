/* (c) Copyright : github.com/nikahmadz  */

/* v0.2.1 = highest compatibility, theme cycler, short & agile, fixed */
javascript:(a=>{d=document;x=d.$ds||0;c=a[x=x>=a.length?0:x];b=c[0]||'0';p=c[2]||'grey';h=c[1]||p;i=c[3]||'#47B';d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;C=r=>r.test(t);e.style.background=t=='HTML'?b:'inherit';e.style.color=C(/^A$|BUTTON$/)?i:C(/^P(RE)?$/)?p:h});d.$ds=++x})([['#222','#DDD'],['#DDD','#222']])

(a=>{
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
})([['#222','#DDD'],['#DDD','#222']])

/* v0.2 = highest compatibility, theme cycler, short & agile */
javascript:(a=>{d=document;x=d.$ds||0;c=a[x=x>=a.length?0:x];b=c[0]||'0';p=c[2]||'grey';h=c[1]||p;i=c[3]||'#47B';d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;C=r=>r.test(t);e.style.background=t=='HTML'?b:'0';e.style.color=C(/^A$|BUTTON$/)?i:C(/^P(RE)?$/)?p:h});d.$ds=++x})([['#222','#DDD'],['#DDD','#222']])

(a=>{
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
e.style.background=t=='HTML'?b:'0';
e.style.color=C(/^A$|BUTTON$/)?i:C(/^P(RE)?$/)?p:h
});d.$ds=++x
})([['#222','#DDD'],['#DDD','#222']])

/* v0.1.2 = add theme */
javascript:(c=>{a=['light','dark'];d=document;e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));m=matchMedia;x=a.indexOf(s=e.content);x=x<0?s?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;e.content=a[x=++x>1?0:x];d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;C=r=>r.test(t);e.style.color=C(/^A$|BUTTON$/)?'#47B':C(/^P(RE)?$/)?'grey':c[x];e.style.background=t=='HTML'?c[2+x]:'unset'})})(['#222','#DDD','#DDD','#222'])

(c=>{a=['light','dark'];d=document;
e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));
m=matchMedia;x=a.indexOf(s=e.content);x=x<0?s?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[x=++x>1?0:x];
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{
t=e.tagName;C=r=>r.test(t);
e.style.color=C(/^A$|BUTTON$/)?'#47B':C(/^P(RE)?$/)?'grey':c[x];
e.style.background=t=='HTML'?c[2+x]:'unset'
})
})(['#222','#DDD','#DDD','#222'])

/* v0.1.1 = add theme capability */
javascript:(a=>{d=document;e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));m=matchMedia;x=a.indexOf(c=e.content);x=x<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;e.content=a[++x>1?0:x];d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{c=r=>r.test(e.tagName);e.style.color=c(/^A$|BUTTON$/)?'#47B':c(/^P(RE)?$/)?'grey':'initial';e.style.background='unset'})})(['light','dark'])

(a=>{d=document;
e=d.getElementsByName(n='color-scheme')[0]||(e=d.createElement('meta'),e.name=n,d.head.appendChild(e));
m=matchMedia;x=a.indexOf(c=e.content);x=x<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[++x>1?0:x];
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{c=r=>r.test(e.tagName);
e.style.color=c(/^A$|BUTTON$/)?'#47B':c(/^P(RE)?$/)?'grey':'initial';
e.style.background='unset'
})
})(['light','dark'])


/* v0.1.0 = first release */
javascript:(()=>{a=['light','dark'];d=document;d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;s='initial';if(/^a$|abbr$/i.test(t)){s='#47b'}e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[x=++x>1?0:x]})()

(()=>{
a=['light','dark'];d=document;
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress,pre *)')
.forEach(e=>{t=e.tagName;s='initial';
if(/^a$|abbr$/i.test(t)){s='#47b'}
e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s
});
e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;
if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}
s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;
e.content=a[x=++x>1?0:x];
})()


/* v0.0.2 = highest compatibility */
javascript:(d=>{f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{if((t=e.tagName)=='HTML'){f(e,'#EEE','#111')}else if(t=='P'){f(e,'grey')}else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}else{f(e)}})})(document)

(d=>{
f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{
if((t=e.tagName)=='HTML'){f(e,'#EEE','#111')}
else if(t=='P'){f(e,'grey')}
else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}
else{f(e)}})
})(document)

/* v0.0.1 = highest compatibility */
javascript:document.querySelectorAll('html,body,body *').forEach(e=>e.style=(e.getAttribute('style')||'')+';background:#111;color:#'+(/^(A|BUTTON)$/.test(e.tagName)?'47B':'EEE'))

document.querySelectorAll('html,body,body *')
.forEach(e=>e.style=(e.getAttribute('style')||'')
+';background:#111;color:#'
+(/^(A|BUTTON)$/.test(e.tagName)?'47B':'EEE'))
