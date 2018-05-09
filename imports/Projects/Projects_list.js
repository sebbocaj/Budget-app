import React from 'react'
import Projects_item from './Projects_item'


export default class Projects_list extends React.Component{


        render(){
        var that = this

            if (this.props.projects.length > 0) {
                return(
                        <div className="list_projects">
                		{this.props.projects.map(function (ele,i) {
                				return (
                				
                        		<Projects_item project_name={ele.name}
                                                project_amount={ele.amount}
                        			             key={i} 
                                                 id={ele._id} 
                                                 ChangePage={that.props.ChangePage} 
                                                 remove={that.props.remove}

                        		/>
                        		)     
                        	       })
                                }
                        </div>
                )
        }

        else {
            return (<div>You need to create a new Project !</div>)
        }
    }
}