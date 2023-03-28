import React, {useState } from 'react'

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import { Table, Button } from '@mantine/core';

import { GetPostList } from './hooks/getPostList';
import SubTable from './SubTable';

const MainTable = () => {
  const [activeRow, setActiveRow] = useState<any>(null);

  const postList = GetPostList();

  const theadArr = ['S.N.', 'Name', 'Email', 'Phone', 'UserName','Address', 'Website','Comapany', 'Action'];
  
  const handleRowClick = (index:number) => {
    if(activeRow === index){
      setActiveRow(null);
    }else{
      setActiveRow(index);
    }
  }

  const tableRows = postList?.map((item:any, key:number)=>(
    <React.Fragment key={key}>
      <tr onClick={()=>handleRowClick(key)}>
        <td>{item?.id}</td>
        <td>{item?.name ?? '--'}</td>
        <td>{item?.email ?? '--'}</td>
        <td>{item?.phone ?? '--'}</td>
        <td>{item?.username ??'--'}</td>
        <td>{item?.address?.city ?? '--'}</td>
        <td>{item?.website ??'--'}</td>
        <td>{item?.company?.name ?? '--'}</td>
        <td>
          <Button>
           {activeRow === key ? <EyeInvisibleOutlined /> :<EyeOutlined />}
          </Button>
        </td>
      </tr>
      {activeRow === key &&<tr>
        <td colSpan={8}>
          <SubTable userId={item?.id}/>
        </td>
      </tr>}
    </React.Fragment>
  ))

  return (
    <Table sx={{background:'#fff'}}>
      <thead>
        <tr>
          {
            theadArr?.map((item:string, key:number)=>
            <th key={key}>{item}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </Table>
  )
}

export default MainTable