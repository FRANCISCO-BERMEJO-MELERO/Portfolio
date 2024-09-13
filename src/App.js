import Navbar from "./Components/navbar";
import './Styles/global.css';
import Inicio from "./Components/inicio";
  import Sobremi from "./Components/sobremi";
import Proyectos from "./Components/proyectos";
import Tecnologias from "./Components/tecnologias";
import Contacto from "./Components/contacto";
import Footer from "./Components/footer";




function App() {
  return (
    
    <div className=" h-screen text-zinc-400 w-full  " >
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Sobremi></Sobremi>
      <Proyectos></Proyectos>
      <Tecnologias></Tecnologias>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
