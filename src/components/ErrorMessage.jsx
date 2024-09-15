function ErrorMessage({ error }) {
  if (!error) return null;
  return <p>{error}</p>;
}

export default ErrorMessage;
