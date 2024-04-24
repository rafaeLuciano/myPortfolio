<template>
  <div class="home">
    <div class="bemVindo">
      <div class="bem">BEM</div>
      <div class="vindo">- VINDO!</div>
    </div>
    <div class="welcome">
      <div>{{ currentGreeting }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: "HomeView",
  setup() {
    const greetings = ref([
      "WELCOME!",
      "欢迎!",
      "WILLKOMMEN!",
      "स्वागत है!",
      "BENVENUTO!",
      "ΚΑΛΏΣ ΉΡΘΑΤΕ!",
      "BIENVENIDO!",
      "환영합니다!",
      "WELKOM!",
      "ようこそ!"
    ]);
    const currentGreeting = ref(greetings.value[0]);
    let greetingIndex = 0;

    function nextGreeting() {
      greetingIndex = (greetingIndex + 1) % greetings.value.length;
      currentGreeting.value = greetings.value[greetingIndex];
    }

    let intervalId = 0;
    onMounted(() => {
      intervalId = setInterval(nextGreeting, 2000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentGreeting
    };
  }
}
</script>

<style>

.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
}

.bemVindo{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-style: italic;
  font-family: 'Teko';
  font-size: 200px;
  padding-top: 120px;
}
.bem{
 font-weight: 650;
}

.vindo{
  font-weight: 350;
  color: rgb(56, 56, 56);
}

@media screen and (max-width: 1020px) {
    
  .home{
  padding-top: 100px;
  }

  .bem{
  font-weight: 650;
  font-size: 85px;
}

  .vindo{
  font-weight: 350;
  color: rgb(56, 56, 56);
  font-size: 85px;
}


.bemVindo{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

}

</style>

