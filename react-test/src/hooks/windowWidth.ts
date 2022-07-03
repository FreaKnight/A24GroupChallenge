import { useState, useEffect } from 'react';

function getBrowserWidth() {
	const { innerWidth: width } = window;
	return { width };
}

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(getBrowserWidth());
	useEffect(() => {
		function handleResize() {
			setWindowWidth(getBrowserWidth());
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowWidth;
}