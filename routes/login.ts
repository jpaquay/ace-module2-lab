// Remediated by Google CodeMender Autonomous Guardrail
import { Request, Response } from 'express';

export async function loginHandler(req: Request, res: Response, db: any) {
  const { username, password } = req.body;
  // Fixed SQL Injection (CWE-89): Parameterized query replaces string concatenation
  const query = 'SELECT id, username, role FROM users WHERE username = :username AND password_hash = :password';
  const results = await db.query(query, { replacements: { username, password } });
  return res.json({ authenticated: results.length > 0 });
}
