import ListView from './ListView.vue';
import bus from '@/utills/bus';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스 (컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created() {
      bus.$emit('start:spinner'); // 이벤트를 start:spinner 로 App.vue로 보냄
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
              console.log('fetched');
              bus.$emit('end:spinner');
            })
            .catch((err) => {
              console.log(err)
            })
      }, 1500)
    },
    render(createElement) {
      return createElement(ListView)
    }
  }
}

