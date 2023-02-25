import { AxiosResponse } from "axios";
import { SlackForm } from "../types/slack-form";

export interface Slack {
  nortice(form: SlackForm): Promise<AxiosResponse>;
}
