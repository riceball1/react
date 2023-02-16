// import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";


const userIds = [ "1", "2" ]
function App() {
  return (
    // <CurrentUserLoader>
    //   <h1>User Info</h1>
    //   <UserInfo />
    // </CurrentUserLoader>
    <>

      {userIds.map(id => {
        return (
          <UserLoader key={id} userId={id}>
            <h1>User Info</h1>
            <UserInfo />
          </UserLoader>)
      })}

    </>
  );
}

export default App;
