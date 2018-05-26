
function calc(){
    var n=document.getElementById("given").value;
    checkout(n);
    var out=fact(n);
    //console.log(out);   
    document.getElementById("output").innerHTML=out;
}
function checkout(n){
    if(n<0){
        document.getElementById("output").innerHTML="negative values not allowed";
    }
}
function fact(n,result=1){
    if(n==1){
        return result;
    }
    return   fact(n-1,result*n);
    //console.log(result);
}