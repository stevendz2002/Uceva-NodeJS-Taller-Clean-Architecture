# Clean Architecture en NodeJS - Taller 6

**UCEVA - Arquitectura de Software**  
**Docente:** Jesús David Mejía Vergara  
**Integrante 1:** Jhon Edward Steven Loaiza Diaz (Módulo: `categories`)  

---

## Estructura General del Proyecto

```
src
├── domain
│   ├── models
│   │   ├── user.model.ts
│   │   ├── product.model.ts
│   │   └── category.model.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       └── category.repository.ts
│
├── application
│   └── usecases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       └── get-all-categories.usecase.ts
│
├── infrastructure
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   └── category.datasource.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   └── category.repository.impl.ts
│   └── web
│       ├── config/
│       │   ├── envs.ts
│       │   ├── swagger.schemas.ts
│       │   └── swagger.ts
│       ├── controllers/
│       │   ├── users.controller.ts
│       │   ├── products.controller.ts
│       │   └── categories.controller.ts
│       ├── erros/
│       │   ├── custom.error.ts
│       │   └── handle.error.ts
│       ├── interfaces/
│       │   └── server.interface.ts
│       ├── routes/
│       │   ├── users.routes.ts
│       │   ├── products.routes.ts
│       │   ├── categories.routes.ts
│       │   └── routes.ts
│       └── server.ts
│
└── app.ts
```

---

## Módulo `categories`

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
```