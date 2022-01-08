

//using a daily planner to create a schedule
// open the planner
// THEN the current day is displayed at the top of the calendar
// view the time blocks for that day
// time block is color-coded to indicate whether it is in the past, present, or future
// click into a time block
// I can enter an event
// click the save button for that time block
// event is saved in local storage


 var saveBtn = $(".saveBtn");

 
 // current day is displayed at the top of the calendar
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
 
 // block is color-coded to indicate whether it is in the past, present, or future
 function timeBlockColor() {
     var hour = moment().hours();
 
     $(".time-block").each(function() {
         var currHour = parseInt($(this).attr("id"));
 
 
         if (currHour > hour) {
             $(this).addClass("future");
         } else if (currHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 
 // the save button for that time block
 saveBtn.on("click", function() {
 
     // console.log(this); //save button
     var time = $(this).siblings(".hour").text();
     var plan = $(this).siblings(".plan").val();
 
     // event is saved in local storage
     localStorage.setItem(time, plan);
 });
 

 function usePlanner() {
 
     $(".hour").each(function() {
         var currHour = $(this).text();
         var currPlan = localStorage.getItem(currHour);
 
         if(currPlan !== null) {
             $(this).siblings(".plan").val(currPlan);
         }
     });
 }
 
 timeBlockColor();
 usePlanner();
 
 