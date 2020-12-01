
# aws amplify
By default prodev uses AWS Amplify to configure backend resources in AWS.

## installation

```console
> npm install -g @aws-amplify/cli
```

## configuration

```console
> amplify configure
Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region: [AWS REGION]

Specify the username of the new IAM user:
? user name: [AWS USER NAME]

Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?...
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId: [AWS ACCESS KEY]
? secretAccessKey: [AWS SECRET KEY]

This would update/create the AWS Profile in your local machine
? Profile Name: [AWS PROFILE NAME]
```

<TextImage title="Amplify Configure" asset="AmplifyConfigure" clip />

## initialization
```console
> amplify init

? Enter a name for the project: [PROJECT NAME]
? Enter a name for the environment: [ENVIRONMENT]
? Choose your default editor: Visual Studio Code

Please tell us about your project
? Choose the type of app that you're building: javascript
? What javascript framework are you using: react
? Source Directory Path: src
? Distribution Directory Path: build
? Build Command: npm.cmd run-script build
? Start Command: npm.cmd run-script start

Using default provider  awscloudformation

? Do you want to use an AWS profile? Y
? Please choose the profile you want to use: [AWS PROFILE]
```

<InlineImage alt="Amplify Init" asset="AmplifyInit" clip />

## authentication

## storage

## data
