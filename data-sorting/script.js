//Base URL
const URL = "https://jsonplaceholder.typicode.com/users";

//function to fetch user data
const getData = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log("something went wrong");
    }
};
//function call to fetch user data
getData(URL);

//function to display user data
function displayData(data) {
    let container = document.getElementById("container");
    container.innerHTML = "";
    data.forEach((ele) => {
        let card = document.createElement("div");
        card.className = "card";

        let name = document.createElement("h2");
        name.textContent = `${ele.name}`;

        let id = document.createElement("p");
        id.textContent = `Id: ${ele.id}`;

        let username = document.createElement("p");
        username.textContent = `Username: ${ele.username}`;

        let email = document.createElement("p");
        email.textContent = `Email: ${ele.email}`;

        let mobile = document.createElement("p");
        mobile.textContent = `Phone: ${ele.phone}`;

        card.append(name, id, username, email, mobile);
        container.append(card);
    });
}

//selecting sort methods:
let sortCriteria = document.getElementById("sortCriteria");
let sortOrder = document.getElementById("sortOrder");

//adding eventlistener on sorting method
sortCriteria.addEventListener("change", sortData);
sortOrder.addEventListener("change", sortData);

//function to sort data
function sortData() {
    let criteria = sortCriteria.value;
    let order = sortOrder.value;
    console.log(criteria, order);
    getData(`${URL}?_sort=${criteria}&_order=${order}`); //dynamic url to sort data based on input value
}