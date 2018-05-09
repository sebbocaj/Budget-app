import React from 'react'


export default class Category extends React.Component{

        render(){      	

                let total_cat_F=0;
                let total_cat_T=0;
                let total_cat_H=0;
                let total_cat_A=0;
                let total_cat_G=0;
                let total_cat_O=0;

                if (this.props.expenses_total.length == 0) {
                return (
                    <div className="category">
             	
                    <div >
                    <div>Food</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>

                    <div >
                    <div>Transport</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>

                    <div >
                    <div>Hotel</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>

                    <div >
                    <div>Activity</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>

                    <div >
                    <div>Gift</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>

                    <div >
                    <div>Other</div> 
                    <div style={{width : 100 + '%' }}></div>  
                    <div>0 %</div>
                    </div>
				
                </div>)
                }
                else {
                this.props.expenses_total.map (function (ele,i) {

                
                    if (ele.category == 'Restaurant') {
                        return  total_cat_F += Number(ele.Expense_amount);
                    }
                    else if (ele.category == 'Transport') {
                        return  total_cat_T += Number(ele.Expense_amount);
                    }
                    else if (ele.category == 'Hotel') {
                        return  total_cat_H += Number(ele.Expense_amount);
                    }
                    else if (ele.category == 'Activity') {
                        return  total_cat_A += Number(ele.Expense_amount);
                    }
                    else if (ele.category == 'Gift') {
                        return  total_cat_G += Number(ele.Expense_amount);
                    }
                    else if (ele.category == 'Other') {
                        return  total_cat_O += Number(ele.Expense_amount);
                    }
                       
                })
            }
               

                return(
                <div className="category">
             	
                    <div >
                    <div>Food</div> 
                    <div style={{width : Math.round(total_cat_F * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_F * 100 / this.props.total)} %</div>
                    </div>

                    <div >
                    <div>Transport</div> 
                    <div style={{width : Math.round(total_cat_T * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_T * 100 / this.props.total)} %</div>
                    </div>

                    <div >
                    <div>Hotel</div> 
                    <div style={{width : Math.round(total_cat_H * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_H * 100 / this.props.total)} %</div>
                    </div>

                    <div >
                    <div>Activity</div> 
                    <div style={{width : Math.round(total_cat_A * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_A * 100 / this.props.total)} %</div>
                    </div>

                    <div >
                    <div>Gift</div> 
                    <div style={{width : Math.round(total_cat_G * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_G * 100 / this.props.total)} %</div>
                    </div>

                    <div >
                    <div>Other</div> 
                    <div style={{width : Math.round(total_cat_O * 100 / this.props.total) + '%' }}></div>  
                    <div>{Math.round(total_cat_O * 100 / this.props.total)} %</div>
                    </div>
				
                </div>

                )
        }
}