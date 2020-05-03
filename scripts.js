console.log('Script file is loaded');
$('h1').text('This is done by JavaScript');
$('h2').toggleClass('blue');

var number = 1;

function addLike(){
    var count = document.getElementById('count');
    number++;
    count.innerHTML = number;
}


$('#like').click(addLike);

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main.</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove()
});


let name = 'Gabor'
let age = 27;

// $('css selector').action()
