## Creating your virtual assistant using telegram messaging application developed on Node.JS

### J.A.R.V.I.S
![alt text](/assets/jarvis.jpg)


*1* - When you open Telegram search for **@BotFather** and type the command:

```sh
/newbot
```

Create your bot and wait for a message with the API token as shown below:

```sh
Done! Congratulations on your new bot. You will find it at t.me/HannibalChatBot. 
You can now add a description, about section and profile picture for your bot, 
see /help for a list of commands. 
By the way, when you've finished creating your cool bot, 
ping our Bot Support if you want a better username for it. 
Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
979476231:AAEjHGfVaRpGkhDSZkc7VPip980-iTudwtI
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

*2* - Download or clone the repository `https://github.com/ahsouza/j.a.r.v.i.s` 

*   **env.example** - This is the file to configure your bot token created by **Telegram**
    
  *   line **01** Add the token in the environment variable example parameter

  Rename the file to `.env`

  ```sh
cp .env.example .env
  ```
*3* - Run some functional bot with

```sh
node exemplo-bot-funcional.js
```

or upload the docker bot by changing the dockerfile file in the CMD parameter argument and execute:

```sh
docker build -t j.a.r.v.i.s-telegram .
```