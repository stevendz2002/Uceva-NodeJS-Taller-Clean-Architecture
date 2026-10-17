import { Category } from "../../domain/models/category.model";
import { CategoryRepository } from "../../domain/repositories/category.repository";

/**
 * Caso de uso para obtener el listado completo de categorías.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa la regla de negocio para consultar categorías.
 *
 * Su responsabilidad es orquestar la obtención de datos
 * coordinando la interacción con el contrato {@link CategoryRepository}.
 *
 * @see {@link CategoryRepository}
 * @see {@link Category}
 */
export class GetAllCategoriesUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param categoryRepository - Repositorio de categorías inyectado
   */
  constructor(private categoryRepository: CategoryRepository) {}

  /**
   * Ejecuta el caso de uso para obtener las categorías.
   *
   * @returns Promesa que resuelve un arreglo de {@link Category}
   *
   * @example
   * ```ts
   * const useCase = new GetAllCategoriesUseCase(categoryRepository);
   * const categories = await useCase.execute();
   * ```
   */
  execute(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
