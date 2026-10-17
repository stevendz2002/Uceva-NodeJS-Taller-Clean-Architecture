import { Router } from "express";
import { UsersRoutes } from "./users.routes";
import { ProductsRoutes } from "./products.routes";
import { CategoriesRoutes } from "./categories.routes";
import { ProvidersRoutes } from "./providers.routes";
import { OrdersRoutes } from "./orders.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos de usuarios, productos, categorías, proveedores y órdenes.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    // Definir rutas
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);
    router.use("/api/categories", CategoriesRoutes.routes);
    router.use("/api/providers", ProvidersRoutes.routes);
    router.use("/api/orders", OrdersRoutes.routes);

    return router;
  }
}
