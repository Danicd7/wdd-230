const url  = "https://danicd7.github.io/wdd-230/week01/data/members.json";
const cards = document.querySelector("#member")
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");




async function getMemberData() {
    try {
    const response = await fetch(url); //fetch information
    const data = await response.json(); // store information
    // console.table(data.members); // check data response in console
    displayMembers(data.members);
} catch (error) {
    console.error("Error fetching member data:", error);
}
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let address = document.createElement("p");
        let membership = document.createElement("p");
        let link = document.createElement("a")
        let portrait = document.createElement("img");

        fullName.textContent = `${member.name}`; //pulls from the source and compiles
        address.textContent = `${member.address}`;
        membership.textContent = `${member.level}`;
        link.textContent = ('website');
        link.setAttribute('href', member.website);

        //card.setAttribute('id', "card")
        card.classList.add('card');
        portrait.setAttribute('src', member.img);//pulls url from source
        portrait.setAttribute('alt', 'image of '+ `${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //link.setAttribute('href', `${link}`)


        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(link);
        card.appendChild(portrait);

        cards.appendChild(card);
        });
    }

    getMemberData(); //activate funtion

    gridbutton.addEventListener("click", () => {
        gridbutton.classList.toggle('active');
        listbutton.classList.toggle('active');
    });
    listbutton.addEventListener("click", () => {
        listbutton.classList.toggle('active');
        gridbutton.classList.toggle('active');
    });