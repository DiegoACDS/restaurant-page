export default function loadContact() {
    const container = document.createElement("div");
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Contact Us!";
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", "600px")
    iframe.setAttribute("height", "450px")
    iframe.setAttribute("style", "border:0;")
    iframe.setAttribute("loading", "lazy")
    iframe.setAttribute("allowfullscreen", "")
    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.181886858991!2d-46.657073660231866!3d-23.561910121240768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1745019805845!5m2!1spt-BR!2sbr");
    
   
    document.getElementById("content").appendChild(title);
    

    const infos = [
        "📞 Phone: (123) 456-7890",
        "📧 Email: contact@diegoskitchen.com",
        "📍 Address: 123 Main St, Flavor Town",
        "⏰ Hours: Mon-Sat 11am - 10pm"
      ];
      
      infos.forEach((info) => {
        const p = document.createElement("p");
        const index = info.indexOf(":");
      
        if (index !== -1) {
          const label = info.slice(0, index + 1); // tudo até os dois pontos
          const value = info.slice(index + 1).trim(); // tudo depois dos dois pontos
      
          const strong = document.createElement("strong");
          strong.textContent = label + " ";
      
          p.appendChild(strong);
          p.append(value); // adiciona só o texto plano
        
        
        document.getElementById("content").appendChild(p); // ou seu container específico
        //   container.appendChild(p);
        //   content.appendChild(container);
        }
      });
      
      container.appendChild(iframe);
        content.appendChild(container);

}