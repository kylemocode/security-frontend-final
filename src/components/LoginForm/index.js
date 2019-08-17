import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginButton,ButtonLogin } from '../MainPage/style';
import { NavbarImage } from '../Navbar/style';
import { useDispatch, useSelector } from 'react-redux';
import '../../index.css';
import { authLogin } from '../../actions/authAction';


const LoginForm = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);
    

    const fieldStyle = {
        width: '60%',
        borderRadius: '8px',
        border: 'none',
        padding: '5px 15px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(240,240,240,0.5)',
        margin: '20px 0',
        color: 'white'
    }
    const warningTextStyle = {
        color: '#eb4034',
        marginTop: '15px',
        fontWeight: '700',
        fontFamily: '微軟正黑體',
        opacity: '0.9'
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authLogin(props.values.username,props.values.password));
    }
    
    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
                <NavbarImage 
                    imgWidth={'100px'} 
                    imgHeight={'100px'} 
                    imgmb={'5px'} 
                    src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png"/>
                <Field 
                    name="username" 
                    placeholder="Username..." 
                    style={fieldStyle} 
                    className="loginInput" 
                    autoComplete="off"/>
                <Field 
                    type="password" 
                    name="password" 
                    placeholder="Password..." 
                    style={fieldStyle} 
                    className="loginInput"/>
                { props.touched.username && props.errors.username && <p style={{color:'#eb4034',fontFamily:'微軟正黑體'}}>※ {props.errors.username}</p>}
                { props.touched.password && props.errors.password && <p style={{color:'#eb4034',fontFamily:'微軟正黑體'}}>※ {props.errors.password}</p>}
                
                <LoginButton>{loading ? <ButtonLogin />: <p>Log In</p>}</LoginButton>
                { error ? <p style={warningTextStyle}>登入失敗，請重新登入</p> : ''}
            </div>   
        </Form>
    )
}


const FormikLogin = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || '',
            password: props.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('帳號為必填欄位'),
        password: Yup.string().required('密碼為必填欄位')
    })
    
})(LoginForm);

export default FormikLogin;
