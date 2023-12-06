import { prisma } from "../database";

const getLivros = async () => {
  return await prisma.livro.findMany();
};

const createLivro = async (livro: LivroType) => {
  return await prisma.livro.create({ data: livro });
};

const updateLivro = async (id: number, livro: LivroType) => {
  return await prisma.livro.update({ where: { id }, data: livro });
};

const deleteLivro = async (id: number) => {
  return await prisma.livro.delete({ where: { id } });
};

export default { getLivros, createLivro, updateLivro, deleteLivro };