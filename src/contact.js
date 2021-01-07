function renderContactTab() {
    const contentDiv = document.getElementById("content");

    const contactTab = document.createElement("div");
    contactTab.id = "contactTab";
    contentDiv.appendChild(contactTab);

    const title = document.createElement("h1");
    title.innerHTML = "Contact Us";
    title.classList.add("main-title");
    contactTab.appendChild(title);

    const address = document.createElement("h3");
    address.innerHTML = "Address";
    address.classList.add("addressHeading");
    contactTab.appendChild(address);

    const addressline1 = document.createElement("h5");
    addressline1.innerHTML = "123 Swanage Bay Road";
    contactTab.appendChild(addressline1);

    const addressline2 = document.createElement("h5");
    addressline2.innerHTML = "Swanage";
    contactTab.appendChild(addressline2);

    const addressline3 = document.createElement("h5");
    addressline3.innerHTML = "SW4N 4GE";
    contactTab.appendChild(addressline3);

    const phone = document.createElement("h3");
    phone.innerHTML = "Phone";
    phone.classList.add("addressHeading");
    contactTab.appendChild(phone);

    const phoneNumber = document.createElement("h5");
    phoneNumber.innerHTML = "+44 01258 808069";
    contactTab.appendChild(phoneNumber);

    const email = document.createElement("h3");
    email.innerHTML = "Email";
    email.classList.add("addressHeading");
    contactTab.appendChild(email);

    const emailAddress = document.createElement("h5");
    emailAddress.innerHTML = "mangia@bastardone.com";
    contactTab.appendChild(emailAddress);
};

export {
    renderContactTab
}