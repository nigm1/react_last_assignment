let initialstate={
    lang:'en-US',
    fav:[]
}
export default function reducer(state=initialstate,action) {
    switch (action.type) {
        case 'SET_Language':
            return{...state,lang:action.payload}
            break;
        case 'SET_Fav':
            let isinfav=state.fav.findIndex((movie)=>movie.id==action.payload.id)
            if(isinfav==-1){
            state.fav.push(action.payload)
            }
            return {...state,favourite:true}
            break;
    
        default:
            return state
            break;
    }
}
