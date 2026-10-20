// ฟังฃั้น

//แบบปกติ ฟังก์ฃั้น ที่มีการรับค่า 
function calculateTotle(price, quatity) {
    return price * quatity;
}

console.log(`ราคารวม ${calculateTotle(25,4)}`);

// แบบ arrow function
const calculateTotleArrow = (price, quatity) => price * quatity;
console.log(`ราคารวม ${calculateTotle(20, 3)}`);

// แบบ arrow function + default parameter 
const calculateWithvat = (price, quatity, vat = 0.07) =>{
    const subtotal = price * quatity;
    return (subtotal + subtotal * vat).toFixed(2);
}
console.log(`รวมค่า vat ${calculateWithvat(100, 2)}`)