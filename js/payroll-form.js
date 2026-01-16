// UC-8: Salary Range Event Listener

window.addEventListener("DOMContentLoaded", () => {
    const salarySlider = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");

    salaryOutput.textContent = salarySlider.value;

    salarySlider.addEventListener("input", () => {
        salaryOutput.textContent = salarySlider.value;
    });
});

// UC-9: Handle Form Submit

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const employeePayrollData = createEmployeePayrollData();
    console.log("Employee Payroll Object:", employeePayrollData);
}

function createEmployeePayrollData() {
    const name = document.querySelector("#name").value;

    const profile = document.querySelector(
        'input[name="profile"]:checked'
    ).value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    const department = getSelectedDepartments();

    const salary = document.querySelector("#salary").value;

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;

    const notes = document.querySelector("#notes").value;

    return {
        name,
        profile,
        gender,
        department,
        salary,
        startDate: `${day} ${month} ${year}`,
        notes
    };
}

function getSelectedDepartments() {
    const departmentNodes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    let departments = [];
    departmentNodes.forEach(node => {
        departments.push(node.value);
    });

    return departments;
}