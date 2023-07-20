const mapping: Record<string, string> = {
  goals: 'goal',
  kpis: 'kpi',
  organizations: 'organization',
  skills: 'skill',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
