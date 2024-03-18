import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import zCustomerSchema from '../../validations/customerSchema';
import ICustomer, { ICustomerForm } from '../../interfaces/ICustomer'
import ICustomerStatus from '../../interfaces/ICustomerStatus'
import CustomerService from '../../services/CustomerService';
import { useEffect } from 'react';
import { phoneNumberMask, cpfMask } from '../../masks/inputsMasks';
import { removeSpecialCharacters } from '../../utils/formatters';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../animations/LoadingSpinner';
import handleInputChangeMask from '../../utils/handleInputChangeMask';

export default function UpdateCustomerForm(
  { customerStatuses, customer }:
  {customerStatuses: ICustomerStatus[], customer: ICustomer}
) {
  const {
    register,
    handleSubmit,
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

  useEffect(() => {
    setValue('fullName', customer.fullName);
    setValue('email', customer.email);
    setValue('cpf', cpfMask(customer.cpf));
    setValue('phoneNumber',phoneNumberMask(customer.phoneNumber));
    setValue('statusId', customer.status.id);
  }, []);

  const onSubmit = async (customerData: ICustomerForm) => {
    try {
      customerData.cpf = removeSpecialCharacters(customerData.cpf)
      customerData.phoneNumber = removeSpecialCharacters(customerData.phoneNumber)
      const service = new CustomerService();
      await service.updateCustomer({...customerData, id: customer.id});
      toast.success('Cliente atualizado com sucesso!');
    } catch (err: any) {
      setError('root', { type: 'custom', message: err.response.data.message });
    }
  };

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="divide-y-[15px] divide-transparent max-w-60 flex flex-col">
      <section>
        <input
          type="text"
          placeholder={(errors.fullName?.message || "Nome").toString()}
          {...register('fullName')}
        />
        {errors.fullName && <span className="input-error">{ errors.fullName?.message?.toString()}</span>}
      </section>
      <section>
        <input
          type="text"
          placeholder={(errors.email?.message || "E-mail").toString()}
          {...register('email')}
        />
        {errors.email && <span className="input-error">{ errors.email?.message?.toString()}</span>}
      </section>
      <section>
        <input
          type="text"
          placeholder={(errors.cpf?.message || "CPF").toString()}
          {...register('cpf')}
          onChange={(e) => handleInputChangeMask(e, setValue, clearErrors)}
          maxLength={14}
        />
        {errors.cpf && <span className="input-error">{ errors.cpf?.message?.toString()}</span>}

      </section>
      <section>
        <input
          type="text"
          placeholder={(errors.phoneNumber?.message || "Telefone").toString()}
          {...register('phoneNumber')}
          onChange={(e) => handleInputChangeMask(e, setValue, clearErrors)}
          maxLength={14}
        />
        {errors.phoneNumber && <span className="input-error">{ errors.phoneNumber?.message?.toString()}</span>}

      </section>
      <section>
        <select
          {...register('statusId', {
            setValueAs: (value) => Number(value),
          })}
        >
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
        {errors.statusId && <span className="input-error">{ errors.statusId?.message?.toString()}</span>}
      </section>

      <section>
        {errors.root && <span className="input-error">{ errors.root?.message?.toString()}</span>}
      </section>

      <section className="flex w-full gap-2">
        <button
          className="btn-form"
          disabled={isButtonDisabled || isSubmitting}
        >
          {isSubmitting ? <LoadingSpinner /> : 'Atualizar'}
        </button>
        <Link className='link-empty flex-1 md:px-0' to="/dashboard">Voltar</Link>
      </section>
    </form>
  )
}
