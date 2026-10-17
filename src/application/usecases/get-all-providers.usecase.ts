import { Provider } from "../../domain/models/provider.model";
import { ProviderRepository } from "../../domain/repositories/provider.repository";

/**
 * Caso de uso para obtener el listado de proveedores.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa una **regla de negocio de la aplicación**.
 *
 * Su responsabilidad es:
 * - Orquestar la obtención de proveedores
 * - Coordinar la interacción con el repositorio
 *
 * ❗ No conoce detalles de infraestructura.
 * ❗ No depende de implementaciones concretas.
 *
 * Depende únicamente del contrato
 * {@link ProviderRepository} definido en el dominio.
 *
 * @see {@link ProviderRepository}
 * @see {@link Provider}
 */
export class GetAllProvidersUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param providerRepository - Repositorio de proveedores
   * utilizado para acceder a los datos
   */
  constructor(private providerRepository: ProviderRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene el listado de proveedores delegando el acceso
   * a datos al repositorio.
   *
   * @returns Promesa que resuelve un arreglo de {@link Provider}
   *
   * @example
   * ```ts
   * const useCase = new GetAllProvidersUseCase(providerRepository);
   * const providers = await useCase.execute();
   * ```
   */
  execute(): Promise<Provider[]> {
    return this.providerRepository.getAll();
  }
}
