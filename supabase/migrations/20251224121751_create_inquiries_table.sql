/*
  # Create Inquiries Table

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person making the inquiry
      - `company` (text) - Company name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `product_interest` (text) - Product they're interested in
      - `quantity` (text) - Estimated quantity needed
      - `message` (text) - Additional message or requirements
      - `created_at` (timestamptz) - Timestamp of inquiry submission
  
  2. Security
    - Enable RLS on `inquiries` table
    - Add policy for public insert (allow anyone to submit inquiries)
    - Add policy for authenticated users to view all inquiries (for admin access later)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  product_interest text,
  quantity text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);