function calc(){
    var n=document.getElementById("given").value;
    if(n<0){
         document.getElementById("output").innerHTML="enter the positive number";
    }
    var out=0;
    for(var i=1;i<=n;i++){
        out=out+i;
    }
    //console.log(out);   
    document.getElementById("output").innerHTML=out;
}