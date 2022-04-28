import React, {useState} from 'react';
import  style from './App.module.css';
import {SettingCount} from "./components/SettingCount/SettingCount";
import {Counter} from "./components/Counter/Counter";

function App() {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [counter, setCounter] = useState(startValue);
  const [editMode, setEditMode] = useState(false);

  const onIncrement= () => {
    setCounter(counter => counter + 1)
  }
  const onReset = () => {
    setCounter(startValue)
  }

  const logicInput = maxValue < 0 || startValue < 0 || startValue > maxValue || maxValue === startValue

  return (
      <div className={style.grid}>
        <SettingCount
            startValue={startValue}
            maxValue={maxValue}
            setCounter={setCounter}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            disabledValue={logicInput}
            setEditMode={setEditMode}
            logicInput={logicInput}
        />
        <Counter
            disabledValue={counter === maxValue}
            counter={counter}
            maxValue={maxValue}
            onIncrement={onIncrement}
            onReset={onReset}
            editMode={editMode}
            logicInput={logicInput}
        />
      </div>
  );
}

export default App;
