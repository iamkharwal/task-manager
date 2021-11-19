var taskslist = document.getElementById("taskList"); //storing the value of id taskList

// object constructor function to create objects
function task(name) {
    this.name = name; //assigning value name
    this.date = new Date().toDateString(); //date object to store current date
    this.status = "False"; //assigning default value false 
}
//ends here constructor function


//creating toggle_task function for changing status true to false and vice-versa


function toggle_task(item) {
    if (item.target.textContent == "True") {
        item.target.textContent = "False";
        item.target.style.color = "black";
    } else {
        item.target.textContent = "True";
        item.target.style.color = "green"
    }
}
//end here toggle_task


// creating markDone function to strike through done tasks and changing color to green
function markDone(item) {
    item.target.parentElement.parentElement.firstChild.firstChild.style.color = "green"; //accessing firstchild by passing eventObject as parameter to this function 
    item.target.parentElement.parentElement.firstChild.firstChild.style.textDecoration = "line-through"; //applying textDecoration property
}
//end here markDone()

//creating removeItem() function to remove tasks from list on clicking remove button
function removeItem(item) {
    item.target.parentElement.parentElement.remove(); //accessing parentElement by passing eventObject as parameter to this function and removing the element 
    var countItems = document.getElementsByClassName("list-item"); //accessing all elements whose className is list-item
    document.querySelector("h1").textContent = "Task Manager ( " + countItems.length + " )"; //updating task item count on removing task item from the list
}
//end here removeItem()


// adding eventlistner to form submit
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); //preventing default behaviour of form

    var name = document.getElementById("task").value; // accessing input field value by ID

    var item = new task(name); // calling constructor function with new keyword

    document.getElementById("task").value = ""; // makeing input field empty after submit

    var listItem = document.createElement("div"); // creating new element UI 
    listItem.setAttribute('class', 'list-item'); // setting attribute class 

    var taskname = document.createElement("div"); // creating new UI element
    taskname.setAttribute('class', 'taskName'); // setting attribute class 
    var h1 = document.createElement("h4"); // creating new UI element
    h1.textContent = item.name; //assigning object key values to html tags 
    var p1 = document.createElement("p"); // creating new UI element
    p1.textContent = item.date; //assigning object key values to html tags 
    taskname.append(h1, p1); // appending new elements to their parentElement

    var done = document.createElement("div"); // creating new UI element
    done.setAttribute('class', 'done'); // setting attribute class 
    var span = document.createElement("span") // creating new UI element
    span.setAttribute('class', 'done') // setting attribute class 
    span.innerHTML = "✅"; // assigning css style properties
    span.style.cursor = "pointer" // assigning css style properties
    span.addEventListener('click', function(e) {
        //adding eventListner to invoke markDone on click of done Button
        markDone(e)
    })
    done.append(span) // appending new elements to their parentElement

    var remove = document.createElement("div"); // creating new UI element
    remove.setAttribute('class', 'remove'); // setting attribute class 
    var span1 = document.createElement("span") // creating new UI element
    span1.setAttribute('class', 'close') // setting attribute class 
    span1.innerHTML = "&#x2715";
    span1.style.cursor = "pointer"
    span1.addEventListener('click', function(e) {
        //adding eventListner to invoke removeItem on click of remove Button
        removeItem(e)
    })
    remove.append(span1) // appending new elements to their parentElement

    listItem.append(taskname, done, remove) // appending new elements to their parentElement
    taskslist.append(listItem)

    var countItems = document.getElementsByClassName("list-item"); //accessing all elements whose className is list-item
    document.querySelector("h1").textContent = "Task Manager ( " + countItems.length + " )"; //updating task item count on removing task item from the list
});