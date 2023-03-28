import { Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { dataFetcher } from './hooks/dataFetcher'

const SubTable = ({userId}:any) => {
    const [userDetails, setUserDetails] = useState<any>();

    const fetchUserDetail = async()=>{
      const userDetails = await dataFetcher(`https://jsonplaceholder.typicode.com/users/${userId}`);    
      setUserDetails(userDetails);
    }

  const theadArr = ['S.N.', 'Name', 'Email', 'Phone', 'UserName','Address', 'Website','Comapany'];
   useEffect(()=>{
    fetchUserDetail();
   },[])
  return (
    <Table sx={{background:'#f9f9f9'}}>
      <thead>
        <tr>
          {
            theadArr?.map((item:string, key:number)=>
            <th key={key}>{item}</th>)
          }
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{userDetails?.id}</td>
        <td>{userDetails?.name ?? '--'}</td>
        <td>{userDetails?.email ?? '--'}</td>
        <td>{userDetails?.phone ?? '--'}</td>
        <td>{userDetails?.username ??'--'}</td>
        <td>{userDetails?.address?.city ?? '--'}</td>
        <td>{userDetails?.website ??'--'}</td>
        <td>{userDetails?.company?.name ?? '--'}</td>
      </tr>
      </tbody>
    </Table>
  )
}

export default SubTable