// Element animations

anime.timeline().add({ //toni&guy
    targets: ".text h1 .hide--text",
    duration: 1000,
    translateY: ["100%", 0],
    easing: "easeOutExpo",
}).add({
    targets: ".text h2", //duality
    duration: 1500,
    opacity: [0, 1],
    translateX: ["-10000px", 0],
    easing: "easeOutExpo",
});

anime({ // COLLECTION 2017 DUALITY
    targets: ".text h3 .hide--text",
    duration: 800,
    translateY: ["100%", 0],
    easing: "easeInOutExpo",
});

anime({
    targets: "#paragraph",
    duration: 800,
    translateY: ["300%", 0],
    delay: 200,
    easing: "easeInOutElastic",
});

anime.timeline({ loop: false }).add({
    targets: '.button',
    translateY: ['1000px', 0],
    borderRadius: [0, '50%'],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
});

// Background particles

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 1000,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
