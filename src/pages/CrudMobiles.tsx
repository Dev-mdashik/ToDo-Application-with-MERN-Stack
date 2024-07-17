import { Box, Button, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {CreateMobiles, DeleteMobiles, GetMobiles, updateMobiles} from '../services/utils/mobiles/MobilesUtils'
import { useDispatch, useSelector } from 'react-redux'
import { getData, addData, updateData, deleteData, currInput } from '../redux/slices/slices'

type objects = {
    _id?: string
    name: string,
    price: number,
    description: string,
}

const initailState: objects = {
    _id: '',
    name: '',
    price: 0,
    description: ''
}

const CrudMobiles = () => {
    const [input, setInput] = useState(initailState);
    const [editInput, setEditInput] = useState(initailState);
    const [editId, setEditId] = useState<any>();
    // redux import
    const dispatch = useDispatch();    
    const datas: [] = useSelector((state: any)=> state?.store?.datas);

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setInput((prev: objects) => {
            return {
                ...prev, [name] : value
            }
        })       
    }
    const handleEdit = (item: any) => {
        setEditId(item._id)       
        setEditInput(item)       
    }
    const handleDelete = async (id: any) => {
        try {
            if(window.confirm('Are you want to delete this data')) {
                dispatch(deleteData(id))
                const data = await DeleteMobiles(id);           
                return data
            } else {
                return
            }
        }
        catch(e: any) {
            console.log('error', e?.message)
        }

    }
    const handleEditChange = (e: any) => {        
        const {name, value} = e.target;
        setEditInput((prev: objects) => {
            return {
                ...prev, [name] : value
            }
        })
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(!editId) { postFunction()} else {putFunction()}
        dispatch(currInput(input))
    }

    const postFunction = async () => {
        const data = {
            name: input.name,
            price: input.price,
            description: input.description,
        }
        try {
            const getResponse = await CreateMobiles(data) 
            dispatch(addData(getResponse.data))   
            setInput({name: '', price: 0, description: ''})                  
            return getResponse
        } catch (e: any) {
            console.log('error', e?.message)
        } 
    }
    const putFunction = async () => {
        try {
            const putdata = await updateMobiles(editId, editInput)
            setEditId('')
            dispatch(updateData(putdata.data))
            return putdata;
        } catch (e: any) {
            console.log('error', e?.message)
        }
    }

    const fetchData = async () => {
        try{
            const fetchedData = await GetMobiles();
            dispatch(getData(fetchedData?.data));
        } catch (e: any) {
            console.error(e.message)
        }
    }
    useEffect(()=> {
        fetchData()
    },[])

    // console.log('editInput', editInput)
    console.log('datas',datas)
  return (
    <>
        <form onSubmit={handleSubmit}>        
            <FormLabel>Name: </FormLabel>
            <Input type='input' name='name' value={input.name} onChange={handleChange} />
            <FormLabel>Price</FormLabel>
            <input type='input' name='price' value={input.price} onChange={handleChange} />
            <FormLabel>Desciption</FormLabel>
            <Input type='input' name='description' value={input.description} onChange={handleChange} />
            <Button type='submit'>Create</Button>                
        </form>

        <main>
            {datas.map((item: objects, index: number)=> (
                <Flex key={index} m={'30px 0'} p={'10px'} background={'#ececec'} boxShadow={'1px 3px 18px #3532322b'} justifyContent={'space-between'}>
                    {editId === item._id ? 
                        <>
                            <FormLabel>Name: </FormLabel>
                            <Input type='input' name='name' value={editInput.name} onChange={handleEditChange} />
                            <FormLabel>Price</FormLabel>
                            <input type='input' name='price' value={editInput.price} onChange={handleEditChange} />
                            <FormLabel>Desciption</FormLabel>
                            <Input type='input' name='description' value={editInput.description} onChange={handleEditChange} />
                        </>
                        : 
                        <Box>
                            <Text fontWeight={600}>{item.name}</Text>
                            <Text letterSpacing={1}>{item.price}</Text>
                            <Text letterSpacing={1}>{item.description}</Text>                    
                        </Box>                                               
                    }
                    <Flex>
                        {editId !== item._id ? <Button onClick={(e)=> handleEdit(item)}>Edit</Button> 
                         : <Button onClick={(e)=> handleSubmit(e)}>Update</Button> }
                        {editId !== item._id ? <Button onClick={()=> handleDelete(item?._id)}>Delete</Button>
                         : <Button onClick={()=> setEditId('')}>Cancel</Button>}
                    </Flex>
                </Flex>
            ))}
        </main>
    </>
  )
}

export default CrudMobiles