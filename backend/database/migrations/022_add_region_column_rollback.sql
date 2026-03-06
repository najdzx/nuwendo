-- Rollback Migration 022: Remove region column from patient_profiles and shop_orders

ALTER TABLE patient_profiles
DROP COLUMN IF EXISTS region;

ALTER TABLE shop_orders
DROP COLUMN IF EXISTS delivery_region;
