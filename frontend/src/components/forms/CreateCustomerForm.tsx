import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import zCustomerSchema from '../../validations/customerSchema';
import { ICustomerForm } from '../../interfaces/ICustomer'
import ICustomerStatus from '../../interfaces/ICustomerStatus'
import CustomerService from '../../services/CustomerService';
import { removeSpecialCharacters } from '../../utils/formatters';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../animations/LoadingSpinner';
import handleInputChangeMask from '../../utils/handleInputChangeMask';

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

  const onSubmit = async (customerData: ICustomerForm) => {
    try {
      customerData.cpf = removeSpecialCharacters(customerData.cpf)
      customerData.phoneNumber = removeSpecialCharacters(customerData.phoneNumber)
      const service = new CustomerService();
      await service.createCustomer(customerData);
      reset();
      toast.success('Cliente criado com sucesso!');
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
          placeholder="Nome"
          {...register('fullName')}
        />
        {errors.fullName && <span className="input-error">{ errors.fullName?.message?.toString()}</span>}
      </section>
      <section>
        <input
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email && <span className="input-error">{ errors.email?.message?.toString()}</span>}
      </section>
      <section>
        <input
          type="text"
          placeholder="CPF"
          {...register('cpf')}
          onChange={(e) => handleInputChangeMask(e, setValue, clearErrors)}
          maxLength={14}
        />
        {errors.cpf && <span className="input-error">{ errors.cpf?.message?.toString()}</span>}
      </section>
      <section>
        <input
          type="text"
          placeholder="Telefone"
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
          <option value="" disabled selected hidden className='text-gray-400'>Status</option>
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
        {
          errors.root
            &&
              <span className="input-error">{ errors.root?.message?.toString()}</span>
        }
      </section>

      <section className="flex w-full gap-2">
        <button className="btn-form" disabled={isButtonDisabled || isSubmitting} >
          {isSubmitting ? <LoadingSpinner /> : 'Criar'}
        </button>
        <Link className="link-empty flex-1 md:px-0" to="/dashboard">
            Voltar
        </Link>
      </section>
    </form>
  )
}
