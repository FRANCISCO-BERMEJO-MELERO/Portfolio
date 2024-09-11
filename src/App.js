import Navbar from "./Components/navbar";
import Sobremi from "./Components/sobremi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Proyectos from "./Components/proyectos";
import CardModal from "./Components/card-modal";


function App() {
  return (
    
    <div className=" h-screen bg-gray-900 text-white w-full " >
      <Navbar></Navbar>
      <div className="z-0 grid items-center mx-auto gap-3">
        <h1 className="text-center text-5xl">Hola mundo!👋</h1>
        <div className="flex w-3/4 items-center justify-between my-2 mx-auto gap-11">
          <img alt="una imagen" src="https://static8.depositphotos.com/1028979/1058/i/950/depositphotos_10580841-stock-photo-handsome-smiling-man-isolated-over.jpg" className=" w-1/3 rounded-full  border-4 border-red-700 ursor-pointer duration-200 transition-all filter grayscale hover:grayscale-0"/>
          <span className="w-2/4">
          <h1 class="mb-4 text-4xl leading-none text-slate-300 md:text-5xl lg:text-6xl ">Francisco Bermejo Melero</h1>
          <hr></hr>
          <p className="text-lg text-slate-500 my-2">Estudiante de Desarrollo de Aplicaciones Multiplataforma</p>
          <div className=' gap-3 flex '>
            <a className="hover:text-[#af9d00]" href="google.com"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
            <a className="hover:text-[#af9d00]" href="google.com"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          </div>
          </span>
        </div>
        <button className=" rounded-xl  bg-slate-300 cursor-pointer font-bold border-none w-30 mx-auto " >
          <a className="block rounded-xl bg-slate-900 box-border border-2 border-slate-300 py-3 px-6 text-white -translate-y-1 duration-100 hover:-translate-y-[0.33em] active:translate-y-0" download={'CV.pdf'} href='./download/Fotomatón Bergu.pdf'>CV</a>
        </button>
      </div>
      <Sobremi></Sobremi>
      <Proyectos></Proyectos>
      <CardModal></CardModal>

    </div>
  );
}

export default App;
