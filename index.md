---
---
<style>
#_main { font-family:sans-serif }
#_credit { font-size:.83rem }
#the-switch {
font-size: 1.5rem;
padding: 0.25em 1em;
border-radius: 1em;
background-color: black;
color: white;
box-shadow: 2px 5px 5px #00000070;
position: relative; top: -20vh;
}
</style>
{% include hero/1.html %}

<script>(function(w,i){
a=document.getElementsByName('color-scheme');
if(a){e=a[0]}
if(e){
b=e.getAttribute('content');s=['dark','light'];x=(b=='dark')?1:0;
w[i]=function(){e.setAttribute('content',s[x++]);if(x>s.length-1){x=0}}
}
})(window,'toggleTheme')</script>
<p align="center"><button id="the-switch" onclick="toggleTheme()" title="Toggle Color Scheme (Light/Dark)">Try me</button></p>
