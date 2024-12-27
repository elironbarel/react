import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { name: 'Cable', role: 'Developer', img: 'https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg' },
      { name: 'Mia', role: 'Manager', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
      { name: 'Eliron', role: 'Data Analist', img: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg' },
      { name: 'Eden', role: 'Finantion', img: 'https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg' },
      { name: 'cable', role: 'Developer', img: 'https://images.pexels.com/photos/29897026/pexels-photo-29897026/free-photo-of-portrait-of-a-smiling-woman-with-colorful-background.jpeg' },
      { name: 'cable', role: 'Developer', img: 'https://images.pexels.com/photos/29909344/pexels-photo-29909344/free-photo-of-portrait-of-a-confident-woman-with-bun-in-cape-town.jpeg' }
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              console.log(employee);
              return (<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />);
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
