function renderHTML() {
    const contentDiv = document.getElementById("content");
    console.log(contentDiv);

    const container = document.createElement("div")
    container.classList.add("container");
    console.log(container);
    contentDiv.appendChild(container);

    const title = document.createElement("h1");
    title.innerHTML = "Mangia, Bastardone!";
    title.classList.add("main-title");
    container.appendChild(title);

    const subtitle = document.createElement("h5");
    subtitle.innerHTML = "Pizza that's probably too big";
    container.appendChild(subtitle);

    const image = document.createElement("img");
    image.src = "https://i.ytimg.com/vi/DPg7gsyTOP0/maxresdefault.jpg";
    container.appendChild(image);

    const copy = document.createElement("h4");
    copy.innerHTML = "Want to eat a pizza but not sure how? We can make you a boy so big you'll regret that desire. Come and eat so much pizza that you'll rue the day you were born and those that raised you. It's self loathing, the Italian way.";
    container.appendChild(copy);    
}

export {
    renderHTML
}