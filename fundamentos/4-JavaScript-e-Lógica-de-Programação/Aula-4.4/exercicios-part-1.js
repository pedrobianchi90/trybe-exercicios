// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

// //   console.log('Bem-vinda, ' + info.personagem);
// //   console.log(info);

// //   for (let chaves in info) {
// //       console.log(chaves)
// //   }

// //   for (let chaves in info) {
// //       console.log(info[chaves]);
// //   }

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let chaves in info) {
//     if (info[chaves] === info2[chaves]) {
//         console.log('Ambos recorrentes');
//     } else {
//       console.log(info[chaves] + ' e '  + info2[chaves]);
//     }
// }
  
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')