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

const divborder = document.createElement("div");
divborder.classList.add("divborder");
divborder.setAttribute("id", "divborder");
divborder.style.border = "2px solid black";
divborder.style.background = "pink";

const hindiv = document.createElement("h1");
content.classList.add("hindiv");
hindiv.textContent = "I'm in a div";

const pindiv = document.createElement("p");
content.classList.add("pindiv");
pindiv.textContent = "ME TOO!";

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn.addEventListener("click", () => {
  alert("Hello World");
});

container.appendChild(blueh);
container.appendChild(redp);
container.appendChild(content);
container.appendChild(divborder);

divborder.appendChild(hindiv);
divborder.appendChild(pindiv);
