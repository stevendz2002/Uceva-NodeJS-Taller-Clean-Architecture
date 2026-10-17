import { Provider } from "../models/provider.model";

/**
 * Contrato del repositorio de proveedores.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de proveedores.
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
 * @see {@link Provider}
 */
export abstract class ProviderRepository {
  /**
   * Obtiene el listado de proveedores.
   *
   * @remarks
   * Este método define una **operación de negocio**
   * relacionada con la obtención de proveedores,
   * sin especificar cómo ni desde dónde se obtienen.
   *
   * @returns Promesa que resuelve un arreglo de {@link Provider}
   */
  abstract getAll(): Promise<Provider[]>;
}
