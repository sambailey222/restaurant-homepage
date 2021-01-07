function renderMenuTab() {
    const contentDiv = document.getElementById("content");

    const menuTab = document.createElement("div");
    menuTab.id = "menuTab";
    contentDiv.appendChild(menuTab);

    const title = document.createElement("h1");
    title.innerHTML = "Menu";
    title.classList.add("main-title");
    menuTab.appendChild(title);

    const subtitle = document.createElement("h3");
    subtitle.innerHTML = "All our pizzas come with toppings of your choice"
    menuTab.appendChild(subtitle);

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");
    menuTab.appendChild(optionsContainer);

    const menuOption1 = document.createElement("div");
    menuOption1.classList.add("menu-option");
    optionsContainer.appendChild(menuOption1);

    const foodOption1 = document.createElement("h3");
    foodOption1.classList.add("menu-text");
    foodOption1.innerHTML = `18" small boi - £18`;
    menuOption1.appendChild(foodOption1);

    const img1 = document.createElement("img");
    img1.classList.add("menu-img");
    img1.src = "../src/menu-images/vince1.jpg";
    menuOption1.appendChild(img1);

    const menuOption2 = document.createElement("div");
    menuOption2.classList.add("menu-option");
    optionsContainer.appendChild(menuOption2);

    const foodOption2 = document.createElement("h3");
    foodOption2.classList.add("menu-text");
    foodOption2.innerHTML = `24" medium boi - £24`;
    menuOption2.appendChild(foodOption2);

    const img2 = document.createElement("img");
    img2.classList.add("menu-img");
    img2.src = "../src/menu-images/vince2.png";
    menuOption2.appendChild(img2);

    const menuOption3 = document.createElement("div");
    menuOption3.classList.add("menu-option");
    optionsContainer.appendChild(menuOption3);

    const foodOption3 = document.createElement("h3");
    foodOption3.classList.add("menu-text");
    foodOption3.innerHTML = `30" large boi - £30`;
    menuOption3.appendChild(foodOption3);

    const img3 = document.createElement("img");
    img3.classList.add("menu-img");
    img3.src = "../src/menu-images/vince3.5.jpg";
    menuOption3.appendChild(img3);
}

export {
    renderMenuTab
}