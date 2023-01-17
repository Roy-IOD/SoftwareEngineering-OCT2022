dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)

let selects = document.querySelectorAll(".form-select");
let options = ["Australia/Brisbane", "America/Los_Angeles", "America/Toronto", "Europe/Berlin", "Europe/London", "Europe/Prague", "Singapore"];

selects.forEach(select => {
for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
})
console.log(dayjs)
const localTz = dayjs.tz.guess(); 
const format = 'dddd DD MMMM h:mm A'
document.getElementById("current-timezone").innerHTML=localTz;
document.getElementById("current-time").innerHTML=dayjs().tz(localTz).format(format);

function showMeetingTimes() {
    let selects = document.querySelectorAll(".form-select");
    let selectedTimezones="";
    selects.forEach(select => {
selectedTimezones += select.value+","
    })
    console.log(selectedTimezones)
    window.location="meetingplannerresult.html?tzs="+selectedTimezones
}


function loadSelectedTimezones() {
    const query = window.location.search.substring(1);
    console.log(query)
    const unorderedList = document.querySelector(".list-group")
    const timezones = query.substring(4).split(",");
        timezones.forEach(timezone => {
            let listItem = document.createElement('li');
            let convertedTime = dayjs().tz(timezone).format(format);
            listItem.className = "list-group-item flex-fill";
            listItem.innerHTML = `${timezone}: ${convertedTime}`
            unorderedList.appendChild(listItem)
        }) 
}

// function showFutureTimes() {
//     let selects = document.querySelectorAll(".form-select");
//     let selectedTimezones="";
//     selects.forEach(select => {
// selectedTimezones += select.value+","
//     })
//     console.log(selectedTimezones)
//     let selectedDate = document.getElementById('date').value;
//     let selectedTime = document.getElementById('appt').value;
//     window.location="meetingplannerresult.html?tzs="+selectedTimezones+"&d="+selectedDate+"&a="+selectedTime;

// }

//this is the function above that I'm trying to modify below so that form validation is included
//ideally it will replace lines 47-58 if it works

function showFutureTimes2() {
    if (document.getElementById("form-select").value == "Choose Location...") {

        alert("Please select at least one location");
        document.getElementById("form-select").style.borderColor="red";
        return false;
    }

    else if (document.getElementById("date").value == "2022-12-01") {

        alert("Please choose the date of your meeting");
        return false;
    }
    else {
    let selects = document.querySelectorAll(".form-select");
    let selectedTimezones="";
    selects.forEach(select => {
selectedTimezones += select.value+","
    })
    console.log(selectedTimezones)
    let selectedDate = document.getElementById('date').value;
    let selectedTime = document.getElementById('appt').value;
    window.location="meetingplannerresult.html?tzs="+selectedTimezones+"&d="+selectedDate+"&a="+selectedTime;
}
}


function loadFutureSelectedTimezones() {
    const query = window.location.search.substring(1);
    console.log(query)
    const unorderedList = document.querySelector(".list-group")
    const params = query.substring(1).split("&");
    const timezones = params[0].substring(3).split(",");
    const grabDate = params[1].substring(2);
    const grabTime = params[2].substring(2);

    console.log(timezones)
    console.log(grabDate)
    console.log(grabTime)
    
    
        timezones.forEach(timezone => {
            if (timezone) {
            let listItem = document.createElement('li');
            let convertedTime = dayjs(grabDate+" "+grabTime).tz(timezone).format(format);// do I amend this line after =?
            listItem.className = "list-group-item flex-fill";
            listItem.innerHTML = `${timezone}: ${convertedTime}`
            unorderedList.appendChild(listItem)
            }
        }) 
}

function checkForBlank() {
    if (document.getElementById("form-select").value == "Choose Location...") {
        alert("Please select at least one location");
        return false;
    }
}

function checkForDate() {
    if (document.getElementById("date").value == "dd/mm/yyyy") {
        alert("Please select the date of your meeting");
        return false;
    }
}

$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });

//I was trying to create form validation with the below...
// const locationError = document.getElementById("location-error");
// const dateError = document.getElementById("date-error");
// const timeError = document.getElementById("time-error");

// function validateDate() {
//     let date = document.getElementById("date").value;

//     if(date.value == "dd/mm/yyyy"){
//         dateError.innerHTML = "Date is required";
//         return false;
// }
// dateError.innerHTML = "Valid";

// The below 3 lines are from node.js install notes
// const dayjs = require('dayjs')
// import dayjs from 'dayjs' // ES 2015
// dayjs().format()

// let now = dayjs();
// console.log(dayjs());

//this displays the current time but not using day.js though!
// function display_ct() {
//     let x = new Date()
//     document.getElementById("ct").innerHTML = x;
//     display_ct();
// }

//const tz = dayjs.tz.guess(); //current timezone guess

// const sdtz = "Australia/Sydney"
//         const nytz = "America/New_York"
//         const aktz = "Pacific/Auckland"
//         const sgtz = "Asia/Singapore"
//         const format = 'hh:mm:ss a DD MMMM'
//         dayjs.extend(window.dayjs_plugin_utc)
//         dayjs.extend(window.dayjs_plugin_timezone)
//         const dayjsLocal = dayjs().tz(sdtz); 
//         console.log('Sydney: '+dayjsLocal.format(format))
//         console.log('New_York: '+dayjsLocal.tz(nytz).format(format))
//         console.log('Auckland: '+dayjsLocal.tz(aktz).format(format))
//         console.log('Singapore: '+dayjsLocal.tz(sgtz).format(format))
//        console.log('My timezone: '+dayjs.tz.guess()) //guesses your current time zone.