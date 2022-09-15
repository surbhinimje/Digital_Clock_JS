
function Time(){
  var date=new Date();
  var day =date.getDay();
  var date1=date.getDate();
  var hour=date.getHours();
  var month=date.getMonth();
  var minute=date.getMinutes();
  var second=date.getSeconds();
  var period="";
  var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  if (hour>=12){
    period="PM";
  }else{
    period="AM";
  }

  if(hour==0){
    hour=12;
  }else{
    if(hour>12){
      hour=hour-12;
    }
  }
  hour=update(hour);
  minute=update(minute);
  second=update(second);

  document.getElementById("calendar").innerText=days[(day-1)]+", "+date1+" "+months[month];
  document.getElementById("time").innerText=hour+":"+minute+":"+second+" "+period;

  setTimeout(Time,1000);

}

function update(t){
  if(t<10){
    return "0"+t;
  }
  else{
    return t;
  }
}
Time();
