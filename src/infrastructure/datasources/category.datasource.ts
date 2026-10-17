import { Category } from "../../domain/models/category.model";

/**
 * Datasource encargado de suministrar las categorías en memoria.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una fuente de datos (Datasource). Provee un conjunto estático de
 * 5 categorías realistas.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `CategoryRepositoryImpl`.
 */
export class CategoryDatasource {

  /**
   * Colección en memoria de categorías precargadas.
   */
  private categories: Category[] = [
    {
      id: 1,
      name: 'Lácteos',
      description: 'Productos derivados de la leche como quesos, yogures y mantequilla',
      active: true,
    },
    {
      id: 2,
      name: 'Carnes',
      description: 'Cortes vacunos, porcinos, aves y embutidos frescos de primera calidad',
      active: true,
    },
    {
      id: 3,
      name: 'Frutas',
      description: 'Variedad de frutas frescas seleccionadas de temporada y cítricos',
      active: true,
    },
    {
      id: 4,
      name: 'Verduras',
      description: 'Hortalizas, legumbres y vegetales frescos directos del campo',
      active: true,
    },
    {
      id: 5,
      name: 'Bebidas',
      description: 'Jugos naturales, aguas minerales, refrescos y bebidas hidratantes',
      active: true,
    },
  ];

  /**
   * Obtiene la lista completa de categorías.
   *
   * @returns Promesa que resuelve un arreglo de {@link Category}
   */
  async getAll(): Promise<Category[]> {
    return Promise.resolve([...this.categories]);
  }
}
