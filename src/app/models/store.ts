/**
 * Interface with information about the load status for an information panel
 */
export interface PanelLoadStatus {
  /**
   * Indicator that is loading
   */
  loading: boolean;
  /**
   * Indicator that is loaded
   */
  loaded: boolean;
  /**
   * Indicator that an error is occurred
   */
  error: boolean;
}
