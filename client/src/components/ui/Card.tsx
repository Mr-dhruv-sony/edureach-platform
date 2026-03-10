interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      {children}
    </div>
  );
}