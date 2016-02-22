colorConsole
=========

A small library providing methods for logging in color

## Installation

  npm install colorconsole --save

## Usage

  var colorconsole = require('colorconsole')

  shortcut highlighting done by typing in and invoking any of the following:
  console.red
  console.blue
  console.green
  console.purple
  console.yellow
  console.orange
  console.grey
  console.pink
  Each of which accepts an argument to be logged, which will be preceded by
  a colored box containing '>>>>>>>>>>'.

  function colorConsole(color, text, num) defaults to a colored background and white
  text:
    i.e. colorConsole('purple', 'Hello world') will print 'Hello world' in white
    with a purple background.

  colorConsole currently accepts one of two numbers for the third parameter.
  Passing 1 will result in printing the text in the specified color and
  passing 2 will enclose an interactive javascript object between two colored
  bars.

## Contributing

Feel free to add additional functionality and submit requests at any time.

## Release History

* 0.1.0 Initial release
