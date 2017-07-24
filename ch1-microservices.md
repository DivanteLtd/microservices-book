## Micro-services

Micro-service architecture structures the application as a set of loosely coupled, collaborating services. Each service implements a set of related functions. For example, an application might consist of services such as an order management service, an inventory management service etc.

Services communicate using protocols such as HTTP/REST or (less popular approach) asynchronous like AMQP. Services can be developed as separate applications and deployed independently. Data consistency is maintained using event driven architecture because each service should have its own database in order to be decoupled from other services. 

Most common forces dictating the Micro-service approach: (NOTE:  According to: http://microservices.io/patterns/microservices.html)

* There are multiple teams of developers working on the single application,

* The system must be easy to understand and maintain/modify, no matter the number of changes deployed,

* Urgency for new team members to be productive,

* Need for continuous deployment (although possible to achieve with monolith design - micro-services include some features of devops approach by design),

* Scalability requirements that require running your application across server clusters,

* You want to adopt emerging technologies (new programming languages, etc) without major risks.

The assumptions of the orthogonal architecture followed by micro-services architects implies the following benefits:

* each micro-service could be deployed separately and without turning down the whole system,

* each micro-service can be developed using different technologies while it allows to publish HTTP end-points (golang based services can interoperate with PHP, Java …),

* by defining strict protocols (API) services are easy to test and extend into the future,

* micro-services can be easily hosted in a cloud, Docker env. or any other server platform and can be very easily scaled as each service can live on it’s own server(s), VPS(es) etc.,

* the services are easy to replace,

* services are organized around capabilities, e.g.,  UI, front-end, recommendation, logistics, billing, etc.

The scalability and deployment processes of micro-service based systems can be much easier to automate compared to monolithic architectures. The Devops approach to infrastructure along with Cloud services are commonly in use. Examples are Spotify and Netflix (NOTE:  https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/) to mention only two, inspires IT engineers to implement continuous delivery and monitoring.

Dockerization of IT environments, monitoring tools, dev-ops tools (only Ansible, Chef, Puppet … to mention) can bring your development team to a newer level of effectiveness.

![image alt text](image_1.jpg)

*Fig. 1: A micro service approach encourages enterprises to become more agile with cross-functional teams responsible for each service. Implementing such a company structure in Spotify or Netflix can allow you to adopt and test new ideas quickly and build strong ownership feelings across the teams.*

### The criticism

The microservice approach is subject to criticism for a number of issues:

* The architecture introduces additional complexity and new problems to deal with such as **network latency, message formats, load balancing, fault tolerance and monitoring.** Ignoring one of these belongs to the "fallacies of distributed computing",

* Automation is possible but in simplest cases, tests and deployments may be more complicated than with monolithic approach,

* **Moving responsibilities between services is difficult. **It may involve communication between different teams, rewriting the functionality in another language or fitting it into a different infrastructure. On the other hand, it’s easy to test contracts between services after such changes,

* Starting with the micro-services approach from the beginning can lead to too many services where the alternative of internal modularization may lead to a simpler design.
