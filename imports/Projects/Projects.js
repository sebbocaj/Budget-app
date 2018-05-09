import React from 'react'
import Projects_list from './Projects_list'
import { Budget }   from '../api/db'


export default class Projects extends React.Component{


        SelectPage () {
                this.props.ChangePage('Create_project')
        }



        render(){
                return(
                <div>

                        <div className="header">
                                <img src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1522252827/header.png" />
                        </div>
                        
                        <Projects_list projects={this.props.projects} 
                                        ChangePage={this.props.ChangePage}
                                        remove={this.props.remove}
                        />

                        <div className="create_button">				
                        <img onClick={this.SelectPage.bind(this)} 
                        src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523550012/create_button.png" />
                        </div>
                </div>

                )
        }
}