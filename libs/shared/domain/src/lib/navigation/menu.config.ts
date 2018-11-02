import { domain_environment as Config } from '../domain.configuration';

// items/filter/navigation
export class Configuration {
  private static RestApiBase = 'api/';
  public static RestApiNavigation = 'items/filter/navigation';
  public static GetMenuUrl =
    Config.buyerUrl +
    Configuration.RestApiBase +
    Configuration.RestApiNavigation;
}
