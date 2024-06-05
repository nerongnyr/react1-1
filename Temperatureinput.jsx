const scaleName = {
    C: '섭씨',
    F: '화씨'
}

export default function Temperatureinput (props) {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value)
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleName[props.scaleName]})</legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}
