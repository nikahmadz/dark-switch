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
