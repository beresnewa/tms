var burger = document.getElementById("burger")
var menu = document.getElementById("menu")
var bg = document.getElementById("bg")

burger.addEventListener("click", function () {

    var isCross = this.classList.contains("cross")
    if (isCross) {
        this.classList.remove("cross")
        menu.classList.remove("visible")
        bg.classList.remove("bg")
    } else {
        this.classList.add("cross")
        menu.classList.add("visible")
        bg.classList.add("visible")

    }

})

$('.container-all-rewiew').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },

        {
            breakpoint: 570,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        
        }
    ]
});