// This is a simple Node.js application that exports a greet function. The greet function takes a name as an argument and returns a greeting message. If the script is run directly from the command line, it will greet the name provided as an argument or default to "World" if no name is given.

function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;

if (require.main === module) {
    const name = process.argv[2] || 'World';
    console.log(greet(name));
}
