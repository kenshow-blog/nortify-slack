import "reflect-metadata";
import { DefaultDynamoStreamsToSlackHandler } from "../handler/default-dynamo-streams-to-slack-handler";
import { container } from "tsyringe";
import { MockSlack } from "../client/mock-slack";
import { MockMessageService } from "../services/mock-message-service";
import { eq, when } from "../util/when";
import { DefaultSlack } from "../client/default-slack";

const injectClass = when(process.env.STAGE)
  .on(eq("st"), () => {
    return {
      slack: DefaultSlack,
      messageService: MockMessageService,
    };
  })
  .otherwise(() => {
    return {
      slack: DefaultSlack,
      messageService: MockMessageService,
    };
  });
container.register("Slack", {
  useClass: injectClass.slack,
});
container.register("MessageService", {
  useClass: injectClass.messageService,
});
container.register("DefaultDynamoStreamsToSlackHandler", {
  useClass: DefaultDynamoStreamsToSlackHandler,
});

export default container;
