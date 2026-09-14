let paragraph = `THIS IS FULL STACK CLASS. WE HAVE RAN THROUGH HTML AND CSS CLASSES. WE ARE CURRENTLY ON VANILLA JAVASCRIPT, AND SO FAR, WE HAVE HAD ONLY THREE CLASSES IN JAVASCRIPT. THROUGHOUT THOSE THREE CLASSES, WE HAVE GONE THROUGH TOPICS LIKE HOW JAVASCRIPT WORKS, SYNTAX, VARIABLES, DATA TYPES AND TYPE COERCION, OPERATORS AND ARITHMETICS, STRING AND NUMBER OPERATIONS/METHODS USING DOT NOTATION AND BRACKET NOTATION, AND STRING METHODS.`;

console.log(paragraph.replace("HTML", "HTML5"));

console.log(paragraph.replaceAll("CLASSES", "LESSONS"));

console.log(paragraph.length);

console.log(paragraph.at(0));

console.log(paragraph.at(-1));

console.log(paragraph.padStart(paragraph.length + 5, "*"));

console.log(paragraph.padEnd(paragraph.length + 5, "*"));

console.log(paragraph.normalize());

console.log(paragraph.search("JAVASCRIPT"));

console.log(paragraph.toUpperCase());

console.log(paragraph.toLowerCase());