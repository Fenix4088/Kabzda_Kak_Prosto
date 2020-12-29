import React from 'react';
import {Star} from "./Star/Star";
import {StarsStatusType} from "../../App";

export type RatingPropsType = {
    changeStatusCallBack: (id: number) => void
    ratingStatus: StarsStatusType
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            {props.ratingStatus.map((item, index) =>
                <Star
                    key={index}
                    status={item.status}
                    index={index}
                    changeStatusCallBack={props.changeStatusCallBack}
                />)}
        </div>
    );
}


