function showData() {
    let firstNameElemnt = document.getElementById("firstName");
    let lastNameElemnt = document.getElementById("lastName");
    let firstNameLabelElemnt = document.getElementById("firstNameLabel");
    let lastNameLabelElemnt = document.getElementById("lastNameLabel");

    firstNameLabelElemnt.innerText += firstNameElemnt.value;
    lastNameLabelElemnt.innerText += lastNameElemnt.value;
}