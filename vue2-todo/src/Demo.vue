<template>
  <div>
    <p>{{orginalPrice}}</p>
    <p>{{doublePrice}}</p>
    <p>{{triplePrice}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['orginalPrice', 'doublePrice', 'triplePrice'])
  }
}
</script>

<style scoped>

</style>
