// อาร์เรย์ และ ออบเจคต์

// array
const students =["earth","Tho","Silapakorn","Ood","matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("chock");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการแสงดผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน`);

// Object
const student = {
    id: 101, 
    name: "Ice",
    age: 18,
    major: "information Technology"
};
console.log(`name ${student.name}`);
console.log(`major ${student.major}`);

// Arry and Object
const studentList = [
    {id: 101, name: "Ice", age:20, major: "IT"},
    {id: 102, name: "ball", age:40, major: "IT Roblox"},
    {id: 103, name: "Korn", age:30, major: "IT PUBG"},
];

// Map : แปลงทุกคัวที่ ให้ได้ array ใหม่ในการแสงดผล
const name = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age}`);
console.log(`ข้อมูลที่ใช้การ Map ${name} `);

//