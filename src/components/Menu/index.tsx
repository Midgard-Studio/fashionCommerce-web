import React from 'react';
import {
  StyledMenu,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuAnchor
} from './styled';

const Menu = () => {

  return(
    <StyledMenu>
      <StyledMenuList>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Lançamentos">
            Lançamentos
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Vestidos">
            Vestidos
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Macacões">
            Macacões
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Conjuntos">
            Conjuntos
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Calças">
            Calças
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Calças">
            Calças
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Coleções">
            Coleções
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="#" title="Promoções">
            Promoções
          </StyledMenuAnchor>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuAnchor href="/contato" title="Promoções">
            Contato
          </StyledMenuAnchor>
        </StyledMenuItem>
      </StyledMenuList>
    </StyledMenu>
  );
}

export default Menu;