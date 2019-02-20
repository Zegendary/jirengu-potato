import * as React from 'react';
import { Button } from "antd";

interface IRouter {
	history: any;
}

class Component extends React.Component<IRouter> {

	constructor(props: any){
		super(props)
	}

	login = ()=>{
		this.props.history.push('/login')
	}

	render() {
		return (
			<div className="Component">
				<Button onClick={this.login}>登录</Button>
			</div>
		);
	}
}

export default Component;