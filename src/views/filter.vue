<template>
    <div class="filter mb-5">
        <h1>filter page</h1>
        <div class="stepper">
            <filter1 v-if="step === 1"></filter1>
            <filter2 v-if="step === 2"></filter2>
            <filter3 v-if="step === 3"></filter3>
            <filter4 v-if="step === 4"></filter4>
            <filter5 v-if="step === 5"></filter5>
            <filter6 v-if="step === 6"></filter6>
            <filter7 v-if="step === 7"></filter7>
            <filter8 v-if="step === 8"></filter8>
            <filter9 v-if="step === 9"></filter9>
            <filter11 v-if="step === 11"></filter11>
        </div>
    </div>
</template>

<script>
import filter1 from '../components/filter/filter1'
import filter2 from '../components/filter/filter2'
import filter3 from '../components/filter/filter3'
import filter4 from '../components/filter/filter4'
import filter5 from '../components/filter/filter5'
import filter6 from '../components/filter/filter6'
import filter7 from '../components/filter/filter7'
import filter8 from '../components/filter/filter8'
import filter9 from '../components/filter/filter9'
import filter11 from '../components/filter/filter11'

export default {
    components: {
        filter1,
        filter2,
        filter3,
        filter4,
        filter5,
        filter6,
        filter7,
        filter8,
        filter9,
        filter11,
    },
    computed: {
        step() {
            return this.$store.state.filterStep
        }
    },
    mounted() {
        this.$store.watch(
            (state, getters) => getters.filterStep,
            (newV, oldV) => {
                this.step = newV
            }
        )
    }
}
</script>

<style>

</style>
