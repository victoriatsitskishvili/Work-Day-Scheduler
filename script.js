//To make a function available after the document is loaded
$(document).ready(function() {

    // listen for Mouse events (click to save button) 
    $('.saveBtn').on('click', function() {


      // getting the values
      var value = $(this)
        .siblings('.description')
        .val();
      var time = $(this)
        .parent()
        .attr('id');
  
      // saving in localStorage
      localStorage.setItem(time, value);
  
      // Item was saved to localStorage notification, new class "to show"
      $('.notification').addClass('toshow');
  
      // Remove notification after 3 seconds
      setTimeout(function() {
        $('.notification').removeClass('toshow');
      }, 3000);
    });
  
    function updateclock() {
      //current hours
      var currenttime = moment().hours();
  
      // creating a loop 
      $('.time-block').each(function() {
        var blockHour = parseInt(
          $(this)
            .attr('id')
            .split('-')[1]
        );
  
        // Did we pass the time? 
        if (blockHour < currenttime) {
          $(this).addClass('past');
        } else if (blockHour === currenttime) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    updateclock();
  
    // Does the current time needs to be updated? (interval)
    var interval = setInterval(updateclock, 15000);
  
    // saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    //  current day to display on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });