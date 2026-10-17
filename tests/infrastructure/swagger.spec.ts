import { describe, it } from 'node:test';
import assert from 'node:assert';
import { swaggerSpec } from '../../src/infrastructure/web/config/swagger';

describe('Swagger & OpenAPI Spec for Orders Module', () => {
  it('should include OpenAPI version and basic info', () => {
    assert.strictEqual(swaggerSpec.openapi, '3.0.0');
    assert.strictEqual(swaggerSpec.info.title, 'API Client Server NodeJS');
  });

  it('should register /api/orders endpoint in swagger paths', () => {
    const paths = swaggerSpec.paths;
    assert.ok(paths, 'Swagger paths must be defined');
    assert.ok(paths['/api/orders'], 'Route /api/orders must exist in OpenAPI spec');
    assert.ok(paths['/api/orders'].get, 'GET method for /api/orders must exist');
  });

  it('should have correct metadata and response schema for GET /api/orders', () => {
    const getOperation = swaggerSpec.paths['/api/orders'].get;

    assert.strictEqual(getOperation.summary, 'Obtener listado de órdenes');
    assert.ok(getOperation.tags.includes('Orders'));
    assert.ok(getOperation.responses['200'], 'Response 200 must be defined');

    const jsonContent = getOperation.responses['200'].content['application/json'];
    assert.strictEqual(jsonContent.schema.type, 'array');
    assert.strictEqual(jsonContent.schema.items.$ref, '#/components/schemas/Order');
  });

  it('should define the Order schema in components.schemas with all required properties', () => {
    const schemas = swaggerSpec.components?.schemas;
    assert.ok(schemas, 'components.schemas must exist');
    assert.ok(schemas.Order, 'Order schema must be defined in components');

    const orderSchema = schemas.Order;
    assert.strictEqual(orderSchema.type, 'object');

    const requiredFields = ['id', 'orderNumber', 'customerName', 'total', 'status'];
    for (const field of requiredFields) {
      assert.ok(orderSchema.required.includes(field), `Field ${field} must be required`);
      assert.ok(orderSchema.properties[field], `Property ${field} must be present in schema`);
    }

    assert.strictEqual(orderSchema.properties.id.type, 'number');
    assert.strictEqual(orderSchema.properties.orderNumber.type, 'string');
    assert.strictEqual(orderSchema.properties.customerName.type, 'string');
    assert.strictEqual(orderSchema.properties.total.type, 'number');
    assert.strictEqual(orderSchema.properties.status.type, 'string');

    const expectedEnums = ['COMPLETED', 'PENDING', 'PROCESSING', 'DELIVERED', 'CANCELLED'];
    assert.deepStrictEqual(orderSchema.properties.status.enum, expectedEnums);
  });
});
