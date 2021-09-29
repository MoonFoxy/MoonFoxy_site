let temmieMessages = [
    'hOI!!!!!! i\'m tEMMIE!!',
    'FOOB!!!',
    'awwAwa cute!! (pets u)',
    'NO!!! so hungr... (dies)',
    'fhsdhjfdsfjsddshjfsd',
    'can\'t blame a BARK for tryin\'...',
    '*Temmie vibrates intensely*',
    '*You flex at Temmie...*',
    '*Temmiy accidentally misspells her own name*'
];

function temMessage() {
    document.getElementById('message').innerHTML = temmieMessages[Math.floor(temmieMessages.length * Math.random())];
}

temMessage();

document.title = window.location.pathname.replace(/\//gm, '');  // Remove all slashes from the URL path and set it as the page title
document.addEventListener('click', function() { temMessage(); }, true);
// document.getElementById('temCont').addEventListener('click', function() { temMessage(); }, true);
