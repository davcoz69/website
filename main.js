function copyText() {
    var popup = document.getElementById("myPopup");
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("davcoz26@gmail.com");
    popup.classList.toggle("show");
}

function dropDown(){
    var dropdown = document.getElementById("test");
    dropdown.classList.toggle("show");
}