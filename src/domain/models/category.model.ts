/**
 * Interfaz que representa una categoría de productos.
 *
 * @remarks
 * Esta interfaz pertenece a la **capa de Domain** y define la estructura
 * de datos del modelo de negocio para las categorías.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Lácteos',
 *   description: 'Productos derivados de la leche como quesos, yogures y mantequilla',
 *   active: true
 * };
 * ```
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre descriptivo de la categoría */
  name: string;

  /** Descripción detallada de la categoría */
  description: string;

  /** Indica si la categoría se encuentra activa en el catálogo */
  active: boolean;
}
