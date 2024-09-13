import IconCloud from "../@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return ( 
    <div className=" flex  w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg  bg-background mx-auto ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
