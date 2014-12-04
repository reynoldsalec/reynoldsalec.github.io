---
date: 2014-11-10 21:00:00
layout: post
title: "BADCamp Notes and Happenings"
description: "All the news from the Bay Area Drupal Camp 2014 that's fit to print."
tags: [technology, Drupal, business]
suggested_tweet:
  url: 'http://alecreynolds.com/2014/11/7/badcamp-2014/'
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

##Saturday
Sadly less sessions were visited on Saturday.

###<a name="drupal-commerce">@ryanszrama Drupal Commerce in Drupal 8</a>

Ryan is surprised at how many people have actually launched sites on [Commerce Kickstart](http://drupal.org/project/commerce_kickstart), the demo framework for Drupal Commerce. What was intended a demo has become a viable out-of-the-box solution for a small- to medium-sized online merchant. Winning combo of streamlined admin, responsive theme, content-rich product catalogue with zooms, slideshows, and other effects to highlight merchandise, faceted product search, and integrated payment gateways.

Drupal Commerce 2.0 wants to take some of the functionality from Kickstart and integrate it into core Commerce. The Commerce team started from scratch. Some big differences and improvements include...

- Improved data model that moves from basic 5 entity types (product/order/line item/customer profile/payment transaction) to nine, adding a store model, invoice, and payment allocation models. These should allow for better handling of complex business logic like refunds and handling of multi-store/multi-vendor setups.
- A hierarchical product model for handling variations on products. For example, different colors/sizes of shirts should inherit attributes from the parent shirt product.
- Flexible workflows for "order status": imagine if you could define a mandatory workflow for different types of orders that it must go through a flow of order statuses with permissioning and actions required to move the order status.
- Discount handling in core. 

Ryan views stand-alone PHP libraries that tackle universal commerce problems, like tax management, address management, currency handling, etc. as being valuable contributions from the Commerce project to the greater PHP ecosystem. Some libraries include...

* [Internationalization](https://github.com/commerceguys/intl)
* [Addressing](https://github.com/commerceguys/addressing): Uses a Google dataset to build dynamic address forms appropriate to different regions.
* [Pricing](https://github.com/commerceguys/pricing)
* [Zone](https://github.com/commerceguys/zone): International taxation zones.
* [Tax](https://github.com/commerceguys/tax): International taxation zones.

Commerce Guys hopes to maintain single libraries for these core commerce problems that MANY PHP commerce projects can use; already Symfony folks are contributing to these libraries. Drupal 7 may even benefit from the Addressing library in a backport.

##MORE NOTES TO FOLLOW.

I'm traveling summit to summit, session to session, and will be updating this throughout the camp!