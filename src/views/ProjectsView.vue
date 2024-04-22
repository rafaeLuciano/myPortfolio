<template>
    <div class="projectsHome">
        <div class="projects">&lt;Projetos&gt;</div>
            <div class="projectsShow">
                <div class="dSouto">
                    <div class="capa">&lt;&gt;</div>
                    <div class="nome">DSouto</div>
                </div>
                <div class="aoServico">
                    <div class="capa">&lt;&gt;</div>
                    <div class="nome">AO Serviço</div>
                </div>
                <div class="utsumazy">
                    <div class="capa">&lt;&gt;</div>
                    <div class="nome">Utsumazy</div>
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
    gap: 145px;
    padding-top: 25px;
}

    .aoServico,
    .dSouto,
    .utsumazy{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .capa{
    width: 290px;
    height: 190px;
    background-color: #000000;
    color: #ffffff;
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}    

</style>