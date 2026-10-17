import { Provider } from "../../domain/models/provider.model";
import { ProviderRepository } from "../../domain/repositories/provider.repository";
import { ProviderDatasource } from "../datasources/provider.datasource";

/**
 * Implementación concreta del repositorio de proveedores.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un **adaptador (Repository Implementation)** entre:
 *
 * - El contrato del dominio {@link ProviderRepository}
 * - La fuente de datos {@link ProviderDatasource}
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
 * {@link ProviderRepository}, no de esta implementación.
 *
 * @see {@link ProviderRepository}
 * @see {@link ProviderDatasource}
 */
export class ProviderRepositoryImpl extends ProviderRepository {

  /**
   * Crea una nueva instancia del repositorio de proveedores.
   *
   * @param datasource - Fuente de datos utilizada para
   * obtener la información de proveedores
   */
  constructor(private datasource: ProviderDatasource) {
    super();
  }

  /**
   * Obtiene el listado de proveedores.
   *
   * @returns Promesa que resuelve un arreglo de {@link Provider}
   */
  getAll(): Promise<Provider[]> {
    return this.datasource.getAll();
  }
}
