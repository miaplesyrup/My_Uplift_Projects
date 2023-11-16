import styled from 'styled-components';

function WelcomeWords() {
  return (
    <div>
        <Words>
            <h3>browse.plan.cook.eat.repeat</h3>
        </Words>
    </div>
  )
};

const Words = styled.div`
    color: antiquewhite;
    display: flex;
    flex-wrap: nowrap; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    margin-bottom: 3rem;

    h3 {
      font-family: tahoma;
      color:  #263f40;
    }
`;

export default WelcomeWords;