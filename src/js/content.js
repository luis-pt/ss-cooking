document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.left-menu li');
    const middlePanel = document.getElementById('middle-panel');
    const rightPanel = document.getElementById('right-panel');
    const subMenuItems = middlePanel.querySelectorAll('li');

    const contentData = {
        assar: {
            title: 'Assar',
            items: ['Cachaço', 'Acém Redondo', 'Vazia e Lombo', 'Picanha', 'Aba'],
            content: {
                title: 'Assar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Assar...'
            },
            dynamicItems: {

            }
        },
        cozer: {
            title: 'Cozer',
            items: ['Cachaço', 'Vazia e Lombo', 'Picanha', 'Aba'],
            content: {
                title: 'Cozer Content',
                img: `<img src="${require('../images/cachaco.jpg')}" alt="Assar">`,
                description: 'Description for Cozer...'
            }
        },
        fritar: {
            title: 'Fritar',
            items: ['Vazia e Lombo', 'Picanha', 'Aba'],
            content: {
                title: 'Fritar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Fritar...'
            }
        },
        guisar: {
            title: 'Guisar',
            items: ['Acém Redondo', 'Vazia e Lombo', 'Aba'],
            content: {
                title: 'Guisar Content',
                img: `<img src="${require('../images/cachaco.jpg')}" alt="Assar">`,
                description: 'Description for Guisar...'
            }
        },
        grelhar: {
            title: 'Grelhar',
            items: ['Aba', 'Acém Redondo', 'Vazia e Lombo', 'Picanha', 'Cachaço'],
            content: {
                title: 'Grelhar Content',
                img: `<img src="${require('../images/acem.jpg')}" alt="Assar">`,
                description: 'Description for Grelhar...'
            }
        }
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');

            const contentKey = this.getAttribute('data-content');
            const data = contentData[contentKey];
            if (data) {
                fadeOut(middlePanel, function() {
                    // <h2 class="middle-title">${data.title}</h2>
                    middlePanel.innerHTML = ` 
                        <ul>${data.items.map(item => `<li data-subitem="${item}">${item}</li>`).join('')}</ul>
                    `;
                    fadeIn(middlePanel);
                });
                fadeOut(rightPanel, function() {
                    rightPanel.innerHTML = `
                        <h2>${data.content.title}</h2>
                        ${data.content.img}
                        <p>${data.content.description}</p>
                    `;
                    fadeIn(rightPanel);
                });
            }
        });
    });
    subMenuItems.forEach(subItem => {
        
        subItem.addEventListener('click', function() {
            const contentKey = this.getAttribute('data-subitem');
            const data = contentData[contentKey];
            if (data) {
                alert(data);
            } else {
                alert(" no data");
            }
        });
    });

    function fadeOut(element, callback) {
        element.classList.remove('show');
        setTimeout(function() {
            callback();
        }, 200); // confirmar que o timing é o mesmo da transition no css 
    }

    function fadeIn(element) {
        setTimeout(function() {
            element.classList.add('show');
        }, 10);
    }
});