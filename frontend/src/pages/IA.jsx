import { useEffect, useState } from 'react'
import MessageIA from '../components/messageIA'

function IA() {
    const [messageOne, setMessageOne] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState([])
    const [messageTwo, setMessageTwo] = useState([]);
    const [messageThree, setMessageThree] = useState([])

    const compter = () => {
        setIsActive(true)
        setMessageOne("Eat")
        setMessageTwo("Sleep")
        setMessageThree('Rave')
        }

    const lire = () => {
        setIsActive(true)
        setMessageOne("Repeat")
        setMessageTwo("Eat")
        setMessageThree('Sleep')
      
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
    <div className="flex items-center space-between justify-center h-[88vh]">
        {/* <NavBar /> */}
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
                <MessageIA messageOne={ messageOne } messageTwo={messageTwo} messageThree={messageThree} />}

            </div>
                
            
        {/* <Footer/> */}
    </div>
  )
}          

export default IA