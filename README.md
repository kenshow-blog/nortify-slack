# nortify-slack

## What is this repositoy?

- This repository enable us to make nortify anything to slack easily.

- When we wanna make any systems to nortfy to slack, we can use this repository as template.

## The architecture

As an init template, this repository provide it such as below.

![architecture](https://user-images.githubusercontent.com/65284319/221414281-6ddec5d3-9992-4263-b4c1-b10adcf9e031.png)

## Execute on local

1. `$ git clone git@github.com:kenshow-blog/nortify-slack.git`

2. `$ touch .env` and add below

```
STAGE=dev
WEBHOOK_URL=<the slack webhook url that you wanna nortify>
SLACK_CHANNEL=<the slack channel that you wanna send message>
```

If you wanna get data from dynamo, set DYNAMODB_STREAMS as env.

3. `yarn`

4. `yarn invoke`

## Preparation to deploy

1. set each enviroments in github secret

2. make IAM role to set this github actions
