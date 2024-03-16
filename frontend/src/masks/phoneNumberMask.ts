const phoneNumberMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

export default phoneNumberMask;
