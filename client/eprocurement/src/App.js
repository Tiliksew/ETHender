import styled from 'styled-components'
import SideBar from './components/supplier/Dashboard/SideBar.jsx'
import NavBar from './components/supplier/Dashboard/NavBar'
import Tenderlist from './components/supplier/Dashboard/TenderList.jsx'
import Table from './components/supplier/Dashboard/Table'
const App=()=>{
  return (
    // <Container>
    //     {/* <Sidebar/> */}
    //     {/* <Sidebar/> */}
    //     <MainContent/>
    // </Container>
    /*<Div>
      <Sidebar/>
      <Dashboard/>
    </Di>*/
    // <Sidebar/>
    <Div>
      <SideBar/>
      <Section>
      <NavBar />
      <div className="grid">
        <div className="row__one">
          <Table/>
        </div>
        <div className="row__two">
        </div>
      </div>
    </Section>
    </Div>
    
  )
}
const Div = styled.div`
  position: relative;
`;
const Container=styled.div`
display: flex;
height: 97vh;
background: linear-gradient(to bottom right,white 0% #e6e4ff 70%);
border-radus:2rem ;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      /* grid-template-columns: repeat(2, 1fr); */
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default App