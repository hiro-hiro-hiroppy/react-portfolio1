import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar';
import "./Employees.css"
import { createGuid } from "../../functions/Guid";
import EmployeesData from '../../EmployeesData';

export interface DataRow {
  no?: number
  rowId: string;
  mailAddress: string;
  password: string;
  checked: boolean;
};

const Employees = () => {

  const [dataNo, setDataNo] = useState(0);
  const [dataList, setDataList] = useState<DataRow[]>(EmployeesData);
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const handleMailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // リロードを回避
    e.preventDefault();

    // 新しいTodoを作成
    const newDataRow: DataRow = {
      no: dataNo + 1,
      rowId: createGuid(),
      mailAddress: mailAddress,
      password: password,
      checked: false,
    };

    setDataList([...dataList, newDataRow]);
    setDataNo(dataNo + 1);
    setMailAddress("");
    setPassword("");
  };

  const handleMailAddressEdit = (id: string, inputValue: string) => {
    const newDataList = dataList.map((data) => {
      if(data.rowId === id){
        data.mailAddress = inputValue;
      }
      return data;
    });

    setDataList(newDataList);
  };
  
  const handlePasswordEdit = (id: string, inputValue: string) => {
    const newDataList = dataList.map((data) => {
      if(data.rowId === id){
        data.password = inputValue;
      }
      return data;
    });

    setDataList(newDataList);
  };

  const handleChecked = (id: string, checked: boolean) => {
    const newDataList = dataList.map((data) => {
      if(data.rowId === id){
        data.checked = !checked;
      }
      return data;
    });

    setDataList(newDataList);
  };

  const handleDelete = (id: string) => {
    const newDataList = dataList.filter((data) => data.rowId !== id);

    setDataList(newDataList);
  }

  const style1 = {
    "display": "flex"
  };

  const style2 = {
    "paddingTop": "80px",
    "marginLeft": "30px"
  };

  return (
    <>
      <Header />

      <div style={style1}>
        <Sidebar />

        <div style={style2}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="inputField">
              <label htmlFor="">メールアドレス</label>
              <input type="text" onChange={(e) => handleMailAddressChange(e)} className="inputText" value={mailAddress}></input>
              <label htmlFor="">パスワード</label>
              <input type="text" onChange={(e) => handlePasswordChange(e)} className="inputText" value={password}></input>
              <input type="submit" value="作成" className="createButton" />
            </p>
          </form>
          <ul className='dataList'>
          {dataList.map(row => (
            <li key={row.rowId}>
              <input 
                type="text" 
                onChange={(e) => handleMailAddressEdit(row.rowId, e.target.value)} 
                className="inputText" 
                value={row.mailAddress}
                disabled={row.checked}/>
                <input 
                type="text" 
                onChange={(e) => handlePasswordEdit(row.rowId, e.target.value)} 
                className="inputText" 
                value={row.password}
                disabled={row.checked}/>
              <input 
                type="checkbox"
                onChange={(e) => handleChecked(row.rowId, row.checked)} />
                <button onClick={() => handleDelete(row.rowId)} className="deleteButton">消去</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

export default Employees