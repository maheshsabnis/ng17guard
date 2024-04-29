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

# Angular Forms
- Using HTML 5 Validators
    - Use the HTML ATtributes for Validating User-Inuts
        -  required, pattern, min, max, etc.
- Template Form
    - A Standard form of which behavior of Data Changes aka Binding is handled using '[(ngModel)]'
        - Raises Change Event for each change in UI Element
        - FormsModule from @angular/forms
- Reactive Forms
    - A smart behavior set of HTMl Forms
    - Uses 'ReactiveFormsModule' from @angular/forms to provide new Object Model to manage the Execution of HTML Form 
        - New Object Model, de-couples the Model class from the UI
        - FormBuilder
            - An object that bulds the React Form from HTML '<form>' tag
                - Maps the <form> tag to 'ngForm' internally
            - The 'group' property of the FormBuilder, provides an instance of 'FormGroup' class
        - FormGroup
            - A class that represents 'collection' of Form elements (e.g. inout, select, etc.) present under '<form>' tag
                - The 'collection' is of the type 'FormControlCollection'
                    - The 'FormControlCollection', is a bridge between 'Form element' and 'Model class property'
                    - This bridge maps the public property of model class with HTML elements using 'formControlName' attribute directive
                    - Each 'formControlName' is an instance of 'FormControl' class 
            - The 'value' property
                - The value collection entered in each 'FormControl'
            - The 'setValue()' method   
                - USed to set values for every FormControl under the FormGroup
        - FormBuilder, FormGroup, FormControl are derived from 'AbstractControl' base class
            - The 'FormControl', has a constrctor with 2 parameters
                - Parameter 1: The public property from the Model class
                    - Also known as 'Form-State' or 'State', the value that is either presented or received from End-User
                - Parameter 2: The Validators.compose([RULES-FOR-MODEL-PROPERTY-VALIDATION]) 
                    - The 'Validators' class with following static methods
                        - required(AbstractControl),requiredTrue(AbstractControl),nullValidator(AbstractControl)
                        - minLength(int), maxLength(int)
                        - pattern(string|RegEx)
                        - compose([ARRAY-OF-VALIDATION-METHODS]) , composeAsync([])
                    - IMP: Validation method that accepts 'AbstractControl' as input parameter need not to be passed then 'control' as input parameter while invoking instead this will be implicitly reading the HTML Control's reference using the 'formControlName' attribute 
            - frmProduct.controls['ProductId'].dirty && !frmProduct.controls['ProductId'].valid
                - frmProduct.controls['ProductId']
                    - The FormControl instance with key as 'ProductId'
                - frmProduct.controls['ProductId'].dirty
                    - The FormControl is 'changed' i.e. dirty so that the Validation Rules are activated
                - !frmProduct.controls['ProductId'].valid
                    - The FormContol with Key as 'ProductId' is 'not valid'   
        - Custom Validator
            - Create a class with static method
            - This method will either accept an 'AbstractControl' or any other type as input parameter
                - Note: Recommended to accept AbstractCOntrol, so that we can easily read value from it
            - This method return 'any' because of following reason
                - if value is valid then 'null' is return
                - else for invalid value a JSON object will be retrned
                    - e.g. {invalid:true} OR {valid:false} or {data:false}

- Some Considerations while Working with Forms (Even for all components)
    - Make sure that the component implements 'OnInit' interface and implements its 'ngOnInit()' method
    - This method contains the code that is resource intensice 
        - e.g. 
            - HTTP calls
            - SUbscription with the Shared State Across Components
- Dynamic Forms (Angular 15+)
    - FormArray
        - An Explicit Array for Formontrols
    - FormRecord
        - Represent the Dynamic Form Generated and also represents the FormData with Validations 

- Direcctives in Angular
    - They are objects those are responsible for
        - Behavior of HTML Element
            - ngModel
            - IMP:
                - The HTML Element is 'self-responsive'
                    - Use in-built event binding
                        - Sufficient in most of the case
                            - change, keyup, keypress, blur, etc.
                            - Make sure that the 'event-payload' i.e. '$event' is used for passing UI elements data to component in-case where 'ngModel' is not necessary
                            - $event.target.value (in HTML-Template) OR
                                 event.target.value
                        
                                - $event: Payload, the data for HTML ELement
                                - $event.target, the HTML element on which an event occurred
                                - $event.target.value: The actula value entered in HTML element  
                            - IMP: If the data to be filtered by making HTTP Calls then avoid to execute the HTTP call in the 'change', 'keyup', 'blue', etc. event, this will increase HTTP Network Traffic
                    - Create a Custom Directive for Attribute
                        - Custom behavior to be applied on one-or-more elements based on freqnently changed events e.g. mouse events then consider creating a 'custom arrtibute directive'
                            - THis directive will listen to event on UI to set the behavoir of HTML element and manage its rendering
                        - Rules for Creating Custom Attribute Directive
                            - Class will be decorated with '@Directive' decorator
                            - Since the attribute directive will create a 'custom HTML Attribute property' that will be used for 'PROPERTY-BINDING' e.g. [ATTRIBUTE-NAME], the 'selector' property of 'Directve' class MUST be defind using '[ATTRIBUTE-NAME]' syntax  
                            - The directive MUST be constructor injected with 'Renderer2' and 'ElementRef' classes 
                                - ElementRef: This will be referred to acces the UI element on Broswer i.e. COmponent's HTML Template on which the directive will be applied 
                                - Renderer2: Used to define rendering of HTML element after the custom directive is activated
                            - Events defined in Custom Directive will be registered on DOM using 'HostListener' class      
                            - Since the Attribute Directive accepts an input from Component, this must define a @Input decorated property in Custom Directive that will be mapped with the 'selector'
                    - Create a Custom Pipe for Behavior
        - Behavior of UI as a complete Autonumous Object
            - Component Directive
        - Behavior of Objects to Generate HTML Element
            - Structural Directive

# Angular Services
- A Reusable object that is used for
    - Containing the logic that can be used across all other objects of Angular application
    - Sharing Data Across Components (Very Popular)   
    - Managing Heavy-Load Operations e.g. HTTP Calls, Socket Calls
- Services are Registered in DI Container of the Angular Application
    - The service class is Decorated usign @Injectable() decorator, this has the 'providedIn' property
        - providedIn: 'root' | 'platform' | 'any'
            - 'root': The Application-Level injector. All Objects (Components, Services, Directives) can be injected with the root provider service. Mostly used across all Angular Apps
            - 'platform': Shared by all Angular Apps loaded on the Page
            - 'any': The Object is available across 'Shared' modules as well as 'Lazy-Loaded' modules
            https://angular.io/api/core/Injectable#providedIn
             
- Angular Services for Containing and Managing Asynchronous HTTP Calls
    - The 'RxJs', the Reactive Extension for JavaScript
        - The 'Observable',
            - The object that is responsible to subscribe to call-back to monitor the data availability
            - When the data is available it is dispatched to the subscriber and hence make the subscriber free from waiting for the data   
            - Observable(next, error, complete)
                - next: callback for Success, this accepts 'response' object
                - error: error callback, accepts the 'Error' object
                - complete: callback to release the client form observable           
    - The Angular Object model for HTTP
        - HttpClient class to Manage the Async HTTP Communicaiton
            - Injected in the Angular Service
            - This is Resolved by the HttpClientModule from @angular/comman/http package
            - Methods
                - get(), post(), put(), and delete() method
                    - Each method returns 'Observable<T>'
                        - T is the response object
                    - FIrst parameter to each method is URL
                    - post() and put()
                        - Second Parameter as 'body' data
                            - The data that is to be posted or updated
                    - get() and delete() methods has second paraneter as HttpHeader
                        - Header for
                            - AUTHORIZATION
                            - CUSTOME VALUE
                    - post() and put() methods has third parameter as HttpHeader
                        - Content-Type aka MIME Type
                        - AUTHORIZATION
                        - CUSTOME VALUE

- SQL-AspNetCore-Angular-NetCore (SAAN)

- Angular Single Page Application (SPA)
    - @angular/router
        - RouterModule
            - Container Object Model for handling Routing in Browser
            - Routes: A route table that will be created in browser
            - Route: Each entry in Route Table is Route object
                - path: The URL for querying to table for navigatoion
                - component: The name of the component to navigate to
                - children: Sub-Routing, a child Route Table. One route can have child routes
                - loadChildren: For Lazy Loading
                    - Used to load the component lazily
                    - This component (and hence its module will not be already loaded in browser)
                - canActivate: Used for Guarded Routes, used based on Authentication information received from the server
                - data: The Authentication data based on which the  routing will be executed
            - Router: Class that is used to perform explicit navigation across components based on events e.g. Route in buton click
            - ActivatedRoute: Use to read the parameter current preent in active URL of browser
            - [routerLink]: The Attribute Directive applied on '<a>' tag to query to the Route table for navigation
                - e.g.
````html
                    - <a [routerLink]=['']>
````
            - RouterOutlet: A Component Directive that acts as a placeholder to load the component that is to be loaded while routing
````html
            <router-outlet></router-outlet>
````

- Controlling Angular ROuting with Security 
    - The 'canActivate' property of 'Route' object
        - Loads and use the Angular Service that manages the routing based on security
            - Security Service: User and Roles Based Login Process based on Server-Side APIs
            - Guard Service: The service that is injected with following 2 objects
                - The Security Service
                    - Must provide a notification that the use is loggedIn
                        - UserName or RoleName or Token
                - The Router Object
                    - Based on the State of Authentication it will redirect to the requested URL
                        - Either a Fix URL that will be redirected after authentication
                        - OR a return URL that was requested before login  or authentication (a return url) 
    - Login Process MUST use the Login 'State' Information (?)      
        - The Login State means the Authentication Information (Token / AuthKey) thats MUST be send to Server-Side from client for each request so that the Server-Side can verify the User's Identity
            - If the client is browser, then store information in Browser's STorage 
                - loaclStorage, sessionStorage, indexedDB, etc.
        - The Auth Guard can make use of the  Login State to manage the Route Navigation
    - Depricated Objects for Guard
        - ActivatedRouteSnapshot and RouterSnapshot         
            - ActivatedRouteSnapshot: Verify the route path from ROute Table
            - RouterSnapshot: Used for the return URL so that after the authentication navigate to the requested URL      
        - The 'CanActivate' interface with its 'canActivate(ActivatedRouteSnapshot,RouterSnapshot)' method
            - Responsible to contains logic for the Guarded Routes
    - Angular 15+ Guards
        - Create a function that is injected with the Authentication Service and Router and this will contain logic for navigation after the login state information is found
        - COnfigure the 'canActivate' property of 'Route' class to this method    
- HttpInteceptor
    - AN Object that modifies the ougoing HTTP Request as well as an Incomming HTTP Response from and to Angular application
        - A Centralized Logic that will be incorporated in every HTTP COmmunication from each Angular Service Object

        - @angular/common/http
            - HttpInterceptor interface
                - The 'intercept(HttpRequest, HttpHandler):Observable<HttpEvent>' method 
                    - HttpRequest: Represent a current outgoing request
                    - HttpHandler: An object that provides an access of current Http Communication and allows to modify it as per the need
                    - HttpEvent: Represent the Http Communication Status after the modification
            - Upto to Angular 15, The Interceptor is a class that implements HttpInterceptor interface and implements its intercept() method with Request Modifiiction Logic
                - The Actual HTTP Logic service  (get/post/put/delete) is injected in the interceptor class using constructor injection
                - We used to register this class as dependency in Angular Module i.e. @NgModule in its provders property
                - Refer: https://www.webnethelper.com/2020/01/authenticating-angular-8-client.html

            - ANgular 15+
                - HttpInterceptor is a method that return HttpInterceptorFn class it contains logic for Modifiying the request
                    - We regiser it as dependency in the app.config.ts file using the following method
                        - provideHttpClient(withInterceptors([INTERCEPTOR-METHOD]))

- Pipes
    - The 'CommonModule' from  @angular/common package defines all pipes
    - date
    - currency
    - uppercase
    - lowercase
    - decmimal
    - json
    - async

- Apply pipe
    - {{value | PIPE-NAME: PIPE-PARAMETERS}}
        - value: The data that is to be transformed
        - PIPE-NAME: the transform request to Angular so that, the pipe the 'trasform()' method from the Pipe class is invoked and value will be transformed
        - PIPE-PARAMETERS: Arguments those will be used by the transform function to transform value     


# Advanced Angular Cosiderations
- Use "an effective Object Model" (?) for dealing with Data that is demended by one-or-more components  
    - Read-to-use Objects /  Operators / APIs /  Methods to deal with effeict Data management
    - Mandatory Dependency of Angular on 'RxJs'
        - Observable, the Core Type of RxJs
            - Uses an 'Observer' pattern to manage object(s) and its Subscriber(s) to that latest data can be delivered to each of the Subscriber from object.
                - a lazy push collection of multiple values so that they can be delivered to subscriber based on Operators and APIs
                - Operators
                    - map()
                    - filter()
                    - ......
                - API
                    - pipe()
                    - SwitchMap()
                    - forkJon()
                    - combibeLatest()
                    - merge()
                    - ....
        - Observale
            - Created using 'new' nmoniker
                - myObseravble = new Observable(Observer object to create an observable)
            - create using operators objects from 'rxjs'
                - of(), from()
                    - of(STREAM-OF-VALUES)
                    - from (JS-ARRAY)
            - IMP POINT
                - Use '$' suffix to define an observable
                    - e.g.
                        - data$
                            - Default observable in Angular
        -  fromEvent()
            - A special object that is used to track and monitor an event on DOM and emit the notification from it
        - Subject
            - A special Type on Observable that allows values to be multicasted (processed) to many Observers.
                - This acts as a Observable (Receiveddata agains time) as well as observer (Listen to data changes)
                - The moment the data is changes, it will emitted to subscriber using the 'next()' method
                - All Subscribers will get this new value
            - BehaviorSubejct
                - A varient of the Subject 
                - Needs an initial value and when the value is changed this current vale emitted
            - AsyncSubject
            - RelaySubject
    - OPerators to QUery to Observables
        - take(), takeLast(), takeUntil(), takeWhile()
        - skip(), skipUntil(), skipWhile()

        - Operatots to extract count of records emitted by the obserable
    - metgeMap()
        - The Operator method that will be used to merge various observable together
        - use this operator when you want to work with mutiple observables at a time
        and smothly pipe from one observable to other observable  


- If the data is large endough to maintain in browser and it is also demanded by various components 'on-demand-based-on-query' then consider using 'Application State Management' (?)
    - Ready-to-use Object Model that will be used for Application State Management in Browser

- RICH and effective UI with Responsiveness then use 'Read-to-use-and-customizable' UI Components
    - Project Specific re-usable UI Components, designed and developed by the TEAM
    - Vendor-Specific UI Components OR CLIENT-SPECIFIC-COMPONENTS, Designed by TEAM or Provided by the Vendor
    - Use of LitElements or Material Elements 

- Hybridization of User Interface along with its underline Object Model     
    - JS Agnostic Libs / Frwks Object Model

- Angular Project Architecture
    - Monorepo, using Nx
        - Source Code
        - CSS
            - LESS
            - SCSS
        - Third-Party JS Files    

# NgRx
- Its a framework used for following or having following features
    - Manage the Global and Local State
        - For all components
        - For a Single Component
    - Cleaner Component architecture
        - Isolate a Component from all Side-Effects (Aync Operations e.g. HTTP Calls)
            - All Side-Effects are delegated to other objects aka Effect
    - Integration with Angular Router
    - Developer Tools
    - Entity Collection Management for Data/Schemas/Queries  

- NgRx Core Objects
    - Model class
````javascript
export class Department {
  constructor(
    public DeptNo:number,
    public DeptName: string,
    public Location: string,
    public Capacity: number
  ){}
}

````
    - Store
        - The Global Application State
        - Each Components subscribe to the store
        - The Store is always updated by the Reducer
        - The Component can query data from the Store using the Selector Queries
````javascript
/* Define a State Schema here, the Application will use this state from the Store */

import { Department } from "../models/app.department.model";

/* Define an Interface that will make sure that, the propser query data will be emitted to the componsment  using the state */

export interface IDepartmentState {
   departments:Department[], /* For all Depertments */
   department: Department, /* For creatng / updating / Deleting Department */
   selectedDepartment: Department  /* For Selecting the Department for Update / Delete */
}

/* Define an Initial State */

export const initialState: IDepartmentState = {
   departments:[],
   department: new Department(0,'','',0),
   selectedDepartment: new Department(0,'','',0)
}

/* Define a Store */
/* This is the Schema of the Store that will be loaded when the App is locaded and Initialized */

export interface IAppStore {
   appStore: IDepartmentState
}



````



    - Actions
        - Methods those are dispached by the Component aka Input Actions
        - Alternatively, an effect can also dispatch action aka Ouput Actions
        - These actions may have input parameter
        - If these actions are returning a data, then it is called as 'Payload'
        - Please do not write heavy-loaded logic e.g. HTTP Calls, Network Calles, etc. in action. Instead use Effects for the same  
        - Actions tells 'What has happened?'
        - The 'createAction()' function object from '@ngrx/store'
            - The default payload is declared using 'props' object from '@ngrx/store'
````javascript

/* Define actions here */
import { createAction, props } from "@ngrx/store";
import { Department } from '../models/app.department.model';

/* Lets Define an action */
/* The action to create new Department, the props aka the payload if of the type Department, that represents the data that is send by the Component*/
export const postDepartmentInput = createAction(
  '[postDepartment] New Department Input',
);

export const postDepartmentSuccess = createAction(
  '[postDepartment] New Department Success',
  props<{department:Department}>()
);

export const getDepartmentsInupt = createAction(
  '[getDepartments] Get All Departments Input',
);


export const getDepartmentsSuccess = createAction(
  '[getDepartments] Get All Departments Success',
  props<{departments:Department[]}>()
);


````
    - Reducers
        - An object that is contineously in excution at global level
        - THis monitors each action dispatched from Component or from effects
        - The output from an action is read bu reducer so that it can be updated in store
        - Please do not write any business logicin these function object
        - Technically, it is a function that has same input and output parameters aka A Pure JavaScript Function  
        - The 'createReducer()' function object from '@ngrx/store' is used to create reducer
            - This has 2 parameters
                - Initial State
                - an 'on()' function object, that is used to listen to the dispatched action and accordingly read data from Store and return it
````javascript

/* Defining Reducers */

import { createReducer, on  } from "@ngrx/store";
import { initialState } from "../state";

/* Import all action methods at once */

import * as DepartmentActions from './../actions';

/* The reducer funciton will update the initialState based on the payload returned by each function  */
export const departmentReducer = createReducer(

  initialState,
  on(DepartmentActions.getDepartmentsSuccess, (state, {departments})=>({
    ...state, /* The State from the store from which data is picked */
    departments /* Actual Data that is picked */
  })),
  on(DepartmentActions.postDepartmentSuccess, (state, {department})=>({
    ...state,
    department
  }))
);

````
    - Effects
        - Objects those are responsible for isolating 'Side-Effects' from components
        - They are responsible for managing all async calls
        - Effect dispatches an output action when the Async Operation is over (Success /  Fail)
        - Uses RxJs Oprators for managing Observables
        - Its an Angular Service
    - Selector
        - A PURE function, this is used to Select piece of data from store
        - The 'createSelector()' function object from '@ngrs/store'
````javascript
/* The Selectors, this will be used by Components, Effects to Query to store for data*/

import { createSelector } from "@ngrx/store";

import { IAppStore, IDepartmentState } from "../state";

/* Subscribe to the Store So that all data from the Store is avaiable for query */

export const appStore = (state:IAppStore)=> state.appStore;

/* Define Selectors for Query to the 'appStore'*/

export const selectDepartmentsSelector = createSelector(
  appStore,
  (state:IDepartmentState)=>state.departments /* Get all Departments from 'appStore' */
);

export const selectADepartmentSelector = createSelector(
  appStore,
  (state:IDepartmentState)=>state.selectedDepartment /* A Single Department */
);


````
    - Entity
        -  State Adapater for managing record collections 
    - Views
        - Angular Components
- Packages
    - @ngrx/store
    - @ngrx/effects
    - @ngrx/entity
    - @ngrx/store-devtools
- Steps of Implementation
    - Define State
    - Define Selectros
    - Define Components
    - Define Actions
    - Define Reducers
    - Define Effects 

# Using Micro-FrontEnd using Nx
1. Install Nx Globally
    - npm install --global nx
2. Create a Workspace for the Project
    - npx create-nx-workspace@latest
3. Add Applications for Micro-Front-Ends
    - Shell
        - nx generate @nx/angular:app shell
    - Angular App
        - nx generate @nx/angular:app customer-mef
        - nx generate @nx/angular:app order-mef
    - Add Library
        - nx generate @nx/angular:lib shared-data

4. Creating Micro-FrontEnd (MFE)
    - install the Module Fedaration
        - npm install @angular-architects/module-federation

    - Confogure the Shell App as a Host / Container Application for the MFE App 
        - nx g @angular-architects/module-federation --project [PROJECT-NAME] --port [PORT-NUMBER-FOR-HOSTING-SHELL-PROJECT] --type host
        - e.g.
            - nx g @angular-architects/module-federation:init --project Shell--port 4200 --type host
    - The Shell has to call the Remote MFE App, we need to inform the Shell that which is remote MFE App
        - nx g @angular-architects/module-federation:init --project customer-mef --port 4300 --type remote
        - nx g @angular-architects/module-federation:init --project order-mef --port 4400 --type remote
5. If using CSS in project
    - Style.css modify as follows
        - @import [RELATIVE-PATH-FOR-CSS-FILE]
6. Provide Metanames of All Remote Projects to Shell app so that the Shell app will load modules from it dynamically
    - In Shell Project create a fiele named decl.d.ts, and declare all Remote Projects in it
        - declare module 'customer-mef/Module' 

# Micro Front-End using Angular Workspace
1. Create a Workspace
    ng new angularapp-mfe --create-application false --skip-tests
2. Add Angular Apps in Workspace, this will create a Project Folder and add new Angular app in it 
    - ng g app customer-mfe --skip-tests --routing
3. Add a New HomeComponent to this application. The following command will add a new folder named 'components' in the 'customer-mfe' project
    - ng g c components/home --project customer-mfe
4. In the customer-mfe app add a new Module, this will be a feature Module (A Child-Module) which will have components in it. The following command will generate a new module named 'customer'
    - ng g module --project customer-mfe --routing customer
5. Add a New Component NAmed CustomerList in the CustomerModule using the FOllowing command, this will add a new folder named 'components' in the 'customer' folder
    - ng g c --project customer-mfe --module customer customer/components/CustomerList
6. Modify the customer-routing.module.ts by adding route for 'CustomerListComponent'
````javascript
/* Define Routing */
const routes: Routes = [
  {
    path:'customers',
    component: CustomerListComponent
  }
];
````

7. Lazy Load the CustomerModule in the customer-mfe project's app.routes.ts 
````javascript
export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full' /* The HomeComponent from customer-mfe app only */
  },
  {
    path: 'customerslist',
    /* Lazy Load the CustomerModule, and hence all components from it will be lazily loaded */
    loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)
  }
];

````
8. Install bootstrap and Other JS libs if required
 - npm install bootstrap jquery

9. COnfigure the bootstrap in angular.json

````javascript
....
 "styles": [
              "projects/customer-mfe/src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
            ......
````

10. The Customer Model in Models folder of customer-mef project

````javascript
export class Customer {
  constructor(
    public CustomerId:number,
    public CustomerName: string
  ){}
}

````

11. Some Default data for Customers in CustomerListComponent

````javascript
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/app.customer.model';

@Component({
  selector: 'app-customer-list',
  // standalone: true,
  // imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  customers:Array<Customer>;
  constructor(){
    this.customers = new Array<Customer>();
  }
  ngOnInit(): void {
     this.customers.push(new Customer(101,'Mahesh'));
     this.customers.push(new Customer(102,'Tejas'));
     this.customers.push(new Customer(103,'Amit'));
     this.customers.push(new Customer(104,'Ajit'));
     this.customers.push(new Customer(105,'Abhijit'));
     this.customers.push(new Customer(106,'Mayuresh'));
  }

}

````

12. The Customer Table to show the Customer List in html of CustomerListComponent

````html
<h3>Customer List Component</h3>


 <table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>
        Customer Id
      </th>
      <th>
        Customer Name
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let cust of customers">
       <td>{{cust.CustomerId}}</td>
       <td>{{cust.CustomerName}}</td>
    </tr>
  </tbody>
 </table>

````
13. Navigation Link for customer-mfe in app.component.html of custimer-mfe project

````html
<h2>The Customer Micro Frontend App</h2>
<nav class="navbar navbar-expand-lg bg-primary bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Customer Micro-Frontend</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="['']">Home</a>
        </li>
        <li class="nav-item">
          <!--The ROuter Link for Lazily loaded Component-->
          <a class="nav-link" routerLink="customerslist/customers">Customer List</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>

````
14. Make sure that, the RouterModule is referred in the app.componnt.ts of customer-mfe project

````javascript
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-mfe';
}

````

Follow steps from 2 to 14 for each MFE Project by adding Components, MOdules, Models, Services, ROuting , etc. as the need

# The MOST imprtant Steps for Creating the Module Ferederation for the Application
15. install the  @angular-architects/module-federation
    - npm install @angular-architects/module-federation
16. Make the customer-mfe is the Remote Project. The following commnad exposes the 'customer-mfe' remote project on port 4200
    - ng add @angular-architects/module-federation --type remote --project customer-mfe --port 4200
    

17. The webpack.config.js in customer-mef project will be as follows
````javascript
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'customer-mfe',

  /* Since the Angular 17+ Standalone Components is used in customer-mfe project
   the 'exposes' will accepts the entrypoint as app.component.ts for the remote application
  */
  exposes: {
    './Module': './projects/customer-mfe/src/app/customer.module.ts',
  },

  /** Used in Case when multiple Remotes wants to share common JS Packages */
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

````


# Creating a Shell Project

18. Run the FOllowing command to create a new Workspace for Shell Project
-ng new ecomm-host --create-application false --skip-tests
19. Create a shell application
    - ng g app ecomm-shell --skip-tests --routing
20. Lets add a components, then install bootstrap and modify the angular.json like the customer-mfe application
    - ng g c components/home --project ecomm-shell     
21. Create a ROuting for HomeComponent in app.routes.ts of shell project
````javascript
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  }
];

````

22. VERY IMPORTANT STEP
    - COnfigure the Shell Project to run on Port 5200
    - ng add @angular-architects/module-federation --type host --project ecomm-shell --port 5200 
23. In the shell project, the 'ecomm-shell' project, in 'src' folder add a new file name 'decl.d.ts' and add the module path for the Exposed component
NOTE: We need this file to prevent the compiler errors while defining the Routing in Host/Shell project for Remote module
````javascript
declare module 'customer-mfe/Module'
````

24. MOdify the app.route.ts to define routing for the Remote projet(s)
````javascript
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'cust',
    loadChildren:()=>import('customer-mfe/Module').then(m=>m.CustomerModule)
  }
];


````