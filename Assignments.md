# Date: 20-March-2024
1. Create a Calculator having same look like Windows Calculator
    - No Google
    - Numbers should be displayed in Input element on Button click
    -   +, -, *, /
    - Use Math class for following operations   for buttons
        - sqrt
        - square
    
# Date: 21-March-2024

1. (Submission-Today)Create a DataGrid in Angular Application, using HTML Table UI. This DataGrid Must have following Specifications
    - Its Must accept the DataSource of the Type Array<any>
        - If this array is EMpty or null, then the Component should dispay message on Patent's UI that 'No Data to Show'
    - The Table Header and Body Must be generated based on the Schema present in the DataSource passed from Parent to Child
    - The DataGrid Component must have a Property named 'CanDelete' of the type boolean, if this is set to 'true', then each row of the DataGrid should add the button for deleting the row. When this button is clicked, the row must be deleted from the DataSource input received from the Parent
    - When a Row is selected, then the selected row's data must be shown in all input elements of the Parent  
    - If the Parent is already using any other custom elements, e.g. SelectComponent, then selected rows' data for the select component must be shown by changing the data for it
2. (Submission Tomorrow)
    - The Header row should show the 'Checkbox' in first columns and for all rows the first columns MUST show the checkbox
        - When the header row checkbox is 'checked' then checkboxes for each row must be 'checked', same for unchecked
        - In each column header show two buttons named 'sort' and 'reverse' (YOU may use bootstrap CSS for showning Sort/Reverse icons)
            - When sort button is clicked, show the DataGrid data in sorted order by that column, do the same for reverse button

# Date:22-March-2024

1. Validate the ProductComponent based on the Following validations
    - The ProductName is mandatory and must start with UpperCase Characters
    - The ProductId must start with word 'Prod-'
    - The ProductId must be Unique
2. Create a Dynamic form for Product where the Category and Manufactureres MUST be HTML select elements  


3 Date: 26-March-2024

1. Create a SearchService in Angular. This service will have a string property named 'SearchedText', an EventEmitted name 'searchRequestReceived', and a method named 'OnSearcRequestedReceived(text:string)'. This method will accept search Text from the component and based on the searche Text, it will filter data from other component

2. Create a SearchComponent in Angular that will have an InputElement. This componentwill be injected by SearchService to accept the search data entered in the Input element.

3. CReate PersonListComponent to show list of products, Create EmployeeListComponent that will sheo List of Employees. 

4. When a Search text is entered in SearchComponent's Input element, whichever the List component shown below it either ProductsListComponent or EmployeeListComponent, the data must be filtered from thse component based on the search string


# Date: 27-March-2024
1. Create Angular Component (one Single Component) for following
    - Create New Role
    - Create New User and Assign Role to it
    - Authenticating the User
    - Performing CRUD Operations on CategoryAPI
# Date: 28-March-2024
1. Complete SPA to perform CRUD operation with the product. 

# Date: 29-March-2024
1. Let the ASP.NET Core API use the Role BAsed Security
2. In Angular Application, make sure that the following Component as accessed by specific roles
    - ListCategories, ViewSpecificCategory: Manager, Clerk, and Operator
    - Create , Update: Manager and Clerk
    - Delete: Manager

    path: 'manager', component: ManagerComponent, canActivate: [AuthorizationGuardService],
    data: {roles: Roles.Manager},    
3. Make sure that the RouteLinks are visible only to the role of Login Authenticated User
````javascript
    - @if(Role === 'Manager' || Role === 'Clerk')
        - <a [routerLink]='[create]'>
````


Date: 1-April-2024

1. Create an angular service that will use Behavior Subject to provide data communication scross components based on following requirements
    - Once the Category Name is selected from the Dropdown of one component, the products component should show all products of that category and the Customer Component should shlo list of those products for which orders are placed by these customers 
        - Categories
        - Products
        - Customers
        - Orders


# Date: 25-April-2024

1. Complete the Angular App with NGRX for CRUD and Search Operations on Store for Products based on Category
    - Design Actions, Effects, Reducers, Selectors accordingly
    - Create routes for CRUD operations as well as search of Products based on Category NAme by querying to the Store     

# Date: 30-April-2024

1. Modify the MicroFront-End App to do the following:
    - Modify the App to use the serach in Inventory-MFE as well as Order-MFE
        - Inventory-MEF will filetr data based on the Product Name
        - The Order-MFE will Show the orders placed by Customer or for Product Name


    - The Customer-MFE Applicaiton will dispatch an event on click of the Customer Table where ths event will carry customer data e.g. Name of the customer in event details object.
    - The Event information will be subscribed by the Shell and then when the Order-MEF is loaded, let it show orders placed by that customer  


 # 01-May-2024
 1. Use the Table Component from Angular Material and do the Following
    - Show CheckBoxes for Each Row in the Table
    - Show Delete Button at the Bottom of Table
    - WHen rows are checkd using the checkbox and Delete Button is clicked, those rows must be deleted
    - Show a TextBox above the table, filter the data in Table based on the Data entred in the TextBox   