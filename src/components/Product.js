import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from '../actions'
import {connect} from 'react-redux';


export class Product extends Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    render() {
        const {_products} = this.props._products;
        console.log("product",_products)
        if(_products.length>0){
           
           return (
                <div className="row " style={{marginTop:'10px'}}>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item,index)=>(
                                    <div key={index} className="col-md-3  single-prod" style={{marginBottom:'10px'}}>
                                        <img src={item.image} className="img-resposive" style={{width:'100%',height:'150px',margin:"20px 0"}}/>
                                        <h5 style={{marginBottom:10}}>{item.title}</h5>
                                        <span className="badge badge-primary" style={{cursor:'pointer',padding:12,margin:' 0 auto',width:"100%",textAlign:"center"}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:item=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
