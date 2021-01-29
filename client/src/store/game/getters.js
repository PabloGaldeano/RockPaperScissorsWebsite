
export default
    {
        GET_PROGRESS(state) {
            return state.game_progress;
        },
        GET_GAME_ID(state) {
            return state.game_id;
        },
        GET_STATISTICS(state){
            return state.statistics;
        }
    }