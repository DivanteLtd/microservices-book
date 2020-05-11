# Appendix 3: Switching to Headless eCommerce with Vue Storefront & commercetools.

In this interview we discuss the case study of LoveCrafts. Migration from Magento1 into headless architecture with the commerce tools as a backend and [Vue Storefront Next](https://blog.vuestorefront.io/vue-storefront-accelerating-enterprise-commerce-initiatives-with-commercetools/) as a frontend solution. Why this stack? How to plan the migration? How to select the right backend platform? The desired architecture.

**Halil Köklü - CTO at LoveCrafts**

LoveCrafts is one of the largest crafting community websites and marketplaces in the world, shipping to over two hundred countries.
Halil and his passionate team are weaving together commerce, community, and content for the world of makers.
Prior to joining LoveCrafts in 2013, Halil led technology at Rocket Internet and Namshi, the largest online fashion retailer in the Middle East.

**Piotr Karwatka:** LoveCrafts was using Magento, and you know this system from the inside out. However, as we all started to realize, there are growing doubts about the future (especially given its end-of-life in June 2020) of this and similar all-in-one systems. What technology stack do you currently use and why is it not just Magento?

**Halil Köklü:** The transactional part of our product is still run by Magento and we have spent many years scaling it from an infrastructural as well as functional perspective.  Yet, it needs significant investment to run a truly global business at scale with this. Things like multi-warehousing and proper multi-currency and taxation, as well as performance tweaks for indexing, caching, bulk changes, and rendering, are not achievable overnight.

Magento is, however, only one part of our stack. We have built the community and content parts of our product bespoke with, amongst others, Symfony. There is also a good set of internal systems running both business and infrastructure processes.

We are operating in the AWS cloud using various AWS services. We do infrastructure-as-code, continuous delivery, and so on.

**Piotr Karwatka:** That is why you eventually decided to change the platform and go headless with PWA as a frontend. just to clarify, what is your definition of Headless Architecture and why it is now a best solution? 

**Halil Köklü:** The simple answer is that platforms providing business value such as eCommerce and content management systems are coming without a frontend, the head. They instead provide value through fast, extensive APIs. If done right, all functionality, including admin processes, is available through APIs. You’ve got full control over the frontend; you can focus on building great user experience and you are not held back by rigid constraints of the backend platforms used.

You can have multiple frontends or touchpoints like native apps, kiosks, in-store, IoT or whatsoever interacting with the same APIs, so you don’t end up implementing the same processes in many places. 

This is the reason why more and more eCommerce platforms support GraphQL to provide this feature at scale. This is, in contrast, to let’s say model-view-controller (MVC) applications where business logic can be accessed by including code. This does not work if the consuming code is not the same, is on a different server, written a different language, etc.

Amongst other benefits, with the headless approach, you can scale the frontend and backend separately.

In the case of Magento 1, you have code and business logic in the controllers, models, and views. It’s a nightmare for consistency.

__Headless Architecture is, however, not new at all. At the very least, if you have a frontend talking to APIs, you have some element of this already in place.__

I would say Headless Architecture and headless commerce are buzzwords for the emergence of API-first or even API-only off-the-shelf solutions.
So, we are not talking about bespoke implementations but major eCommerce software vendors adopting this trend. The market is moving from all-in-one, one-stop or full-stack platforms to a bring-your-own-frontend, modular proposition.

**Piotr Karwatka:** The APIs weren’t a key priority for the established platform vendors and, in eCommerce, the platforms are very often taken as a shortcut to the market. 

**Halil Köklü:** Definitely. Having APIs on its own is not sufficient if they are not designed for scale. Good luck with consuming product data for your frontend via SOAP in Magento 1.

Contenders like commercetools, who have started with headless, had a good head start and are spearheading this as it requires a lot of investment to migrate full-stack to headless.

Larger players are waking up to this as they cannot rely on their market dominance alone anymore, but the transformation is either incomplete or with more or less success.
Here at LoveCrafts, the community product has been built headless since we launched it in 2014. We have an API with some neat features like an expandable query method similar to GraphQL. A Symfony-based frontend, as well as native apps, are consuming from this API.

In 2018, we streamlined our editorial content from WordPress for the blog and Magento CMS for static pages to Prismic, which is a headless content management system.

Back in 2011 and 2012, I was personally involved in launching various eCommerce businesses with Rocket Internet’s Alice & Bob platform where Alice is the frontend and Bob is the backend. It was not as tidy as one would expect today; however, it was still somewhat novel. The original authors of that platform went on to other ventures but if you want to check out the latest generation of that, search for Spryker.

**Piotr Karwatka:** The idea of separating the backend layer from the frontend must have been seeded at LoveCrafts a long time ago. It is not an easy decision, giving the scope of work that the migration process required.

**Halil Köklü:** Honestly, as the engineering team at LoveCrafts, we have been talking about this architecture since the beginning. Obviously, the idea evolved over time with the technologies available.

Whilst we adopted that target architecture in community and content, the commerce part has not made it yet for various reasons. The Magento frontend still dominates the user experience.

At LoveCrafts, we are weaving together commerce, community, and content for our makers. You can’t really fragment the user experience by which backend or legacy system is used. All these three pillars are closely interlinked

Until now, we were trying this with technologies like edge-side includes (ESIs), but it’s not working that well from a performance perspective.

Running multiple frontends intertwined, as we ended up with, has many productivity and performance issues. These include starting from sharing CSS and JavaScript to ensuring they are up to date.

We need what we call a backend-agnostic, unified user experience.

**Piotr Karwatka:** Choosing the right backend was the first step you had to take. What convinced you to bet on commercetools?

**Halil Köklü:** It was not an easy or quick decision, and we gave this a due process.
A platform change like this does not happen every day and we want to make sure that we will not only cover our needs now but also gain the ability to scale for the future without the need of migrating again for another 5 or 10 years. 
We did market research and looked at 30 platforms, of which we reviewed 10 in detail by speaking to solution architects and going through each of our requirements. 
The main factors for going with commercetools were actually straightforward:

- Chemistry, approachable, lack of marketing gibberish
- API-only approach
- GraphQL support
- Modularity – when something does not meet your expectations or you have new use cases, you do not need to do a full migration again
- Great and complete documentation
- Really good overlap with our requirements
- Sensible and scalable product data model – e.g. translations are represented in localizable attributes rather than requiring a new store
- Flexible pricing model
- Staging capability for product data, which allows making changes and QA’ing

**Piotr Karwatka:** Before you had been able to establish all of these advantages, you had to do in-depth research. Can you describe the entire process that eventually led you to these conclusions?

**Halil Köklü:** The first step is to fully understand your business, product, and technology stack. We are fortunate that most of the original developers and product managers are still with us. I have implemented many of the defining parts of the product, too. So there is a lot of knowledge, meaning we are able to capture the entire picture of our needs. If you have joined recently and are pushing for change, you are going to have a hard time. If you outsource this work to an agency, the results are only going to be as good as the communication and project specification provides.

We ended up with a list of over 100 use cases and requirements, including user features, technical capabilities, back-office functionalities, and licensing and support questions.

Some of those come down to your complexity and product vision. How flexible does it need to be? Are your use cases unique?

We then looked at the market and compiled a list of platforms to review.

The first options on the list were to stay with Magento 1 or upgrade to its successor Magento 2. 

Magento 2 can be used headless, but what percentage of the functionality and how many of the marketplace modules are set up for headless? It was all just very unclear.

## Read full story
<table>
<tr>
   <td><a href="http://go.divante.co/microservices-architecture-ecommerce/"><img alt="The Cover" src="https://divante.com//books/books%20mockups/headless-architecture-whitepaper_book.png" width="280"/></a></td>
   <td>
      <h4><a href="https://divante.com/knowledge">Read full story...</a></h4>
         <p>You can download PDF version of this interview from <a href="https://divante.com/knowledge">Divante's Knowledge page</a></p>
   </td>
</tr>
</table>