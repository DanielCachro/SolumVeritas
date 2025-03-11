import {useContext} from 'react'
import {NavLink} from 'react-router'

import {NavigationContext} from '../Header'
import ExpandingMenuItem from './ExpandingMenuItem'

import {navigationItems} from '@/constants/navigationItems'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
	const {toggleNavigation} = useContext(NavigationContext)
	return (
		<nav className={`${classes.nav}`}>
			<menu className={classes.menu}>
				{navigationItems.map(item => (
					<li key={item.title} className={classes.link}>
						{item.children && <ExpandingMenuItem item={item} classes={classes} />}
						{!item.children && (
							<NavLink onClick={toggleNavigation} to={item.link}>
								{item.title}
							</NavLink>
						)}
					</li>
				))}
			</menu>
		</nav>
	)
}
