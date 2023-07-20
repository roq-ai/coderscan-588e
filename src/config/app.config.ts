interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Lead'],
  customerRoles: [],
  tenantRoles: ['Team Lead', 'Developer', 'Owner', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'Coderscan',
  addOns: ['chat', 'notifications', 'file'],
};
