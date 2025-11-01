function showDiscount() {
    const offers = [
        "🎉 10% OFF for first-time buyers!",
        "🚗 Free premium service for 1 year!",
        "💳 Easy EMI and finance options!",
        "🔥 VIP membership on purchase!",
        "🛡️ Free insurance first year!"
    ];

    const randomOffer = offers[Math.floor(Math.random() * offers.length)];
    alert("KAROBAR Special Discount:\n\n" + randomOffer);
}
