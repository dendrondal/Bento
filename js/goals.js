// Enables a thematic spin to your weekly focus
const themeName = document.querySelector('.theme-name p');
const themeMsg = document.querySelector('.theme-description p');

// Add your themes here
var themeOptions = {
	"Gratitude": "Be extra appreciative of those around you. Say thanks more, and point out what you appreciate!",

	"Nature": "Spend some time walking or hiking (weather permitting, nature shows are a perfectly acceptable substitute). Make sure to take time to stop and smell the flowers, look at moss, pick some mushrooms, whatever you like.",

	"Novelty": "Mix things up. Switch to tea instead of coffee, shower at a different time of day, whatever you helps you branch out",

	"Curiosity": "Dig deep on something that interests you, or go shallow on several new subjects",

	"Mindfulness": "Meditate. Be more mindful of what's around you, and what's within you",

	"Digital detox": "Try to avoid electronic forms of entertainment this week",

	"Catchup": "Get in contact with an old friend/acquaintance/colleague, even if it's just to say hello",

	"Meetings & Greetings": "Talk to a stranger. Nothing wrong with introversion, but be a social butterfly at least once this week.",

	"Cooking": "Try to cook all your own food this week. Bonus points for trying a new technique/cuisine",

	"Creativity": "Express yourself, whatever that looks like. No self-critique allowed for new artforms",

	"Cleaning": "Be mindful of the dirtiness you create in your day-to-day life, and try to clean up as you go",

	"Money": "Look into your subscriptions, portfolio, and budget, and see what you can do to be more fiscally responsible",

	"Physical Self-Care": "Do some short workout in the morning, schedule that dentist appointment you've been putting off for weeks, whatever this looks like for you",

	"Changes": "When you find yourself quoting an idiom, see if it still holds true today",

	"Acts of Service": "Pick up litter, volunteer for a local charity, donate, etc.",

	"Hand and Brain": "If you've primarily been working with your brain, try building something with your hands, and vice-versa"

};

// Switches out every week
var d = new Date();
var t = d.getTime();
var weeks = Math.floor(t / (604800000));
var i = weeks % Object.keys(themeOptions).length
function setTheme(index) {
	var key = Object.keys(themeOptions)[index];
	themeName.innerHTML = key
	themeMsg.innerHTML = themeOptions[key]
}
setTheme(i)
