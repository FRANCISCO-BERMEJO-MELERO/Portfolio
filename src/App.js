import Navbar from "./Components/navbar";
import Sobremi from "./Components/sobremi";

function App() {
  return (
    <div className=" h-screen bg-gray-900 text-white">
      <Navbar></Navbar>
      <div className="z-0 justify-center grid items-center mx-auto gap-3">
        <h1 className="text-center text-5xl">Hola mundo!👋</h1>
        <div className="flex w-1/3 items-center my-0 mx-auto gap-2">
          {/* <img alt="una imagen" src="https://static8.depositphotos.com/1028979/1058/i/950/depositphotos_10580841-stock-photo-handsome-smiling-man-isolated-over.jpg" className="w-14"/> */}
        </div>
      </div>
      <Sobremi></Sobremi>
    </div>
  );
}

export default App;
