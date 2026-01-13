/*
  # Create Internship Enrollments Table

  1. New Tables
    - `internship_enrollments`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `college` (text)
      - `year` (text)
      - `internship_id` (text)
      - `internship_title` (text)
      - `enrolled_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `internship_enrollments` table
    - Add public read policy for viewing enrollments
    - Add anonymous insert policy for new enrollments
*/

CREATE TABLE IF NOT EXISTS internship_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  college text NOT NULL,
  year text NOT NULL,
  internship_id text NOT NULL,
  internship_title text NOT NULL,
  enrolled_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE internship_enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert enrollments"
  ON internship_enrollments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view enrollments"
  ON internship_enrollments
  FOR SELECT
  TO public
  USING (true);
