import React from 'react'

function Hero ( { heroName } ) {
    console.log('SuperHero...!')
    if ( heroName === 'Joker' ) {
        throw new Error('Not a super Hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
