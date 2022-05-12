import React, { HTMLProps, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo-bookmark.svg';
import menu from 'assets/images/icon-hamburger.svg';
import close from 'assets/images/icon-close.svg';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const NavBar: React.FC<Props> = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	const handleNavElement = () => setShowNav((showNav) => !showNav);
	return (
		<nav className={styles.navbar}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Image src={logo} alt='INSURE logo' />
				</div>
				<ul className={styles.menu_list} id={styles[`${showNav ? 'active' : undefined}`]}>
					<div
						className={styles.icon}
						id={styles.cancel_btn}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<Image src={close} alt=""/>
					</div>
					<ul className={styles.user_buttons}>
						<li onClick={handleNavElement}>
							<Link href='/'>
								<a>features</a>
							</Link>
						</li>
						<li onClick={handleNavElement}>
							<Link href='/'>
								<a>pricing</a>
							</Link>
						</li>
						<li onClick={handleNavElement}>
							<Link href='/'>
								<a>contact</a>
							</Link>
						</li>

						<li onClick={handleNavElement}>
							<Link href='http://markosbahgat.com'>
								<a className={styles['active']}>Login</a>
							</Link>
						</li>
					</ul>
				</ul>
				<div
					className={styles.icon}
					id={styles[`${showNav && 'hide'}`]}
					onClick={() => setShowNav((showNav) => !showNav)}>
					<Image src={menu} alt=""/>
				</div>
			</div>
		</nav>
	);
};
