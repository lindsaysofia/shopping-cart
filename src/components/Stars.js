function Stars(props) {
  const { rate } = props;
  const integerRate = Math.floor(rate);
  const decimalRate = Number((rate + '').split('')[2]);
  const starIcons = [1, 2, 3, 4, 5];
  const convertStarIcons = starIcons.map((star) => {
    if (star <= integerRate) {
      return <i key={star} className="fas fa-star"></i>;
    } else if (star > integerRate && star < integerRate + 2 && decimalRate < 5) {
      return <i key={star} className="fas fa-star-half-alt"></i>;
    } else if (star > integerRate && star < integerRate + 2 && decimalRate >= 5) {
      return <i key={star} className="fas fa-star"></i>;
    } else {
      return <i key={star} className="far fa-star"></i>;
    }
  });
  return (
    <div>
      <h1>{convertStarIcons}</h1>
    </div>
  );
}

export default Stars;