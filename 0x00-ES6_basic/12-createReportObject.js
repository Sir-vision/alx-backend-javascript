export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  function getNumberOfDepartments(employeesList) {
    return Object.keys(employeesList).length;
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return getNumberOfDepartments(allEmployees);
    },
  };
}
