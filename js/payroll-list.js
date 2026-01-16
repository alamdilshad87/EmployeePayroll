// ===============================
// UC-10: Display Employee Payroll Data
// ===============================

let employeeList = [];

document.addEventListener("DOMContentLoaded", () => {

  console.log("Payroll list JS loaded");

  employeeList = JSON.parse(
    localStorage.getItem("EmployeePayrollList")
  ) || [];

  console.log("Employee list:", employeeList);

  renderTable(employeeList);

  const searchInput = document.getElementById("searchInput");

  if (!searchInput) {
    console.error("Search input not found");
    return;
  }

  searchInput.addEventListener("input", handleSearch);
});

// ===============================
// Render Table Function
// ===============================
function renderTable(list) {

  const tableBody = document.getElementById("tableBody");

  if (!list || list.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center;">
          No matching employee found
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = list.map(emp => {

    if (!emp || !emp.name || !emp.profile) return "";

    const departments = Array.isArray(emp.department)
      ? emp.department
      : [];

    return `
      <tr>
        <td>
          <img class="profile" src="../${emp.profile}" alt="profile">
        </td>
        <td>${emp.name}</td>
        <td>${emp.gender || "-"}</td>
        <td>
          ${departments
            .map(dep => `<span class="dept-label">${dep}</span>`)
            .join("")}
        </td>
        <td>₹ ${emp.salary || 0}</td>
        <td>${emp.startDate || "-"}</td>
      </tr>
    `;
  }).join("");
}

// ===============================
// Search by Name
// ===============================
function handleSearch(event) {

  const searchValue = event.target.value.toLowerCase();
  console.log("Searching:", searchValue);

  const filteredEmployees = employeeList.filter(emp =>
    emp.name.toLowerCase().includes(searchValue)
  );

  renderTable(filteredEmployees);
}
