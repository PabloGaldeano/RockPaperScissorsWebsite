<template>
<b-container>
  <b-row class="game-menu text-center" align-v="center">
    <b-col><b-button class="main-navigation-button" @click="createNewGame" :disabled="this.getGameID != ''" variant="success">Create new game!</b-button></b-col>
    <b-col><b-button class="main-navigation-button" @click="newRound" :disabled="this.getGameID == ''" variant="success">Play new round!</b-button></b-col>
    <b-col><b-button class="main-navigation-button" @click="restart" :disabled="this.getGameID == ''" variant="warning">Restart the game</b-button></b-col>
  </b-row>
  <b-row class="game-menu text-center" align-v="center"> 
      <Statistics></Statistics>
      <GameProgress></GameProgress>
  </b-row>
</b-container>

</template>

<script>
import GameProgress from '@/components/GameProgress'
import {mapGetters} from 'vuex'
import Statistics from '@/components/Statistics.vue';

export default {
    components: {GameProgress, Statistics},
    computed: {
          ...mapGetters({
                getGameID: "game/GET_GAME_ID"
            })
    }, 
    methods:{
        createNewGame: function(){
            this.$store.dispatch("game/ACTION_NEW_GAME");
        },
        newRound: function(){
            this.$store.dispatch("game/ACTION_NEW_ROUND");
        },
        restart: function(){
            this.$store.dispatch("game/ACTION_RESTART_GAME");

        }
    }    
}
</script>

<style scoped>

</style>