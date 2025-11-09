export default function Input({
  type,
  placeHolder,
}: {
  type: string;
  placeHolder: string;
}) {
  return (
    <div
      className="flex flex-col pl-[1.6rem]
    text-[1.5rem] font-[300]"
    >
      <input type={type} placeholder={placeHolder} className="outline-none" />
    </div>
  );
}
