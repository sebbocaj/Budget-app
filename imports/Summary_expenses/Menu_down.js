import React from 'react'


export default class Menu_down extends React.Component{

    selectPageS () {
        this.props.changePage('Summary')
    }

    selectPageE () {
        this.props.changePage('Expenses')
    }

        render(){
                return(
                <div className="menu">
                    <div onClick={this.selectPageS.bind(this)}><img src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523972608/menu_summary.png"/></div>
                    <div onClick={this.selectPageE.bind(this)}><img src="http://res.cloudinary.com/dygu6sw0x/image/upload/v1523972603/euro.png"/></div>
                </div>

                )
        }
}