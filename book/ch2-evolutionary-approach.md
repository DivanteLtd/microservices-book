# Evolutionary approach

Martin Fowler, one of the pioneers  (NOTE:  https://martinfowler.com/articles/microservices.html) of microservices used to say: 

"*Almost all the successful microservice stories have started with a monolith that got too big and was broken up.*

*Almost all the cases where I've heard of a system that was built as a microservice system from scratch, has ended up in serious trouble."*

![image alt text](gfx/image_2.jpg)

*Fig. 2: Initial, monolithic architecture began after 4 years of development of a large-scale, 100M EUR/yr B2B platform.*

When you begin a new application, how sure are you that it will be useful to your users? Starting with microservices from day one may significantly complicate the system. It can be much harder to pivot if something didn’t go as planned (from the business standpoint). 

During this first phase you need to prioritize the speed of development to basically figure out  what works. 

![image alt text](gfx/image_3.jpg)

*Fig. 3: The very same system but after architecture re-engineering; now the system core is built upon 10 microservices.*

Many successful E-Commerce businesses  (if not all of them!) started from monolithic, at some point, all-in-one platforms before transitioning  into a service oriented architecture. 

Re-engineering the architecture requires a team effort of 6-12 months (18 months in Zalando’s case) - and therefore it should have a solid business foundation.

The most common reasons we’ve seen to initialize a transformation are the following:

* With four to five  years of development, the scope of the system is so broad that implementing changes in one of the modules affects other areas and despite having unit-tests, making deep changes to the system logic is quite risky.

* Technical debt in one system area is accrued to a level at which it’s extremely hard to resolve without major changes.Performance challenges exist in the product catalog, pricing/promo rules or central user database areas.

* There is a need to coordinate separate teams or vendors in a way which leads to minimal interference between them.

* The system is hard to test and deploy.

* There is a need to implement continuous deployments.

## Strangler pattern

The “Strangler pattern” is all about the second one — how to incrementally improve your existing, legacy code base.
Martin Fowler describes the [Strangler Application](https://www.martinfowler.com/bliki/StranglerApplication.html):

> One of the natural wonders of this area is the huge strangler vines. They seed in the upper branches of a fig tree and gradually work > their way down the tree until they root in the soil. Over many years they grow into fantastic and beautiful shapes, meanwhile  strangling and killing the tree that was their host.

In Software Engineering Strangler Pattern means you’re putting some Services Facade in front of your Legacy platform and start refactoring the features one-by-one to new micro-services. For the client’s it’s transparent if the services are executed by legacy or new — refactored code.

Here are some [guidelines by Michiel Rook](https://www.michielrook.nl/2016/11/strangler-pattern-practice/) how to accomplish the microservices-architecture leveraging on Strangler pattern:

> To get there, the following steps were followed:
> 1. First, add a proxy, which sits between the legacy application and the user. Initially, this proxy doesn’t do anything but pass all traffic, unmodified, to the application.
> 2. Then, add new service (with its database(s) and other supporting infrastructure) and link it to the proxy. Implement the first new page in this service. Then allow the proxy to serve traffic to that page[..]
> 3. Add more pages, more functionality, and potentially more services. Open up the proxy to the new pages and services. Repeat until all required functionality is handled by the new stack.
> 4. The monolith no longer serves traffic and can be switched off.

### The Headless approach
In eCommerce, Strangler Pattern could be implemented altogether with a Headless approach to the frontend. If you’re based on some Hybris, Magento 1, Prestashop or another monolithic platform — this can be a well-effected way to go for you.

In this case, you invest into re-designing and re-writing the frontend to some fancy tech stack like [Vue Storefront](https://vuestorefront.io) or a dedicated frontend. Then, in the next steps, you’re getting out the data from the monolith via existing or new API methods. Maybe moving some inefficient logic to separate services (for example when the catalog is too slow one can consider using ElasticSearch instead, the same with pricing/stock server, etc.).

By doing so, you get the apparent value for the customers (new, better-performing frontend with higher CRO) — and have a clear path for re-platforming or refactoring the legacy code. The frontend is just the facade in here.
