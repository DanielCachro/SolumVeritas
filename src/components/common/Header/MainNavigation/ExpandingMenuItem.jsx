import {useEffect, useRef, useState, useContext} from 'react'
import {ArrowDown} from 'lucide-react'

import {NavigationContext} from '../Header'
import NavigationLink from '@/components/common/NavigationLink/NavigationLink'

export default function ExpandingMenuItem({item, classes}) {
	const [isOpen, setIsOpen] = useState(false)
	const buttonRef = useRef(null)

	const {toggleNavigation} = useContext(NavigationContext)

	useEffect(() => {
		function handleClickOutside(e) {
			if (buttonRef.current && !buttonRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<>
			<button ref={buttonRef} onClick={() => setIsOpen(open => !open)} className={`${classes.linkWrapper}`}>
				<p>{item.title}</p>
				<ArrowDown style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}} strokeWidth={1} />
			</button>
			{isOpen && (
				<ul className={classes.submenu}>
					{item.children.map(item => (
						<li key={item.title}>
							<NavigationLink navigationItem={item} onClick={toggleNavigation} />
						</li>
					))}
				</ul>
			)}
		</>
	)
}
