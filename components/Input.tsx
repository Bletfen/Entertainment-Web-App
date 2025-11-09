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
    <div
      className="flex pl-[1.6rem]
    text-[1.5rem] font-[300]"
    >
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        className="outline-none"
      />
      {error && (
        <p className="text-[1.3rem] text-[#fc4747] font-[300]">{error}</p>
      )}
    </div>
  );
}
