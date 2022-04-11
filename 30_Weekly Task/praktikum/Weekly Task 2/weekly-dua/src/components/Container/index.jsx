export default function Container(props) {
  return (
    <div className="mx-auto mt-8 max-w-7xl rounded-lg bg-white p-12 text-gray-800">
      {props.children}
    </div>
  );
}
