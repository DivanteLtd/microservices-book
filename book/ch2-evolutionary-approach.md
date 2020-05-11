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