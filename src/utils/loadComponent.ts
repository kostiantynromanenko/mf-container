export const loadComponent = (scope: string, module: string) => {
  return async () => {
    // @ts-ignore
    await __webpack_init_sharing__('default');
    // @ts-ignore
    const container = window[scope];
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    return factory();
  };
};
