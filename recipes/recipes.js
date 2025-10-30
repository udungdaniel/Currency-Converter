document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        {
            title: "Brown Sugar Glazed Ham",
            image: "images/BrownSugarGlazedHam.webp",
            intro: "A sweet, sticky Brown Sugar Glazed Ham that’s simple to make and perfect for Christmas.",
            ingredients: [
                "1 fully cooked bone-in ham (8–10 lbs)",
                "1 cup packed brown sugar",
                "½ cup honey or maple syrup",
                "2 tbsp Dijon mustard",
                "1 tsp ground cloves (or 6–8 whole cloves)",
                "¼ cup orange juice (or pineapple juice)",
                "2 tbsp apple cider vinegar (optional)"
            ],
            instructions: [
                "Preheat oven to 325°F (160°C).",
                "Score ham surface in diamond pattern; stud with cloves if using.",
                "Mix glaze ingredients and brush half over ham.",
                "Bake 1½–2 hours, basting every 30 minutes.",
                "Increase heat to 400°F, glaze again, and caramelize 5–10 minutes.",
                "Rest 15–20 minutes before slicing."
            ],
            tips: [
                "Make glaze ahead and reheat gently.",
                "Finish under the broiler for smoky flavor.",
                "Use maple syrup for richer taste."
            ],
            faqs: {
                "Do I need a fully cooked ham?": "This recipe assumes a fully cooked ham. Adjust times for fresh hams.",
                "How long will leftovers keep?": "3–4 days refrigerated in an airtight container.",
                "Can I freeze slices?": "Yes, wrap tightly and freeze up to 3 months."
            }
        },
        {
            title: "Garlic Butter Roast Turkey",
            image: "images/GarlicButterRoastTurkey.webp",
            intro: "Golden, juicy Garlic Butter Roast Turkey with herb butter under the skin for extra flavor.",
            ingredients: [
                "1 whole turkey (10–12 lbs), thawed",
                "½ cup unsalted butter, softened",
                "4 cloves garlic, minced",
                "1 tbsp each of fresh thyme, rosemary, parsley",
                "Salt & black pepper",
                "1 onion and 1 lemon, halved"
            ],
            instructions: [
                "Preheat oven to 325°F (160°C).",
                "Mix butter, herbs, garlic, salt, and pepper.",
                "Rub half under the skin and half outside.",
                "Stuff cavity with onion and lemon.",
                "Roast 2½–3 hours or until 165°F internal temp.",
                "Rest 20–30 minutes before carving."
            ],
            tips: [
                "Use a meat thermometer for accuracy.",
                "Brine 8–12 hours for extra juiciness.",
                "Add white wine to the pan for sauce."
            ],
            faqs: {
                "How to get crispy skin?": "Pat dry and roast uncovered the last 30 minutes.",
                "Can I roast faster?": "Yes, increase temp but watch the breast closely."
            }
        },
        // Remaining recipes shortened for brevity, but same structure:
        { title: "Marry Me Chicken (Holiday Version)", image: "images/MarryMeChicken.webp", intro: "Creamy, garlicky sun-dried tomato chicken perfect for holidays.", ingredients: ["4 chicken breasts", "2 cloves garlic", "½ cup cream", "½ cup Parmesan", "½ cup sun-dried tomatoes"], instructions: ["Season, sear, make sauce, combine, simmer 8 mins."], tips: ["Use thighs for richer flavor.", "Add spinach for color."], faqs: { "Can I freeze sauce?": "Yes, but texture may change." } },
        { title: "Cheesy Garlic Mashed Potatoes", image: "images/CheesyGarlicMashedPotatoes.webp", intro: "Fluffy mashed potatoes with butter, cheese, and roasted garlic.", ingredients: ["2 lbs potatoes", "4 tbsp butter", "½ cup milk", "½ cup cheese"], instructions: ["Boil potatoes, mash with butter and milk.", "Add cheese and garlic, mix smooth."], tips: ["Use Yukon Gold for creaminess.", "Add sour cream for tang."], faqs: { "Can I make ahead?": "Yes, reheat with a splash of milk." } },
        { title: "Classic Sausage & Herb Stuffing", image: "images/ClassicSausage&HerbStuffing.webp", intro: "Savory bread stuffing with sausage and herbs.", ingredients: ["8 cups bread cubes", "1 lb sausage", "1 cup onion", "1 cup celery", "2 cups broth"], instructions: ["Toast bread, cook sausage, combine with veggies and broth, bake 35 mins."], tips: ["Add apples or chestnuts for flavor."], faqs: { "Can I make vegetarian?": "Yes, use mushrooms instead of sausage." } },
        { title: "Soft Christmas Sugar Cookies", image: "images/SoftChristmasSugarCookies.webp", intro: "Soft, buttery cookies perfect for decorating.", ingredients: ["3 cups flour", "1 cup butter", "1 egg", "1 cup sugar"], instructions: ["Cream butter, mix ingredients, chill, cut shapes, bake 10 mins."], tips: ["Chill dough to prevent spreading."], faqs: { "How to keep cookies soft?": "Don’t overbake and store airtight." } },
        { title: "Peppermint Bark Brownies", image: "images/PeppermintBarkBrownies.webp", intro: "Fudgy brownies with white chocolate peppermint topping.", ingredients: ["½ cup butter", "1 cup sugar", "2 eggs", "½ cup flour", "½ cup white chocolate", "½ cup crushed candy canes"], instructions: ["Mix batter, bake, cool, top with chocolate and candy."], tips: ["Use good cocoa for rich flavor."], faqs: { "Can I use store-bought brownies?": "Yes, add toppings after cooling." } },
        { title: "Cranberry Brie Pull-Apart Bread", image: "images/CranberryBriePull-ApartBread.webp", intro: "Warm, gooey brie and cranberry in crusty bread.", ingredients: ["1 sourdough loaf", "6 oz Brie", "½ cup cranberry sauce", "2 tbsp butter"], instructions: ["Cut bread crosshatch, fill with Brie and cranberry, bake 20 mins."], tips: ["Add nuts for crunch."], faqs: { "Can I prep ahead?": "Yes, refrigerate, then bake before serving." } },
        { title: "No-Bake Eggnog Cheesecake", image: "images/No-BakeEggnogCheesecake.webp", intro: "Creamy eggnog cheesecake that sets in the fridge — no oven needed.", ingredients: ["1½ cups graham crumbs", "½ cup butter", "8 oz cream cheese", "1 cup eggnog", "½ tsp nutmeg"], instructions: ["Press crust, mix filling, chill 4 hours."], tips: ["Use gelatin if eggnog is thin."], faqs: { "Can I add alcohol?": "Yes — rum or bourbon for adults." } },
        { title: "Spiced Christmas Punch", image: "images/SpicedChristmasPunch.webp", intro: "Festive cranberry-orange punch with spices, with boozy or family versions.", ingredients: ["3 cups cranberry juice", "2 cups orange juice", "1 cup apple cider", "2 cinnamon sticks"], instructions: ["Mix juices, chill 2 hrs, add soda before serving."], tips: ["Freeze orange slices for garnish."], faqs: { "Can it be served hot?": "Yes — gently heat for a mulled version." } }
    ];

    const recipeGrid = document.getElementById("recipeGrid");
    const modal = document.getElementById("recipeModal");
    const closeBtn = document.querySelector(".close");

    // Generate recipe cards
    recipes.forEach((r, index) => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `
            <img src="${r.image}" alt="${r.title}">
            <h3>${r.title}</h3>
            <p>${r.intro}</p>
            <button class="btn" data-index="${index}">View Recipe</button>
        `;
        recipeGrid.appendChild(card);
    });

    // Open modal
    recipeGrid.addEventListener("click", e => {
        if (e.target.matches(".btn")) {
            const r = recipes[e.target.dataset.index];
            document.getElementById("recipeTitle").textContent = r.title;
            document.getElementById("recipeIntro").textContent = r.intro;
            document.getElementById("recipeIngredients").innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join("");
            document.getElementById("recipeInstructions").innerHTML = r.instructions.map(i => `<li>${i}</li>`).join("");
            document.getElementById("recipeTips").innerHTML = r.tips.map(i => `<li>${i}</li>`).join("");
            document.getElementById("recipeFAQs").innerHTML = Object.entries(r.faqs)
                .map(([q, a]) => `<p><strong>Q:</strong> ${q}<br><em>${a}</em></p>`)
                .join("");
            modal.style.display = "block";
        }
    });

    // Close modal
    closeBtn.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", e => {
        if (e.target == modal) modal.style.display = "none";
    });
});
