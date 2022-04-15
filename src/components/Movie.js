function Movie({ coverImg, title, summary, genres }) {
  return (
    <li>
      <h2>{title}</h2>
      <img src={coverImg} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </li>
  );
}

export default Movie;
