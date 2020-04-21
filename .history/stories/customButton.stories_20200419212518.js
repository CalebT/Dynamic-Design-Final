import React from 'react';
import BigButton from '../comps/big-buttons';
import NextArrow from '../comps/NextArrow';
import BackArrow from '../comps/BackArrow';
import SmallButton from '../comps/small-buttons';

export default {
    title: 'My Comps',
    component:BigButton,
};

export const MyBigButton = () => <BigButton />

export const MyNextArrow = () => <NextArrow />

export const MyBackArrow = () => <BackArrow />

export const MySmallButton = () => <SmallButton />