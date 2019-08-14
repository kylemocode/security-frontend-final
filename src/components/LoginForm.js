import React,{ useState } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoginButton,ButtonLogin } from './MainPage/style';
import { NavbarImage } from './Navbar/style';
import '../index.css';

let setLoadingGlobal;
const LoginForm = (props) => {
    const [ isLoading, setLoading ] = useState(false)
    setLoadingGlobal = setLoading;
    const style = {
        width: '60%',
        borderRadius: '8px',
        border: 'none',
        padding: '5px 15px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(240,240,240,0.5)',
        margin: '20px 0',
        color: 'white'
    }
    
    return (
        <Form>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
                <NavbarImage 
                    imgWidth={'100px'} 
                    imgHeight={'100px'} 
                    imgmb={'5px'} 
                    src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png"/>
                <Field name="username" placeholder="Username..." style={style} className="loginInput"/>
                <Field type="password" name="password" placeholder="Password..." style={style} className="loginInput"/>
                { props.touched.username && props.errors.username && <p style={{color:'#eb4034',fontFamily:'微軟正黑體'}}>※ {props.errors.username}</p>}
                { props.touched.password && props.errors.password && <p style={{color:'#eb4034',fontFamily:'微軟正黑體'}}>※ {props.errors.password}</p>}
                
                <LoginButton>{isLoading ? <ButtonLogin />: <p>Log In</p>}</LoginButton>
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
    }),
    handleSubmit(values,{resetForm,setErrors,setSubmitting}) {
        console.log(values);
        resetForm();
        setLoadingGlobal(true);
        setTimeout(() => {
            setLoadingGlobal(false)
        },1000)
    }
})(LoginForm);

export default FormikLogin;
