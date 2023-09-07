import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import MessageIA from '../components/messageIA'

function IA() {
    const [message, setMessage] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState([])

    const compter = () => {
        setIsActive(true)
        setMessage({a:"manger", b:"boire", c:"dormir"})
        }

    const lire = () => {
        setData([])
      
    }

    const survie = () => {
        setData([])
        setData(...data, )
        console.log(data);
    }

    const apprendre = () => {
        setData([])

        console.log(data);
    }

    const explication = () => {
        setData([])

        console.log(data);
    }

    useEffect(() =>{ 
    if (data.length) {
        setIsActive(true)
    }}, [data.length]
    )
    
  return (
    <div className="flex flex-col h-screen">
        <NavBar />
            <div className='flex items-center justify-center h-screen'>
                {!isActive ?
                    <div className='flex flex-wrap space-evenly rounded-lg h-[70vh] w-[70vw] bg-almostWhite mx-auto '>
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
                <div className='flex flex-wrap space-evenly rounded-lg h-[20vh] w-[20vw] bg-almostWhite mx-auto '>
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
                <MessageIA message={ message } setMessage={ setMessage } />}

            </div>
                
            
        <Footer/>
    </div>
  )
}          

export default IA;
