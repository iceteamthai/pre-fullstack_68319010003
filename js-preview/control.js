// เงื่อนไข และ วนซ้ำ

function checkScore(score){
    if (score > 50 ){
        return "pass";
    }   else {
        return "fail";
    }
}

console.log(`75 คะแนน ${checkScore(75)}`);
console.log(`49 คะแนน ${checkScore(49)}`);

// Ternary Op
const result = 62 >= 50 ? "pass" : "fail"
console.log(`62 คะแนน ${result}`)

// for loop
for (let i = 1; i <= 10; i++){
    console.log(`รอบที่ ${i}`);
}