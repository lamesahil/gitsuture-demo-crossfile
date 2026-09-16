/**
 * Helper to calculate the final price after a percentage discount.
 * 
 * @param total - The original total price.
 * @param percentage - The discount percentage (e.g., 20 for 20%).
 * @returns The final discounted price.
 */
export function applyDiscount(total: number, percentage: number): number {
  // BUG: Accidentally adds the percentage as a flat value instead of calculating and subtracting it.
  return total - (total * percentage / 100);
}
