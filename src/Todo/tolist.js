import React from 'react';
import Item from './item';

class Tolist extends React.Component{

	render() {
		const { todos } = this.props;
		return(
			<div className='todoListContainer'>
				{
					todos.map((_todo, _index) => {
						return (
							<Item updateTodoFn={this.updateTodo} key={_index} todo={_todo}></Item>
						)
					})
				}
			</div>
		);
	}

	updateTodo = (todo) => {
		this.props.updateTodoFn(todo);
	}
}

export default Tolist;