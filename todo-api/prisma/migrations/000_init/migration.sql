-- Migration: create todos table

CREATE TABLE IF NOT EXISTS "Todo" (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    text text NOT NULL
);
