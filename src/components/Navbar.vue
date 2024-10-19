<template>
    <div class="navbar">
      <router-link to="/HomeView" class="homeButton">&lt;Home&gt;</router-link>
      <router-link to="/AboutMeView" class="aboutMeButton">&lt;Sobre mim&gt;</router-link>
      <router-link to="/ProjectsView" class="projectsButton">&lt;Projetos&gt;</router-link>
      <div class="configButton"><ConfigHomeView/></div>
    </div>
  </template>
  
  <script lang="ts">

  import ConfigHomeView from '../views/ConfigHomeView.vue';

  export default {      
      name: "Navbar",
      view: {
        ConfigHomeView,
      }
}             

  </script>       
  
  <style>

  .configButton {
    background-color: blueviolet;
  width: 200px;
  height: 200px;
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
  