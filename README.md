# Work-Day-Scheduler
HTML:
1. Creating the time blocks:
a) creating the div ids for all - from 9 am till 5 pm; creating a separate class for styling - "time"
b) creating another div class hour : "col-md-1" - column, medium screen(for desktops), spans 1 of 12 columns
c)creating text area class details : "col-md-10" - column, medium screen(for desktops), spans 10 of 12 columns
d) creating a button class btn saveBtn (according to style.css) : "col-md-1"- column, medium screen(for desktops), spans 1 of 12 columns
e) creating i class="fa fa-save" - https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-save - icon library that was used - https://use.fontawesome.com/releases/v5.8.1/css/all.css
f) adding an empty js file to html - <script src=""></script>

JS:
1. Using jQuery, running the ready() method to make a function available after the document is loaded.
2. Listening to a click (save button) - Event Binding using on() - https://www.tutorialsteacher.com/jquery/jquery-event
3. To get the values (value and time):  https://api.jquery.com/ - .siblings() and .val(); .parent() and .attr()
4. Saving the values (value and time) in local storage 
5. Need to show that the item was saved in the local storage by using a notification, adding a new class "toshow"
6. Need to remove this notificaion after 3 sec - settimeout function - use milliseconds 
7. Creating a new function to update time 
8. Creating a new variable - current time 
9. Creating a loop
10. Creating an if/else function to see if we passed the time
11. using an interval variable to see if the current time needs to be updated
12. Loading the save data from the storage 
13. Display the current date on the page

