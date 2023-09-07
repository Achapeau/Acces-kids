import axios from "axios"


const messageIA = ({ message, setMessage }) => {
  

  const sayYes = (req) => {  
      return req;
  }

  
  
  
  const respIA = () => {
          setTimeout(() => {
              console.log(message.a)
            }, 1000);
            setTimeout(() => {
              return message.b
            }, 3000);
            setTimeout(() => {
              return message.c
            }, 5000);
      }
      return (
        <div className="h-[70vh] w-[70vW}">
          <div className="text-almostWhite">{respIA()}</div>
        </div>
      )

}  


export default messageIA;