import React from 'react'


export default class Projects_item extends React.Component{

    SelectPage () {
                this.props.ChangePage('Summary_expenses', this.props.id)
        }

        delete () {
                this.props.remove(this.props.id)
        }

        render(){
                   return(
                	
                        <div className="item_project">
                        <div>
                        <a onClick={this.SelectPage.bind(this)}>{this.props.project_name}</a>
                        </div>
                        <div>
                        <img onClick={this.delete.bind(this)} src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523551140/Groupe_4.png" />
                        </div>
                        
                        </div>
                        
                )
        }
}