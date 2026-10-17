import { Category } from "../models/category.model";

/**
 * Contrato del repositorio de categorías.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de categorías.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO sabe de bases de datos, APIs o frameworks
 *
 * Cualquier fuente de datos (API, base de datos, mocks en memoria, etc.)
 * puede ser utilizada siempre que implemente este contrato.
 *
 * @see {@link Category}
 */
export abstract class CategoryRepository {
  /**
   * Obtiene la totalidad de categorías registradas en el sistema.
   *
   * @returns Promesa que resuelve un arreglo de {@link Category}
   */
  abstract getAll(): Promise<Category[]>;
}
