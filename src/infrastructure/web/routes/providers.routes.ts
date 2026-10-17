import { Router } from "express";
import { ProviderDatasource } from "../../datasources/provider.datasource";
import { ProviderRepositoryImpl } from "../../repositories/provider.repository.impl";
import { GetAllProvidersUseCase } from "../../../application/usecases/get-all-providers.usecase";
import { ProvidersController } from "../controllers/providers.controller";

export class ProvidersRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new ProviderDatasource();
    const repository = new ProviderRepositoryImpl(datasource);
    const getAllProviders = new GetAllProvidersUseCase(repository);
    const controller = new ProvidersController(getAllProviders);

    /**
     * @openapi
     * /api/providers:
     *   get:
     *     summary: Obtener listado de proveedores
     *     description: Retorna el listado completo de proveedores registrados en el sistema.
     *     tags:
     *       - Providers
     *     responses:
     *       200:
     *         description: Lista de proveedores obtenida exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Provider'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllProviders);

    return router;
  }
}
