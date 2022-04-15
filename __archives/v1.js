/* (c) Copyright : github.com/nikahmadz  */

/* v0.1.1 = highest compatibility */
javascript:(d=>{a=['light','dark'];f=(e,c='initial',b='unset')=>{e.style.color=c;e.style.background=b};d.querySelectorAll('html,body,body *:not(noscript,script,style,link,br,hr,mark,i,svg,input,select,meter,progress,pre *)').forEach(e=>{t=e.tagName;if(t=='P'){f(e,'grey')}else if(/^(A|BUTTON)$/.test(t)){f(e,'#47B')}else{f(e)}});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[++x>1?0:x]})(document)

(d=>{
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
})(document)

if((t=e.tagName)=='HTML'){f(e,'#EEE','#111')}

/* v0.1.0 */

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
