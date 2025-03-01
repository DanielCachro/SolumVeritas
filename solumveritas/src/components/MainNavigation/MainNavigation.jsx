import ExpandingMenuItem from './ExpandingMenuItem'
import classes from './MainNavigation.module.css'

const menuItems = [
	{
		title: 'Strona Główna',
		link: '/',
	},
	{
		title: 'Aktualności',
		link: '#',
	},
	{
		title: 'Nasze Sprawy',
		link: '#',
	},
	{
		title: 'Dokumenty',
		children: [
			{
				title: 'Statut',
				link: '#',
			},
			{
				title: 'Regulamin Legitymacji',
				link: '#',
			},
			{
				title: 'Polityka Prywatności',
				link: '#',
			},
		],
	},
	{
		title: 'Pomoc',
		link: '#',
	},
	{
		title: 'Poradnik',
		link: '#',
	},
	{
		title: 'Kontakt',
		link: '#',
	},
]

export default function MainNavigation() {
	return (
		<nav className={`${classes.nav}`}>
			<menu className={classes.menu}>
				{menuItems.map(item => (
					<li key={item.title} className={classes.link}>
						{item.children && <ExpandingMenuItem item={item} classes={classes} />}
						{!item.children && <a href={item.link}>{item.title}</a>}
					</li>
				))}
			</menu>
		</nav>
	)
}
