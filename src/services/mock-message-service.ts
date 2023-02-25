import { MessageService } from "./message-service";
import { DynamoDBRecord } from "aws-lambda";
import { UserModel } from "../types/user";
import * as AWS from "aws-sdk";
import { injectable } from "tsyringe";
import { SlackForm } from "../types/slack-form";

@injectable()
export class MockMessageService implements MessageService {
  createSlackMessage(record: DynamoDBRecord): SlackForm {
    const user = AWS.DynamoDB.Converter.unmarshall(
      record.dynamodb.NewImage
    ) as UserModel;
    const body = `
    ユーザー登録がありました。ご確認お願いいたします。
    *・* 登録日時: ${user.createdAt}
    *・* ユーザー名: ${user.name}
    *・* email: ${user.email}
    *・* 年齢: ${user.age}
    `;

    return {
      title: "ユーザー登録がありました。ご確認お願いいたします。",
      body: body,
    };
  }
}
