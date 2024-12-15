let element = document.body
let nav = document.getElementById('nav')

let main = document.getElementById('main')

let footer = document.getElementById('footer')

let bouton = document.getElementById('bouton')

//let gallerie = document.getElementsByClassName('gallerie')


bouton.addEventListener("click", function() {
console.log("element clique")
main.classList.toggle('dark_mode')
element.classList.toggle('light_blue')
nav.classList.toggle('light_blue')

footer.classList.toggle('light_blue')
})


//formulaire
let form = document. querySelector('form' )

form.addEventListener('submit', function(event) {
    
    
    let pseudo = document.querySelector('#pseudo' )
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let password_ = document.querySelector('#password2')
    event.preventDefault()

    if(pseudo.value.length < 6){
    pseudo.classList.add("error")
    }
    else{
    pseudo.classList.add("success")
    }

    
    if(email.value.trim() === '') {
    email.classList.add("error")
    } 
    else {
    email.classList.add("success")
    }

    if(password.value.length < 8){
        password.classList.add("error")
        }
    else{
    password.classList.add("success")
    }
        
    if(alert( password !== password_ )){
        password_.classList.add("error")
    }
    else{
        password_.classList.add("success")
    }
    })