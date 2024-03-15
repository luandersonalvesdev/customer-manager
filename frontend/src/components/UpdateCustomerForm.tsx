import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import zCustomerSchema from '../validations/customerSchema';
import ICustomer, { ICustomerForm } from '../interfaces/ICustomer'
import ICustomerStatus from '../interfaces/ICustomerStatus'
import CustomerService from '../services/CustomerService';
import { useEffect } from 'react';

export default function UpdateCustomerForm(
  { customerStatuses, customer }:
  {customerStatuses: ICustomerStatus[], customer: ICustomer}
) {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ICustomerForm>({
    resolver: zodResolver(zCustomerSchema),
  });

  useEffect(() => {
    setValue('fullName', customer.fullName);
    setValue('email', customer.email);
    setValue('cpf', customer.cpf);
    setValue('phoneNumber', customer.phoneNumber);
    setValue('statusId', customer.statusId);
  }, [customer]);

  const handleInputChangeMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    e.target.value = numericValue;
  };

  const onSubmit = async (customerData: ICustomerForm) => {
    try {
      const service = new CustomerService();
      await service.updateCustomer({...customerData, id: customer.id});
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
          maxLength={11}
        />
        <span>{ errors.cpf?.message?.toString()}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder={(errors.phoneNumber?.message || "Telefone").toString()}
          {...register('phoneNumber')}
          onChange={handleInputChangeMask}
          maxLength={11}
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
        Atualizar
      </button>
      <Link to="/dashboard/list">Voltar</Link>
    </form>
  )
}