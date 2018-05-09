import React from 'react'


export default class Expense_item extends React.Component{


        render(){
                   return(
                	
                        <div>
                            <div>{this.props.expense_category}</div>
                            <div>{this.props.expense_name}</div>
                            <div>{this.props.expense_amount} €</div>
                        </div>
                        
                )
        }
}