import React, {useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar/UncontrolledStar";


export type UncontrolledRatingPropsType = {
    test?: number
}

export const UncontrolledRating = (props: UncontrolledRatingPropsType) => {

    const [value, setValue] = useState<number>(props.test ? props.test : 0)

    return (
        <div>
            <UncontrolledStar setValue={() => setValue(1)} selected={value > 0} />
            <UncontrolledStar setValue={() => setValue(2)} selected={value > 1} />
            <UncontrolledStar setValue={() => setValue(3)} selected={value > 2} />
            <UncontrolledStar setValue={() => setValue(4)} selected={value > 3} />
            <UncontrolledStar setValue={() => setValue(5)} selected={value > 4} />
        </div>
    );
}