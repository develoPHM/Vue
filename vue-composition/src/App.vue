<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">버튼</button>
  </div>
</template>

<script>
import { useMessage} from '@/hooks/useMessage';

export default {
  setup() {
    const {message, changeMessage} = useMessage(); // 디스트럭처링

    return { message, changeMessage }
  }
}
</script>

<style scoped>

</style>