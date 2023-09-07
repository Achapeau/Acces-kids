import React, { useEffect, useState } from 'react'
import ButtonSpeakerGreen from './ButtonSpeakerGreen';

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
        }, 3000)
        setTimeout(() => {
            setStateTwo(true)
        }, 6000);
        setTimeout(() => {
            setStateThree(true)
        }, 9000)
    }, [messageOne])

  return (
    <div className='h-[70vh] w-[50vw] bg-yellow rounded-lg mx-auto text-greenDark items-center justify-center mx-20'>
        
        {stateOne && 
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
            "1"
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={"1"} />
        </div>}
        {stateTwo && 
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
            "2"
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={"2"} />
        </div>}
        {stateThree && 
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
            "3"
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <img src="../src/assets/images/baie.png" alt="baie" className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={"3"} />
        </div>}
        
    </div>
  )
}

export default messageIA;