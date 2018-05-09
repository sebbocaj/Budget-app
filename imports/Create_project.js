import React from 'react'


export default class Create_project extends React.Component{

    constructor(){
                super()
                this.state = {
                        name_project:'',
                        amount_project:0
                }
    }



    HandleChange (e) {
        this.setState({[e.target.name]:e.target.value})
    }

    CreateProject () {
        this.props.F_CreateProject(this.state.name_project, this.state.amount_project, 'Summary_expenses')
    }

    goBack() {
        this.props.ChangePage('Projects')
    }


        render(){
                return(
                <div className="create_project" onChange={this.HandleChange.bind(this)} >
                        <div>
                                
                                        <img onClick={this.goBack.bind(this)} 
                                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523553023/Chevron.png" />                     
                                        Create Project
                        </div>

                        <div>
                                <p>Project Name <br/>
                                <input name='name_project'
                                        value={this.state.name_project} 
                                />
                                </p>
                                <p>Project Amount <br/>
                                <input name='amount_project'
                                        value={this.state.amount_project}               
                                />
                                </p>
                        </div>

                        <div className="create_button_project">				
                        <img  onClick={this.CreateProject.bind(this)} 
                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523893087/bouton_create.png" />
                        </div>

                </div>
                )
        }
}