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

<script src="{{ site.github.url }}/assets/js/switch-v0.0.1.js"></script>
<p align="center"><button id="the-switch" onclick="flickSwitch()" title="Toggle mode (Light/Dark)">Try me</button></p>
