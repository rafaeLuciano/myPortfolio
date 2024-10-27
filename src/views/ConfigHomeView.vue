<template>
  <div class="configBackdrop" @click.self="closeConfig">
    <div class="configMenu">
      <h2>Configurações</h2>
      <button @click="closeConfig">X</button>
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
  z-index: 999;
}

.configMenu {
  background-color: rgb(28, 28, 28);
  width: 400px;
  height: 600px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
  font-family: 'Teko';
  padding-top: 2px;
}

.configMenu h2 {
  color: aqua;
  margin-top: 24px;
}

.configMenu button{
  background-color: rgb(4, 255, 0);
  margin-top: 12px;
  margin-right: 12px;
}
</style>
