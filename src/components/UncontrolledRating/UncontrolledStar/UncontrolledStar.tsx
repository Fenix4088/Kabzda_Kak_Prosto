import React from 'react';

type PropsType = {
    selected: boolean
    setValue: ()  => void
}

export const UncontrolledStar = (props: PropsType) => {
    const {selected, setValue} = props;

    return (
        <span onClick={setValue}>
            {selected ? <b>STAR2&nbsp;</b> : 'STAR2 '}
        </span>
    )


}