/**
 * Interfaz que representa una orden de compra.
 *
 * Contiene la información básica necesaria para representar una orden
 * en el sistema.
 *
 * @remarks
 * Cada orden cuenta con un `id` numérico único, un código `orderNumber`,
 * el nombre del cliente `customerName`, el valor total `total` y el
 * estado actual `status`.
 *
 * @example
 * ```ts
 * const orden: Order = {
 *   id: 1,
 *   orderNumber: 'ORD-2026-001',
 *   customerName: 'Andres Felipe Saavedra',
 *   total: 155000,
 *   status: 'COMPLETED'
 * };
 * ```
 */
export interface Order {
  /** Identificador único de la orden */
  id: number;

  /** Código o número de referencia de la orden */
  orderNumber: string;

  /** Nombre del cliente que realizó la orden */
  customerName: string;

  /** Total monetario de la orden */
  total: number;

  /** Estado actual de la orden */
  status: OrderStatus;
}

/**
 * Estados disponibles para una orden de compra.
 */
export type OrderStatus = 'COMPLETED' | 'PENDING' | 'PROCESSING' | 'DELIVERED' | 'CANCELLED';
