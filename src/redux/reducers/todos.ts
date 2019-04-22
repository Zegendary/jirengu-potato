import {ADD_TODO,INIT_TODOS,UPDATE_TODO,EDIT_TODO} from '../actionTypes'

export default (state:any[] = [], action:any):any => {
	switch (action.type){
		case ADD_TODO:
			return [...state,action.payload];
		case INIT_TODOS:
			return [...action.payload];
		case UPDATE_TODO:
			return state.map(t=>{
				if(t.id === action.payload.id){
					return action.payload
				}else{
					return t
				}
			})
		case EDIT_TODO:
			return state.map(t=>{
			if(t.id === action.payload){
				return Object.assign({},t,{editing: true})
			}else{
				return Object.assign({},t,{editing: false})
			}
		})
		default:
			return state
	}
}

