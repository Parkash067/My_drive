function fetch()
{
    var ary_attribute=[];
    ary_attribute.push(document.getElementById('w3r').getAttribute('href'));
    ary_attribute.push(document.getElementById('w3r').getAttribute('id'));
    ary_attribute.push(document.getElementById('w3r').getAttribute('type'));
    ary_attribute.push(document.getElementById('w3r').getAttribute('rel'));
    ary_attribute.push(document.getElementById('w3r').getAttribute('target'));
    ary_attribute.push(document.getElementById('w3r').getAttribute('hreflang'));
    for(var i=0;i<ary_attribute.length;i++) {
        document.write(ary_attribute[i] + "<br>");
    }





    /* attributes=document.getElementById('w3r').getAttribute('href');
     document.writeln("type"+attributes+"<br>");*/

   /* attributes=document.getElementById('w3r').getAttribute('rel');
    document.writeln("rel"+attributes+"<br>");

    attributes=document.getElementById('w3r').getAttribute('id');
    document.writeln("id"+attributes+"<br>");*/

}
