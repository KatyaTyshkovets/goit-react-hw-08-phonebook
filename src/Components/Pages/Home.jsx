import styled from "@emotion/styled";

const TitleText = styled.h1`
font-size: 70px;
margin: 25px;
  padding:25px;
 text-align: center;
 color:#fff;
  font-family: emoji;
`;

    
const Home = () =>{
    return (
        <div>
            <TitleText>Вітаємо!!!! 
         це телефонна книга, ваш найкращий друг
Ідеальний додаток для додавання контактів
         </TitleText>
         </div>
    )
}
export default Home;