---
version: v0.2.2
---
<div class="hero-1">
<h1 align="center" class="-title">
<a class="darkswitch" href="{% include darkswitch.js %}">Dark Switch</a>
</h1>
<p align="center" class="-desc"><b>{{ site.description }}</b></p>
<div class="-verpos"><div class="-ver" align="center">{{ page.version }}</div></div>
</div>
<script src="{{ site.github.url }}/assets/js/darkswitch.js?v={{ site.github.build_revision }}"></script>

***

<p align="center"><b>Wishing for dark mode and other themes?</b></p>

**Dark Switch** can force any website to cycle through your desired theme.
Save or drag the big **Dark Switch** button (you saw above) to your bookmark.
You may also create new bookmark containing the following script.
{: .justify-text }

```js
{% include darkswitch.js %}
```
{: .normal-wrap }

## Customize themes

You can customize what you want **Dark Switch** to apply.
A theme consist of 4 colors. `// default were used if not specified`
{: .justify-text }

```js
// theme   = [background,text,paragraph,link]
var dark   = ['#222','#DDD'];
var light  = ['#DDD','#222'];
var blue   = ['#036','#ABC','#68B','#5A4'];
var tan    = ['#281d15','#DA8','#975','#ED7'];
darkswitch( [dark,light,blue,tan] ); // cycle through themes
darkswitch( [dark] ); // apply specific theme

```
<script>
var dark   = ['#222','#DDD'];
var light  = ['#DDD','#222'];
var blue   = ['#036','#ABC','#68B','#5A4'];
var tan    = ['#281d15','#DA8','#975','#ED7'];
</script>
<p><b>Examples
&middot; <a href="#" onclick="event.preventDefault();darkswitch([dark])">Dark</a>
&middot; <a href="#" onclick="event.preventDefault();darkswitch([light])">Light</a>
&middot; <a href="#" onclick="event.preventDefault();darkswitch([blue])">Blue</a>
&middot; <a href="#" onclick="event.preventDefault();darkswitch([tan])">Tan</a>
</b></p>

## Contribute

Follow this project on [GitHub][github].
Have great ideas to talk about or just wanna chat ? .. Lets [discuss][] about it.
Found bugs ? file an [issue][].
{: .justify-text }

[github]: https://github.com/nikahmadz/dark-switch/ "Follow this project"
[discuss]: https://github.com/nikahmadz/dark-switch/discussions "Go to Discussions"
[issue]: https://github.com/nikahmadz/dark-switch/issues "Go to Issues"

## Sponsor

❤️ If you use this work and liked it, **please consider [supporting][pay]**.

[pay]: https://nikahmadz.github.io/#!pay "See payment options"

## License

[MIT][] licensed - [nikahmadz][]

[MIT]: https://github.com/nikahmadz/dark-switch/blob/main/LICENSE "View license"
[nikahmadz]: https://nikahmadz.github.io "Visit my website"

&nbsp;

***
