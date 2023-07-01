export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.verifyString(name, 'name');
    this._length = this.verifyNumber(length, 'length');
    this._students = this.verifyArray(students, 'students');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
