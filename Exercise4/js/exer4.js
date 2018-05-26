function calc(){
    var n=document.getElementById("given").value;
    if(n<0){
         document.getElementById("output").innerHTML="enter the positive number";
    }
    var out=0;
    while(n>=2){
        n=n/2;
        out=out+1;
    }
    //console.log(out);   
    document.getElementById("output").innerHTML=out;
}