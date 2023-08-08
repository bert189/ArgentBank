import React from 'react'

function Hero({ imgName, alt, titles, text }) {
	return (
		<div className='hero'>
			<img src={process.env.PUBLIC_URL + `/img/${imgName}.jpeg`} alt={alt} />
			<div className='content-wrapper'>
				<div className='hero__content'>
					{titles && titles.map((title, index) =>
						<p key={index} className="hero__subtitle" >{title}</p>
					)}
					<p className="hero__text" >{text}</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
