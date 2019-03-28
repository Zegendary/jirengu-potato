import * as React from 'react';
import { connect } from 'react-redux';
import {initTodos,updateTodo} from "../../redux/actions/todos";
import TodoInput from 'src/components/Todos/TodoInput'
import TodoItem from  'src/components/Todos/TodoItem'
import axios from 'src/config/axios'
import './Todos.scss'

class Todos extends React.Component<any> {
	constructor(props){
		super(props)
	}

	get unDeletedTodos(){
		return this.props.todos.filter(t => !t.deleted)
	}

	get unCompletedTodos(){
		return this.unDeletedTodos.filter(t => !t.completed)
	}

	get completedTodos(){
		return this.unDeletedTodos.filter(t => t.completed)
	}

	componentDidMount(){
		this.getTodos()
	}

	getTodos = async () => {
		try{
			const response = await axios.get('todos')
			const todos = response.data.resources.map(t=>Object.assign({},t,{editing: false}))
			this.props.initTodos(todos)
		}catch (e) {
			throw new Error(e)
		}
	}

	public render() {
		return (
			<div className="Todos" id="Todos">
				<TodoInput/>
				<div className="todoLists">
					{
						this.unCompletedTodos.map(t=>
							<TodoItem key={t.id} {...t}/>)
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	todos: state.todos,
	...ownProps
})

const mapDispatchToProps = {
	initTodos,
	updateTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);