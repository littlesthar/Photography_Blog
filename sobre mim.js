document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os itens de lista <li>
    var menuItems = document.querySelectorAll("ul li");
  
    // Itera sobre cada item de lista e adiciona um ouvinte de evento de clique
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        // Obtém o texto do item clicado
        var pageName = item.textContent.trim();
  
        // Redireciona para a página correspondente com base no texto do item
        switch (pageName) {
          case "Home":
            window.location.href = "home.html";
            break;
          case "Contatos":
            window.location.href = "contatos.html";
            break;
          case "Álbuns":
            window.location.href = "albuns.html";
            break;
          case "Sobre mim":
            window.location.href = "sobre mim.html";
            break;
          default:
            // Caso padrão, redireciona para a página inicial
            window.location.href = "home.html";
        }
      });
    });
  });
  