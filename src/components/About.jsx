import { User } from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <>
      {/* <div>
        <h1>About Us</h1>
        <User name={"Dimple"} />
      </div> */}
      <div>
        <UserClass name={"Dimple"} />
      </div>
    </>
  );
};

export default About;
