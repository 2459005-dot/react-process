import React, { useState } from 'react'

const Exam2 = () => {

    const [text, setText] = useState('hello')
    const changeText = () => {
        text === 'hello' ? setText('goodbye') : setText('hello')
    }
    return (
        <div>
            <h2>{text}</h2>
            <button onClick={changeText}>click</button>
        </div>
    )
}

export default Exam2