
    // convert number to month
    function covertMonth(number){
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      
      let actualMonth = months[number];
      return actualMonth;
    }
    
    // time func
    function getTime(){
      let date = new Date();
      this.day = date.getUTCDate();
      this.month = date.getUTCMonth();
      this.currentTime = covertMonth(this.month) + ' ' + this.day;
      return this.currentTime;
    }
    
    
     function timeOutPut(){
      let where = document.getElementById('currentDay');
      where.textContent = getTime();
    }
    
       // will eventually update the day when it changes
    setInterval(timeOutPut, 1000);
  


//function to update time blocks based on time
function pastPresentFuture(){

  //array for all the hours
  var hours = [
  ];

  //assigning the variables in the array to the corrosponding time block in html and puts them in the array
  nine = document.getElementById('hour-9'); 
  hours.push(nine);
  ten = document.getElementById('hour-10');
  hours.push(ten);
  eleven = document.getElementById('hour-11');
  hours.push(eleven);
  twelve = document.getElementById('hour-12');
  hours.push(twelve);
  thirteen = document.getElementById('hour-13');
  hours.push(thirteen);
  fourteen = document.getElementById('hour-14');
  hours.push(fourteen);
  fifteen = document.getElementById('hour-15');
  hours.push(fifteen);
  sixteen = document.getElementById('hour-16');
  hours.push(sixteen);
  seventeen = document.getElementById('hour-17');
  hours.push(seventeen);
  
  //for loop to run through the array and determine if the timeblock is past,present or future
  for (i = 9, l = 0; i !==18; i++, l++) {
    //you can change currentHour to what you want to test it!
    var currentHour = dayjs().hour();
    
    if (currentHour > i) {
      hours[l].classList.add("past");
     
    } else if (currentHour === i) {
      hours[l].classList.add("present");
    } else {
      hours[l].classList.add("future");
    }

  }
}
pastPresentFuture()

const editable = document.querySelector("textarea");

editable.addEventListener("input", (e) => {
  var inputEvent;
  inputEvent = inputEvent + `${e.data}`;
  console.log(inputEvent.data);
})
function getParent(event)
{
   return event.target.parentNode.parentNode;
}

let saveButtons = document.querySelectorAll("button");

function clickSave(event) {

var parentElement = getParent(event);
var userInput = getParent(event);
var usu = userInput.children;
var us = usu[1];



};

saveButtons.forEach((item) => {
  item.addEventListener('click',clickSave)
});




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
