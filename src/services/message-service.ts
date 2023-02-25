import { DynamoDBRecord } from "aws-lambda";
import { SlackForm } from "../types/slack-form";

/**
 * メッセージサービス
 * slack通知のためのメッセージ作成などを行う。
 */
export interface MessageService {
  createSlackMessage(record: DynamoDBRecord): SlackForm;
}
