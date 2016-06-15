---
title: "The Bigger, Better Breadboard"
layout: post
images: /images/bigger-better-breadboard
---

TL;DR: This project is a breadboard, blown up to 10x scale, and fitted with a whole mess of kid-and workshop friendly components. Why? For science!  And workshops, demos and other hands-on events where electronics should be played with. 
![The Bigger Better Breadboard in action][tldr]

For the full files, check out the github page: 
https://github.com/tekdemo/bigger-better-breadboard

### Conception:
While bantering about fun things we could build for the local Portland Mini Maker Faire, I thought one fun thing would be to simply make a normal breadboard huge.

One of the primary things I wanted to solve with this was the difficulty in explaining how a breadboard _works_. Anyone who's taught a workshop probably had the experience of seeing your pupils jam things in a breadboard without understanding what's happening. Or, conversely, simply mimicking an example, because in theory, that _should_ work. Something large enough to just look at would dramatically simplify this by making the board explain itself a bit better.

One of the other things (back to workshops), is helping demonstrate circuits to a group. Regular breadboards require a lot of hunkering down around a master, which really limits the working size of the class.

### Stage 1: Planning Potential Parts
First up, BOM selection. Since this happens to be a breadboard, the connectors we went with looked like the major primary cost driver. We had planned on building 3, so that turns out to be a LOT of female connectors. 
The first thing we looked at was potentially using a headphone jack, since it was one of the cheapest connectors we could find, and also very durable. However, after scrolling through pages of connectors on Digikey and mouser, we got ruled out by one critical issue.
![How do you build with this?][headphone-jack]
The total lack of panel-mount headphone jacks meant that the eventual assembly process would consist of some supplemental support to align them with the mounting plate. Actually wiring them would be another issue, since they all would have either SMD or through hole pins, neither of which is great to solder to freehand. So, assembly concerns ruled this out. 

Laen to the rescue with a great suggestion: Banana plugs! They're a bit more expensive (~30%), but exactly the form factor we need. Keyed to not spin, bolt nicely to the mounting plate, and crazy amounts of durable. 
![This half looks nothing like a banana][banana-plug]

Since that's essentially the only major part, we run to the build stage and get cracking on the board.

### Stage 2: Building the breadboard

Since I have access to a laser cutter and boatloads of panel backing board<span title="essentially recycled cardboard pressed into a laminate">^</span>, the design process basically was "how to get this into my laser". With the components selected, I wanted to quickly iterate on the basic design. First up was a small jig to figure out the hole size for the banana plugs. 
![Only slightly larger than the datasheet suggests][test-fit]
Success! with a few minutes of lazing, the best size was empirically found at 0.03" extra space all around. On to the next stage, a full sized prototype to see where I would go wrong next

![It's recycled, that makes the weird appearance OK][cut-test]
A few more minutes on the laser, and another prototype is all set up. And, here comes discovery number 1: I _really_ need to rotate some of the plugs. The top side is totally round, which is great. However, the bottom is very directional, and connecting the wires would be very difficult if they're the wrong way. So, a revision on the board files, and back to work.

![Fits like a charm!][proto-assembley1]

With the general layout figured out, I wanted to start looking at how to color everything. Since I have a lot of room, it would be helpful to highlight the connections that a breadboard makes using colors. So, to that end, I whipped up a small stencil to figure out the width of the lines. 
![chop chop!][stencil-test-cutting]
![][stencil-test]
Fits quite nicely, and the connectors I had put in work great for aligning it. But, in practice actually pretty hard to get a good feel for how wide the lines are with this, so I wound up replacing it for a stencil to get the feel of it. To the laser cutter!

![Almost like instant paint][paper-stencil]
THIS looks much better. Having the stencil over the entire board really made the lines pop. Initially, I wasn't too thrilled about the chamferring on the edges, so that got a little tweak before the full sized stencils. 
![Laser Action shot!][stencil-cutting]

![Fully painted prototype][painted-prototype]
Dang! You can see the really nasty streaks on this one where the paint looks blotchy. Remember the bit where I said this is panel-backing board? Well, in actuality, it's basically pressed cardboard, and a bit of glu. One of the things they do with it is drill lots of holes into it, and after that it's not too useful to the fab, so they use it to protect the panels during shipping. And to hold the stack of panels and backing board together, they use masking tape. Those splotches? That's where the tape peeled up the cardboard. So, that's certainly a bit of a bummer. But, not enough to be a deal breaker, so on to assembly!

![A test fit for the cable! Works wonderfully!][first-plug]

![Assembly of all 180 plugs on this board. Took a while...][plug-assembly]

![Bus wire being put to use][wire-placement]
Remember that bit where I mentioned rotating the part? This is where it matters. If I hadn't, then the power rails would be oriented just like the row connections, and assembly would involve a lot more weaving wire. 

![POST-ASSEMBLY ACTION SHOT][post-assembly-action-shot]
After all the solder joints, I was VERY glad to get to this point. Which is to say, done with 1 of the 3 breadboards. 

### Stage 3: Adding components
Since a breadboard is basically useless without components, the next step was to make some components. The original idea was to fabricate full 3D models of these. However, the Resistor kind of turned out with some huge logistical difficulties.

![This was fairy boring to look at and also unpleasant to work with][resistor]

As a result, this was somewhat scrapped, and the PCB version was used instead. 

One thing I made sure of for the components was that they'd be failsafe. 


### Stage 4: Fail-resistant-LEDS
This part is fairly lengthy, so it's broken out in it's [own segment.](LED.md)

### Reception
Amazing! The project was a hit with the smaller crew, who could _finally_ jam random electronics together without causing any damage whatsoever. We had a great deal of mini makers play with this. 

On the whole, I found that this was the most interesting to two different classes of people: Educators who were interested in seeing them for workshops, and parents. The latter came as a surprise. Parents had a lot of fun explaining the parts to their kids, who in turn loved ignoring them and plugging things in randomly. 

### Hindsight

The connectors we went with _definitely_ played a more than significant role with respect to the look and feel of the project. This was one of those things where going forward, it's something I'll pay more attention to on my general projects.

This project was also one of the first time I really applied Adam Savage's advice of "If you're going to build one, build 4". At every stage, I wound up having a couple extra on hand, which was great when things didn't quite go as expected. Having the spares seriously reduced my stress on this, since it was much less important that I have every bit on hand make it through intact. If something needed to get destroyed to figure out, no big deal! This was hugely helpful in fabricating the LEDs, since there was a LOT of first time exposure to some of those concepts.

[tldr]: "{{images}}/2014-08-21 21.48.33.jpg"
[fit-test]: "{{images}}/2014-07-25 20.13.13.jpg"

[cut-test]: "{{images}}/2014-07-26 16.34.03.jpg"
[proto-assembley1]: "{{images}}/2014-07-26 16.36.29.jpg"
[stencil-test]: "{{images}}/2014-07-26 22.09.15.jpg"
[stencil-test-cutting]: "{{images}}/2014-07-26 22.04.42.jpg"

[paper-stencil]: "{{images}}/2014-07-27 14.49.03.jpg"
[stencil-cutting]: "{{images}}/2014-07-27 16.51.32.jpg"

[color-test]: "{{images}}/2014-08-01 18.10.40.jpg"

[painted-prototype]: "{{images}}/2014-08-04 19.24.58.jpg"
[first-plug]: "{{images}}/2014-08-05 00.06.47.jpg"


[plug-assembly]: "{{images}}/2014-08-21 21.48.33.jpg"

[post-assembly-action-shot]: "{{images}}/2014-09-10 00.58.10.jpg"

[resistor]: "{{images}}/2014-09-06 22.12.02.jpg"]
