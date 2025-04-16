export default function loadMenu() {
    const content = document.getElementById("content");
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Our Awesome Menu!";

    const description = document.createElement("p");
    description.textContent = "Fresh, flavorful, and made with love. Explore our chef's hand-picked selections:"

    // adicionando uma ul e li para cada item do menu
    const ul = document.createElement("ul");

    const pratos = [
        {
          nome: "🍕 Margherita Pizza",
          preco: "$12.99",
          descricao: "A classic pizza topped with fresh mozzarella, tomatoes, and basil."
        },
        {
          nome: "🍔 Classic Cheeseburger",
          preco: "$10.99",
          descricao: "Juicy beef patty with melted cheese, lettuce, and tomato on a toasted bun."
        },
        {
          nome: "🍝 Spaghetti Carbonara",
          preco: "$14.99",
          descricao: "Pasta tossed in a creamy sauce with pancetta and parmesan cheese."
        },
        {
          nome: "🥗 Caesar Salad",
          preco: "$8.99",
          descricao: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese."
        }
      ];

    pratos.forEach((item) => {
        const li = document.createElement("li");
       
        const title = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${item.nome} - ${item.preco}`;
        title.appendChild(strong);

        const desc = document.createElement("p");
        desc.textContent = item.descricao;

        li.appendChild(title);
        li.appendChild(desc);
        ul.appendChild(li);
    });





 


    // adiciona itens dentro do content
    content.appendChild(container);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(ul);





}