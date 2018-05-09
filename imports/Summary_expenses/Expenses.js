import React from 'react'
import Expense_item from './Expense_item'



export default class Expenses extends React.Component{



        CreateExpense() {
                this.props.changePage('Create_expense')
        }

        render(){
                return(
                <div className="expenses">
                    <h1>Expenses</h1>
                    <div className="list_expenses">
                        <div>
                                <div><b>Category</b></div>
                                <div><b>Description</b></div>
                                <div><b>Price</b></div>
                        </div>
                        {this.props.expenses.map(function (ele,i) {
                                
                                return (
                                        <Expense_item 
                                                expense_category={ele.category}
                                                expense_name={ele.Expense_name}
                                                expense_amount={ele.Expense_amount}

                        		/>
                                )
                                
                                }
                        )
                        }
                        </div>

                        <div className="create_button_expense">				
                        <img onClick={this.CreateExpense.bind(this)} 
                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523550012/create_button.png" />
                        </div>

                </div>

                )
        }
}