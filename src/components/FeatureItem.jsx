import React from 'react'

function FeatureItem({iconName, title, text}) {
    return (
        <div className="feature-item">
            <div className="feature-item__icon">
                <img src={process.env.PUBLIC_URL + `/img/${iconName}.png`} alt="" />
            </div>
            <h1 className='feature-item__title'>{title}</h1>
            <p className='feature-item__text'>{text}</p>
        </div>
    )
}

export default FeatureItem
