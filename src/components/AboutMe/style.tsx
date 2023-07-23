import { styled } from "@/styles/stitches.config";
import { Text } from "@/styles/Text";
export const AboutMeSection = styled("section", {
  background: "$grey0",
  padding: "64px 16px",
  borderRadius: "25px",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutMeTittle = styled(Text, {
  marginBottom: "32px",
});
