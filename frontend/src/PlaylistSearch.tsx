function PlaylistSearch(props: any) {
  const setTitle = props.settitle;
  const title = props.title;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTitle(e.target[0].value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">Get Song</button>
      </form>
    </>
  );
}

export default PlaylistSearch;
