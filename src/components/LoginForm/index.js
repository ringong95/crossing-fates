import React, { Component } from 'react';

import { FormDiv, TabGroup, TabContent, HeaderOne, InputLabel, Input, FieldWraper, TopRow, SubmitButton, Forgot } from './styles'
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state={
            activeTab: 1
        }
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
    render(){
        return(
            <FormDiv>
                
                <TabGroup>
                    <li class="tab active"><a href="#signup" onClick={()=>this.signUpOnClick()}>Sign Up</a></li>
                    <li class="tab"><a href="#login" onClick={()=>this.logInOnClick()}>Log In</a></li>
                </TabGroup>
                
                <TabContent>
                { this.state.activeTab === 0 ?(   
                    <div id="signup">   
                        <HeaderOne>Sign Up for Free</HeaderOne>
                        <form action="/" method="post">
                            <TopRow>
                                <FieldWraper>
                                    <InputLabel>
                                        First Name<span class="req">*</span>
                                    </InputLabel>
                                <Input type="text" required autocomplete="off" />
                                </FieldWraper>
                                <FieldWraper>
                                    <InputLabel>
                                        Last Name<span class="req">*</span>
                                    </InputLabel>
                                <Input type="text"required autocomplete="off"/>
                                </FieldWraper>
                            </TopRow>
                            <FieldWraper>
                                <InputLabel>
                                    Email Address<span class="req">*</span>
                                </InputLabel>
                                <Input type="email"required autocomplete="off"/>
                            </FieldWraper>
                            <FieldWraper>
                                <InputLabel>
                                    Set A Password<span class="req">*</span>
                                </InputLabel>
                                <Input type="password"required autocomplete="off"/>
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
                                Email Address<span class="req">*</span>
                            </InputLabel>
                            <Input type="email"required autocomplete="off"/>
                        </FieldWraper>    
                        <FieldWraper>
                            <InputLabel>
                                Password<span class="req">*</span>
                            </InputLabel>
                            <Input type="password"required autocomplete="off"/>
                        </FieldWraper>
                        <Forgot><a href="#">Forgot Password?</a></Forgot>
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