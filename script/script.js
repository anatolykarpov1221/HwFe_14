const formNode = document.querySelector("#mainForm");
 formNode.style.backgroundColor="#d35400";
//  let bgColor=formNode.style.backgroundColor="#bfff00e5";
//  setInterval(() => {// моргание подсветки кнопки
//    const button = formNode.querySelector("button");
//    bgColor=(bgColor ==="#d35400") ? "#2980b9" : "#d35400";//тернарник для смены
//    button.style.backgroundColor = bgColor;
//  }, 2000);
const datas = [];//массив
//обработчик отправки
formNode.addEventListener("submit", event => {//формируем узел из готового HTML который будем отправлять на сервер кусок из HTML в строке 1 указан
    event.preventDefault();//запрет обновления страницы после отправки тк LiveServer
   
    const {lastName,firstName,age} = event.target;
    //const lastName = event.target.elements.lastName.value;
    //const firstName = event.target.elements.firstName.value;
    //const age = event.target.elements.age.value;
    //делаем объект из отправляемых данных
    const data ={
        lastName: lastName.value,
        firstName: firstName.value,
        age: age.value
    };
    datas.push(data);//
    rerender(); // обновляем отображение
    event.target.reset(); // очищаем input'ы
});

function makeDataNode(lastName, firstName, age) {
    const container = document.createElement("div");
    const lastNameNode = document.createElement("p");
    const firstNameNode = document.createElement("p");
    const ageNode = document.createElement("p");
    lastNameNode.innerText = "Фамилия: " + lastName;
    firstNameNode.innerText = "Имя: " + firstName;
    ageNode.innerText = "Возраст: " + age;
    container.classList.add("item");
    container.style.backgroundColor="#1abc9c";
    container.append(lastNameNode, firstNameNode, ageNode);
    return container;
}

function rerender() {
    const container = document.querySelector("#dataContainer");
    container.innerText = '';
    container.style.backgroundColor = "#2980b9"
    datas.forEach(({ lastName, firstName, age }) => {
        container.append(makeDataNode(lastName, firstName, age));
    });
}
