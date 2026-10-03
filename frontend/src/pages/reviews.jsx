import { reviews } from "../data/constants.js";

function Reviews() {
  return (
    <main className="reviews">
      <section className="reviewsSection">
        <div className="reviewsTitleContainer">
          <h2 className="reviewsTitle">Reviews</h2>
        </div>

        <div className="reviewsContainer">
          {reviews.map((review) => (
            <div className="reviewCard" key={review.name}>
              <img
                className="reviewImage"
                src={review.image}
                alt={review.name}
              />
              <h3 className="reviewName">{review.name}</h3>
              <p className="reviewText">{review.text}</p>
              <p className="reviewLanguages">{review.languages}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Reviews;
