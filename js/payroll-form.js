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
// UC-10: Employee Payroll Data Class with Validation

class EmployeePayrollData {

    constructor() {
        this._name = "";
        this._profile = "";
        this._gender = "";
        this._department = [];
        this._salary = "";
        this._startDate = "";
        this._notes = "";
    }

    get name() {
        return this._name;
    }

    set name(name) {
        const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
        if (!nameRegex.test(name)) {
            throw "Name is Incorrect!";
        }
        this._name = name;
    }

    get profile() {
        return this._profile;
    }

    set profile(profile) {
        this._profile = profile;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        const now = new Date();
        const selectedDate = new Date(startDate);

        if (selectedDate > now) {
            throw "Start Date cannot be in the future";
        }

        const diffTime = now.getTime() - selectedDate.getTime();
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays > 30) {
            throw "Start Date should be within 30 days";
        }

        this._startDate = startDate;
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }
}
function handleFormSubmit(event) {
    event.preventDefault();

    try {
        const employeePayrollData = createEmployeePayrollData();
        console.log("Validated Employee Payroll Object:", employeePayrollData);
    } catch (error) {
        alert(error);
    }
}
function createEmployeePayrollData() {
    const employeePayrollData = new EmployeePayrollData();

    employeePayrollData.name = document.querySelector("#name").value;
    employeePayrollData.profile =
        document.querySelector('input[name="profile"]:checked').value;
    employeePayrollData.gender =
        document.querySelector('input[name="gender"]:checked').value;
    employeePayrollData.department = getSelectedDepartments();
    employeePayrollData.salary = document.querySelector("#salary").value;

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;

    employeePayrollData.startDate = `${day} ${month} ${year}`;
    employeePayrollData.notes = document.querySelector("#notes").value;

    return employeePayrollData;
}
