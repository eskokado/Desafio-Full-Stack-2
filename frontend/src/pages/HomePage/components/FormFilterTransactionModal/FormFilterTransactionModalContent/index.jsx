import { GroupInput } from "../../../../../components/GroupInput";
import { StyledFormFilterTransactionModalContent } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GroupSelect } from "../../../../../components/GroupSelect";
import { Button } from "../../../../../styles/buttons";
import { useContext } from "react";
import { TransactionContext } from "../../../../../contexts/TransactionContext";

export const FormFilterTransactionModalContent = () => {
  const {
    loading,
    onListTransaction,
    setShowFilterTransactionModal,
  } = useContext(TransactionContext);

  const formSchema = yup.object().shape({
    cpf: yup.string(),
    description: yup.string(),
    dateFrom: yup.string(),
    dateTo: yup.string(),
    valueFrom: yup.string(),
    valueTo: yup.string(),
    status: yup.string(),
  });


  const defaultValues = {
    cpf: "",
    description: "",
    dateFrom: "",
    dateTo: "",
    valueFrom: "",
    valueTo: "",
    status: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmitFunction = (data) => {
    onListTransaction(data);
    setShowFilterTransactionModal(false);
  };

  const optionsStatus = [
    { value: "", text: "Seleciona um status" },
    { value: "Em avaliação", text: "Em avaliação" },
    { value: "Aprovado", text: "Aprovado" },
    { value: "Reprovado", text: "Reprovado" },
  ];

  return (
    <StyledFormFilterTransactionModalContent onSubmit={handleSubmit(onSubmitFunction)}>
      <GroupInput
        label="CPF"
        placeholder="Digite aqui o CPF"
        helperMessage={errors.cpf?.message && errors.cpf.message}
        field="cpf"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInput
        label="Descrição"
        placeholder="Digite aqui a descrição"
        helperMessage={errors.description?.message && errors.description.message}
        field="description"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInput
        label="Data a partir de"
        placeholder="Digite aqui a data inicial"
        helperMessage={errors.dateFrom?.message && errors.dateFrom.message}
        field="dateFrom"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInput
        label="Data até"
        placeholder="Digite aqui a data final"
        helperMessage={errors.dateTo?.message && errors.dateTo.message}
        field="dateTo"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInput
        label="Valor a partir de"
        placeholder="Digite aqui o valor inicial"
        helperMessage={errors.valueFrom?.message && errors.valueFrom.message}
        field="valueFrom"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInput
        label="Valor até"
        placeholder="Digite aqui o valor final"
        helperMessage={errors.valueTo?.message && errors.valueTo.message}
        field="valueTo"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupSelect
        label="Selecionar status"
        placeholder="Seleciona um status"
        helperMessage={errors.status?.message && errors.status.message}
        field="status"
        defaultValues={defaultValues}
        register={register}
        disabled={false}
        options={optionsStatus}
      ></GroupSelect>
      <Button
        type="submit"
        buttoncolor="primary50"
        buttonwidth="max"
        buttonstyle="default"
        disabled={loading}
      >
        {loading ? "Pesquisando..." : "Pesquisar Transações"}
      </Button>
    </StyledFormFilterTransactionModalContent>
  );
};