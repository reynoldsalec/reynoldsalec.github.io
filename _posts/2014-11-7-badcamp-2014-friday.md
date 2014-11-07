---
date: 2014-11-10 21:00:00
layout: post
title: "BADCamp Notes and Happenings"
description: "All the news from the Bay Area Drupal Camp 2014 that's fit to print."
tags: [technology, Drupal, business]
suggested_tweet:
  url: 'http://alecreynolds.com/2014/10/11/badcamp-2014/'
  text: 'Irreverant Comments on #BADCamp 2014 by @reynoldsalec'
  hashtags: []
  related: []
---

##Friday: Front-end Summit

This summit had a couch on the stage. Already a different tone set. Some cool things I learned:

###<a name="quail">Quail: Accessibility Testing</a>

As speaker so elequontly put, "we are all temporarily abled": everyone will have to deal with some variety of disability, and as I squinted to see all the way to the stage (damn computer monitor eyes!), it was easy for me to remember the importance of web accessibility.

Quail is a jQuery plugin that helps make sure that accessbility standards (like the 50+ in WCAG 2.0) are fulfilled. For Drupal users, it's integrated into the [Accessibility](https://www.drupal.org/project/accessibility) module. Although the speaker noted that Quail isn't quite production ready, it's a great starting point. Former Kalamunoid Steven Bassett made a very good comment that the verbosity of Quail means it can often encourage excessivly slavish accessibility implementations that can confuse people using screenreaders and others with reading disabilities.

###<a name="justafish">@justafish: Views, drupal_add_js, and other things that annoy her</a>

hook_page_build() and the #attached attribute instead of drupal_add_js so you won't have JS added to non-HTML requests. I'm kind of curious about this, particularly considering drupal_add_js [is being deprecated](https://api.drupal.org/api/drupal/core%21includes%21common.inc/function/_drupal_add_js/8) in Drupal 8.

She dislikes Views: writes custom code using Entity Field Queries to grab the entities you want to display, and then renders using Entity View Modes. HERESY! But very efficient heresy that doesn't leave a bunch of Features-generated code cruft that's impossible to QA in a diff. If you must use Views, justafish recommends using Entity View Modes to generate the individual pieces.

##MORE NOTES TO FOLLOW.

I'm traveling summit to summit, session to session, and will be updating this throughout the camp!