//To make a function available after the document is loaded
$(document).ready(function() {

    // listen for Mouse events (click to save button) 
    $('.saveBtn').on('click', function() {


      // getting the values
      var value = $(this)
      .siblings('.details')
      .val();
    var time = $(this)
      .parent()
      .attr('id');

      // saving in localStorage
      localStorage.setItem(time, value);
  
      // Item was saved to localStorage alert, new class "toshow"
      $('.alert').addClass('toshow');

  
      // Remove alert after 3 seconds
      setTimeout(function() {
        $('.alert').removeClass('toshow');
      }, 3000);
    });
  
    function hourUpdater() {
      // current hours
      var currentHour = moment().hours();
  
      // creating a loop 
      $('.time').each(function() {
        var blockHour = parseInt(
          $(this)
            .attr('id')
            .split('-')[1]
        );

        // Did we pass the time? 
        if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  
  hourUpdater();
  
    // Does the current time needs to be updated? (interval)
    var interval = setInterval(hourUpdater, 15000);
  
    // saved data from localStorage
    $('#hour-9am .details').val(localStorage.getItem('hour-9am'));
  $('#hour-10am .details').val(localStorage.getItem('hour-10am'));
  $('#hour-11am .details').val(localStorage.getItem('hour-11am'));
  $('#hour-12pm .details').val(localStorage.getItem('hour-12pm'));
  $('#hour-13pm .details').val(localStorage.getItem('hour-13pm'));
  $('#hour-14pm .details').val(localStorage.getItem('hour-14pm'));
  $('#hour-15pm .details').val(localStorage.getItem('hour-15pm'));
  $('#hour-16pm .details').val(localStorage.getItem('hour-16pm'));
  $('#hour-17pm .details').val(localStorage.getItem('hour-17pm'));
  
    //  current day to display on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
