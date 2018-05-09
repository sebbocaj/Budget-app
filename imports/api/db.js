export const Budget = new Meteor.Collection(null);

var Budgetdb = new LocalPersist(Budget, 'budget-Cart');