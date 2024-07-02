document.addEventListener('DOMContentLoaded', function() {
        
    const leftMenuItems = document.querySelectorAll('#left-menu button'),
    middleMenuItemsContainer = document.getElementById('middle-menu-items'),
    rightPanelImage1 = document.getElementById('slide-img-1'),
    rightPanelTitle1 = document.getElementById('slide-title-1'),
    rightPanelDescription1 = document.getElementById('slide-description-1'),
    rightPanelImage2 = document.getElementById('slide-img-2'),
    rightPanelTitle2 = document.getElementById('slide-title-2'),
    rightPanelDescription2 = document.getElementById('slide-description-2'),
    prevButton = document.getElementById('prev'),
    nextButton = document.getElementById('next');
    
    // 
    // INJECT FAKE DATA
    // 
    const data = {
        assar: {
            'Cachaço': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Cachaço', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi! ' },
                { src: `${require("../images/acem.jpg")}`, title: 'Cachaço', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis.  dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/cachaco.jpg")}`, title: 'Cachaço', description: 'Lorem sit, amet  elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/cachaco.jpg")}`, title: 'Cachaço', description: 'Ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/acem.jpg")}`, title: 'Cachaço', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!3' }
            ],
            'Acém-Redondo': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Acém Redondo', description: 'Lorem elit.  reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/acem.jpg")}`, title: 'Acém Redondo', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!2' }
            ],
            'Vazia-e-Lombo': [
                { src: `${require("../images/acem.jpg")}`, title: 'Vazia e Lombo', description: 'Lorem ipsum dolor sit, amet  tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/cachaco.jpg")}`, title: 'Vazia e Lombo', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!2' }
            ],
            'Picanha': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Picanha 1', description: 'Lorem ipsum dolor tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/acem.jpg")}`, title: 'Picanha 2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!2' }
            ],
            'Aba': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Aba 1', description: 'Lorem ipsum inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!' },
                { src: `${require("../images/cachaco.jpg")}`, title: 'Aba 2', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!2' }
            ]
        },
        cozer: {
            'Acém-Comprido': [
                { src: `${require("../images/acem.jpg")}`, title: 'Acém Comprido', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!o' }
            ]
        },
        fritar: {
            'Acém-Comprido': [
                { src: `${require("../images/acem.jpg")}`, title: 'Acém Comprido', description: 'Description for Acém Comprido' }
            ],
            'Pá': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Pá', description: 'Description for Pá' }
            ]
        },
        guisar: {
            'Pá': [
                { src: `${require("../images/cachaco.jpg")}`, title: 'Pá', description: 'Description for Pá' }
            ],
            'Acém-Comprido': [
                { src: `${require("../images/acem.jpg")}`, title: 'Acém Comprido', description: 'Description for Acém Comprido' }
            ]
        },
        grelhar: {
            'Acém-Comprido': [
                { src: `${require("../images/acem.jpg")}`, title: 'Acém Comprido', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita tempora inventore reiciendis perferendis? Explicabo, perferendis. Numquam quo deleniti, quas esse a, pariatur, officiis dolorum corporis obcaecati hic saepe excepturi!o' }
            ]
        }
    };

    // 
    // LOGIC PART HERE :)
    // 
    let currentCategory = 'assar';
    let currentSubCategoryIndex = 0;
    let currentItems = Object.keys(data[currentCategory]);

    leftMenuItems.forEach(item => {
        item.addEventListener('click', event => {
            const category = event.target.getAttribute('data-category');
            loadMiddleMenu(category);
        });
    });

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    function loadMiddleMenu(category) {
        currentCategory = category;
        currentSubCategoryIndex = 0;
        currentItems = Object.keys(data[category]);
        highlightActiveMenuItem(leftMenuItems, category);
        middleMenuItemsContainer.innerHTML = ''; // limpa o previous item
        currentItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('text-gray-500');
            button.textContent = item.replace(/-/g, ' ');
            button.setAttribute('data-subcategory', item);
            button.addEventListener('click', () => loadRightPanel(index));
            listItem.appendChild(button);
            middleMenuItemsContainer.appendChild(listItem);
        });

        // carrega o primeiro item no middle panel por defeito
        if (currentItems.length > 0) {
            loadRightPanel(0);
        }
    }

    function loadRightPanel(index) {
        currentSubCategoryIndex = index;
        highlightActiveMenuItem(document.querySelectorAll('#middle-menu-items button'), currentItems[index]);
        updateSlide();
    }

    function updateSlide() {
        if (currentItems.length === 0) return;
        const currentItem = currentItems[currentSubCategoryIndex];
        const { src, title, description } = data[currentCategory][currentItem][0];
        rightPanelImage1.src = src;
        rightPanelTitle1.textContent = title;
        rightPanelDescription1.textContent = description;

        if (currentItems.length > 1) {
            const nextItemIndex = (currentSubCategoryIndex + 1) % currentItems.length;
            const nextItem = currentItems[nextItemIndex];
            const { src: src2, title: title2, description: description2 } = data[currentCategory][nextItem][0];
            rightPanelImage2.src = src2;
            rightPanelTitle2.textContent = title2;
            rightPanelDescription2.textContent = description2;
            rightPanelImage2.style.visibility = 'visible';
            rightPanelTitle2.style.visibility = 'visible';
            rightPanelDescription2.style.visibility = 'visible';
            prevButton.disabled = false;
            nextButton.disabled = false;
        } else {
            rightPanelImage2.src = '';
            rightPanelTitle2.textContent = '';
            rightPanelDescription2.textContent = '';
            rightPanelImage2.style.visibility = 'hidden';
            rightPanelTitle2.style.visibility = 'hidden';
            rightPanelDescription2.style.visibility = 'hidden';
            prevButton.disabled = true;
            nextButton.disabled = true;
        }
    }

    function prevSlide() {
        if (currentItems.length === 0) return;
        currentSubCategoryIndex = (currentSubCategoryIndex > 0) ? currentSubCategoryIndex - 1 : currentItems.length - 1;
        loadRightPanel(currentSubCategoryIndex);
    }

    function nextSlide() {
        if (currentItems.length === 0) return;
        currentSubCategoryIndex = (currentSubCategoryIndex < currentItems.length - 1) ? currentSubCategoryIndex + 1 : 0;
        loadRightPanel(currentSubCategoryIndex);
    }

    function highlightActiveMenuItem(menuItems, activeItem) {
        menuItems.forEach(item => {
            if (item.getAttribute('data-category') === activeItem || item.getAttribute('data-subcategory') === activeItem) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // carrega o middle menu com a categoria inicial
    loadMiddleMenu('assar');

});