import React, { useEffect, useState } from "react"
import ButtonSpeakerGreen from "./ButtonSpeakerGreen"
import IAS from "./IAS"

function messageIA({
  chiffre,
  setChiffre,
  alphabet,
  setAlphabet,
  educatif,
  setEducatif,
  IASurvie,
}) {
  const [stateOne, setStateOne] = useState(false)
  const [stateTwo, setStateTwo] = useState(false)
  const [stateThree, setStateThree] = useState(false)
  const url = "../src/assets/images/"

  const [urlImageOne, setUrlImageOne] = useState("")
  const [urlImageTwo, setUrlImageTwo] = useState("")
  const [urlImageThree, setUrlImageThree] = useState("")

  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  const [verifLetter, setVerifLetter] = useState(false)

  useEffect(() => {
    setStateOne(false)
    setStateTwo(false)
    setStateThree(false)
    if (alphabet.length) {
      setVerifLetter(true)
      setTimeout(() => {
        setStateOne(true)
        setUrlImageOne(alphabet[0].image_animal)
        setValue1(
          `${alphabet[0].corresponding_letter}, comme ${alphabet[0].name}`
        )
      }, 1000)
      setTimeout(() => {
        setStateTwo(true)
        setUrlImageTwo(alphabet[1].image_animal)
        setValue2(
          `${alphabet[1].corresponding_letter}, comme ${alphabet[1].name}`
        )
      }, 4000)
      setTimeout(() => {
        setStateThree(true)
        setUrlImageThree(alphabet[2].image_animal)
        setValue3(
          `${alphabet[2].corresponding_letter}, comme ${alphabet[2].name}`
        )
      }, 7000)
      setAlphabet([])
    } else if (chiffre.length) {
      setVerifLetter(false)
      setTimeout(() => {
        setStateOne(true)
        setUrlImageOne(chiffre[0].image_animal)
        setValue1(1)
      }, 1000)
      setTimeout(() => {
        setStateTwo(true)
        setUrlImageTwo(chiffre[0].image_animal)
        setValue2(2)
      }, 4000)
      setTimeout(() => {
        setStateThree(true)
        setUrlImageThree(chiffre[0].image_animal)
        setValue3(3)
      }, 7000)
      setChiffre([])
    } else if (educatif) {
      setVerifLetter(false)
      setTimeout(() => {
        setStateOne(true)
        setUrlImageOne("lecture.png")
        setValue1("Sur cette page, tu peux choisir des jeux éducatifs")
      }, 1000)
      setTimeout(() => {
        setStateTwo(true)
        setUrlImageTwo("jeuxabc.png")
        setValue2("Apprends l'alphabet en t'amusant!")
      }, 4000)
      setTimeout(() => {
        setStateThree(true)
        setUrlImageThree("jeux123.png")
        setValue3("Ou apprends à compter en t'amusant!")
      }, 7000)
      setEducatif(false)
    }
  }, [alphabet, chiffre, educatif])

  return (
    <div className='h-[70vh] w-[50vw] bg-yellow rounded-xl mx-auto text-greenDark items-center justify-center absolute -top-[10vh] right-[4vw]'>
      {IASurvie && <IAS />}
      {stateOne && (
        <div className='flex items-center justify-center h-[23vh] w-[50vw] text-3xl absolute'>
          <img
            src={`${url}${urlImageOne}`}
            alt={`${value1}`}
            className='absolute left-[5vh] top-[5vw] h-[12vh] w-[12vh]'
          />
          <div className='absolute right-[5vw]'>
            <ButtonSpeakerGreen text={`${value1}`} />
          </div>
        </div>
      )}
      {stateTwo && !educatif && !verifLetter && (
        <div className='flex items-center justify-center h-[23vh] w-[50vw] text-3xl'>
          <img
            src={`${url}${urlImageOne}`}
            alt={`${value1}`}
            className='absolute left-[5vw] top-[28vh] h-[12vh] w-[12vh]'
          />
          <img
            src={`${url}${urlImageTwo}`}
            alt={`${value2}`}
            className='absolute left-[15vw] top-[28vh] h-[12vh] w-[12vh]'
          />
          <div className='absolute right-[5vw] top-[32vh]'>
            <ButtonSpeakerGreen text={`${value2}`} />
          </div>
        </div>
      )}
      {stateTwo && (educatif || verifLetter) && (
        <div className='flex items-center justify-center h-[23vh] w-[50vw] text-3xl'>
          <img
            src={`${url}${urlImageTwo}`}
            alt={`${value2}`}
            className='absolute left-[5vw] top-[28vh] h-[12vh] w-[12vh]'
          />
          <div className='absolute right-[5vw] top-[32vh]'>
            <ButtonSpeakerGreen text={`${value2}`} />
          </div>
        </div>
      )}
      {stateThree && !educatif && !verifLetter && (
        <div className='flex items-center justify-center h-[23vh] w-[50vw] text-3xl'>
          <img
            src={`${url}${urlImageOne}`}
            alt={`${value1}`}
            className='absolute left-[5vw] bottom-[5vh] h-[12vh] w-[12vh]'
          />
          <img
            src={`${url}${urlImageTwo}`}
            alt={`${value2}`}
            className='absolute left-[15vw] bottom-[5vh] h-[12vh] w-[12vh]'
          />
          <img
            src={`${url}${urlImageThree}`}
            alt={`${value3}`}
            className='absolute left-[25vw] bottom-[5vh] h-[12vh] w-[12vh]'
          />
          <div className='absolute right-[5vw] bottom-[8vh]'>
            <ButtonSpeakerGreen text={`${value3}`} />
          </div>
        </div>
      )}
      {stateThree && (educatif || verifLetter) && (
        <div className='flex items-center justify-center h-[23vh] w-[50vw] text-3xl'>
          <img
            src={`${url}${urlImageThree}`}
            alt={`${value3}`}
            className='absolute left-[5vw] bottom-[5vh] h-[12vh] w-[12vh]'
          />
          <div className='absolute right-[5vw] bottom-[8vh]'>
            <ButtonSpeakerGreen text={`${value3}`} />
          </div>
        </div>
      )}
    </div>
  )
}

export default messageIA
