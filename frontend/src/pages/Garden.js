// Import necessary CSS and dependencies
import '../index.css';
import Field from '../components/Field';
import { useState, useEffect, useContext } from 'react';
import NewPlot from '../components/NewPlot';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';

// Define the Garden component
function Garden() {

  // useContext hook to access the login status from a context
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  // useState hooks to manage component state
  const [fields, setFields] = useState([]);
  const [showNewPlot, setShowNewPlot] = useState(false);
  const [refresh, setRefresh] = useState(0);

  // useNavigate hook for programmatically navigating to different routes
  const navigate = useNavigate();

  // useEffect hook to perform an action when the component mounts or 'refresh' changes
  useEffect(() => {
    // Fetch data from a remote API endpoint
    fetch('http://127.0.0.1:8000/api/fields/', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access')
      }
    })
      .then((response) => {
        if (response.status === 401) {
          // If unauthorized, set logged-in status to false and navigate to a 401 page
          setLoggedIn(false);
          navigate('/401');
        }
        return response.json();
      })
      .then((data) => {
        // Update the 'fields' state with the fetched data
        setFields(data.fields);
      });
  }, [refresh]);

  // Function to update a field's information via a POST request
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
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch();
    // Increment 'refresh' to trigger a component refresh
    setRefresh(refresh + 1);
  }

  // Function to create a new field via a POST request
  function newField(value) {
    const url = 'http://127.0.0.1:8000/api/fields/';
    const data = { size: value, state: 'fallow', plant: 'none' };
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
        return response.json();
      })
      .then((data) => {
        console.log('field created');
        setShowNewPlot(false);
      })
      .catch((e) => {
        console.log(e);
      });
    // Increment 'refresh' to trigger a component refresh
    setRefresh(refresh + 1);
  }

  // Render the Garden component
  return (
    <div className="bg-thirdcustombg overflow-x-auto h-screen">

      <div className='flex justify-center p-2'>
        {/* Render a table to display field data */}
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
            {/* Map through 'fields' and render a 'Field' component for each */}
            {fields ?
              fields.map((field) => {
                return (<Field key={field.id} id={field.id} size={field.size} state={field.state} plant={field.plant} updateField={updateField} refresh={refresh} setRefresh={setRefresh} />)
              })
              : null}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center p-2'>
        {/* Render a 'NewPlot' component to create new fields */}
        <NewPlot newField={newField} showNewPlot={showNewPlot} setShowNewPlot={setShowNewPlot} />
      </div>
    </div>
  );
}

// Export the Garden component for use in other parts of the application
export default Garden;
