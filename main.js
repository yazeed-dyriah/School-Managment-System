var students = [];

document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

    students = null;
});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}
function insertData() {
	var name = document.getElementById("inputStudentName").value;
	var id = document.getElementById("inputStudentid").value;
	var gdpa = document.getElementById("inputStudentgdpa").value;
	document.getElementById("insertionPoint").innerHTML += "<tr><td>" + name + "</td><td>" + id + "</td><td>" +  gdpa + "</td></tr>";

	// The below part is to clear the values after the entry is added.
	document.getElementById("inputStudentName").value = "";
	document.getElementById("inputStudentid").value = "";
	document.getElementById("inputStudentgdpa").value = "";
}

var list = function(family) {
	var names = [];
	for (var prop in family) {
	  names.push(prop.name);
	}
	document.getElementById('aaron-family').innerHTML = names.join(' ');
  }
  list(family);
// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.
