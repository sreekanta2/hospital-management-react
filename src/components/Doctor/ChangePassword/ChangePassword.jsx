import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

export default function ChangePassword() {
  return (
    <div className=" border mx-6 rounded-md p-6   ">
      <div>
        <Input text="Old password" />
        <Input text="New password" />
        <Input text="Confirm password" />

        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform text-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
