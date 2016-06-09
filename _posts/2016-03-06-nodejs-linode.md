---
date: 2016-03-06 08:00:00
layout: post
title: "NodeJS on Linode"
description: "Fast instructions on how to get a basic Node app running on
Linode hosting."
tags: [Linode, NodeJS, programming]
suggested_tweet:
  url: 'http://www.alecreynolds.com/2016/03/nodejs-linode/'
  text: 'Easy, reliable NodeJS hosting, setup FAST on Linode.'
  hashtags: []
  related: []
---

## Intro

Unite all the nodes!

Linode provides inexpensive, reliable servers. If you want to "set and forget"
a Node app (or multiple apps), Linode can be a good option. Although I've since
started using Docker Cloud for most of my microservice hosting needs, here's
how I used to run Kalabox.io, the Kalabox API documentation, and our system
dashboard on Linode:

## Steps

1\. Upload your Node app to your desired webroot on Linode

    scp -r yourstuff user@IP:/path/to/webroot

Note that this assumes you either have your SSH key setup on your Linode server
OR that you have your user's credentials handy.

2\. Install Node on linode

```
cd ~
wget [LATEST TAR FOR LINUX]
mkdir node
tar xvf node-v*.tar.?z --strip-components=1 -C ./node

# Remove cruft and create node directory in our home directory
cd ~
rm -rf node-v*
mkdir node/etc

# Link up npm to installed node packages
echo 'prefix=/usr/local' > node/etc/npmrc

# Get your node executable alongside other binaries
sudo mv node /opt/
sudo chown -R root: /opt/node

# Get your node executable into path
sudo ln -s /opt/node/bin/node /usr/local/bin/node
sudo ln -s /opt/node/bin/npm /usr/local/bin/npm
```

If `node -v` runs, we're good!

3\. Use PM2 to keep the node process STAYIN' ALIVE

  In the case that our Node app goes down for some reason or our server is
  restarted, we want to make sure our application is restarted automatically!
  Fortunately, a tool called pm2 (process manager) makes this easy:

  ```
  sudo npm install pm2 -g

  #Have PM2 start things up and keep it up:
  pm2 start server.js

  #Run PM2 on server start so you don't have to do it manually on restarts:
  pm2 startup debian

  #Note you'll need to put your Linux distro in here. It should output a command that you'll run with root permissions:
  ```

## Advantages/Disadvantages

If you're looking to have a handful of Node apps running for a long time without
many (if any) changes, doing this setup once is probably a good solution.

However, if you'll be making frequent changes, have a need to scale your apps
quickly, or are introducing complicated dependencies, I highly recommend
hosting your Node apps using Docker and a Docker "Infrastructure as a Service"
(IaaS) provider like Docker Cloud. It may cost more initially and introduce
further complexity, but the dividends are great.

Stay frosty friends!

## Resources

- https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04
- http://www.sitepoint.com/creating-and-handling-forms-in-node-js/