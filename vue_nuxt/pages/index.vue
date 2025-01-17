<template>
  <q-page padding>
    <div class="q-my-xl tex-center">
      <div class="text-h4">토끼</div>
      <p class="q-mt-sm text-grey-8">뉴진스 토끼</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <RouterLink :to="`/course/${courseSlug}`">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
          />
        </RouterLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>
<style scoped></style>
