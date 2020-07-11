# portforward
This is a simple node/express app that lets my son change the port forwarding rule on our home router. It uses a hidden REST api that I reverse-engineered to talk to our Ubiquiti Unifi Security Gateway and change the forwarded port.

# Install
To install, assuming you actually have a Ubiquiti Unifi Security Gateway, simply copy the config.dist.js to a file called config.js at the top-level of the app, and edit it to include your login username / password for your ubiquiti interface with the proper server name / port.

Then, just run npm install to get all of your libraries installed properly.

After that, you should be able to launch it using npm start.
