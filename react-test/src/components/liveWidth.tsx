import React, { useState } from 'react';
import useWindowWidth from '../hooks/windowWidth';
import './LiveWidth.css';

export function LiveWidth() {
	const [height, setHeight] = useState('initial');
	const { width } = useWindowWidth();
	function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		let value = (event.target as HTMLInputElement).value;
		if (isNaN(Number(value))) {
			setHeight('initial');
		} else {
			setHeight(`${value}px`);
		}
	}
	return (
		<div className="LiveWidthContainer" style={{ height: `${height}` }}>
			<span>{`${width}px`}</span>
			<input
				className='input'
				type='text'
				placeholder='Enter a number'
				onKeyUp={e => handleKeyUp(e)} />
		</div>
	);
}