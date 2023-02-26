import container from "../config/container";
import { DefaultDynamoStreamsToSlackHandler } from "./default-dynamo-streams-to-slack-handler";
import { DynamoDBStreamEvent } from "aws-lambda";

/**
 * dyanmo streams → slack通知 ハンドラ
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const execute = (event: DynamoDBStreamEvent) => {
  return container
    .resolve<DefaultDynamoStreamsToSlackHandler>(
      "DefaultDynamoStreamsToSlackHandler"
    )
    .execute(event);
};
