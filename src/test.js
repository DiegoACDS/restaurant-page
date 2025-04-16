import foodImage from "./pizza.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  const container = document.createElement("div");

   // cria e adiciona texto no elemento h1
  const title = document.createElement("h1");
  title.textContent = "Welcome to Diego's Restaurant!";

   // cria e adiciona uma imagem no elemento img
  const image = document.createElement("img");
  image.src = foodImage;
    // cria e adiciona uma frase dentro do elemento p
  const description = document.createElement("p");
  description.textContent = "Experience the finest flavors and friendliest service in town! At Diego’s Kitchen, we blend tradition with innovation to bring you unforgettable dishes."; 
  
    // cria o elemento ul
    const ul = document.createElement("ul");


    const items = [
        "🌿 100% Fresh, locally sourced ingredients",
        "🍝 Handcrafted dishes with love",
        "☕ Cozy and charming ambiance",
        "🍷 Curated drinks to match every plate",
        "💛 Friendly service that feels like home",
    ];

    items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    })

    













    const callToAction = document.createElement("p");
    callToAction.textContent = "Whether you're celebrating a special moment or simply grabbing your favorite comfort food, we promise you'll leave with a smile. Come hungry, leave happy!"



    // adiciona itens dentro do container
  container.appendChild(title);
  
  container.appendChild(image);

// adiciona itens dentro do content
  content.appendChild(container);

  content.appendChild(description);
  content.appendChild(ul);
  content.appendChild(callToAction);
}
