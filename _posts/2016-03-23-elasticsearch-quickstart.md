---
date: 2016-03-23 08:00:00
layout: post
title: "Elasticsearch and Kibana Quickstart"
description: "The ELK stack (Elasticsearch, Logstash, and Kibana) offer great
ways to sort and make use of large quantities of log data. Here's a quick guide
to getting going with Elasticsearch and Kibana."
tags: [Elasticsearch, Kibana, programming]
suggested_tweet:
  url: 'http://www.alecreynolds.com/2016/03/elasticsearch-quickstart/'
  text: 'Elasticsearch and Kibana for the people.'
  hashtags: []
  related: []
---

Note, this is a guide for Mac OSX, you can probably get some mileage on Linux, but Windows users will want to look elsewhere.

## Elasticsearch Quickstart + Demo Dataset

- Follow instructions [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/_basic_concepts.html)

- If you need to install Java, the install from Oracle worked better than homebrew for me.

- Use the accounts.json demo data to populate an index, as shown [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/_exploring_your_data.html)

- Now you're ready to start visualizing data.

## Kibana Quickstart

- Install Kibana

- Before starting it, also [install Sense](https://github.com/elastic/sense), which will help you run queries against Elasticsearch more easily than constructing CURL calls all the time.

- Once in Kibana, enter the name (or the pattern, using wildcards) of the index you want to visualize in the "Settings" tab. You can add further indexes/patterns later.

### Discover Data

- Click the "Discover" tab. Here you can explore your data dynamically by using the Kibana query syntax or the Elasticsearch DSL (json) to perform searches in the search bar and applying filters from your index's fields (left-hand sidebar).

- If you don't see any data, make sure the timeframe (selected in the upper right hand corner) is applicable to your dataset.

- Kibana uses the [Lucene query parser syntax](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html), which is very stripped down. Think of it more like Google Mail search options, not like full-blown SQL.

- If you want more power, go with the [Elasticsearch DSL](http://www.elastic.co/guide/en/elasticsearch/reference/current//query-dsl.html). Warning: Only the query/filter part of the query DSL works in the Kibana search bar, so you'll be limited on using things like aggs and other functionality.

#### Resources
- Official Discover Tab Doc: https://www.elastic.co/guide/en/kibana/current/discover.html
- Good Overview: https://www.timroes.de/2015/02/07/kibana-4-tutorial-part-2-discover/
- Lucene Query Parser Syntax: https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
- Elasticsearch DSL: http://www.elastic.co/guide/en/elasticsearch/reference/current//query-dsl.html

### Visualize Data

- Click the "Visualize" tab. Here we'll make charts, graphs, and other visualizations.

- You can filter your data down using the "search" bar with the same options as the "Discover" tab allows.

#### Resources

- Official Visualize Tab Doc: https://www.elastic.co/guide/en/kibana/current/visualize.html


## Advanced Elasticsearch + Kibana Tips

### Changing Mappings

- Strings are automatically classified as "analyzed" fields. This means that portions of them are indexed so complex searches for portions of strings can be performed more quickly.

- This is great if you want to find a word in a sentence, but terrible if you want to find the number of unique ids in a given data set, since a "unique count" or agg of those ids will search across a portion of them.

- In the case of these types of data, it's better to remap them to non-analyzed fields, which will be processed as an entire value.

- The easiest way to do this on Qbox is to open up elasticsearch-kopf and go to the "rest" tab or use Sense to make requests.

- Because you can't change mapping information on the fly, we'll need to create a new index, then reindex our data into it, finally deleting the old index.

- First, create a new index with the desired changed mappings (you can retrieve those by doing a GET indexname/_mappings). I've shown modifying a field to "not_analyzed". It's good to version your changed mappings for the document type:

PUT my_index_v2

{
    "mappings": {
        "my_type": {
          "some_field": {
            "type": "string",
            "index": "not_analyzed"
        }
      }
    }
}

- Second, populate the new index with data from your previous index using logstash. Note -f flag for specifying the custom logstash.conf:

bin/logstash -f logstash.conf

- Third, delete the old alias (if it exists) and create a new alias from your new index (my_index_v2) to whatever you want your canonical index alias to be (say "my_index", for example):

curl -XPOST localhost:9200/_aliases -d '
{
    "actions": [
        { "remove": {
            "alias": "my_index",
            "index": "my_index_v1"
        }},
        { "add": {
            "alias": "my_index",
            "index": "my_index_v2"
        }}
    ]
}
'

Alternatively, if you're correcting old wrongs, delete your original index:

curl -XDELETE localhost:9200/my_index_v1

WARNING: I've had mixed success with this method. A VERY easy way of addressing this problem is to use logstash's built-in feature that creates a "raw" (not analyzed) version of each field by default. The easiest way to make use of this is to simply to...

1. Create a new index with the same mappings as your exisitng one. Make sure you name this index "logstash-yourawesomename"; logstash will only use its default pattern that creates the .raw fields if the index starts with "logstash-".
2. Create a simple logstash.conf to move your existing index to the new one.
3. Execute!

After refreshing your field mappings in Kibana, you should see your fields now have counterparts with a ".raw" prefix (ex: a "message" field might become "message.raw"). Use those for unique counts and other areas where you want to match the exact value, not analyzed portions of it.

#### Resources
- Mapping Reference: https://www.elastic.co/guide/en/elasticsearch/guide/current/mapping-intro.html
- Changing Mappings with Zero Downtime: https://www.elastic.co/blog/changing-mapping-with-zero-downtime
- Re-indexing with Logstash: http://blog.sematext.com/2015/05/04/recipe-reindexing-elasticsearch-documents-with-logstash/
- Details on Logstash Filters: https://www.elastic.co/guide/en/logstash/master/filter-plugins.html
- Logstash Docs: https://www.elastic.co/guide/en/logstash/current/introduction.html
- Information on Elasticsearch Logstash format: https://www.elastic.co/guide/en/logstash/current/plugins-outputs-elasticsearch.html
- Acceptable filter options to change Elasticsearch values with Logstash: https://www.elastic.co/guide/en/logstash/current/plugins-filters-mutate.html#plugins-filters-mutate-convert


### Unique Counts

- In the Elasticsearch DSL, distinct counts are pretty simple using cardinality aggs: https://www.elastic.co/guide/en/elasticsearch/guide/current/cardinality.html

- However, if you're looking at representing a distinct count in Kibana, you're a little more limited, since the Kibana search bar doesn't accept aggs.

- First, go to Visualize and create a new bar graph for the data you want to perform a distinct count on.

- Second, select "Unique Count" from the Y-Axis options and select the field you want to do a distinct count on.

- If the results are obviously incorrect, you might see a warning regarding an "Analyzed" field. This probably means that the distinct count is running on the separately indexed pieces of a string, not treating the string as a single unit (as you would want it to with a UUID of some sort). If this is the case, follow my instructions on how to change mapping for the field to be "not_analyzed".

### Grouping Similar(ish) Text Strings

- Say you want to see the top 5 log entries, but of course the log entries won't be EXACTLY the same.

- To do this, Elasticsearch needs to analyze the field data in a more intelligent way. We'll want to tweak analyzer settings.

#### Resources

- Docs on Analyzers: https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html