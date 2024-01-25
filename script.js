var number_cart = 0;

function AddToCarts(id) {
    document.getElementById('cart-number').innerHTML=++number_cart;
    console.log(id)
    var productName = document.querySelector(`#${id} h5`).innerHTML;
    console.log(productName)
    var price = document.querySelector(`#${id} p`).innerHTML;
    console.log(price)
    var items = {
        name: 'productName',
        price: 'price',
    };
    Product.push('items');
    console.log(items)
};

Product=[];
