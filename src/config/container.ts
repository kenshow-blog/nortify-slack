import "reflect-metadata";
import { DefaultDynamoStreamsToSlackHandler } from "../handler/default-dynamo-streams-to-slack-handler";
import { container } from "tsyringe";
import { MockSlack } from "../client/mock-slack";
import { MockMessageService } from "../services/mock-message-service";

container.register("Slack", {
  useClass: MockSlack,
});
container.register("MessageService", {
  useClass: MockMessageService,
});

container.register("DefaultDynamoDbStreamsToSlackHandler", {
  useClass: DefaultDynamoStreamsToSlackHandler,
});

export default container;
