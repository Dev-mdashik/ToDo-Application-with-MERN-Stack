import { Box, Button, Card, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAuth } from '../services/utils/auth';

type objects = {
    email: string,
    password: string,
}

const initailState: objects = {
    email: '', 
    password: ''
}

const Login = () => {
    const [input, setInput] = useState(initailState);
    const navigate = useNavigate();

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
        try {
            const login = await LoginAuth(input);
            if(login?.status === 'success') {
                navigate('/mobiles/crud')
            }
            else { return; }
            return login;
        } catch (e: any) {
            console.error(e.message) 
        }
    }

    console.log('input',input)
  return (
    <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'} height={'100vh'}>
        <motion.div initial={{x: 200}} animate={{x: 0}} transition={{ duration: 0.3, damping: 8, type: 'spring'}}>
            <Card h={'70vh'} w={'50vw'} boxShadow={'2px 3px 18px #2b282d26'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'22px'}>Login</Text>            
                <form onSubmit={handleSubmit}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' value={input.email} onChange={handleChange} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' value={input.password} onChange={handleChange} />
                    <Button type='submit'>Login</Button>
                </form>
            </Card>
        </motion.div>
    </Flex>
  )
}

export default Login