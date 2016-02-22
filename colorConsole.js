module.exports = {
    if (console.log.bind === 'undefined') { // IE < 10
        console.log('%c Console.log.bind is undefined', 'color: blue');
    }
    else {
        console.red = console.log.bind(console, '%c >>>>>>>>>> ', 'background: red; color: white');
        console.blue = console.log.bind(console, '%c >>>>>>>>>> ', 'background: blue; color: white');
        console.green = console.log.bind(console, '%c >>>>>>>>>> ', 'background: green; color: white');
        console.purple = console.log.bind(console, '%c >>>>>>>>>> ', 'background: purple; color: white');
        console.yellow = console.log.bind(console, '%c >>>>>>>>>> ', 'background: yellow; color: white');
        console.orange = console.log.bind(console, '%c >>>>>>>>>> ', 'background: orange; color: white');
        console.grey = console.log.bind(console, '%c >>>>>>>>>> ', 'background: purple; color: white');
        console.pink = console.log.bind(console, '%c >>>>>>>>>> ', 'background: pink; color: white');
    }

    function colorConsole(color, text, num) {
    		if (num) {
        		if (num === 1) {
            		console.log(`%c ${text} `, `color: ${color}`);
            }
            if (num === 2) {
            		console.log(`%c <<<<<>>>>> `, `background: ${color}; color: white`);
                console.dir(text);
                console.log(`%c <<<<<>>>>> `, `background: ${color}; color: white`);
            }
        } else {
    				console.log(`%c ${text} `, `background: ${color}; color: white`);
        }
    }
}
