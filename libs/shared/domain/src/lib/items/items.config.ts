import { domain_environment as Config } from '../domain.configuration';

export class ItemsConfiguration {
  private static RestApiBase = 'api/';
  private static RestApiGetItemDetail = 'items/';
  private static RestApiGetItems = 'items/values';
  private static RestApiGetItemsCategories = 'items/filter/categories';
  private static RestApiGetItemsAttributes = 'items/filter/attributes';
  private static RestApiGetItemsManufactures = 'items/filter/manufacturers';
  private static RestApiGetItemsVisualOrder = 'items/filter/visualOrder';
  private static RestApiGetItemsPriceList = 'items/pricelist';
  private static RestApiGetMatchNav = 'items/filter/matchNav';
  private static Endpoint = Config.buyerUrl + ItemsConfiguration.RestApiBase;
  public static GetItemDetailUrl =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItemDetail;
  public static GetItemsPriceListUrl =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItemsPriceList;
  public static GetItemsUrl =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItems;
  public static GetItemsCategories =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItemsCategories;
  public static GetItemsAttributes =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItemsAttributes;
  public static GetItemsManufactures =
    ItemsConfiguration.Endpoint +
    ItemsConfiguration.RestApiGetItemsManufactures;
  public static GetItemsVisualOrder =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetItemsVisualOrder;
  public static GetItemsMatchNav =
    ItemsConfiguration.Endpoint + ItemsConfiguration.RestApiGetMatchNav;
}
