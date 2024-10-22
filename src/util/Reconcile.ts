export function ReconcileObjects<T>(obj: Partial<T>, template: T): T {
  const reconciled = { ...obj, ...template };
  return reconciled;
}
