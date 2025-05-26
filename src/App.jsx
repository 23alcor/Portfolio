import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"



function App() {
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App
