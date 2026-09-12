import { applyDiscount } from './discountHelper';

export class CartService {
  /**
   * Processes a checkout, applying any relevant discount codes.
   */
  processCheckout(totalAmount: number, discountPercentage: number): number {
    if (totalAmount <= 0) {
      throw new Error('Total amount must be greater than zero');
    }
    
    // Call the helper to apply the discount logic
    const finalAmount = applyDiscount(totalAmount, discountPercentage);
    
    return finalAmount;
  }
}
