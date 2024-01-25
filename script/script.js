const formNode = document.querySelector("#mainForm");
const datas = [];
//обработчик отправки
formNode.addEventListener("submit", event => {
    event.preventDefault();
    //const {lastName,firstName,age} = event.target;
    const lastName = event.target.elements.lastName.value;
    const firstName = event.target.elements.firstName.value;
    const age = event.target.elements.age.value;
    //делаем объект из отправляемых данных
    const data ={
        lastName: lastName,//.value
        firstName: firstName,//.value
        age: age//.value
    };
    datas.push(data);
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
    container.append(lastNameNode, firstNameNode, ageNode);
    return container;
}

function rerender() {
    const container = document.querySelector("#dataContainer");
    container.innerHTML = '';
    datas.forEach(({ lastName, firstName, age }) => {
        container.append(makeDataNode(lastName, firstName, age));
    });
}
