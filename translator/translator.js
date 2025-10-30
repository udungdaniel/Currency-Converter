document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const fromLang = document.getElementById("fromLang");
    const toLang = document.getElementById("toLang");
    const swapBtn = document.getElementById("swapBtn");

    // Add a Copy button dynamically
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy Translation";
    copyBtn.className = "btn copy-btn";
    outputText.insertAdjacentElement("afterend", copyBtn);

    console.log("✅ Translator loaded with live translation.");

    // Swap languages and their text
    swapBtn.addEventListener("click", () => {
        const tempLang = fromLang.value;
        fromLang.value = toLang.value;
        toLang.value = tempLang;

        const tempText = inputText.value;
        inputText.value = outputText.value;
        outputText.value = tempText;
    });

    // Copy translation
    copyBtn.addEventListener("click", async () => {
        const text = outputText.value.trim();
        if (!text) return alert("No translation to copy!");
        try {
            await navigator.clipboard.writeText(text);
            copyBtn.textContent = "✅ Copied!";
            setTimeout(() => (copyBtn.textContent = "📋 Copy Translation"), 2000);
        } catch {
            alert("Clipboard access denied.");
        }
    });

    // --- Real-time translation with debounce ---
    let typingTimer;
    inputText.addEventListener("input", () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            const text = inputText.value.trim();
            if (text) doTranslate(text);
            else outputText.value = "";
        }, 600); // waits 600ms after typing stops
    });

    // --- Main translation function ---
    async function doTranslate(text) {
        outputText.value = "⏳ Translating...";
        let sourceLang = fromLang.value;

        try {
            if (sourceLang === "auto") {
                const detected = await detectLanguage(text);
                sourceLang = detected || "en";
                console.log(`🌐 Detected language: ${sourceLang}`);
            }

            const translated =
                (await translateWithMyMemory(text, sourceLang, toLang.value)) ||
                (await translateWithGoogle(text, sourceLang, toLang.value)) ||
                (await translateWithDeepL(text, sourceLang, toLang.value)) ||
                "⚠️ Could not translate text.";

            outputText.value = translated;
        } catch (err) {
            console.error("Translation error:", err);
            outputText.value = "❌ Error fetching translation.";
        }
    }

    // --- MyMemory API ---
    async function translateWithMyMemory(text, from, to) {
        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
                text
            )}&langpair=${from}|${to}`;
            const res = await fetch(url);
            const data = await res.json();
            return data?.responseData?.translatedText || null;
        } catch (e) {
            console.warn("MyMemory failed:", e);
            return null;
        }
    }

    // --- Google Translate (unofficial endpoint) ---
    async function translateWithGoogle(text, from, to) {
        try {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(
                text
            )}`;
            const res = await fetch(url);
            const data = await res.json();
            return data[0].map((item) => item[0]).join("");
        } catch (e) {
            console.warn("Google Translate failed:", e);
            return null;
        }
    }

    // --- DeepL (optional API key) ---
    async function translateWithDeepL(text, from, to) {
        const apiKey = ""; // Add your DeepL API key if available
        if (!apiKey) return null;
        try {
            const res = await fetch("https://api-free.deepl.com/v2/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `DeepL-Auth-Key ${apiKey}`,
                },
                body: new URLSearchParams({
                    text,
                    source_lang: from.toUpperCase(),
                    target_lang: to.toUpperCase(),
                }),
            });
            const data = await res.json();
            return data?.translations?.[0]?.text || null;
        } catch (e) {
            console.warn("DeepL failed:", e);
            return null;
        }
    }

    // --- Auto language detection ---
    async function detectLanguage(text) {
        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
                text
            )}&langpair=auto|en`;
            const res = await fetch(url);
            const data = await res.json();
            return data?.responseData?.detectedSourceLanguage || null;
        } catch (e) {
            console.warn("Language detection failed:", e);
            return null;
        }
    }
});
