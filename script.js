// Fixed Conversion Rates
const conversionRates = {
    USD: { USD: 1, EUR: 0.95, PKR: 278.11 },
    EUR: { USD: 1.06, EUR: 1, PKR: 294.38 },
    PKR: { USD: 0.0036, EUR: 0.0034, PKR: 1 }
};

// DOM Elements
const amountInput = document.getElementById("amount");
const sourceCurrency = document.getElementById("source-currency");
const targetCurrency = document.getElementById("target-currency");
const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("result");

// Convert Button Click Event
convertBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const source = sourceCurrency.value;
    const target = targetCurrency.value;

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
    }

    const rate = conversionRates[source][target];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${source} = ${convertedAmount} ${target}`;
});

// Clear Button Click Event
clearBtn.addEventListener("click", () => {
    amountInput.value = "";
    resultDiv.textContent = "";
    sourceCurrency.value = "USD";
    targetCurrency.value = "USD";
});
