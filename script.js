
//navgation 
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector(".menu");
    const navigation = document.querySelector("header .navigation");


    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});

//scroll screen bullet
document.addEventListener("DOMContentLoaded", function () {
    let left = document.querySelector(".button-left")
    let right = document.querySelector(".button-right")
    let min = document.querySelectorAll(".min")
    let images = document.querySelector(".images")
    let index = 0
    let time

    function position() {
        images.style.left = (index * -100) + "%"
    }

    function add() {
        if (index >= min.length - 1) {
            index = 0
        } else {
            index++
        }
    }

    function desc() {
        if (index < 1) {
            index = min.length - 1
        } else {
            index--
        }
    }

    function showContent() {
        const contentItems = document.querySelectorAll(".img .content");

        // hide content
        contentItems.forEach((content) => {
            content.style.opacity = 0;
        });

        // show related content
        contentItems[index].style.opacity = 1;
    }

    function updateContent() {
        showContent();
    }

    function timer() {
        time = setInterval(() => {
            index++
            desc()
            add()
            position()
        }, 3000)
    }

    left.addEventListener("click", () => {
        desc()
        position()
        clearInterval(time)
        updateContent();
        timer()
    })

    right.addEventListener("click", () => {
        add()
        position()
        clearInterval(time)
        updateContent();
        timer()
    })

    for (let i = 0; i < min.length; i++) {
        min[i].addEventListener("click", () => {
            index = i
            position()
            clearInterval(time)
            updateContent();
            timer()
        })
    }
    showContent();
    timer()
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.dest-info-card');

    let maxHeight = 0;

    cards.forEach((card) => {
        const mask = card.querySelector('.mask');
        const maskText = mask.querySelector('p');
        const textHeight = maskText.clientHeight;
        maxHeight = Math.max(maxHeight, textHeight);
    });

    cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
    });
});
