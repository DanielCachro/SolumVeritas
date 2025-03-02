import {useState, useEffect, useRef} from 'react'
import classes from './Header.module.css'
import MainNavigation from './MainNavigation/MainNavigation'

import logo from '@/assets/Logo.svg'
import {Menu} from 'lucide-react'

const mediaQuery = window.matchMedia('(max-width: 1280px)')

export default function Header() {
	const [navOpen, setNavOpen] = useState(false)
	const headerRef = useRef()
	const [isMobile, setIsMobile] = useState(mediaQuery.matches)

	useEffect(() => {
		const handleChange = event => {
			setIsMobile(event.matches)
			headerRef.current?.classList.toggle('mobile', event.matches)
			headerRef.current?.classList.toggle('desktop', !event.matches)
		}

		handleChange(mediaQuery)
		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	return (
		<header ref={headerRef} className={classes.header}>
			<div className={classes.wrapper}>
				<div className={classes.logo}>
					<img src={logo} alt='Logo Solum Veritas'></img>
					<p>Solum Veritas</p>
				</div>
				{isMobile && (
					<button className={classes.hamburger}>
						<Menu
							onClick={() => {
								setNavOpen(open => !open)
							}}
							color='#717680'
						/>
					</button>
				)}
			</div>
			{(!isMobile || navOpen) && <MainNavigation />}
		</header>
	)
}
