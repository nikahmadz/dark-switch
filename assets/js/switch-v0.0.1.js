((w,i)=>{
a=document.getElementsByName('color-scheme')
if(a)e=a[0]
if(e){b=e.content;s=['dark','light'];x=(b==s[0])?1:0;w[i]=()=>{e.content=s[x++];if(x>s.length-1){x=0}}}
})(window,'flickSwitch')
