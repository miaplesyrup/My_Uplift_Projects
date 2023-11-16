const clock = document.getElementById("clock");
const timezone = document.getElementById("timezone");

// standard/military button
const timeFormat = document.getElementById("standardTime");


// color buttons
const teal = document.getElementById("teal");
const magenta = document.getElementById("magenta");
const salmon = document.getElementById("salmon");

// font buttons
const lucida = document.getElementById("font1");
const tahoma = document.getElementById("font2");
const impact = document.getElementById("font3");

setInterval(showTime, 1000);
let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = `${hour}:${min}:${sec}${am_pm}`;

function showTime() {
    // let time = new Date();
    // let hour = time.getHours();
    // let min = time.getMinutes();
    // let sec = time.getSeconds();
    // am_pm = "AM";

    // if (hour > 12) {
    //     hour -= 12;
    //     am_pm = "PM";
    // }
    // if (hour == 0) {
    //     hour = 12;
    //     am_pm = "AM";
    // }
 
    // hour = hour < 10 ? "0" + hour : hour;
    // min = min < 10 ? "0" + min : min;
    // sec = sec < 10 ? "0" + sec : sec;

    // currentTime = `${hour}:${min}:${sec}${am_pm}`;
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

function showTimeZone(){
    dateString = new Date().toString();
    timeZone = dateString.split(" ").slice(5, dateString.length).join(" ");
    document.getElementById("timezone").innerHTML = timeZone
}
showTimeZone();

let a = timeFormat.innerHTML = "Standard Time";
    
timeFormat.addEventListener("click", function(){
    timeFormat.innerHTML = "Military Time";
    hour = toMilitary(hour);
    clock.innerHTML = `${hour}:${min}:${sec}${am_pm}`
})

function toTwelveHour(hour) {
    let hourConversion;
    if(hour == 0){
      hourConversion = 12;
    } 
    else if (hour > 12){
      hourConversion = hour - 12;
    }
    else {
      hourConversion = hour;   
    }

    return hourConversion;
    
  }
  console.log (toTwelveHour(hour));
  console.log (toMilitary(hour));

  function toMilitary(hour){
    let hourConversion; 
    if(am_pm == "AM" && hour == 12){
      hourConversion = 0;
    }
    else if (am_pm == "AM" || (am_pm == "PM" && hour == 12)){
      hourConversion = hour;
    } else {
      // if (am_pm == "PM" && hour < 12){
      hourConversion = hour + 12;
    // }
    }
  
    return hourConversion;
  }
 




// let a = timeFormat.innerHTML = "Standard Time";
// // let b = timeFormat.innerHTML = "Military Time"

// timeFormat.addEventListener("click", function(){
//         timeFormat.innerHTML = "Military Time";
//         clock.innerHTML = `${toMilitary()}:${min}:${sec}${am_pm}`;
//         showTime();
// })
// function changeTimeVersion(clickedId){

//     if(clickedId == "twelveHourTime"){
//       hrsTwelveHrVersion = toTwelveHour(hrs);
//     }
//     else {
//       hrs = toMilitary(hrsTwelveHrVersion);
//     }
  
//     showTime();
//   }
  
//   function toTwelveHour(hour) {
//     let hourConversion;
//     if(hour == 0){
//       hourConversion = 12;
//     } 
//     else if (hour > 12){
//       hourConversion = hour - 12;
//     }
//     else {
//       hourConversion = hour;   
//     }

//     return hourConversion;
    
//   }
//   console.log (toTwelveHour(hour));
//   console.log (toMilitary(hour));

//   function toMilitary(hour){
//     let hourConversion; 
  
//     if(am_pm == "AM" && hour == 12){
//       hourConversion = 0;
//     }
//     else if (am_pm == "AM" || (am_pm == "PM" && hour == 12)){
//       hourConversion = hour;
//     } else {
//       hourConversion = hour + 12;
//     }
  
//     return hourConversion;
  
//   }
  
// change time format
// timeFormat.addEventListener("click", function(hour){
//     let convertedHrs;
  
//     if(hour == 0){
//       convertedHrs = 12;
//       timeFormat.innerHTML = "Standard Time";
//     } 
//     else if (hour > 12){
//       convertedHrs = hour - 12;
//       timeFormat.innerHTML = "Standard Time";
//     }
//     else {
//         if(am_pm == "AM" && hrs == 12){
//             convertedHrs = 0;
//         }
//         else if (am_pm == "AM" || (am_pm == "PM" && hour == 12)){
//             convertedHrs = hour;
//         } else {
//             convertedHrs = hour + 12;
//             timeFormat.innerHTML = "Military Time";
//         }
//     }
    
//     return convertedHrs;
//     console.log(convertedHrs);
//     clock.innerHTML = convertedHrs;
// })



teal.addEventListener("click", function(){
    clock.style.color = "teal";
    timezone.style.color = "teal";
})

magenta.addEventListener("click", function(){
    clock.style.color = "magenta";
    timezone.style.color = "magenta";
})

salmon.addEventListener("click", function(){
    clock.style.color = "salmon";
    timezone.style.color = "salmon";
})

lucida.addEventListener("click", function(){
    clock.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    timezone.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
})

tahoma.addEventListener("click", function(){
    clock.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    timezone.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
})

impact.addEventListener("click", function(){
    clock.style.fontFamily = "Impact,Charcoal,sans-serif";
    timezone.style.fontFamily = "Impact,Charcoal,sans-serif";
})