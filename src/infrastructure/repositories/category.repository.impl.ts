import { Category } from "../../domain/models/category.model";
import { CategoryRepository } from "../../domain/repositories/category.repository";
import { CategoryDatasource } from "../datasources/category.datasource";

/**
 * Implementación concreta del repositorio de categorías.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un adaptador entre el contrato del dominio {@link CategoryRepository}
 * y la fuente de datos {@link CategoryDatasource}.
 *
 * @see {@link CategoryRepository}
 * @see {@link CategoryDatasource}
 */
export class CategoryRepositoryImpl extends CategoryRepository {

  /**
   * Crea una nueva instancia del repositorio de categorías.
   *
   * @param datasource - Fuente de datos de categorías
   */
  constructor(private datasource: CategoryDatasource) {
    super();
  }

  /**
   * Obtiene el listado de categorías delegando la consulta al datasource.
   *
   * @returns Promesa que resuelve un arreglo de {@link Category}
   */
  getAll(): Promise<Category[]> {
    return this.datasource.getAll();
  }
}
