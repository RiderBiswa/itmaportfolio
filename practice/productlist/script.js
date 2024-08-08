
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');

    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("single product details", data[2]);

                displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
                productList.innerHTML = 'Failed to load products. Please try again';
        }); 
    }

        function displayProducts (products) {
            productList.innerHTML=''; 

            products.forEach(product =>{
            const productElement = document.createElement('div');
            productElement.classList.add("product");    
            productElement.innerHTML =`
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: ₹${product.price.toFixed(2)}</p>
            `;
            productList.appendChild(productElement);
        });

    }

    fetchProducts();
    });