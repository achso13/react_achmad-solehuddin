import { GrReactjs } from "react-icons/gr";
export default function BrandLogo(props) {
  return (
    <a
      href="/"
      className="flex items-center justify-center text-xl font-medium text-blue-600"
    >
      <GrReactjs />
      <span className="mx-2">{props.children}</span>
    </a>
  );
}
