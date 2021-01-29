import Petition from '../../utils/petitionManager'

export default
    {
        async ACTION_GET_GAME_PROGRESS(context) {
            Petition.get('game/' + context.state.game_id, {}, 'Progress retrieved',
            (progress) => context.commit('SET_GAME_PROGRESS',progress) );
        },
        async ACTION_NEW_ROUND(context) {
            Petition.patch('game/' + context.state.game_id + '/newRound', {}, 'New round created', 
                (response) => {
                    console.log(response)
                    context.commit('SET_NEW_ROUND', response)                    
                })
        }, 
        async ACTION_NEW_GAME(context){
            Petition.post('game/create', {}, 'New game created',  (gameID) =>{
                console.log(gameID)
                context.commit('SET_GAME_ID', gameID)
            })
        },
        async ACTION_RESTART_GAME(context){
            Petition.patch('game/'+context.state.game_id+'/restart',{},'Game restarted', () =>{
                context.commit('SET_GAME_PROGRESS',[])
            })
        },
        async ACTION_GET_STATISTICS(context){
            Petition.get('statistics/', {}, 'Statistics refreshed',
            (progress) => context.commit('SET_GAME_STATISTICS',progress) );
        }
    }