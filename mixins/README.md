```
@c: negation(#ee4466,#111);
@b: #aabbcc;
@g: #77aa77;

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

@black: false;

.box3 {
    background: if(@black, black, tint(@c,25%)); 
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
    background: @g;
    .box();
}

.box10 {
    background: saturate(@g, 25%);
    .box();
}

.box11 {
    background: negation(@g,#666666);
    .box();
}

.box12 {
    background: average(@g,#000000);
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
    background: difference(yellow,#111111);
    .box();
}

.box16 {
    background: mix(yellow, red);
    .box();
}
```
