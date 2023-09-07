import React, { useEffect, useState } from 'react'

function messageIA({ messageOne, messageTwo, messageThree }) {
    const [stateOne, setStateOne] = useState(false);
    const [stateTwo, setStateTwo] = useState(false);
    const [stateThree, setStateThree] = useState(false);

    useEffect(() => {
        setStateOne(false)
        setStateTwo(false)
        setStateThree(false)
        setTimeout(() => {
            setStateOne(true);
        })
        setTimeout(() => {
            setStateTwo(true)
        }, 4000);
        setTimeout(() => {
            setStateThree(true)
        }, 6000)
    }, [stateOne, stateTwo, stateThree])
  return (
    <div className='h-[70vh] w-[70vw] bg-yellow rounded-lg mx-auto text-greenDark items-center justify-center'>
        
        {stateOne && <div className='h-[20vh] w-[70vw] bg-pink text-3xl'>{messageOne}</div>}
        {stateTwo && <div className='h-[20vh] w-[70vw] bg-pink text-3xl'>{messageTwo}</div>}
        {stateThree && <div className='h-[20vh] w-[70vw] bg-pink text-3xl'>{messageThree}</div>}
        
    </div>
  )
}

export default messageIA