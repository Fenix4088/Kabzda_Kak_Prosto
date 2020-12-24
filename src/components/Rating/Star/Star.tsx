import React from 'react';

type StarPropsType = {
    status: boolean
    index: number
    changeStatusCallBack: (id:number) => void
}

export const Star = (props: StarPropsType) => {

    const starStyle = {
        marginRight: "10px",
        color: props.status ? 'red' : "black"
    }

    const onStarClickHAndler = () => {
        props.changeStatusCallBack(props.index);
    }


    return (
        <span style={starStyle} onClick={onStarClickHAndler}>
            star
        </span>
    );
}