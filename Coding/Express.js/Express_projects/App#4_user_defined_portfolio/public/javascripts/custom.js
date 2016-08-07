/**
 * Created by pk on 10/25/2015.
 */
 function validate()
{

    var about=document.getElementById('about').value;
    about=about.length;
    var skills=document.getElementById('skills').value;
    skills=skills.length;

    if(about<150 || about >200) {
        alert("Kindly enter between 150 - 200 characters in about field");
        return false;}
    else if(skills<150 || skills>200) {
        alert("Kindly enter between 150 - 200 characters in skill field");
        return false;}

}

function validate1(id) {
    var check=document.getElementById(id).value;
    var count=check.length;

    if(count>150 && count<200)
    {document.getElementById(id).style.borderColor="lightgreen";}

    else {document.getElementById(id).style.borderColor = "red";}

}