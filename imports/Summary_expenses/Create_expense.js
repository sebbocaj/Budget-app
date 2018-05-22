import React from 'react'
import { Expense }   from '../api/expenses'


export default class Create_expense extends React.Component{

    constructor(){
        super()
        this.state = {
            category:'',
                }
    }

        AddExpense() {Expense.insert({'name':this.props.ActualProject.name, 'Expense_name':this.refs.expense_name.value, 'Expense_amount':this.refs.expense_amount.value,'category':this.state.category},(err,done)=>{
            })
            this.props.changePage('Expenses')
        }

        ChooseCategory(e) {     
            this.setState({category: e.target.name})      
        }

        render(){
                return(
                <div className="create_expense">
                    <h1>Create expense</h1>
                    

                        <div>
                                <p>Expense Name <br/>
                                <input ref="expense_name"
                                />
                                </p>
                                <p>Expense Amount <br/>
                                <input ref="expense_amount"               
                                />
                                </p>
                        </div>

                                        <p>Choose a Category</p>

                    <div onClick={this.ChooseCategory.bind(this)}>
                        <img name="Restaurant" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524498150/restaurant.png"/>
                        <img name="Transport" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524499475/transport.png"/>
                        <img name="Hotel" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524499531/hotel.png"/>
                        <img name="Activity" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524499572/activity.png"/>
                        <img name="Gift" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524499618/gifts.png"/>
                        <img name="Other" src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1524499346/other.png"/>
                    </div>
                    
                    <div className="submit_button_expense">				
                        <img  onClick={this.AddExpense.bind(this)} 
                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523893087/bouton_create.png" />
                        </div>
                   
                  
                </div>

                )
        }
}