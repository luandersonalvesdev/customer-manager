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
import { toast } from 'react-toastify';
import LoadingSpinner from '../../animations/LoadingSpinner';

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
      toast.success('Cliente criado com sucesso!');
    } catch (err: any) {
      setError('root', { type: 'custom', message: err.response.data.message });
    }
  };

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="divide-y-[15px] divide-transparent max-w-60 flex flex-col">
      <div>
        <input
          type="text"
          placeholder="Nome"
          {...register('fullName')}
        />
        {errors.fullName && <span className="input-error">{ errors.fullName?.message?.toString()}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email && <span className="input-error">{ errors.email?.message?.toString()}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="CPF"
          {...register('cpf')}
          onChange={handleInputChangeMask}
          maxLength={14}
        />
        {errors.cpf && <span className="input-error">{ errors.cpf?.message?.toString()}</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Telefone"
          {...register('phoneNumber')}
          onChange={handleInputChangeMask}
          maxLength={14}
        />
        {errors.phoneNumber && <span className="input-error">{ errors.phoneNumber?.message?.toString()}</span>}
      </div>
      <div>
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
      </div>

      <div>
        {
          errors.root
            &&
              <span className="input-error">{ errors.root?.message?.toString()}</span>
        }
      </div>

      <div className="flex w-full gap-2">
        <button
          className="btn-form"
          disabled={isButtonDisabled || isSubmitting}
        >
          {isSubmitting ? <LoadingSpinner /> : 'Criar'}
        </button>
        <Link
          className="link-empty flex-1 md:px-0"
          to="/dashboard"
          >
            Voltar
          </Link>
      </div>
    </form>
  )
}
