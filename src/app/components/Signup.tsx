'use client';


import { useForm } from "react-hook-form";

import React from 'react'

function Signup() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (data.firstName !== "Owais" && data.firstName !== "Sarosh" && data.firstName !== "Ebad") {
            setError("forms", { message: "Invalid Credential" });
            return; 
        }

        console.log(data);
    };

  return (

    <div>
   
      
        <div>
            
            <br />
            {isSubmitting && <div className='text-2xl text-red-600'>Loading...</div>}
            <form className="for" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className='w-1/4 h-10 text-md p-1 border-purple-950 rounded-md' 
                    {...register("firstName", { 
                        required: { value: true, message: "This is a required field" }, 
                        minLength: { value: 3, message: "Minimum length is 3" }, 
                        maxLength: { value: 10, message: "Maximum length is 10" } 
                    })} 
                    type="text" 
                    placeholder='Enter First Name' 
                />
                <br />
                {errors.firstName && <span className='text-red-600'>{errors.firstName.message}</span>}
                <br />
                <input 
                    className='w-1/4 h-10 text-md p-1 rounded-md' 
                    {...register("lastName", { 
                        required: { value: true, message: "This is a required field" }, 
                        minLength: { value: 3, message: "Minimum length is 3" }, 
                        maxLength: { value: 10, message: "Maximum length is 10" } 
                    })} 
                    type="text" 
                    placeholder='Enter Last Name' 
                />
                <br />
                {errors.lastName && <span className='text-red-600'>{errors.lastName.message}</span>}
                <br />
                <input 
                    className='w-1/4 h-10 text-md p-1 rounded-md' 
                    {...register("email", { 
                        required: { value: true, message: "This is a required field" } 
                    })} 
                    type="email" 
                    placeholder='Enter Email' 
                />
                <br />
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                <br />
                <input 
                    className='w-1/4 h-10 text-md p-1 rounded-md' 
                    {...register("phone", { 
                        required: { value: true, message: "This is a required field" }, 
                        minLength: { value: 11, message: "Minimum length is 11" }, 
                        maxLength: { value: 15, message: "Maximum length is 15" } 
                    })} 
                    type="number" 
                    placeholder='Enter Phone number' 
                />
                <br />
                {errors.phone && <span className='text-red-600'>{errors.phone.message}</span>}
                <br />
                <input 
                    className='w-1/4 h-10 text-md p-1 rounded-md' 
                    {...register("password", { 
                        required: { value: true, message: "This is a required field" }, 
                        minLength: { value: 7, message: "Minimum length is 7" }, 
                        maxLength: { value: 15, message: "Maximum length is 15" } 
                    })} 
                    type="password" 
                    placeholder='Enter Password' 
                />
                <br />
                {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                <br />
                <input 
                    className='bg-[#2F0147] text-white w-28 h-9 rounded-md mb-4' 
                    disabled={isSubmitting} 
                    type="submit" 
                    value="Submit" 
                />
                <br />
                {errors.forms && <span className='text-red-600'>{errors.forms.message}</span>}
            </form>
        </div>
       
    </div>
  )
}

export default Signup





