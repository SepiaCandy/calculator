let current = '';
let saved = null;
let op = '';
//necessary functions
function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a)-Number(b);
}

function multiply(a,b) {
    return Number(a)*Number(b);
}

function divide(a,b) {
    return Number(a)/Number(b);
}

function operate(a,b,c) {
    if (c == '+') {
        saved = add(a,b);
    } else if (c == '-') {
        saved = subtract(a,b);
    } else if (c == '/') {
        if (a == 0 || b == 0) {
            alert('Very funny');
        } else {
        saved = divide(a,b);
        }
    } else if (c == '*') {
        saved = multiply(a,b);
    }
    
    console.log(saved);
    current = '';
}
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
         
        current += e.target.id;
        document.getElementById('input').value += e.target.id;
        
    })
})
document.getElementById(' + ').addEventListener('click', (e) => {

    if (saved == null) {
        saved = current;
        current = '';
    } else if (current == "") {
    } else {
        operate(saved,current,op);
    }
    document.getElementById('saved').value = saved;
    document.getElementById('input').value = current;
    op = '+';

})

document.getElementById(' - ').addEventListener('click', (e) => {

    if (saved == null) {
        saved = current;
        current = '';
    } else if (current == "") {
    } else {
        operate(saved,current,op);
    }
    document.getElementById('saved').value = saved;
    document.getElementById('input').value = current;
    op = '-';

})

document.getElementById(' * ').addEventListener('click', (e) => {
            
    if (saved == null) {
        saved = current;
        current = '';
    } else if (current == "") {
    } else {
        operate(saved,current,op);
    }
    document.getElementById('saved').value = saved;
    document.getElementById('input').value = current;
    op = '*';

})

document.getElementById(' / ').addEventListener('click', (e) => {

    if (saved == null) {
        saved = current;
        current = '';
    } else if (current == "") {
    } else {
        operate(saved,current,op);
    }
    document.getElementById('saved').value = saved;
    document.getElementById('input').value = current;
    op = '/';

})
document.getElementById('=').addEventListener('click', (e) => {
operate(saved,current,op)

document.getElementById('saved').value = saved;
document.getElementById('input').value = current;
});

document.getElementById('clear').addEventListener('click', () => {
    saved = null;
    current = '';
    document.getElementById('saved').value = saved;
document.getElementById('input').value = current;
})