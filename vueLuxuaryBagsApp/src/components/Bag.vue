<template>
    <div>

    </div>
</template>

<script>
import {useBagsStore} from '../stores/counter.js'
    export default {
        data() {
            return {
                bagsStore: useBagsStore(),
                bag: null,
            }
        },
        async created () {
            try {
                await this.bagsStore.fetchBag(this.$route.params.brand);
                this.bag = this.bagsStore.getBag;
            } catch (error) {
                console.log(error);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>