import "./UserList.css"
import { FaRegTrashAlt } from 'react-icons/Fa';
import { AiFillEdit } from 'react-icons/Ai';

const UserList = ({users, onUserEdit, onUserDelete}) => {
  if (!users.length) return <p>No users</p>

  return (
    <ul className="user-list_container">
        {users.map((user) => (
        <ul className="user-list" key={user.id}>
          <article>
            <h2 className="user-full-name">{user.first_name}{" "}{user.last_name}</h2>
            <hr />
            <h3 className="info-headers">Email</h3>
            <p>{user.email}</p>

            <h3 className="info-headers">Birthday</h3>
            <p>{user.birthday}</p>

            <div className="user-list_btn">
              <button className="edit-user_btn" onClick={() => onUserEdit(user)} ><AiFillEdit/></button>
              <button className="delete-user_btn" onClick={() => onUserDelete(user.id)}><FaRegTrashAlt/></button>
            </div>
          </article>
        </ul>
    ))}
    </ul>
  );
};

export default UserList