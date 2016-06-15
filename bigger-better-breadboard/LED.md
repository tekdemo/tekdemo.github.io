---
title: "Build log: The Bigger, Better Breadboard LED "
layout: post
images: /images/bigger-better-breadboard
---

### Design Goals:
The LED was designed with the classic "magic smoke" moment in mind. An important lesson in circuits is that "LEDs blow up". This project needed to capture that. On the other hand, if the LED _actually_ blows up, then the project needs constant maintenance and repair. This is far from ideal. 

So, the big goal of the LED was to capture the "exploding LED" moment, without requiring actual part replacement. This would require far more than a simple LED.

### Design
My first attempt to capture this behavior in a circuit looked like this:
![Back of the envelope sketch][2014-07-31 23.16.11.jpg]

The idea is that you have a small sense resistor and a mosfet. In normal conditions, these two form a near-zero resistance, acting as a straight LED (yay!). This means that the external series resistance controls the LED brightness, not my circuit. (Also yay)

However, because of the voltage rise of the sense resistor and the mosfet (roughly 2 ohms), there's a small voltage drop based on the current! This can be measured by the comparator. When the comparator senses a somewhat large voltage drop, it drives the transistor to the off position. This creates a VERY high voltage drop, which locks the off position. This has the effect of locking "off" until power is removed, and the LED is "replaced". Yay!"

This circuit was simplified, but promising.

### Prototyping
I opened up Eagle, started drafting some basic schematics, and started keeping track of values as I built the circuit on a breadboard. 

![The first working prototype!][led-proto-breadboard]

This was then made into a PCB, much like the others. However, for the LED, I decided it was worth it to make an actual "10x" scale version. For the purposes of prototyping and molding, we had one of these printed from Shapeways. 

This was then almost immediately put into use for a casting mold, which was my first time doing that particular process. 

![printed LED sitting in a cast ready to mold. ]({{images}}/2014-09-03 18.50.56.jpg)

![Red cup stuffed with resin]({{images}}/2014-09-03 19.22.57.jpg)

![The printed and cast LEDs, side by side]({{images}}/2014-09-04 16.51.52.jpg)

The casting process is probably best discussed elsewhere. My roomie Jason and I followed the directions, and got great results! Who'da thunk! Here's the important test: Does it do what we wanted?

[Off ...]({{images}}/2014-09-04 16.35.16.jpg)

[... ON!]({{images}}/2014-09-04 16.35.13.jpg)

It does! However, it's also insanely heavy. So, there was a bit of hacking at it to remove material. Since it was also a bit flexible, it was a real struggle. In the end, only 2 were suitable for use as a demo. 

### Final Design 
The final design and the proper theory is discussed in great detail in the [LED folder](https://github.com/tekdemo/bigger-better-breadboard/tree/master/LEDs) of the main github project. 

![Full schematic](https://github.com/tekdemo/bigger-better-breadboard/raw/master/LEDs/schematic.png)

Between the initial realization and final schematic, not a significant amount of changes were made. Just some simple filtering to ensure clean startup behavior, and a second op amp. Partly, this was needed to account for performance of the op amp, which didn't behave very well at the extreme low voltage on the inputs. But, it also served as a NOT gate, which corrected my initial schematic (which showed LOW as the mosfet ON voltage).  

### Fixing the circuit
After prototyping things and fabricating the board, I was super excited to get my boards back and assembled. But, disaster! 

Turns out Sparkfun's schematic symbol for the op-amp I used had power on _bottom_ and ground on _top_. This is pretty much 100% the opposite of every other schematic symbol for an op amp. Being such a jellybean schematic symbol, I failed to check for this. 

The net result is that every PCB I had fabricated was SUPER wrong. With only one PCB fab cycle between myself and the actual event, rework was 100% required to verify the layout before final fabrication. 

After painstakingly reversing the GND and Power pins on the op amps, it looked like this:
![Greenwires everywhere!]({{images}}/2014-09-09 22.08.35.jpg)

And, last but not least, this did get tested (carefully). 
![Success!]({{images}}/2014-09-11 00.17.10.jpg)

### Lessons Learned

Heat! Perhaps the worst thing about this circuit is that it's entirely unreliable due to the "sense diode". Despite my engineering courses' best efforts, I forgot about the very important temperature coefficient. As a result, when the LED gets hot (such as when in sunlight, outdoors, at Maker Faire in September), the voltage across the diode drops. This, in turn, allows for a higher current to pass through the LED before the system "locks". The Maker Faire hack we approached it with was simply upping the voltage on the power supply to compensate. 

More heat! Even worse, the LED formed a sealed, clear container, and basically collected light. This almost immediately burnt up one of the LED boards that we had attached into th e

Always check your footprints.

System current limiting. This was vaguely planned, but notable to mention. When handing this out at demos, use a current limited power supply. Since the plan is to make it fool proof, a good power supply set at about 500mA will prevent short circuits from breaking everything. 

Hollow shells are the best. It's probably obvious to anyone more experienced than I in casting. The part I made for the LED is MASSIVE, and took a huge amount of very expensive casting resin. The next problem with this is that it was then way too heavy, and had to be drilled out. So, it was a huge amount of work, mostly because I had no idea what I was doing. 
A more practical approach would have been to have rotoscoped this, or taken the time to do a hollow shell casting. This is especially true since drilling out the excess material took almost as much time as it would have taken to just do it right. 

[led-proto-breadboard]: "{{images}}/2014-09-01 13.41.22.jpg"
