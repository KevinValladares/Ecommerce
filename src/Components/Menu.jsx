import React, { useState, useContext } from "react";
import {
    NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
    NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo,
    OpenLinksButton, NavbarLinkExtended, NombreUsuario, NombreUsuarioExtender
} from "./Menustyle";



const Menu = () => {

   
    const [extendNavbar, setExtendNavbar] = useState(false);


    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>

                <LeftContainer>
                  hola
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Inicio</NavbarLink>
                       
                    </NavbarLinkContainer>
                </RightContainer>
               

            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>



                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
export default Menu