# Clean Architecture en NodeJS - Taller 6

**UCEVA - Arquitectura de Software**  
**Docente:** Jesús David Mejía Vergara  
**Integrante 1:** Jhon Edward Steven Loaiza Diaz (Módulo: `categories`)  
**Integrante 2:** Jose Sebastian Arenas Moncada (Módulo: `providers`)  
**Integrante 3:** Andrés Felipe Saavedra (Módulo: `orders`)  

---

## Estructura General del Proyecto

```
src
├── domain
│   ├── models
│   │   ├── user.model.ts
│   │   ├── product.model.ts
│   │   ├── category.model.ts
│   │   └── provider.model.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       ├── category.repository.ts
│       └── provider.repository.ts
│
├── application
│   └── usecases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       ├── get-all-categories.usecase.ts
│       └── get-all-providers.usecase.ts
│
├── infrastructure
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   ├── category.datasource.ts
│   │   └── provider.datasource.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   ├── category.repository.impl.ts
│   │   └── provider.repository.impl.ts
│   └── web
│       ├── config/
│       │   ├── envs.ts
│       │   ├── swagger.schemas.ts
│       │   └── swagger.ts
│       ├── controllers/
│       │   ├── users.controller.ts
│       │   ├── products.controller.ts
│       │   ├── categories.controller.ts
│       │   └── providers.controller.ts
│       ├── erros/
│       │   ├── custom.error.ts
│       │   └── handle.error.ts
│       ├── interfaces/
│       │   └── server.interface.ts
│       ├── routes/
│       │   ├── users.routes.ts
│       │   ├── products.routes.ts
│       │   ├── categories.routes.ts
│       │   ├── providers.routes.ts
│       │   └── routes.ts
│       └── server.ts
│
└── app.ts
```

---

## Módulo `providers` (Integrante 2: Jose Sebastian Arenas Moncada)

1. **Dominio:**
   - Modelo `Provider` en `src/domain/models/provider.model.ts` con propiedades `{ id: number, name: string, email: string, phone: string, city: string }`.
   - Contrato abstracto `ProviderRepository` en `src/domain/repositories/provider.repository.ts` con firma `getAll(): Promise<Provider[]>`.
2. **Aplicación:**
   - Caso de uso `GetAllProvidersUseCase` en `src/application/usecases/get-all-providers.usecase.ts` inyectando `ProviderRepository` por constructor y exponiendo `execute(): Promise<Provider[]>`.
3. **Infraestructura:**
   - `ProviderDatasource` en `src/infrastructure/datasources/provider.datasource.ts` con 5 proveedores colombianos realistas en memoria.
   - `ProviderRepositoryImpl` en `src/infrastructure/repositories/provider.repository.impl.ts` implementando el contrato abstracto y delegando a `ProviderDatasource`.
4. **Capa Web (Express + OpenAPI):**
   - `ProvidersController` en `src/infrastructure/web/controllers/providers.controller.ts` manejando excepciones con `HandleError` centralizado de `../erros/handle.error`.
   - `ProvidersRoutes` en `src/infrastructure/web/routes/providers.routes.ts` orquestando la inyección de dependencias (`ProviderDatasource -> ProviderRepositoryImpl -> GetAllProvidersUseCase -> ProvidersController`), anotaciones OpenAPI `@openapi` y exponiendo `router.get('/', controller.getAllProviders)`.
   - `AppRoutes` en `src/infrastructure/web/routes/routes.ts` registrando `router.use("/api/providers", ProvidersRoutes.routes)`.
   - `swagger.schemas.ts` en `src/infrastructure/web/config/` registrando el esquema OpenAPI para `Provider`.

---

## Módulo `categories` (Integrante 1: Jhon Edward Steven Loaiza Diaz)

1. **Dominio:** Interfaz `Category` con propiedades `{ id, name, description, active }` y contrato abstracto `CategoryRepository` con método `getAll(): Promise<Category[]>`.
2. **Aplicación:** `GetAllCategoriesUseCase` orquestando la regla de negocio y delegando la consulta al repositorio abstracto.
3. **Infraestructura:**
   - `CategoryDatasource`: Provee 5 categorías realistas en memoria.
   - `CategoryRepositoryImpl`: Implementa `CategoryRepository` e inyecta `CategoryDatasource`.
4. **Capa Web (Express + OpenAPI):**
   - `CategoriesController`: Procesa la petición GET y maneja errores con `HandleError` centralizado.
   - `CategoriesRoutes`: Realiza la inyección de dependencias (`Datasource -> RepositoryImpl -> UseCase -> Controller`), expone `GET /api/categories` y define la documentación `@openapi`.
   - `AppRoutes`: Registra `router.use("/api/categories", CategoriesRoutes.routes)`.
   - `swagger.schemas.ts`: Registra el esquema OpenAPI de `Category`.

---

## Funcionamiento del Backend

### Ejecutar Backend en Modo Desarrollo
```bash
npm run start
```

### URLs de Consumo y Documentación
```
http://localhost:3000/api/docs (Swagger UI)
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/categories
http://localhost:3000/api/providers
```