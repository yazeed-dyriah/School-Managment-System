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
