// Public launch: the historical maintenance middleware is deliberately dormant.
export const config = {
  matcher: ['/__domus-maintenance-gate-disabled__']
};

export default function maintenanceGate() {
  return undefined;
}
