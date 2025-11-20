// template_y5cg00h
// service_uyj7x28
// RosTUIENx50GMpmdG

let isModalOpen = false;
let contrastToggle = false;

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_uyj7x28',
            'template_y5cg00h',
            event.target,
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            console.log('It worked 1')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert("The email service is temporarily unavailable. Please contact me directly at Emmanuel.rodriguez52303@gmail.com")
        })
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}