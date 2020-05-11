# Enterprise GraphQL

GraphQL can be a perfect way to integrate different data sources. Mixing up PIM and CMS data into a single, strongly typed schema. Then - just having the Backend For Frontends (BFF) pattern implemented out of the box. Just by taking these two examples: no wonder this standard is replacing the older REST APIs. Especially when it comes to implementing headless eCommerce applications. Development experience and the performance is one thing. The other question is: how to manage the GraphQL APIs at scale?

To provide the Enterprise-grade level of service levels (SLA) it won’t be enough to just write some Node.js/TypeScripted GraphQL resolvers. It could be a pretty good starting point, however - the maintenance and fine-tuning could be tough. 

In this entry I’ve put some notes based on the research I recently have done for one of our clients. I’d like to showcase some enterprise-level features that should be considered promoting GraphQL API to production. I’ve listed the viable commercial and Open Source options where suitable. 

## Schema Management

Creating complex GraphQL schemas is not that easy. Code-level schema management can quickly lead to conflicts, especially when different units are adding up their contributions. One of the powerful tools for handling this issue is [GraphQL Editor](https://graphqleditor.com/). Online collaboration, visual schema editing are just a few of the features that scale well over the enterprise.

It’s a viable alternative for [Apollo Graph Manager](https://www.apollographql.com/docs/graph-manager/) (commercial product from Apollo team) features - including Schema Explorer, History Versioning (limited).

<video controls width="100%">
    <source src="https://graphqleditor.com/static/easy-9fa22c9788d1745145df77c0a0ea866c.mp4" type="video/mp4">
</video>

## Schema Versioning

When designing the Schema - a very important feature is versioning. You must figure it out before you start the implementation. It’s very often convention over configuration. The Microservices concept strongly beholds to the idea of service-level deployability. You should be able to develop and upgrade the services: by different teams at a different pace. Still - keeping the service contracts. In GraphQL many services (resolvers) can be merged into a single schema (Schema Stitching/Federation or tools like [storefront-api](https://storefrontapi.com) are just for that).


GraphQL itself doesn’t’ force the one and only way of handling the versioning. You can find the best practices over published case studies instead. One of the best options for API versioning I found is the [Shopify API Versioning concept](https://shopify.dev/concepts/about-apis/versioning). They’ve created a really powerful [GraphQL Design Tutorial](https://github.com/Shopify/graphql-design-tutorial) as well. Worth reading - as it’s still a pretty unstandardized field at the moment.

## Continuous Delivery (CI/CD)

Deployability is another topic to discuss. It’s directly related to Schema Versioning. The versioning of your GraphQL resolvers. Apollo GraphQL Manager [lets the developers for hot-updates](https://www.apollographql.com/docs/graph-manager/schema-registry/). They can push out the new services and do upgrades without even stopping the whole service down.

By using the visual schema editor or just code for managing the schema is usually ending up with the couple of `*.graphqls` files that are sourced into `apollo-graphql-server` instance. 

This is good news because it’s making the whole process of schema management suitable for CI/CD pipelines (like Travis, Jenkins, etc). I didn’t find any out-of-the-box open-source, hot-reload solution for graphql schemas however. I can imagine implementing it via just a kind of `nodemon` setup.

The interesting option is the [`graphql-factory`](https://github.com/graphql-factory/graphql-factory) which lets you update the schema programmatically on the fly. However, it doesn't look like a production-grade solution. It’s more like an inspiration than a product.

One way or another - what you really need to consider is the change tracking and service contracts. [GraphQL Doctor](https://github.com/cap-collectif/graphql-doctor) can be a solution. It’s a tool, integrated with Github Tasks.  Works perfectly well by discovering all the breaking changes - before they got deployed.

![GraphQL just found an issue in the schema](gfx/found_issue_in_schema.jpg)

## GraphQL Security Scanning

GraphQL Doctor will help with the automatic schema validation and change tracking. The open question - and a pretty important one is: how can we be sure that our GraphQL implementation doesn’t contain security flaws and vulnerabilities? 

GraphQL implementations as all the data sources are endangered by the information leaks and popular attack vectors. In the end is just a web application. The problem is with security scanning as there are not so many pen-test applications suitable for GraphQL.

Actually I found just one Open Source security testing tool for GraphQL - which is [InQL Scanner](https://github.com/doyensec/inql). If you’ve ever struggled to find vulnerabilities in your GraphQL code, this tool should be able to help. InQL Scanner, developed by Doyensec Research Island initially for their internal use, is now free to use and available on GitHub. It enables you to quickly extract and inspect metadata information. You can then more easily identify security issues which due to the descriptive nature of GraphQL would be otherwise hard to detect.

## Performance metrics

I can’t imagine having the system on the green - up and running - without a monitoring infrastructure. Usually, most of our clients choose [Graylog](http://graylog.org/) or/and [New Relic](https://newrelic.com/) for application monitoring. 

Whereas Graylog is focused around application logging, New Relic is centered around the performance and numeric metrics of your applications and servers: network response times, CPU load, HTTP response times, network graphs, as well as application stack, traces with debugging information.

New Relic is great for Web Applications, however, for the GraphQL you might want to track some additional parameters like:

 - Performance of Resolvers - to get better visibility into how to make individual resolver better,
 - Performance of individual attributes - to get better Visibility into metrics around assigning attributes in types.

Actually there are not so many open source apps for digging deeper with the analytics. Probably, there is just the [query level tracing for Apollo](https://github.com/apollographql/apollo-tracing) which is an open source. By using New Relic - we can set special custom events/metrics in the resolvers code or use the stack-trace tracking. Custom code, over resolvers business logic.

## Access Management

The resolver or query/fields access level settings would be a much appreciated feature for rolling out the production, enterprise APIs. Even the Apollo Graph Manager - considerably the most sophisticated GraphQL suite on the market - doesn’t support it 100%. There is one library I found that can help. It’s the [`graphql-shield`](https://github.com/maticzav/graphql-shield). It’s a quite popular library for creating the authorization middlewares and permission systems for Node.js based GraphQL setup.

## Summary

[Apollo GraphQL Manager](https://engine.apollographql.com/) is seemingly the most mature way to deploy GraphQL on production. 

Some of the features can be covered with Open Source products. It won’t be the solution that 'just works' out of the box and will always require some additional custom development.  The situation looks best for schema management. The graphqleditor.com was used by quite many enterprises to collaborate on the schema. Works really cool with the visual editor and explorer. 

## Further reading

To learn more about releasing the APIs to production I suggest you discover how the production-grade APIs are implemented by market leaders like Shopify and commerce tools

The GraphQL ecosystem is growing rapidly. Here I’ve put just some resources to keep on track:

 - [GraphQL on Production book](https://book.productionreadygraphql.com/)
 - [Awesome GraphQL repository](https://github.com/chentsulin/awesome-graphql)
 - [Shopify GraphQL Design tutorial](https://github.com/Shopify/graphql-design-tutorial)
 - [Shopify API versioning](https://shopify.dev/concepts/about-apis/versioning)
