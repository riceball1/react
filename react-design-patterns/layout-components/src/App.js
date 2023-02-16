
import { SplitScreen } from './SplitScreen';


// by passing these components as children instead of props, it allows to directly pass in props
const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'blue'}}>{message}</p>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="left"/>
      <RightHandComponent message="Hello world"/>
      </SplitScreen>
  );
}

export default App;
