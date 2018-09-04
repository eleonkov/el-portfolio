$(document).ready(function () {

    'use strict';

    /*-------- Custom scripts --------*/

    var $mainMenuLinks = $('#menu a');
    var $toggleButton = $('.main-menu__toggle');
    var $toggleCollapse = $('.main-menu__collapse');

    $toggleButton.on('click', function () {
        $(this).toggleClass('on');
        $toggleCollapse.toggleClass('on');
    });

    $mainMenuLinks.on('click', function () {
        $toggleButton.click();
    });

    /*-------- FullPage JS --------*/

    $('#fullpage').fullpage({
        anchors: ['main', 'portfolio', 'skills', 'contacts'],
        menu: '#menu',
        scrollingSpeed: 1000,
        responsiveWidth: 768,
        easingcss3: 'ease-in-out',

        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            console.log(origin);

            if (origin == 'main') {

            }
        }
    });

    /*-------- Particleground JS --------*/

    $('body').particleground({
        dotColor: 'rgba(255, 255, 255, 0.5)',
        lineColor: 'rgba(255, 255, 255, 0.05)',
        minSpeedX: 0.5,
        maxSpeedX: 0.5,
        minSpeedY: 0.075,
        maxSpeedY: 0.15,
        density: 20000,
        parallaxMultiplier: 20,
        particleRadius: 5,
    });

    /*-------- GreenSock JS --------*/

    var rocketGS = document.getElementsByClassName('rocket'),
        rocketTL = new TimelineLite({onComplete: reRocketTL});

    rocketTL
        .to(rocketGS, getRandom(2, 4), {x: getRandom(10, 15), y: getRandom(-10, -15)})
        .to(rocketGS, getRandom(2, 4), {x: 0, y: 0});

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function reRocketTL() {
        TweenLite.to(rocketGS, 0.5, {
            onComplete: function () {
                rocketTL.restart()
            }
        });
    }

});