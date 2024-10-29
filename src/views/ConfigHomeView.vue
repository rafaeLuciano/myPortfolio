<template>
  <div class="configBackdrop" @click.self="closeConfig">
    <button @click="closeConfig">-</button>
    <div class="configMenu">
      <h2>Configurações</h2>
      <h3>Língua</h3>
      <div class="lingua">
        <img src="../assets/usaflag.svg" alt="EUA Flag">
        <img src="../assets/brflag.svg" alt="Brasil Flag">
      </div>
      <h3>Tema</h3>
      <div class="tema">
        <img src="../assets/sun.svg" alt="EUA Flag">
        <img src="../assets/moon.svg" alt="Brasil Flag">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ConfigHomeView",
  emits: ['close'],
  setup(_, { emit }) {
    const closeConfig = () => {
      emit('close');
    };

    return {
      closeConfig,
    };
  }
});
</script>

<style>
.configBackdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
}

.configMenu {
  background-color: rgb(28, 28, 28);
  width: 400px;
  height: 550px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
  font-family: 'Teko';
  padding-top: 2px;
  flex-direction: column;
  gap: 20px;
}

.configMenu h2 {
  margin-top: -35px;
  font-size: 35px;
}

.configMenu h3 {
 
  font-size: 25px;
}

.configBackdrop button{
  margin-top: -530px;
  z-index: 999;
  color: rgb(112, 112, 112);
  border-color: rgb(112, 112, 112);
  border: 0;
  border-radius: 5px;
  width: 18px;
  height: 18px;
  font-size: 10px;
  font-weight: 1000;
  cursor: pointer;  
}

.configMenu img{
  width: 50px;
  height: 50px;
}

.tema img{
  filter: invert(100%) brightness(200%);
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;  
}

.lingua img{
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;  
}
</style>
