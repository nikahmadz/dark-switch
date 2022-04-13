---
---
{% include hero/1.html %}

<script>(function(w,i){
a=document.getElementsByName('color-scheme');
if(a){e=a[0]}
if(e){
  s=['light dark','light','dark'];x=0;
  c=e.getAttribute('content')||s[x];
  w[i]=function(){e.setAttribute('content',s[x++]);if(x>s.length-1){x=1}}
}
})(window,'toggleTheme')</script>
<p align="center"><button onclick="toggleTheme()" title="Toggle Color Scheme (Light/Dark/Auto)">Try me</button></p>
