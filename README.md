Income Expense Calculator
An intuitive web application to help users manage their finances by tracking income and expenses. The Income Expense Calculator allows users to add, edit, and delete entries, filter transactions, and save data locally, offering a clear overview of their financial status.

Features
Add New Transactions: Easily add income or expense transactions with a description and amount.
Edit and Delete Transactions: Update or remove transactions directly from the list.
Filter Options: Quickly filter transactions by all, income, or expenses.
Local Storage: Data is saved to the browser’s local storage for persistent access across sessions.
Financial Summary: Displays total income, expenses, and net balance.
Responsive Design: Fully responsive for desktop and mobile use.
Built With
HTML for structure
CSS for styling (custom styles and Font Awesome for icons)
JavaScript for DOM manipulation, calculations, and local storage management
Font Awesome for edit and delete icons
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/username/income-expense-calculator.git
Open index.html in your preferred web browser to launch the application.

Usage
Adding Transactions:

Enter a description and amount in the respective fields.
Click "Add Transaction" to save the entry. Positive amounts are treated as income, while negative amounts are treated as expenses.
Editing Transactions:

Click the edit icon next to any transaction to modify its details.
Deleting Transactions:

Click the delete icon next to any transaction to remove it from the list.
Filtering Transactions:

Use the radio buttons to filter transactions by all, income only, or expenses only.
Resetting Fields:

Click "Reset" to clear input fields for adding a new transaction.
Code Structure
index.html: The main HTML structure.
style.css: Contains all the CSS for styling the app.
script.js: Handles functionality such as adding, editing, deleting transactions, updating totals, filtering, and storing data in local storage.
Local Storage
This app uses local storage to save transaction data. When the app is reopened, previously saved transactions will be loaded, providing a consistent user experience.

Credits
Font Awesome for icons.
Custom icons for delete and edit actions, with intuitive designs for better user interaction.
