/* (c) Copyright : github.com/nikahmadz  */

/* v0.1.1 */

(()=>{
a=['light','dark'];d=document;
d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress,pre *)')
.forEach(e=>e.style=(e.getAttribute('style')||'')
+';background:unset;color:'+(/^a$|abbr$/i.test(e.tagName))?'#47b':'initial'
);e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;
if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}
x=a.indexOf(c=e.content);x=x<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[x=++x>1?0:x]
})()

(()=>{
a=['light','dark'];
r=[/^A$|ABBR$/];
(d=document).querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,kbd,i,meter,progress,pre *)')
.forEach(e=>{
e.style=(e.getAttribute('style')||'')
+';background:unset;color:'
+(.test(t=e.tagName)?'#47B':'initial')
});
e=d.getElementsByName(n='color-scheme')[0];
if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}
m=matchMedia;
x=a.indexOf(c=e.content);
x=x<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:x;
e.content=a[++x>1?0:x]
})()


+(/^a$|abbr$/i.test(t=e.tagName)?'#47b':'initial')


/* v0.1.0 */

javascript:(()=>{a=['light','dark'];d=document;d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progressnoscript,script,style,link,hr,br,mark,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;s='initial';if(/^a$|abbr$/i.test(t)){s='#47b'}e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[x=++x>1?0:x]})()

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
javascript:f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};document.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{if((t=e.tagName)=='HTML'){f(e,'#EEE','#111')}else if(t=='P'){f(e,'grey')}else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}else{f(e)}})

f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};
document.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)')
.forEach(e=>{
if((t=e.tagName)=='HTML'){f(e,'#EEE','#111')}
else if(t=='P'){f(e,'grey')}
else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}
else{f(e)}})

/* v0.0.1 = highest compatibility */
javascript:document.querySelectorAll('html,body,body *').forEach(e=>e.style=(e.getAttribute('style')||'')+';background:#111;color:#'+(/^(A|BUTTON)$/.test(e.tagName)?'47B':'EEE'))

document.querySelectorAll('html,body,body *')
.forEach(e=>e.style=(e.getAttribute('style')||'')
+';background:#111;color:#'
+(/^(A|BUTTON)$/.test(e.tagName)?'47B':'EEE'))
