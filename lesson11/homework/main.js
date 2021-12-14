<!-- -створити форму з інпутами для name та age.-->
<!--При відправці форми записати об'єкт в localstorage-->
let f1 = document.createElement("form");
f1.setAttribute("action", "/action");
f1.setAttribute("id", "form1");
let nameInp = document.createElement("input");
let labelName = document.createElement("label");
labelName.setAttribute("for","fname");
labelName.innerText = "name";
nameInp.setAttribute("name", "inp1");
nameInp.setAttribute("type", "text");
let ageInp = document.createElement("input");
let labelAge = document.createElement("label");
labelAge.setAttribute("for","lage");
labelAge.innerText = "age";
ageInp.setAttribute("name", "inp2");
ageInp.setAttribute("type", "number");
let btn = document.createElement("button");
btn.setAttribute("id", "btnf1");
btn.innerText = "click me";
f1.append(labelName,nameInp,labelAge,ageInp, btn);
document.body.appendChild(f1);

let users = function (name,age) {
    this.name = name;
    this.age = age
};

f1.onsubmit = e => e.preventDefault();

document.forms.form1.btnf1.onclick = () => {
    let inpNameValue = document.forms.form1.inp1.value;
    let inpAgeValue = document.forms.form1.inp2.value;
    let user = new users(inpNameValue, inpAgeValue);
    localStorage.setItem("user", JSON.stringify(user));
};



// <!-- -створити форму з інпутами для model,type та volume автівки.-->
// <!--при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.-->

let f2 = document.createElement("form");
f2.setAttribute("id", "fcars")
let carL = document.createElement("label");
carL.innerText = "model";
let carV = document.createElement("label");
carV.innerText = "value";
let inputM = document.createElement("input");
inputM.setAttribute("type" , "tezt");
inputM.setAttribute("name" , "carmodel");
let inputV = document.createElement("input");
inputV.setAttribute("type", "text");
inputV.setAttribute("name", "carvalue");
let typeInp = document.createElement("input");
typeInp.setAttribute("name" , "typef")
let ltype = document.createElement("label");
ltype.innerText = "type";
let btn2 = document.createElement("button");
btn2.innerText = "click now!";

f2.append(carL, inputM, carV, inputV , ltype, typeInp, btn2);
document.body.appendChild(f2);

f2.onsubmit = e => e.preventDefault();

let arr = [];


btn2.onclick = () => {
    let carsInp = document.forms.fcars.carmodel.value;
    let valueInp = document.forms.fcars.carvalue.value;
    let typeInp = document.forms.fcars.typef.value;
    let cars = {
       model: carsInp
    };
    let type = {
        type: typeInp
    };
    let value = {
        value: valueInp
    }
    arr.push(cars,type,value);
    localStorage.setItem("cars" , JSON.stringify(arr));
}