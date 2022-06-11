import { Store } from "@ngrx/store";
import { map } from "rxjs";

/**
 * Returns the value for a rover from the map received of the store, according their name
 */
export class Utils {
  static getRoverValueFromStore(store: Store, selector: any, code: string) {
    return store.select(selector).pipe(map(data => (data as Map<string, any>).get(code)));
  }
}
