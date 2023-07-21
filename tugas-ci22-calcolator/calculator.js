//Sappe
//Tugas Website

//Simple Calculator

var a = 2;
var b = 3;

var penjumlahan = a + b;
var perkalian = a * b;
var pengurangan = a - b;
var pembagian = a / b;

console.log(a + " + " + b + " = " + penjumlahan);
console.log(a + " x " + b + " = " + perkalian);
console.log(a + " - " + b + " = " + pengurangan);
console.log(a + " / " + b + " = " + pembagian);

var hasilterbesar = Math.max(penjumlahan, perkalian, pengurangan, pembagian);

if (a === 2 && b === 2 && (penjumlahan === hasilterbesar || perkalian === hasilterbesar)) {
    console.log("hasil operasi terbesar = penjumlahan dan perkalian");
} else if (penjumlahan === hasilterbesar) {
    console.log("hasil operasi terbesar = penjumlahan");
} else if (perkalian === hasilterbesar) {
    console.log("hasil operasi terbesar = perkalian");
} else if (pengurangan === hasilterbesar) {
    console.log("hasil operasi terbesar = pengurangan");
} else
if (pembagian === hasilterbesar) {
    console.log("hasil operasi terbesar = pembagian");
} 