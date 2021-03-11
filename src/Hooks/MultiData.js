import React ,{useState}from 'react';

function MultiData(props) {
  const [age,setAge] = useState(18)
  const [name,setName] = useState('zhangpeng')
  const [friends,setFriends] = useState(['lilei','hanmeimei'])
  const [students,setStudents] = useState([
    {age:18,name:'kobe',id:111},
    {age:19,name:'kobccce',id:112},
    {age:133,name:'sdfgobe',id:113},
  ])

  function addStudentAge(index){
    const newStudent = [...students]
    newStudent[index].age+=1
    setStudents(newStudent)
  }

  return (
      <div>
        <h2>age:{age}</h2>
        <h2>name:{name}</h2>
        <div>friend:{friends.map(item =>{
          return (
              <div>{item}</div>
          )
        })
        }</div>
        <button onClick={event => setFriends([...friends,'tomato'])}>添加朋友</button>

        <div>
          {students.map((item,index) =>{
            return (
                <div>
                  <span>age:{item.age}</span>
                  <span>name:{item.name}</span>
                  <span>id:{item.id}</span>
                  <button onClick={event => addStudentAge(index)}>age+1</button>
                </div>
            )
          })}
        </div>
      </div>
  );
}

export default MultiData;
