import bus from '@/utills/bus';

export default {
    // 재사용할 컴포넌트 옵션
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
    }
}