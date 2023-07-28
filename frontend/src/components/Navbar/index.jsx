import { Button, ButtonLink } from "../../styles/buttons";
import { Typography } from '../../styles/typography'
import { StyledNavbar } from "./styles";

export const Navbar = ({ labelButton, to, onClick }) => {
  return (

    <StyledNavbar>
      <Typography fonttype="title1" fontcolor="grey0">
        Desafio Teste Técnico Nex
      </Typography>
      {to && (
        <ButtonLink
          buttoncolor="grey"
          buttonstyle="small"
          fontSize="min"
          to={to}
        >
          {labelButton}
        </ButtonLink>
      )}
      {onClick && (
        <Button
          buttoncolor="grey"
          buttonstyle="small"
          fontSize="min"
          onClick={onClick}
        >
          {labelButton}
        </Button>
      )}
    </StyledNavbar>
  );
};