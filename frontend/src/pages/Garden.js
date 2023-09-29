
import '../index.css';
import Field from '../components/Field';
import { useState, useEffect, useContext } from 'react';
import NewPlot from '../components/NewPlot';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

function Garden() {

  const [loggedIn, setLoggedIn] = useContext(LoginContext)

  const [fields, setFields] = useState([]);
  const [showNewPlot, setShowNewPlot] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/fields/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      }
    })
      .then((response) => {
        if (response.status === 401) {
          navigate('/401')
        }

        return response.json()
      })
      .then((data) => {
        setFields(data.fields);
        console.log(data)
      })
  }, [refresh]);

  function updateField(id, updatedField) {
    const url = 'http://127.0.0.1:8000/api/fields/' + id;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      },
      body: JSON.stringify(updatedField)
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch();
    setRefresh(refresh + 1)
  }

  function newField(value) {
    const url = 'http://127.0.0.1:8000/api/fields/';
    const data = { size: value, state: 'fallow', plant: 'none' }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        console.log('field created');
        return response.json()
      })
      .then((data) => {
        console.log('field created');
        setShowNewPlot(false)
      })
      .catch((e) => {
        console.log(e)
      });
    setRefresh(refresh + 1)
  }


  return (
    <div className="bg-thirdcustombg overflow-x-auto h-screen">

      <div className='flex justify-center p-2'>
        <table className=" table-auto border-separate w-full p-8">
          <thead className='bg-secondcustombg'>
            <tr>
              <th className='border-transparent '></th>
              <th className='border-transparent px-5'>Size</th>
              <th className='border-transparent px-5'>State</th>
              <th className='border-transparent w-4/6'></th>
            </tr>
          </thead>
          <tbody className='bg-custombg'>
            {fields ?
              fields.map((field) => {
                return (<Field id={field.id} size={field.size} state={field.state} plant={field.plant} updateField={updateField} refresh={refresh} setRefresh={setRefresh} />)
              })
              : null}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center p-2'>
        <NewPlot newField={newField} showNewPlot={showNewPlot} setShowNewPlot={setShowNewPlot} />
      </div>


    </div>
  );
}

export default Garden;
