import { Router } from "express";
import { CategoryDatasource } from "../../datasources/category.datasource";
import { CategoryRepositoryImpl } from "../../repositories/category.repository.impl";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { CategoriesController } from "../controllers/categories.controller";

/**
 * Configuración de rutas y cableado de dependencias para el módulo de categorías.
 *
 * @remarks
 * Esta clase inicializa el flujo completo de Clean Architecture:
 * {@link CategoryDatasource} -> {@link CategoryRepositoryImpl} -> {@link GetAllCategoriesUseCase} -> {@link CategoriesController}
 * e integra la documentación OpenAPI/Swagger para el endpoint GET `/api/categories`.
 */
export class CategoriesRoutes {

  /**
   * Inicializa y retorna el Router de Express con las dependencias inyectadas.
   *
   * @returns Instancia de Router configurada
   */
  static get routes(): Router {
    const router = Router();
    const datasource = new CategoryDatasource();
    const repository = new CategoryRepositoryImpl(datasource);
    const getAllCategories = new GetAllCategoriesUseCase(repository);
    const controller = new CategoriesController(getAllCategories);

    /**
     * @openapi
     * /api/categories:
     *   get:
     *     summary: Obtener listado de categorías
     *     description: Retorna la lista completa de categorías de productos registradas en el sistema.
     *     tags:
     *       - Categories
     *     responses:
     *       200:
     *         description: Lista de categorías obtenida exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Category'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllCategories);

    return router;
  }
}
