let formData = [];
let fields = document.querySelectorAll('input');
const saveBtn = document.getElementById('submit-button');
const form = document.getElementById('submit-form');

form.addEventListener('submit', e => { e.preventDefault(); });

document.getElementById("firstName").value = localStorage.getItem("firstName");
document.getElementById("lastName").value = localStorage.getItem("lastName");
document.getElementById("email").value = localStorage.getItem("email");
document.getElementById("phone").value = localStorage.getItem("phone");
document.getElementById("company").value = localStorage.getItem("company");
document.getElementById("address").value = localStorage.getItem("address");

let timerId = setInterval(() => trigger(), 100);
function trigger(){
    if(document.getElementById("firstName").value !== localStorage.getItem("firstName")){
        document.getElementById("firstName").value = localStorage.getItem("firstName");
    }
    if(document.getElementById("lastName").value !== localStorage.getItem("lastName")){
        document.getElementById("lastName").value = localStorage.getItem("lastName");
    }
    if(document.getElementById("email").value !== localStorage.getItem("email")){
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if(document.getElementById("phone").value !== localStorage.getItem("phone")){
        document.getElementById("phone").value = localStorage.getItem("phone");
    }
    if(document.getElementById("company").value !== localStorage.getItem("company")){
        document.getElementById("company").value = localStorage.getItem("company");
    }
    if(document.getElementById("address").value !== localStorage.getItem("address")){
        document.getElementById("address").value = localStorage.getItem("address");
    }

}

document.getElementById("firstName").addEventListener("input", function () {
    let element = document.getElementById("firstName").value;
    localStorage.setItem("firstName", element);
    //let timerId = setInterval(() => document.getElementById("firstName").value = localStorage.getItem("firstName"), 100);
    //setTimeout(() => { clearInterval(timerId);}, 1000);
});

document.getElementById("lastName").addEventListener("input", function (){

    let element = document.getElementById("lastName").value;
    localStorage.setItem("lastName", element);
    //let timerId = setInterval(() => document.getElementById("lastName").value = localStorage.getItem("lastName"), 100);
    //setTimeout(() => { clearInterval(timerId);}, 1000);
});

document.getElementById("email").addEventListener("input", function (){
    let element = document.getElementById("email").value;
    localStorage.setItem("email", element);
    //let timerId = setInterval(() => document.getElementById("email").value = localStorage.getItem("email"), 100);
    //setTimeout(() => { clearInterval(timerId);}, 1000);
});

document.getElementById("phone").addEventListener("input", function (){
    let element = document.getElementById("phone").value;
    localStorage.setItem("phone", element);
    //let timerId = setInterval(() => document.getElementById("phone").value = localStorage.getItem("phone"), 100);
    //setTimeout(() => { clearInterval(timerId);}, 1000);
});

document.getElementById("company").addEventListener("input", function (){
    let element = document.getElementById("company").value;
    localStorage.setItem("company", element);
    //let timerId = setInterval(() => document.getElementById("company").value = localStorage.getItem("company"), 100);
    //setTimeout(() => { clearInterval(timerId);}, 1000);
});

document.getElementById("address").addEventListener("input", function (){
    let element = document.getElementById("address").value;
    localStorage.setItem("address", element);
    //let timerId = setInterval(() => document.getElementById("address").value = localStorage.getItem("address"), 100);
   // setTimeout(() => { clearInterval(timerId);}, 1000);
});

saveBtn.addEventListener('click', saveData);

function saveData() {
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    let data = [];
    let k = formData.length;
    let id = 0;
    if (k > 0) {
        id = formData[k - 1][0];
    }
    data[0] = id + 1;
    for (let i = 0; i < fields.length; i++) {
        data[i + 1] = fields[i].value;
    }
    formData[k] = data;
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem("firstName", "");
    localStorage.setItem("lastName", "");
    localStorage.setItem("email", "");
    localStorage.setItem("phone", "");
    localStorage.setItem("company", "");
    localStorage.setItem("address", "");
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value ="";
    document.getElementById("email").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("company").value = "";
    document.getElementById("address").value = "";
    form.reset();
}