
## Microservices

Microservice architecture structures the application as a set of loosely coupled, collaborating services. Each service implements a set of related functions. For example, an application might consist of services such as an order management service, an inventory management service, etc.

Services communicate using protocols such as HTTP/REST or (a less popular approach) using an asynchronous approach like AMQP. Services can be developed as separate applications and deployed independently. Data consistency is maintained using an event-driven architecture because each service should have its own database in order to be decoupled from other services. 

The most common forces dictating the Microservice approach: (NOTE:  According to: http://microservices.io/patterns/microservices.html)

* Multiple teams of developers working on a single application.

* System must be easy to understand and maintain/modify, no matter the number of changes deployed.

* Urgency for new team members to be productive.

* Need for continuous deployment (although possible to achieve with monolith design, microservices include some features of devops approach by design).

* Scalability requirements that require running your application across server clusters.

* Desireto adopt emerging technologies (new programming languages, etc) without major risks.

The assumptions of the orthogonal architecture followed by microservices architects implies the following benefits:

* Each microservice could be deployed separately and without shutting down the whole system.

* Each microservice can be developed using different technologies while allowing them to publish HTTP end-points (golang based services can interoperate with PHP, Java …).

* By defining strict protocols (API), services are easy to test and extend into the future.

* Microservices can be easily hosted in the cloud, Docker environments, or any other server platform, and can be very easily scaled as each service can live on its own server(s), VPS(es) etc.

* The services are easy to replace.

* Services are organized around capabilities, e.g., UI, front-end, recommendation, logistics, billing, etc.

The scalability and deployment processes of microservice-based systems can be much easier to automate compared to monolithic architectures. The Devops approach to infrastructure along with Cloud services is commonly in use. The examples of Spotify and Netflix (NOTE:  https://www.nginx.com/blog/microservices-at-netflix-architectural-best-practices/) inspire IT engineers to implement continuous delivery and monitoring.

Dockerization of IT environments, monitoring tools and DevOps tools (Ansible, Chef, Puppet and others) can take your development team to the the next level of effectiveness.

![image alt text](gfx/image_1.jpg)

*Fig. 1: A microservice approach encourages enterprises to become more agile, with cross-functional teams responsible for each service. Implementing such a company structure, as in Spotify or Netflix, can allow you to adopt and test new ideas quickly, and build strong ownership feelings across the teams.*

### The criticism

The microservice approach is subject to criticism for a number of issues:

* The architecture introduces additional complexity and new problems to deal with, such as **network latency, message formats, load balancing, fault tolerance and monitoring.** Ignoring one of these belongs to the "fallacies of distributed computing".

* Automation is possible but in the simplest cases, tests and deployments may be more complicated than with the monolithic approach.

* **Moving responsibilities between services is difficult.** It may involve communication between different teams, rewriting the functionality in another language or fitting it into a different infrastructure. On the other hand, it’s easy to test contracts between services after such changes.

* Starting with the microservices approach from the beginning can lead to too many services, whereas the alternative of internal modularization may lead to a simpler design.
