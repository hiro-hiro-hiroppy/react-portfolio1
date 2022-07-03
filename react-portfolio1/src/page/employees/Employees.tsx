import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

interface Employee {
  rowNo: number,
  employeeNo: string, // Guid
  lastName: string,
  firstName: string,
  department: number,
  position: number
};

const Employees = () => {

  const [employees, SetEmployees] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [isModal, SetIsModal] = useState(false);
  
  // 社員データをfetch
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("./data/employees.json")
  //     .then((response) => { return response.json()});
  //     return result;
  //     //setData(result.data);
  //   };
    
  //   console.log(fetchData());
  // }, []);

  return (
    <>
      <Header />

      <div className="buttonArea">
        <label htmlFor="">検索</label>
        <input type="text" name="" id="" />
        <button>新規作成</button>
        <button>編集</button>
        <button>削除</button>
      </div>

      <div className='listArea'>
        
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>
    </>
  )
}

export default Employees