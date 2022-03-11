let names = document.getElementsByName("name");
let email = document.getElementsByName("email");
let website = document.getElementsByName("Website");
let link = document.getElementsByName("link");
let gender = document.getElementsByName("gender");
let skills = document.getElementsByName("Skills");
let form = document.querySelector(".enrollment");
let second = document.querySelector(".second");
let add = document.querySelector(".add");
let contant = document.querySelector(".contant");
let gender_label = document.querySelectorAll(".gender");
let scroll = document.querySelector(".do");

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

console.log(names[0].classList);
let counter = 0;
form.addEventListener('submit' , e=>{
    e.preventDefault();
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
    let message = "Fill red fields correctly, Select a gender and appropriate skills."

    let flag = false;
    let namePattern = /^[a-zA-Z]*[a-zA-Z ]*[a-zA-Z]$/;
    if(!namePattern.test(name1)){
        flag = true;
        names[0].classList="rounded border border-danger";
    }

    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(!emailPattern.test(email1)){
        flag = true;
        email[0].classList="rounded border border-danger";
    }

    let linkPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if(!linkPattern.test(website1)){
        flag = true;
        website[0].classList="rounded border border-danger";
    }
    if(!linkPattern.test(link1)){
        flag = true;
        link[0].classList="rounded border border-danger";
    }

    if(!gender1)
    {
        flag=true;
    }

    if(skills1.length == 0){
        flag = true;
    }

    if(flag){
        alert(message);
    }
    else{

        names[0].classList="rounded border-secondary";
        email[0].classList="rounded border-secondary";
        website[0].classList="rounded border-secondary";
        link[0].classList="rounded border-secondary";

        if(counter !=0){add.childNodes[0].classList.remove('fadein');}
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
    
        if(counter>2){
            scroll.classList.add("scroll");
        }
    }

});