# react-stars-rating

[![NPM](https://nodei.co/npm/react-stars-ratings.png?compact=true)](https://npmjs.org/package/react-stars-ratings)

**react-stars-ratings** is a react component that allows you to add ratings to your applications.

A customizable and interactive React star rating component for your web applications. 

Easily integrate this library to enable users to rate content with a visually appealing star rating system.

## Features

- Click to select: Clicking on a star sets it as the selected rating.
- Hover effect: Stars change background color on hover.


[Watch in action](https://imgur.com/vTx6HUN)


## Usage
### Install
```sh
$ npm install react-stars-ratings --save
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

class MyComponent extends React.Component {
  render() {
    return (
      <StarRating />
    );
  }
}

React.render(<MyComponent />, document.getElementById('app'));
```
