import React  from "react";
import './App.css'
import ImportConponent from './R003_ImportConponent'
import LifecycleEx from './R004_lifecycleEx'
import LifecycleEx2 from './R005_lifecycleEx'
import LifecycleEx3 from './R006_lifecycleEx'

function App()
{
    return (
        <div>
          <h1>Start React 200!</h1>
          <p>CSS 적용하기</p>
          {/* <ImportConponent></ImportConponent>
          <LifecycleEx></LifecycleEx>
          <LifecycleEx2></LifecycleEx2> */}
          <LifecycleEx3 prop_value = 'FromApp.js'/>
        </div>
    );
}

export default App;