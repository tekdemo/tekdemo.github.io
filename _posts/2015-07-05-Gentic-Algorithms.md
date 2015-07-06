---
tags: python, code, genetic algorithms
layout: post
---

Finally got an itch to do something in the pure programming range, and decided to play something totally new: Genetic Algorithms! Surprisingly, they're actually a lot of fun, and after a weekend, I have some neat demos to play with

First up, I attempted to figure out what the heck I was doing with some tutorials. If you've never read about what they are or what they're good for, [TheProjectSpot](http://www.theprojectspot.com/tutorial-post/creating-a-genetic-algorithm-for-beginners/3) has probably the most approachable intro I've seen.

However, that's still a LOT of code for a quick intro, so I decided to one-up that and produce a [20 line classless Python implementation](https://github.com/tekdemo/genetic-testing/tree/master/super-simple-demo). It's a boatload of comments, so hopefully someone finds it useful.

One of the things I'm really enjoying with this format of coding is that it's very neat and unpredictable in operation. My favorite example is one very cool bug from my first program [Stringmatch](https://github.com/tekdemo/genetic-testing/tree/master/stringmatch). That code simply makes random modifications to a string, and then the fitness is how close it is to a given string.

 The bug was caused by an error in my code that indicated what valid options were for selection. Initially, I gave it a list of valid characters with the code `list.extend(",.?!*_-'".split())`
This list was supposed to contain individual letters the code could use when changing out a letter.  However, I misunderstood the behaviour of `split`, so instead of adding a bunch of single characters, it actually added the string literal `,.?!*_-'` as an option that the code could pick when adding.

The way my fitness detection worked, being the right length was a significant fitness gain, when compared to actually having the correct letter sequence. Due to this, any time the sequence `,.?!*_-'` was the score went up 16 points, compared to 1 for correcting a character, or 3 points for adding a single letter. Here's what that looks like in practice

```
Best in generation   1 :he scoring -70
Best in generation   2 :he,.?!*_-' scoring -54
Best in generation   3 :he,.?!*_,.?!*_-'' scoring -39
Best in generation   4 :he,.?!*_,.?!*_-',.?!*_-' scoring -25
Best in generation   5 :he,.?!*_,.?!*_-',.?!*_-'k scoring -23
Best in generation   6 :he,.?!*_,.?!*_-',.v?!*_-'k scoring -21
Best in generation   7 :he,.?!*_,.?!*_-',.v?!*_-'ke scoring -18
Best in generation   8 :he,.?!*_,.?!*_-',.v?!*_-'ke,.?!*_-' scoring -2
Best in generation   9 :he,.?!*_,.?!*_-',.v?!*_-'ke,.?!*_-'t scoring 1
Best in generation  10 :he,.?!*_,.?!*_-',.v?!*_-'ke,.?!*_-'tc scoring 3
Best in generation  11 :he,.?!*_,.?!*_-',.v?!*_-'ke,.?!*_-'tc9 scoring 5
...
```

Even more amazingly, with a reasonable population size, a common case was that it would often insert that string so that the `!` actually was in the right place. Due to being a point higher than being _out_ of place, when you get to the end, the sequence is actually totally accurate, _despite_ the code not being able to actually select a `!` by itself.

```
Best in generation 185 :hello world! you will be deconstructed scoring 38
```

I was really pleased by this bug: My code found and exploited a programming error, leading to considerably faster iterations and code generation than it did _without_ that bug. Out of reluctance, I did fix it, but I'm always going to have to note this as the first time I programmed in a "ghost in the machine", so to speak. 
