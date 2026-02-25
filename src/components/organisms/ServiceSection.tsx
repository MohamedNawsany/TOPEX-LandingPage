import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function ServiceSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>ServiceSection</Title>
      <Text size="md">
        This section represents the Hero Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Mariam Hagras
      </Text>
    </div>
  );
}
