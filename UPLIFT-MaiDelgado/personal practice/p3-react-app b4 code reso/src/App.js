import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components"; 
import {Link} from "react-router-dom";
import {GiChefToque} from 'react-icons/gi'
import WelcomeWords from './components/WelcomeWords';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Logo to={"/"}>
            <GiChefToque />
            gastronomix
          </Logo>
        </Header>
        <WelcomeWords />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: georgia;
  color: bisque;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color:  #263f40;
  }
`;

const Header = styled.div`
  padding: 3rem 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 8rem;
  }
`;


export default App;
