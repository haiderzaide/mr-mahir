// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });

//     if (form.id === "loginForm") {
//         console.log("Logging in with:", data);
//         // Add your login logic here
//         redirectToHomePage();
//     } else if (form.id === "signupForm") {
//         console.log("Signing up with:", data);
//         // Add your signup logic here
//         showLogin();
//     }
// }

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    if (form.id === "loginForm") {
        console.log("Logging in with:", data);
        // Add your login logic here
        redirectToHomePage();
    } else if (form.id === "signupForm") {
        if (data.password !== data.confirm_password) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Signing up with:", data);
        // Add your signup logic here
        showLogin();
    }
}


function showSignup() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function redirectToHomePage() {
    window.location.href = "../pages/home.html";  // Change this to the actual path of your homepage
}
// function showWelcomeMessage() {
//     document.getElementById('login-container').style.display = 'none';
//     document.getElementById('signup-container').style.display = 'none';
//     document.getElementById('welcome-container').style.display = 'block';
// }
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});
    













