import React, { Component } from 'react';

class Projects extends Component {
    constructor(props){
        super(props):
        this.state= {activeTab: 0};
    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId)=> this.setState({activeTab: tabId})} >

                </Tabs>
            </div>
        );
    }
}

export default Projects;