'use strict'


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const newArrey = allStudents.filter((a) => failedStudents.indexOf(a) == -1);
console.log(newArrey);