import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux" // Importa il Provider di Redux
import store from "./redux/store" // Importa lo store Redux

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Avvolgi l'applicazione con il Provider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
