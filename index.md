---
---
{% include hero/1.html %}

<script>(function(w,i){
a=document.getElementsByName('color-scheme');
if(a){e=a[0]}
if(e){
b=e.getAttribute('content');s=['dark','light'];x=(b=='dark')?1:0;
w[i]=function(){e.setAttribute('content',s[x++]);if(x>s.length-1){x=0}}
}
})(window,'toggleTheme')</script>
<p align="center"><button onclick="toggleTheme()" title="Toggle Color Scheme (Light/Dark)">Try me</button></p>
