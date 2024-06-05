import { useState } from "react";
import Temperatureinput from "./Temperatureinput";

export default function Calculator(props) {
    const [temperature, setTemperature] = useState()
    const [scale, setScale] = useState('C')

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('C')
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('F')
    }

    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'C' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
        <>
            <Temperatureinput 
                scale='C'
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <Temperatureinput 
                scale='F'
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />   
        </>
    )
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(Fahrenheit) {
    return (
        (Fahrenheit - 32) * 1.8
    )
}

function toFahrenheit(Celsius) {
    return (
        (Celsius * 1.8) + 32
    )
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return('')
    }
    const output = convert(input)
    const rounded = Math.round(output = 1000)/1000
    return(
        rounded.toString()
    )
}