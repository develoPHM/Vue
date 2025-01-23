export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `프로바이드임 ${msg}!`,
    },
  };
});
