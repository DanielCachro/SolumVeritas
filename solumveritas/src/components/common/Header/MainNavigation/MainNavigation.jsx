import {navigationItems} from '@/constants/navigationItems'
import ExpandingMenuItem from './ExpandingMenuItem'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
	return (
		<nav className={`${classes.nav}`}>
			<menu className={classes.menu}>
				{navigationItems.map(item => (
					<li key={item.title} className={classes.link}>
						{item.children && <ExpandingMenuItem item={item} classes={classes} />}
						{!item.children && <a href={item.link}>{item.title}</a>}
					</li>
				))}
			</menu>
		</nav>
	)
}
