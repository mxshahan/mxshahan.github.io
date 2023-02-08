$('.loader_bg').delay(01).fadeOut('slow');
$('.loaderlogoDiv').delay(01).fadeOut('slow');

$(document).ready(function () {
    $('.body').hide().delay(1000).fadeIn('slow');
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('loaderOwl'),
    path: './Assets/loader.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('logo'),
    path: './Assets/logo.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('character'),
    path: './Assets/character.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('hello'),
    path: './Assets/hello.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});


