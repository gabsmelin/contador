import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    color: #fff;  
    min-height: 100vh;
    padding: 100px;
    
    .t {
        font-size: 26px;
        font-weight: bold;
    }

    .c {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .vava {
        background-color: #cdcdcd;
        color: #000;
        width: 20px;
        height: 25px;
        margin: 0px 15px;
        text-align: center;
        padding: 2px;
    }

    .mais {
        font-size: 24px;
    }

     button {
        background-color: transparent;
        font-weight: 800;
        border: 3px solid #A107FF;
        border-radius: 10px;
        padding: 5px 8px;
        cursor: pointer;
        color: #fff;
    }
     button:hover {
        background-color: #A107FF;
        color: #fff;
    }

    .b2 {
        margin-top: 15px;
        margin-left: 10px;
    }

`;

export { Container }