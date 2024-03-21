# TypesScript
- Configure typescript
    - Creare a package.json
        - Confguration file for the project (aka package) dependencies
            - Developer Dependencies aka 'devDependencies'
                - Command to install dev dependencies
                    - npm install --save-dev [PACKAGE-NAME] 
            - Runtime Dependencies aka 'dependencies' 
                - Command to install runtime dependencies
                    - npm install --save [PACKAGE-NAME]
            - Global Packages
                - one for all JS applications
                    - npm install --global [PACKAGE-NAME]        
            - Use the following command
                - npm init -y OR npm init -f 
    - Command to install TypeScript in global scope
        - npm install --global typescript
            - This provides the 'tsc' tool
                - The TypeScript Transpiler, this compiled .ts into .js
            - The TypeScript COnfiguration file aka 'tsconfig.json'
                - This file contains configuration like
                    - Compilation Rules
                    - Outout Directory to store the generated .js files
                    - ... and many more
                - Command to generate 'tsconfig.json'
                    - tsc --init
                - The 'tsc' tool is also a 'transpiler', Transpiles (generates) .js file after compiling .ts file
                    - tsc [FILE].ts PRESS ENTER     
                - Execute the .js file on Server
                    - node [FILE-NAME].js
- Fundamentals
    - Scope using 'let'
    - DataTypes
        - number, string, date, Array, any, void, undefined
        - Union Types
            - A veriable can be declared using more than onbe datatype 
    - Rest Prameters aka variable number of parameters to a method aka spread 
    - Arrow Operator
    - Template String    
    - The 'object' type and 'Object' class
- Object Oriented Programming
    - All Members are public by default
    - Define 'private' members explicitly
    - The 'constructor()' is a standard method
        - No COnstructor Overloading is allowed
    - Method Overloading is not allowed by default, but we cam make it possible using method declaration syntax
    - Inheritance is defined using 'extends' keyword
    - Interfaces are allowed in TypeScript
        - Interface is implemented by class using 'implements' keyword    
- Modules
    - If the types (Array, Constants, Functions, Classes, Interfaces) are supposed to be used across file, then these types MUST be declared as 'exported' and then 'imported' in other file
        - This is known as 'Module'
        - For exporting type use 'export'
        - For importing type use 'import'  

https://www.typescriptlang.org/docs/handbook/intro.html

https://github.com/maheshsabnis/rhealTS

# Angular App
- Creating Angular App
    - Using Angular CLI
        - npm install --global @angular/cli
            - This will provide the 'ng' command Line Interface to create Angular Application
        - Command to create a new Angular Application
            - ng new [NAME-OF-APP]
- Basic Building BLocks of Angular
    - Module
        - An Angular Deployable Object-Model
            - Library, a reusable application
            - Application, a production ready application. Library is used in application 
    - Directive
        - Re-Usable set of
            - UI
                - A Reusable User Interface
                    - A Component
            - Attribute 
                - A HTML Custom Attribute that defines behavior of HTML Element
            - Structural
                - A dynmaic approach of Adding/Removing HTML Elements from UI
    - Component
        - Autonomous Object that has following
            - UI, for Presentation
            - Data, To show on UI or accept from End-User
            - Behavior aka Logic, a way to process data
    - Service
        - Re-usable Utlility Logic
        - Communcation across Components
        - Used to contains heavy-load logic e.g. HTTP Calls
    - Pipe
        - A Way of showing data on Component

# Angular List of Packages
    - Decorators
        - A class that is applied as attribute on TypeScript class, function, Property, Data Memeber  to define the behavior of it
    - Standard Packages
        "@angular/animations": "^17.3.0",
            - Animations
        "@angular/common": "^17.3.0",
            - @angular/common/http
                - HttpClientModule
        "@angular/compiler": "^17.3.0",
            - Mechanism of Optimization of HTML, JS, CSS so that it has responsiveness
        "@angular/core": "^17.3.0",
            - All Standard (comonly used) classes are avaialble here
                - NgModule, 
                - Component, 
                - Directive, 
                - Pipe, 
                - Injectable
        "@angular/forms": "^17.3.0",
            - Used for Creating a 'Form'
                - Template Form (Default)
                    - FormsModule
                - Reactive Forms
                    - ReactiveFormsModule
        "@angular/platform-browser": "^17.3.0",
            - Used to Load the Angular Object Model for HTML Rendering (Generation of HTML) on Browser
                - BrowserModule
                - bootstrapApplication()
                    - Method used to bootstrap the standalone component in browser
        "@angular/platform-browser-dynamic": "^17.3.0",
            - Used to 'bootstrap' (aka loading) the Angular Application in Browser
                - platformBrowserDynamic() method for initiating the loadinf Angular App in Browser
        "@angular/platform-server": "^17.3.0",
        "@angular/router": "^17.3.0",
            - Used for Routing, a Single Page Application Development (SPA)
                - RouterModule
        "@angular/ssr": "^17.3.0",
            - Server-Side Rendering (SSR)
    - Dependency Packages    
        "rxjs": "~7.8.0",
            - Reactive JavaScript Extesions
                - Observable for Managing 'streamed' data
        "tslib": "^2.3.0",
            - TypeScript
                - Transpiler
                - Modularity
        "zone.js": "~0.14.3"
            - Managing HTML Generation on Client
            - HTML Refresh with JS Support
        "express": "^4.18.2",
            - Node.js server, used by Angular 17 for SSR

# Angular Programming
- Use decorators for Creating
    - Module
        - @NgModule, used from  Angular 2 to Angular 15 for bootstrapping all Angular Objects
            - Applied on class to declare class as an Angular Module
            - Properties of NgModule
                - imports:[], used to load standard and custom modules for the current application
                - declarations:[], used to declare components and directives so that current application can use them for execution
                - exports:[], used to export component, services, etc. from current application so that other Angular application can use them
                - providers:[], This is Dependency Injection Container. This is used to register all Angular Services as singleton so that they can be injected in other components, directives/
                - bootstrap:[], This is used to load the component in Browser when the application is boostraped in browser
                - elements:[], used to register custom elements aka third-part web components in the current appliaction
    - Component
        - @Component
            - APplied on Class to use class as Component
            - Properties
                - selector: the custom HTML Tag using which component can be referred and Loaded in HTML
                - template: The HTML that will be rendered where the 'selector' is used
                - templateUrl: The html file that contains the UI for the component. This UI will be loaded where the 'selector' is used. Either templte or templeteUrl can be used at a time
                - styles: Inline CSS for HTML
                - styleUrls: CSS files those are loaded along with this component
                - standalone: The  boolean property, from Angular 15+, this is always 'true' by default
                    - When set to 'true', the the component will be bootstrepped and loaded without using NgModule
                        - We use imports:[], providers:[] directly in Standalone component to load standard Angular Modules and Custom Modules 
    - Service
        - @Injectable
    - Pipe
        - @Pipe
    - Directive
        - @Directive
    - Proprty to Share data from Parent-Component to its Child Component
        - @Input
    - Event to emit data from Child componen to parent component
        - @Output
    - Creating Custom Methods to track JavaScript Events
        - @HostListener

# Programming With Angular
- Component Programming
    - Data Binding
        - Mechanism to Show Data on UI also accept data from UI
        - Expression Binding 
            - Read-only UI ELements Showing data
            - Public Proeprty of Component is bind to HTML element using {{PROPERTY-NAME}}
        - Property Binding
            - Public Property is bound with HTML Element's Attribute
            - This value cannot be changed from UI, but if property is changed from component then updated value is shown on UI
            - [PROPERTY-NAME]
        - Two-Way Binding
            - Combination of Property-Bindign and Event-Binding
            - Value can be updated from UI and it will update the Component's proprty, and if the Component's property is changed using any mechanism then the updated value will be send to UI and that UI elements will be udpated
                - [(ngModel)]="PROPERTY-NAME"
                    - ngModel is a Standard Directive that will listen to Change event on UI element and acrodingly update the Property of the Component and when the component is changed then latese value of the component's property will be read and UI will be updated       
                - The component needs to 'imports' the 'FormsModule' from '@angular/forms' so that the [(ngModel)] is executed    
    - Event Binding
        - A public method of the Component is bound with the Interactive HTML Element e.g. Button, input, select, etc.
            - When the event is raised on UI, the method will be invoked and executed
            - Syntax
                - (EVENT-NAME)="METHOD-NAME()"
    - Re-Usable Components
        - Passing Data from Parent to Child
        - Emitting Data from Child to Parent
- Directive
    - Three Types of Directive
        - Component Directive, each componenet by-default a directive and it can be re-used as custom HTML Element in other components
        - Attribute Directives, used to change behavior of HTML ELements
            - ngModel, two-way binding
            - [value], [hidden], [disabled], [required], etc.  
        - Structural Directivs, used to add/remove HTML from DOM based on Conditions
            - *ngFor, execute for..of loop to add HTMl DOM based on arrays
            - *ngIf, executes if condition
                - *ngElse
            - *ngSwitch, *ngSwitchCase
            - Angular 17 has the @for, @if, @else, @swicth, @case, @empty constructs those replaces the Structural Directives     
    - Creating Custom Directive
    - Using Custom Directive on Component
- Creating Angular Service
    - Utility Logic Services
    - Dependency Registration and Injection of Service
    - Service for Establishing Communicaiton Across Components
    - Service for managing Asynchronous HTTP Calls to REST APIs
    - Http Interceptors
- Single Page Application using Angular
    - Routing
    - Sharing Data Across Components using Routing
    - Lazy Loading
    - Guarded Routes
- Deployment

# Component Development Guidelines
- Try to eliminate the unnecessary hard-coding for static data properties if there is posisbility of change or modification in data proeprties
    - This is mandatory if the data and its schema (property names) are received from external service HTTP Calls
- If the same User-Interface (UI) is frequently used across same or various components in the application, then consider creating a custom re-usable component   
    - Plan for the UI Requirements for the Custom Reusable component
        - You decide the standatd HTML required to create/generate UI
    - Plan for the behavior of this component when it is used as a child in parent component
        - Plan for Data
            - Data passed to child component from its parent
            - The @Input() decorator to pass data from Parent to child
                - The Reusable component will have a public get/set property where the 'set()' is applied with '@Input()' decorator so that parent can pass data to it
            - The proprety which is applied with '@Input()' decorator is used for 'Property-Binding'
        - Plan for Data Emission from Child to Parent
            - Define an event in Child Component that will be responsible for emittng data to parent 
            - The child component will have the 'EventEmitter<T>' object decorator with '@Output()' decorator
                - EventEmitter<T>, used to define a custom event in Angular
                    - T is the 'payload' aka the type of data emitted to parent component
                    - The 'emit()' method will emit the data to parent
            - The '@Output()' decoarated custom event defined in child component will be used for 'EVENT-BINDING' in parent component so that the data emitted from child will be listened by the parent
                - To subscribe and read data emitted from the child, the parent uses the '$event' parameter
                    - A standard JavaScript object that represents 'Event Payload'