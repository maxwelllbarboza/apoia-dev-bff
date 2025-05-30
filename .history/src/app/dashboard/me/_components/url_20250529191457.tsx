export function UrlPreview() {
  return (
    <div>
      <form>
        <div className="flex items-center justify-center w-full">
          <p>http://minha_url.com/creator/fulano-dev</p>
          <input
            type="text"
            className="flex-1 outline-none border h-9 border-gray-300 text-black rounded-md"
          />
        </div>
      </form>
    </div>
  );
}
