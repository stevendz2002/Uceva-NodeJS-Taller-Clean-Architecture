import { Order } from "../models/order.model";

/**
 * Contrato del repositorio de órdenes.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de órdenes.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO sabe de bases de datos, APIs o frameworks
 *
 * Cualquier fuente de datos (API, base de datos, mocks,
 * archivos, etc.) puede ser utilizada siempre que
 * implemente este contrato.
 *
 * Los casos de uso dependen de esta abstracción,
 * no de implementaciones concretas.
 *
 * @see {@link Order}
 */
export abstract class OrderRepository {
  /**
   * Obtiene un listado de órdenes.
   *
   * @remarks
   * Este método define una **operación de negocio**
   * relacionada con la obtención de órdenes,
   * sin especificar cómo ni desde dónde se obtienen.
   *
   * @returns Promesa que resuelve un arreglo de {@link Order}
   */
  abstract getAll(): Promise<Order[]>;
}
