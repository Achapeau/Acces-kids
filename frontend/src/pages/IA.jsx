import { useEffect, useState } from 'react'
import axios from "axios";
import MessageIA from '../components/messageIA'

function IA() {
    const [chiffre, setChiffre] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState([])
    const [alphabet, setAlphabet] = useState({})
    const [data2, setData2] = useState([])
    const [educatif, setEducatif] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    
    useEffect(() => {
        axios.get(`${backendUrl}/iaalphabet`)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => console.error(err));

        axios.get(`${backendUrl}/iacompter`)
        .then((response) => {
            setData2(response.data);
        })
        .catch((err) => console.error(err));
        
    }, []);

    console.log(alphabet);
    
    const compter = () => {
        setIsActive(true)
        setAlphabet([])
        setChiffre(data2)
        
    }
    
    const lire = () => {
        setIsActive(true)
        setChiffre([])
        setAlphabet(data) 
    }

    const survie = () => {
        setData([])
        setData(...data, )
        console.log(data);
    }

    const apprendre = () => {
        setIsActive(true)
        setData([])
        setEducatif(true)

    }

    const explication = () => {
        setData([])

        console.log(data);
    }
    
  return (
    <div className="flex items-center space-between justify-center h-[88vh]">

            <div className='flex items-center space-between justify-center'>
                {!isActive ?
                    <div className='flex flex-wrap space-evenly rounded-lg h-[70vh] w-[70vw] bg-almostWhite mx-20 '>
                        <div className='m-auto rounded-lg h-[20vw] w-[20vw]'>
                            <button 
                                type='button'
                                onClick={compter}                            
                            >
                                <img src="../src/assets/images/compter-max.png" alt="compter" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[20vw] w-[20vw]'>
                            <button 
                                type='button'
                                onClick={lire}                            
                            >
                                <img src="../src/assets/images/alphabet-max.png" alt="alphabet" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[20vw] w-[20vw]'>
                            <button 
                                type='button'
                                onClick={survie}                            
                            >
                                <img src="../src/assets/images/jeu-survie-max.png" alt="survie" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[20vw] w-[20vw]'>
                            <button 
                                type='button'
                                onClick={apprendre}                            
                            >
                                <img src="../src/assets/images/jeux-educ-max.png" alt="apprendre" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[20vw] w-[20vw]'>
                            <button 
                                type='button'
                                onClick={explication}                            
                            >
                                <img src="../src/assets/images/survie-max.png" alt="explication" />
                            </button>
                        </div>                    
                    </div>
                :
                <div className='flex flex-wrap space-evenly rounded-lg h-[20vh] w-[20vw] bg-almostWhite mx-auto -b-15'>
                        <div className='m-auto rounded-lg h-[6vw] w-[6vw]'>
                            <button 
                                type='button'
                                onClick={compter}                            
                            >
                                <img src="../src/assets/images/compter-max.png" alt="compter" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[6vw] w-[6vw]'>
                            <button 
                                type='button'
                                onClick={lire}                            
                            >
                                <img src="../src/assets/images/alphabet-max.png" alt="alphabet" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[6vw] w-[6vw]'>
                            <button 
                                type='button'
                                onClick={survie}                            
                            >
                                <img src="../src/assets/images/jeu-survie-max.png" alt="survie" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[6vw] w-[6vw]'>
                            <button 
                                type='button'
                                onClick={apprendre}                            
                            >
                                <img src="../src/assets/images/jeux-educ-max.png" alt="apprendre" />
                            </button>
                        </div>
                        <div className='m-auto rounded-lg h-[6vw] w-[6vw]'>
                            <button 
                                type='button'
                                onClick={explication}                            
                            >
                                <img src="../src/assets/images/survie-max.png" alt="explication" />
                            </button>
                        </div>                    
                    </div>}
                {isActive && 
                <MessageIA chiffre={ chiffre } alphabet={ alphabet } educatif={ educatif } />}

            </div>
                
            
        {/* <Footer/> */}
    </div>
  )
}          

export default IA