import React from 'react'
import Category from './Category'

export default class Summary extends React.Component{

        render(){      	

                let total=0;
                this.props.expenses_total.map (function (ele,i) {
                        return  total += Number(ele.Expense_amount);
                               
                })

                return(
                <div className="summary">
                	<h1>Summary</h1>
                        <div>
                                <p>Initial : {this.props.ActualProject.amount}</p>

                                <p>current balance : {this.props.ActualProject.amount - total}</p>   
			</div>

                        <Category expenses_total = {this.props.expenses_total}
                                                total = {total} />
                </div>

                )
        }
}