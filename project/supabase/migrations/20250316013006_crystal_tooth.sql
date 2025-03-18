/*
  # Create enquiries table for car dealer website

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `contact` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `enquiries` table
    - Add policy for authenticated users to read all enquiries
    - Add policy for public users to insert enquiries
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  contact text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow public to submit enquiries"
  ON enquiries
  FOR INSERT
  TO public
  WITH CHECK (true);