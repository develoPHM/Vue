<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        라우터링크
        <RouterLink to="/">RouterLinkHome</RouterLink>
        <RouterLink to="https://naver.com">네이버</RouterLink>
        <br />
        넉스트링크
        <NuxtLink to="/">RouterLinkHome</NuxtLink>
        <NuxtLink to="https://naver.com">네이버</NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
