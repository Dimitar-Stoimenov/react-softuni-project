const calculateRating = (item) => {
    if (item.ratings) {
        let ratingSum = item.ratings.reduce((a, b) => Number(a) + Number(b), 0);
        let averageRatingToFixed = (ratingSum / item.ratings.length).toFixed(2);

        if (isNaN(averageRatingToFixed)) {
            return false;
        }

        return averageRatingToFixed;
    } else {
        return false;
    }
}

export default calculateRating;