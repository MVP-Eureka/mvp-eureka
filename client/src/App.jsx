import Header from "./components/Header";
import Item from "./components/Item";
import Userstats from "./components/Userstats";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <> <Header /> <Home /> </> } />

      <Route path="/login" element={ <> <Login /> </> } />

      <Route path="/register" element={<> <Register/> </>} />

      <Route path="/editar" element={<> <Header/> <User/> </>} />

      

      <Route
        path="/inicial" element={
          <>
            <Header />
            <Userstats />

            <section className="bg-blue-500">
              <div className="p-4">
                <div className="flex items-center gap-4 max-w-7xl mx-auto">
                  <div className="flex-1 h-px bg-white/70"></div>

                  <span className="font-bold text-white">
                    Explorar
                  </span>

                  <div className="flex-1 h-px bg-white/70"></div>
                </div>
              </div>

              <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] p-8 max-w-7xl mx-auto">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </section>
          </>
        }
      />
    </Routes>  

  </BrowserRouter>
}

export default App
