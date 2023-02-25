import container from "../config/container";
import { DefaultDynamoStreamsToSlackHandler } from "./default-dynamo-streams-to-slack-handler";
import { DynamoDBStreamEvent } from "aws-lambda";

/**
 * dyanmo streams → slack通知 ハンドラ
 */
export const execute = async (event: DynamoDBStreamEvent): Promise<void> => {
  return container
    .resolve<DefaultDynamoStreamsToSlackHandler>(
      "DefaultDynamoStreamsToSlackHandler"
    )
    .execute(event);
};
