import Vue from 'vue'
export default
    {
        SET_GAME_ID: function (state, data) {
            state.game_id = data;
        },
        SET_NEW_ROUND(state,data) {            
            state.game_progress.push(data)
        },
        SET_GAME_PROGRESS(state,data){
            Vue.set(state,"game_progress",data)
        },
        SET_GAME_STATISTICS(state,data){
            Vue.set(state, "statistics",data)
        }
    }