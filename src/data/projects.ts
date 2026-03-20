export type Project = {
  slug: string;
  category: string;
  title: string;
  version: string;
  summary: string;
  tags: string[];
  overview: string[];
  highlights: string[];
  focus: string[];
  repositoryUrl: string;
  releasesUrl: string;
};

export const avrProjects: Project[] = [
  {
    slug: "avr-asm-navigator",
    category: "VS Code Extension",
    title: "AVR ASM Navigator",
    version: "v0.1.6",
    summary:
      "Symbol-aware navigation and completion for Microchip AVR assembly projects in Visual Studio Code, tuned for MPLAB XC8 and DFP-based workflows.",
    tags: [
      "Hover + Definitions",
      "DFP Integration",
      "Workspace Symbols",
      "VSIX Releases",
    ],
    overview: [
      "AVR ASM Navigator is a local Visual Studio Code extension built to make AVR assembly work less brittle and more navigable. It targets real-world Microchip workflows where developers are moving between labels, device symbols, and pack-provided definitions instead of working in a generic text editor.",
      "The extension is optimized for MPLAB XC8 AVR projects and integrates with installed Microchip device-family packs. That lets it surface target-aware information directly in the editor rather than forcing developers to hunt through pack files or project metadata by hand.",
      "It is a tooling project rather than a firmware project: the focus is editor assistance, faster code navigation, and better visibility into assembly-heavy workspaces without trying to replace the existing build and debug toolchain.",
    ],
    highlights: [
      "Supports local labels, .equ/.set symbols, and target-device pack symbols.",
      "Provides go-to-definition, references, outline symbols, and workspace symbol lookup.",
      "Includes AVR mnemonic and symbol completion inside .S and .s files.",
    ],
    focus: [
      "Designed for Microchip MPLAB project metadata and installed AVR DFP packs.",
      "Packaged as a VSIX with local checks and tag-based release automation.",
      "Built to improve editor productivity without replacing the Microchip build toolchain.",
    ],
    repositoryUrl: "https://github.com/garyPenhook/avr-asm-navigator",
    releasesUrl: "https://github.com/garyPenhook/avr-asm-navigator/releases",
  },
];
