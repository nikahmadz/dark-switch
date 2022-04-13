/* (c) Copyright : github.com/nikahmadz  */
(()=>{
d=document;
n='color-scheme';
a=d.getElementsByName(n);
if(a){e=a[0]}else{e=d.createElement('meta');e.name=n}
w=window;m=w.matchMedia;o='dark',p='light';
b=e.content=(m&&m('(prefers-color-scheme:dark)').matches)?o:p;
s=[o,p];x=(b==o)?1:0;
w.darkswitch=()=>{
e.content=s[x++];if(x>s.length-1){x=0}
d.querySelectorAll('html,body *').forEach(
e=>e.style=(e.getAttribute('style')||'')
+';background:unset;color:'
+(/^(a$|ab|bu)/i.test(e.tagName)?'#47b':'initial')
)
}
})()
