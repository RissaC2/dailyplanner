$(document).ready(function() {
    function displayCurrentDay() {
      var currentDay = moment().format("dddd, MMMM Do");
      $("#currentDay").text(currentDay);
    }
    
    displayCurrentDay();
  });
  