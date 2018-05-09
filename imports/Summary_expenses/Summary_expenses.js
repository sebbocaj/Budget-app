import React from 'react'
import Expenses from './Expenses'
import Create_expense from './Create_expense'
import Summary from './Summary'
import Menu_down from './Menu_down'
import { Expense }   from '../api/expenses'

export default class Summary_expenses extends React.Component{

    constructor(){
        super()
        this.state = {
            page:'Summary',
            expenses:[],
                }
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        Tracker.autorun(()=> {
        let expenses = Expense.find({name:this.props.ActualProject.name}).fetch();
        this.setState({expenses})
        })
    }

    changePage (id) {
        this.setState({page:id})
    }

    goBack() {
        this.props.ChangePage('Projects')
    }

        render(){    
            
            let page = this.state.page

            if (page == 'Expenses') {
                shown = <Expenses changePage={this.changePage}
                                    expenses={this.state.expenses}/>
            }

            else if (page == 'Summary') {
                shown = <Summary ActualProject={this.props.ActualProject}
                                    expenses_total={this.state.expenses} />
            }

            else if (page == 'Create_expense') {
                shown = <Create_expense ActualProject={this.props.ActualProject}
                                        changePage={this.changePage}/>
            }

                return(
                <div>
                    <div className="header_project">   
                        <img onClick={this.goBack.bind(this)} 
                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523553023/Chevron.png" />                     
                       {this.props.ActualProject.name}
                    </div>

                    {shown}

                	<Menu_down changePage={this.changePage}/>
				
                </div>

                )
        }
}