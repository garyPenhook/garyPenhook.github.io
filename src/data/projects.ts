export type Project = {
  category: string;
  title: string;
  version: string;
  summary: string;
  tags: string[];
  highlights: string[];
  focus: string[];
  repositoryUrl: string;
  releasesUrl: string;
};

export const avrProjects: Project[] = [
  {
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
