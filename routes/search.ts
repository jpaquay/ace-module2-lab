import { Request, Response } from 'express';

export function searchHandler(req: Request, res: Response) {
  const query = String(req.query.q || '');
  // Vulnerable Reflected XSS (CWE-79)
  return res.send(`Search results for: ${query}`);
}
