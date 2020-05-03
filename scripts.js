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
    if ($('p').length < 5) {
        $('main').append('<p>A p is appended in the main.</p>');
    } else {
        console.log('We have reached the max. paragraph number!');
    }
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove()
});

let colors = ['orange', 'red', 'blue', 'green', 'black'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background',color);
});

for (let i = 0; i < 112; i++) {
console.log("I'll not give up!"); 
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

let name = 'Gabor'
let age = 27;

// $('css selector').action()
