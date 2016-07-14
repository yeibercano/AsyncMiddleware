import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
	renderUser(user) {
	  return (
	  	<div className='card card-block'>
	  	  <h4 className='card-title'>{user.name}</h4>
	  	  <p className='card-text'>Savvy </p>
	  	  <a className='btn btn-primary'>Email</a>
	  	</div>
	  )
	}

	render() {
		return (
			<div> 
      	{this.props.users.map(this.renderUser)}
      </div>
	  );
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(UserList);