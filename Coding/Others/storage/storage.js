/**
 * Created by Parkash on 2/22/2015.
 */
var output = "LOCALSTORAGE DATA:\n------------------------------------\n";
/*ar length=localStorage.length;
 alert(length);*/
if (window.localStorage) {
    if (localStorage.length) {
        for (var i = 0; i < localStorage.length; i++) {
            output += localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i)) + '\n';
           /* alert(output);*/
        }
    } else {
        output += 'There is no data stored for this domain.';
    }
} else {
    output += 'Your browser does not support local storage.'
}
console.log(output);