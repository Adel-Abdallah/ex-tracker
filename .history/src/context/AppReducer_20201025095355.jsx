export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transaction:state
            }
        default:
            return state;
    }
}