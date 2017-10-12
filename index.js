var startups = ['Uber', 'UberEats', 'Airbnb', 'Lyft', 'Facebook', 'Myspace', 'Groupon', 'Tinder', 'Bumble', 'Grindr', 'Slack', 'Pandora', 'Spotify', 'Venmo', 'Asana', 'Instragram', 'Twitter', 'Youtube', 'LinkedIn', 'Dropbox', 'Amazon', 'Google', 'Wikipedia', 'Skype', 'Netflix', 'Hulu', 'Twitch', 'Steam', 'Pinterest', 'Flappy Bird', 'Candy Crush', 'WhatsApp', 'Shazam', 'KakaoTalk', 'eBay', 'Snapchat', 'Starchup', 'Kik', 'SoundCloud', 'Pokemon GO', 'podcasts', 'porn'];

var nouns = ["aardvarks", "adults", "airships", "albinos", "alcohol", "alibis", "ants", "anthropology", "authority", "black people", "beards", "bonsai trees", "botany", "burglars", "the bus", "cage fighting", "camels", "casual racism", "cats", "children", "chill bros", "church", "cocktails", "coins", "combs", "computers", "The Congo", "consonants", "conspiracy theories", "crabs", "crack", "crackers", "crime", "criminals", "crows", "curves", "custard", "death", "debt", "denim", "dinner", "dinosaurs", "disgust", "dogs", "Drake", "drama", "drawbridges", "drugs", "earthquakes", "eggnog", "exhaust pipes", "ex-husbands", "ex-wives", "eyeliner", "fathers", "feelings", "feet", "felonies", "fingers", "flesh", "foam", "fog", "fortnights", "friends", "fur", "furniture", "gardens", "gateway drugs", "geese", "gender", "ghosts", "giraffes", "girls", "glue", "goats", "goblins", "grape soda", "grease", "guilty pleasures", "gums", "guns", "gymnasts", "half-brothers", "half-sisters", "hammers", "hamsters", "harbors", "the hood", "hot singles in your area", "hovercraft", "hubcaps", "humor", "hurricanes", "hygene", "the internet", "Israelis", "Italians", "jail", "jelly", "jellyfish", "judo", "kites", "kittens", "knights", "Korea", "latex allergies", "laundry", "leather", "lemonade", "libraries", "literature", "liver disease", "lizards", "llamas", "locusts", "magicians", "makeup", "manicures", "masks", "mayonnaise", "methane", "milkshakes", "mimosas", "moustaches", "napkins", "noise", "oatmeal", "object permanence", "ocelots", "octopedes", "oil", "oxen", "parentheses", "particles", "pharmacists", "piccolos", "pillows", "pilots", "pimples", "pleasure", "pliers", "plots, schemes, and ruses", "porn", "powder", "prison", "psychology", "pumpkins", "punishment", "pyjama boys", "pyjamas", "pyramids", "quicksand", "quills", "quilts", "radiators", "ravens", "regret", "religion", "responsibility", "riddles", "Romanians", "rubes", "Russians", "salt", "samurai", "sauce", "sausage", "scarecrows", "scarves", "science", "seagulls", "self reflection", "servants", "sex", "sex dungeons", "shallots", "shame", "shampoo", "sharks", "shoemakers", "shoulders", "snails", "snakes", "sneezing", "snowmen", "soup that is too hot", "spaghettis", "spiders", "squash", "squids", "squirrels", "stamps", "step-fathers", "step-uncles", "stew", "stool", "stopsigns", "strangers", "substance abuse", "the Sudan", "suede", "the sun", "Sunday", "surfboards", "sushi", "swallowing", "swamps", "sweaters", "sweatshops", "swings", "swords", "swordfish", "syrup", "tadpoles", "Taiwan", "Tanzania", "taxes", "taxicabs", "tea", "teeth", "Thailand", "theaters", "thermometers", "throats", "thrones", "thumbs", "thunder", "Thursday", "ties", "tires", "titanium", "toads", "toast", "toes", "toenails", "toilets", "tomatoes", "toothpaste", "tornados", "tortoises", "touching", "tractors", "tramps", "trapezoids", "triangles", "trigonometry", "trouble", "trout", "tubas", "Tuesday", "tugboats", "tuna", "turkeys", "TVs", "twigs", "Twilight Saga: New Moon", "Uganda", "umbrellas", "uncles", "underwear", "vacuum cleaners", "vans", "vegetarians", "velvet", "vermicelli", " vassals", "vests", "veterinarians", "vibraphones", "Vietnam", "views", "vinyl", "violas", "viscosity", "visitors", "voices only you can hear", "volcanos", "volleyball", "vultures", "wallabies", "walruses", "war", "washing machines", "wasps", "water", "wax", "wealth", "weapons", "weasels", "weed", "weights and measures", "whales", "whips and naenaes", "whiskey", "whistling", "white people", "wigs", "wind", "windchimes", "wine", "wires", "wishes", "witches", "wolves", "women", "wool", "words", "worms", "wounds", "wrinkles", "xylophones", "yachts", "yaks", "yams", "yarn", "yogurt", "Yugoslavia", "zebras", "zinc", "zippers", "zoology"];


var buttonTexts = ['Let\'s get funding', 'Billion dollar idea', 'Maybe Google will buy us', 'That\'s gold, Jerry, GOLD'];

function main() {
    var startupSpan = document.querySelector('.startup');
    var nounSpan = document.querySelector('.thing');
    var button = document.querySelector('.button');

    startupSpan.textContent = randomItem(startups);
    nounSpan.textContent = randomItem(nouns);
    button.textContent = randomItem(buttonTexts);
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


var mainButton = document.querySelector('.button');
mainButton.addEventListener('click', main, false);

main();
