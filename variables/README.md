```
@c: negation(#ee4466,#111);
@b: #aabbcc;

h1 {
    background-color: lighten(@c, 25%);
    color: @c;
    &:hover {
        color: #000000;
    }
}

p {
    color: saturate(@b,50%);
}
```
