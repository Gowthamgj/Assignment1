function calc(){
    var arr=document.getElementById("given").value;
    var out=0;
    var obj=JSON.parse(arr);
   for(key in obj){
       out=out+obj[key];
   }
   document.getElementById("output").innerHTML=out;
}