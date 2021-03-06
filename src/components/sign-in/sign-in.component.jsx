import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault()
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.log(error)
        }
        
    }

    handleChange = e =>{
        const {value, name} = e.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="email" 
                        type="email"
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        required/>
            
                    <FormInput
                        label="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} 
                        required/>

                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn