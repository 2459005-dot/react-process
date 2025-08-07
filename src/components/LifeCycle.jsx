import React, { use, useEffect, useState } from 'react'

const LifeCycle = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // console.log('마운트')

        return () => {
            console.log('언마운트')
        }
    }, [])

    useEffect(()=>{
        if(count>0){
            console.log(`count 업데이트 ${count}`)
        }
    },[count])

    return (
        <div>
            <p>클릭 수 : {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>클릭</button>
        </div>
    )
}

export default LifeCycle