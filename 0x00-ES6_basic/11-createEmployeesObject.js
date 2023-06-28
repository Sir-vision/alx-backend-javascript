export default function createEmployeesObject(departmentName, employees) {
  const employmentObject = {
    [departmentName]: employees,
  };
  return employmentObject;
}
