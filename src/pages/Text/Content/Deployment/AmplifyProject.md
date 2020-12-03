
# Amplify project setup
After setting up AWS Amplify you need to initialize your project.

## Amplify Init
Run the amplify init command.  
Replace [PROJECT NAME] and [ENVIRONMENT] with your prefered values.  

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

<TextImage title="Amplify project init cli screenshot" asset="AmplifyProjectCli" clip />
