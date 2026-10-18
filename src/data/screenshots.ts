import type { ImageMetadata } from "astro";
import type { Project } from "./projects";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{png,jpg,jpeg,webp,gif}",
  { eager: true },
);

export type ResolvedScreenshot = {
  image: ImageMetadata;
  alt: string;
  caption?: string;
};

export function getScreenshots(project: Project): ResolvedScreenshot[] {
  return (project.screenshots ?? []).map((shot) => {
    const mod = files[`/src/assets/projects/${shot.file}`];
    if (!mod) {
      throw new Error(
        `Screenshot "${shot.file}" for project "${project.name}" was not found in src/assets/projects/.`,
      );
    }
    return { image: mod.default, alt: shot.alt, caption: shot.caption };
  });
}

export const hasPreview = (project: Project) =>
  (project.screenshots?.length ?? 0) > 0 || Boolean(project.demoUrl);
