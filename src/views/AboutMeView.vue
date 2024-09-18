<template>
    <div class="aboutMe">
        <div class="myText">
            <div class="dev">&lt;Dev&gt;</div>
                <div class="devDescription">{{ text }}</div>
            <div class="devBottom">&lt;/Dev&gt;</div>
        </div>
        <div class="myContact">
            <div class="contacts">&lt;Contatos&gt;</div>
                <div class="contactPictures">
                    <a href="https://github.com/rafaeLuciano" target="_blank">
                        <img class="git" src="../assets/GitHub.png" alt="Imagem da logo do Github">
                    </a>
                    <a href="https://www.linkedin.com/in/rafael-da-silva-luciano-6a0923226/" target="_blank">
                        <img class="linkedin" src="../assets/Linkedin.png" alt="Imagem da logo do Linkedin">
                    </a>
                    <a href="https://wa.me/5547988883216" target="_blank">
                        <img class="whats"  src="../assets/WhatsApp.png" alt="Imagem da logo do WhatsApp">
                    </a>
                    <a href="mailto:rafaeldasilva.luciano@gmail.com" target="_blank">
                        <img class="email"  src="../assets/Email.png" alt="Imagem da logo do Email">
                    </a>
                    <a href="https://www.instagram.com/rafaluciano_/" target="_blank">
                        <img class="insta"  src="../assets/Instagram.png" alt="Imagem da logo do Instagram">
                    </a>
                </div>
            <div class="contactsBottom">&lt;/Contatos&gt;</div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "AboutMe",

    data() {
    return {
      text: "Olá! Sou Rafael Luciano. Atualmente, estou trabalhando como desenvolvedor RPA, exercendo meus conhecimentos em C#, SQL, entre outros. Recentemente, mudei meu curso de estudo e atuação para aquilo que me encantou desde meu ingresso na área de TI: o Front-End!\n\nSempre me vi muito ligado ao meu lado criativo e decidi, por fim, criar meu portfólio. Visite meus projetos na outra aba e, se tiver alguma dúvida ou quiser falar comigo, sinta-se à vontade para me contatar em qualquer rede abaixo. Obrigado!"
      };
    }
  }
  </script>
  
  <style>
  .aboutMe{
    display: flex;
    flex-direction: column;
    gap: 55px;
    padding-top: 140px;
}
  .myContact {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

  .myText{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
  .dev{
    font-weight: bold;
    font-size: 45px;
    padding-left: 80px;
  }

  .devBottom{
    font-weight: bold;
    font-size: 30px;
    color: rgb(189, 189, 189);
    padding-left: 80px;
  }

  .contacts{
    font-weight: bold;
    font-size: 45px;
    padding-left: 80px;
  }

  .contactsBottom{
    font-weight: bold;
    font-size: 30px;
    color: rgb(189, 189, 189);
    padding-left: 80px;
  }

  .contactPictures{
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-left: 200px;
    padding-right: 200px;
  }

  .contactPictures .git:hover{
    filter: invert(40%);
  }
  .contactPictures .linkedin:hover{
    filter: invert(40%);
  }
  .contactPictures .whats:hover{
    filter: invert(40%);
  }
  .contactPictures .email:hover{
    filter: invert(40%);
  }
  .contactPictures .insta:hover{
    filter: invert(40%);
  } 
  .devDescription{
    padding-left: 200px;
    padding-right: 200px;
    font-size: large;
    font-weight: 600;
    white-space: pre-wrap; 
  }

  @media screen and (max-width: 1020px) {

  .myText, .myContact{
    gap: 50px;
    text-align: center;
    }
  .dev, .devBottom, .contacts, .contactPictures, .contactsBottom, .myText, .devDescription{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    white-space: pre-wrap; 
    }
  }

  </style>