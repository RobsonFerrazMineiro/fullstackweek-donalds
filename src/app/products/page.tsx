import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="p-5 text-red-500">product page</h1>
      <Button className="p-5">FWS 7.0</Button>
      <Input placeholder="bora fehcar esse porojeto?"></Input>
    </div>
  );
};

export default ProductPage;
