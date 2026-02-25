import Title from "../atoms/Title";
import Text from "../atoms/Text";

export default function AboutSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>AboutSection</Title>
      <Text size="md">
        This section represents Some information about the website.
      </Text>
      <Text size="md" className="text-purple-400">
        created by : Nada Wael Abdelfattah
      </Text>
    </div>
  );
}
