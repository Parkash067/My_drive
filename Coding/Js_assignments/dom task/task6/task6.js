/**
 * Created by Parkash on 2/18/2015.
 */
function drawtable()
{
    var rows=document.getElementById('row').value;
    var columns=document.getElementById('column').value;


   // var table=document.getElementById('myTable');
    if(rows>0 && columns>0) {
        for (var i = 0; i < rows; i++) {
            var row = document.createElement('tr');


            for (var j = 0; j < columns; j++) {
                var cols = document.createElement('td');
                var colstxt = document.createTextNode("Row" + i + "Cell" + j);
                cols.appendChild(colstxt);
                row.appendChild(cols);
                document.getElementById('myTable').appendChild(row);
            }
        }
    }
    else{
        alert("Minimum limit of rows and columns is one");
    }
}