var newTask = document.getElementById("new-task");
var incompletetaskholder = document.getElementById("incomplete-tasks");
var completetaskholder = document.getElementById("completed-tasks");
var addbtn = document.getElementsByTagName('button')[0];

var createnewelements = function(taskstring){
	//create li elem
	var listitem = document.createElement('li');

	var checkbox = document.createElement('input');

	var label = document.createElement('label');

	var textbox = document.createElement('input');

	var editbtn = document.createElement('button');

	var deletebtn = document.createElement('button');

	label.innerText = taskstring;
	checkbox.type = 'checkbox';
	textbox.type = 'text';

	editbtn.innerText = "Edit";
	deletebtn.innerText = "Delete";
	editbtn.className = "edit";
	deletebtn.className = "delete";

	//appending all the created elements to listitems i.e Li element
	listitem.appendChild(checkbox);
	listitem.appendChild(label);
	listitem.appendChild(textbox);
	listitem.appendChild(editbtn);
	listitem.appendChild(deletebtn);


	return listitem;



}

var addtasktoincompleteholder = function(){
	var listitem = createnewelements(newTask.value);
	incompletetaskholder.appendChild(listitem);
	bindTaskEvents(listitem,taskcompleted);
	newTask.value = "";
}




addbtn.addEventListener('click',addtasktoincompleteholder);


var bindTaskEvents = function(listitem,checkboxeventhandler){
	console.log("binding events");

	var checkbox = listitem.querySelector('input[type=checkbox]');
	var editbtn = listitem.querySelector('button.edit');
	var deletebtn = listitem.querySelector('button.delete');

	deletebtn.onclick = deletetask;



}


var deletetask = function(){
	var listitem = this.parentNode;

	var ul = listitem.parentNode;

	ul.removeChild(listitem);

	console.log(this)
}


var taskcompleted = function(){
	var listitem = this.parentNode;

	completetaskholder.appendChild(listitem);
	bindTaskEvents(listitem,taskcompleted);

}