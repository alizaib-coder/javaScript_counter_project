let endDate='30 June 2024 11:00 PM'
document.querySelector('#endDate').innerHTML=endDate
const input=document.querySelectorAll("input")
function clock() {
const end=new Date(endDate)
const now=new Date()
const diff=(end-now)/1000; //ya wali line miliseconds main tmei deti hy
    // console.log(diff);
if (diff<0) {
    return now
}
    //convert into days::
input[0].value=(Math.floor((diff/3600/24)));
  //convert into hours::
input[1].value=Math.floor(diff/3600)%24
  //convert into minuts::
input[2].value=Math.floor(diff/60)%60
  //convert into minuts::
input[3].value=Math.floor(diff)%60

}
setInterval(()=>{
    clock()
},1000)