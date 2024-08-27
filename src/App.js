import Navbar from "./Components/navbar";
import Sobremi from "./Components/sobremi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    
    <div className=" h-screen bg-gray-900 text-white">
      <Navbar></Navbar>
      <div className="z-0 grid items-center mx-auto gap-3">
        <h1 className="text-center text-3xl">Hola mundo!👋</h1>
        <div className="flex w-3/4 items-center justify-between my-2 mx-auto gap-11">
          <img alt="una imagen" src="https://static8.depositphotos.com/1028979/1058/i/950/depositphotos_10580841-stock-photo-handsome-smiling-man-isolated-over.jpg" className=" w-1/3 rounded-full  border-4 border-red-700 ursor-pointer duration-200 transition-all filter grayscale hover:grayscale-0"/>
          <span className="w-2/4">
          <h1 class="mb-4 text-4xl leading-none text-slate-300 md:text-5xl lg:text-6xl ">Francisco Bermejo Melero</h1>
          <hr></hr>
          <p className="text-lg text-slate-500 mt-2">Estudiante de DAM</p>
          <div className=' gap-3 flex '>
            <a className="hover:text-[#af9d00]" href="google.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="hover:text-[#af9d00]" href="google.com"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          </span>
        </div>
      </div>
      <Sobremi></Sobremi>


    </div>
  );
}

export default App;
