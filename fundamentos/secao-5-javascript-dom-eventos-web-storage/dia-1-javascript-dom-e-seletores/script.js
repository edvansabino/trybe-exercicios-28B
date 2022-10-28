   /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()

      
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

      //! 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

     function changeText() {
       let paragraph = document.getElementsByTagName('p')[1];
       paragraph.innerText = 'Pretendo estar trabalhando em uma empresa multinacional ou internacional com uma remuneração acima dos R$ 3500,00 e quitando regularmente meu curso na Trybe, estudando e aprendendo novas tecnologias, novos paradigmas de programação evoluindo e me firmando como um profissional de sucesso';
     }
     changeText();

    //  !2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

    function yellowSquare() {
      let colorSquare = document.getElementsByClassName("main-content")[0];
      colorSquare.style.background = rgb(76,164,109);
    }