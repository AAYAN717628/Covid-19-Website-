import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () => {

    const [data,setData] = useState([]);
    const getCovidData = async() => {
        try {
            const res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
           const main = await res.json()
           console.log(main.AS.total)
           setData(main.AS.total)
        } catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
getCovidData();
    } ,[] );
  return (
    <>
    <body className='mainbody'>
    <section>
<h1>LIVE</h1>
<h2>COVID-19 LIVE TRACKER</h2>
<h3>ASSAM - KAMRUP </h3>

<ul>
    <li className='card'>
<div className='card_org'>
<div className='card_inner'>
<p className='card_name'><span>Our</span> Country</p>
<p className='card_total card_small'>INDIA</p>
</div>
</div>
    </li>

    <li className='card'>
<div className='card_blue'>
<div className='card_inner'>
<p className='card_name'><span>Total</span> Confirmed</p>
<p className='card_total card_small'>{data.confirmed}</p>
</div>
</div>
    </li>

    <li className='card'>
<div className='card_yellow'>
<div className='card_inner'>
<p className='card_name'><span>Total</span> Recovered</p>
<p className='card_total card_small'>{data.recovered}</p>
</div>
</div>
    </li>

    <li className='card'>
<div className='card_cyan'>
<div className='card_inner'>
<p className='card_name'><span>Total</span> Test</p>
<p className='card_total card_small'>{data.tested}</p>
</div>
</div>
    </li>

    <li className='card'>
<div className='card_green'>
<div className='card_inner'>
<p className='card_name'><span>Total</span> Vaccinated</p>
<p className='card_total card_small'>{data.vaccinated1+data.vaccinated2}</p>
</div>
</div>
    </li>

    <li className='card'>
<div className='card_red'>
<div className='card_inner'>
<p className='card_name'><span>Total</span> Deceased</p>
<p className='card_total card_small'>{data.deceased}</p>
</div>
</div>
    </li>
</ul>
</section>
<footer>DEVELOPED BY AAYAN IN REACT.JS</footer>
</body>
    </>
  )
}

export default Covid