import React from 'react'

function GreenButton({ text, onClick }) {
	return (
		<button className="green-button" onClick={onClick} >
			{text}
		</button>
	)
}

export default GreenButton
