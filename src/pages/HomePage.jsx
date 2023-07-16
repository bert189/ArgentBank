import React from 'react'
import Hero from '../components/Hero'
import FeatureItem from '../components/FeatureItem'

function HomePage() {

    const heroImg = {
        name : "bank-tree",
        alt : "jeune pouce qui prend racine dasn des pices de monnaie"
    }

    const heroContent = {
        titles : [
            "No fees.",
            "No minimum deposit.",
            "High interest rates."
        ],
        text : "Open a savings account with Argent Bank today !"
    }

    const items = [
        {
            iconName : "icon-chat",
            title : "You are our #1 priority",
            text : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            iconName : "icon-money",
            title : "More savings means higher rates",
            text : "The more you save with us, the higher your interest rate will be !"
        },
        {
            iconName : "icon-security",
            title : "Security you can trust",
            text : "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]


    return (
        <main className='home-page'>
            <Hero
                imgName={heroImg.name}
                alt={heroImg.alt}
                titles={heroContent.titles}
                text={heroContent.text}
            />
            <div className='features'>
                {items && items.map((item, index) =>
                    <FeatureItem
                        key={index}
                        iconName={item.iconName}
                        title={item.title}
                        text={item.text} 
                    />
                )}
            </div>
        </main>
    )
}

export default HomePage
