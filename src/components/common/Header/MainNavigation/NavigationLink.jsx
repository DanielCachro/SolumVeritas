import {NavLink} from 'react-router'

export default function NavigationLink({navigationItem, ...props}) {
	return (
		<>
			{/\.\w+$/.test(navigationItem.link) ? (
				<a href={navigationItem.link} target='_blank' rel='noopener noreferrer' {...props}>
					{navigationItem.title}
				</a>
			) : (
				<NavLink to={navigationItem.link} {...props}>
					{navigationItem.title}
				</NavLink>
			)}
		</>
	)
}
