<template>
  <div :class="{ active: isActive, 'text-large': isLarge }">This is a box.</div>
  <button @click="toggleClass">Toggle Class</button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isActive = ref(false);
    const isLarge = ref(true);

    const toggleClass = () => {
      isActive.value = !isActive.value;
      isLarge.value = !isLarge.value;
    };

    return { isActive, isLarge, toggleClass };
  },
};
</script>

<style>
.active {
  color: green;
}

.text-large {
  font-size: 24px;
}
</style>
