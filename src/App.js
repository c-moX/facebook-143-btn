import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';

function App() {
  // Like btn handler func
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () => {
    // const color = likeColor ? '' : 'primary'; // Ternary Condition
    // setLikeColor(color);
    setLikeColor(likeColor ? '' : 'primary');
  }


  // 01. For the array= [objects]
  const [users, setUsers] = useState([]);
  const users5 = users.slice(0, 5);

  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/users`;
    fetch(api)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  // 02. For the object= {data}
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/1`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleUser(data))
  }, [])


  // 03. For the object= {[{data}]}
  const [randomUser, setRandomUser] = useState({});
  const { name, email, phone } = randomUser;
  // const fullName = name?.first;
  const fullName = name && name.title + ' ' + name.first + ' ' + name.last;

  useEffect(() => {
    const randomData = `https://randomuser.me/api/`;
    fetch(randomData)
      .then(res => res.json())
      .then(data => setRandomUser(data.results[0]))
  }, [])
  // console.log(randomUser);

  return (
    <div>
      <div>
        <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
        <h3>Like facebook icon</h3>
      </div>

      {/* 01. For the array= [objects] */}
      <div>
        <h5>01. Data = array.object.value</h5>
        {
          users5.map(user => <ul><li>USER ID NO: {user.id}</li></ul>)
        }
      </div>

      {/* 02. For the object= {data} */}
      <div>
        <h5>02. Data = object.value</h5>
        <ul>
          <li>Name: {singleUser.name}</li>
          <li>Email: {singleUser.email}</li>
          <li>Phone: {singleUser.phone}</li>
        </ul>
      </div>

      {/* 03. For the object= {[{data}]} */}
      <div>
        <h5>03. Data = object.array.object.value</h5>
        <ul>
          <li>Cell No: {fullName}</li>
          <li>Email: {email}</li>
          <li>Phone No: {phone}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
