/* (c) Copyright : github.com/nikahmadz  */
(()=>{
d=document;
n='color-scheme';
a=d.getElementsByName(n);
if(a){e=a[0]}else{e=d.createElement('meta');e.name=n}
b=e.content='dark';s=[b,'light'];x=(b==s[0])?1:0;
window.flickSwitch=()=>{
e.content=s[x++];if(x>s.length-1){x=0}
d.querySelectorAll('html,body *').forEach(
e=>e.style=(e.getAttribute('style')||'')
+';background:unset;color:'
+(/^(a$|ab|bu)/i.test(e.tagName)?'#47b':'initial')
)
}
})()
