export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
}

export const formatCPF = (cpf: string) => {
  const cleaned = ('' + cpf).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }

  return cpf;
}
