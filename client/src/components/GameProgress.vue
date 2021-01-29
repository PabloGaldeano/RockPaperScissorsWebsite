<template>
    <div  class="centered-block">
        <div> Total rounds played in this game: <span> {{ this.getGameProgress.length }} </span> </div>
        <table style="width: 100%;">
            <tr>
                <th>
                    Player 1
                </th>
                <th>
                    Player 2
                </th>
                <th>
                    Result
                </th>
            </tr>
            <tr v-for="round in this.getGameProgress" v-bind:key="round.id">
                <td>
                    {{round.player_one_movement}}
                </td>
                <td>
                    {{round.player_two_movement}}
                </td>
                <td>
                    {{round.result}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters(
            {
                getGameProgress: "game/GET_PROGRESS"
            })
    }
}
</script>
<style scoped>

</style>