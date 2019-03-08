var val;
var saved = localStorage.getItem('current_code');
val1='<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title><style type="text/less">';
val2='</style><script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.js"></script></head><body><h1>Less CSS</h1></body></html>';

function putcode(val){
  document.querySelector("iframe").srcdoc = val1 + val + val2;
  localStorage.setItem("current_code",val)
}

if (saved) {
  document.querySelector("textarea").value = saved;
  document.querySelector("iframe").srcdoc = val1 + saved + val2;
}
