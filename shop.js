const product = [
    {
        id: 0,
        image: '1.jpg',
        title: 'Colombus Men Running Shoes',
        price: 60,
    },
    {
        id: 1,
        image: '2.webp',
        title: 'Barsache Lightwight Running Shoes',
        price: 50,
    },
    {
        id: 2,
        image: '3.webp',
        title: 'Jordan Shoes',
        price: 29,
    },
    {
        id: 3,
        image: '4.jfif',
        title: 'Nike Shoes',
        price: 35,
    },

    {
        id: 4,
        image: '5.webp',
        title: 'Mens Kalenji Shoes',
        price: 39,
    },

    {
        id: 5,
        image: '6.webp',
        title: 'Campus Shoes',
        price: 45,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                 <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    
    function displaycart(){
        let j = 0, total = 0;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    }