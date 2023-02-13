var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function questionnumber2() {
    var name = "Eric";
    console.log("Hello ".concat(name, ", would you like to learn some Python today?"));
}
function questionnumber3() {
    var name = "eric";
    console.log("Lowercase: ".concat(name.toLowerCase()));
    console.log("Uppercase: ".concat(name.toUpperCase()));
    console.log("Titlecase: ".concat(name.charAt(0).toUpperCase() + name.slice(1)));
}
function questionnumber4() {
    var quote = "A person who never made a mistake never tried anything new.";
    var author = "Albert Einstein";
    console.log("".concat(author, " once said, \"").concat(quote, "\""));
}
function questionnumber5() {
    var famousPerson = "Albert Einstein";
    var quote = "A person who never made a mistake never tried anything new.";
    var message = "".concat(famousPerson, " once said, \"").concat(quote, "\"");
    console.log(message);
}
function questionnumber6() {
    var name = "\teric\n";
    console.log("Name with whitespace: \"".concat(name, "\""));
    name = name.trim();
    console.log("Name without whitespace: \"".concat(name, "\""));
}
function questionnumber7() {
    console.log(4 + 4);
    console.log(10 - 2);
    console.log(2 * 4);
    console.log(16 / 2);
}
function questionnumber8() {
    console.log(5 + 3);
    console.log(2 * 4);
    console.log(11 - 3);
    console.log(24 / 3);
}
function questionnumber9() {
    var favoriteNumber = 42;
    console.log("My favorite number is ".concat(favoriteNumber, "."));
}
function questionnumber10() {
    // This is a single line comment
    console.log("This is used for a single line comment: //");
    /*
    This is a multi-line comment
    */
    console.log("This is used for a multi-line comment: /* Multi lines */");
}
function questionnumber11() {
    var names = ["Alice", "Bob", "Charlie"];
    return names;
}
function questionnumber12() {
    var names = questionnumber11();
    names.forEach(function (name) {
        console.log("Hello ".concat(name, ", how are you today?"));
    });
}
function questionnumber13() {
    var transportation = ["Motorcycle", "Car", "Bicycle"];
    transportation.forEach(function (item) {
        console.log("I would like to own a Honda ".concat(item, "."));
    });
}
function questionnumber14() {
    var guests = ["Elon Musk", "Bill Gates", "Steve Jobs"];
    guests.forEach(function (guest) {
        console.log("You are cordially invited to dinner, ".concat(guest, "."));
    });
    return guests;
}
function questionnumber15() {
    var guests = questionnumber14();
    console.log("One of the guests, ".concat(guests[2], " can't make it."));
    guests[2] = "Mark Zuckerberg";
    console.log("New guest list: ", guests);
    guests.forEach(function (guest) {
        console.log("You are invited for dinner, ".concat(guest, "."));
    });
}
function questionnumber16() {
    var guests = questionnumber14();
    console.log("Good news! We found a bigger dinner table.");
    guests.unshift("Jack Ma");
    guests.splice(Math.floor(guests.length / 2), 0, "Larry Page");
    guests.push("Sergey Brin");
    console.log("The updated guest list: ".concat(guests));
    guests.forEach(function (guest) {
        console.log("You are cordially invited to dinner, ".concat(guest, "."));
    });
}
function questionnumber17() {
    var guests = questionnumber14();
    console.log("Only two people are invited for dinner now.");
    while (guests.length > 2) {
        console.log("Sorry, ".concat(guests.pop(), " you are not invited to dinner now."));
    }
    console.log("".concat(guests[0], " and ").concat(guests[1], " are still invited for dinner."));
    guests.pop();
    guests.pop();
    console.log("Now the guest list is empty: [".concat(guests, "]"));
}
function questionnumber18() {
    var places = ["Paris", "Tokyo", "Rome", "New York", "London"];
    console.log("Original order of places:", places);
    console.log("Places in alphabetical order:", places.sort());
    console.log("Original order of places:", places);
    console.log("Places in reverse alphabetical order:", places.sort().reverse());
    console.log("Original order of places:", places);
    console.log("Reverse order of places:", places.reverse());
    console.log("Reverse order of places again:", places.reverse());
    console.log("Places sorted in alphabetical order:", places.sort());
    console.log("Places sorted in reverse alphabetical order:", places.sort().reverse());
}
function questionnumber19() {
    var guests = questionnumber14();
    console.log("You are inviting ".concat(guests.length, " people to dinner."));
}
function questionnumber20() {
    var items = ["Mountains", "Rivers", "Countries", "Cities", "Languages"];
    console.log(items);
}
function questionnumber21() {
    var itemObjects = [
        { name: "Mountains", description: "Natural landforms rising above the surrounding land" },
        { name: "Rivers", description: "Natural waterways flowing from sources to mouths" },
        { name: "Countries", description: "Political divisions of the world" },
        { name: "Cities", description: "Urban centers of population and commerce" },
        { name: "Languages", description: "Methods of communication among people" }
    ];
    console.log(itemObjects);
}
function questionnumber22() {
    var items = ["Mountains", "Rivers", "Countries", "Cities", "Languages"];
    console.log(items[10]);
}
function questionnumber23() {
    var car = 'subaru';
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == 'subaru');
    var number = 5;
    console.log("Is number == 5? I predict True.");
    console.log(number == 5);
    var name = "John";
    console.log("Is name == 'Jane'? I predict False.");
    console.log(name == 'Jane');
    var list = [1, 2, 3, 4];
    console.log("Is list.length == 4? I predict True.");
    console.log(list.length == 4);
    var day = "Monday";
    console.log("Is day == 'Sunday'? I predict False.");
    console.log(day == 'Sunday');
    var temperature = 20;
    console.log("Is temperature < 25? I predict True.");
    console.log(temperature < 25);
    var object = { name: "John", age: 25 };
    console.log("Is object.name == 'Jane'? I predict False.");
    console.log(object.name == 'Jane');
    var undefinedValue;
    console.log("Is undefinedValue == undefined? I predict True.");
    console.log(undefinedValue == undefined);
    var nullValue = null;
    console.log("Is nullValue == null? I predict True.");
    console.log(nullValue == null);
}
function questionnumber24() {
    // Tests for equality and inequality with strings
    var string1 = "hello";
    var string2 = "world";
    console.log("Is string1 == 'hello'? I predict True.");
    console.log(string1 == "hello");
    console.log("Is string1 != 'world'? I predict True.");
    console.log(string1 != "world");
    // Tests using the lower case function
    console.log("Is string1.toLowerCase() == 'hello'? I predict True.");
    console.log(string1.toLowerCase() == "hello");
    console.log("Is string2.toLowerCase() == 'hello'? I predict False.");
    console.log(string2.toLowerCase() == "hello");
    // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    var num1 = 10;
    var num2 = 20;
    console.log("Is num1 == 10? I predict True.");
    console.log(num1 == 10);
    console.log("Is num1 != 20? I predict True.");
    console.log(num1 != 20);
    console.log("Is num1 < 20? I predict True.");
    console.log(num1 < 20);
    console.log("Is num2 > 10? I predict True.");
    console.log(num2 > 10);
    console.log("Is num1 <= 10? I predict True.");
    console.log(num1 <= 10);
    console.log("Is num2 >= 20? I predict True.");
    console.log(num2 >= 20);
    // Tests using "and" and "or" operators
    console.log("Is (string1 == 'hello') and (num1 < 20)? I predict True.");
    console.log((string1 == "hello") && (num1 < 20));
    console.log("Is (string1 == 'hello') or (num1 > 20)? I predict True.");
    console.log((string1 == "hello") || (num1 > 20));
    // Test whether an item is in a array
    var colors = ["red", "blue", "green"];
    console.log("Is 'red' in colors array? I predict True.");
    console.log(colors.includes("red"));
    console.log("Is 'yellow' in colors array? I predict False.");
    console.log(colors.includes("yellow"));
    // Test whether an item is not in a array
    console.log("Is 'red' not in colors array? I predict False.");
    console.log(!colors.includes("red"));
    console.log("Is 'yellow' not in colors array? I predict True.");
    console.log(!colors.includes("yellow"));
}
function questionnumber25() {
    var alien_color = 'green';
    if (alien_color === 'green') {
        console.log("The player just earned 5 points.");
    }
}
function questionnumber26() {
    var alien_color = 'yellow';
    if (alien_color === 'green') {
        console.log("The player just earned 5 points for shooting the alien.");
    }
    else {
        console.log("The player just earned 10 points.");
    }
}
function questionnumber27() {
    var alien_color = 'red';
    if (alien_color === 'green') {
        console.log("The player earned 5 points.");
    }
    else if (alien_color === 'yellow') {
        console.log("The player earned 10 points.");
    }
    else {
        console.log("The player earned 15 points.");
    }
}
function questionnumber28(age) {
    if (age < 2) {
        console.log("The person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult");
    }
    else if (age >= 65) {
        console.log("The person is an elder");
    }
}
function questionnumber29(favorite_fruits) {
    if (favorite_fruits.includes("bananas")) {
        console.log("You really like bananas!");
    }
    if (favorite_fruits.includes("apples")) {
        console.log("You really like apples!");
    }
    if (favorite_fruits.includes("mangoes")) {
        console.log("You really like mangoes!");
    }
    if (favorite_fruits.includes("strawberries")) {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits.includes("peaches")) {
        console.log("You really like peaches!");
    }
}
function questionnumber30() {
    var users = ["admin", "ahsan", "umar", "atif", "aqib"];
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
    return users;
}
function questionnumber31() {
    var users = questionnumber30();
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        for (var _i = 0, users_2 = users; _i < users_2.length; _i++) {
            var user = users_2[_i];
            if (user === "admin") {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat(user, ", thank you for logging in again."));
            }
        }
    }
}
function questionnumber32() {
    var currentUsers = questionnumber30();
    var newUsers = ["admin", "ali", "afaq", "sunny", "adeel"];
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var newUser = newUsers_1[_i];
        var isUnique = true;
        for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
            var currentUser = currentUsers_1[_a];
            if (newUser.toLowerCase() === currentUser.toLowerCase()) {
                console.log("The username ".concat(newUser, " is already taken, please choose another."));
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            console.log("The username ".concat(newUser, " is available."));
        }
    }
}
function questionnumber33() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        var ordinal = "";
        if (number === 1) {
            ordinal = "st";
        }
        else if (number === 2) {
            ordinal = "nd";
        }
        else if (number === 3) {
            ordinal = "rd";
        }
        else {
            ordinal = "th";
        }
        console.log("".concat(number).concat(ordinal));
    }
}
function questionnumber34() {
    var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
    for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
        var pizza = pizzas_1[_i];
        console.log("I like ".concat(pizza, " pizza."));
    }
    console.log("I absolutely adore pizza.");
    console.log("Whenever I see a slice, my mouth waters.");
    console.log("Pizza is hands down my favorite food.");
    console.log("I really love pizza!");
}
function questionnumber35() {
    var animals = ["Dogs", "Cats", "Rabbits"];
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
        var animal = animals_1[_i];
        console.log("A ".concat(animal, " would make a great pet."));
    }
    console.log("All of these animals are known for their affectionate nature and make great companions for families and individuals alike.");
}
// using questionnumber36 function instead of make_shirt so that question numbers stay intact and sequential ()
function questionnumber36(size, message) {
    console.log("The shirt is size ".concat(size, " and has the message \"").concat(message, "\" printed on it."));
}
function questionnumber37() {
    console.log("Large shirt with default message:");
    questionnumber36("Large", "I love TypeScript");
    console.log("\nMedium shirt with default message:");
    questionnumber36("Medium", "I love TypeScript");
    console.log("\nShirt with custom message:");
    questionnumber36("Small", "Custom message");
}
function questionnumber38() {
    function describe_city(city, country) {
        if (country === void 0) { country = "Pakistan"; }
        console.log("".concat(city, " is in ").concat(country, "."));
    }
    describe_city("Karachi");
    describe_city("London", "United Kingdom");
    describe_city("New York", "USA");
}
function questionnumber39() {
    function city_country(city, country) {
        return "".concat(city, ", ").concat(country);
    }
    console.log(city_country("Lahore", "Pakistan"));
    console.log(city_country("London", "United Kingdom"));
    console.log(city_country("New York", "USA"));
}
function questionnumber40() {
    function make_album(artistName, albumTitle, tracks) {
        var album = {
            artist: artistName,
            title: albumTitle
        };
        if (tracks) {
            album['tracks'] = tracks;
        }
        return album;
    }
    var album1 = make_album('Eminem', 'The Slim Shady LP');
    var album2 = make_album('Tupac', 'Me Against the World', 15);
    var album3 = make_album('Notorious B.I.G.', 'Ready to Die', 17);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
// Solving questions 41, 42 & 43 together & for them making global functions and variables
var magicians = ["Ali", "Ahsan", "Atif", "Aqib", "Afaq"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}
function questionnumber41() {
    show_magicians(magicians);
}
function questionnumber42() {
    var updatedMagicians = make_great(magicians);
    show_magicians(updatedMagicians);
}
function questionnumber43() {
    var originalMagicians = __spreadArray([], magicians, true);
    var updatedMagicians = make_great(magicians);
    show_magicians(originalMagicians);
    show_magicians(updatedMagicians);
}
function questionnumber44() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich with ".concat(items.join(", "), " is being ordered."));
}
function questionnumber45(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carDetails = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        carDetails[options[i]] = options[i + 1];
    }
    console.log(carDetails);
}
// All functions calls here now:
questionnumber2();
questionnumber3();
questionnumber4();
questionnumber5();
questionnumber6();
questionnumber7();
questionnumber8();
questionnumber9();
questionnumber10();
questionnumber11();
questionnumber12();
questionnumber13();
questionnumber14();
questionnumber15();
questionnumber16();
questionnumber17();
questionnumber18();
questionnumber19();
questionnumber20();
questionnumber21();
questionnumber22();
questionnumber23();
questionnumber24();
questionnumber25();
questionnumber26();
questionnumber27();
questionnumber28(32);
questionnumber29(["bananas", "apples", "strawberries"]);
questionnumber30();
questionnumber31();
questionnumber32();
questionnumber33();
questionnumber34();
questionnumber35();
questionnumber36("medium", "Hello World!");
questionnumber37();
questionnumber38();
questionnumber39();
questionnumber40();
questionnumber41();
questionnumber42();
questionnumber43();
//question 44 calls
questionnumber44("lettuce", "tomato", "mayo");
questionnumber44("chicken", "cheese");
questionnumber44("beef", "onion", "pickles");
//question 45 call
questionnumber45("Toyota", "Corolla", "color", "red", "optionalFeature", "sunroof");
