import { useRef, useState } from 'react'
import BmiText from './BmiText'

const Bmi = () => {
    const w_input = useRef(null)
    const h_input = useRef(null)
    const [bmi, setBmi] = useState(0)
    const calBmi = () => {
        let w = w_input.current.value
        let h = h_input.current.value / 100
        setBmi(w / Math.pow(h, 2))
    }
    return (
        <>
            <h3>BMI Calculator</h3>
            Weight: <input type='text' ref={w_input} /> kg. <br />
            Height: <input type='text' ref={h_input} /> cm. <br />
            <button onClick={() => { calBmi() }}>Calculate</button><br />
            Bmi: {bmi.toFixed(2)}
            {bmi > 0 && <BmiText bmi={bmi} />}
        </>
    )
}

export default Bmi