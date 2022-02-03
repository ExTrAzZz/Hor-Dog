const hits_left_arrow = document.querySelector(".left-slider-arrow");
const hits_right_arrow = document.querySelector(".right-slider-arrow");
const add_favorite = document.querySelectorAll(".slider-favorite img");

const update = () => {
    document.querySelectorAll(".content-slider").forEach(function (element, count) { // Отобразить только первые 4-ре элемента в слайдере с Хитами
        if (count < 4)
        {
            element.style.display = "block";
            if (count != 3)
                element.style.marginRight = "16px";
            count++;
        } else {
            element.style.display = "none";
        }
    });
}
update();
let pos = 0;
hits_left_arrow.addEventListener("click", () => {
    let first = 0;
    document.querySelectorAll(".content-slider").forEach(function (element, count) {
        if (first == pos)
            return;
        if (count >= pos-1 && count <= pos+3)
        {
            if (pos-1 == count)
            {
                element.style.display = "block";
                element.style.marginRight = "16px";
            }
            if (count == pos+2)
            {
                element.style.marginRight = "0px";
            } 
            if (count == pos+3)
            {
                element.style.display = "none";
                element.style.marginRight = "0px";
            }
        }
    });
    if(pos != 0)
        pos--;
});
hits_right_arrow.addEventListener("click", () => {
    let last = document.querySelectorAll(".content-slider").length;
    document.querySelectorAll(".content-slider").forEach(function (element, count) {
        if (last == pos+4)
            return;
        if (count >= pos && count <= pos+4)
        {
            if (pos == count)
            {
                element.style.display = "none";
                element.style.marginRight = "0px";
            } 
            if (count == pos+3)
                element.style.marginRight = "16px";
            if (count == pos+4)
                element.style.display = "block";
        }
    });
    if(last != pos+4)
        pos++;
});
add_favorite.addEventListener("click", () => { // Добавление в избранное   
    this.style.fill = "red";
});