function toggleYears(id) {
    const yearSection = document.getElementById(id);
    if (yearSection.style.display === "none" || yearSection.style.display === "") {
        yearSection.style.display = "flex"; // Show the years when clicked
    } else {
        yearSection.style.display = "none"; // Hide the years if clicked again
    }
}