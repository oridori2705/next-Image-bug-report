import Image from "next/image";

export default function ImageTestPage({params}:{params : {image:string}}) {
  const {image} = params;
  console.log("params : "+image)
  const imageSrc= "/worngdata"
  return (
   <div><Image src={imageSrc} alt="" fill/></div>
  );
}