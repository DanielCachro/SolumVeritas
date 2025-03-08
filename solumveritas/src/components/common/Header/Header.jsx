import {useState, useRef, useEffect} from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import classes from './Header.module.css'
import MainNavigation from './MainNavigation/MainNavigation'

import logo from '@/assets/Logo.svg'
import {Menu} from 'lucide-react'

export default function Header() {
	const [navOpen, setNavOpen] = useState(false)
	const headerRef = useRef()
	const isMobile = useMediaQuery('max-width: 1200px')

	useEffect(() => {
		headerRef.current?.classList.toggle('mobile', isMobile)
		headerRef.current?.classList.toggle('desktop', !isMobile)
	}, [isMobile])

	return (
		<header ref={headerRef} className={`${classes.header}`}>
			<div className={classes.wrapper}>
				<div className={classes.container}>
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
			</div>
		</header>
	)
}
