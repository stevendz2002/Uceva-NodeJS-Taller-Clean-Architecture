/**
 * Interfaz que representa un proveedor.
 *
 * Contiene la información básica necesaria para mostrar un proveedor
 * en el sistema o en cualquier componente de listado.
 *
 * @remarks
 * Cada proveedor debe tener un `id` único, un nombre de empresa o razón social `name`,
 * un correo electrónico válido `email`, un teléfono de contacto `phone` y una ciudad `city`.
 *
 * @example
 * ```ts
 * const proveedor: Provider = {
 *   id: 1,
 *   name: 'Distribuidora Andina S.A.S.',
 *   email: 'contacto@distribuidoraandina.com',
 *   phone: '+57 315 789 4512',
 *   city: 'Cali'
 * };
 * ```
 */
export interface Provider {
  /** Identificador único del proveedor */
  id: number;

  /** Nombre de la empresa o razón social del proveedor */
  name: string;

  /** Correo electrónico de contacto del proveedor */
  email: string;

  /** Número de teléfono o celular del proveedor */
  phone: string;

  /** Ciudad de ubicación principal del proveedor */
  city: string;
}
