<template>
  <div class="navbar">
    <router-link to="/HomeView" class="homeButton">&lt;Home&gt;</router-link>
    <router-link to="/AboutMeView" class="aboutMeButton">&lt;Sobre mim&gt;</router-link>
    <router-link to="/ProjectsView" class="projectsButton">&lt;Projetos&gt;</router-link>
    <div class="configButton">
      <img src="../assets/config.svg" alt="" @click="toggleConfigHomeView">
    </div>
    
    <!-- Pop-up ConfigHomeView -->
    <ConfigHomeView v-if="isConfigHomeVisible" @close="toggleConfigHomeView" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ConfigHomeView from '../views/ConfigHomeView.vue';

export default {
  name: "Navbar",
  components: {
    ConfigHomeView
  },
  setup() {
    const isConfigHomeVisible = ref(false);

    const toggleConfigHomeView = () => {
      isConfigHomeVisible.value = !isConfigHomeVisible.value;
    };

    return {
      isConfigHomeVisible,
      toggleConfigHomeView
    };
  }
};
</script>    
  
  <style>

  .configButton img{
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-right: 10px;
}

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  
  .homeButton {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
  }

  .aboutMeButton {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
  
  .projectsButton {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }

@media screen and (max-width: 1020px) {
    
    .projectsButton, .aboutMeButton, .homeButton{
    font-size: 15px;
    }



}
  </style>
  