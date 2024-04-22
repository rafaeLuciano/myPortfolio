<template>
    <div class="aboutMe">
        <div class="myText">
            <div class="dev">&lt;Dev&gt;</div>
                <div class="devDescription">Olá! Sou Rafael Luciano, atualmente estou trabalhado como desenvolvedor RPA exercendo meus conhecimentos em C#, SQL e etc. Recentemente mudei meu curso de estudo e atuação para aquilo que me encantou desde meu ingresso na área de TI, O Front-End!
Desde sempre enxerguei-me muito a par do meu lado criativo e decidi por fim criar meu portfólio. Visite  meus projetos na outra aba e se tiver alguma dúvida ou queria falar comigo sinta-se a vontade para me contatar em qualquer rede abaixo, obrigado!
                </div>
            <div class="devBottom">&lt;/Dev&gt;</div>
        </div>
        <div class="myContact">
            <div class="contacts">&lt;Contatos&gt;</div>
                <div class="contactPictures">
                    <a href="https://github.com/rafaeLuciano" target="_blank">
                        <img src="../assets/GitHub.png" alt="Imagem da logo do Github">
                    </a>
                    <a href="https://www.linkedin.com/in/rafael-da-silva-luciano-6a0923226/" target="_blank">
                        <img src="../assets/Linkedin.png" alt="Imagem da logo do Linkedin">
                    </a>
                    <a href="https://wa.me/5547988883216" target="_blank">
                        <img src="../assets/WhatsApp.png" alt="Imagem da logo do WhatsApp">
                    </a>
                    <a href="mailto:rafaeldasilva.luciano@gmail.com" target="_blank">
                        <img src="../assets/Email.png" alt="Imagem da logo do Email">
                    </a>
                    <a href="https://www.instagram.com/rafaluciano_/" target="_blank">
                        <img src="../assets/Instagram.png" alt="Imagem da logo do Instagram">
                    </a>
                </div>
            <div class="contactsBottom">&lt;/Contatos&gt;</div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "AboutMe"
  }
  </script>
  
  <style>
  .aboutMe{
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 25px;
}
  .myContact {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

  .myText{
    display: flex;
    flex-direction: column;
    gap: 50px;
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

  .devDescription{
    padding-left: 200px;
    padding-right: 200px;
    font-size: large;
    font-weight: 600;
  }


  </style>