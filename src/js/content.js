/* 
document.addEventListener('DOMContentLoaded', () => {

    console.log("content component loaded");



        const menuItems = document.querySelectorAll('.left-menu li');
        const middlePanel = document.getElementById('middle-panel');
        const rightPanel = document.getElementById('right-panel');
    
        const contentData = {
            
            assar: {
                middle: 'Conteúdo do Assar',
                right: `<img src="${require('../images/acem.jpg')}" alt="Assar">`
            },
            cozer: {
                middle: 'Conteúdo do Cozer',
                right: `<img src="${require('../images/cachaco.jpg')}" alt="Cozer">`
            },
            fritar: {
                middle: 'Conteúdo do Fritar',
                right: `<img src="${require('../images/acem.jpg')}" alt="Fritar">`
            },

    
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                const contentKey = this.getAttribute('data-content');
                const content = contentData[contentKey];
    
                if (content) {
                    fadeOut(middlePanel, function() {
                        middlePanel.innerHTML = content.middle;
                        fadeIn(middlePanel);
                    });
    
                    fadeOut(rightPanel, function() {
                        rightPanel.innerHTML = content.right;
                        fadeIn(rightPanel);
                    });
                }
            });
        });
    
        function fadeOut(element, callback) {
            element.classList.remove('show');
            setTimeout(function() {
                callback();
            }, 500); // Match this time with CSS transition duration
        }
    
        function fadeIn(element) {
            setTimeout(function() {
                element.classList.add('show');
            }, 10);
        }
    


});
*/
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.left-menu li');
    const middlePanel = document.getElementById('middle-panel');
    const rightPanel = document.getElementById('right-panel');

    const contentData = {
        Assar: {
            title: 'Assar',
            items: ['Cachaço', 'Acém Redondo', 'Vazia e Lombo', 'Picanha', 'Aba'],
            content: {
                title: 'Assar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Assar...'
            }
        },
        Cozer: {
            title: 'Cozer',
            items: ['Item A', 'Item B', 'Item C', 'Item D'],
            content: {
                title: 'Cozer Content',
                img: `<img src="${require('../images/cachaco.jpg')}" alt="Assar">`,
                description: 'Description for Cozer...'
            }
        },
        Fritar: {
            title: 'Fritar',
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            content: {
                title: 'Fritar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Fritar...'
            }
        },
        Guisar: {
            title: 'Guisar',
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            content: {
                title: 'Guisar Content',
                img: `<img src="${require('../images/cachaco.jpg')}" alt="Assar">`,
                description: 'Description for Guisar...'
            }
        },
        Grelhar: {
            title: 'Grelhar',
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            content: {
                title: 'Grelhar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Grelhar...'
            }
        }
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const contentKey = this.getAttribute('data-content');
            const data = contentData[contentKey];

            if (data) {
                fadeOut(middlePanel, function() {
                    middlePanel.innerHTML = `<h2>${data.title}</h2>${data.items.map(item => `<p>${item}</p>`).join('')}`;
                    fadeIn(middlePanel);
                });

                fadeOut(rightPanel, function() {
                    rightPanel.innerHTML = `<h2>${data.content.title}</h2>${data.content.img}<p>${data.content.description}</p>`;
                    fadeIn(rightPanel);
                });
            }
        });
    });

    function fadeOut(element, callback) {
        element.classList.remove('show');
        setTimeout(function() {
            callback();
        }, 200); // same as the time in CSS transition duration
    }

    function fadeIn(element) {
        setTimeout(function() {
            element.classList.add('show');
        }, 10);
    }
});