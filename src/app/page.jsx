import Image from "next/image";
import Bannar from "@/Components/home/Bannar";
import Products from "@/Components/home/Products";
export default function Home() {
  return (
    <div className="">
      <section>
        <Bannar></Bannar>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
