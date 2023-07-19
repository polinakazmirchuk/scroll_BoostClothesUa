
let button = document.querySelector(".button");
let prev = document.querySelector(".prev");
let prevTwo = document.querySelector(".arrow-left")


prev.addEventListener("click", prevFunc);
prevTwo.addEventListener("click", prevFunc)

button.addEventListener("click", scroll);

let containersForImg = document.querySelectorAll(".img");
let containersForName = document.querySelectorAll(".name");
let containersForPrice = document.querySelectorAll(".price");
let containersForCrossed = document.querySelectorAll(".crossed")

let imgOfItem = [
    "./img/005.jpg", "./img/006.jpg", "./img/007.jpg", "./img/008.jpg", "./img/010.png", "./img/005.jpg", "./img/006.jpg", "./img/007.jpg", "./img/008.jpg", "./img/010.png"
];
let nameOfItem = [
    "Худі оверсайз бірюзовий чоловічий",
    "Худі оверсайз Carhartt білий чоловічий",
    "Джинси Bershka 5217/666/401 38 Сині",
    "Купальник чорний х678",
    "Джинси OVS 1313549 158 см Azure",
    "Худі оверсайз бірюзовий чоловічий",
    "Худі оверсайз Carhartt білий чоловічий",
    "Джинси Bershka 5217/666/401 38 Сині",
    "Купальник чорний х678",
    "Джинси OVS 1313549 158 см Azure"
];
let priceOfItem = [
    "999 ₴",
    "699 ₴",
    "599 ₴",
    "799 ₴",
    "499 ₴",
    "999 ₴",
    "699 ₴",
    "599 ₴",
    "799 ₴",
    "499 ₴"
];

let crossedOfItem = ["1500 ₴", "1200 ₴", "1050 ₴", "1200 ₴", "680 ₴", "1500 ₴", "1200 ₴", "1050 ₴", "1200 ₴", "680 ₴"]
let indexOfItem = 1;

containersForName[0].innerText = nameOfItem[0];
containersForName[1].innerText = nameOfItem[1];
containersForName[2].innerText = nameOfItem[2];
containersForName[3].innerText = nameOfItem[3];

containersForPrice[0].innerText = priceOfItem[0];
containersForPrice[1].innerText = priceOfItem[1];
containersForPrice[2].innerText = priceOfItem[2];
containersForPrice[3].innerText = priceOfItem[3];

containersForCrossed[0].innerText = crossedOfItem[0];
containersForCrossed[1].innerText = crossedOfItem[1];
containersForCrossed[2].innerText = crossedOfItem[2];
containersForCrossed[3].innerText = crossedOfItem[3];

containersForImg[0].style.backgroundImage = `url(${imgOfItem[0]})`;
containersForImg[0].style.backgroundSize = "contain";
containersForImg[0].style.backgroundRepeat = "no-repeat";
containersForImg[0].style.backgroundPosition = "center";
containersForImg[1].style.backgroundImage = `url(${imgOfItem[1]})`;
containersForImg[1].style.backgroundSize = "contain";
containersForImg[1].style.backgroundRepeat = "no-repeat";
containersForImg[1].style.backgroundPosition = "center";
containersForImg[2].style.backgroundImage = `url(${imgOfItem[2]})`;
containersForImg[2].style.backgroundSize = "contain";
containersForImg[2].style.backgroundRepeat = "no-repeat";
containersForImg[2].style.backgroundPosition = "center";
containersForImg[3].style.backgroundImage = `url(${imgOfItem[3]})`;
containersForImg[3].style.backgroundSize = "contain";
containersForImg[3].style.backgroundRepeat = "no-repeat";
containersForImg[3].style.backgroundPosition = "center";

prev.style.visibility = "hidden"
prevTwo.style.visibility = "hidden"

function scroll() {
    if (indexOfItem == 4) {
        button.style.visibility = "hidden"
    }
    if (prev.style.visibility == "hidden") {
        prev.style.visibility = "visible"
        prevTwo.style.visibility = "visible"
    }
    if (indexOfItem == 6) {
        indexOfItem = 1;
        indexOfItem++;
        containersForImg[0].style.backgroundImage = `url(${imgOfItem[indexOfItem - 1]
            })`;
        containersForImg[1].style.backgroundImage = `url(${imgOfItem[indexOfItem]})`;
        containersForImg[2].style.backgroundImage = `url(${imgOfItem[indexOfItem + 1]
            })`;
        containersForImg[3].style.backgroundImage = `url(${imgOfItem[indexOfItem + 2]
            })`;
        containersForName[0].innerText = nameOfItem[indexOfItem - 1];
        containersForPrice[0].innerText = priceOfItem[indexOfItem - 1];
        containersForCrossed[0].innerText = crossedOfItem[indexOfItem - 1];
        containersForName[1].innerText = nameOfItem[indexOfItem];
        containersForPrice[1].innerText = priceOfItem[indexOfItem];
        containersForCrossed[1].innerText = crossedOfItem[indexOfItem];
        containersForName[2].innerText = nameOfItem[indexOfItem + 1];
        containersForPrice[2].innerText = priceOfItem[indexOfItem + 1];
        containersForCrossed[2].innerText = crossedOfItem[indexOfItem + 1];
        containersForName[3].innerText = nameOfItem[indexOfItem + 2];
        containersForPrice[3].innerText = priceOfItem[indexOfItem + 2];
        containersForCrossed[3].innerText = crossedOfItem[indexOfItem + 2];
    } else {
        indexOfItem++;
        containersForImg[0].style.backgroundImage = `url(${imgOfItem[indexOfItem - 1]
            })`;
        containersForImg[1].style.backgroundImage = `url(${imgOfItem[indexOfItem]})`;
        containersForImg[2].style.backgroundImage = `url(${imgOfItem[indexOfItem + 1]
            })`;
        containersForImg[3].style.backgroundImage = `url(${imgOfItem[indexOfItem + 2]
            })`;
        containersForName[0].innerText = nameOfItem[indexOfItem - 1];
        containersForPrice[0].innerText = priceOfItem[indexOfItem - 1];
        containersForCrossed[0].innerText = crossedOfItem[indexOfItem - 1];
        containersForName[1].innerText = nameOfItem[indexOfItem];
        containersForPrice[1].innerText = priceOfItem[indexOfItem];
        containersForCrossed[1].innerText = crossedOfItem[indexOfItem];
        containersForName[2].innerText = nameOfItem[indexOfItem + 1];
        containersForPrice[2].innerText = priceOfItem[indexOfItem + 1];
        containersForCrossed[2].innerText = crossedOfItem[indexOfItem + 1];
        containersForName[3].innerText = nameOfItem[indexOfItem + 2];
        containersForPrice[3].innerText = priceOfItem[indexOfItem + 2];
        containersForCrossed[3].innerText = crossedOfItem[indexOfItem + 2];
    }
}

function prevFunc() {
    if (button.style.visibility == "hidden") {
        button.style.visibility = "visible"
    }
    if (containersForName[0].innerText == "Худі оверсайз Carhartt білий чоловічий") {
        prev.style.visibility = "hidden"
        prevTwo.style.visibility = "hidden"
    }
    if (indexOfItem == 1) {
        indexOfItem == 6;
        containersForImg[0].style.backgroundImage = `url(${imgOfItem[indexOfItem - 1]
            })`;
        containersForImg[1].style.backgroundImage = `url(${imgOfItem[indexOfItem]})`;
        containersForImg[2].style.backgroundImage = `url(${imgOfItem[indexOfItem + 1]
            })`;
        containersForImg[3].style.backgroundImage = `url(${imgOfItem[indexOfItem + 2]
            })`;
        containersForName[0].innerText = nameOfItem[indexOfItem - 1];
        containersForPrice[0].innerText = priceOfItem[indexOfItem - 1];
        containersForCrossed[0].innerText = crossedOfItem[indexOfItem - 1];
        containersForName[1].innerText = nameOfItem[indexOfItem];
        containersForPrice[1].innerText = priceOfItem[indexOfItem];
        containersForCrossed[1].innerText = crossedOfItem[indexOfItem];
        containersForName[2].innerText = nameOfItem[indexOfItem + 1];
        containersForPrice[2].innerText = priceOfItem[indexOfItem + 1];
        containersForCrossed[2].innerText = crossedOfItem[indexOfItem + 1];
        containersForName[3].innerText = nameOfItem[indexOfItem + 2];
        containersForPrice[3].innerText = priceOfItem[indexOfItem + 2];
        containersForCrossed[3].innerText = crossedOfItem[indexOfItem + 2];
    } else {
        indexOfItem--;
        containersForImg[0].style.backgroundImage = `url(${imgOfItem[indexOfItem - 1]
            })`;
        containersForImg[1].style.backgroundImage = `url(${imgOfItem[indexOfItem]})`;
        containersForImg[2].style.backgroundImage = `url(${imgOfItem[indexOfItem + 1]
            })`;
        containersForImg[3].style.backgroundImage = `url(${imgOfItem[indexOfItem + 2]
            })`;
        containersForName[0].innerText = nameOfItem[indexOfItem - 1];
        containersForPrice[0].innerText = priceOfItem[indexOfItem - 1];
        containersForCrossed[0].innerText = crossedOfItem[indexOfItem - 1];
        containersForName[1].innerText = nameOfItem[indexOfItem];
        containersForPrice[1].innerText = priceOfItem[indexOfItem];
        containersForCrossed[1].innerText = crossedOfItem[indexOfItem];
        containersForName[2].innerText = nameOfItem[indexOfItem + 1];
        containersForPrice[2].innerText = priceOfItem[indexOfItem + 1];
        containersForCrossed[2].innerText = crossedOfItem[indexOfItem + 1];
        containersForName[3].innerText = nameOfItem[indexOfItem + 2];
        containersForPrice[3].innerText = priceOfItem[indexOfItem + 2];
        containersForCrossed[3].innerText = crossedOfItem[indexOfItem + 2];
    }
}