import * as React from 'react';
import {Button} from "antd";
import axios from 'src/config/axios'


class TomatoAction extends React.Component {

	startTomato = async ()=>{
		try{
			const response = await axios.post('tomatoes',{duration: 1500000})
			console.log(response.data)
		}catch (e) {
			throw new Error(e)
		}
	}

	public render() {
		return (
			<div className="TomatoAction" id="TomatoAction">
				<Button className="startTomatoButton" onClick={this.startTomato}>开始番茄</Button>
			</div>
		);
	}
}

export default TomatoAction;