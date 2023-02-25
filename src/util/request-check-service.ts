/**
 * リクエストチェックサービス
 */
export interface RequestCheckService {
  /**
   * 引数チェック
   */
  execute(requests: string): Array<string>;
}
