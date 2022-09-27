fetch('https://dummyjson.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    let data2="";
    completedata.products.map(function(e) {
        data1+=`<div class="card">
        <h1 class="title">${e.title}</h1>
        <img src="${e.images[0]}" alt="img" class="images">
        <p>${e.description}</p>
        <p class="price">Price:$${e.price}</p>
        <p class="cart">Discount:${e.discountPercentage}</p>
        <p class="cart">Rating:${e.rating}</p>
        <p class="cart">Stock:${e.stock}</p>
        <p class="cart">Brand:${e.brand}</p>
        <p class="cart">Category:${e.category}</p>
        <button class="add1" onclick="window.open('form1.html')">Add to Cart</button>
    </div>`
    data2+=`<datalist id="q">
    <option>${e.title}  <p>${e.category}</p></option>
    </datalist>`
    });
    document.getElementById("cards").innerHTML=data1;
    document.getElementById("q").innerHTML=data2;
    
}).catch((err)=>{
    console.log(err);
})