# bsc-slider
A slideshow jquery plugin.

Usage
----


#### Html
```html
<div class="slider">
  <img src="assets/imgs/img1.jpg"/>
  <img src="assets/imgs/img2.jpg"/>
  <img src="assets/imgs/img3.jpg"/>
  <img src="assets/imgs/img4.jpg"/>
  <img src="assets/imgs/img5.jpg"/>
</div>
```
#### Javascript
```js
$('.slider').bscSlider();
```

Options
----

```js
$('.slider').bscSlider({
  autoplay        : true,
  navigation      : false,
  duration        : 6000,
  effect          : 1,
  effect_speed    : 750,
  easing          : 'swing',
  height          : 300
});
```

* `autoplay`   : enables auto play of slides
* `navigation` : enables navigation arrows
* `duration`   : time between 2 slides (in milliseconds).
* `effect`     : transition mode for slide changes.<br/>
  Accepted transition : 
    `none`, `fade`, `slideOverTop`, `slideOverRight`, `slideOverBottom`, `slideOverLeft`, `slideRight`, `slideLeft`, `slideTop`, `slideBottom`, `slideRemoveRight`, `slideRemoveLeft`, `slideRemoveTop`, `slideRemoveBottom`, `parallaxRight`, `parallaxLeft`, `parallaxTop`, `parallaxBottom`<br/>
  Each transition can be defined by a number (eg: 0 = none, 1 = fade, etc..).
* `effect_speed` : transition speed (in milliseconds).
* `easing`     : jQuery-UI easing functions.
* `height`     : change slides height
