---
---
<style>
.hero-1 .-title a,
a { color:#47b;text-decoration:none }
a:hover { text-decoration:underline;text-underline-offset:.1em }
hr { border-color:grey }
#_article { margin-bottom:4rem }
#_credit {
font-size:.83rem;
position:relative;
text-align:right;
margin:2rem 0;
}
.darkswitch {
display:inline-block;
border:.2em outset #47b;
padding:.6em 1em;
border-radius:2em;
text-decoration:none !important;
box-shadow:2px 5px 5px #00000070;
}
.darkswitch:active { border-style:inset }
.hero-1 { margin:20vh auto 26vh auto }
</style>
<div class="hero-1">
<h1 align="center" class="-title">
<a class="darkswitch" href="{% include darkswitch.js %}">Dark Switch</a>
</h1>
<p align="center" class="-desc"><b>{{ site.description }}</b></p>
</div>
<script src="{{ site.github.url }}/assets/js/darkswitch.js?v={{ site.github.build_revision }}"></script>

***

Some website does not support dark mode or use a single theme while neglecting the other.
The **Dark Switch** button can force website to choose your desired background.
Allowing you to switch between dark and light theme.
Save or drag the **Dark Switch** button (above) to your bookmark.
You may also create new bookmark containing the following script.
{: .justify-text }

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

&nbsp;

***
