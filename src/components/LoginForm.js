import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginButton } from './MainPage/style';
import { NavbarImage } from './Navbar/style';
import '../index.css';

const LoginForm = (props) => {
    const style = {
        width: '60%',
        borderRadius: '8px',
        border: 'none',
        padding: '5px',
        backgroundColor: 'rgba(240,240,240,0.5)',
        margin: '20px 0',
        color: 'white'
    }
    return (
        <Form>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
                <NavbarImage imgWidth={'60px'} imgHeight={'60px'} imgmb={'15px'} src="https://i.imgur.com/cnEq0M9.png"/>
                <Field name="account" placeholder="Account..." style={style} className="loginInput"/>
                <Field type="password" name="password" placeholder="Password..." style={style} className="loginInput"/>
                <LoginButton>Log In</LoginButton>
            </div>   
        </Form>
    )
}


const FormikLogin = withFormik({
    mapPropsToValues(props) {
        return {
            account: props.account || '',
            password: props.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        account: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values,{resetForm,setErrors,setSubmitting}) {
        console.log(values);
        resetForm();
    }
})(LoginForm);

export default FormikLogin;
