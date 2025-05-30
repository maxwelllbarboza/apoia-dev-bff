export function UrlPreview() {
  return (
    <form>
      <div className="flex items-center justify-center w-full">
        <p>
            http://minha_url.com/creator/fulano-dev
        </p>
        <input
            type="text"
            className="flex-1 outline-none "
        />
      </div>
    </form>
  );
}
