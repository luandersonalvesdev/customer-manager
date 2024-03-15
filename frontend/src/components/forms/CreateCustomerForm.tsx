import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import zCustomerSchema from '../../validations/customerSchema';
import { ICustomerForm } from '../../interfaces/ICustomer'
import ICustomerStatus from '../../interfaces/ICustomerStatus'
import CustomerService from '../../services/CustomerService';
import cpfMask from '../../masks/cpfMask';
import phoneNumberMask from '../../masks/phoneNumberMask';
import { removeSpecialCharacters } from '../../utils/formatters';

export default function CreateCustomerForm({ customerStatuses }: {customerStatuses: ICustomerStatus[]}) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    clearErrors,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ICustomerForm>({
    resolver: zodResolver(zCustomerSchema),
  });

  const handleInputChangeMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const maskedValue = name === 'cpf' ? cpfMask(value) : phoneNumberMask(value);
    setValue(name as 'cpf' | 'phoneNumber', maskedValue);
    if(maskedValue.length === 14) {
      clearErrors(name as 'cpf' | 'phoneNumber');
    }
  };

  const onSubmit = async (customerData: ICustomerForm) => {
    try {
      customerData.cpf = removeSpecialCharacters(customerData.cpf)
      customerData.phoneNumber = removeSpecialCharacters(customerData.phoneNumber)
      const service = new CustomerService();
      await service.createCustomer(customerData);
      reset();
    } catch (err: any) {
      setError('root', { type: 'custom', message: err.response.data.message });
    }
  };

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <input
          type="text"
          placeholder={(errors.fullName?.message || "Nome").toString()}
          {...register('fullName')}
        />
        <span>{ errors.fullName?.message?.toString()}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder={(errors.email?.message || "E-mail").toString()}
          {...register('email')}
        />
        <span>{ errors.email?.message?.toString()}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder={(errors.cpf?.message || "CPF").toString()}
          {...register('cpf')}
          onChange={handleInputChangeMask}
          maxLength={14}
        />
        <span>{ errors.cpf?.message?.toString()}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder={(errors.phoneNumber?.message || "Telefone").toString()}
          {...register('phoneNumber')}
          onChange={handleInputChangeMask}
          maxLength={14}
        />
        <span>{ errors.phoneNumber?.message?.toString()}</span>
      </div>
      <div>
        <select
          {...register('statusId', {
            setValueAs: (value) => Number(value),
          })}
        >
          <option value="">Status</option>
          {
            customerStatuses.map((customerStatus) => (
              <option
                key={customerStatus.id}
                value={customerStatus.id}
              >
                {customerStatus.name}
              </option>
            ))
          }
        </select>
        <span>{ errors.statusId?.message?.toString()}</span>
      </div>

      <p>{ errors.root?.message?.toString()}</p>

      <button
        disabled={isButtonDisabled || isSubmitting}
      >
        Criar
      </button>
      <Link to="/dashboard/list">Voltar</Link>
    </form>
  )
}
