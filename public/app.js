const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const blueh = document.createElement("h1");
blueh.classList.add("blueh");
blueh.textContent = "I’m a blue h3!";
blueh.style.color = "blue";

const redp = document.createElement("p");
redp.classList.add("redp");
redp.textContent = "Hey I’m red!";
redp.style.color = "red";

container.appendChild(blueh);
container.appendChild(redp);
container.appendChild(content);
