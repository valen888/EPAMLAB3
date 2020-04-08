

const arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];



let usdArr = arr.filter(function (obj) {
    return obj.type == "USD" && obj.value < 100;
});
var summa = usdArr.reduce(function (sum, current) {
    return sum + current.value;
}, 0);


let eurArr = arr.filter(function (obj) {
    return obj.type == "EUR";
});

let eurArr2 = eurArr.map(function (obj) {
    return { value: obj.value * 2, type: "EUR" };
});

alert(`1\)The summ is ${summa}\n2\)${JSON.stringify(eurArr2)}`);









