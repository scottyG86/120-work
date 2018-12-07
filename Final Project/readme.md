Scotty Graham

link goes here

# Summary

I have created an audio visualizer with some nice snowfall in the foreground. I used as many techniques I could squeeze into it. The logo in the front is my artist logo and I wrote the song. The background is a picture I took by McClay Flats and edited in photoshop.

## Details

I started off with just the middle logo (it was originally a green circle) to make sure I could get the audio proccesing to work (using my song). After that I started to work on the snow, this was the trickiest part as I had to spread the snow out enough so that it wasnt a wall of dots but was also frequent enough to seem realistic and somewhat relaxing. I tinkered around for about a day working to ge the optimal amount of spread before the snow was seen.

I finally found the sweet spot not only for the spread but also the timing with the music (In my mind at least). The snow used a class to create it as that was the most concrete way of creating a lot of particles in a consistent manner. The frequency bands were relativley simple, all I had to do was create a loop that made rectangles with heights according to the level of that frequency at certain spots along the screen, it was just some simple math for that.

Once I had everything in place I just had to add the background and my logo. I had to modify the code for the logo because I had been using a cricle and the image function uses a rectangle. I had to get creative with how to get it to pulse to the music (I tried to isolate it to the kick drum but there was a bunch of other sound using the frequency as well) but I got it to a working state and played around with a couple of my songs (I left the two in there that worked best as far as an actual display went).
