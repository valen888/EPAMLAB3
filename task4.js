

var arr = [
{value: 100, type: 'USD'},
{value: 215, type: 'EUR'},
{value: 7, type: 'EUR'},
{value: 99, type: 'USD'},
{value: 354, type: 'USD'},
{value: 12, type: 'EUR'},
{value: 77, type: 'USD'},
];


let summm = 0 ;
for(let obj of arr){
    if(obj.type == "USD" && obj.value < 100){
        summm += obj.value;
    }
}

let new_arr = [];
for(let obj of arr){
    if(obj.type == "EUR"){
        let buf = obj;
        buf.value *=2;
        alert(JSON.stringify(obj));
        new_arr.push(buf);
    }
}
JSON.stringify(new_arr);
alert(`1\)The summ is ${summm}\n2\)${JSON.stringify(new_arr)}`);









