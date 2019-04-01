# use-less
presentation for softdev 

## Server-Side / Command Line Usage
```
$ npm install -g less
$ lessc styles.less styles.css 
```

## Client-Side / Browser Usage
```
<link rel="stylesheet/less" type="text/css" href="styles.less"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js"> </script>
```

## Variables
```
@width: 10px;	
@height: @width + 10px;
@bg: #ffffff; 

#header {
width: @width;
height: @height;
background: @bg;
}
```

```
#header {
  width: 10px;
  height: 20px;
  background: #fffff;
}
```

## Mixins
```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

```
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

## Nesting
```
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
  &:hover {
    color: #ffffff;
  }
}
```

```
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
#header:hover {
  color: #ffffff;
}
```

## Operations
```
@conversion-1: 5cm + 10mm;
@conversion-2: 2 - 3cm - 5mm;

@incompatible-units: 2 + 5px - 3cm;

@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

@base: 2cm * 3mm;

@color: #ff0000 / 2;
background-color: #ee4466 + #111;
```
```
@conversion-1: 6cm;
@conversion-2:-1.5cm;

@incompatible-units: 4px;

@base: 5%;
@filler: 10%;
@other: 15%;

@width: 6cm; 

@color: #800000;
background-color: #ff5577;
```
