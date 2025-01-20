<template>
  <div class="q-pa-xl">
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span>{{ course?.reviewsCount }}</span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}</span>
          <q-space />
          <a
            class="text-bold"
            href="https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8#reviews"
            target="_blank"
          >
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        본 강좌는 Vue.js 3로 웹 애플리케이션을 위한 만들기 강좌로, 새롭게 등장한
        Composition API를 기반으로 강의를 진행합니다. 공식문서를 기반으로
        알아야하는 내용을 빠짐없이 다루면서도 쉽고, 자세하고, 깊게 내용을
        다룹니다.
      </p>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course } = useCourse(courseSlug);
</script>

<style scoped></style>
