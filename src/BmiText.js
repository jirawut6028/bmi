const BmiText = ({bmi}) => {
    if(bmi < 18.5)
        return <h2>underweight</h2>
    if(bmi <= 24.9)
        return <h2>normal</h2>
    if(bmi <= 29.9)
        return <h2>overweight</h2>
    return <h2>obesity</h2>
}

export default BmiText