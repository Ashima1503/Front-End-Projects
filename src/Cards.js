import React from 'react'
import c5 from './Images/c5.jpg'
import c6 from './Images/c6.jpg'
import c3 from './Images/c3.jpg'
import './Cards.css';
export default function Cards() {
  return (
    <>
    <h1 align="center" className='p4'>Success Stories</h1>
    <div className="card-deck">
  <div className="card">
    <img src={c5} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ruchika & Himanshu</h5>
      <p className="card-text">We shared interest and accepted. I am maharastrian and my husband is Punjabi still we liked each other and got married. Thanks to ShubhVivaah.com because of which I got my life partner.
</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Ruchika & Himanshu. We wish you both a happy future."</small>
    </div>
  </div>
  <div className="card">
    <img src={c6} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Manya & Manujay</h5>
      <p className="card-text">We matched on Shaadi and met in person, we instantly clicked and liked each other. We arranged a meeting with our Parents after their approval and blessings we agreed to tie the knot.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Manya & Manujay We wish you both a happy future."</small>
    </div>
  </div>
  <div className="card">
    <img src={c3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Akanksha & Vikram</h5>
      <p className="card-text">We were recommended by a family friend and got matched on Shaadi.com. When we talked, and our vibes matched. We decided to meet and then after spending time together we finally decided to be together for a lifetime. I am thankful to Shaadi.com for helping me find the right one.
</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">"ShubhVivaah.com Team congratulates Akanksha & Vikram We wish you both a happy future."</small>
    </div>
  </div>
</div>
</>
    
  )
}
