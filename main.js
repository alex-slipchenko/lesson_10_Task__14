
const myPreloader = document.querySelector('.lds-ring');
if (!window.location.href == '../dz_10_Task_14/profilePage.html') {
    myPreloader.style.display = false;
}

myPreloader.style.display = 'none';


const myPasword = document.getElementById("myInput");
function openParol() {
    if (myPasword.type === "password") {
        myPasword.type = "text";
    } else {
        myPasword.type = "password";
    }
}

const myEmail = document.getElementsByName('email')[0];

const myButton = document.getElementsByTagName('button')[0];



myButton.addEventListener("click", function () {
    console.log(myEmail.value);
    openParol();
    console.log(myPasword.value);

    myPreloader.style.display = 'inline-block';


    setTimeout(function () {
        window.location.href = '../dz_10_Task_14/profilePage.html';
    }, 2 * 1000);

},
);

