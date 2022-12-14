// edit shopping card
$('#edit-btn').click(function() {
    var x = document.getElementById("edit-btn");
    if (x.innerHTML === "edit") {
        x.innerHTML = "cancel";
        $(".shopping-bag-order-btn" ).css('background', 'var(--red)');
        $(".span").toggle();
        $(".shopping-bag-order-btn").append("<span class=\"cap span delete\">delete 2 items</span>");
        $(".quantity").toggle();
        $(".food-card-title").append("<div class=\"check\"></div>");
    } else {
        x.innerHTML = "edit";
        $(".shopping-bag-order-btn" ).css('background', 'var(--green');
        $(".span").toggle();
        $(".delete").toggle();
        $(".quantity").toggle();
        $(".check").toggle();
    }
});


// carousel of today's meal card
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});