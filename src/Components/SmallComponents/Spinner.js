import { Spinner } from "@material-tailwind/react";
 import './Design.css'
export default function SpinnerLoader() {
  return (
    <div className="flex spinner-style   justify-center gap-8 ">
      <Spinner color="green" />
    </div>
  );
}