import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Order, OrderStatus } from '../../src/domain/models/order.model';

describe('Order Model & Types (Domain Layer)', () => {
  it('should instantiate a valid Order object with all required properties', () => {
    const validOrder: Order = {
      id: 1,
      orderNumber: 'ORD-2026-001',
      customerName: 'Andres Felipe Saavedra',
      total: 155000,
      status: 'COMPLETED',
    };

    assert.strictEqual(validOrder.id, 1);
    assert.strictEqual(validOrder.orderNumber, 'ORD-2026-001');
    assert.strictEqual(validOrder.customerName, 'Andres Felipe Saavedra');
    assert.strictEqual(validOrder.total, 155000);
    assert.strictEqual(validOrder.status, 'COMPLETED');
  });

  it('should accept all valid OrderStatus values', () => {
    const allowedStatuses: OrderStatus[] = [
      'COMPLETED',
      'PENDING',
      'PROCESSING',
      'DELIVERED',
      'CANCELLED',
    ];

    allowedStatuses.forEach((status, idx) => {
      const order: Order = {
        id: idx + 1,
        orderNumber: `ORD-2026-00${idx + 1}`,
        customerName: `Customer ${idx + 1}`,
        total: (idx + 1) * 50000,
        status,
      };

      assert.strictEqual(order.status, status);
    });
  });

  it('should support numeric totals including floats and zero', () => {
    const zeroTotalOrder: Order = {
      id: 99,
      orderNumber: 'ORD-PROMO-000',
      customerName: 'Free User',
      total: 0,
      status: 'COMPLETED',
    };

    const decimalTotalOrder: Order = {
      id: 100,
      orderNumber: 'ORD-DECIMAL-001',
      customerName: 'Decimal User',
      total: 199.99,
      status: 'PROCESSING',
    };

    assert.strictEqual(zeroTotalOrder.total, 0);
    assert.strictEqual(decimalTotalOrder.total, 199.99);
  });
});
