interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export default function Input({ value, onChange, placeholder }: Props) {

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B1E2B]"
    />
  );
}