import React from 'react'
import PostBox from './PostBox'

export default class Header extends React.Component {
	render() {
		let query = {
			sort: 'date',
			filter: 'all'
		}

		return <header>
			<h1>My Live Blog</h1>

			<p className="post-filter">
				<span className="group">
					Sort:
					{' '}
					<a className={ query.sort == 'date' ? 'active' : ''}>Date</a>
					{' | '}
					<a className={ query.sort == 'likes' ? 'active' : ''}>Likes</a>
				</span>
				<span className="group">
					Filter:
					{' '}
					<a className={ query.filter == 'all' ? 'active' : ''}>All</a>
					{' | '}
					<a className={ query.filter == 'draft' ? 'active' : ''}>Drafts</a>
				</span>
			</p>
		</header>
	}
}
