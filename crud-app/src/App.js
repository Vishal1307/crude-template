import logo from './logo.svg';
import './App.css';
import {Container} from "@chakra-ui/react"
import { AllROute } from './page/AllRoutes';


function App() {
  return (
    <Container minWidth={"6xl"}>
      <AllROute/>

    </Container>
  );
}

export default App;
