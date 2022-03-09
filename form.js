let names = document.getElementsByName("name");
let email = document.getElementsByName("email");
let website = document.getElementsByName("Website");
let link = document.getElementsByName("link");
let gender = document.getElementsByName("gender");
let skills = document.getElementsByName("Skills");
let form = document.querySelector(".enrollment");
let second = document.querySelector(".second");
let scroll = document.querySelector(".scroll");

let gender_label = document.querySelectorAll(".gender");
//second.innerHTML+=`<div class=\"contant\"><div class=\"description2\"><p>${a}</p><p>email</p><p>website</p><p>link</p><p>gender</p><p>skills</p></div><div class=\"image2\"><img src=\"\" alt=\"Image\"></div></div>`
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

form.addEventListener('submit' , e=>{
    e.preventDefault();
    let name = form['name'].value;
    let email = form['email'].value;
    let website = form['Website'].value;
    let link = form['link'].value;
    let gender = form['gender'].value;
    let java = form['Java'].checked;
    let html = form['HTML'].checked;
    let css = form['CSS'].checked;
    let skills = [];
    if(java) skills.push(' Java');
    if(css) skills.push(' Css');
    if(html) skills.push(' html');
    second.innerHTML+=`<div class=\"contant\"><div class=\"description2\"><p>${name}</p><p>${gender}</p><p>${email}</p><p>${website}</p><p>${skills}</p></div><div class=\"image2\"><img src=\"${link}\" alt=\"Image\"></div></div>`;
});






names[0].addEventListener('input',()=>{
    let x = names[0].value;
    let pattern = /^[A-Za-z]+$/
    if(pattern.test(x)){
        names[0].classList='';
    }
    else{
        names[0].classList='border';
    }
});
email[0].addEventListener('input',()=>{
    let x = email[0].value;
    let pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(pattern.test(x)){
        email[0].classList='';
    }
    else{
        email[0].classList='border';
    }
});
// website[0].addEventListener('input',()=>{
//     let x = email[0].value;
//     let pattern = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
//     if(pattern.test(x)){
//         website[0].classList='';
//     }
//     else{
//         website[0].classList='border';
//     }
// });
// link[0].addEventListener('input',()=>{
//     console.log(link[0].value);
// });


//Gender Validation
// let flag = false;
// gender[0].addEventListener('input' , ()=>{
//     flag = gender[0].checked;
//     if(!flag){
//         gender_label[0].classList = 'color';
//         gender_label[1].classList = 'color';
//     }
//     else{
//         gender_label[0].classList = '';
//         gender_label[1].classList = '';
//     }
// });
// gender[1].addEventListener('input' , ()=>{
//     flag = gender[1].checked;
//     if(!flag){
//         gender_label[0].classList = 'color';
//         gender_label[1].classList = 'color';
//     }
//     else{
//         gender_label[0].classList = '';
//         gender_label[1].classList = '';
//     }
// });

