

import React from 'react'


import { 
  HeaderContainer, 
  Div1, 
  Div2, 
  LogoText, 
  SearchContainer, 
  SearchInput, 
  Text,
  HeaderItem
    } from "./styles";

    import { RiSearchLine as SearchIcon } from "react-icons/ri";



const Header = () => {
  return (
       <HeaderContainer>
            <HeaderItem>

                <Div1>
                      <LogoText>Sokoto</LogoText>
                </Div1>

              <Div2>
                <Text>Explore deep inside!</Text>
                <SearchContainer>
                      <SearchInput />
                      <SearchIcon />
                </SearchContainer>
              </Div2>
      
            </HeaderItem>
      </HeaderContainer>
  )
}

export default Header
