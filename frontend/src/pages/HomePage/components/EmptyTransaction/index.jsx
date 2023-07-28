import { Typography } from "../../../../styles/typography";
import { StyledEmptyTransaction } from "./styles";

export const EmptyTransaction = () => {
  return (
    <StyledEmptyTransaction>
      <Typography fonttype="title1" fontcolor="grey0" fontweight="body">
        Sem transação :(
      </Typography>
    </StyledEmptyTransaction>
  );
};