import React from 'react'
import { Budget }   from './api/db'
import Projects from './Projects/Projects'
import Create_project from './Create_project'
import Summary_expenses from './Summary_expenses/Summary_expenses'

export default class App extends React.Component{

	constructor(){
        super()
        this.state = {
            projects:[],
            id:'',
            page:'Projects',
            actualproject:''
                }
        this.CreateProject = this.CreateProject.bind(this);
        this.ChangePage = this.ChangePage.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentWillMount() {
        Tracker.autorun(()=> {
        var projects = Budget.find({}).fetch();
        this.setState({projects:projects})
        })
    }

    remove (id) {
        Budget.remove({_id:id})
    }

    CreateProject (name, amount, page) {  
        Budget.insert({name:name, amount:amount},(err,done)=>{
            
            var actualproject = Budget.findOne({_id:done})
            this.setState({actualproject})
            this.setState({page})
             })
             
        var projects = Budget.find({}).fetch();
        this.setState({projects:projects})
    }

    ChangePage(page, id){
        
        var actualproject = Budget.findOne({_id:id})
        this.setState({actualproject})
        this.setState({page})
    }



        render(){

        		let page = this.state.page

        		if(page == 'Projects') {
                        shown = <Projects projects={this.state.projects}
                                          ChangePage={this.ChangePage}
                                          remove={this.remove} />
                    }
                else if(page == 'Create_project'){
                        shown = <Create_project F_CreateProject={this.CreateProject}
                        						ChangePage={this.ChangePage} />
                    }
                else if(page == 'Summary_expenses'){
                        shown = <Summary_expenses 
                        						ChangePage={this.ChangePage}
                                                ActualProject={this.state.actualproject}
                                                 />
                                                }
                    

                return(
                <div>
                	{shown}
                </div>
                )
        }
}