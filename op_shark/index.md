---
layout: post
title: OP Shark::Project Info
permalink: "/opshark/"
date: 2015-05-24 01:37:37
tags: pcb, art, robots, 
--- 

The OP Shark started from a running joke at the OSH Park office. We were fiddling with anagrams (we like terrible wordplay), and found among others, OP Shark, which immediately made us giggle a bit and think of an Austin Powers style shark with a laser on it's head. Kelly made the original version, which consisted of a sticker pack, some sticky notes, and a label. That was placed next to the existing sticker sailboat, where OPSHark v0 made its home.
![The robot seems pleased with his company][original-opshark-with-boat]

For Maker Faire 2015, the OSHPark crew decided that once again, we need to do something insane, silly, and awesome to surprise Laen during Bring-A-Hack. So, we launched a secret build campaign properly with a brainstorming session, some spare parts from the crew, and a dazzlingly short build schedule. After a rather crazy 2 weeks, we have the end result, in magnificent glory, was OPShark.
![OPShark V1][opshark-v1]

## Media
Other folks have the best pictures, so here they are! 

<!-- Place this tag in your head or just before your close body tag. -->
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<!-- Place this tag where you want the widget to render. -->
<div class="g-post" data-href="https://plus.google.com/+DrewFustini/posts/fPDT6qMKowy"></div>


<!--
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Thanks to <a href="https://twitter.com/oshpark">@oshpark</a> and <a href="https://twitter.com/laen">@laen</a> for hosting an awesome <a href="https://twitter.com/hashtag/BringAHack?src=hash">#BringAHack</a>! Love the purple shark hack!&#10;<a href="https://twitter.com/hashtag/MakerFaire?src=hash">#MakerFaire</a> <a href="https://twitter.com/hashtag/mfba15?src=hash">#mfba15</a> <a href="http://t.co/S9ZNu3WGtR">pic.twitter.com/S9ZNu3WGtR</a></p>&mdash; Drew Fustini (@pdp7) <a href="https://twitter.com/pdp7/status/600196735843991553">May 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
-->

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Aaaand <a href="https://twitter.com/oshpark">@oshpark</a> OSHShark makes an entrance at <a href="https://twitter.com/hashtag/BringAHack?src=hash">#BringAHack</a> <a href="http://t.co/22g42sm8pV">pic.twitter.com/22g42sm8pV</a></p>&mdash; Sophi Kravitz (@SophiKravitz) <a href="https://twitter.com/SophiKravitz/status/600120736250900482">May 18, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


## TL;DR Build log and Materials:
For the general shape of the shark, floral foam was carved up in the vauge shape of a pointer shark. To prevent dings, damage, and adhesion concerns, it was then coated with Elmers glue to toughen it up. 

The fins were build out of a thin plastic cutting board, a few eye bolts, and wires. A servo controls each one. For the tailfin, 2 thin pieces of cutting board are used for stiffness along with some laser-cut wood acting like ribs. 

![Main components of the shark][structure-static]

![Fin animatronics][fin-static]


Once completed, the shark was wrapped with 3/4" foam batting to hide the hard bits, and wrapped in a cuddly fabric for maximum cuteness. Cat did the vast majority of the fabric works, from making the pattern to stitching things. 

![Sewing and stuffing][sewingandstuffing]

![Tail padding][padding]

The RC Car is pretty self simple, as it is a servo for steering and a motor for motion. 

The electronics were pretty simple, mostly due to everything being servos. A Teensy 3.1 handles all the control and IO. The RC Reciever is hooked to the Teensy using the [PulsePosition](https://www.pjrc.com/teensy/td_libs_PulsePosition.html) library, and those signals are simply recorded and passed along to the motor control and steering servos. The Teensy also uses those signals to animate the shark in response to the steering and speed. This makes it possible for the shark to appear to be swimming around, as it's motion is reactive to, rather than driven by, the controller. The animations done so far are making a "banking" motion with the fins when steering, and swinging the tail fin back and forth as it drives forward. The code I wound up with was functional but messy, since I started from a "test sketch" and then never cleaned it up, and then we broke the shark in numerous different ways. Some of it was due to being hugged too much. So, that's ongoing. 

The final component was a fashionable blinky hat, to make the shark look exceptionally suave. This contained a Lillypad, battery, and some Neopixels. The real trick was Kelly's stellar work with glue and fabric, converting a tiny St Patty's day hat into something considerably more amazing. 

![Reference Shark showing off blinking][reference-shark-blinky]

![Reference Shark modelling the hat][reference-shark-hat]




Project Writeup
--------------
A proper build log is in progress, but taking longer than expected. Will be updated shortly. 

<!--
[Source files and general information][source]

[Testing and Design][testing-design]

[Structure Assembly][assembly]

[Sewing and Plushification][sewing]

[The Secret Hat][hat]

[Lessons Learned][lessons]
-->


[original-opshark-with-boat]: {{ site.baseurl }}/op_shark/images/2015-05-20 14.32.51.jpg
[opshark-v1]: {{ site.baseurl }}/op_shark/images/2015-05-17 18.02.32.jpg

[structure-static]: {{ site.baseurl }}/op_shark/images/2015-05-11 22.09.17.jpg
[fin-static]: {{ site.baseurl }}/op_shark/images/2015-05-12 23.03.21.jpg
[sewingandstuffing]: {{ site.baseurl }}/op_shark/images/2015-05-15 20.14.33.jpg
[padding]: {{ site.baseurl }}/op_shark/images/2015-05-17 00.53.34.jpg
[reference-shark-blinky]: {{ site.baseurl }}/op_shark/images/2015-05-16 23.47.16.jpg
[reference-shark-hat]: {{ site.baseurl }}/op_shark/images/2015-05-20 18.13.40.jpg
