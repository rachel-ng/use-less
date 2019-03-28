```
@c: negation(#ee4466,#111);
@b: #aabbcc;    

.box {
    width: 100px;
    height: 100px; 
    display: inline-block;
    margin: 10px; 
}

.box1 {
    background: @c; 
    .box();
}

.box2 {
    background: saturate(difference(@c, #111),15%); 
    .box();
}

.box3 {
    background: tint(@c,25%); 
    .box();
}

.box4 {
    background: average(red,#111);
    .box();
}

.box5 {
    background: saturate(difference(@b, #111),15%);
    .box();
}

.box6 {
    background: multiply(teal,#fff);
    .box();
}

.box7 {
    background: saturate(@b, 30%);
    .box();
}

.box8 {
    background: average(@b,#ffffff);
    .box();
}

.box9 {
    background: #77aa77;
    .box();
}

.box10 {
    background: saturate(#77aa77, 25%);
    .box();
}

.box11 {
    background: negation(#77aa77,#888888); //negation(@c,@b) 
    .box();
}

.box12 {
    background: average(#77aa77,#000000);
    .box();
}

.box13 {
    background: yellow;
    .box();
}

.box14 {
    background: average(yellow,#fff);
    .box();
}

.box15 {
    background: difference(yellow,#ffffff);
    .box();
}

.box16 {
    background: mix(yellow, red);
    .box();
}
```
