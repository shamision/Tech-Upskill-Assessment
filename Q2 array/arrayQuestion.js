
const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]

//Question 2.1
var cheap = item[0].price;
for(let i = 0; i < item.length; i++) {
    if(item[i].price < cheap) {
        cheap = item[i].price;
    }
}

console.log("The cheap one: " + cheap);


//Question 2.2
var expensive = 0;
for(let i = 0; i < item.length; i++) {
    if(item[i].price > expensive) {
        expensive = item[i].price;
    }
}
console.log("The expensive one: " + expensive);


//Question 2.3
var sum = 0;
for(let i = 0; i < item.length; i++) {
    sum += item[i].price
}
console.log("The sum: " + sum);


//Question 2.4
var sum = 0;
for(let i = 0; i < item.length; i++) {
    if(item[i].price >= 10) {
        sum += item[i].price
    }
}
console.log("The sum with the price over 10: " + sum);