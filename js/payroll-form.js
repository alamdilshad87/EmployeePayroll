// UC-8: Salary Range Event Listener

window.addEventListener("DOMContentLoaded", () => {
    const salarySlider = document.querySelector("#salary");
    const salaryOutput = document.querySelector("#salaryOutput");

    salaryOutput.textContent = salarySlider.value;

    salarySlider.addEventListener("input", () => {
        salaryOutput.textContent = salarySlider.value;
    });
});
