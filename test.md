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

<script src="{{ site.github.url }}/assets/js/switch-v0.1.0.js?v={{ site.github.build_revision }}"></script>
<p align="center"><button id="the-switch" onclick="darkswitch()">Try Me</button></p>

***

## Usage

Drag the above **Try Me** button to your bookmark or create a new bookmark containing the following script.

```js
javascript:(()=>{a=['light','dark'];d=document;d.querySelectorAll('html,body,body *:not(noscript,script,style,link,hr,br,mark,input,select,meter,progress)').forEach(e=>{t=e.tagName;s='initial';if(/^a$|abbr$/i.test(t)){s='#47b'}e.style=(e.getAttribute('style')||'')+';background:unset;color:'+s});e=d.getElementsByName(n='color-scheme')[0];m=matchMedia;if(!e){e=d.createElement('meta');e.name=n;d.head.appendChild(e)}s=a.indexOf(c=e.content);x=s<0?c?m&&m('(prefers-'+n+':dark)').matches?1:0:0:s;e.content=a[x=++x>1?0:x]})()
```

## Found bug ?

Lets [discuss][] about it or file an [issue][]

[discuss]: https://github.com/nikahmadz/dark-switch/discussions "Go to Discussions"
[issue]: https://github.com/nikahmadz/dark-switch/issues "Go to Issues"

## Sponsor

❤️ If you use this work and liked it, **please consider [supporting my work][pay]**.

[pay]: https://nikahmadz.github.io/#!pay "See payment options"

## License

[MIT][] licensed - [nikahmadz][]

[MIT]: https://github.com/nikahmadz/central/blob/main/LICENSE "View license"
[nikahmadz]: https://nikahmadz.github.io "Visit my website"
