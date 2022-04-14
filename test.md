---
---
<style>
hr { border-color:grey }
.hero-1 .-title a,
a { color:#47b;text-decoration:none }
a:hover { text-decoration:underline;text-underline-offset:.1em }
#_main { font-family:sans-serif }
#_layout { max-width:600px;margin:auto }
#_credit {
font-size:.83rem;
position:relative;
text-align:right;
}
.the-switch {
border: 0.2em outset #47b;
padding: 0.6em 1em;
font-size: 1.3rem;
border-radius: 2em;
text-decoration: none;
box-shadow: 2px 5px 5px #00000070;
position: relative; top: -18vh;
}
.hero-1 { margin:20vh auto 26vh auto }
</style>
{% include hero/1.html %}

<script src="{{ site.github.url }}/assets/js/darkswitch.js?v={{ site.github.build_revision }}"></script>
<p align="center"><button class="the-switch" onclick="darkswitch()">Try Me</button></p>
<p align="center"><a class="the-switch" href="{% include darkswitch.js %}">Bookmark Me</a></p>

***

## Usage

Drag the above **Try Me** button to your bookmark or create a new bookmark containing the following script.

```js
{% include darkswitch.js %}
```

## Found bug ?

Lets [discuss][] about it or file an [issue][].

[discuss]: https://github.com/nikahmadz/dark-switch/discussions "Go to Discussions"
[issue]: https://github.com/nikahmadz/dark-switch/issues "Go to Issues"

## Sponsor

❤️ If you use this work and liked it, **please consider [supporting][pay]**.

[pay]: https://nikahmadz.github.io/#!pay "See payment options"

## License

[MIT][] licensed - [nikahmadz][]

[MIT]: https://github.com/nikahmadz/central/blob/main/LICENSE "View license"
[nikahmadz]: https://nikahmadz.github.io "Visit my website"
