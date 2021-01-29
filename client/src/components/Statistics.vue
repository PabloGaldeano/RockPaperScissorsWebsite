<template>
    <div class="centered-block statistics">
        <span>Total rounds played: <span> {{getStatistics.totalRoundsPlayed || 0}} </span></span>
        <span>Total player 1 wins: <span> {{getStatistics.totalPlayerOneWins || 0}} </span></span>
        <span>Total player 2 wins: <span> {{getStatistics.totalPlayerTwoWins || 0}} </span></span>
        <span>Total draws: <span> {{getStatistics.totalDraws || 0}} </span></span>
        <b-button type="success" @click="refreshStatistics">Refresh!</b-button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default 
{
    computed:{
        ...mapGetters({getStatistics: "game/GET_STATISTICS"})
    },
    methods: {
        refreshStatistics(){
            this.$store.dispatch("game/ACTION_GET_STATISTICS")
        }
    }
}
</script>
<style scoped>

</style>