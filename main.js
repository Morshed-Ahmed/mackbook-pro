const memory8 = document.getElementById("memory-8gb");
const memory16 = document.getElementById("memory-16gb");
const fastStorge = document.getElementById("fast-storage");
const secondStorge = document.getElementById("second-storge");
const thardStorge = document.getElementById("thard-storge");
const freeDelivery = document.getElementById("free-delivery");
const chargeDelivery = document.getElementById("charge-delivery");

const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const bestPrice = document.getElementById("best-price");

let finalPrice = document.getElementById("final-price");




function updateTotal() {
    const memoryInput = parseFloat(memoryCost.innerText);
    const storageInput = parseFloat(storageCost.innerText);
    const deliveryInput = parseFloat(deliveryCharge.innerText);
    const bestPriceInput = parseFloat(bestPrice.innerText);
    const grandTotal = memoryInput + storageInput + deliveryInput;
    const total = grandTotal + bestPriceInput;
    totalPrice.innerText = total;
    // cul

    finalPrice.innerText = total;
}

memory8.addEventListener("click", function () {
    memoryCost.innerText = "0";
    updateTotal();
});
memory16.addEventListener("click", function () {
    memoryCost.innerText = "180";
    updateTotal();
});

fastStorge.addEventListener("click", function () {
    storageCost.innerText = "0";
    updateTotal();
});
secondStorge.addEventListener("click", function () {
    storageCost.innerText = "100";
    updateTotal();
});
thardStorge.addEventListener("click", function () {
    storageCost.innerText = "180";
    updateTotal();
});

freeDelivery.addEventListener("click", function () {
    deliveryCharge.innerText = "0";
    updateTotal();
});
chargeDelivery.addEventListener("click", function () {
    deliveryCharge.innerText = "20";
    updateTotal();
});





document.getElementById("promo-code").addEventListener("click", function () {
    const promoInput = document.getElementById("promo-input").value;
    const totalPrice = document.getElementById("final-price").innerText;
    const totalAmount = parseFloat(totalPrice);

    if (promoInput == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        finalPrice.innerText = totalPrice - discount;
    }
    document.getElementById('promo-input').value = '';

});
