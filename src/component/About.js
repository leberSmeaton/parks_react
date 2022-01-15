import React from 'react'


export default function About() {
  return (
    <>
      <section>
        <div className='about-container'>
          <img className='park-img' src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" />
          <div className='about-park'>
            <h2>About Picnic Vic</h2>
            <p>
              In a post Covid world we now know more than ever that we need to connect with our friends and family, outdoors in the real world. We need to utilise our green open spaces to enrich our lives.
              To meet calls and pressure that local councils and the State Government aren't providing enough green space, Parks Victoria are creating a new inner city park database. For small and large parks alike!
              The Picnic Victoria app provides detailed park amenity information to help facilitate a family picnic to a skate park hangout.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='partners-container'>
          <img className='cheese-wine-img' src={process.env.PUBLIC_URL + '/picnic_image2.jpg'} alt="melbourne google map" />
          <div className='about-partners'>
            <h2>Our Wine + Cheese Partners</h2>
            <p>
              <strong>A park is nothing without a picnic and nothing is better than a picnic in Vic!</strong>
              <br />
              <br />
              Want to reach peak picnic? 🍷 + 🧀 = 🧺
              The Picnic Victoria app have teamed up with Victorian Wine and Cheese producers to pair your local park with local picnic produce. The main focus of these partnerships is to promote (and support) local boutique producers and bring their products from all corners of Victoria (and beyond).
              <br />
              <br />
              <strong>It doesn't get much Gouda than that.</strong>
              <br />
              <br />
              Prepare to meet some of the finest producers in Australia, including but not limited to:
                <ul>
                  <li>Artisans Bend</li>
                  <li>That’s Amore Cheese</li>
                  <li>Frencheese</li>
                  <li>The Cheese Rebels</li>
                  <li>Dal Zotto Wines</li>
                  <li>Chirping Bird Winery</li>
                  <li>Rob Dolan Wines</li>
                  <li>The Prosecco Van</li>
                  <li>Newbridge Wines</li>
                  <li>Mount Avoca Winery</li>
                </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
