import { writable } from "svelte/store";

export const techData = writable([
    {
      category: "Languages",
      techs: [
        {
          name: ".NET",
          startYear: 2016,
          desc: "Versatile framework for web and desktop applications, primarily using C# and VB.NET. Supports cross-platform development with .NET Core.",
          showOnHomepage: true,
        },
        {
          name: "Python",
          startYear: 2021,
          desc: "Dynamic, high-level programming language known for its simplicity and readability. Commonly used in data science, web development, automation, and AI.",
          showOnHomepage: true,
        },
        {
          name: "Golang",
          startYear: 2023,
          desc: "A statically typed, compiled language designed at Google for simplicity and concurrency, ideal for building scalable systems and microservices.",
          showOnHomepage: true,
        },
        {
          name: "JavaScript",
          startYear: 2016,
          desc: "A high-level, interpreted language that is the backbone of web development, enabling interactive web pages and is used both on the client-side and server-side.",
        },
      ],
    },
    {
      category: "Frameworks",
      techs: [
        {
          name: "Svelte",
          startYear: 2023,
          desc: "A lightweight, front-end framework that shifts much of the work to compile time, enabling faster, smaller applications with minimal boilerplate.",
        },
        {
          name: "Tailwind CSS",
          startYear: 2023,
          desc: "A utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.",
        },
        {
          name: "Node.js",
          startYear: 2016,
          desc: "A runtime environment for executing JavaScript on the server-side, enabling scalable, real-time web applications through its non-blocking I/O model.",
        },
        {
          name: "Angular",
          startYear: 2021,
          desc: "A full-featured, client-side framework developed by Google for building dynamic, single-page web applications using TypeScript. Provides two-way data binding, a powerful templating engine, and dependency injection.",
        },
        {
          name: "ASP.NET",
          startYear: 2016,
          desc: "A web framework from Microsoft for building dynamic web applications, APIs, and services. It uses .NET Core for cross-platform development and supports MVC and Web API patterns.",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        {
          name: "Git & GitHub",
          startYear: 2016,
          desc: "Git is a distributed version control system for tracking changes in code. GitHub provides cloud-hosted repositories for collaboration, version control, and project management.",
        },
        {
          name: "Docker",
          startYear: 2018,
          desc: "A platform for developing, shipping, and running applications inside containers, ensuring consistency across different environments from development to production.",
          showOnHomepage: true,
        },
        {
          name: "Docker Swarm",
          startYear: 2018,
          desc: "A native clustering and orchestration tool for Docker containers, enabling multi-host deployments, scaling, and management of containerized applications.",
        },
        {
          name: "Kubernetes",
          startYear: 2023,
          desc: "An open-source platform for automating the deployment, scaling, and management of containerized applications, providing orchestration for Docker containers across clusters.",
        },
        {
          name: "Terraform",
          startYear: 2023,
          desc: "An open-source IaC tool that allows developers to define and manage cloud infrastructure using configuration files, enabling repeatable and automated infrastructure provisioning.",
        },
        {
          name: "Azure DevOps",
          startYear: 2018,
          desc: "A suite of Microsoft tools for DevOps, offering services like version control, CI/CD pipelines, project management, and collaboration for application development and deployment.",
        },
        {
          name: "PowerShell",
          startYear: 2016,
          desc: "A command-line shell and scripting language from Microsoft, used for automating system administration tasks and managing configuration and deployment in Windows environments.",
        },
      ],
    },
    {
      category: "Cloud",
      techs: [
        {
          name: "AWS",
          startYear: 2021,
          desc: "Amazon's cloud platforms offering on-demand compute power, storage, and other cloud services.",
          showOnHomepage: true,
        },
        {
          name: "Azure",
          startYear: 2016,
          desc: "Microsoft’s cloud platform offering a range of services including virtual machines, databases, networking, and machine learning for building, testing, and deploying applications.",
          showOnHomepage: true,
        },
        {
          name: "Google Cloud",
          startYear: 2023,
          desc: "Google’s cloud computing platform that provides a wide range of services including compute, storage, AI, and machine learning capabilities.",
          showOnHomepage: true,
        },
        {
          name: "Firebase",
          startYear: 2023,
          desc: "A comprehensive platform for building mobile and web applications, providing services like real-time databases, authentication, cloud functions, and analytics.",
        },
      ],
    },
  ]);