import * as bcrypt from 'bcrypt';

export const hashPass = async function (password: string) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const comparePass = async function (password: string, hash: string) {
  return await bcrypt.compare(password, hash);
};
