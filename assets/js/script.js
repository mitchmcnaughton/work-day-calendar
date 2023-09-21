
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

//adds the users input to a variable
const editable = document.querySelector("textarea");
var input = '';
editable.addEventListener("input", (e) => {
  console.log(`${e.data}`);
  
  input = input + `${e.data}`;
  console.log(input);
  
});
//getting the parent to store a variable
function getParent(event)
{
   return event.target.parentNode.parentNode;
}

let saveButtons = document.querySelectorAll("button");

//creating variables for the text areas
var description9Input = document.querySelector('#description9');
var description10Input = document.querySelector('#description10');
var description11Input = document.querySelector('#description11');
var description12Input = document.querySelector('#description12');
var description13Input = document.querySelector('#description13');
var description14Input = document.querySelector('#description14');
var description15Input = document.querySelector('#description15');
var description16Input = document.querySelector('#description16');
var description17Input = document.querySelector('#description17');

//making a function when you click save
function clickSave(event) {

//getting the parent element and where the descr is!
var buttonElement = getParent(event);
var timeBlockElement = buttonElement.children;
var descriptionElement = timeBlockElement[1];

//should update descr if something is in local storage however, I have done it wrong somehow and I'm not sure how to fix it
//so basically whenever the code is run it says  Cannot set properties of null (setting 'innerHTML') which basically means its not defined yet
//as I have defined it earlier in the code which leads me to believe that localStorage runs before anything else however delaying it to update when the pageloads doesnt either
//which just makes me think ive done it all wrong, if so please instruct me on what I've done wrong and what I can do better. Thank you :)
if (localStorage.getItem("desc9")){
  description9Input.innerHTML= localStorage.getItem("desc9");
};

if (localStorage.getItem("desc10")){
  description10Input.innerHTML= localStorage.getItem("desc10");
};

if (localStorage.getItem("desc11")){
  description11Input.innerHTML= localStorage.getItem("desc11");
};

if (localStorage.getItem("desc12")){
  description12Input.innerHTML= localStorage.getItem("desc12");
};

if (localStorage.getItem("desc13")){
  description13Input.innerHTML= (localStorage.getItem("desc13"));
};

if (localStorage.getItem("desc14")){
  description14Input.innerHTML= (localStorage.getItem("desc14"));
};

if (localStorage.getItem("desc15")){
  description15Input.innerHTML= (localStorage.getItem("desc15"));
};


if (localStorage.getItem("desc16")){
  description16Input.innerHTML= localStorage.getItem("desc16");
};

if (localStorage.getItem("desc17")){
  description17Input.innerHTML= localStorage.getItem("desc17");
};




//makes a string out of the class list
var dec = String(descriptionElement.classList);

//store the user input based on what time block they wrote it
if (dec.includes('description9') === true) {
  JSON.stringify(localStorage.setItem("desc9",(input)));
}


if (dec.includes('description10') === true) {
  localStorage.setItem("desc10", JSON.stringify(input));
}

if (dec.includes('description11') === true) {
  localStorage.setItem("desc11", JSON.stringify(input));
}

if (dec.includes('description12') === true) {
  localStorage.setItem("desc12", JSON.stringify(input));
}

if (dec.includes('description13') === true) {
  localStorage.setItem("desc13", JSON.stringify(input));
}

if (dec.includes('description14') === true) {
  localStorage.setItem("desc14", JSON.stringify(input));
}

if (dec.includes('description15') === true) {
  localStorage.setItem("desc15", JSON.stringify(input));
}

if (dec.includes('description16') === true) {
  localStorage.setItem("desc16", JSON.stringify(input));
}

if (dec.includes('description17') === true) {
  localStorage.setItem("desc17", JSON.stringify(input));
}
//resets input
input = '';


event.preventDefault();
};

//adds the click event for the buttons
saveButtons.forEach((item) => {
  item.addEventListener('click',clickSave)
});




