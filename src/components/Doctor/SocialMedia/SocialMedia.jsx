import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

export default function SocialMedia() {
  return (
    <div className=" border mx-6 rounded-md p-6   ">
      <div>
        <Input text="Facebook Url" />
        <Input text="Twitter Url" />
        <Input text="Instagram Url" />
        <Input text="Pinterest Url" />
        <Input text="Linkedin  Url" />
        <Input text="Youtube  Url" />
        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform text-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
