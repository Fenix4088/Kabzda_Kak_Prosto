import React, {ComponentProps, useState} from 'react';
import { Story } from '@storybook/react/types-6-0';
import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

// export const CaseOne: React.VFC<{}> = () => <UncontrolledRating test={1}/>;
// export const CaseTwo: React.VFC<{}> = () => <UncontrolledRating test={2}/>;
// export const CaseThree: React.VFC<{}> = () => <UncontrolledRating test={3}/>;
// export const CaseFour: React.VFC<{}> = () => <UncontrolledRating test={4}/>;
// export const WorkingMode: React.VFC<{}> = () => <UncontrolledRating />;

const UncontrolledRatingTemplate: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating {...args} />;

export const CaseOne = UncontrolledRatingTemplate.bind({});
CaseOne.args = { test: 1 };
export const CaseTwo = UncontrolledRatingTemplate.bind({});
CaseTwo.args = { test: 2 };
export const CaseThree = UncontrolledRatingTemplate.bind({});
CaseThree.args = { test: 3 };
export const CaseFour = UncontrolledRatingTemplate.bind({});
CaseFour.args = { test: 5 };
export const CaseWorking = UncontrolledRatingTemplate.bind({});
