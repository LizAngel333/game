// Declare variables below to save the different divs of your story.
//let option-one-screen 



//let option-two
// let option-two-screen 
// let option-two-end 
// let option-three
// let option-four 
// let option-four-end  
// let option-three-end 
// let next 
// let next2

let divOne = document.querySelector( ".option-one-screen"); 
let header = document.querySelector("h2");
let optionOne = document.querySelector(".option-one"); 
let opening = document.querySelector(".story-opening"); 
let title = document.querySelector(".title"); 
optionOne.addEventListener("click", function() { 
     divOne.style.display = 'block'; 
     opening.style.display = 'none'; 
     title.style.display = 'none';  
     header.style.display = 'none'; 
     optionOne.style.display = 'none';
     optionTwo.style.display = 'none';  

});
let divTwo = document.querySelector(".option-two-screen");
let optionTwo = document.querySelector(".option-two");
optionTwo.addEventListener("click", function(){ 
     divTwo.style.display = 'block';
     opening.style.display = 'none';
        
     
     
});


let divThree = document.querySelector(".option-three-end") 
let optionThree = document.querySelector(".option-three") 
optionThree.addEventListener("click", function() { 
     divThree.style.display = 'block'
});

let divFour = document.querySelector(".option-four-end") 
let optionFour = document.querySelector(".option-four")
optionFour.addEventListener("click", function() { 
     divFour.style.display = 'block'
});



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


//  option-one.addEventListener('click', function(){
// option-o
// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });