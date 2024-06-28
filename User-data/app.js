
let url = `https://jsonplaceholder.typicode.com/users?_page=1&_limit=6`;

const getData = async (url) => {
    try {
        let res = await fetch(url)
        pagination(res.headers.get("X-Total-count"), 6);
        let data = await res.json()
        console.log(data);
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}

getData(url)

let displayData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = ""


    data.forEach((ele) => {
        let card = document.createElement("div");
        card.className = "card";

        let name = document.createElement("h2");
        name.textContent = ele.name;

        let username = document.createElement("p");
        username.textContent = `Username: ${ele.username}`;

        let email = document.createElement("p");
        email.textContent = `Email: ${ele.email}`;

        let address = document.createElement("p");
        address.textContent = `City: ${ele.address.city}`;

        let phone = document.createElement("p");
        phone.textContent = `Phone: ${ele.phone}`;

        let website = document.createElement("p");
        website.textContent = `Website: ${ele.website}`;

        card.append(name, username, email, address, phone, website);
        container.append(card);
    })
}

let page = document.getElementById("pagination")
function pagination(total, limit) {
    page.innerHTML = ""
    let noOfbtn = Math.ceil(total / limit)
    console.log(noOfbtn);
    for (let i = 1; i <= noOfbtn; i++) {
        let btn = document.createElement("button")
        btn.textContent = i
        btn.addEventListener("click", function () {
            getData(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=6`)
        })


        page.append(btn)
    }



}



