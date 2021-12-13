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
 * Random color generator
 */

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPastelColor(){
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' +
             (85 + 10 * Math.random()) + '%)'
}

function getRandomSaturatedColor(){
  return "hsl(" + 360 * Math.random() + ',' +
             (85 + 10 * Math.random()) + '%,' +
             (25 + 70 * Math.random()) + '%)'
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

let scene = document.getElementById('scene');
let parallax = new Parallax(scene, { invertX: true, invertY: true });

/**
 * Image tilt
 */

let isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);
if (!isMobile) {
    VanillaTilt.init(document.querySelectorAll("#avatar"), {
        reverse: true,
        max: 5,
        glare: true,
        "max-glare": 2.5,
        gyroscope: false,
    });
}

/**
 * Background particles
 */

particlesJS('particles-js', particlesConfig);

/**
 * Fireworks particles animations
 */

window.human = false;

let canvasFirework = document.querySelector('.fireworks');
let ctx = canvasFirework.getContext('2d');
let numberOfParticles = 20;
let pointerX = 0;
let pointerY = 0;
let tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

function setCanvasSize() {
    canvasFirework.width = window.innerWidth * 2;
    canvasFirework.height = window.innerHeight * 2;
    canvasFirework.style.width = window.innerWidth;
    canvasFirework.style.height = window.innerHeight;
    canvasFirework.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
    pointerX = e.clientX ?? e.touches[0].clientX;
    pointerY = e.clientY ?? e.touches[0].clientY;
}

function setParticleDirection(p) {
    let angle = anime.random(0, 360) * Math.PI / 180;
    let value = anime.random(50, 180);
    let radius = [-1.5, 1.5][anime.random(0, 1)] * value;
    return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
    }
}

function createParticle(x, y, pColors) {
    let p = {};
    p.x = x;
    p.y = y;
    p.color = pColors[anime.random(0, pColors.length - 1)];
    p.radius = anime.random(12, 24);
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

function createCircle(x, y) {
    let p = {};
    p.x = x;
    p.y = y;
    p.color = '#FFF';
    p.radius = 0.1;
    p.alpha = 0.2;
    p.lineWidth = 20;
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
    let pColors = [];
    for (let i = 0; i < 3; i++) {
        pColors.push(getRandomSaturatedColor());
    }

    let circle = createCircle(x, y);
    let particles = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle(x, y, pColors));
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
        radius: anime.random(60, 260),
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
        ctx.clearRect(0, 0, canvasFirework.width, canvasFirework.height);
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

window.onload = autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);
