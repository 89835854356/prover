let A = +prompt("Введите A");
let B = +prompt("Введите B");
let i = A + 1;
if (A < B) {
while (i++ < (B - 1)) {
if (i % 2 !=0) {
console.log(i);
i = i + 1;
}
}
}
end