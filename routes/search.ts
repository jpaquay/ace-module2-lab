// Remediated by Google CodeMender Autonomous Guardrail
import { Request, Response } from 'express';

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function searchHandler(req: Request, res: Response) {
  const query = String(req.query.q || '');
  // Fixed Reflected XSS (CWE-79): Sanitized user input
  return res.send(`Search results for: ${escapeHtml(query)}`);
}
