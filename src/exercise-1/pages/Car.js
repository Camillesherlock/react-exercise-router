import {component} from 'react'
import { Component } from 'react'
import { Redirect } from 'react-router'
import { render } from 'react-dom';
import React from 'react';

const Car = (props) => {

    const {carNum} = props;
    return (<h2>{carNum}</h2>)
    };

export default Car;