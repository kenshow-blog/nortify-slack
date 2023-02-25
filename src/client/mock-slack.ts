import { Slack } from "./slack";
import { injectable } from "tsyringe";
import { AxiosResponse } from "axios";
import { SlackForm } from "../types/slack-form";

@injectable()
export class MockSlack implements Slack {
  async nortice(form: SlackForm): Promise<AxiosResponse> {
    console.log(form.body);
    return {
      data: form.body,
      status: 200,
      statusText: "OK",
      headers: null,
      config: null,
    };
  }
}
