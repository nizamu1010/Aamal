document.addEventListener('DOMContentLoaded', function () {
    // Sample data structure for categories and subcategories
    const categoriesData = [
        {
            name: 'US Steel Conduit and Fittings',
            subcategories: ['EMT Conduit & Fittings', 'IMC/RSC Conduit & Fittings']
        },
        {
            name: 'Another Category',
            subcategories: ['Subcategory A', 'Subcategory B']
        }
        // Add more categories and subcategories as needed
    ];

    const categoriesContainer = document.querySelector('.categories');
    const productsContainer = document.querySelector('.products');
    const productDetailsContainer = document.querySelector('.product-details');

    // Function to create and load categories and subcategories
    function loadCategories() {
        categoriesData.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('category');

            const categoryName = document.createElement('span');
            categoryName.classList.add('category-name');
            categoryName.textContent = category.name;

            const subcategoriesList = document.createElement('ul');
            subcategoriesList.classList.add('subcategories');

            category.subcategories.forEach(subcategory => {
                const subcategoryItem = document.createElement('li');
                subcategoryItem.classList.add('subcategory');
                subcategoryItem.textContent = subcategory;
                subcategoriesList.appendChild(subcategoryItem);
            });

            categoryItem.appendChild(categoryName);
            categoryItem.appendChild(subcategoriesList);
            categoriesContainer.appendChild(categoryItem);
        });
    }

    // Function to show products for a given subcategory
    function showProductsBySubcategory(subcategoryName) {
        if (!productsContainer) return;
        productsContainer.innerHTML = '';

        const products = [
            { name: 'Product 1', image: 'images/p1.png', detailsPage: 'product-details.html' },
            { name: 'Product 2', image: 'images/p2.png', detailsPage: 'product-details.html' }
            // Add more products as needed
        ];

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            productCard.addEventListener('click', function () {
                window.location.href = product.detailsPage;
            });

            productCard.appendChild(image);
            productCard.appendChild(productName);
            productsContainer.appendChild(productCard);
        });

        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        for (let i = 1; i <= Math.ceil(products.length / 9); i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            paginationContainer.appendChild(pageLink);
        }

        productsContainer.appendChild(paginationContainer);
    }

    // Event listeners for categories and subcategories
    function setupEventListeners() {
        const categories = document.querySelectorAll('.category');

        categories.forEach(category => {
            category.addEventListener('click', function () {
                const subcategories = this.querySelector('.subcategories');
                if (subcategories) {
                    subcategories.style.display = subcategories.style.display === 'block' ? 'none' : 'block';
                }
            });
        });

        const subcategoryLinks = document.querySelectorAll('.subcategory');
        subcategoryLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const subcategoryName = this.textContent.trim();
                showProductsBySubcategory(subcategoryName);
            });
        });
    }

    // Initialize categories and event listeners
    loadCategories();
    setupEventListeners();

    // Automatically expand the first category and its first subcategory on page load
    const firstCategory = categoriesContainer.querySelector('.category');
    const firstSubcategory = firstCategory.querySelector('.subcategory');
    if (firstCategory && firstSubcategory) {
        firstCategory.querySelector('.subcategories').style.display = 'block';
        showProductsBySubcategory(firstSubcategory.textContent.trim());
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    // Function to show products for a given subcategory
    function showProductsBySubcategory(subcategoryName) {
        const productsContainer = document.querySelector('.products');
        // Example: Clear existing products
        productsContainer.innerHTML = '';

        // Example: Fetch products from API or predefined data
        const products = [
            { name: 'Product 1', image: 'images/p1.png', detailsPage: 'product-details.html' },
            { name: 'Product 2', image: 'images/p2.png', detailsPage: 'product-details.html' },
            // Add more products as needed
        ];

        // Example: Display products under the selected subcategory
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            // Redirect to product details page on click
            productCard.addEventListener('click', function () {
                window.location.href = product.detailsPage;
            });

            productCard.appendChild(image);
            productCard.appendChild(productName);

            productsContainer.appendChild(productCard);
        });
    }

    // Expand the first category and its first subcategory
    const firstCategory = categories[0];
    const firstSubcategory = firstCategory.querySelector('.subcategories');
    if (firstSubcategory) {
        firstSubcategory.style.display = 'block';
        // Simulate click on the first subcategory to show its products
        showProductsBySubcategory(firstSubcategory.dataset.subcategory); // Replace with actual data attribute used
    }
});



