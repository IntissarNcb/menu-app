// $('.edit-btn').click(function() {
//     $('#foo').addClass('myClass'); // class i want to change
// });



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