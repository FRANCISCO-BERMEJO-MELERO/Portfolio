import IconCloud from "../@/components/magicui/icon-cloud";

const slugs = [
  "javascript",
  "visualstudiocode",
  "java",
  "react",
  "astro",
  "html5",
  "css3",
  "python",
  "git",
  "github",
  "windows",
  "figma",
  "tailwindcss",
  "materializecss",
  "bootstrap",
  "c",
  "mysql",
  "slack",
  "discord",
  ""
];

export function IconCloudDemo() {
  return ( 
    <div className=" flex  w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg  bg-background mx-auto ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
