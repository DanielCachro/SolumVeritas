import {useState, useRef, useEffect, createContext} from 'react'
import {NavLink} from 'react-router'
import {Menu} from 'lucide-react'

import useMediaQuery from '@/hooks/useMediaQuery'

import MainNavigation from './MainNavigation/MainNavigation'
import logo from '@/assets/Logo.svg'

import classes from './Header.module.css'

export const NavigationContext = createContext()

export default function Header() {
	const [navOpen, setNavOpen] = useState(false)
	const headerRef = useRef()
	const isMobile = useMediaQuery('max-width: 1200px')

	useEffect(() => {
		headerRef.current?.classList.toggle('mobile', isMobile)
		headerRef.current?.classList.toggle('desktop', !isMobile)
	}, [isMobile])

	function toggleNavigation() {
		setNavOpen(open => !open)
		window.scrollTo(0, 0)
	}

	const contextValue = {
		isNavOpen: navOpen,
		toggleNavigation,
	}

	return (
		<NavigationContext.Provider value={contextValue}>
			<header ref={headerRef} className={`${classes.header}`}>
				<div className={classes.wrapper}>
					<div className={classes.container}>
						<NavLink
							onClick={() => {
								window.scrollTo(0, 0)
							}}
							to='/'>
							<div className={classes.logo}>
								<img src={logo} alt='Logo Solum Veritas'></img>
								<p>Solum Veritas</p>
							</div>
						</NavLink>
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
				</div>
			</header>
		</NavigationContext.Provider>
	)
}
