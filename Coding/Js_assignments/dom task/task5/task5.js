/**
 * Created by Parkash on 2/17/2015.
 */

function insert_Row()
{
    var row=document.createElement('tr');
    var col1=document.createElement('td');
    var col2=document.createElement('td');

    var col1txt=document.createTextNode("New row");
    var col2txt=document.createTextNode("New row");

    col1.appendChild(col1txt);
    col2.appendChild(col2txt);

    row.appendChild(col1);
    row.appendChild(col2);
    document.getElementById('sampleTable').appendChild(row);
}