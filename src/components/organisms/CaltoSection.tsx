import Text from "../atoms/Text";
import Title from "../atoms/Title";

export default function CaltoSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>CaltoSection</Title>
      <Text size="md">
        This section represents the Hero Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Eslam Mohamed
      </Text>
    </div>
  );
}
