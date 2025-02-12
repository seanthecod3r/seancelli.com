const requestCounts = new Map();

export function middleware(req: any) {
  if (req.nextUrl.pathname === "/api/send-email") {
    const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";
    const now = Date.now();

    if (requestCounts.has(ip) && now - requestCounts.get(ip) < 60000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Too many requests. Try again later.",
        }),
        { status: 429, headers: { "Content-Type": "application/json" } },
      );
    }

    requestCounts.set(ip, now);
  }

  return new Response(null, { status: 200 });
}
