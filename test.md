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
.darkswitch {
border: 0.2em outset #47b;
padding: 0.6em 1em;
border-radius: 2em;
text-decoration: none;
box-shadow: 2px 5px 5px #00000070;
}
.hero-1 { margin:20vh auto 26vh auto }
</style>
<div class="hero-1">
<h1 align="center" class="-title">
<a href="{{ site.github.repository_url }}">Dark Switch</a>
</h1>
<p align="center" class="-desc">{{ site.description }}</p>
</div>
<script src="{{ site.github.url }}/assets/js/darkswitch.js?v={{ site.github.build_revision }}"></script>

***

Some website doesn't support dark mode while some may use dark theme but neglect light.
The **Dark Switch** button can force website to render your desired background.
Save or drag the **Dark Switch** button to your bookmark.
You may also create new bookmark containing the following script.

```js
{% include darkswitch.js %}
```
{: .normal-wrap }

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