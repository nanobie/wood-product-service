import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.scss';
import Logo from '../../assets/icons/logo.svg';
import clsx from 'clsx';

export interface IHeaderProps {
	hasBackground: boolean;
}

export const Header: React.FC<IHeaderProps> = (props: IHeaderProps): JSX.Element => {
	console.log(props.hasBackground);
	return (
		<div className={clsx([style.header, props.hasBackground && style.headerBackground])}>
			<NavLink to={'/'} className={style.logo}><img src={Logo} alt="logo"/></NavLink>
			<ul className={clsx([style.nav, props.hasBackground && style.headerBackground])}>
				<li>
					<NavLink
						to={'/gallery'}
						className={({isActive}: {isActive:boolean}): string => isActive ? style.navbarSelected : ''}
					>
							Gallery
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/prices'}
						className={({isActive}: {isActive:boolean}): string => isActive ? style.navbarSelected : ''}
					>
							Prices for service
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/about'}
						className={({isActive}: {isActive:boolean}): string => isActive ? style.navbarSelected : ''}
					>
							About
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/contact'}
						className={({isActive}: {isActive:boolean}): string => isActive ? style.navbarSelected : ''}
					>
							Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};