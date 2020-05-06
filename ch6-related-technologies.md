
## Related technologies

### Microservices based e-commerce platforms

There are major open-source platforms that were built using the Microservices approach by design. This section tries to list those that we think could be used as a reference for designing your architecture - or even better - could be used as a part of it.

#### Sylius

Sylius is the first Open Source eCommerce platform constructed from standalone components. What does it mean in practice? Every aspect of the shopping process is handled by individual PHP libraries. While the project itself provides a complete shop solution with a REST API, these decoupled components can be used separately to build Microservice applications.

Let’s say we need to have two services for handling a Product Catalog and Promotions, respectively. The solution would be to take the two components and use them to develop two standalone applications. Before Sylius, you would have needed to write everything from scratch or strip the functionality from an existing eCommerce software.

On top of that, Sylius is based on the highly scalable Symfony framework, which integrates with a wide range of caching solutions, from Redis, Memcache to Varnish. It also provides tools for RAPID API development with JSON/XML support, which allows you to prototype your microservice in a much shorter timeframe and lower the costs of development.

#### Spryker

Spryker is a "Made in Germany" eCommerce platform created with a SOA approach with separated Backend (ZED) and Frontend (YVES) applications. The platform is designed with high throughput and scalability in mind.  It’s not the classic microservices approach - you can learn more about Spryker’s founder’s view on that in Appendix 1 to this book. 

![image alt text](gfx/image_24.jpg)

*Fig. 22: Spryker architecture base on on Yves (frontend facade), ZED (backend services) and separated modules communicating via message queue. Source: **[http://blog.swiftcore.com/2016/03/spryker-ecommerce-platform-architecture-design.htm*l](http://blog.swiftcore.com/2016/03/spryker-ecommerce-platform-architecture-design.html)*.*

The Spryker source code is available on Github: [https://github.com/spryker](https://github.com/spryker). The platform comes with an interesting licensing model - per developer seat (not related to revenues, servers etc…) 

#### Open Loyalty

A loyalty/rewards program that can be easily integrated with eCommerce and/or POS. It’s interesting because of the CDB module (Central Data Base) which is responsible for gathering a 360deg. view of each customer.

Open Loyalty leverages the CQRS and Event Sourcing design patterns. You can use it as a headless CRM leveraging a REST API (with JWT based authorization). 

We’ve seen many cases of Open Loyalty being used as CRM and marketing automation. 

![image alt text](gfx/image_25.jpg)

*Fig. 23: Open Loyalty architecture - each application works as separate service. .*

The platform is open source and you can find the code on Github (https://github.com/DivanteLtd/open-loyalty). More information: [http://openloyalty.io](http://openloyalty.io). 

#### Pimcore

Pimcore is an Enterprise Content platform for:

* CMS - content management..

* PIM - master data management for products.DAM - digital assets management for attachments, videos and pictures.

* E-Commerce Framework - for building checkout features and managing orders.

The Pimcore REST API (NOTE:  https://www.pimcore.org/docs/latest/Web_Services/index.html) can be used to make Pimcore an eCommerce backend for Mobile applications or to extend existing eCommerce platform catalog capabilities, etc.

It’s a open source technology developed in Austria with a really active community and version 5.0 (based on Symfony Framework) on the horizon.

More on Pimcore: [http://pimcore.org](http://pimcore.org).

#### Drupal

Drupal is universal content management framework with configurable abstract entities (content, users, config entities, customers, product, orders, … anything what you specify). In version 8 it has been rewritten on top of Symfony and has universal web services API (REST in core, other protocols in contrib), so it can be used as a decoupled system where you build CMS for your use-case. There are also modules what can [send Push notifications](https://www.drupal.org/project/push_notifications) by [custom rules](https://www.drupal.org/project/rules) etc.

For Drupal there is project [Drupal Commerce](http://drupalcommerce.org) what is modules ecosystem for e-commerce use cases. There is also project [Drupal Commerce Kickstart](https://drupalcommerce.org/commerce-kickstart-2) what is Drupal distrubution with "typical e-shop" configured and ready for use or customize.

### Technologies that empower the microservices architecture

The microservices architecture introduces new concepts that sometimes also require new or different tools compared to the monolithic approach. Also, keeping in mind, that this approach may lead to more complexity of our platform, we should automate as many things as we can from the beginning.

We’ll show you some of the most widely used tools and technologies that could empower your development by making things easier, more automated and are very suitable when diving into Microservices.

#### Ansible

DevOps is an agile way to maintain software. It emphasizes communication between IT and SD (NOTE:  https://pl.wikipedia.org/wiki/DevOps).

Ansible is a tool for automation of DevOps routines. Ansible uses an agentless architecture which means that no additional software is needed to be installed on target machines; communication is done by issuing plain SSH commands. It automates applications deployment, configuration management, workflow orchestration and even cloud provisioning – all in one tool. Shipping with nearly 200 modules in the core distribution, Ansible provides a vast library of building blocks for managing all kinds of IT tasks.

Ansible composes each server (or group of them, named *inventory*) from reusable *roles*. We can define ours, such as nginx, php or magento, and then reuse them for different machines. Roles are next tied together in "Playbooks" that describe the full deployment process.

There’re plenty of well-written, already made Playbooks that you could adapt and reuse for configuring your infrastructure. As an example, when installing Magento you could use: [https://github.com/aslaen/AnsiblePlaybooks/tree/master/ansible-magento-lemp](https://github.com/aslaen/AnsiblePlaybooks/tree/master/ansible-magento-lemp).

To configure our first servers with the nginx web server and PHP, we should first create two roles that will be next used in a final Playbook.

**1. Nginx:**

##### in ./roles/nginx/tasks/main.yml

- name: Ensures that nginx is installed

  apt: name=nginx state=present

- name: Creates nginx configuration from Jinja template file

  template:

    src: "/etc/nginx/nginx.conf.j2"

    dest: "/etc/nginx/nginx.conf"

**2. PHP:**

##### in ./roles/php/tasks/main.yml

- name: Ensures that dotdeb APT repository is added

  apt_repository: repo="deb http://packages.dotdeb.org jessie all" state=present

 

- name: Ensures that dotdeb key is present

  apt_key: url=https://www.dotdeb.org/dotdeb.gpg state=present

- name: Ensures that APT cache is updated

  apt: update_cache=yes

- name: Ensures that listed packages are installed

  apt: pkg="{{ item }}"

  with_items:

    - php7.0-cli

    - php7.0-curl

    - php7.0-fpm

Having these roles, we can now define a playbook that will combine them to set-up our new server with nginx and php installed:

##### in ./php-nodes.yml

- hosts: php-nodes

  roles:

    - nginx

    - php

The last thing we need to do is to tell Ansible the hostnames of our servers:

##### in ./inventory

[php-nodes]

php-node1.acme.org

php-node2.acme.org

Deployment is now as easy as typing a single shell command that will tell Ansible to run the *php-nodes.yml* playbook on hosts from the *inventory* file as root (-b):

$ ansible-playbook -i inventory php-nodes.yml -b

As we defined two hosts in a "php-nodes" group, Ansible is smart enough to run the Playbook concurrently for every server. That way we’re able to make a deployment on a bigger group of machines at once without wasting time doing it one-by-one.

#### ReactJS

React is an open source user interface (UI) component library. It was developed at Facebook to facilitate creation of interactive web interfaces. It is often referred to as the V in the "MVC" architecture as it makes no assumptions about the rest of your technology stack. 

With React, you compose your application out of components. It embraces what is called component-based architecture - a declarative approach to developing web interfaces where you describe your UI with a tree of components. React components are highly encapsulated, concern-specific, single-purpose blocks. For example, there could be components for address or zip code that together create a form. Such components have both a visual representation and dynamic logic.

Some components can even talk to the server on their own, e.g., a form that submits its values to the server and shows confirmation on success. Such interfaces are easier to reuse, refactor, test and maintain. They also tend to be faster than their imperative counterparts as React - being responsible for rendering your UI on screen - performs many optimisations and batches updates in one go.

It’s most commonly used with Webpack - a module bundler for modern Javascript. One of its features - code-splitting - allows you to generate multiple Javascript bundles (entry points) allowing you to send clients only the part of Javascript that is required to render that particular screen.

One of the interesting movements in frontend-development nowadays is an Isomorphic approach. Which means that both frontend and backend are sharing the same code. In this particular case, frontend app can be created in React and backend code run by NodeJS.

#### NodeJS

NodeJS is a popular (de facto industry standard) JavaScript engine that can be used  server-side and in CLI environments. There are plenty of JavaScript Web frameworks available, like Express ([https://expressjs.com/](https://expressjs.com/)) and HapiJS ([https://hapijs.com/](https://hapijs.com/)) - to name but two. As NodeJS is built around Google’s V8 JavaScript engine (initially developed as Chrome/Chromium JS engine) it’s blazingly fast. Node leverages the events-polling/non-blocking IO architecture to provide exceptional performance results and optimizes CPU utilization (for more, read about the c10k problem: [http://www.kegel.com/c10k.html](http://www.kegel.com/c10k.html)).

![image alt text](gfx/image_26.jpg)

*Fig. 24: **Node.js request flow. Node leverages Event polling and maximizing the memory and CPU usage on running parallel operations inside single threaded environment.*

Another cool feature of using JavaScript on the backend is that you can exchange or interoperate with frontend JS code very easily. There is an emerging trend of building Universal apps - which more or less means that the same code base is in use on the frontend and backend. One of the most interesting and popular frameworks for building Isomorphic apps is React Js (https://facebook.github.io/react/).

NodeJS is used as a foundation for many CLI tools - starting from the most popular "npm" (Node Package Manager), followed by a number of tools like Gulp, Yeoman and others.

JavaScript is the rising star of programming languages. It can even be used for building desktop applications - like Visual Studio Code or Vivaldi web browser (!); these tools are coded in 100% pure JavaScript - but for the end users, nothing differs from standard desktop applications. And they’re portable between operating systems by default!

On the server side, NodeJS is very often used as an API platform because of the platform speed. The event polling architecture is ideal for rapid but short-lived requests.

Using "npm" one can install almost all available libraries and tools for the JS stack - including frontend and backend packages. As most modern libraries (eg. GraphQL, Websockets) have Node bindings, and all modern cloud providers support this technology as well, it’s a good choice for backend technology backing microservices.

##### Famous NodeJS users

**PayPal**

*Jeff Harrel, Senior Director of Payments Products and Engineering at ***_PayPal_** (NOTE:  https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/)*:*

*"Node.js helps us solve this (boundary between the browser and server) by enabling both the browser and server applications to be written in JavaScript. It unifies our engineering specialties into one team which allows us to understand and react to our users’ needs at any level in the technology stack".*

**LinkedIn**

*Mobile Development Lead, **[Kiran Prasad*:](http://venturebeat.com/2011/08/16/linkedin-node/) (NOTE:  http://venturebeat.com/2011/08/16/linkedin-node/)

*"One reason was scale. The second is, if you look at Node, the thing it’s best at doing is talking to other services."*

**eBay**

*Senthil Padmanabhan, Principal Web Engineer at eBay* (NOTE:  http://www.ebaytechblog.com/2013/05/17/how-we-built-ebays-first-node-js-application/)*: 
"We had two primary requirements for the project. First, was to make the application as real time as possible–i.e., maintain live connections with the server. Second, was to orchestrate a huge number of eBay-specific services that display information on the page–i.e."*

Other projects that leverage NodeJS:

* Uber - [https://nodejs.org/static/documents/casestudies/Nodejs-at-Uber.pdf](https://nodejs.org/static/documents/casestudies/Nodejs-at-Uber.pdf)

* Netflix - [http://thenewstack.io/netflix-uses-node-js-power-user-interface/](http://thenewstack.io/netflix-uses-node-js-power-user-interface/) 

* Groupon - [http://www.datacenterknowledge.com/archives/2013/12/06/need-speed-groupon-migrated-node-js/](http://www.datacenterknowledge.com/archives/2013/12/06/need-speed-groupon-migrated-node-js/) 

#### Swagger

This powerful tool is too commonly used only for generating nice-looking documentation for APIs. Basically, swagger is for defining the API interfaces using simple, domain-driven JSON language.

The editor is only one tool from the toolkit but other ones are:

* Codegen - for generating the source code scaffold for your API - available in many different languages (node, ruby, .NET, PHP) .

* UI - most known swagger tool for generating useful and nice looking interactive documentation.

Everything starts with a specification file describing all the Entities and interfaces for the REST API. Please take a look at the example below:

{
  "get": {
    "description": "Returns pets based on ID",
    "summary": "Find pets by ID",
    "operationId": "getPetsById",
    "produces": [
      "application/json",
      "text/html"
    ],
    "responses": {
      "200": {
        "description": "pet response",
        "schema": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Pet"
          }
        }
      },
      "default": {
        "description": "error payload",
        "schema": {
          "$ref": "#/definitions/ErrorModel"
        }
      }
    }
  },
  "parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "ID of pet to use",
      "required": true,
      "type": "array",
      "items": {
        "type": "string"
      },
      "collectionFormat": "csv"
    }
  ]
}

 

$ref relates to other entities described in the file (data models, structures etc). You can use primitives as the examples and return values (bool, string …) as well as hash-sets, compound objects and lists. Swagger allows you to specify the validation rules and authorization schemes (basic auth, oauth, oauth2).

{
  "oauth2": {
    "type": "oauth2",
    "scopes": [
      {
        "scope": "email",
        "description": "Access to your email address"
      },
      {
        "scope": "pets",
        "description": "Access to your pets"
      }
    ],
    "grantTypes": {
      "implicit": {
        "loginEndpoint": {
          "url": "http://petstore.swagger.wordnik.com/oauth/dialog"
        },
        "tokenName": "access_token"
      },
      "authorization_code": {
        "tokenRequestEndpoint": {
          "url": "http://petstore.swagger.wordnik.com/oauth/requestToken",
          "clientIdName": "client_id",
          "clientSecretName": "client_secret"
        },
        "tokenEndpoint": {
          "url": "http://petstore.swagger.wordnik.com/oauth/token",
          "tokenName": "access_code"
        }
      }
    }
  }
}

Last but not least swagger the OpenAPI specification format has become more and more a standard and should be considered when starting new API projects. It’s supported by many external tools and platforms - including Amazon API Gateway (NOTE:  http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html).

![image alt text](gfx/image_27.png)

*Fig. 25: Swagger UI generates a nice-looking specification for your API along with a "try-it-out" feature for executing API calls directly from the browser.*

#### Elasticsearch

The simplest way to start with a microservices approach in eCommerce is often to delegate the search feature to an external tool like Elasticearch / Solr or to SaaS solutions like Klevu.com.

Elasticsearch is a search engine available via REST API (updates, reads, searches …). It can be a micro service for catalog operations in eCommerce and it’s often used to leverage the NoSQL scalability of its internal document database over standard SQL solutions. 

Elasticsearch supports full-text search with faceted filtering and support for most major languages with stemming and misspelling correction features.

There are plenty of modules to Magento and other platforms that synchronize product feeds to ES and then provide catalog browsing via ES web-services - without touching the relational database.

Elasticsearch is even used for log analysis with tools like Kibana and Logstash (NOTE:  https://www.elastic.co/products). With its ease of use, performance and scalability characteristics, it is actually best choice for most eCommerce and content related sites.

Elastic is well supported by cloud providers like Amazon and supports Docker.

#### GraphQL

Modeling a great REST API is hard - using and supporting changes in an API over time is sometimes even harder. GraphQL (http://graphql.org) is a query language; a proposition to a new way of thinking about APIs.

Widely used REST APIs are organized around HTTP endpoints. GraphQL APIs are different; they are built in terms of types and fields, and relations between them. It gives clients the ability to ask for what they need directly instead of many different REST requests. All the necessary data will be queried and returned with a single call.

Data definition:

type Project {
  name: String
  tagline: String
  contributors: [User]
}

Sample query:

{
  project(name: "GraphQL") {
    tagline
  }
}

Query result:

{
  "project": {
    "tagline": "A query language for APIs"
  }
}

GraphQL was developed internally by Facebook in 2012 and open-sourced 3 years later with Relay, a JavaScript framework for building data-driven React applications. Nowadays, the GraphQL ecosystem is growing rapidly; both server and frontend libraries are available for many programming languages and developers have dedicated tools for GraphQL API design. Many other organizations, including Github, Pinterest and Shopify are adopting GraphQL because of its benefits.

### Distributed logging and monitoring

Distributed systems require new levels of application monitoring and logging. With monolithic applications you can track one log-file for events (usually) and use some Zabbix triggers to get a complete view of a server's state, application errors, etc.

#### Graylog

With distributed services you have to track a whole bunch of new metrics:

* Network latency - which can ruin the communication between crucial parts.

* Application errors on the service level and violation of service-contracts.

* Performance metrics.

* Security violations.

To make it even worse, you must track all those parameters across several clusters in real time. Without such a level of monitoring, no high availability can be achieved and the distributed system is even more vulnerable to downtime than a single monolithic application.

The good news is that nowadays there are plenty of tools to measure web-app performance and availability. One of the most interesting is Graylog ([http://graylog.org](http://graylog.org)).

Used by many microservice predecessors like LinkedIn, eBay, and Twilio, Graylog centralizes logs into streams.

![image alt text](gfx/image_28.png)

*Fig. 26: In graylog you’ve got access to messages in real time with alerts configured for each separate message stream.*

Graylog is easy to integrate, leveraging HTTP communication, syslog (with UDP support for minimum network load) or third party log collectors like fluentd (NOTE:  http://www.fluentd.org/). It can be integrated with e-mail, SMS, and Slack alerts.

![image alt text](gfx/image_29.png)

*Fig. 27: Alerts configuration is a basic feature for providing HA to your microservices ecosystem.*

One can configure customized dashboards and charts for Graylog to track the performance in near-real time. Graylog is open source with an optional Enterprise version.

#### New Relic

Whereas Graylog is focused around application logging, New Relic is centered around the performance and numeric metrics of your applications and servers: network response times, CPU load, HTTP response times, network graphs, as well as application stack traces with debugging information.

New Relic works as a system daemon with native libraries for many programming languages and servers (PHP, NodeJS …). Therefore, it can be used even in production where most other debugging tools come with too much significant overhead. We used to work with New Relic on production clusters - even with applications with millions of unique users per month and a dozen servers in a cluster.

We used to implement our own custom metrics to monitor response times from 3rd party services and integrations. Similarly to Graylog, New Relic can set up dashboards and alerts.

![image alt text](gfx/image_30.png)

*Fig. 28: The coolest feature of New Relic is stack-trace access - on production, in real time. *

##### New Relic Insights

Data visualization tools and customizable dashboards, allow you to observe business analytics data and performance information at the same time.

By combining application, environment and business data - like transactions, pageviews and order details - into one reporting tool, you can more precisely see how your app performance affects your business.

![image alt text](gfx/image_31.png)

*Fig. 29: New Relic Insights Data Explorer with sample plot.*

##### New Relic Insights NRQL language

You can also use the NRQL (New Relic Query Language) with syntax similar to SQL language to explore all collected data and create application metric reports.

For example, you can attach customer group IDs to order requests to check if particular customer groups have an unusually bad experience during the order process.

![image alt text](gfx/image_32.png)

*Fig. 30: New Relic usage of NRQL with sample output.*

**Take care of the front-end using New Relic Browser**

Another powerful feature allows you to easily detect any javascript issue on the front-end of your application. Additionally, New Relic will show you a detailed stack trace and execution profile.

![image alt text](gfx/image_33.png)

*Fig. 31: The New Relic Browser module displays a list of javascript issues on front-end application.*

