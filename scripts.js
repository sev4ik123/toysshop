function flipCard(card) {
    card.classList.toggle('flip');
}

async function loadProducts() {
    try {
        const response = await fetch('goods.json');
        const products = await response.json();
        const container = document.getElementById('product-container');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <div class="front">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${product.price}₽</p>
                    <button class="buy-button">Купить</button>
                </div>
                <div class="back">
                    <p class="product-description">${product.description}</p>
                </div>
            `;
            productCard.addEventListener('click', (e) => {
                if (!e.target.classList.contains('buy-button')) {
                    flipCard(productCard); 
                }
            });
            container.appendChild(productCard);
        });
    } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
    }
}
document.addEventListener('DOMContentLoaded', loadProducts);
