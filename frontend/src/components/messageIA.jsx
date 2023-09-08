import React, { useEffect, useState } from 'react'
import ButtonSpeakerGreen from './ButtonSpeakerGreen';

function messageIA({ chiffre , alphabet, educatif }) {
    const [stateOne, setStateOne] = useState(false);
    const [stateTwo, setStateTwo] = useState(false);
    const [stateThree, setStateThree] = useState(false);
    const url = "../src/assets/images/"
    
    const [urlImageOne, setUrlImageOne] = useState('')
    const [urlImageTwo, setUrlImageTwo] = useState('')
    const [urlImageThree, setUrlImageThree] = useState('')

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    const [educ1, setEduc1] = useState('')
    const [educ2, setEduc2] = useState('')
    const [educ3, setEduc3] = useState('')
    const [verifLetter, setVerifLetter] = useState(false)

    useEffect(() => {
        setStateOne(false)
        setStateTwo(false)
        setStateThree(false)
        if (alphabet.length) {
            setVerifLetter(true)
            setTimeout(() => {
                setStateOne(true);
                setUrlImageOne(alphabet[0].image_animal)
                setValue1(`${alphabet[0].corresponding_letter}, comme ${alphabet[0].name}`)
            }, 3000)
            setTimeout(() => {
                setStateTwo(true)
                setUrlImageTwo(alphabet[1].image_animal)
                setValue2(`${alphabet[1].corresponding_letter}, comme ${alphabet[1].name}`)
            }, 6000);
            setTimeout(() => {
                setStateThree(true)
                setUrlImageThree(alphabet[2].image_animal)
                setValue3(`${alphabet[2].corresponding_letter}, comme ${alphabet[2].name}`)
            }, 9000)
        } else if (chiffre.length) {
            setVerifLetter(false)
            setTimeout(() => {
                setStateOne(true);
                setUrlImageOne(chiffre[0].image_animal)
                setValue1(1)
            }, 3000)
            setTimeout(() => {
                setStateTwo(true)
                setUrlImageTwo(chiffre[0].image_animal)
                setValue2(2)
            }, 6000);
            setTimeout(() => {
                setStateThree(true)
                setUrlImageThree(chiffre[0].image_animal)
                setValue3(3)
            }, 9000)

        } else if (educatif) {
            setVerifLetter(false)
            setTimeout(() => {
                setStateOne(true)
                setUrlImageOne('lecture.png')
                setValue1('Sur cette page, tu peux choisir des jeux éducatifs')
            }, 3000)
            setTimeout(() => {
                setStateTwo(true)   
                setUrlImageTwo('jeuxabc.png')
                setValue2("Apprends l'alphabet en t'amusant!")
            }, 6000);
            setTimeout(() => {
                setStateThree(true)
                setUrlImageThree('jeux123.png')
                setValue3("Ou apprends à compter en t'amusant!")
            }, 9000)
        }

    }, [alphabet, chiffre, educatif])

    




  return (
    <div className='h-[70vh] w-[50vw] bg-yellow rounded-lg mx-auto text-greenDark items-center justify-center mx-20'>
        
        {stateOne && 
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
           
            <img src={`${url}${urlImageOne}`} alt={`${value1}`} className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={`${value1}`} />
        </div>}
        {stateTwo && !educatif && !verifLetter &&
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
            
            <img src={`${url}${urlImageOne}`} alt={`${value1}`} className='h-[12vh] w-[12vh]' />
            <img src={`${url}${urlImageTwo}`} alt={`${value2}`} className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={`${value2}`} />
        </div>}
        {stateTwo && (educatif || verifLetter) &&
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
           
            <img src={`${url}${urlImageTwo}`} alt={`${value2}`} className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={`${value2}`} />
        </div>}
        {stateThree && !educatif && !verifLetter &&
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
           
            <img src={`${url}${urlImageOne}`} alt={`${value1}`} className='h-[12vh] w-[12vh]' />
            <img src={`${url}${urlImageTwo}`} alt={`${value2}`} className='h-[12vh] w-[12vh]' />
            <img src={`${url}${urlImageThree}`} alt={`${value3}`} className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={`${value3}`} />
        </div>}
        {stateThree  && (educatif || verifLetter) &&
        <div className='flex items-center justify-center h-[20vh] w-[50vw] text-3xl'>
            
            <img src={`${url}${urlImageThree}`} alt={`${value3}`} className='h-[12vh] w-[12vh]' />
            <ButtonSpeakerGreen text={`${value3}`} />
        </div>}

        
    </div>
  )
}

export default messageIA;