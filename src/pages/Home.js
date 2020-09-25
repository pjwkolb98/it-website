import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .main {
    padding: '20px';
    height: '600px';
    width: '100%';
    border: '3px';
  }
`;

function Home() {
  return (
    <Styles>
      <div className='main'>Home</div>
    </Styles>
  );
}

export default Home;
