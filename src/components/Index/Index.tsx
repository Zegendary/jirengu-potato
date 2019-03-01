import * as React from 'react';
import { Button } from "antd";
import axios from 'src/config/axios'

interface IRouter {
	history: any;
}

interface IIndexState {
	user: any
}

class Index extends React.Component<IRouter,IIndexState> {

	constructor(props: any){
		super(props)
		this.state = {
			user: {}
		}
	}

	async componentWillMount(){
		await this.getMe()
	}

	getMe = async () => {
		const response = await axios.get('me');
		this.setState({user: response.data})
	}

	logout = ()=>{
		localStorage.setItem('x-token','')
		this.props.history.push('/login')
	}

	render() {
		return (
			<div className="Component">
				<p>欢迎，{this.state.user && this.state.user.account}</p>
				<Button onClick={this.logout}>注销</Button>
			</div>
		);
	}
}

export default Index;