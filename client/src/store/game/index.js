
import GameActions from './actions'
import GameMutations from './mutations'
import GameGetters from './getters'

export default
    {
        namespaced: true,
        state:
        {
            game_progress: [],
            game_id: "",
            statistics: {}
        },
        getters: GameGetters,
        actions: GameActions,
        mutations: GameMutations
    }
