import persistence from '../daos/persistence.js';
const { prodDao } = persistence

export const getAll = async (page, limit, name, sort) => {
  try {
    return await prodDao.getAll(page, limit, name, sort);
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
  try {
    const prod = await prodDao.getById(id);
    if (!prod) return false;
    else return prod;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (obj) => {
  try {
    const newProd = await prodDao.create(obj);
    if (!newProd) return false;
    else return newProd;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (id, obj) => {
  try {
    const prodUpd = await prodDao.update(id, obj);
    if (!prodUpd) return false;
    else return prodUpd;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    const prodDel = await prodDao.remove(id);
    if (!prodDel) return false;
    else return prodDel;
  } catch (error) {
    console.log(error);
  }
};