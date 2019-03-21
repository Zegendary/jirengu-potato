import {ADD_TOMATO,UPDATE_TOMATO, INIT_TOMATOES} from "../actionTypes";

export default (state:any[] = [], action) => {
	switch(action.type){
		case ADD_TOMATO:
			return [action.payload,...state];
		case UPDATE_TOMATO:
			return state.map(t=>{
				if(t.id === action.payload.id){
					return action.payload
				}else{
					return t
				}
			})
		case INIT_TOMATOES:
			return [...action.payload]
		default:
			return state
	}
}