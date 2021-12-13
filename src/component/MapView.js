import React from 'react'

export default function MapView() {
  const category = [ "all", "community", "child friendly", "dog park", "large park", "nature", "skatepark", "sports"]
  return (
    <div>
      <div>
        {category.map(cat => cat)}
      </div>
      <img src={process.env.PUBLIC_URL + '/large_melbourne.png'} alt="melbourne google map" style={{ width: '100%' }} />
    </div>
  )
}
