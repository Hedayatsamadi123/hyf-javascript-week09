console.log("HomeWork-Week09");



const initialStudents = [ 'niels', 'mads' ];
const room = '3a';

const students = StudentsFactory(initialStudents, room);
// { add, delete ...... }
function StudentsFactory (initialStudents, room){
    let allStudents = initialStudents,
    classRoom = room;
    const addStudent = student => {
        allStudents.push(student);
        console.log(`Added student ${student} to Class room : ${allStudents}`);
    };
    const deletStudent = student => {
        const index = allStudents.indexOf(student);
        if (index != -1){
            allStudents.splice(index, 1);
            console.log(`Deleted student ${student} form Class: ${allStudents}`);
        } else {
            console.log(` Student ${student} not found in the class room `);
        }
    };
    const printAll = () => {
        console.log(` Class room : ${classRoom} Total students array : [${allStudents}]`);
    };
    const deleteAll = () => {
        allStudents = [];
    };
    const changeRoom = newRoom => {
        classRoom = newRoom;
        console.log(classRoom);
    };
    return {
        add : addStudent,
        delete: deletStudent,
        printAll: printAll,
        deleteAll: deleteAll,
        changeRoom: changeRoom
    };
}
students.add('younes'); 
// add name to the studens array // [ 'niels', 'mads', 'younes' ]
students.add('johnny'); 
// same // [ 'niels', 'mads', 'younes', 'johnny' ]

students.delete('younes'); 
// delete // [ 'niels', 'mads', 'johnny' ]

students.printAll();
// 3a
// niels, mads, johnny

students.deleteAll();
// []

students.printAll(); 
// 3a
//  print all the names ''

students.changeRoom('3b');