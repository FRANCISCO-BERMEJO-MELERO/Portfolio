import Navbar from "./Components/navbar";
import Sobremi from "./Components/sobremi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Proyectos from "./Components/proyectos";


function App() {
  return (
    
    <div className=" h-screen text-zinc-400 w-full  " >
      <Navbar></Navbar>
      <div className="z-0 grid items-center mx-auto max-w-4xl h-screen">
        <div className="flex  items-center justify-between mx-auto">
          <img alt="una imagen" src="https://static8.depositphotos.com/1028979/1058/i/950/depositphotos_10580841-stock-photo-handsome-smiling-man-isolated-over.jpg" className=" w-1/3 rounded-full  border-4 border-zinc-500 cursor-pointer "/>
          <span className="w-2/4">
          <h1 class="mb-4 text-4xl leading-none text-zinc-100 md:text-5xl lg:text-6xl ">Francisco Bermejo Melero</h1>
          <hr></hr>
          <p className="text-lg my-2">Estudiante de Desarrollo de Aplicaciones Multiplataforma </p>
          <div className=' gap-3 flex '>
            <a className="hover:text-zinc-50" href="google.com"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
            <a className="hover:text-zinc-50" href="google.com"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
          </div>
          </span>
        </div>
        <div className="w-30 mx-auto h-full">
            <button className=" rounded-xl  bg-slate-300 cursor-pointer font-bold border-none" >
              <a className="block rounded-xl bg-zinc-900 box-border border-2 border-zinc-300 py-3 px-6 text-white -translate-y-1 duration-100 hover:-translate-y-[0.33em] active:translate-y-0" download={'CV.pdf'} href='./download/Fotomatón Bergu.pdf'>Descargar CV</a>
            </button>
        </div>
        
      </div>
      <Sobremi></Sobremi>
      <Proyectos></Proyectos>

    </div>
  );
}

export default App;
