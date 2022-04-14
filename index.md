---
---
<style>
#_main { font-family:sans-serif }
#_credit {
font-size:.83rem;
right: 50%;
transform: translateX(calc(50% - 1.2em));
bottom: 2rem;
}
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

<script src="{{ site.github.url }}/assets/js/switch-v0.1.0.js?v={{ site.github.build_revision }}"></script>
<p align="center"><button id="the-switch" onclick="darkswitch()">Try me</button></p>
