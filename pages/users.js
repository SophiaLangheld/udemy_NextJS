import { useContext } from 'react';
import { AppContext } from '../store/app_context';
import Link from 'next/link';

const Users = () => {
    const appCtx = useContext(AppContext)

    const handleAddUser = () => {
        appCtx.addUser({name:'Lisa'})
    }

    return(
        <div>
            <h1>The Users are</h1>
            <ul>
                {appCtx.users.map( user => (
                    <li>{user.name}</li>
                ))}
            </ul>
            <div>
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <Link href="/">Go Home</Link>
        </div>
    )
}

export default Users;