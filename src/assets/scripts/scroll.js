// BUTTON THAT RETURNS TO TOP-PAGE

document.addEventListener("DOMContentLoaded", function() {
    let mybutton = document.getElementById("btn-up");

    // When user scrolls down 20px from the top, show button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When user clicks button, scroll to top
    mybutton.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});