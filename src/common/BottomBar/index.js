import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import { 
    TabWrapper, 
    TabItem
 } from './style';
 
/**
 * @constructor <BottomBar>
 * @description 首页底部Tap
 */

class BottomBar extends Component{
    constructor(props){
        super(props);
    }

    changeTab(item){
        this.props.changeTab(item.get('key'));
    }

    renderItems(){
        const{tabs} = this.props;
        const{activeKey} = this.props;
        return(
                tabs.map((item)=>{
                    let cls = 'tab-icon '+item.get('key');
                    if(item.get('key') === activeKey){
                        cls += ' active';
                    }
                    return(
                        <TabItem key={item.get('key')} className={cls} onClick={()=>this.changeTab(item)}>
                            <div className='tab-icon'></div>
                            <div className='tab-name'>{item.get('name')}</div>
                        </TabItem>
                    )
                })
        );
        
    }

    render(){
        return (
            <TabWrapper>
                {this.renderItems()}
            </TabWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("focused:"+state.focused);
    // console.log(state);
    return {
        tabs:state.getIn(['tabInfo','tabs']),
        activeKey:state.getIn(['tabInfo','activeKey'])
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeTab: (key)=>{
            dispatch(actionCreators.changeTab(key));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BottomBar);