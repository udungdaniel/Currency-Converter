// Array of fashion tips
const fashionTips = [
    "👕 Dress for confidence, not just style.",
    "👗 A good outfit starts with a clean and well-fitted base.",
    "🧥 Layer smartly — play with textures and tones.",
    "🩳 Simplicity is the ultimate sophistication.",
    "🧢 Accessories can elevate even the simplest outfit.",
    "👠 Good shoes take you good places — choose comfort and style.",
    "🕶️ Sunglasses aren’t just for sun; they’re confidence boosters.",
    "👔 Ironed clothes make a stronger impression than expensive ones.",
    "🧴 Smelling good is part of your style — don’t skip fragrance.",
    "👚 Invest in timeless pieces more than fast trends.",
    "🧤 Your style is your personal story — wear it proudly."
];

// Function to display a random tip
function showFashionTip() {
    const tipElement = document.getElementById("fashionTip");
    if (!tipElement) return; // if the element doesn't exist, stop

    const randomTip = fashionTips[Math.floor(Math.random() * fashionTips.length)];
    tipElement.textContent = randomTip;
}

// Run after the DOM loads
document.addEventListener("DOMContentLoaded", () => {
    showFashionTip();
});
