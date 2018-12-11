var timeline = anime.timeline({
    loop: true
});

let ishuara = document.querySelector('#ishuara');
let world = document.querySelector('#world');
let color = document.querySelector('#color');
let blind = document.querySelector('#blind');
let women = document.querySelector('#women');
let men = document.querySelector('#men');
let name = document.querySelector('#name');
let source = document.querySelector('#source');
let ishuara_circles = document.querySelectorAll('#ishuara circle');
let brouillage = document.querySelectorAll('circle[fill="#ACB4A5"], circle[fill="#D1D6AF"], circle[fill="#D7DAAA"], circle[fill="#E5D57D"], circle[fill="#9CA594"], circle[fill="#BBB964"]');
let numberFour = document.querySelectorAll('circle[fill="#F9BB82"], circle[fill="#FCCD84"], circle[fill="#EBA170"]');

timeline
    .add({
        targets: ishuara,
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        duration: 800
    })
    .add({
        targets: ishuara_circles,
        opacity: 0,
        offset: -800,
    })

    .add({
        targets: ishuara,
        delay: 1000
    })

    .add({
        targets: ishuara,
        translateX: "-50%",
        translateY: "-50%",
        scale: 0,
        backgroundColor: "#FFF"
    })
    .add({
        targets: name,
        translateY: "-100px",
        offset: "-=200ms"
    })
    .add({
        targets: source,
        translateY: "-100px",
        offset: "-=200ms"
    })
    .add({
        targets: ishuara_circles,
        opacity: 1,
        duration: 0
    })

    .add({
        targets: ishuara,
        translateX: "-50%",
        translateY: "-50%",
        scale: 2.5,
    })

    .add({
        targets: brouillage,
        translateY: '5000px',
        easing: 'easeInExpo',
        duration: function(el, i, l) {
            return (Math.random() * 700);
        },
        delay: function(el, i, l) {
            return i * 0.5;
        }
    })

    .add({
        targets: brouillage,
        opacity: 0,
        duration: 0,
    })

    .add({
        targets: ishuara,
        left: ['50%', '20%'],
        duration: 550,
    })

    .add({
        targets: world,
        opacity: [0, 1],
        left: ['100%', "37%"],
        top: ['37%', "37%"],
        offset: "-=300ms",
        duration: 300,
        easing: "easeInOutBack",
    })

    .add({
        targets: color,
        opacity: [0, 1],
        left: ['100%', "38%"],
        top: ['47%', "47%"],
        offset: "-=100ms",
        duration: 300,
        easing: "easeInOutBack",
    })

    .add({
        targets: blind,
        opacity: [0, 1],
        left: ['100%', "67%"],
        top: ['47%', "47%"],
        duration: 300,
        easing: "easeInOutBack",
    })

    .add({
        targets: ishuara,
        borderRadius: 0,
        duration: 30,
    })
    .add({
        targets: numberFour,
        fill: function(el, i, l) {
            if (i === 200) {
                return "#FFF";
            }
            if (i / l < 0.1) {
                return "#FCCD84";
            }
            return "#9CA594";
        },
        delay : function (el, i, l) {
            return i*5;
        },
        cy: function(el, i, l) {
            return Math.floor(i / 20) * 100 + 400;
        },
        cx: function(el, i, l) {
            return (i % 20) * 100 + 450 ;
        },
        r: "22",
        easing: "easeInOutQuart"
    })

    .add({
        targets: world,
        top: ['47%', '-20%'],
        easing: 'easeOutQuart',
        offset: "-=1000ms"
    })
    .add({
        targets: color,
        top: ['37%', '-20%'],
        easing: 'easeOutQuart',
        offset: "-=900ms"
    })
    .add({
        targets: blind,
        top: ['37%', '-20%'],
        easing: 'easeOutQuart',
        offset: "-=850ms"
    })
    .add({
        targets: ishuara,
        scale: [2.5, 5],
        translateX: ["-20%", "-10%"],
        translateY: ["-20%", "-5%"],
        left: ['20%','50%'],
        easing: "easeInOutQuart"
    })

    .add({
        targets: women,
        top: ['20%', '10%'],
        left: ['38%', '38%'],
        opacity: [0, 1],
        easing: 'easeOutCirc',
    })
    .add({
        targets: men,
        top: ['70%', '80%'],
        left: ['42%', '42%'],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        offset: '-=800ms'
    })

    .add({
        targets: women,
        top: ['10%', '20%'],
        left: ['38%', '38%'],
        opacity: [1, 0],
        easing: 'easeInCirc',
    })
    .add({
        targets: men,
        top: ['80%', '70%'],
        left: ['42%', '42%'],
        opacity: [1, 0],
        easing: 'easeInCirc',
        offset: '-=800ms'
    })

    .add({
        targets: numberFour,
        translateY: function (el, i, l) {
            return (Math.random() - .5) * 600;
        },
        translateX: function (el, i, l) {
            return(Math.random() - .5) * 600;
        },
        fill: '#000',
        duration: 350
    })

    .add({
        targets: ishuara,
        translateX: ["-35%", "-50%"],
        translateY: ["-35%", "-50%"],
        scale: 0,
        easing: 'easeInQuint',
        borderRadius: ["0%", "50%"],
        duration: 250
    })
    .add({
        targets: numberFour,
        opacity: 0,
        duration: 0,
    })
    .add({
        targets: ishuara,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "#000",
        scale: 1,
        duration: 600
    })
;