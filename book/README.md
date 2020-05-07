## Foreword

Name a technology conference or meetup and I’ll tell you about the repetitive speech referencing Micro-services. This modern engineering technique has grown from good old SOA (Service Oriented Architecture) with features like REST (vs. old SOAP) support, NoSQL databases and Event driven/reactive approach sprinkled in.

Why have they become so important? Roughly speaking - because of what scale systems achieve nowadays and the number of changes that are deployed on a daily basis. 

**This book is a rather "technical one" - starting with some Business rationale for micro-services and then stepping into engineers’ shoes and trying to show you tools and techniques required to build and scale modern eCommerce systems.**

<table>
<tr>
   <td><a href="http://go.divante.co/microservices-architecture-ecommerce/"><img alt="The Cover" src="gfx/image_0.png" width="280"/></a></td>
   <td>
      <h4>Download</h4>
         <p>You can download PDF version of this book from it's <a href="http://go.divante.co/microservices-architecture-ecommerce/">official landing page</a></p>
      <h4>Become the author</h4>
         <p>The Microservices Book is an ongoing project, open to new contributors.  If you'd like to become an author feel free to <a href="https://github.com/DivanteLtd/microservices-book">contribute on Github!</a></p>
   </td>
</tr>
</table>


### Divide and conquer

The original Zalando site was built on Magento using PHP, and at one time was the biggest Magento site in the world. The German e-commerce giant that employs over 10,000 people and ships more than 1,500 fashion brands to customers in 15 European countries—generated $3.43 billion in revenue last year. With over 700 people on its engineering team, they moved to micro-services in 18 months.

The key advantages of the micro-service approach are:

* **Faster Time to Market**- because of the decentralized development process and opportunities to innovate given to each separate development team,

* **Less is more**- the micro-services approach leverages the Single Responsibility Principle which means that a single microservice performs exactly one business function. Therefore developers can create more efficient, clear and testable code,

* **Domain Expertise**- business features are granularly split into separate micro-applications. You’ll have separate services for promotions, checkout,  products catalog. Each development team typically includes business analysts and developers. It builds engagement and speeds up development,

* **Accountability** - Booking.com’s approach to development is to promote the teams whose features are published for production (before the features are usually proven to increase the conversion). By working on micro-services you’ll have separate teams accountable for particular KPIs, providing SLA’s for their parts etc. A side effect of this approach is usually the rise of employee effectiveness and engagement,

* **Easier outsourcing**- because services are separable and usually contracts between them have to be well documented, it’s rather easy to use ready-made products or outsource particular services to other companies. 

### The changes are too slow

It’s something I usually hear when starting a new consulting engagement. A few years in the market, enterprises tend to keep the status quo. Keep everything running smoothly but nowadays it’s not sufficient to become a market leader. It’s crucial to experiment, change, test and select best solutions. But it’s extremely hard to work like that with a team of few dozen engineers and extremely sophisticated business rules coded to the metal by thousands lines of code. The micro-services approach became so popular because it breaks this into smaller, self-sufficient and granular areas of responsibility that are easy to test and deploy.

### In e-Commerce: your software is your company

organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations

— M. Conway

Among all the technical challenges, Micro-services usually require organizational changes inside the company. Breaking the technical monolith quite often comes along with dividing enterprise departments into agile, rapid teams to achieve faster results. In the end, the final outcome is that processes that took a few months can now be executed in weeks and everybody feels engaged. It’s something you cannot underestimate.

### Omnichannel

To fulfill your customer’s expectations about omnichannel you have to integrate each and every piece of information about products, shipments, stocks and orders and keep it fresh. There is no single system to deal with POS applications, ERP, WMS and eCommerce responsibilities. Of course, I’ve seen a few that pretend to be a One-stop solution but I’ve never seen anything like that in production.

The key is to integrate systems that are optimal for their niches and already integrated within your existing processes. Microservices are great for such an evolutionary approach. We’ll describe a case study - where by exposing the APIs from PIM, CRM, ERP and creating a dedicated UI facade, we leveraged on this approach to provide a sophisticated B2B solution.

This eBook will try to help you decide if it is time for applying this approach and how to start by referencing to few popular techniques and tools worth following.

Let’s get started!

**Piotr Karwatka, CTO at Divante**

## Table of Contents

1. [Microservices](ch1-microservices.md)
 * The criticism
2. [Evolutionary approach](ch2-evolutionary-approach.md)
3. [Best practices](ch3-best-practices.md)
 * Create a Separate Database for Each Service
 * Rely on contracts between services
 * Deploy in Containers
 * Treat Servers as Volatile
4. [Case Studies: Re-architecting the monolith](ch4-case-studies.md)
 * B2B
 * New approach
 * Mobile Commerce
5. [Related techniques and patterns](ch5-related-techniques.md)
 * Fundamentals of distributed systems
    * CAP theorem
    * Eventual consistency
 * Design patterns
    * CQRS
    * Event Sourcing
    * Event driven data management
 * Integration techniques
    * API Gateways
    * Backend for Frontends
 * Token based authorization (oauth2, JWT)
    * JSON Web Tokens (JWT)
 * Deployment of microservices
    * Docker and containerization
        * Docker basics
        * VM vs. Container
    * From dev to production
        * Development
        * Pre-production
        * Production
        * Cons
        * Summary
    * Serverless - Function as a Service
        * Serverless providers
        * FaaS
 * Architecture
    * Good use-cases
 * Continuous Deployment
    * Designing deployment pipeline
    * Coding our pipeline
6. [Related technologies](ch6-related-technologies.md)
 * Microservices based e-commerce platforms
    * Sylius
    * Spryker
    * Open Loyalty
    * Pimcore
 * Technologies that empower microservices architecture
    * Ansible
    * ReactJS
    * NodeJS
    * Famous NodeJS users
    * Swagger
    * Elasticsearch
    * GraphQL
 * Distributed logging and monitoring
    * Graylog
    * New Relic
    * New Relic Insights
    * New Relic Insights NRQL language
7. [Enterprise GraphQL](ch7-enterprise-graphql.md)
8. [Appendinx 1: Microservices and unicycling](ch8-microservices-and-unicycling.md)
9. [Appendinx 2: Blogs and resources](ch9-blogs-and-resources.md)



## About the authors

### Piotr Karwatka

CTO at Divante and Co-founder of <a href="https://vuestorefront.io">Vue Storefront</a>. 15+ years of professional Software Engineering and Project Management experience. Still coding in spare time.

I've also tried my hand in writing with the book "E-Commerce technology for managers". My career started as a software developer and co-creator of about 30 commercial desktop and web applications.

### Michał Kurzeja

CTO and co-founder of [Accesto ](https://accesto.com/)with over 8 years experience in leading technical projects. Certified Symfony 3 developer. Passionate about new technologies, he mentors engineers and teams in developing high-quality software. Co-organizer of Wrocław Symfony Group meetups. 

### Mariusz Gil

Software architect and consultant focused on high value and high complexity scalable web applications with 17+ years of experience in the IT industry. Helps teams and organizations adopt good development and programming practices. International conference speaker and developer events organizer.

### Bartosz Picho

eCommerce Solution Architect, responsible for Magento 2 technology at Divante. Specialized in application development from business requirements into system architectures, which also meet high performance and scalability. Passionate and driven technologist, experienced in Magento 1 and 2, both Community and Enterprise editions. 

### Antoni Orfin

Solutions architect specialized in designing highly-scalable web applications and introducing best practices in software development process. Speaker at several IT conferences. Currently responsible for systems architecture and driving DevOps methodology at Droplr.com.

### Mike Grabowski

Software developer and open source enthusiast. Core contributor to many popular libraries, including React Native, React Navigation and Haul. Currently CTO at Callstack.io. I travel the world teaching developers how to use React and share my experience at various React-related events.

### Paweł Jędrzejewski

Founder and Lead Developer of Sylius, the first Open Source eCommerce framework. Currently busy building the business & ecosystem around the project while also speaking at international tech conferences about eCommerce & APIs. 


<img src="https://divante.com/static/img/logo-new.svg" width="300" />

<a href="https://divante.com">Divante</a> is a global eCommerce solutions, experimentation, and thought leader. Our team of 250+ experts empowers eCommerce for both the B2B and B2C segments, working with companies like Bosch, SAP, Marc O'Polo and Tally Weijl. We create rapid, high-functioning MVPs and integrate technologies that will be the trends of tomorrow.

At Divante, we trust in cooperation and actively contribute to the open-source community. <a href="https://github.com/DivanteLtd/microservices-book/blob/master/LICENSE">This Book is Open Source</a>.  as well as creating our own products like Vue Storefront and Open Loyalty.

Divante in numbers:

- 10+ years on the market
- 100+ clients globally
- 220+ team members
- 300+ projects delivered
- See our key projects:

<a href="https://github.com/DivanteLtd/">Open Source projects</a>
<a href="https://divante.com/dvnt">Divante Innovation Lab</a>
