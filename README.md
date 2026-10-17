# Clean Architecture en NodeJS

```
src
├── domain
│   ├── models
│   │   ├── user.model.ts
│   │   ├── product.model.ts
│   │   └── order.model.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       └── order.repository.ts
│
├── application
│   └── usecases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       └── get-all-orders.usecase.ts
│
├── infrastructure
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   └── order.datasource.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   └── order.repository.impl.ts
│   └── web
│       ├── config/
│       ├── errors/
│       ├── interfaces/
│       ├── controllers/
│       │   ├── users.controller.ts
│       │   ├── products.controller.ts
│       │   └── orders.controller.ts
│       ├── routes/
│       │   ├── users.routes.ts
│       │   ├── products.routes.ts
│       │   ├── orders.routes.ts
│       │   └── routes.ts
│       └── server.ts
│
└── app.ts
```

## Paso 1 - Crear Modelos

```
src/domain/models/
├── user.model.ts
├── product.model.ts
└── order.model.ts
```

## Paso 2 - Crear Repositorios

```
src/domain/repositories/
├── user.repository.ts
├── product.repository.ts
└── order.repository.ts
```

## Paso 3 - Crear Casos de Uso

```
src/application/usecases/
├── get-all-users.usecase.ts
├── get-all-products.usecase.ts
└── get-all-orders.usecase.ts
```

## Paso 4 - Crear Datasources

```
src/infrastructure/datasources/
├── user.datasource.ts
├── product.datasource.ts
└── order.datasource.ts
```

## Paso 5 - Crear Repositorios Implementadores

```
src/infrastructure/repositories/
├── user.repository.impl.ts
├── product.repository.impl.ts
└── order.repository.impl.ts
```

## Paso 6 - Implementar Web (Express – Framework Externo)

```
src/infrastructure/web/
├── config/
├── errors/
├── interfaces/
├── controllers/
│   ├── users.controller.ts
│   ├── products.controller.ts
│   └── orders.controller.ts
├── routes/
│   ├── users.routes.ts
│   ├── products.routes.ts
│   ├── orders.routes.ts
│   └── routes.ts
└── server.ts
```

# Funcionamiento del Backend

## Ejecutar Backend
```bash
npm run start
```

## Ejecutar Pruebas y Specs
```bash
npm test
```

## Urls Consumo
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/orders
```