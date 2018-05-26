function calc(){
    var n=document.getElementById("given").value.toLowerCase();
    if(n<0){
         document.getElementById("output").innerHTML="enter the positive number";
    }
   var result=n.split("").reverse().join("")
    if(result==n){
        document.getElementById("output").innerHTML="True";
    }
    else{
        document.getElementById("output").innerHTML="False";
    }
}