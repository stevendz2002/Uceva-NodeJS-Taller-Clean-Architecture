import { Order } from "../../domain/models/order.model";

/**
 * Datasource encargado de proveer órdenes simuladas en memoria.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una **fuente de datos (Datasource)**.
 *
 * Provee datos en memoria con 5 órdenes realistas.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `OrderRepositoryImpl`, que se encarga
 * de adaptar los datos al dominio y exponerlos mediante
 * el contrato `OrderRepository`.
 */
export class OrderDatasource {

  private orders: Order[] = [
    {
      id: 1,
      orderNumber: "ORD-2026-001",
      customerName: "Andres Felipe Saavedra",
      total: 155000,
      status: "COMPLETED"
    },
    {
      id: 2,
      orderNumber: "ORD-2026-002",
      customerName: "Jhon Edward Loaiza",
      total: 320000,
      status: "PROCESSING"
    },
    {
      id: 3,
      orderNumber: "ORD-2026-003",
      customerName: "Jose Sebastian Arenas",
      total: 89500,
      status: "PENDING"
    },
    {
      id: 4,
      orderNumber: "ORD-2026-004",
      customerName: "Jesus David Mejia",
      total: 450000,
      status: "DELIVERED"
    },
    {
      id: 5,
      orderNumber: "ORD-2026-005",
      customerName: "Maria Camila Restrepo",
      total: 210000,
      status: "CANCELLED"
    }
  ];

  /**
   * Obtiene la lista de órdenes registradas en memoria.
   *
   * @returns Promesa que resuelve un arreglo de {@link Order}
   */
  async getAll(): Promise<Order[]> {
    return Promise.resolve([...this.orders]);
  }
}
