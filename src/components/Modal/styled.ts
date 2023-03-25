import styled from "styled-components"; 


export const ModalStyle = styled.div`
    width: 100%;
    height: 100vh; 
    position: fixed;
    display: flex;
    align-items: center; 
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
      

    
    .modal {
        background-color: #fff; 
        position: relative;
        padding: 3rem; 
        z-index: 2;
        width: 90%;
        border-radius: 0.3rem;
        max-width: 500px;
        color: black; 

        p{
            margin: 0.4rem 0;
        }
    }
`;

