var products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99']
var total = 0

for (var i = 0; i < products.length; i++) {
    let [name, price] = products[i].split(':')
    price = Number(price)
    console.log(`Nome: ${name}, Preço: ${price}`);
    total += price
}

console.log('Total: $' + total.toFixed(2))