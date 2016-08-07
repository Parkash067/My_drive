/**
 * Created by Parkash on 2/18/2015.
 */
function getOptions(){
var numberOfItems=document.getElementById("mySelect").length;
    //var namesOfItems=document.getElementById("mySelect").selectedIndex;

    var namesofItems=document.getElementById('mySelect');
    for(var i=0;i<namesofItems.length;i++)
    {
       var names;//=namesofItems.options[i].text;
    numberOfItems+='\n'+namesofItems.options[i].text;
    }
    alert("No. of items="+numberOfItems);
}