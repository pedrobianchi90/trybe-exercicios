# Aula 5.1

DOM - Document Object Model
- Interface que representa como o HTML e XML são lidos pelo browser.
- Comunica HTML com JS

getElementById
- Procura um elemento do arquivo HTML
- Estrutura: document.getElementById("elemento"); - Busca o elemento selecionado
- document.getElementById("elemento").innerHTML - Acessa o conteúdo do elemento com as tags
- document.getElementById("elemento").innerText - Acessa o conteúdo do elemento sem as tags
- document.getElementById("elemento").innerStyle - Acessa o a estilização do conteúdo
- document.getElementById("elemento").innerText = "Novo texto" - Substitui o texto na página

getElementsByClassName
- document.getElementsByClassName("elemento")[0].innerText = "Novo texto" - Substitui o elemento 0 da array

getElementsByTagName
- Retorna uma lista de elementos e nunca um só elemento.
- Semelhante ao Class Name, mas com tags

querySelector
- Apenas um elemento
- Trabalha com seletores CSS
- Mais flexivel que os getElement
- Precisa ser mais específico. ex: colocar # antes de id ou . antes de class
- Retorna o primeiro elemento
- Utiliza a mesma estrutura de seleção do CSS

querySelectorAll
- Lista de elementos
- Trabalha com seletores CSS
- Mais flexível que o getElementsByClass