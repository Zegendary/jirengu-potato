import * as React from 'react';
import TomatoAction from './TomatoAction'
import {connect} from 'react-redux';
import './Tomatoes.scss'
import {initTodos, updateTodo} from "../../redux/actions";

class Tomatoes extends React.Component {
	public render() {
		return (
			<div className="Tomatoes" id="Tomatoes">
				<TomatoAction/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	tomatoes: state.tomatoes,
	...ownProps
})

const mapDispatchToProps = {
	initTodos,
	updateTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(Tomatoes);