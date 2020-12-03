
# AWS amplify
Install AWS Amplify to your environment and configure the cli.

## Installation
Install aws amplify cli with npm.

```console
> npm install -g @aws-amplify/cli
```

## Configuration
Run the amplify configure command.  
Replace [AWS REGION] with your prefered region.  
Replace [AWS USER NAME] and [AWS PROFILE NAME] with your chosen names.  
Replace [AWS ACCESS KEY] and [AWS SECRET KEY] with the values from the AWS console when creating a user (AWS create user screenshot 5).  

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
```

Go to the user creation link and create a user in AWS IAM.
<TextImage title="AWS create user screenshot 1" asset="AmplifySetupUser1" clip />
<TextImage title="AWS create user screenshot 2" asset="AmplifySetupUser2" clip />
<TextImage title="AWS create user screenshot 3" asset="AmplifySetupUser3" clip />
<TextImage title="AWS create user screenshot 4" asset="AmplifySetupUser4" clip />
<TextImage title="AWS create user screenshot 5" asset="AmplifySetupUser5" clip />

```console
Enter the access key of the newly created user:
? accessKeyId: [AWS ACCESS KEY]
? secretAccessKey: [AWS SECRET KEY]

This would update/create the AWS Profile in your local machine
? Profile Name: [AWS PROFILE NAME]
```

<TextImage title="Amplify setup cli screenshot" asset="AmplifySetupCli" clip />