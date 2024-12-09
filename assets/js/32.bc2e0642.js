(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{340:function(e,t,o){"use strict";o.r(t);var a=o(5),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("tl;dr: Algolia DocSearch is a great search solution that's free for open source documentation. You should use it!")]),e._v(" "),t("p",[e._v("Lando has great docs, thanks largely to my co-maintainer and key Lando brain trust Mike Pirog. Since 2019 we've used Algolia DocSearch to index the docs and provide a convenient search interface.")]),e._v(" "),t("p",[e._v("HOWEVER, with shifting of maintainers, we lost access to the Algolia application dashboard. In the meantime, the structure of the Lando docs changed and our Algolia application (namely the crawler actually indexing our documentation) ceased to index the new documentation. Thanks to good redirects, our search was still largely accurate/helpful, but was quickly falling out of repair, serving more 404s and failing to update new information.")]),e._v(" "),t("p",[e._v("So in my copious free time I decided to untangle the ball of strings and re-boot our Algolia DocSearch integration.")]),e._v(" "),t("h2",{attrs:{id:"_1-apply-for-the-program"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-apply-for-the-program"}},[e._v("#")]),e._v(" 1. Apply for the Program")]),e._v(" "),t("p",[e._v("Fill out the form: https://docsearch.algolia.com/apply")]),e._v(" "),t("p",[e._v("Algolia should get back to you with a search API key, index name, and an invite link so you can get access to your Algolia application dashboard. MAKE SURE YOU ACCEPT this invite link, it's easy to miss!")]),e._v(" "),t("p",[e._v("If your index looks properly populated, you may be able to skip directly to step #4 and install the frontend search code.")]),e._v(" "),t("p",[e._v("However, in our case we needed to setup the Crawler from scratch, since our index was out-of-date")]),e._v(" "),t("h2",{attrs:{id:"_2-link-the-crawler-to-your-netlify-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-link-the-crawler-to-your-netlify-project"}},[e._v("#")]),e._v(" 2. Link the Crawler to Your Netlify Project")]),e._v(" "),t("p",[e._v('On your Algolia dashboard\'s "Overview" page, you should see a link to "Install on your platform". Click that link and select the "Netlify" option.')]),e._v(" "),t("p",[e._v("This will lead you through an authentication prompt, followed by a search interface to select one of your Netlify projects.")]),e._v(" "),t("p",[e._v("When you select a Netlify project, Algolia will setup a crawler integration and add two environmental variables to your Netlify project to link it with the crawler.")]),e._v(" "),t("p",[e._v("In your Algolia dashboard, you should see a new application created. Create an index in that application.")]),e._v(" "),t("h2",{attrs:{id:"_3-redeploy-your-netlify-project-to-start-indexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-redeploy-your-netlify-project-to-start-indexing"}},[e._v("#")]),e._v(" 3. Redeploy Your Netlify Project to Start Indexing")]),e._v(" "),t("p",[e._v('To fill the index, go to your Netlify deploys, find the latest production deployment, and select the "Retry with latest branch commit" action under the "Options" dropdown button.')]),e._v(" "),t("p",[e._v("Redeploying your Netlify project will start Algolia indexing; go to your index to see it fill up with records.")]),e._v(" "),t("h2",{attrs:{id:"_4-install-front-end-search-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-install-front-end-search-code"}},[e._v("#")]),e._v(" 4. Install Front End Search Code")]),e._v(" "),t("p",[e._v("Finally, install the correct front end code; likely you'll be using something like this: https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/#install-the-frontend-bundle")]),e._v(" "),t("p",[e._v("Happy searching!")]),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docsearch.algolia.com/docs/what-is-docsearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official DocSearch Docs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://crawler.algolia.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia Crawler Dashboard"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netlify Crawler Quickstart"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);