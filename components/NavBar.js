var React = require('react');

var NavBar = React.createClass({

	getInitialState(){
		return {
			curpage: 'home'
		};
	},

	render(){


		return (
			<div className="header">
				<div className="title">DORM LIST</div>
				<table className="nav-bar">
					<td><button className="nav-item create" onclick={() => {this.setState({curpage: 'create'})}}>Add Dormitory</button></td>
					<td><button className="nav-item find" onclick={() => {this.setState({curpage: 'find'})}}>FIND STUDENT</button></td>
					<td><button className="nav-item getall" onclick={() => {this.setState({curpage: 'getall'})}}>All Dorms</button></td>
				</table>
			</div>
		);
	}

});

module.exports = NavBar;