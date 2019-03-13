import * as React from 'react';
import TodoInput from 'src/components/Todos/TodoInput'
import TodoItem from  'src/components/Todos/TodoItem'
import axios from 'src/config/axios'
import './Todos.scss'

interface ITodosState {
	todos: any[];
}

class Todos extends React.Component<any,ITodosState> {
	constructor(props){
		super(props)
		this.state = {
			todos: []
		}
	}

	addTodo = async (params:any)=>{
		const {todos} = this.state
		try{
			const response = await axios.post('todos',params)
			this.setState({todos: [response.data.resource,...todos]})
		}catch (e) {
			throw new Error(e)
		}
	}

	componentDidMount(){
		this.getTodos()
	}

	getTodos = async () => {
		try{
			const response = await axios.get('todos')
			this.setState({todos: response.data.resources})
		}catch (e) {
			throw new Error(e)
		}
	}

	updateTodo = async (id:number,params:any) => {
		const {todos} = this.state
		try {
			const response = await axios.put(`todos/${id}`,params)
			const newTodos = todos.map(t=>{
				if (id === t.id){
					return response.data.resource
				} else {
					return t
				}
			})
			this.setState({todos: newTodos})
		}catch (e) {
			throw new Error(e)
		}
	}

	public render() {
		return (
			<div className="Todos" id="Todos">
				<TodoInput addTodo={(params)=>this.addTodo(params)}/>
				<main>
					{
						this.state.todos.map(t=><TodoItem key={t.id} {...t}
							update={this.updateTodo}
						/>)
					}
				</main>
			</div>
		);
	}
}

export default Todos;