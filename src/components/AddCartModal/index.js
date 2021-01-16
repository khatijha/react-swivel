import React from 'react'
import {Button, Modal} from 'antd'
class AddCartModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visible:true
        }
    }
    setModal1Visible = (f)=>{
        this.setState({
            visible:f
        })
    }
    render() {
        let {product} = this.props
        return (
            <div>

                <Modal
                    title="Add to Cart"
                    style={{ top: 20 }}
                    visible={this.state.visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.props.continue(false)}
                    footer={[
                        <Button key="back" onClick={this.props.view}>
                            View Cart and Checkout
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.props.continue}>
                            Continue Shopping
                        </Button>,
                    ]}
                >
                    <div className='row'>
                        <div className='col-3'>
                            <img src={product.image_urls[0]} style={{maxWidth:"100%"}}/>
                        </div>
                        <div className='col-8'>
                            <h3>{product.title}</h3>
                        </div>

                    </div>
                </Modal>

            </div>
        );
    }
}
export default AddCartModal