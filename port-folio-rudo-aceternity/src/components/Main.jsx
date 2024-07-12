import Hero from "./Hero"
import Projects from "./Projects"
import TechStack from "./TechStack"
import Education from "./Education"
import Contacts from "./Contacts"
import Footer from "./Footer"
import { ModeToggle } from "./ModeToggle"
import Socials from "./Socials"

export function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Hero />
      <main className="flex-1">
        <Projects />
        <TechStack />
        <Education />
        {/* <Contacts /> */}
      </main>
      <Socials />
      <Footer />
      <div className="fixed bottom-4 right-5 z-30">
        <ModeToggle />
      </div>
    </div>
  );
}




{/* <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="Redux" title="Redux" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" />
                        </div> */}