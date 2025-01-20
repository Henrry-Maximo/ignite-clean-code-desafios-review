const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];

function getFirstFiveRatings(ratings) {
  return ratings.length >= 5 && ratings.slice(0, 5);
}

function sumFirstFiveRatings(ratings) {
  const ratingsBool = Boolean(ratings);

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings);

    if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

    let ratingsSum = 0;

    for (let i = 0; i < firstFiveRatings.length; i++) {
      ratingsSum += Number(firstFiveRatings);
    }

    return { ratingsSum, created_at: String(new Date()) };
  }

  return { error: "ratings is required" };
}

sumFirstFiveRatings(appRatings);

// Utilizar diretamenta o construtor da classe, e não o método.
// Syntatic sugars: específica de uma linguagem, não vão entender.
// const numberInString = "12373";

// const number = Number(numberInString);
// const isNumberNotNull = Boolean(number);
// const numberAsString = String(number);
