// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Adetunji',
  lastName: 'Oyebode',
  age: 30,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Comfort',
  lastName: 'Okon',
  age: 25,
  location: 'Akwa Ibom',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Iterate over each student and append a new row to the table
studentsList.forEach((student) => {
  const row = tableBody.insertRow();

  // Create cells for first name and location
  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the document body
document.body.appendChild(table);
