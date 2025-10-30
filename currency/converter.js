document.addEventListener("DOMContentLoaded", () => {
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const amountInput = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
    const swapBtn = document.getElementById("swap");
    const convertBtn = document.getElementById("convert");

    async function loadCurrencies() {
        try {
            const response = await fetch("https://api.exchangerate.host/symbols");
            const data = await response.json();

            if (!data || !data.symbols) throw new Error("Currency data unavailable");
            populateDropdowns(data.symbols);
        } catch (error) {
            console.warn("Primary API failed, trying backup...");
            try {
                // Backup API (Frankfurter)
                const res = await fetch("https://api.frankfurter.app/currencies");
                const symbols = await res.json();
                if (!symbols) throw new Error("Backup data unavailable");

                // Convert backup format to match dropdown builder
                const formatted = {};
                for (let code in symbols) {
                    formatted[code] = { code, description: symbols[code] };
                }
                populateDropdowns(formatted);
            } catch (backupError) {
                console.error("Error loading currencies:", backupError);
                resultDiv.textContent = "Failed to load currencies. Please try again later.";
            }
        }
    }

    function populateDropdowns(symbols) {
        const options = Object.keys(symbols)
            .sort()
            .map(code => `<option value="${code}">${code} — ${symbols[code].description}</option>`)
            .join("");

        fromCurrency.innerHTML = options;
        toCurrency.innerHTML = options;
        fromCurrency.value = "USD";
        toCurrency.value = "EUR";
    }

    async function convertCurrency() {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = "Please enter a valid amount.";
            return;
        }

        try {
            const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
            const data = await response.json();

            if (!data || !data.result) throw new Error("Conversion failed");

            resultDiv.textContent = `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
        } catch (error) {
            console.error("Error converting:", error);
            resultDiv.textContent = "Conversion failed. Please try again.";
        }
    }

    // Swap button
    swapBtn.addEventListener("click", () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
    });

    convertBtn.addEventListener("click", convertCurrency);
    loadCurrencies();
});
