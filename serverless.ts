import { AWS } from "@serverless/typescript";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const serverelessConfiguration: AWS = {
  service: "nortification-slack",
  frameworkVersion: "3",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  plugins: ["serverless-webpack", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "ap-northeast-1",
    lambdaHashingVersion: "20201221",
    apiName: "${self:provider.stage}-${self:service}",
    stage: process.env.STAGE,
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: "lambda:InvokeFunction",
        Resource: "*",
      },
      {
        Effect: "Allow",
        Action: [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        Resource: "*",
      },
      {
        Effect: "Allow",
        Action: [
          "dynamodb:DescribeStream",
          "dynamodb:GetRecords",
          "dynamodb:GetShardIterator",
          "dynamodb:ListStreams",
        ],
        Resource: "*",
      },
    ],
    logs: {
      restApi: {
        accessLogging: true,
        executionLogging: true,
        level: "ERROR",
      },
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLE: "1",
      STAGE: process.env.STAGE,
      TZ: "Asia/Tokyo",
      WEBHOOK_URL: "url",
      SLACK_CHANNEL: "channel",
      SLACK_MENTION: "@here",
    },
    tracing: {
      apiGateway: true,
      lambda: true,
    },
    memorySize: 512,
    timeout: 30,
  },
  functions: {
    dynamoDbStreamsToSlack: {
      handler: "src/handler/dynamo-streams-to-slack.execute",
      events: [
        {
          stream: {
            type: "dynamodb",
            arn: "arn",
            destinations: {
              onFailure: {
                type: "sqs",
                arn: "sqs:arn",
              },
            },
            bisectBatchOnFunctionError: true,
            maximumRetryAttempts: 3,
          },
        },
      ],
    },
  },
};
module.exports = serverelessConfiguration;
