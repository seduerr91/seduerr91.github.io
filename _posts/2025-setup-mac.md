---
title: Setup my Mac
tags: [Coding]
style: fill
color: secondary
description: The tools I install when I get a new computer
---

Setting up a new Mac is always an exciting experience, especially for developers and tech enthusiasts. It's like a blank canvas waiting to be filled with the tools and applications that will make your workflow efficient and enjoyable. In this article, I'll walk you through the essential tools I install when I get a new computer, focusing on coding and productivity. Let's dive in!

## Step 1: Install Homebrew

The first step in setting up a new Mac is to install Homebrew, the package manager that makes it easy to install and manage software on macOS. Open your Terminal and run the following command to download and install Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can use it to install a variety of software packages with ease.

## Step 2: Install Python Versions

As a developer, having multiple versions of Python can be crucial for testing and compatibility. With Homebrew, you can easily install different versions of Python. Run the following commands to install Python 3.11, 3.10, 3.12, and 3.13:

```bash
brew install python@3.11
brew install python@3.10
brew install python@3.12
brew install python@3.13
```

Having these versions allows you to switch between them as needed for different projects.

## Step 3: Install Essential Applications

Next, let's install some essential applications that will enhance your productivity and make your Mac a powerhouse for development and communication. Use Homebrew to install the following:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" && \
brew install python@3.11 python@3.10 python@3.12 python@3.13 && \
brew install --cask spotify docker visual-studio-code slack amphetamine warp google-chrome whatsapp zoom postman 1password 
```

- **Spotify**: For music and podcasts to keep you motivated.
- **Docker**: For containerization and running applications in isolated environments.
- **Visual Studio Code (VSC)**: A powerful code editor with a wide range of extensions.
- **Slack**: For team communication and collaboration.
- **Amphetamine**: To keep your Mac awake during long tasks.
- **Warp**: A modern terminal with advanced features for developers.
- **Google Chrome**: A fast and reliable web browser.
- **WhatsApp**: For staying connected with friends and family.
- **Zoom**: For video conferencing and virtual meetings.
- **Postman**: A popular API client for testing and debugging APIs.
- **1Password**: A password manager to keep your accounts secure.

## Step 4: Create a Code Directory

Organization is key to maintaining a clean and efficient workflow. I recommend creating a dedicated directory for your code projects. In your Terminal, run the following command to create a `code` directory in your home folder:

```bash
mkdir ~/code
```

This directory will serve as the central hub for all your coding projects.

## Step 5: Install Granted for AWS Account Switching

If you work with AWS, managing multiple accounts can be a hassle. That's where [Granted](https://docs.commonfate.io/granted/getting-started) comes in. Granted is a tool that simplifies switching between AWS accounts. Follow the [Granted documentation](https://docs.commonfate.io/granted/getting-started) to install and set it up on your Mac.

## Conclusion

Setting up a new Mac with the right tools can significantly enhance your productivity and make your development experience more enjoyable. By following these steps, you'll have a powerful setup ready for coding, communication, and more. Whether you're a seasoned developer or just starting, these tools will help you get the most out of your new computer. Happy coding!