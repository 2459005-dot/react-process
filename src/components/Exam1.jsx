import React from 'react'
import './Exam1.css'

function Exam1({ name, age }) {
    return (
        <div>
            <p>
                나의 이름은
                <span className='name'>
                    {name}
                </span>
                이고 나이는
                <span className='age'>
                    {age}
                </span>
                살이야.
            </p>
        </div>
    )
}

export default Exam1