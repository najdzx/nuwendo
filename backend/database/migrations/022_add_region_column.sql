-- Migration 022: Add region column to patient_profiles and shop_orders tables
-- Region represents the administrative region (NCR, CAR, REGION_1, etc.)

-- Add region column to patient_profiles
ALTER TABLE patient_profiles
ADD COLUMN IF NOT EXISTS region VARCHAR(100);

-- Add region column to shop_orders for delivery address
ALTER TABLE shop_orders
ADD COLUMN IF NOT EXISTS delivery_region VARCHAR(100);

-- Add comment
COMMENT ON COLUMN patient_profiles.region IS 'Philippine administrative region (NCR, CAR, REGION_1, etc.)';
COMMENT ON COLUMN shop_orders.delivery_region IS 'Philippine administrative region for delivery address';
