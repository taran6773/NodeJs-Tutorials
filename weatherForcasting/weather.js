const curDate = document.getElementById("date");
let weathercondition = document.getElementById("weathercondition");

const tempStatus = "{%tempStatus%}";
if(tempStatus == "Sunny"){
  weathercondition.innerHTML= "<i class='fa-solid fa-sun 'style'=color:#eccc68'></i>";
}else if(tempStatus == "Clouds"){
  weathercondition.innerHTML= "<i class='fa-solid fa-cloud' style='color:#eccc68'></i>";
}else if(tempStatus == "Rainy"){
  weathercondition.innerHTML= "<i class='fa-solid fa-cloud-rain' style='color:#eccc68'></i>";
}else{
  weathercondition.innerHTML= "<i class='fa-solid fa-cloud' style='color:#eccc68'></i>";
}
const getCurrentDay = () => {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  let currentTime = new Date();
  let day = days[currentTime.getDay()];
  return day;
};

const getCurrentTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let now = new Date();
  let month = months[now.getMonth() + 1];
  let date = now.getDate();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let period = "AM";
  if(hours > 11){
      period = 'PM'
      if(hours >12){
          hours-=12;
      }
  }
  if(mins < 10){
      mins = "0"+mins;
  }
  return `${month} ${date} | ${hours}:${mins}${period}`;
};

curDate.innerHTML= getCurrentDay() + " | " + getCurrentTime();