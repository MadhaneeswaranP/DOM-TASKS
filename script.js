function yes(){

var number=12345678;
var output=[];
var s=number.toString();
function change(n){
    if(output.length<s.length){
    var rem="";
    if(n!==0){
       rem=n%10 +""+ Math.trunc(n/10);
    }
    output.push(rem);
    change(rem);
    }
}
change(number);
var items=document.querySelector('#divid');
items.innerHTML=output;

}