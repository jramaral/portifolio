import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  /* height: 95vh; */

  margin: 0 auto;
  /* border: 1px solid #ccc; */
`;

export const ContainerHead = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  /* height: 200px; */
`;
export const ItemHeaderImg = styled.div`
  /* width: 100%; */

  margin: 5px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: rgba(114, 149, 138, 0.3);
  display: flex;
  border-radius: 3px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 60%;
  }
`;
export const ItemHeaderName = styled.div`
  width: 100%;
  margin: 5px;
  justify-content: center;
  padding: 5px;
  align-content: center;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  color: white;
  /* background: rgba(114, 149, 138, 0.3); */
  border-radius: 3px;

  #nome {
    margin: 0;
    padding: 10px;
  }
  #funcao {
    margin: 0;
    padding: 10px;
  }
`;
export const ContainerBody = styled.div`
  margin-top: 5px;
  padding-top: 10px;
  border-top: 2px solid #65737f;
  border-radius: 3px 3px 0 0;
  width: 100%;
  height: 200px;
  color: white;

  display: flex;

  #perfil {
    margin-top: 0px;
    line-height: 30px;
    text-align: justify;
  }
`;
export const Item = styled.div`
  margin: 5px;
  width: 180px;
  height: 200px;
  backdrop-filter: blur(4px);
  background: rgba(114, 149, 138, 0.3);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  h4 {
    margin-bottom: 0;
  }
`;
// export const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

export const StyledPerson = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  & .Pedro {
    color: red;
  }
  & .Guilherme {
    color: blue;
  }
  & .Jeferson {
    color: green;
  }

  margin: 0 auto;
  list-style-type: none;
`;
export const StyledPersonList = styled.li`
  /* color: blue; */
`;
