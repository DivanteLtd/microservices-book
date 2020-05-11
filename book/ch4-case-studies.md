# Case Studies: Re-architecting the Monolith

Here I’ll briefly present two case studies of the microservices evolution which  I’ve been able to observe while working at Divante.

## B2B

One of our B2B clients  came to us with the following issues to be solved:

* While on Magento 1 with SKUs catalog exceeding 1M products - performance bottlenecks relating to catalog and catalog updates became hard to work-around.

* Monolithic architecture, strongly tied to external systems (such as CRM, ERP, WMS) hindered changes and development of new features,.

* CRM that became the SPoF (Single Point of Failure). Pivotal CRM was in charge of too many key  responsibilities including per-customer pricing , cart management and promotions.. Serious amount of technological debt due to legacy code.

* Scalability problems - the platform should be able to handle a new business model that requires broadening the offer and entering new markets.

The online platform was generating 100M+ EUR revenue/year at the time. The challenge was a serious one.

The architecture of this system resembled a "death star". However, its complexity was not between microservices, but between external systems.

The first instinct was to move the site 1:1 from legacy Magento 1 to a new platform.OroCommerce and Magento 2 were considered.

The work on collecting business requirements from stakeholders inside the company and putting them into the Business Requirements Document (BRD) was quickly started. We formulated nearly 1,000 business requirements.Then we mapped them into features. Finally, we scored each available platform on its ability to meet the requirements:

* Functionality available out of the box.

* Functionality after customization.

* Functionality requiring additional/external modules.

* New features.

We double-checked both platforms in terms of technical solutions, scalability, performance, possibility of modification and the possibility of further development.

During the analysis, we realized that it would be somewhat risky to collect all the requirements for such a huge platform right away. We felt that before we had finished analyzing the requirements, they would have changed a few times already. Brief research showed us that none of the systems were capable of meeting all the specific requirements, both functional and non-functional. We realized this was not the right approach and could lead us back to where we started - a monolithic application. 

Before you decide to take a similar step (to go along with a ready-made platform in the center of a microservices eco-system), look at the pros & cons of this approach.

 

Pros & Cons of choosing an end-2-end platform:

**Pros**:

* Rapid development and time to market

* It’s usually a stable, well-tested product.

* A community that will help in solving many problems.

* The possibility to use a large base of ready-made, fully-featured modules (Magento Marketplace).

* Official support from the software provider.

* Official updates, security patches.

**Cons**:

* It’s still a monolithic application that sooner or later will lead us to the starting point - problems with scalability and maintenance.

* Very high licensing costs for the Enterprise version.

* Large platforms require specialists with specific skills for a particular system who can be difficult to acquire.

* Ready-made functionalities often requires serious modifications to fully adapt them, which can lead to incompatibility with the base system - no updates or patches.

* They often provide outdated solutions, limiting the introduction of modern technologies.

### A New approach

Eventually, after conducting a feasibility study, we suggested that our client use a  more optimal way of solving the problem. The fundamental assumption was to abandon migration to a new platform and change the architecture by deconstructing the current system and deploying it as an eco-system of  distributed microservices. In order to succeed, we needed an effective analysis and implementation process.

![image alt text](gfx/image_7.jpg)

*Fig. 7: Agile analysis and implementation process to achieve goals.*

The first step of the "architecture analysis" process was the development of a high-level architecture of the entire system by a team of architects, focused on service responsibilities. The results of their work included:

* Key business processes supported by the system.

* Goals and requirements for scalability, security, performance, SLA and potential development directions.

* Identified risks.

* Block diagram of  disclosed microservices:

    * Defined scope and responsibility of each service.

    * Revealed patterns of integration between services, taking into account emergency situations handling, avoiding SPoF.

* Defined events and business objects.

* High-level architecture diagram of the system.

### Read full story
<table>
<tr>
   <td><a href="http://go.divante.co/microservices-architecture-ecommerce/"><img alt="The Cover" src="https://microservicesbook.org/gfx/image_0.png" width="280"/></a></td>
   <td>
      <h4><a href="http://go.divante.co/microservices-architecture-ecommerce/">Read full story...</a></h4>
         <p>You can download PDF version of this book - including all case studies + extra materials from it's <a href="http://go.divante.co/microservices-architecture-ecommerce/">official landing page</a></p>
   </td>
</tr>
</table>