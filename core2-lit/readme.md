# core2-lit

This is an experiment on building a client-side component library that could be used across any project with minimal effort.  Uses ASP.NET Core 2.2 and lit-html 1.1.0 and built with Visual Studio 2019.

In order for this project to run correctly, you need to:

* Restore Nuget packages in VS
* Run "npm run build" to generate the wwwroot/js/main.js file

The main.js is not included in source control because it will be generated.  If it were, everytime a build occurs, it would cause a pending change.
