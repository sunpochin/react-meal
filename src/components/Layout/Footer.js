import React from 'react';
import './Footer.module.css';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>
				Copyright ⓒ{' '}
				<a href='https://github.com/sunpochin'>
					{' '}
					https://github.com/sunpochin{' '}
				</a>{' '}
				{year}
			</p>
		</footer>
	);
}

export default Footer;
