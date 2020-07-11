# portforward
This is a simple node/express app that lets my son change the port forwarding rule on our home router for his Minecraft port-forwarding rule.

It uses a hidden REST api that I reverse-engineered to talk to our **Ubiquiti Unifi Security Gateway** and change the forwarded port.

# Install
Assuming you actually have a **Ubiquiti Unifi Security Gateway**, simply copy the `config.dist.js` to a file called `config.js` at the top-level of the app, and edit it to include your login username / password for your ubiquiti interface with the proper server name / port.

Then, just run `npm install` to get all of your libraries installed properly.

After that, you should be able to launch it using `npm start`.

# FAQ
Here are the 2 most common questions and answers:
1. What URI do I set in the `config.js` file ?
> The same url that you login to to access your Ubiquiti configuration
2. What do I set my `rule` value in the `config.js` file to in order to access the right **Port Forwarding** rule on my firewall ?
> If you login to the web interface for your Ubiquiti setup, go under **Settings**, then **Routing & Firewall** and then choose the **Port Forwarding** tab.  Locate the rule you want to use in the list, then right-click on the **name** of the rule and choose *Inspect*.  Directly **above** the name of your rule in the HTML will be a **`<tr>`** tag that has a `data_id` attribute in it.  Copy that value and paste it as your `rule` in the `config.js` file.  That is your rule's unique ID in your firewall.