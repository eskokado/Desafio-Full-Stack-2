import { GroupInput } from "../../../../../components/GroupInput";
import { StyledFormTransactionModalContent } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GroupSelect } from "../../../../../components/GroupSelect";
import { Button } from "../../../../../styles/buttons";
import { useContext } from "react";
import { TransactionContext } from "../../../../../contexts/TransactionContext";

export const FormTransactionModalContent = () => {
  const {
    loading,
    onCreateTransaction,
    setShowTransactionModal,
    transaction,
    onUpdateTransaction,
    onRemoveTransaction,
  } = useContext(TransactionContext);

  const formSchema = transaction
    ? yup.object().shape({
        status: yup.string().required("Nível é obrigatório"),
      })
    : yup.object().shape({
        description: yup.string().required("Título é obrigatório"),
        status: yup.string().required("Nível é obrigatório"),
      });

  const defaultValues = {
    description: transaction?.description ?? "",
    status: transaction?.status ?? "",
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
    if (transaction) {
      delete data.description;
      onUpdateTransaction(data);
    } else {
      onCreateTransaction(data);
    }
    setShowTransactionModal(false);
  };

  const handleRemove = (id) => {
    onRemoveTransaction(id);
    setShowTransactionModal(false);
  };

  const optionsStatus = [
    { value: "", text: "Seleciona um status" },
    { value: "Em avaliação", text: "Em avaliação" },
    { value: "Aprovado", text: "Aprovado" },
    { value: "Reprovado", text: "Reprovado" },
  ];

  return (
    <StyledFormTransactionModalContent onSubmit={handleSubmit(onSubmitFunction)}>
      <GroupInput
        label="Descrição"
        placeholder="Digite aqui a descrição"
        helperMessage={errors.title?.message && errors.title.message}
        field="description"
        disabled={transaction ? true : false}
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
      {transaction ? (
        <div>
          <Button
            type="submit"
            buttoncolor="primary50"
            buttonstyle="default"
            disabled={loading}
          >
            {loading ? "Alterando..." : "Salvar alterações"}
          </Button>
          <Button
            type="button"
            buttoncolor="grey1"
            buttonstyle="default"
            disabled={loading}
            onClick={() => handleRemove(transaction.id)}
          >
            {loading ? "Excluindo..." : "Excluir"}
          </Button>
        </div>
      ) : (
        <Button
          type="submit"
          buttoncolor="primary50"
          buttonwidth="max"
          buttonstyle="default"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar Transação"}
        </Button>
      )}
    </StyledFormTransactionModalContent>
  );
};