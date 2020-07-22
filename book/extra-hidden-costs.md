# Appendix 3: The hidden cost of microservices: complexity

*[Originally posted on Divante's blog](http://divante.com/blog) by Piotr Karwatka*

Microservices architecture both a buzzword and a genuine sea change in the way software is build. However, like everything in life and business, there are still drawbacks. In a recent article, we spoke about [the key advantages of microservices](https://divante.com/blog/advantages-of-microservices-implementation-divante/) but also touched on some situations when monoliths still make sense. Now we are going to look in more detail at a couple of hidden costs of microservices architecture and how to overcome those issues.

However, before we get into the details, if you are a CTO or tech team leader looking at microservices for your next build, I’d like you to ask yourself a serious question: Why are you considering microservices architecture at all?

### Why build with microservices?

What is that is drawing you to microservices? Perhaps your developers are talking about working with something new and shiny? Or maybe there was an article or some marketing material that presented it as the ultimate way of building the software of the future? Just to be clear, I’m a huge fan of this architecture and co-author of microservicesbook.org, but I’d still recommend doing a little diligence and questioning what you believe microservices can bring to your specific business before making the leap. And once you know the reasons, it’s worth looking at the real costs, some of which are perhaps not so obvious.

## Monolithic architecture v microservices

One of the most popular arguments for getting into microservices architecture is that it can make the software easier to maintain by decomposing and decoupling it into smaller units. 

Most monoliths are not well modularized and their features are not easy to test (unit testing, behavioral testing). It becomes difficult to deploy the changes because of the tight-coupling between the modules it’s quite easy to break some other features.

Amazon, Netflix, Coca Cola, Shopify and eBay are just some of the worlds biggest companies to start building in microservices or switch from monoliths. 

Read: [10 companies that implemented microservices architecture and paved the way for others](https://divante.com/blog/10-companies-that-implemented-the-microservice-architecture-and-paved-the-way-for-others/)

It’s worth noting that the problems with monoliths can be fixed without major re-architecting of your application. For example, Shopify started as a startup with a Ruby on Rails base and now they’re perhaps the only force in the world to compete with Amazon.

*Ruby on Rails is well known for its flexibility with a “convention over configuration” approach that has just a few strict rules on designing the application. You can get results fast and it is a fun and productive way for developers to work. In fact, startups often choose Rails because they need to be fast, validate, and pivot. In essence, if Shopify had started with microservices architecture, complex deployment schemas, and complicated CI/devops processes, they may have failed.*

*Monolithic architecture is the easiest to implement. If no architecture is enforced, the result will likely be a monolith. This is especially true in Ruby on Rails, which lends itself nicely to building monoliths due to the global availability of all code at an application level. Monolithic architecture can take an application very far since it’s easy to build and allows teams to move very quickly in the beginning to get their product in front of customers earlier.*

*Maintaining the entire codebase in one place and deploying your application to a single place has many advantages. You’ll only need to maintain one repository, and be able to easily search and find all functionality in one folder. It also means only having to maintain one test and deployment pipeline, which, depending on the complexity of your application, may avoid a lot of overhead. These pipelines can be expensive to create, customize, and maintain because it takes concerted effort to ensure consistency across them all. Since all of the code is deployed in one application, the data can all live in a single shared database. Whenever a piece of data is needed, it’s a simple database query to retrieve it.*

Source: [Deconstructing the Monolith, Shopify blog](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)

Shopify fixed the issues that monolithic architecture brought by investing a lot into better code organization, componentization, and hermetization. Components provide the closed interfaces the other modules can rely on and the whole deployment process is somehow automated and based on version control, semantic versioning, and these interface contracts.

Think about JavaScript npm packages. They’re developed by different teams, still - by having the proper version control and package managed they become the base of building and maintaining most sophisticated web applications of our times. 

*“No architecture is often the best architecture in the early days of a system […] It’s practical to trade off design quality for time to market. Once the speed at which you can add features and functionality begins to slow down, that’s when it’s time to invest in good design. The best time to refactor and re-architect is as late as possible, as you are constantly learning more about your system and business domain as you build. Designing a complex system of microservices before you have domain expertise is a risky move that too many software projects fall into.”*

Source: [Deconstructing the Monolith, Shopify blog](https://engineering.shopify.com/blogs/engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity)

Read more about the differences between monolithic and microservices architecture in our in-depth analysis article: [Monolithic architecture v microservices](https://divante.com/blog/monolithic-architecture-vs-microservices/)

## Reasons to use microservices architecture

If you’ve considered a proper modularization and still want to go with microservices, it means you’ve probably identified a number of reasons why microservices are the best or only way for you to go.

Deployability is one major factor which gives freedom to your separate teams to release and test out new features without waiting for others to complete and integrate them. This is one of the reasons [Kelly Goetsch gave during my interview with him](https://www.youtube.com/watch?v=3PG7JaO01VY) in regards to why Oracle started microservices investments in early the 2000s. 

<iframe width="720" height="405" src="https://www.youtube.com/embed/3PG7JaO01VY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Another advantage of microservices architecture is that components can be written in totally different languages, even using different tech stacks, but still be integrated by just HTTP/REST/GraphQL contracts. 

You can find a lot of enterprise grade services you can use for your application and save significant time by using top-notch enterprise products. You can also find a whole set of services starting with the wide portfolio of Amazon, Google, and Azure hyper-clouds and then leading to specialized platforms like [commercetools](https://www.divante.com/services/commercetools-development) and engines like Algolia (for search) and Nosto (for recommendation). This is what MACH architecture is all about and we’re strong supporters of the MACH Alliance which aims to show how businesses can benefit from open tech ecosystems that are Microservices based, API-first, Cloud-native SaaS and Headless..

## The complexity of microservices implementation

The problem with the services you own is that you need to keep them up and running. If you’ve got a small team (say less than 20 developers), it can be challenging to maintain, deploy, monitor, and keep the 24/7 SLA for a few dozen services. You need to have a DevOps inside your team.

The developers working on the software you deploy usually won’t be ready and won’t like to be on the pager 24/7 having the SSH terminal always on ready to react for any kind of issue their service will face. You must ensure the proper error and failure handling, network traffic balancing and redundancy. Then the team need to be in charge of the whole thing 24/7

When building [Storefront Cloud](https://www.storefrontcloud.io/), it took us a good few weeks to organize the Level 1 and Level 2 application support and the [SWAT team](https://divante.com/blog/system-failure-engage-swat-team/) that provides the SLA for the infrastructure and the application, log monitoring, KPIs, and so on

## Microservices development: what you use vs. what you own

If your next application is gonna be a modular, monolithic or microservices-based, it will use some services. The most important issue to resolve is which services you’d like to own and which you like to buy in order to keep out of the trouble and the hidden costs.

Having your application based on enterprise grade services—maintained and serviced by the provider—is a totally different situation to having your core business system fully decoupled and maintained by your team. I think that the power of the cloud computing is that you don't have to take care of the details and can actually fully outsource the DevOps to the service provider.

The ownership problem is the key question to answer. The services businesses would like to have are the ones that make a difference for customers or are key to the business model. These change a lot; it may be the frontend application or the product configurator. They are usually the processes that are quite common and are not customized ones like invoicing, general ERP features, or WMS. These services increase your overall costs of ownership without giving back the proper business values. I’d recommend you to avoid owning these services and just integrate them altogether.


<script>export default {created () { if (typeof this.$ssrContext !== 'undefined') this.$ssrContext.userHeadTags+=`<link rel='canonical' href='https://divante.com/blog/>`;}}</script>
