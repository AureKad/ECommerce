const cartImg = document.querySelectorAll(".cart__img");
const cart_prod = document.querySelector(".cart-products");
const cart = document.querySelector(".cart");
const cart_li = document.querySelector(".cart__li");
const cart_button = document.querySelector(".cart__checkout");
const cart_empty = document.querySelector(".cart__empty");
const cart_trash = document.querySelector(".cart__li__trash");
const amount = document.querySelector(".amount");
const total = document.querySelector(".total");
const hamburgers = document.querySelectorAll(".header__hamburger");
const ham_menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");
const fade_elems = document.querySelectorAll(".has-fade");
const hero_img = document.querySelector(".hero__images");
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const img1 = document.querySelectorAll(".img1");
const img2 = document.querySelectorAll(".img2");
const img3 = document.querySelectorAll(".img3");
const img4 = document.querySelectorAll(".img4");
const zoom = document.querySelector(".zoom-in");
const zoom_img = document.querySelector(".zoom-in__img");
const close = document.querySelector(".close");

var ordering = 0;
var inCart = 0;

function cartfunc() {
    console.log("cart opened");
    if (cart.classList.contains('is-hidden')) {
        cart.classList.remove('is-hidden');
    } else {
        cart.classList.add('is-hidden');
    }
}


hamburgers.forEach(function (hamburger) {
    hamburger.addEventListener('click', function() {
        console.log("hamburger opened");
        cart.classList.add('is-hidden');

        if (ham_menu.classList.contains('open')) {
            ham_menu.classList.remove('open');
            ham_menu.classList.remove('fade-in');
            ham_menu.classList.add('fade-out');
            overlay.classList.remove('fade-in');
            overlay.classList.add('fade-out');
        } else {
            ham_menu.classList.add('open');
            ham_menu.classList.add('fade-in');
            ham_menu.classList.remove('fade-out');
            overlay.classList.add('fade-in');
            overlay.classList.remove('fade-out');
        }
    })
});

next.forEach(function(elem) {
    elem.addEventListener('click', function() {
        if (hero_img.classList.contains('image1')) {
            changeToImg2()
        } else if (hero_img.classList.contains('image2')) {
            changeToImg3()
        } else if (hero_img.classList.contains('image3')) {
            changeToImg4()
        } else {
            changeToImg1()
        }
    });
})
prev.forEach(function(elem) {
    elem.addEventListener('click', function() {
        if (hero_img.classList.contains('image1')) {
            changeToImg4();
        } else if (hero_img.classList.contains('image2')) {
            changeToImg1()
        } else if (hero_img.classList.contains('image3')) {
            changeToImg2()
        } else {
            changeToImg3()
        }
    });
})

plus.addEventListener('click', function() {
    ordering++;
    update();
});

minus.addEventListener('click', function() {
    if (ordering!=0) {
        ordering--;
    }
    update();
});

close.addEventListener('click',removeOverlay);

cart_trash.addEventListener('click', function() {
    inCart--;
    changeCart();
    update();
})

let largeWidth = window.matchMedia("(min-width: 64rem)");
largeWidth.addEventListener('change', function(mm) {
    console.log("screenchange")
    if (mm.matches) {
        hero_img.addEventListener('click', removeOverlay);
    }
    else {
        hero_img.removeEventListener('click', removeOverlay);
    }
});
if (largeWidth.matches) {
    hero_img.addEventListener('click', removeOverlay);
}
else {
    hero_img.removeEventListener('click', removeOverlay);
}


function removeOverlay() {
    if (zoom.classList.contains("fade-in")) {
        zoom.classList.remove('fade-in');
        zoom.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        zoom.classList.add('fade-in');
        zoom.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
}

function update() {
    document.querySelector(".ordering").innerHTML=ordering;
    amount.innerHTML= inCart;
    var totalsum = "$"+(inCart*125).toFixed(2);
    total.innerHTML = totalsum;
}

function addToCart() {
    inCart+=ordering;
    ordering=0;
    changeCart();
    update();
}

function changeCart() {
    if (inCart!=0) {
        cart_prod.classList.remove('is-hidden');
        cart_li.classList.remove('is-hidden');
        cart_button.classList.remove('is-hidden');
        cart_empty.classList.add('is-hidden');
    } else {
        cart_prod.classList.add('is-hidden');
        cart_li.classList.add('is-hidden');
        cart_button.classList.add('is-hidden');
        cart_empty.classList.remove('is-hidden');
    }
    cart_prod.innerHTML=inCart;
}
function changeToImg() {
    hero_img.classList.remove('image1');
    hero_img.classList.remove('image2');
    hero_img.classList.remove('image3');
    hero_img.classList.remove('image4');
    zoom_img.classList.remove('image1');
    zoom_img.classList.remove('image2');
    zoom_img.classList.remove('image3');
    zoom_img.classList.remove('image4');
    img1.forEach(function(elem) {
        elem.classList.remove('shown');
    });
    img2.forEach(function(elem) {
        elem.classList.remove('shown');
    });
    img3.forEach(function(elem) {
        elem.classList.remove('shown');
    });
    img4.forEach(function(elem) {
        elem.classList.remove('shown');
    });
}
function changeToImg1() {
    changeToImg();
    img1.forEach(function(elem) {
        hero_img.classList.add('image1');
        zoom_img.classList.add('image1');
        elem.classList.add('shown');
    })
}
function changeToImg2() {
    changeToImg();
    img2.forEach(function(elem) {
        hero_img.classList.add('image2');
        zoom_img.classList.add('image2');
        elem.classList.add('shown');
    })
}
function changeToImg3() {
    changeToImg();
    img3.forEach(function(elem) {
        hero_img.classList.add('image3');
        zoom_img.classList.add('image3');
        elem.classList.add('shown');
    })
}
function changeToImg4() {
    changeToImg();
    img4.forEach(function(elem) {
        hero_img.classList.add('image4');
        zoom_img.classList.add('image4');
        elem.classList.add('shown');
    })
}


cartImg.forEach(function(img) {
    img.addEventListener('click', cartfunc);
})