import { StyledCartTransactionModalContent } from "./styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react"
import { TransactionContext } from "../../../../../contexts/TransactionContext"
import { GroupInputMask } from '../../../../../components/GroupInputMask'
import { GroupInputCurrency } from '../../../../../components/GroupInputCurrency'

export const CartTransactionModalContent = () => {
  const {
    cartTransaction,
  } = useContext(TransactionContext);

  const formSchema = yup.object().shape({
    pointAproved: yup.string(),
    totalAproved: yup.string(),
  });

  const defaultValues = {
    pointAproved: cartTransaction?.pointAproved ?? "",
    totalAproved: cartTransaction?.totalAproved ?? "",
  };

  const {
    register,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <StyledCartTransactionModalContent>
      <GroupInputMask
        label="Total de Pontos"
        mask="999999999999"
        field="pointAproved"
        defaultValues={defaultValues}
        register={register}
        disabled={false}
      />
      <GroupInputCurrency
        label="Total Geral"
        field="totalAproved"
        defaultValues={defaultValues}
        register={register}
        disabled={false}
      />
    </StyledCartTransactionModalContent>
  );
};