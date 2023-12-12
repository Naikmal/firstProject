   
   /*  js code in header section for menu icons and navbar start */
   let menu = document.getElementById('menu_btn');
   let remove = document.getElementById('remove');
   let navbar = document.querySelector('nav');
   let login_register = document.querySelector('.login-register');

   // function to two a elements to navbar when the menu button is clicked
    
   let element_for_login = document.createElement("a");
   let element_for_register = document.createElement("a");

   function addElement(){
   
    element_for_login.href = "login.html";
    element_for_login.textContent = "Login";
    element_for_login.className = "added_a";
    navbar.appendChild(element_for_login);
   
    element_for_register.href = "register.html";
    element_for_register.textContent = "Register";
    element_for_register.className = "added_a";
    navbar.appendChild(element_for_register);
   }
   

    menu.addEventListener('click'  , function(event){
   /*  event.preventDefault(); */
    navbar.classList.add('nav');
    menu.style.display = "none";
    remove.style.display = "block";
    login_register.style.display = "none";
   
    
      
    });
    // here we have called the fuction that is adding two a elements to the navbar
   menu.addEventListener('click' ,  addElement()); 
    

   
    remove.addEventListener('click',function(a){
       /*  a.preventDefault(); */
        remove.style.display = "none";
        navbar.classList.remove('nav');
        menu.style.display = "block";
        login_register.style.display = "inline-block";
    })




function handleResize(){
    if(window.innerWidth >= 800){
        menu.style.display = "none";
        remove.style.display = "none";
     

    }
    else{
        menu.style.display = "block";
    }
}
handleResize();

window.addEventListener('resize', handleResize);
 /*  js code in header section for menu icons and navbar END */




/* load more button  for catergories section to load more start */

let loadMoreButtonC = document.getElementById("category-loadmore-btn");
let curentItem = 3;
    function loadMoreCategories(){
        let boxes = [...document.querySelectorAll('.content-container .category-cards .category-box')];

        for(var i = curentItem;  i < curentItem + 3;  i++){
            boxes[i].style.display = "inline-block";
        }
        curentItem += 3;
        if(curentItem > boxes.length ){
            loadMoreButtonC.style.display = "none";
        }
    }
    loadMoreButtonC.onclick = loadMoreCategories;







/* code for laod more button on home page for laoding more books */

let loadMorebook = document.getElementById("load-more-books");
let current = 7;

function loadMoreBooks() {
    let moreBooks = [...document.querySelectorAll('.books-container .recently-added-books-box')];
    for (let i = 7; i < current + 7 && i < moreBooks.length; i++) {
        moreBooks[i].style.display = "inline-block";
    }
    current += 7;
    if (current >= moreBooks.length) {
        loadMorebook.style.display = "none";
    }
}

loadMorebook.onclick = loadMoreBooks;


/* Registeration  form validation */



let registration_form = document.getElementById('registration-form');

let uName = document.getElementById('name');
let email = document.getElementById('email');
let R_password = document.getElementById('R-password');
let R_confirm_password= document.getElementById('R-confirm-password');



registration_form.addEventListener('submit', function(event){
event.preventDefault();

validateForm();


});

function validateForm(){

// name field validation

if(uName.value == ""){
    document.getElementById('name-message').innerHTML = "Name field is required";
}
else if(uName.value.length < 3){
    document.getElementById('name-message').innerHTML ="a name must be at least 3 cahracters";
}
else if(uName.value.match(/[1-9]/g)){
    document.getElementById('name-message').innerHTML = "The name field should not contain numeric values";
}else{
    document.getElementById('name-message').innerHTML = "";
}

// Email field vlaidation

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(email.value == ""){
    document.getElementById('email-message').innerHTML = "Email is required";
}else{
    document.getElementById('email-message').innerHTML = "";
}
/* }else if(emailRegex.test(email)){
    document.getElementById('email-message').innerHTML = "";
}else{
    document.getElementByI('email-message').innerHTML = "In valid email";
} */

// password field validation
if(R_password.value == ""){
    document.getElementById('password-message').innerHTML = "password is required";
}else if(R_password.value.length < 8 ){
    document.getElementById('password-message').innerHTML = "password must be at least 8 characters";
}
else{
    document.getElementById('password-message').innerHTML = "";
}

// confirm password field validation

if(R_confirm_password.value == R_password.value){
    document.getElementById('confirm-password-message').innerHTML ="";
}else{
    document.getElementById('confirm-password-message').innerHTML ="password not matched";
}




}













 /* let togalMode = document.getElementById('togalButton');
 var body = document.body;

 togalMode.addEventListener('click' , function(){

    body.classList.toggle('dark-mode');

 })
 */
 
  