/**
 * リトライクラス
 */
export class Retry {
  private readonly maxRetry = 3;
  async execute<T>(_func: () => Promise<T>): Promise<T> {
    for (let retryCount = 0; retryCount < this.maxRetry; retryCount++) {
      try {
        return await _func();
      } catch (e) {
        console.info(`${retryCount + 1}回目の失敗`);
      }
      await this.sleep((retryCount + 1) ** 2 * 1000);
    }
    return _func();
  }
  private sleep(msec: number) {
    return new Promise((resolve) => setTimeout(resolve, msec));
  }
}
