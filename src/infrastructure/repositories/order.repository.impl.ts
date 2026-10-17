import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderDatasource } from "../datasources/order.datasource";

/**
 * Implementación concreta del repositorio de órdenes.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un **adaptador (Repository Implementation)** entre:
 *
 * - El contrato del dominio {@link OrderRepository}
 * - La fuente de datos {@link OrderDatasource}
 *
 * Su responsabilidad es:
 * - Cumplir el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar o transformar los datos si fuese necesario
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser utilizada directamente por los casos de uso.
 *
 * Los casos de uso dependen únicamente del contrato
 * {@link OrderRepository}, no de esta implementación.
 *
 * @see {@link OrderRepository}
 * @see {@link OrderDatasource}
 */
export class OrderRepositoryImpl extends OrderRepository {

  /**
   * Crea una nueva instancia del repositorio de órdenes.
   *
   * @param datasource - Fuente de datos utilizada para
   * obtener la información de órdenes
   */
  constructor(private datasource: OrderDatasource) {
    super();
  }

  /**
   * Obtiene el listado de órdenes.
   *
   * @returns Promesa que resuelve un arreglo de {@link Order}
   */
  getAll(): Promise<Order[]> {
    return this.datasource.getAll();
  }
}
