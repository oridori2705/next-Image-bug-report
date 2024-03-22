import Image from "next/image";

export default function ImageTestPage({params}:{params : {image:string}}) {
  const {image} = params;
  console.log("params : "+image)
  const imageSrc= "/worngdata"
  const imageSrc2= "/worngdata2"
  return (
   <div>
    <Image src={imageSrc} alt="" fill/>
    <img src={imageSrc2} alt="" />
   </div>
  );
}

// Connect to localhost:3000/1, refresh, and check the terminal