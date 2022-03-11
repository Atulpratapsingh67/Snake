//Featching all the elements frok DOM
let names = document.getElementsByName("name");
let email = document.getElementsByName("email");
let website = document.getElementsByName("Website");
let link = document.getElementsByName("link");
let gender = document.getElementsByName("gender");
let skills = document.getElementsByName("Skills");
let form = document.querySelector(".enrollment");
let add = document.querySelector(".add");
let scroll = document.querySelector(".do");

//Clear function to reset form fields
function clears(){
    names[0].value = '';
    email[0].value = '';
    website[0].value = '';
    link[0].value = '' ;
    gender[0].checked = false;
    gender[1].checked = false;
    for(var i=0 ;i<skills.length;i++){
        skills[i].checked = false;
    }
}

// Event listener for enroll button
let counter = 0;
form.addEventListener('submit' , e=>{
    // Preventing default action
    e.preventDefault();  

    // Fetching all the value from the form
    let name1 = form['name'].value;
    let email1 = form['email'].value;
    let website1 = form['Website'].value;
    let link1 = form['link'].value;
    let gender1 = form['gender'].value;
    let java1 = form['Java'].checked;
    let html1 = form['HTML'].checked;
    let css1 = form['CSS'].checked;
    let skills1 = [];
    if(java1) skills1.push('JAVA');
    if(css1) skills1.push('CSS');
    if(html1) skills1.push('HTML');

    // Alert message
    let message = "Fill red fields correctly, Select a gender and appropriate skills."

    // Validations starts

    // Validation for name
    let flag = false;
    let namePattern = /^[a-zA-Z]*[a-zA-Z ]*[a-zA-Z]$/;
    if(!namePattern.test(name1)){
        flag = true;
        names[0].classList="rounded border border-danger";
    }

    // Validation for email
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!emailPattern.test(email1)){
        flag = true;
        email[0].classList="rounded border border-danger";
    }

    // Validation for the links
    let linkPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(!linkPattern.test(website1)){
        flag = true;
        website[0].classList="rounded border border-danger";
    }
    if(!linkPattern.test(link1)){
        flag = true;
        link[0].classList="rounded border border-danger";
    }

    // Validation for gender
    if(!gender1)
    {
        flag=true;
    }

    // Validation for Skills
    if(skills1.length == 0){
        flag = true;
    }

    // If something is wrong then alert.
    if(flag){
        alert(message);
    }
    // If everything correct in form then insert in the table.
    else{

        // Resetting the validation of form
        names[0].classList="rounded border-secondary";
        email[0].classList="rounded border-secondary";
        website[0].classList="rounded border-secondary";
        link[0].classList="rounded border-secondary";

        // Removing fadein effect from other columns.
        if(counter !=0){add.childNodes[0].classList.remove('fadein');}

        // Inserting the data in table with fadein effect.
        add.innerHTML=`<div class="row g-0 justify-content-center fadein">\
                        <div class="col-6">\
                            <div class="description2">\
                                <p>${name1}</p>\
                                <p>${gender1}</p>\
                                <p>${email1}</p>\
                                <a href="${website1}" target="_blank">${website1}</a>\
                                <p>${skills1}</p>\
                            </div>\
                        </div>\
                        <div class="col-3 ">\
                            <div class="image2">\
                                <img src="${link1}" alt="Image Not Found">\
                            </div>\
                        </div>\
                    </div>`+ add.innerHTML;
        counter+=1;

        // if there are more then two rows in table then add scroll bar.
        if(counter>2){
            scroll.classList.add("scroll");
        }
    }
});