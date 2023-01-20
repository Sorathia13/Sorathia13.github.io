var FirstItem = document.getElementById('bg-row1');
var SecondItem = document.getElementById('bg-row2');
var ThirdItem = document.getElementById('bg-row3');

;(function(){

    var throttle = function(type, name, obj){
      var obj = obj || window;
      var running = false;
      var func = function(){
        if (running){ return; }
        running = true;
        requestAnimationFrame(function(){
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };
    
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
    FirstItem.style.transform = "translate(-" + window.pageYOffset*2 + "px, 0)";
    SecondItem.style.transform = "translate(" + window.pageYOffset*2 + "px, 0)";
    ThirdItem.style.transform = "translate(-" + window.pageYOffset*2 + "px, 0)";

})

function makeItBigger() {
    var cv = document.getElementById("mon_cv");
    var biggerCV = document.getElementById("biggerCV");
    if (cv.style.display === "none") {
        cv.style.display = "flex";
        biggerCV.style.display = "none";
    } else {
        cv.style.display = "none";
        biggerCV.style.display = "flex";
    }
}