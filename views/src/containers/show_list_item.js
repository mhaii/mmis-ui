import React, { Component } from 'react';

import { Link } from 'react-router';

class ShowListItem extends Component {
	componentDidMount(){
		this.props.getListItem(this.props.params.name);
	}
	render(){
		const { item } = this.props;
		if(!item) {
			return (<div>Loading...</div>)
		}

		return(
			<div>
				<Link to={"/"}>
                    <button type="button" className="btn btn-primary" style={{ marginTop: 10, marginBottom: 10 }}>Go Back</button>
                </Link>
   				<h1>{ item.name }</h1>
				<p>{ item.description }</p>
   			</div>
		)
	}
}

export default ShowListItem;
