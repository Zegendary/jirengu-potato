import * as React from 'react';
import {connect} from 'react-redux'
import './Statistics.scss'

interface IStatisticsProps {
	todos: any[];
}

class Statistics extends React.Component<IStatisticsProps> {
	get finishedTodos(){
		return this.props.todos.filter(t => t.completed && !t.deleted)
	}

	constructor(props){
		super(props)
		console.log(this.props);
	}

	public render() {
		return (
			<div className="Statistics" id="Statistics">
				<ul>
					<li>统计</li>
					<li>目标</li>
					<li>番茄历史</li>
					<li>
						任务历史
						累计完成{this.finishedTodos.length}个任务
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	todos: state.todos,
	...ownProps
})

export default connect(mapStateToProps)(Statistics);