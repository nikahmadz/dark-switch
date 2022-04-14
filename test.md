---
---
<style>
#_main { font-family:sans-serif }
#_credit {
font-size:.83rem;
position:relative;
text-align:right;
}
#the-switch {
font-size: 1.5rem;
padding: 0.25em 1em;
border-radius: 1em;
background-color: black;
color: white;
box-shadow: 2px 5px 5px #00000070;
position: relative; top: -18vh;
}
.hero-1 { margin:20vh auto 26vh auto }
</style>
{% include hero/1.html %}

<script src="{{ site.github.url }}/assets/js/switch-v0.1.0.js"></script>
<p align="center"><button id="the-switch" onclick="darkswitch()">Try me</button></p>

***

## The script

```js
javascript:(()=>{a=['light','dark'];d=document;d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress)').forEach(e=>{t=e.tagName;s='initial';if(/^a$|abbr$/i.test(t)){s='#47b'}e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[x=++x>1?0:x]})()
```

<p align="center"><a href="javascript:(()=>{a=['light','dark'];d=document;d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress)').forEach(e=>{t=e.tagName;s='initial';if(/^a$|abbr$/i.test(t)){s='#47b'}e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[x=++x>1?0:x]})()">Bookmark me</a>
