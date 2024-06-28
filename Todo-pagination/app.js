//Base URL(With pagination filter: It loads the Ist page with limit=12)
let url = `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=12`;

//function to fetch the data
const getData = async (url) => {
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
};

//function call to get data
getData(url);

let container = document.getElementById("container");
container.innerHTML = "";

//function to display data
function displayData(data) {
    data.forEach((ele) => {
        let card = document.createElement("div");
        card.className = "card";

        let id = document.createElement("p");
        id.textContent = `Id: ${ele.id}`;

        let title = document.createElement("h3");
        title.textContent = `Title: ${ele.title}`;

        let status = document.createElement("p");
        status.textContent = `Completed: ${ele.completed}`;

        card.append(id, title, status);
        container.append(card);
    });
}

//pagination
let count = 1;
let next = document.getElementById("next"); //selecting next button
next.addEventListener("click", function () {
    //added an eventlistener on next button
    count++; //on evry click page will be incremented
    nextData();
});

let prev = document.getElementById("prev");
prev.addEventListener("click", function () {
    //added eventlistener on prev button
    if (count == 1) {
        prev.button == disabled; //prev button disabled when page=1;
    } else {
        count--; //decrementing page pn evry click
    }
    nextData();
});

//calling getData fun inside nextData() with generic url based on page number
function nextData() {
    container.innerHTML = "";
    getData(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=12`);
}