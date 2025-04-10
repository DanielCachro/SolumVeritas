import {NavLink} from 'react-router'

import classes from './Footer.module.css'
import {navigationItems} from '@/constants/navigationItems'

import NavigationLink from '@/components/common/NavigationLink/NavigationLink'

import facebook from '@/assets/facebook.svg'

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={`wrapper ${classes.wrapper}`}>
				<div className={classes.links}>
					<menu>
						{navigationItems
							.filter(item => !item.children)
							.map(item => (
								<li key={item.title}>
									<NavigationLink navigationItem={item} />
								</li>
							))}
					</menu>
					<ul className={classes.links__socials}>
						<li>
							<NavLink to='https://www.facebook.com/groups/766233760532401/' target='_blank' rel='noreferrer'>
								<img src={facebook} alt='Ikona facebooka' />
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={classes.information}>
					<div>
						<p className={classes.information__companyName}>STOWARZYSZENIE SOLUM VERITAS</p>
						<p>
							KRS: <span className={classes.grayText}>0001025724</span>
						</p>
						<p>
							NIP: <span className={classes.grayText}>7162839529</span>
						</p>
						<p>
							Regon: <span className={classes.grayText}>525076181</span>
						</p>
					</div>
					<div className={classes.information__links}>
						<menu>
							{navigationItems
								.filter(item => item.children)
								.flatMap(item => item.children)
								.map(child => (
									<li key={child.title}>
										<NavigationLink navigationItem={child} />
									</li>
								))}
						</menu>
					</div>
					<div>
						<p>Wykonał Daniel Cachro</p>
						<p className={classes.grayText}>danielcachro@gmail.com</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
