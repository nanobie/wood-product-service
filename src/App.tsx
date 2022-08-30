import React from 'react';
import {Header} from './components/Header/Header';
import {Location, Route, Routes, useLocation} from 'react-router-dom';
import {About} from './pages/about-us/About';
import {Prices} from './pages/prices-for-services/Prices';
import {Gallery} from './pages/gallery/Gallery';
import {Contact} from './pages/contacs/Contacs';
import {Home} from './pages/home/Home';

export const App: React.FC = (): JSX.Element => {
	const location: Location = useLocation();
	const hasBackground: boolean = ['/about', '/contact', '/gallery', '/prices'].some(
		(pathname: string): boolean  => pathname === location.pathname
	);
	return (
		<div>
			<Header hasBackground={hasBackground} />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/prices" element={<Prices />}/>
				<Route path="/gallery" element={<Gallery />}/>
				<Route path="/contact" element={<Contact />}/>
			</Routes>
		</div>
	);
};