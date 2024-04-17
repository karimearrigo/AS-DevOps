// Lista de names
const names = [
    "Karime Arrigo Rodrigues Kumagai",
    "Lorena Negrão de Melo"
  ];
  
  function addNameToBody(name) {
    const element = document.createElement("div");
    element.innerText = name;
    document.body.appendChild(element);
  }
  
  function displayNames() {
    names.forEach((name, index) => {
        setTimeout(() => {
            addNameToBody(name);

            if (index === names.length - 1) {
                setTimeout(() => {
                    funnyButton();
                }, 1000);
            }
        }, (index + 1) * 1000);
    });
}
  
function funnyButton() {
        const container = document.createElement('div');    
        const button = document.createElement('button');
        button.innerText = 'Clique aqui 👀';
    
        container.appendChild(button);
        document.body.appendChild(container);

    button.addEventListener('click', function() {
        const container = document.createElement('div')
        const img = document.createElement('img');
        img.src = 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/incoming/25426974-1a4-a7f/w448/dummy-3.jpg';
        container.appendChild(img);
        document.body.appendChild(container);

        button.remove();

    });
}
    displayNames();
