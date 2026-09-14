import { Request, Response } from 'express';

export async function loginHandler(req: Request, res: Response, db: any) {
  const { username, password } = req.body;
  // Vulnerable SQL query (CWE-89)
  const query = `SELECT id, username, role FROM users WHERE username = '${username}' AND password_hash = '${password}'`;
  const results = await db.execute(query);
  return res.json({ authenticated: results.length > 0 });
}
