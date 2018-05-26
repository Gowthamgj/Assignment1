function calc(){
    var arr=document.getElementById("given").value;
    var obj=JSON.parse(arr);
    var finarr=[]
    var ansarr=[]
    for(key in obj){
        finarr.push(obj[key])
    }
     document.getElementById("output").innerHTML=finarr.filter(isPalindrome);
}
function isPalindrome(str){
    var real=str;
    if(real==str.split("").reverse().join("")){
        return true;
    }
    else{
        return false;
    }
}