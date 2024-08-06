<template>
    <div class="projectsHome">
        <div class="projects">&lt;Projetos&gt;</div>
            <div class="projectsShow">
                <div class="dSouto">
                    <div class="capa">
                        <img src="../assets/DSouto Site.png" alt="Capa DSouto">
                    </div>
                    <div class="nome">DSouto (Em Construção)</div>
                </div>
                <div class="aoServico">
                    <div class="capa">
                        <img src="../assets/AO Servico.png" alt="Capa AO Serviço">
                    </div>
                    <div class="nome">AO Serviço (Em Construção)</div>
                </div>
                <div class="ician">
                    <div class="capa">
                        <a href="https://icianweb.netlify.app/" target="_blank">
                            <img src="../assets/Ician Site.png" alt="Capa Ician Web">
                        </a>
                    </div>
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
    padding-top: 25px;
}

    .aoServico,
    .dSouto,
    .ician{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .ician .capa img{
        margin-top: 8px;
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