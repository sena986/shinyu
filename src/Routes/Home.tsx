import styled from "styled-components";
import back from "../leather1.jpg";

const Main = styled.div`
  height: 100vh;
  padding: 3%;
  padding-top: 120px;
`;

const Background = styled.div`
  height: 85vh;
  background-image: url(${back});
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`;

function Home() {
  return (
    <Main>
      <Background></Background>
    </Main>
  );
}

export default Home;
