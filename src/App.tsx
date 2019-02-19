import { Button } from 'antd';
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
	      <Button type="primary">Primary</Button>
	      <Button>Default</Button>
	      <Button type="dashed">Dashed</Button>
	      <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default App;
