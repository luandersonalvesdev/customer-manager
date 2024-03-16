import { phoneNumberMask, cpfMask } from "../masks/inputsMasks";

const handleInputChangeMask = (event: React.ChangeEvent<HTMLInputElement>, setValue: any, clearErrors: any) => {
  const { name, value } = event.target;
  const maskedValue = name === 'cpf' ? cpfMask(value) : phoneNumberMask(value);
  setValue(name as 'cpf' | 'phoneNumber', maskedValue);
  if(maskedValue.length === 14) {
    clearErrors(name as 'cpf' | 'phoneNumber');
  }
};

export default handleInputChangeMask;
