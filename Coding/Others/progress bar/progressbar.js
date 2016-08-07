/**
 * Created by Parkash on 1/19/2015.
 */

function drawprogressbar(total, obtain){
    var result=Math.round((obtain*100)/total);
    document.getElementById("sliderbar").style.width=result+'%';
    document.getElementById("slide").innerHTML=result+'%';
}