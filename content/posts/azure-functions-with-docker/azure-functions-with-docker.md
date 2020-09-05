---
slug: azure-functions-with-docker
date: 2018-04-26T22:26:48.016Z
title: 'Azure Functions with Docker'
template: 'post'
draft: false
description: 'Do you want to develop Azure Functions and deploy then anywhere? Now you can. In this post, you will learn about Azure Functions and Docker, and how to use them together. Azure Functions is a…'
category: ''
tags: [Docker, Azure Functions]
collection: 'blog'
---

Do you want to develop Azure Functions and deploy then anywhere? Now you can. In this post, you will learn about Azure Functions and Docker, and how to use them together.

But first, there are some prerequisites:

- [Node.js 8.5 or greater](https://nodejs.org/en/)

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)

- [Docker](https://www.docker.com)

## Azure Functions

Azure Functions is a serverless compute service that enables you to run code on-demand without having to explicitly provision or manage infrastructure. Use Azure Functions to run a script or piece of code in response to a variety of events.

For more information, see

[%card](https://azure.microsoft.com/en-us/services/functions/)

## Docker

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

For more information, see
[%card](https://www.docker.com/what-docker)

## Installing Docker

First, download the installer from [https://www.docker.com/community-edition](https://www.docker.com/community-edition)

Open the installer, and check _Add shortcut to desktop_.

![](https://cdn-images-1.medium.com/max/2000/1*P1WfzrgXasOf089h8xhD3Q.png)

Press _Ok_ and the installation will start.

![](https://cdn-images-1.medium.com/max/2000/1*1c0uhdPC8Gq5J9YaPPSTBQ.png)

## Hello World

Now, we know what Azure Functions and Docker are, so, let’s create our first Hello World function.

The first thing you have to do is open a Terminal, and run the following:

func init . --docker

![](https://cdn-images-1.medium.com/max/2000/1*TPhPC2SGwvLTMSmgzxOfRg.png)

This command will create the configuration files to run the Azure Functions with Docker.

Let’s create the function, run the following:

func new

Select JavaScript as language, and HttpTrigger as template (option 2 twice). Name the function _Hello World_.

![](https://cdn-images-1.medium.com/max/2000/1*s3RIYuKSNBWsnhVL2CpLzw.png)

If you open the folder in VS Code, you will see the following files:

![](https://cdn-images-1.medium.com/max/2000/1*_FBAWpQsyn2MtcWnoUSF7Q.png)

Open the function.json file and change authLevel to anonymous . You can see the function code on de index.js .

Once that is done, you can run docker build -t hello_world . and docker run -p 8080:80 hello_world to deploy your function.

Open a browser and go to [http://localhost:8080](http://localhost:8080) you should see something like this:

![](https://cdn-images-1.medium.com/max/2000/1*gtQWoVTVbICYcisYN_bGiQ.png)

To test the function, you can navigate to http:localhost:8080/api/HttpTriggerJS?name=world and you should see something like this:

![](https://cdn-images-1.medium.com/max/2000/1*P6u4FZTb2ZWoIYBdoCBT7A.png)

Now, let’s add another function. In your terminal, run func new like before, but name the function _ReverseWord._

![](https://cdn-images-1.medium.com/max/2000/1*7gLsojZMY9b_y9XYnVWcKQ.png)

Open the function.json file and change authLevel to anonymous . Then, open the index.js file, and replace the following code:

```js
context.res = {
  // status: 200, /* Defaults to 200 */
  body: 'Hello ' + (req.query.name || req.body.name),
};
```

with:

```js
let message = 'Hello ' + (req.query.name || req.body.name);
let splitString = message.split('');
let reverseArray = splitString.reverse();

context.res = {
  // status: 200, /* Defaults to 200 */
  body: message + ' | ' + reverseArray.join(''),
};
```

Once that is done, you can run docker build -t hello_world . and docker run -p 8000:80 hello_world to deploy your function.

Open a browser and go to [http://localhost:8000](http://localhost:8080). To test the function, you can navigate to http:localhost:8000/api/ReverseWord?name=world and you should see something like this:

![](https://cdn-images-1.medium.com/max/2000/1*IrFMy3Kwds15F7QHXt2w-w.png)

You can find the whole example here:

[%card](https://github.com/teban3010/AzureFunctionsDockerDemo)

For more samples you can check

[%card](https://github.com/Azure/Azure-Functions/wiki/Samples-and-content)

## Related Links

- [https://cmatskas.com/running-azure-functions-anywhere-with-the-power-of-containers/](https://cmatskas.com/running-azure-functions-anywhere-with-the-power-of-containers/)

- [https://medium.com/@juanpdantur/azure-functions-on-a-docker-container-7e76872c40cf](https://medium.com/@juanpdantur/azure-functions-on-a-docker-container-7e76872c40cf)

- [https://opensource.com/resources/what-docker](https://opensource.com/resources/what-docker)
