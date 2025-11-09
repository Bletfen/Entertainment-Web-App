export default function Input({
  type,
  placeHolder,
  value,
  onChange,
  error,
}: {
  type: string;
  placeHolder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}) {
  return (
    <div className="flex flex-col gap-[1.7rem] group">
      <div
        className="flex flex-col pl-[1.6rem]
    text-[1.5rem] font-[300]"
      >
        <input
          type={type}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className="outline-none group"
        />
        {error && (
          <p className="text-[1.3rem] text-[#fc4747] font-[300]">{error}</p>
        )}
      </div>
      <div
        className={`w-full h-px group-focus-within:bg-white ${
          !error ? "bg-[#5a698f]" : "bg-[#fc4747]"
        }`}
      ></div>
    </div>
  );
}
