export default function BookmarkController() {
  return (
    <div
      className="w-[3.2rem] h-[3.2rem] bg-[#10141e]/50
    flex items-center justify-center
    absolute top-0 right-0 m-[0.8rem] rounded-full
    cursor-pointer"
    >
      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="#FFF"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
