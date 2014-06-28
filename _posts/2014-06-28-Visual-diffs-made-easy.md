---
tags: eagle previews
layout: post
---

Once I started doing board design, the thing that drove me nuts was trying to remember what I'd changed between revisions. However, since I started using Git, it wasn't too difficult to see exactly what I've changed by going back and comparing things. But there's some subtle things that you can't quite see, such as tweaking a mask layer, or relocating vias that might be a significant factor to the design, but nearly impossible to see. 

Enter Evil Mad Science Labs, and their excellent [blog post][emsl] detailing this problem. Since I've been fiddling around with revision control myself, I figured nows a good time to try and sort out a reasonable solution. 

I totally didn't, but I DID come up with something cool. I wrote some git hooks to simplify the process. It detects for a changed Eagle BRD file, runs it through a CAM processor, then looks for changed gerbers, and diffs them. Since it does this on EVERY git commit, using visual diffs is made incredibly easy and efficient. 

So, now with every Git commit for my eagle projects gets uploaded with something like this:

![Changes in Bottom Silk][bsilkdiff]

Oh look! I added a doodle of a servo looking dapper.

![Changes in Bottom stop mask][bstopdiff]

Shuffled a couple vias, so the monacle will actually be in gold. SUPER dapper. Only after this board design did I realize you can just tent vias, but it made for a very good demonstration for the diff tool.

![Changes in top stop][tstopdiff]

This makes it much easier to see that I've slightly shifted a couple parts.

![Changes on all bottom layers][bottomdiff]

OK, so this might not be immediately readable, but it definitely lets you distinguish a minor rev from a total overhaul. 

The best part is that since a git merge counts as a single commit, you can switch to a branch to track minor revisions, then merge it back in to see the "cumulative" change since you last got the board fabbed. This makes it simple and intuitive to see what's happening with a board design. It also very nicely works with your intuitive workflow for other git projects. 

However, this isn't a perfect, or even entirely usable solution yet. The git hook is written as a single, massive Bash script, so it's pretty difficult to tweak, and limits it to most likely only linux distros. It might run under Powershell on windows, or just normally on mac, but I haven't tested. 

I've made vague efforts to break it into a smaller, more modular set of scripts, but we'll see how well that works in the future. I've been having trouble calling sub-scripts from a git hook, so the project is stalled since it's at a "works for me" state. :)


[emsl]: http://www.evilmadscientist.com/2011/improving-open-source-hardware-visual-diffs/

[bsilkdiff]: https://raw.githubusercontent.com/tekdemo/eagle-preview-autogen/796769e88a65bbafc2b7e4621f3b6570875a87ad/sample-images/current.bottomsilkscreen.diff.png

[bstopdiff]: https://raw.githubusercontent.com/tekdemo/eagle-preview-autogen/796769e88a65bbafc2b7e4621f3b6570875a87ad/sample-images/current.bottomstopmask.diff.png
[tstopdiff]: https://raw.githubusercontent.com/tekdemo/eagle-preview-autogen/796769e88a65bbafc2b7e4621f3b6570875a87ad/sample-images/current.toplayer.diff.png
[bottomdiff]: https://raw.githubusercontent.com/tekdemo/eagle-preview-autogen/796769e88a65bbafc2b7e4621f3b6570875a87ad/sample-images/current.board-bottom.diff.png
