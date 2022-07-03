import React, { useState } from 'react';
import useWindowWidth from '../hooks/windowWidth';
import './LiveDiv.css';

interface LiveDivProps {
	height: number | string;
}

export function LiveDiv(props: LiveDivProps) {
	console.log({ props });
	const [height, setHeight] = useState(props.height);
	const { width } = useWindowWidth();
	function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		let value = (event.target as HTMLInputElement).value;
		if (isNaN(Number(value)) || value ===  '') {
			setHeight('initial');
		} else {
			setHeight(`${value}px`);
		}
	}
	return (
		<div className="LiveDivContainer" style={{ height: `${height}` }}>
			<span>{`${width}px`}</span>
			<input
				className='input'
				type='text'
				placeholder='Enter a number'
				onKeyUp={e => handleKeyUp(e)} />
		</div>
	);
}
