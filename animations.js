/**
 * Copy to Clipboard
 */

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(function() {
            console.log('Async: Copying to clipboard was successful!');
            alert('Copied to clipboard!');
        })
        .catch(function(err) {
            console.error('Async: Could not copy text: ', err);
        });
}

/**
 * Element animations
 */

anime.timeline().add({
    targets: '.text h1 .hide--text',
    duration: 1000,
    translateY: ['150%', 0],
    easing: 'easeOutExpo',
}).add({
    targets: '.text h2',
    duration: 1500,
    opacity: [0, 1],
    translateX: ['-300%', 0],
    easing: 'easeOutExpo',
});

anime({
    targets: '.text h3 .hide--text',
    duration: 800,
    translateY: ['100%', 0],
    easing: 'easeInOutExpo',
});

anime({
    targets: '#paragraph',
    duration: 800,
    translateY: ['300%', 0],
    delay: 200,
    easing: 'easeInOutElastic',
});

anime.timeline({ loop: false }).add({
    targets: '.button',
    translateY: ['5000%', 0],
    borderRadius: ['10%', '50%'],
    duration: 1000,
    delay: anime.stagger(100, { start: 300 }),
    easing: 'easeOutExpo',
});

/**
 * Parallax
 */

let scene = document.getElementById('scene', { invertX: false, invertY: false });
let parallax = new Parallax(scene);

/**
 * Image tilt
 */

let isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);
if (!isMobile) {
    VanillaTilt.init(document.querySelectorAll("#avatar"), {
        reverse: true,
        max: 15,
        glare: true,
        "max-glare": 2.5,
        gyroscope: false,
    });
}

/**
 * Background particles
 */

particlesJS('particles-js', {
    'particles': {
        'number': {
            'value': 650,
            'density': {
                'enable': true,
                'value_area': 789.1476416322727
            }
        },
        'color': {
            'value': '#ffffff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0,
                'color': '#000000'
            },
            'polygon': {
                'nb_sides': 5
            },
            'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
            }
        },
        'opacity': {
            'value': 0.48927153781200905,
            'random': false,
            'anim': {
                'enable': true,
                'speed': 0.2,
                'opacity_min': 0,
                'sync': false
            }
        },
        'size': {
            'value': 2,
            'random': true,
            'anim': {
                'enable': true,
                'speed': 2,
                'size_min': 0,
                'sync': false
            }
        },
        'line_linked': {
            'enable': false,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
        },
        'move': {
            'enable': true,
            'speed': 0.2,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'bubble'
            },
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            'resize': true
        },
        'modes': {
            'grab': {
                'distance': 400,
                'line_linked': {
                    'opacity': 1
                }
            },
            'bubble': {
                'distance': 83.91608391608392,
                'size': 1,
                'duration': 3,
                'opacity': 1,
                'speed': 3
            },
            'repulse': {
                'distance': 200,
                'duration': 0.4
            },
            'push': {
                'particles_nb': 4
            },
            'remove': {
                'particles_nb': 2
            }
        }
    },
    'retina_detect': true
});

/**
 * Fireworks particles animations
 */

window.human = false;

let canvasEl = document.querySelector('.fireworks');
let ctx = canvasEl.getContext('2d');
let numberOfParticles = 30;
let pointerX = 0;
let pointerY = 0;
let tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
let colors = ['#CE2029', '#FFFCAF', '#FFE17C', '#FF664B', '#903843'];

function setCanvasSize() {
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth;
    canvasEl.style.height = window.innerHeight;
    canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
    pointerX = e.clientX ?? e.touches[0].clientX;
    pointerY = e.clientY ?? e.touches[0].clientY;
}

function setParticleDirection(p) {
    let angle = anime.random(0, 360) * Math.PI / 180;
    let value = anime.random(50, 180);
    let radius = [-1, 1][anime.random(0, 1)] * value;
    return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
    }
}

function createParticle(x,y) {
    let p = {};
    p.x = x;
    p.y = y;
    p.color = colors[anime.random(0, colors.length - 1)];
    p.radius = anime.random(9, 24);
    p.alpha = anime.random(0.9, 1);
    p.endPos = setParticleDirection(p);
    p.draw = function() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
    return p;
}

function createCircle(x,y) {
    let p = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = 0.5;
    p.lineWidth = 6;
    p.draw = function() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    return p;
}

function renderParticle(anim) {
    for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
    }
}

function animateParticles(x, y) {
    let circle = createCircle(x, y);
    let particles = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle(x, y));
    }

    anime.timeline().add({
        targets: particles,
        x: function(p) { return p.endPos.x; },
        y: function(p) { return p.endPos.y; },
        radius: 0.1,
        alpha: {
            value: 0,
            easing: 'linear',
            duration: anime.random(600, 800),
        },
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticle
    });

    anime.timeline().add({
        targets: circle,
        radius: anime.random(60, 160),
        lineWidth: 0,
        alpha: {
            value: 0,
            easing: 'linear',
            duration: anime.random(600, 800),
        },
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticle,
    });
}

let render = anime({
    duration: Infinity,
    update: function() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }
});

document.addEventListener(tap, function(e) {
    window.human = true;
    render.play();
    updateCoords(e);
    animateParticles(pointerX, pointerY);
}, false);

function autoClick() {
    if (window.human) return;
    animateParticles(
        anime.random(0, window.innerWidth),
        anime.random(0, window.innerHeight * 0.6)
    );
    anime({ duration: anime.random(0, 1000) }).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
