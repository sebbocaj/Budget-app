export const Expense = new Meteor.Collection(null);

var Expensedb = new LocalPersist(Expense, 'expense-Cart');