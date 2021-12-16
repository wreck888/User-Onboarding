import * as yup from 'yup'; 

  const formSchema = yup.object().shape({ 
    username: yup.string().trim().required('First name is required!'), 
    userlast: yup.string().trim().required('Last name is required!'),
    email: yup.string().required('Valid email address is required!'), 
    password: yup.string().required('Minimum of 6 characters are required for your password!').min(6, 'Minimum of 6 characters are required for your password!'), 
    position: yup.string().required('Must select a position from the dropdown menu!'),
    terms: yup.boolean().oneOf([true], 'Must Agree to Terms of Service by checking the box!') 
}) 

 
 
export default formSchema; 