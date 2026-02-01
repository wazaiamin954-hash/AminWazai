import { ContenctPage } from "@/components/contect/contenct";
import HomePage from "@/components/homepage/homem";
import { ProjectPage } from "@/components/project/project";
import { SkillPage } from "@/components/skills/skill";
export default function Home() {
  return (
    <div className="pt-11">
      <HomePage />

      <SkillPage />
      <ProjectPage />
      <ContenctPage />
    </div>
  );
}
