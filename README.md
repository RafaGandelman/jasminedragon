# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Rafael Neves

Time spent: 4 hours spent in total

Link to project: (https://glitch.com/edit/#!/jasmine-dragon)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added alternate game mode, that follows the Leaves from the Vine melody

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[Basic features](http://g.recordit.co/GEx0f2WBYu.gif)
[Extra features](http://g.recordit.co/l8LnSTFyKt.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://color.adobe.com/create/color-wheel - for the colors

https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript - for float to interger conversion

https://www.w3schools.com/howto/howto_css_round_buttons.asp - for adjusting the buttons

https://www.youtube.com/watch?v=wmAP2xvNs08&ab_channel=Academind - for learning positioning

https://www.youtube.com/watch?v=8ZDCp6t7bsQ&t=2255s&ab_channel=WebDevSimplified - for learning how to shape the buttons

https://pages.mtu.edu/~suits/notefreqs.html - for the frequencies of the sounds


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Before this project I’ve never seriously tried to learn any of the three languages, so I was apprehensive to start. It surprised me how easy it was and how well thought out and explained the guide was. Getting the basic setup didn’t take long and in less than an hour I had the basic game running.

Since I’m familiar with C++, a lot of things from JS came naturally. My issue however, came with the CSS file. At first I just followed the guide. All the buttons lined up nicely and it looked fine. Since I was making such good progress, I decided that I should add the extra features. The first four were all functions or changes to the JS file, which as I said came easely. It was the fifth item that was the most challenging.

Since I didn’t know the CSS commands on how to position and how to shape the buttons or text, it took me a long time and many tries to see which parameters affected what things. Luckily the Youtube algorithm knows me well and I remembered seeing a while back a “CSS battle”. In that video two programmers had a limited amount of time to code an image to the specific conditions of the challenge using only CSS. With this in mind, I rewatched the video paying close attention to what they did and how each attribute affected the image. After a few pauses and screenshots I felt that I had enough to get the buttons to the way I wanted them.

What surprised me was that while messing with them, I stumbled upon the current shape of the buttons and thought they looked like leaves, so I changed a few things and came up with the leaves from the vine game mode and the musical tones for the buttons.

One of the things I love about learning new languages and tools is that by making mistakes and working your way through challenges you sometimes find great new ideas and inspiration for future projects, or a better solution for the current one.  


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
For a while now I had this thought in my head that I should, at some point, learn how to set up a website. I dabbled a bit with HTML and looked up some things about JS. I just never had the drive to really take some time and learn any of them.

After this project I feel like I know a bit, but I’ve barely scratched the surface of what they can do. I wonder how to add text user input, how to deal with passwords or how to handle multiple users at once.

I’ve always had an affinity with dealing with backend development and the parts of this project I had the most fun on were the ones coding or changing things about the way the code handled the user inputs.

One thing that I kept thinking while making the game was about those older browser flash games. About how their developers came up with the ideas, but most importantly, how much work were they to develop. This project gave me a new appreciation for all the sites and programs I use, seeing that most of them look really nice and function without issues or bugs.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
In my introduction to computer science class, freshman year of college, the final project was to make a text based game using only C++. I was overly excited about this, had pages of ideas and things I wanted to do. However, something the teaching assistant said to me at office hours stuck with me to this day. I know these are Stephen King’s words, but she said that I should kill my darlings and save some things for my next project.

I know it sounds harsh, but she meant that usually while coming up with ideas for a project we create too many “darlings”. Simple ideas, or functionalities, that won’t individually take a lot of time, but aren’t necessary for the project's completion.

I always remind myself of this when writing my project ideas. What is necessary and what is just extra? For example, on this project, I could spend time finding the perfect font and size for the title. Also the exact shade of green, or the pixel perfect position of the buttons for any screen size. Any of these things wouldn’t individually take long, and I might do some of them between writing this and submitting the assignment, but they won’t make a noticeable difference.

It doesn't bother me that those things aren’t done. Because I know that I used the time I had debugging, commenting the code, adding the secondary game mode and many other features that have a greater impact on the user experience. If I had more time, I definitely would add every possible darling, but we should save some for the next one.




## License

    Copyright Rafael Neves

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.