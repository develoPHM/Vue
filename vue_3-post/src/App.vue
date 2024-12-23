<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
	<AppAlert :items="alerts"></AppAlert>
</template>

<script setup>
import TheHeader from '@/components/layouts/TheHeader.vue';
import TheView from '@/components/layouts/TheView.vue';
import { useAlert } from '@/composables/alert';
const { alerts } = useAlert;
</script>

<style lang="scss" scoped></style>
