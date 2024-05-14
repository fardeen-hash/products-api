


const fetchData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    let products = await result.json();
    console.log(products);
    const productContainer = document.getElementById('product-container');
    products.map((product) => {
        console.log(product);
        let productCard = document.createElement('div');
        productCard.className = "card product-card";
        productCard.innerHTML = `
            <div class="card-body product-card-content">
            <div>
                <img class="product-img" src="${product.image}" alt="" width="80%">
                <div>
                <h4>${product.title}</h4>
                <h6>${product.category}</h6>
                <h4>$${product.price}</h4>
                </div>
                </div>
                
                
              
                
            </div>

            `;
        // <p>${product.description}</p>
        productContainer.appendChild(productCard);
    })
    // return  products;
}

fetchData()
// console.log(data);

