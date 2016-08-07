/**
 * Created by Parkash on 3/28/2015.
 */

//alert("hi");

 list=[];
function addelements()
{

    list.push(document.getElementById('additems').value);

    document.getElementById('displayitem').innerHTML=list;
    console.log(list);


}

function remve()
{
var remove=document.getElementById('removeitems').value;
    console.log(remove);
   var pos=list.indexOf(remove);
   console.log(pos);
    delete list[pos];
    document.getElementById('afterdelete').innerHTML=list;
    console.log("after del"+list);

}

