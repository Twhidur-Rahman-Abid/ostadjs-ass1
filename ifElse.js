// temperature
const temperature = 32;

if (temperature >= 30) {
  console.log(`It's hot day!`);
} else {
  console.log(`It's normal day!`);
}

// raining
const isRaining = false;

if (isRaining) {
  console.log(`Don't forget your umbrella!`);
} else {
  console.log(`Enjoy your day!`);
}

// time

const time = "8 AM";

const meridian = time.slice(2, 4);

if (time <= 6 && meridian === "AM" && time >= 12 && meridian === "PM") {
  console.log(`Good morning!`);
} else if (time <= 12 && meridian === "PM" && time >= 6 && meridian === "PM") {
  console.log(`Good afternoon!`);
} else {
  console.log(`Good night!`);
}
