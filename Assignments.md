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