Tags
<spam class="exemplo">exemplo</span> - Estiliza um elemento inline
<div class="exemplo">exemplo</div> - Estiliza em blocovários elementos dentro de um container

overflow: visible; - Deixa os conteúdos excedentes visíveis
overflow: hidden; - Deixa os conteúdos excedentes escondidos
overflow: auto; - Organiza o conteúdo excedente de maneira automática, colocando scroll
overflow-y - Na vertical
overflox-x: Na horizontal
width: especifica largura
Height: especifica altura
padding: preenchimento
border-widht: largura da borda
border-style: estilo da borda
border-color: cor da borda
margin: margem
position: absolute; - coloca a posição absoluta. A frente dos outros elementos
position: fixed; - Deixa o elemento fixo na posição quando dá o scroll
z-index: ordem dos elementos sobrepostos
float - Deixa um elemento flutuante

p, div {} = agrupamento de elementos - Importante lembra a vírgula, para não confundir com descendência de elementos.

pseudo classes 
ex 1: li:hover {} - muda característica quando passa o mouse por cima
ex 2: li:active{} - muda característica quando clico.


Colocar duas classes - class="classe-1 classe-2"

Mudar elemento específico dentro de uma tag específica
Ex: tag.classe {
    color: black;
}

Descendencia:
Ex: Tenho um p dentro de um li que está dentro de um ul
ul.classe li p {
    color: black;
}