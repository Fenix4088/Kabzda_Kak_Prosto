import React, {ComponentProps, useState} from 'react';
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UncontrolledStar} from "./UncontrolledStar";


export default {
    title: 'UncontrolledStar',
    component: UncontrolledStar,
};


export const EnableStar: React.VFC<{}> = () => <UncontrolledStar selected={true} setValue={action("")}/>;
export const DisableStar: React.VFC<{}> = () => <UncontrolledStar selected={false} setValue={action("")}/>;
export const InterActiveStar: React.VFC<{}> = () => {
        const [value, setValue] = useState(false)
        return <UncontrolledStar selected={value} setValue={()=>setValue(!value)}/>
    };
