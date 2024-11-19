import { auth } from "@/auth";
import StartupPitchForm from "@/components/StartupPitchForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth;

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Sbmit Your Startup Pitch</h1>
      </section>

      <StartupPitchForm />
    </>
  );
};

export default page;
