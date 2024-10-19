<template>
  <div class="div">
    <img src="../assets/config.svg" alt="Botão de configuração" class="configButton">
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
    name: "ConfigHomeView",
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

.div {
  background-color: blueviolet;
  width: 200px;
  height: 200px;
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

/*Config do menu abaixo*/

.dropdown-menu {
  position: absolute;
  top: 100%; 
  right: 0; 
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  width: 15%; 
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
    
    
  }

</style>