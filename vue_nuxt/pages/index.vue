<template>
  <q-page padding>
    <div class="q-my-xl tex-center">
      <div class="text-h4">토끼</div>
      <p class="q-mt-sm text-grey-8">뉴진스 토끼</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for="n in 3" :key="n" class="col-12 col-md-4 col-sm-6">
        <CourseCard />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
