import {useContext} from 'react'

import {NavigationContext} from '../Header'
import NavigationLink from '@/components/common/NavigationLink/NavigationLink'
import ExpandingMenuItem from './ExpandingMenuItem'

import {navigationItems} from '@/constants/navigationItems'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
	const {toggleNavigation} = useContext(NavigationContext)
	return (
		<nav id='main-navigation' className={`${classes.nav}`}>
			<menu className={classes.menu}>
				{navigationItems.map(item => (
					<li key={item.title} className={classes.link}>
						{item.children && <ExpandingMenuItem item={item} classes={classes} />}
						{!item.children && <NavigationLink navigationItem={item} onClick={toggleNavigation} />}
					</li>
				))}
			</menu>
		</nav>
	)
}
