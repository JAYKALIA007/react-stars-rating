# react-stars-rating

[![NPM](https://nodei.co/npm/react-stars-ratings.png?compact=true)](https://npmjs.org/package/react-stars-ratings)

**react-stars-ratings** is a react component that allows you to add ratings to your applications.

A customizable and interactive React star rating component for your web applications. 

Easily integrate this library to enable users to rate content with a visually appealing star rating system.

## Features

- Click to select: Clicking on a star sets it as the selected rating.
- Hover effect: Stars change background color on hover.
- Control how the stars appear by passing in appropriate props.


[Watch in action](https://imgur.com/vTx6HUN)


## Usage
### Install
```sh
$ npm install react-stars-ratings
```
or 
```sh
$ yarn add react-stars-ratings
```
### Usage
```javascript
import { StarRating } from 'react-stars-ratings';
```
### Example
```js
import React from 'react';
import { StarRating } from 'react-stars-ratings';

const MyComponent = () => {
  return (
    <StarRating />
  );
}
```

## PropTypes

| Prop Name     | Type     | Default                   | Required | Description                                                                             |
|---------------|----------|---------------------------|----------|-----------------------------------------------------------------------------------------|
| iconSize      | String   | 32px                      | false    | the size of the stars                                                                   | 
| borderColor   | String   | black                     | false    | the border color of the star svg icon                                                   |
| fill          | String   | yellow                    | false    | the fill(background-color) of the star svg icon                                         |
