
function getuser(){  // get value of input and check number of character
let inputelem = document.querySelector('input').value
let counter = document.getElementById('counter')
let inputattribute = document.getElementById('inputid').getAttribute('maxlength')
if(inputelem.length == inputattribute){
    console.log('t')
    counter.innerHTML = ''
}else{
    console.log('f')
    let num = inputattribute - inputelem.length
    console.log(Number(num))
    counter.innerHTML = Number(num) + 'character remain'
}
}

function modal(){  // show guide message
    let box = document.getElementById('boxid')
    let counter = document.getElementById('counter')
    box.style.display = 'block'
    counter.style.display = 'block'
}
function exit(){  // exit of guide message
    let box = document.getElementById('boxid')
    box.remove()
}
function toggleeye(){  // hide or show password
    let eye = document.getElementById('show')
    let eyeslash = document.getElementById('hide')
    let inputelem = document.querySelector('input')
    if(inputelem.type == 'password'){
        inputelem.type = 'text'
        eye.style.display = 'block'
        eyeslash.style.display = 'none'
    }else{ 
        inputelem.type = "password";
        eye.style.display = 'none'
        eyeslash.style.display = 'block'

    }
}

