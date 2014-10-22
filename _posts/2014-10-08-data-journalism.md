---
date: 2014-10-08 22:55:00
layout: post
title: "Data Journalism: Riots, Fires, and Spreadsheets"
description: "Why do tech advisors cringe when users prefer spreadsheets over our perfect data solutions?"
tags: [data, journalism, technology, Twitter, data visualization]
suggested_tweet:
  url: 'http://alecreynolds.com/2014/08/data-journalism-riots-fires-spreadsheets/'
  text: 'Irreverant Outsider Comments on Data Journalism by @reynoldsalec'
  hashtags: ['hackshackers', 'dataviz']
  related: ['jekyllrb']
---

It's amazing to some of us in the software engineering trade, but outside our perfect world of relational, non-relational, and completely anti-social databases (I've met a few old MSSQL databases that WILL bite), the rest of humanity persists in thinking that the spreadsheet is a useful way of structuring data.

Case in point: tonight I had the privilige of watching Simon Rogers, a pioneering "data journalist", who came to prominence divining stories out of data for the Guardian and now makes his living at the Ur-source of data, Twitter. Throughout his presentation, he showed delightfully simple yet powerful and dynamic presentations of data. It was the kind of presentation that illicits audible "ooos" and "awws" from the audience, a great demonstration of the story-telling power of what was formerly just associated sets of numbers, text, and geolocation data. Here's Simon's process:

![The Guardian's Data Workflow](/assets/img/posts/guardian-data-workflow-001.jpg)

Notice step 2, "Spreadsheet". That's where the action happens, where everything comes together. In the aftermath of the London riots, Simon helped the Guardian collect data from metropolitan courts. At first, the courts refused to release the data, but after an edict from the national government, complied with reems of data in physical documents, PDFs, cuneiform tablets, etc. How did the Guardian team turn this into data? In Simon's words, "in the age old method of bringing in interns" to move all the data into spreadsheets.

Interns. And. Spreadsheets. This is something everyone who has worked in an office for the last twenty years can understand, but a fact that consultants like myself can easily forget. We view the CSV as an "export", something to be quickly discarded as a secondary product of our perfect data systems, the offal of our CMS. However, for most the world, this is the most accessible format for editing and organizing data.

Why this discrepancy? For many technical advisors, we have a bias against human sorted data. We've seen too many spreadsheets filled with values that could easily be standardized ("US". United States". "United States   ".). We hate how long it takes to load and parse them. We want complex relationships that are not as easily represented.

It's time to discard (some of) this wariness in favor of a more pragmatic view. For small and even medium-sized software projects, many users can be well-served by a simple spreadsheet. Many of us need to look at Google Forms as a model for usability and accessbility, lest we fall into a trap of premature optimization. Some thoughts from around the web to meditate on:

- [Sorry, Geeks, Microsoft Excel is Everywhere](https://davidmichaelross.com/blog/microsoft-excel-is-everywhere): Good brief history of spreadsheets, making the valid point that spreadsheets are basically "Regular people using computers...sorta-kinda programming!"
- [The Great Spreadsheet Debate: Why I Hate Spreadsheets](http://www.freeagent.com/central/spreadsheet-debate-why-i-hate-spreadsheets): This is where all us technical folks are coming from. Sidenote, apparently this spreadsheet battle is something that FreeAgent is capitalizing on. I suspect this debate has probably been around since Lotus 123, which probably makes it older than I am.