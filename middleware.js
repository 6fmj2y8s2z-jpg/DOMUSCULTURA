// Pre-launch gate: keep every public route on the holding page until launch.
export const config = {
  matcher: ['/((?!maintenance\\.html$).*)']
};

export default function maintenanceGate(request) {
  return Response.redirect(new URL('/maintenance.html', request.url), 307);
}
