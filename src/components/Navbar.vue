<template>
    <div class="navbar">
      <router-link to="/HomeView" class="homeButton">&lt;Home&gt;</router-link>
      <router-link to="/AboutMeView" class="aboutMeButton">&lt;Sobre mim&gt;</router-link>
      <router-link to="/ProjectsView" class="projectsButton">&lt;Projetos&gt;</router-link>
      <img src="../assets/ConfigButton.png" alt="Botão de configuração" class="configButton" @click="toggleDropdown">
      <div v-if="isDropdownVisible" class="dropdown-menu">
        <ul>
          <li>Língua: Português</li>
          <li>Modo: Light</li>
        </ul>
    </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';

  export default {
      name: "Navbar",
      setup() {
    const isDropdownVisible = ref(false);

    function toggleDropdown() {
      isDropdownVisible.value = !isDropdownVisible.value;
    }

    return {
      isDropdownVisible,
      toggleDropdown
    };
  }
}

  </script>
  
  <style>
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
    padding-left: 20px;
  }

  .aboutMeButton {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 20px;
  }
  
  .projectsButton {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 20px;
  }
  
  .configButton {
    width: 50px;
    height: 50px;
    padding-right: 20px;
  }

  .menu-icon {
  cursor: pointer;
  width: 30px; 
}

.dropdown-menu {
  position: absolute;
  top: 100%; 
  left: 0; 
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 100%; 
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0; 
}

.dropdown-menu li {
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

@media screen and (max-width: 1020px) {
    
    .projectsButton, .aboutMeButton, .homeButton{
    font-size: 15px;
    }
}
  </style>
  