import { Box, Button, Card, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { SignUpAuth } from '../services/utils/auth';

interface objects {
    name: string
    email: string,
    password: string | number,
    confirmPassword: string | number,
}

const initialInput = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Signup = () => {
    const [input, setInput] = useState<objects>(initialInput);

    const handleChange = (e: any) => {
        const {name, value} = e.target;

        setInput((prev: any)=> {
            return{
                ...prev, [name]: value
            }
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            name : input.name,
            email : input.email,
            password : input.password,
            confirmPassword : input.confirmPassword,
        }
        try {        
            const InputValidationCondition = input.email !== '' && input.password !== '' && input.confirmPassword !== ''
            if(InputValidationCondition) {      
                const GetResult = await SignUpAuth(data);
                console.log('GetResult',GetResult)         
            } else {                
                toast('Please Fill Required Fields', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                })
            }
        }
        catch (err) {
            toast('Please Fill Required Fields', {
                position: 'bottom-center',
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            })
        }
    }

    console.log('input',input)
  return (
    <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'} height={'100vh'}>
        <motion.div initial={{x: 200}} animate={{x: 0}} transition={{ duration: 0.3, damping: 8, type: 'spring'}}>
            <Card h={'70vh'} w={'50vw'} boxShadow={'2px 3px 18px #2b282d26'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'22px'}>Signup</Text>            
                <form onSubmit={handleSubmit}>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' name='name' value={input.name} onChange={handleChange} />
                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' value={input.email} onChange={handleChange} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' value={input.password} onChange={handleChange} />
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type='password' name='confirmPassword' value={input.confirmPassword} onChange={handleChange} />
                    <Button type='submit'>Signup</Button>
                </form>
            </Card>
        </motion.div>
    </Flex>
  )
}

export default Signup;