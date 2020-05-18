# Serverless

**Serverless started gaining traction after 2014. That was the year when
Amazon Web Services introduced AWS Lambda - the first service that
allowed developers to run any arbitrary code without thinking much of
the underlying infrastructure. You just had to upload your Java code to
AWS and start invoking it via events such as HTTP requests -- without
provisioning even a single server.**

The next few years proved the effectiveness of the Serverless approach.
More and more companies found that such an execution model could give
tremendous competitive advantage with the ability to deliver new
functionalities at a superb pace, keeping infrastructure costs at the
lower level and minimising the effort required for maintenance.

In the last few years, I had the opportunity to work both with Startups
and Enterprise-level companies that successfully introduced Serverless,
or even migrated the whole existing infrastructure to that model. In
this chapter, I would like to share my thoughts from those few years
watching the Serverless revolution happen in front of my eyes. I will
also give you a **sneak-peak of the most common architectures used to
build Serverless-based platforms.** From these real life examples, you
will be able to learn of the most commonly used AWS serverless services,
their features and pricing model. Most of the examples in this chapter
are based on AWS, however, keep in mind that a corresponding cloud
offering can also be found on Google's Cloud platform and Azure.

*After you provision Serverless services with your favourite
Infrastructure as code tool, you can almost forget about them for the
next few months.*

## What is Serverless all about?

*[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing) is a cloud-computing execution model in which the
cloud provider runs the server, and dynamically manages the allocation
of machine resources.*

For me, the key differentiator between classic Cloud services (such as
AWS EC2) and Serverless is the **pricing model**. With Serverless, you
pay exactly for the computing power and resources you use. When
nothing's running on your EC2 instance, you still have to pay for it -
your bill is based on how long the **instance** was up, despite the fact
that nothing was running on it. On the other hand, when using the
Serverless equivalent, such as AWS Lambda, the bill would be based on
the duration of your actual **code** **invocation**.

**Scalability** is also fully managed. That's true both for computing
and storage scalability. When your Serverless based eCommerce gains
attention, you don't have to manually add any resources to your Lambda
functions - AWS will automatically increase the number of concurrently
running functions for you. You also don't need to bother yourself with
over-provisioning Databases - in Serverless, you don't have to decide
upfront about your storage capacity - if you use more of it, you just
pay more.

As there are no servers, there's no infrastructure **maintenance** as
such. After you provision Serverless services with your favourite
Infrastructure as code tool, you can almost forget about them for the
next few months. AWS Lambda uptime that I was collecting for a year with
[Pingdom](https://www.pingdom.com/) showed quite a nice value of 100%.

## Disadvantages of Serverless

It isn't a surprise that, especially in the complex world of Cloud,
there isn't a silver bullet. Every technology has some drawbacks. Each
architecture decision should be documented with a list of consequences
- both positive and negative. When making a technological decision,
every stakeholder must be aware of its meaning.

I'll start with a not-so-obvious one - **local development**. As the
technology is new, the ecosystem of tools that allows for local
development of serverless-based services is still quite small.
To overcome that, developers often have to stub Cloud services such as
databases. It's also possible to run a cloud service locally using tools
like [LocalStack](https://github.com/localstack/localstack) that try to emulate the most popular AWS services.
Serverless and event based architectures require from us a high coverage
of unit tests as that is often the only way to test the application
locally.

In the advantages we listed **pricing**. However, you will come across a
lot of scenarios where cost calculation of serverless infrastructure
will give you a much higher value than its non-serverless version. A
Lambda that is running 24/7 is more expensive than an EC2 instance with
similar parameters. However, I found out that in most companies, lack of
maintenance costs and reduction of human effort may be a decisive
factor.

**Performance** is often a moot point when talking about Serverless. A
new term that comes with this technology is "a cold start". That is the
time needed to spin-up a Lambda function or AWS Aurora database for the
first time - after the first invocation or first query to the
database. For Lambda, in the worst case scenario, it can be up to 10--20
seconds (e.g. when running Java based functions inside of VPC) and AWS
Aurora Serverless may need about 30 seconds to respond. However, there
are many techniques that could be used to reduce that time - starting
from warming up the functions and ending with choosing a programming
language with less overhead (such as Python or Node.js).

## Serverless-Powered Services

Before taking a look at the most common architectures that could be used
for building Serverless based platforms, it's nice to know which
building bricks we can choose from.

When looking at the product portfolio of major Cloud providers, we can
see that most of them are already available in the Serverless model,
starting from the most well-known computing platforms, such as AWS
Lambda or Google Cloud Functions, and ending with more exotic
application services such as AWS Cognito, used for authentication.

<table>
    <tr>
        <td><strong>Service Type</strong></td>
        <td><strong>Examples</strong></td>
    </tr>
    <tr>
        <td>Computing</td>
        <td>
            <ul>
                <li>AWS Lambda</li>
                <li>Azure Functions</li>
                <li>Google Cloud Functions </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Databases</td>
        <td>
            <ul>
                <li>AWS Aurora Serverless</li>
                <li>AWS DynamoDB</li>
                <li>Google Cloud Datastore</li>
            </ul>
        </td>
    </tr>    
    <tr>
        <td>Files Storage</td>
        <td>
            <ul>
                <li>AWS S3 </li>
                <li>Azure Blob Storage</li>
                <li>Google Cloud Storage</li>
            </ul>
        </td>
    </tr>    
    <tr>
        <td>Data Warehouse</td>
        <td>
            <ul>
                <li>Google Cloud BigQuery  </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Queuing, messaging</td>
        <td>
            <ul>
                <li>AWS SQS, AWS SNS</li>
                <li>Google Cloud Pub/Sub</li>                
            </ul>
        </td>
    </tr>    
    <tr>
        <td>Content Delivery</td>
        <td>
            <ul>
                <li>AWS CloudFront</li>
                <li>Azure CDN</li>                
                <li>Google Cloud CDN</li>
            </ul>
        </td>
    </tr>    
    <tr>
        <td>Authentication</td>
        <td>
            <ul>
                <li>AWS Cognito </li>
                <li>Google Firebase Authentication</li>                
            </ul>
        </td>
    </tr>    
</table>

## Real Life Serverless Architectures

In this section, we will go through the most common serverless
architectures.

Based on AWS, I will show you how we can compose our architecture to fit
into the serverless model - which services we can choose and
characteristics are. Moreover, you will also learn of key pricing
factors of each architecture.

### Static marketing page

We start with a simple architecture that allows us to host a static HTML
site with all its assets (e.g. images, CSS and JavaScript). For that, we
will use two well-known AWS services - **Amazon CloudFront** and
**Amazon S3**.

#### Architecture

![Serverless architecture example](gfx/image_35.png)

#### Key components

**Amazon CloudFront** is a CDN service that allows us to deploy our
website under a custom domain with a free, auto-renewed SSL certificate.
With enabled caching on the CloudFront edges, we can expect a response
time of about 40 ms across the whole globe.

**Amazon S3** is an object storage service that allows for storage of
our website's static files. It can't be used for dynamic pages (e.g.
PHP), however it suits perfectly as a place to keep files generated with
static site generators (such as [Jekyll](https://jekyllrb.com/) or [Hugo](https://gohugo.io/)).

#### Pricing model

The key components of our monthly bill would be:

-   **Amazon CloudFront -** \$0.085 per transferred GB (*Data Transfer Out to Internet*)

-   **Amazon S3** - \$0.023 per stored GB

To sum it up: such architecture costs almost nothing unless you have
millions of users. That's serverless - you pay purely for the
resources you use, not for the number of hours your server was in
standby.

### Single page application

The SPA architecture consists of two layers:

-   **Frontend** - a static HTML site, commonly using modern JavaScript frameworks like Vue, React or Angular.

-   **Backend -** dynamic code (e.g. Node.js, Python) that handles business logic and stores data in a database.

For the frontend part, the choice is easy as we can just use the
previous architecture. However, as we have here a dynamic part that
moreover has to store data somewhere, we can't end up with Amazon S3. We
have to use cloud services that allow for serverless **computing** and a
**database**. That's why we will use **Amazon API Gateway** for handling
AJAX requests proxied to **Amazon Lambda** which invokes our Node.js
code. For our database we will go with **Amazon DynamoDB**.

#### Architecture

![Another architecture example](gfx/image_36.png)

#### Key components

Besides the previously described Amazon CloudFront and Amazon S3
services, we introduce three new ones.

To model our REST API we use **Amazon API Gateway**. It exposes our API
with the HTTPS protocol. We can further integrate it with **Amazon
Cognito** to add an authentication layer or enable the API Keys feature
to control who can access our API and with what request limits
(throttling). An API Gateway is required as it integrates with Amazon
Lambda as an event source - it can proxy HTTP requests as an input
event to Lambda.

**Amazon Lambda** is a service on which we can run our custom, dynamic
code. It supports a variety of programming languages such as Node.js,
Python, Ruby, Java, Go, C\# and even PowerShell. For most SPAs however,
Node.js is the first choice. Lambda functions automatically scale
horizontally - so under heavier load we are quite safe - AWS can
handle up to 1000 concurrent executions for us. For vertical scaling, we
choose memory that receives our function (between 128 MB to 3008 MB)
which corresponds linearly in proportion to CPU power. We do the
required business logic in Lambda, and store the results in Amazon
DynamoDB.

**Amazon DynamoDB** is the last brick of the architecture. It's a
key-value and document database. It provides consistent, single-digit
millisecond response times. As it's a fully-managed service, we get high
availability and auto-scaling for both computing and storage out of the
box. However, as with every NoSQL, we have to think about our data
design quite differently than in a traditional relational database -
with DynamoDB we focus on how we will query data. Forget about third
normal form and denormalize your data to be easily retrievable.

#### Pricing model

In addition to price components from the previous architecture, we will
be charged for:

-   **Amazon API Gateway -** \$3.50 per million requests

-   **Amazon Lambda -** \$0.0000166667 for every GB-second plus \$0.0000002 for each request

-   **Amazon DynamoDB -** \$1.25 per million write request units, \$0.25 per million read request units and \$0.25 per stored GB-month.

As more complex services are in use in the architecture, we also start
noticing difficulty of the cost calculation. However, we still pay for
the resources we really use, whether that is the number of requests,
gigabytes stored, or GB-seconds (where GB-second is a composite unit
that includes the amount of memory configured for Lambda, and its actual
invocation time).

### Event-driven architecture

The previous SPA architecture is extended with the ability to
asynchronously communicate with external and internal services using
Event-Driven Architecture. **Amazon SNS** and **Amazon SQS** are used to
enable communication between systems in a highly scalable and reliable
way. During execution of our Lambda function, we send notifications to
other systems that a new event happened in the system (e.g. *Order
Placed*).



## Read full story
<table>
<tr>
   <td><a href="https://divante.com/the-new-architecture"><img alt="The Cover" src="https://divante.com/books/books%20mockups/the_new_architecture_1.png" width="280"/></a></td>
   <td>
      <h4><a href="https://divante.com/the-new-architecture">Read full story...</a></h4>
         <p>You can download PDF version of this book - including all case studies + extra materials from it's <a href="https://divante.com/the-new-architecture">official landing page</a></p>
   </td>
</tr>
</table>

