import {Box } from "@chakra-ui/react"
import {Routes, Route,} from "react-router-dom";
import  HomePage  from './Pages/Homepage';
import  CreatePage  from './Pages/Createpage';
import  Navbar  from './Components/Navbar';


function App() {

  return (
    <div>
    <Box minH={"100vh"}>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<HomePage/>} />
      <Route path ="/create" element={<CreatePage/>} />
    </Routes>
    </Box>
    </div>
  )
}

export default App
