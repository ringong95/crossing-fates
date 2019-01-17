import React, { Component } from 'react';

import { FormDiv, TabGroup, TabContent, HeaderOne, InputLabel, Input, FieldWraper, TopRow, SubmitButton, Forgot } from './styles'
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state={
            activeTab: 1,
        }

        this.handleChange = this.handleChange.bind(this);
    }
    signUpOnClick(){
        this.setState({
            activeTab: 0
        })
    }
    logInOnClick(){
        this.setState({
            activeTab: 1
        })
    }
    handleChange(event) {
        const propertyName = event.target.name
        this.setState({[propertyName]: event.target.value});
    }
    render(){
        return(
            <FormDiv>
                
                <TabGroup test={'test'} active={this.state.activeTab}>
                    <li className={this.state.activeTab === 0 ? 'active' : undefined}  ><a href="#signup" onClick={()=>this.signUpOnClick()}>Sign Up</a></li>
                    <li className={this.state.activeTab === 1 ? 'active' : undefined}><a href="#login" onClick={()=>this.logInOnClick()}>Log In</a></li>
                </TabGroup>
                
                <TabContent>
                { this.state.activeTab === 0 ?(   
                    <div id="signup">   
                        <HeaderOne>Sign Up for Free</HeaderOne>
                        <form action="/" method="post">
                            <TopRow>
                                <FieldWraper>
                                    <InputLabel >
                                        First Name<span className="req">*</span>
                                    </InputLabel>
                                <Input type="text" required name='firstName' onChange={this.handleChange    }  value={this.state.value}  />
                                </FieldWraper>
                                <FieldWraper>
                                    <InputLabel>
                                        Last Name<span className="req">*</span>
                                    </InputLabel>
                                <Input type="text"required />
                                </FieldWraper>
                            </TopRow>
                            <FieldWraper>
                                <InputLabel>
                                    Email Address<span className="req">*</span>
                                </InputLabel>
                                <Input type="email"required />
                            </FieldWraper>
                            <FieldWraper>
                                <InputLabel>
                                    Set A Password<span className="req">*</span>
                                </InputLabel>
                                <Input type="password"required />
                            </FieldWraper>
                            <SubmitButton type="submit">Get Started</SubmitButton>

                        </form>
                    </div>
                    ) : ( 
                    <div id="login">   
                    <HeaderOne>Welcome Back!</HeaderOne>
                        <form action="/" method="post">
                        <FieldWraper>
                            <InputLabel>
                                Email Address<span className="req">*</span>
                            </InputLabel>
                            <Input type="email"required />
                        </FieldWraper>    
                        <FieldWraper>
                            <InputLabel>
                                Password<span className="req">*</span>
                            </InputLabel>
                            <Input type="password"required />
                        </FieldWraper>
                        <Forgot>Forgot Password?</Forgot>
                        <SubmitButton >Log In </SubmitButton>
                        </form>
                    </div>
                    )}
                </TabContent>
            </FormDiv> 
            )
    }
}
    
    export default LoginForm