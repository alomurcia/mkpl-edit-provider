export const ROLES = {
  backoffice: 'backofficeadmin',
  provider: 'provideradmin',
  subsidiary: 'subsidiaryadmin'
};

export const ROLES_KEYS = {
  backofficeadmin: 'backoffice',
  provideradmin: 'provider',
  subsidiaryadmin: 'subsidiary'
};

export enum SCOPES {
  createProvider = 'create:provider',
  createSubsidiary = 'create:subsidiary',
  createUser = 'create:users',
  deleteUser = 'delete:users',
  generatePreSignedS3 = 'generate:pre-signed-s3',
  readRegions = 'read:regions',
  readCities = 'read:cities',
  readDashboard = 'read:dashboard',
  readHealthCheck = 'read:health_check',
  readProduct = 'read:product',
  readProducts = 'read:products',
  readProvider = 'read:provider',
  readProviders = 'read:providers',
  readSubsidiary = 'read:subsidiary',
  readSubsidiaries = 'read:subsidiaries',
  readUsers = 'read:users',
  readNotices = 'read:notices',
  readNotifiications = 'read:notifications',
  readNotification = 'read:notification',
  readOrder = 'read:order',
  updateOrder = 'update:order',
  updateSubsidiaryStatus = 'update:subsidiary-status',
  updateProvider = 'update:provider',
  updateRoles = 'update:roles',
  updateSubsidiary = 'update:subsidiary',
  updateProviderStatus = 'update:provider-status',
  updateUser = 'update:user',
  updateNotice = 'update:notice',
  updateInventory = 'update:inventory',
  readSubsidiaryHomeInfo = 'read:subsidiary-home-info',
  readProviderHomeInfo = 'read:provider-home-info',
  readBackofficeHomeInfo = 'read:backoffice-home-info',
  createItinerary = 'create:itinerary'
}

export const REQUESTED_SCOPES =
  Object.keys(SCOPES)
    .map(key => SCOPES[key])
    .concat([
      'openid',
      'email',
      'user_metadata',
      'profile'
    ])
    .join(' ');
