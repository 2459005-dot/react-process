import React, { useState } from 'react'

const Exam3 = () => {
    const [input, setInput] = useState('')
    const onChangeInput = (e) => {
        setInput(e.target.value)
    }
    const resetButton = () => {
        setInput('')
    }
    return (
        <div>
            <h2>연습문제 실습</h2>
            <input type="text" value={input} onChange={onChangeInput} />
            <p>내가 쓴 값 : {input}</p>
            <button onClick={resetButton}>reset</button>
        </div>
    )
}

export default Exam3