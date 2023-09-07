import ButtonIA from "../components/Button_ia";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ButtonIA />
      <div className="flex justify-evenly items-center h-screen">
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] text-greenDark m-[1rem] text-center"> Apprendre à lire et à compter </h2>
        <button className="w-[20rem] h-[20rem] m-[1rem] rounded-full border-solid border-almostWhite border-[1rem] bg-yellow">

        </button>
        </div>
        
        <div className="flex justify-center items-center flex-col">
        <h2 className="font-title text-[2rem] text-greenDark m-[1rem] text-center" > Apprendre à survivre </h2>
        <button className="w-[20rem] h-[20rem] m-[1rem] rounded-full border-solid border-almostWhite border-[1rem] bg-pink">

        </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
