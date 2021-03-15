(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{SLib:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"0992ced4-5d32-5e11-85d5-275388cd0418","frontmatter":{"title":"Gsoc 2021","mainImage":"./logos/gsocLogo.png","description":"Welcome to the SCoRe Lab Google Summer of Code (GSoC) 2021 project ideas page. We are a dynamic and enthusiastic nonprofit research group pioneering in Internet of Things (IoT), Computer Security, and Software Tools, and is one of the best groups in South Asia. This is the 6th time that we are participating in the GSoC, we will use this page to develop possible project ideas that have on the above mentioned areas. Please note that anyone who is interested can participate in this process. You do not have to be a GSoC student or mentor to suggest possible project ideas. You can also talk to us about possible project ideas and we are happy to improve or heip you with them. Please keep in mind that projects need to be realistically something that is able to be functionally completed by a student working full time for about eight weeks. Thanks!","links":[{"name":"Mailing List","url":"https://groups.google.com/forum/#!forum/score-community"},{"name":"Gitter Channel","url":"https://gitter.im/scorelab/"},{"name":"Proposal Template","url":"https://goo.gl/KXcqAL"}],"guidelinesHeading":"Important Guidelines on Submitting Ideas","guidelinesDescription":"There are some important guidelines to submit ideas, please read these carefully before adding your ideas!","guidelines":["There is a fixed time period for implementing and coding your ideas","Come up with attainable goals and you will be able to complete what you set out to do. You can always contact   our mentors and community and get an idea about the workload and whether you might be able to complete them.","You are free to come up with your own ideas. The ideas should be about Internet of Things (IOT), Computer Security and Software Tools. Also if you love to work on any of these subjects but do not have an idea you can always contact us.","Lets Talk! The best way to solve problems that you might have is to contact our mentors and also our community.","We encourage you to do documentation so that we can keep track of your progress and also help you if things are not going according to plan. Although not compulsory we have a strong belief that this method can cut down your time to code and also the workload of the mentors drastically."],"projectListHeading":"All SCoRe Lab Projects","projectListButtonText":"View All Projects","projectListUrl":"/projects","ideaListHeading":"Idea List for 2021","ideaListDescription":"The following is the idea list for Google Summer of Code 2021","ideaList":[{"title":"#1: Improve the ImageLab user experience","description":"ImageLab is a visual programming tool for OpenCV. It is designed to support anyone to get started with image processing related concepts and techniques in an interactive manner. At its current stage, ImageLab is able to apply the most basic processing techniques onto an image. The goal of this project is to enhance the user experience of using ImageLab.","expectedresults":"<ul><li>Propose and implement a complete overhaul to the UI including the support for theming.</li><li>Introduce block shapes depending on the operation types which can be merged with each other at the workspace area.</li><li>Improve the workspace actions such as ‘drag & drop’.</li><li>Package the application into an installable bundle.</li></ul>","githuburl":"https://github.com/scorelab/imagelab","requiredknowledge":"Java, JavaFX","possiblementors":"Oshan Mudannayake"},{"title":"#2: ImageLab - Extend the ImageLab functionality","description":"ImageLab is a visual programming tool for OpenCV. It is designed to support anyone to get started with image processing related concepts and techniques in an interactive manner. At its current stage, ImageLab is able to apply the most basic processing techniques onto an image. The goal of this project is to extend the functionality of ImageLab.","expectedresults":"<ul><li>Add the missing OpenCV operation blocks.</li><li>Implement the code generation functionality.</li><li>Introduce control structure blocks such as if-else and loops.</li></ul>","githuburl":"https://github.com/scorelab/imagelab","requiredknowledge":"Java, JavaFX, OpenCV","possiblementors":"Oshan Mudannayake"},{"title":"#3: Revive TensorMap","description":"TensorMap is a visual designer for ML code. The codebase has gone stale after the initial start-up of the project. TensorMap only consists of very limited functionality at the moment.  Your task is to revive the project, clean up the codebase and fix the most fundamental bugs. Please email the mentors with your thoughts and ideas before applying to the project.","expectedresults":"<ul><li>Understand the codebase and document the existing functionality.</li><li>Fix the bugs in the current implementation.</li><li>Revamp the project architecture.</li></ul>","githuburl":"https://github.com/scorelab/TensorMap","requiredknowledge":"Keras, Tensorflow, Having previous experience in ReactJS and Flask is preferable.","possiblementors":"Oshan Mudannayake"},{"title":"#4: Webiu","description":"Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing reusable Gatsby Components which are easily plugable to create Gatsby websites with ease.","expectedresults":"<ul><li>Understand the codebase</li><li>Create a LOGO for Webiu</li><li>Create Documentation for existing components using <a href=\\"https://storybook.js.org\\">https://storybook.js.org</a></li><li>Create a NPM package for WEBIU</li><li>Create new Reusable Gatsby Components</li><li>Functionality improvements of current Components</li></ul>","githuburl":"https://github.com/scorelab/Webiu","requiredknowledge":"Javascript, React Js, GatsbyJs","possiblementors":"Charith Elvitigala, Devon Wijesinghe"},{"title":"#5: Scan8","description":"Scan8 is a Kubernetes based rapid URL/File scan system that allows to submit a list of URLs/files and take out the scan results.  Scan8 uses ClamAV open-source antivirus project as the scan engine and Google gvisor as the container sandboxing for k8. The overall system is able to create a large number of lightweight ClamAV containers (Pods)  and distributed the scan list on demand and take out the scan result within a short amount of time.","expectedresults":"As the very initial stage of this project we expect to finish up the scan list distribution system. And automatic scale up and scale down the pods based on demand.","githuburl":"https://github.com/scorelab/Scan8","requiredknowledge":"Knowledge in Linux, knowledge in containerization, C, bash scripting,  Kubernetes, gVisor","possiblementors":"Ravindu (Ammoniya)"},{"title":"#6: Go Social - Implement Community App Using Go Social Framework","description":"Propose and develop community app using Go Social Framework. In the proposal you need to provide the app ui design, and use case of the app.","expectedresults":"Design and Implement Community App","githuburl":"https://github.com/scorelab/Go-social","requiredknowledge":"NodeJS, ReactJS, ReactNative","possiblementors":"Wathsara, Shehan"},{"title":"#7: Clocal GCP - Core","description":"Clocal GCP can be separated into core CLI application and a list of providers. Currently it resides in the same repository but having separate docker containers. Student can discuss the best approaches with the mentors and start implementing. What is expected is a well written CLI application which can be integrated with plugins. For an example a user can install the clocal GCP cli application and add separate plugins as necessary. example - Cloud Function plugin. This task involves creating the core CLI application and converting existing cloud emulation services to plugins. And adding the below services as plugins.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-gcp","requiredknowledge":"node.js, docker, general idea of gcp cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal, Dilantha Prasanjith"},{"title":"#8: Clocal GCP - Services","description":"Here the task is to implement the emulation services for below Google Cloud platform products. These has to be implemented as individual services as docker containers, so that in a later phase these will be used as plugins for clocal gcp core CLI application. And students are free to choose the technology stack they are most familiar with to implement the emulation services.But NodeJS and python are preferred.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-gcp","requiredknowledge":"node.js, docker, general idea of gcp cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal, Dilantha Prasanjith"},{"title":"#9: Clocal Azure - Services","description":"Clocal Azure is an emulation engine for azure services. The student is expected to identify the azure services which is practical to apply on Clocal Azure and implement the services. New services are expected from the student to implement. Later on, the student is expected to update the existing services and implement more features on the existing services. When implementing new services, student is free to propose any service with the approval of the mentor to implement during the period. Below are few suggested services.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/leopardslab/clocal-azure","requiredknowledge":"node.js, docker, general idea of azure cloud and services.","possiblementors":"Rumesh Hapuarachchi, Rajika Imal, Lakindu Gunasekara"},{"title":"#10: NodeCloud - Ali Cloud Provider","description":"Ali-cloud is a rising cloud provider in the cloud arena. Currently, NodeJS only supports only AWS and GCP. Students task is to implement the major services of Ali-cloud in the NodeJS. The student will have to discuss with mentors for the potential project scope as implementing entire provider will be a bigger task and may require multiple students.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/cloudlibz/nodecloud","requiredknowledge":"nodejs, ali-cloud","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#11: NodeCloud - Digital Ocean Provider","description":"Digital Ocean is a key cloud provider. However current D.O. NodeJs wrapper is not actively maintaining. Therefore this project is a two part project. First you have to identify what are key components already developed in current wrapper and take necessary actions to implement the rest. Next part is using the developed SDK to implement following in the NodeCloud.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/cloudlibz/nodecloud","requiredknowledge":"nodejs, digital-ocean","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#12: NodeCloud - Rackspace Provider","description":"Rackspace Provider is another key provider which we are missing at the moment. Student has a bigger task to do here as Rackspace does not offer their own NodeJS SDK. What they offer is pkgcloud binding for Rackspace. Student will have to implement the NodeSDK using REST API and will have to use the developed SDK to support Rackspace provider for Nodecloud.","expectedresults":"Completion of the development milestones listed in the project.","githuburl":"https://github.com/cloudlibz/nodecloud","requiredknowledge":"nodejs, rackspace","possiblementors":"Rumesh Hapuarachchi, Rajika Imal"},{"title":"#13: Senz - Create a Node.js module for senz clients","description":"Implement a Node.js module to use in node.js applications to give the ability to act as a Senz device and communicate with the Senz server. The module should work as a message parser between the application and the server.","expectedresults":"At the end of your summer, we expect that you will create a node.js module.. And users should be able to install and use the module in their node.js projects to communicate with the Senz server.","githuburl":"https://github.com/scorelab/senz","requiredknowledge":"Node.js, Scala","possiblementors":"Sumedhe Dissanayake"},{"title":"#14: OpenMF - Analytics API","description":"OpenMF is an ​open-source forensic tool for Android smartphones that helps digital forensic investigators throughout the life cycle of digital forensic investigation. OpenMF tool is available to extract data from a rooted Android device using command line or webclient.","expectedresults":"<ul><li>Some changes in the frontend to make it more user friendly.</li><li>Design and develop logic to implement Analysis on the cases, Eg- if in Case#1 and in Case#2 we have to search for common keyword \\"fire\\", then the Analytics API should check all the dbs and find the result. More complex scenarios can be introduced.</li><li>Improve routing of the React App</li><li>Design and Implement APIs as per requirement</li><li>Update project wiki and provide a video for complete setup and working of project</li></ul>","githuburl":"https://github.com/scorelab/OpenMF","requiredknowledge":"Python, Flask, React Js","possiblementors":"shivanshu1333, vivonk"}]}}}]}}}')},"j/AA":function(e,t,i){"use strict";i.r(t);var o=i("q1tI"),a=i.n(o),n=i("7vrA"),s=i("3Z9Z"),r=i("JI6e"),l=i("Wbzz"),c=i("wHSu"),d=i("jfxn"),u=i("SLib"),p=i("SQ6y"),h=i("wtQ5"),m=i("8bOL");t.default=function(){var e,t=(e=u.data.allMarkdownRemark).edges.length>0?e.edges[0].node.frontmatter:null,i=Object(p.a)();return a.a.createElement(d.a,null,a.a.createElement(h.a,{title:"Score Labs GSOC Page"}),a.a.createElement(m.g,{mainText:t.title,icon:c.g,backgroundColor:"#fff8e4",small:!0}),a.a.createElement(m.b,{image:t.mainImage,mainText:t.description}),a.a.createElement(n.a,null,a.a.createElement(s.a,null,a.a.createElement(r.a,null,a.a.createElement(m.i,{links:t.links})))),a.a.createElement("br",null),a.a.createElement(m.e,{heading:t.ideaListHeading,description:t.ideaListDescription,listItems:t.ideaList,defaultActiveKeys:t.ideaList.map((function(e,t){return""+t}))}),a.a.createElement("br",null),a.a.createElement(m.f,{heading:t.guidelinesHeading,description:t.guidelinesDescription,guidelines:t.guidelines}),a.a.createElement("br",null),a.a.createElement(m.k,{title:i.mailingListHeading,feedUrl:i.mailingListFeedUrl,small:!0}),a.a.createElement("br",null),a.a.createElement(m.d,{title:i.gitterRoomsListHeading,gitterOrganizationName:i.gitterOrganizationName,gitterToken:i.gitterToken,small:!0}),a.a.createElement("br",null),a.a.createElement(m.a,{heading:t.projectListHeading,buttonText:t.projectListButtonText,onClick:function(){return Object(l.navigate)(t.projectListUrl)}}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-gsoc-js-f052a9d35cab64ea9ee3.js.map