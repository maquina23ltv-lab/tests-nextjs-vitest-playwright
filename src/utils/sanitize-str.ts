export function sanitizeStr(s: string): string {
  return !s || typeof s !== "string" ? "" : s.trim().normalize();
}

console.log("CURRENT_ENV=", process.env.CURRENT_ENV);
