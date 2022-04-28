import React, {ChangeEvent, FC, useEffect} from "react";
import style from "./SettingCount.module.css"
import {Button, TextField} from "@mui/material";

export const values = {
    maxCounterValue: 'MAX_COUNTER_VALUE',
    startCounterValue: 'START_COUNTER_VALUE'
}

export type CounterInterfacePropsType = {
    startValue: number
    maxValue: number
    setCounter: (value: number) => void
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    disabledValue: boolean
    setEditMode: (value: boolean) => void
    logicInput: boolean
}

export const SettingCount: FC<CounterInterfacePropsType> = (
    {
        setCounter,
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        disabledValue,
        setEditMode,
        logicInput
    }
) => {

    useEffect(() => {
        let maxCounterAsString = localStorage.getItem(values.maxCounterValue)
        let startCounterAsString = localStorage.getItem(values.startCounterValue)
        if (maxCounterAsString && startCounterAsString) {
            let newMaxValue = JSON.parse(maxCounterAsString)
            let newStartValue = JSON.parse(startCounterAsString)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
        }
    }, [])


    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
        setEditMode(true)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
        setEditMode(true)
    }

    const onSetValuesHandler = () => {
        localStorage.setItem(values.maxCounterValue, JSON.stringify(maxValue))
        localStorage.setItem(values.startCounterValue, JSON.stringify(startValue))
        setCounter(startValue)
        setEditMode(false)
    }

    return (
        <div className={style.container}>
            <div className={style.values}>
                <div className={style.maxValue}>
                    <span>Max Value</span>
                    <TextField style={{marginTop: "10px"}} size={'small'} className={logicInput ? style.inputStyleRed : style.inputStyle} type={'number'}
                                    value={maxValue} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={style.startValue}>
                    <span>Start Value</span>
                    <TextField size={"small"} className={logicInput ? style.inputStyleRed : style.inputStyle} type={'number'}
                                    value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
            </div>
            <div className={style.button}>
                <Button variant="contained" color="primary" size="large"
                    disabled={disabledValue}
                    onClick={onSetValuesHandler}>set
                </Button>
            </div>
        </div>
    );
};