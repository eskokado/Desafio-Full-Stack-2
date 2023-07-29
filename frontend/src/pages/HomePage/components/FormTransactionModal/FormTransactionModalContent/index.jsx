import { GroupInput } from "../../../../../components/GroupInput"
import { StyledFormTransactionModalContent } from "./styles"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { GroupSelect } from "../../../../../components/GroupSelect"
import { Button } from "../../../../../styles/buttons"
import { useContext } from "react"
import { TransactionContext } from "../../../../../contexts/TransactionContext"
import { GroupInputMask } from '../../../../../components/GroupInputMask'
import { GroupInputCurrency } from '../../../../../components/GroupInputCurrency'

export const FormTransactionModalContent = () => {
  const {
    loading,
    onCreateTransaction,
    setShowTransactionModal,
    transaction,
    onUpdateTransaction,
    onRemoveTransaction,
  } = useContext(TransactionContext);

  const formSchema = yup.object().shape({
    cpf: yup.string().required("CPF é obrigatório"),
    description: yup.string().required("Descrição é obrigatório"),
    point: yup.string().required("Pontos é obrigatório"),
    value: yup.string().required("Valor é obrigatório"),
    status: yup.string().required("Nível é obrigatório"),
  });

  const defaultValues = {
    cpf: transaction?.cpf ?? "",
    description: transaction?.description ?? "",
    point: transaction?.point ?? "",
    value: transaction?.value ?? "",
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
      onUpdateTransaction(data);
    } else {
      onCreateTransaction(data);
    }
    setShowTransactionModal(false);
  };

  const handleRemove = (id) => {
    if (window.confirm("Delete transaction?"))
    { 
      onRemoveTransaction(id);
    }
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
      <GroupInputMask
        label="CPF"
        placeholder="Digite aqui o CPF"
        mask="999.999.999-99"
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
      <GroupInputMask
        label="Pontos"
        placeholder="Digite aqui os pontos"
        mask="999999999999"
        helperMessage={errors.point?.message && errors.point.message}
        field="point"
        defaultValues={defaultValues}
        register={register}
      />
      <GroupInputCurrency
        label="Valor"
        placeholder="Digite aqui os valores"
        helperMessage={errors.value?.message && errors.value.message}
        field="value"
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