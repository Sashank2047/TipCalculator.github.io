let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");
let errorMessageValue = "Please Enter a Valid Input.";

function calculateTip() {
    let billamount = billAmount.value;
    let percentagetip = percentageTip.value;
    if (billamount === "") {
        errorMessage.textContent = errorMessageValue;
    } else if (percentagetip === "") {
        errorMessage.textContent = errorMessageValue;
    } else {
        let billamount = parseInt(billAmount.value);
        let percentagetip = parseInt(percentageTip.value);
        errorMessage.textContent = "";
        let tip = (percentagetip / 100) * billamount;
        let total = billamount + tip;
        tipAmount.value = tip;
        totalAmount.value = total;
    }
}