import { Order } from "../../domain/models/order.model";
import { OrderRepository } from "../../domain/repositories/order.repository";

/**
 * Caso de uso para obtener el listado de órdenes.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa una **regla de negocio de la aplicación**.
 *
 * Su responsabilidad es:
 * - Orquestar la obtención de órdenes
 * - Coordinar la interacción con el repositorio
 *
 * ❗ No conoce detalles de infraestructura.
 * ❗ No depende de implementaciones concretas.
 *
 * Depende únicamente del contrato
 * {@link OrderRepository} definido en el dominio.
 *
 * @see {@link OrderRepository}
 * @see {@link Order}
 */
export class GetAllOrdersUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param orderRepository - Repositorio de órdenes
   * utilizado para acceder a los datos
   */
  constructor(private orderRepository: OrderRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene el listado de órdenes delegando el acceso
   * a datos al repositorio.
   *
   * @returns Promesa que resuelve un arreglo de {@link Order}
   *
   * @example
   * ```ts
   * const useCase = new GetAllOrdersUseCase(orderRepository);
   * const orders = await useCase.execute();
   * ```
   */
  execute(): Promise<Order[]> {
    return this.orderRepository.getAll();
  }
}
