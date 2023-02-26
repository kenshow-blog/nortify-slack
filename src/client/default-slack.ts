/* eslint-disable @typescript-eslint/no-unused-vars */
import { Slack } from "./slack";
import { injectable } from "tsyringe";
import axios, { AxiosResponse } from "axios";
import { SlackForm } from "../types/slack-form";
import { SLACK_USERNAME, ICON_EMOJI, SLACK_COLOR } from "../const/const";

@injectable()
export class DefaultSlack implements Slack {
  async nortice(form: SlackForm): Promise<AxiosResponse> {
    const data = {
      username: SLACK_USERNAME,
      icon_emoji: ICON_EMOJI,
      text: `${process.env.SLACK_MENTION} \n${form.title}`,
      color: SLACK_COLOR,
      channel: process.env.SLACK_CHANNEL,
      attachments: [
        {
          color: SLACK_COLOR,
          text: form.body,
        },
      ],
    };
    const content = {
      method: "post",
      baseURL: process.env.WEBHOOK_URL,
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: JSON.stringify(data),
    };
    return await axios.request(content);
  }
}
