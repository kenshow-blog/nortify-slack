import { injectable } from "inversify";
import { RequestCheckService } from "./request-check-service";

/**
 * リクエストチェックサービス実装クラス
 */
@injectable()
export class DefaultRequestCheckService implements RequestCheckService {
  execute(requests: string): Array<string> {
    // TODO: リクエストチェックする実装を追加
    console.log(requests);
    return ["OK"];
  }
}
