window.addEventListener("DOMContentLoaded", () => {

  const salary = document.getElementById("salary");
  const salaryOutput = document.getElementById("salaryOutput");

  salaryOutput.textContent = salary.value;

  salary.addEventListener("input", () => {
    salaryOutput.textContent = salary.value;
  });

  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  for (let i = 1; i <= 31; i++) {
    day.innerHTML += `<option value="${i}">${i}</option>`;
  }

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  months.forEach((m, index) => {
    month.innerHTML += `<option value="${index + 1}">${m}</option>`;
  });

  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 10; i <= currentYear + 1; i++) {
    year.innerHTML += `<option value="${i}">${i}</option>`;
  }

  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const employeeData = createEmployeeObject();
    saveEmployeeData(employeeData);

    window.location.href = "pages/payroll-list.html";
  });
});

function createEmployeeObject() {

  const name = document.getElementById("name").value;

  const profile = document.querySelector(
    'input[name="profile"]:checked'
  ).value;

  const gender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  const departments = [...document.querySelectorAll(
    'input[type="checkbox"]:checked'
  )].map(dep => dep.value);

  const salary = document.getElementById("salary").value;

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const notes = document.getElementById("notes").value;

  return {
    name,
    profile,
    gender,
    department: departments,
    salary,
    startDate: `${day}-${month}-${year}`,
    notes
  };
}

function saveEmployeeData(employeeData) {

  let employeeList = JSON.parse(
    localStorage.getItem("EmployeePayrollList")
  ) || [];

  employeeList.push(employeeData);

  localStorage.setItem(
    "EmployeePayrollList",
    JSON.stringify(employeeList)
  );
}
