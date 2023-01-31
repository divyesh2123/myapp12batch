import React, { useState } from 'react'
import {Formik,Form,Field,ErrorMessage, yupToFormErrors} from 'formik'
import * as Yup from "yup";

export default function BasicForm() {

    let myhobbies = ["music","circket","basketball"];
    let highestEducationLevel = ["ssc","hsc","graduation","postgraduation"]
    let cities = ["vadodara","pune","anand"]

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Please enter the firstname'),

          lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Please enter the firstname'),

          password: Yup.string().required("Please Enter Password"),
          confirmPassword: 
          Yup.string().required("Please Enter Confirm Password").
          oneOf([null,Yup.ref('password')],"password should match")
       
      });
  return (
    <div>
        <Formik initialValues={{
            firstName : '',
            lastName : '',
            Address : '',
            hobbies : [],
            education : '',
            city : '',
            password: '',
            confirmPassword : ''
        }}

        validationSchema= {SignupSchema}
        
        onSubmit = { (values)=> {

            console.log(values);
        }

        }
        
        >

            <Form>

            <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Jane"  />
        <ErrorMessage name="lastName" />

        <Field id="password" name="password" placeholder="password" />
        <ErrorMessage name="password" />
        <label htmlFor="confirmPassword">confirmPassword</label>
        <Field id="confirmPassword" name="confirmPassword" 
        placeholder="confirmPassword"  />
        <ErrorMessage name="confirmPassword" />

        <label htmlFor="Address">Address</label>
       


        <Field id="Address" name="Address" placeholder="Jane" />
        <div role="group" aria-labelledby="checkbox-group">

        {
           myhobbies.map((value)=> {

            return(<label>
                <Field type="checkbox" name="hobbies" value={value} />
                {value}
              </label>)

           }) 
        }

        
<Field name="city" as="select">
    {
        cities.map((value)=> {

            return (<option value={value}>{value}</option>)
        })
    }
   
   
 </Field>

        </div>

        <div id="my-radio-group">

            Education Level

            <div role="group" aria-labelledby="my-radio-group">

                {
                    highestEducationLevel.map((value)=> {

                        return (<label>
                            <Field type="radio" name="education"
                             value={value} />
                            {value}
                          </label>)

                    })

                }
            
            </div>
        </div>


            <button type='submit'>Save</button>
                
            
            </Form>


        </Formik>

    </div>
  )
}
