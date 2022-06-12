import { Store } from "@ngrx/store";
import { map } from "rxjs";

/**
 * Class with utils for the app
 */
export class Utils {
  /**
   * Returns the value for a rover from the map received of the store, according their name
   * @param {Store} store store to extract the data
   * @param {any} selector selector of the store that provides the data
   * @param {string} code name of the rover for filter the data
   * @returns {any} the data obtained from the selector filtered by the rover
   */
  static getRoverValueFromStore(store: Store, selector: any, code: string) {
    return store.select(selector).pipe(map(data => (data as Map<string, any>).get(code)));
  }
}
