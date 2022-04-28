import React, {FC} from "react";
import style from "./Counter.module.css"
import {ErrorNumber} from "../ErrorNumber/ErrorNumber"
import {Button} from "@mui/material";

export type CounterPropsType = {
    disabledValue: boolean
    counter: number
    maxValue: number
    onIncrement: () => void
    onReset: () => void
    editMode: boolean
    logicInput: boolean
}

export const Counter:FC<CounterPropsType> = (
    {
        disabledValue,
        counter,
        maxValue,
        onIncrement,
        onReset,
        editMode,
        logicInput
    }
) => {

    const onIncrementHandler = () => {
        onIncrement()
    }
    const onResetHandler = () => {
        onReset()
    }

    return (
        <div className={style.container}>
            {logicInput
                ? <ErrorNumber/>
                : editMode
                    ? <div>Enter! Set Value!</div>
                    : <div className={counter !== maxValue ? style.counter : style.counterItem}>{counter}</div>
            }

            <div className={style.button}>
                <Button style={{color: "black",margin:"5px"}} variant="contained" size="large"  color="primary"
                        disabled={editMode || disabledValue}
                        onClick={onIncrementHandler}>inc
                </Button>
                <Button style={{color: "black",margin:"5px"}} variant="contained" size="large" color="primary"
                        onClick={onResetHandler}>reset
                </Button>
            </div>
        </div>
    );
};