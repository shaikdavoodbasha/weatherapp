import React, { useState } from 'react'
import "./new.css"
function Weatherapp() {
    let [city, setcity] = useState('')
    let [wsdetials, setwsdetails] = useState()
    let getdata = (event) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
            .then((res) => res.json())
            .then((finalres) => {
                console.log(finalres)
                if (finalres.cod == "404") {
                    setwsdetails(undefined)
                }
                else {
                    setwsdetails(finalres)

                }

            })

        event.preventDefault();

        setcity('')

    }
    return (
        <div className='main'>
            <div className='one'>
                <h1>Simple weather app</h1>
                <form onSubmit={getdata}>
                    <input type='text' placeholder='cityname' value={city} onChange={(e) => setcity(e.target.value)} /><button>submit</button>
                </form>
                <div className='two'>
                    {
                        (wsdetials !== undefined) ?
                            <div>
                                <h3>{wsdetials.name} <span>{wsdetials.sys.country}</span></h3>
                                <h2>{wsdetials.main.temp}</h2>
                                <img src={`http://openweathermap.org/img/w/${wsdetials.weather[0].icon}.png`} />
                                <p>{wsdetials.weather[0].description}</p>
                            </div>

                            :
                            "No Data Found..."


                    }

                </div>
            </div>
        </div>
    )
}

export default Weatherapp