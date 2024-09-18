<template>
    <div class="projectsHome">
        <div class="projects">&lt;Projetos&gt;</div>
            <div class="projectsShow">
                <div class="dSouto">
                    <a href="https://dsoutoreformas.com.br/" target="_blank">
                        <div class="capa"></div>
                    </a>    
                    <div class="nome">DSouto</div>
                </div>
                <div class="aoServico">
                    <a href="https://aoservico.netlify.app/" target="_blank">
                        <div class="capa">
                        </div>
                     </a>    
                    <div class="nome">AO Serviço</div>
                </div>
                <div class="ician">
                    <a href="https://icianweb.netlify.app/" target="_blank">
                        <div class="capa"></div>
                    </a>
                    <div class="nome">Ician Web</div>
                </div>
            </div>
        <div class="projectsBottom">&lt;/Projetos&gt;</div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Projects"
}
</script>

<style>
    .projects{
    font-weight: bold;
    font-size: 45px;
    padding-left: 80px;
  }

    .projectsBottom{
    font-weight: bold;
    font-size: 30px;
    color: rgb(189, 189, 189);
    padding-left: 80px;
  }

    .projectsShow{
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-left: 200px;
    padding-right: 200px;
  }

    .projectsHome{
    display: flex;
    flex-direction: column;
    gap: 125px;
    padding-top: 140px;
}

    .aoServico,
    .dSouto,
    .ician{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .aoServico .capa {
        background-image: url("../assets/AO Servico.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .ician .capa {
        background-image: url("../assets/Ician Site.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .dSouto .capa {
        background-image: url("../assets/DSouto Site.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .capa img{
       margin-top: 8px;
       object-fit: contain;
       height: 100%;
       width: 100%;
    }

    .capa{
    width: 350px;
    height: 210px;
    background-color: #000000;
    color: #ffffff;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000; 
    border-radius: 1rem; 
}    

.capa img {
    border-radius: 1rem;
}

@media screen and (max-width: 1020px) {
    
    .projectsShow, .projectsBottom, .projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    }
    .projectsBottom, .projects{
    padding: 0;
    }
  }

</style>