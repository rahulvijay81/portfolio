import Typewriter from "typewriter-effect";
import { UserData } from "../data/UserData";

function TypewriterText() {
  const { typewriterOptions } = UserData;
  return <Typewriter options={typewriterOptions} />;
}

export default TypewriterText;
