// var pos  = document.documentElement;
// pos.addEventListener("mousemove", function(e){
//    pos.style.setProperty('--x', e.clientX + "px")
//    pos.style.setProperty('--y', e.clientY + "px")
// })
// console.log("hello")
    
// document.addEventListener("mousemove", function(e){
//     var x = e.clientX;
//     var y = e.clientY;
//     console.log("hello1 " + x);
//     console.log("hello2 " + y);
// })
document.addEventListener("mousemove",function(e){
    var body = document.querySelector("body")
    var heart = document.createElement("span");

    var x= e.offsetX;
    var y= e.offsetY;
    heart.style.left = x+ 'px'
    heart.style.top = y+ 'px'
    body.appendChild(heart);
    var size = Math.random() *100;
    heart.style.width = 16 +size+'px'
    heart.style.height = 16+size+'px'
    setTimeout(function(){
        heart.remove()
    },2000)
})