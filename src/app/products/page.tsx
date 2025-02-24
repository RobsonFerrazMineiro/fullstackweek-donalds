import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className=" text-red-500">product page</h1>
      <Button className="p-5">FWS 7.0</Button>
      <Input placeholder="bora fehcar esse porojeto?"></Input>
    </div>
  );
};

export default ProductPage;
