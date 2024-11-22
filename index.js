
let count=0;
function changeText()
{
    document.getElementById("text").textContent=document.getElementById("inputText").value;
    count++;
    document.getElementById("counter").textContent=count;
}