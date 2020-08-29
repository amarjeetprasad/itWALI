$('.icon').click(function () {
    $('#burger').toggleClass("cancel");
});

let searchtxt = document.querySelector('.search-txt');

function show() {
    if (searchtxt.style.display == "inline") {
        searchtxt.style.display = "none"
    } else {
        searchtxt.style.display = "inline"
    }
}

$('.subs').click(function () {
    $('.popup').css('display', 'block')
})

$(document).ready(function () {
    setTimeout(function () {
        $('.popup').css('display', 'block')
    }, 10000);
});

$('.submit-button').click(function () {
    $('.popup').css('display', 'none')
})
$('.cancle').click(function () {
    $('.popup').css('display', 'none')
});



let english = document.getElementById('english');
let hindi = document.getElementById('hindi');

function hide1() {
    hindi.style.display = "block";
    english.style.display = "none";
}

function hide2() {
    hindi.style.display = "none";
    english.style.display = "block";
}

