```
@c: #ee4466 + #111111;
@b: #aabbcc;
    
h1 {
    background-color: @c;
    color: @c;
    &:hover {
        color: #000000;
    }
}

p {
    color: @b;
}
```
